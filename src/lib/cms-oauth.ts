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
<p>Login successful. Returning to the CMS…</p>
<script>
  (function () {
    var msg = ${safeMessage};
    if (window.opener) {
      var attempts = 0;
      var timer = setInterval(function () {
        attempts += 1;
        window.opener.postMessage(msg, window.location.origin);
        window.opener.postMessage(msg, "*");

        if (attempts >= 12) {
          clearInterval(timer);
          setTimeout(function () {
            window.close();
            document.body.textContent = "Login successful. You may close this window.";
          }, 250);
        }
      }, 250);
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
<p>Login failed. Returning to the CMS…</p>
<script>
  (function () {
    var err = ${safeError};
    if (window.opener) {
      var msg = "authorization:github:error:" + JSON.stringify({ error: err });
      window.opener.postMessage(msg, window.location.origin);
      window.opener.postMessage(msg, "*");
      setTimeout(function () {
        window.close();
      }, 500);
    } else {
      document.body.textContent = "Login failed: " + err;
    }
  })();
</script>
</body>
</html>`;
}
