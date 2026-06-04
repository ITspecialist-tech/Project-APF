import { NextRequest, NextResponse } from "next/server";
import { buildCmsAuthErrorPage, buildCmsAuthSuccessPage, getCmsCallbackUrl } from "@/lib/cms-oauth";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");
  const state = request.nextUrl.searchParams.get("state");
  const savedState = request.cookies.get("cms_oauth_state")?.value;
  const error = request.nextUrl.searchParams.get("error_description") || request.nextUrl.searchParams.get("error");

  if (error) {
    return new NextResponse(buildCmsAuthErrorPage(String(error)), {
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }

  if (!code || !state || !savedState || state !== savedState) {
    return new NextResponse(buildCmsAuthErrorPage("Invalid OAuth state. Please try logging in again."), {
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }

  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return new NextResponse(
      buildCmsAuthErrorPage("GITHUB_CLIENT_ID or GITHUB_CLIENT_SECRET is not configured on the server."),
      { headers: { "Content-Type": "text/html; charset=utf-8" } }
    );
  }

  const tokenResponse = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      code,
      redirect_uri: getCmsCallbackUrl(),
    }),
  });

  const tokenData = (await tokenResponse.json()) as {
    access_token?: string;
    error?: string;
    error_description?: string;
  };

  if (!tokenResponse.ok || !tokenData.access_token) {
    const message = tokenData.error_description || tokenData.error || "GitHub token exchange failed.";
    return new NextResponse(buildCmsAuthErrorPage(message), {
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }

  const response = new NextResponse(buildCmsAuthSuccessPage(tokenData.access_token), {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });

  response.cookies.delete("cms_oauth_state");
  return response;
}
