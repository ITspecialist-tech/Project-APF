import { getSiteUrl } from "@/lib/site-url";

export function getCmsCallbackUrl(): string {
  return `${getSiteUrl()}/api/cms-callback`;
}

export function buildCmsAuthSuccessPage(token: string): string {
  const payload = JSON.stringify({ token, provider: "github" });
  const message = `authorization:github:success:${payload}`;
  const safeMessage = JSON.stringify(message);

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8" /><title>CMS Login</title></head>
<body>
<script>
  (function () {
    var msg = ${safeMessage};
    if (window.opener) {
      window.opener.postMessage(msg, window.location.origin);
      window.close();
    } else {
      document.body.textContent = "Login successful. You may close this window.";
    }
  })();
</script>
</body>
</html>`;
}

export function buildCmsAuthErrorPage(error: string): string {
  const safeError = JSON.stringify(error);

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8" /><title>CMS Login Error</title></head>
<body>
<script>
  (function () {
    var err = ${safeError};
    if (window.opener) {
      window.opener.postMessage("authorization:github:error:" + JSON.stringify({ error: err }), window.location.origin);
      window.close();
    } else {
      document.body.textContent = "Login failed: " + err;
    }
  })();
</script>
</body>
</html>`;
}
