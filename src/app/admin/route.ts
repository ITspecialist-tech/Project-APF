import { readFile } from "fs/promises";
import path from "path";
import YAML from "yaml";
import { getSiteUrl } from "@/lib/site-url";

export const runtime = "nodejs";

async function loadCmsConfig() {
  const configPath = path.join(process.cwd(), "public", "admin", "config.yml");
  const configYaml = await readFile(configPath, "utf8");
  return YAML.parse(configYaml);
}

export async function GET() {
  const config = await loadCmsConfig();
  const baseUrl = getSiteUrl();

  config.backend = {
    ...config.backend,
    base_url: baseUrl,
    auth_endpoint: "api/cms-auth",
  };
  delete config.backend.auth_type;

  const configJson = JSON.stringify(config);

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>NUSRL CMS Admin</title>
  <style>
    body { margin: 0; font-family: system-ui, sans-serif; }
    #cms-loading {
      display: flex;
      min-height: 100vh;
      align-items: center;
      justify-content: center;
      color: #1e3a5f;
      font-size: 1.125rem;
    }
  </style>
</head>
<body>
  <div id="cms-loading">Loading content manager…</div>
  <div id="cms-error" style="display:none;max-width:520px;margin:2rem auto;padding:1rem;color:#b91c1c;font-family:system-ui,sans-serif;"></div>
  <script>window.CMS_MANUAL_INIT = true;</script>
  <script src="https://unpkg.com/decap-cms@3.4.0/dist/decap-cms.js" onerror="document.getElementById('cms-loading').style.display='none';document.getElementById('cms-error').style.display='block';document.getElementById('cms-error').textContent='Could not load Decap CMS script. Check your internet connection and refresh.';"></script>
  <script>
    (function () {
      var cmsConfig = ${configJson};

      function showError(msg) {
        var loading = document.getElementById("cms-loading");
        var err = document.getElementById("cms-error");
        if (loading) loading.style.display = "none";
        if (err) {
          err.style.display = "block";
          err.textContent = msg;
        }
      }

      function boot() {
        if (window.__NUSRL_CMS_READY__) return;
        if (!window.CMS) {
          showError("Failed to load CMS. Please hard-refresh (Ctrl+Shift+R).");
          return;
        }
        try {
          window.__NUSRL_CMS_READY__ = true;
          var loading = document.getElementById("cms-loading");
          if (loading) loading.style.display = "none";
          window.CMS.init({
            load_config_file: false,
            config: cmsConfig
          });
        } catch (e) {
          showError("CMS failed to start: " + (e && e.message ? e.message : String(e)));
        }
      }

      setTimeout(function () {
        if (!window.__NUSRL_CMS_READY__ && !window.CMS) {
          showError("CMS script timed out. Please refresh the page.");
        }
      }, 15000);

      if (window.CMS) {
        boot();
      } else {
        var s = document.querySelector("script[src*='decap-cms']");
        if (s) s.addEventListener("load", boot);
      }
    })();
  </script>
</body>
</html>`;

  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store, no-cache, must-revalidate",
    },
  });
}
