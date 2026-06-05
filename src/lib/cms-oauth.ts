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
    var sent = false;

    function sendToken(origin) {
      if (sent || !window.opener) return;
      sent = true;
      window.opener.postMessage(msg, origin || "*");
      setTimeout(function () {
        window.close();
        document.body.textContent = "Login successful. You may close this window.";
      }, 300);
    }

    if (!window.opener) {
      document.body.textContent = "Login successful. You may close this window.";
      return;
    }

    window.addEventListener("message", function (event) {
      if (event.data === "authorizing:github") {
        sendToken(event.origin);
      }
    }, false);

    window.opener.postMessage("authorizing:github", "*");
    setTimeout(function () {
      sendToken("*");
    }, 3000);
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
    var msg = "authorization:github:error:" + JSON.stringify({ error: err });
    var sent = false;

    function sendError(origin) {
      if (sent || !window.opener) return;
      sent = true;
      window.opener.postMessage(msg, origin || "*");
      setTimeout(function () {
        window.close();
      }, 300);
    }

    if (!window.opener) {
      document.body.textContent = "Login failed: " + err;
      return;
    }

    window.addEventListener("message", function (event) {
      if (event.data === "authorizing:github") {
        sendError(event.origin);
      }
    }, false);

    window.opener.postMessage("authorizing:github", "*");
    setTimeout(function () {
      sendError("*");
    }, 3000);
  })();
</script>
</body>
</html>`;
}
