import { NextRequest, NextResponse } from "next/server";
import { getCmsCallbackUrl } from "@/lib/cms-oauth";
import { getSiteUrl } from "@/lib/site-url";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const clientId = process.env.GITHUB_CLIENT_ID;

  if (!clientId) {
    return NextResponse.json(
      {
        error:
          "GITHUB_CLIENT_ID is not set. Add GitHub OAuth credentials in Vercel environment variables.",
      },
      { status: 500 }
    );
  }

  const scope = request.nextUrl.searchParams.get("scope") || "repo";
  const state = crypto.randomUUID();
  const redirectUri = getCmsCallbackUrl();

  const authUrl = new URL("https://github.com/login/oauth/authorize");
  authUrl.searchParams.set("client_id", clientId);
  authUrl.searchParams.set("redirect_uri", redirectUri);
  authUrl.searchParams.set("scope", scope);
  authUrl.searchParams.set("state", state);

  const response = NextResponse.redirect(authUrl.toString());
  response.cookies.set("cms_oauth_state", state, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 600,
    path: "/",
  });

  return response;
}

// Health check for CMS auth setup
export async function HEAD() {
  return new Response(null, {
    status: process.env.GITHUB_CLIENT_ID ? 200 : 503,
    headers: { "X-Site-Url": getSiteUrl() },
  });
}
