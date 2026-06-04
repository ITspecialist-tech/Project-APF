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
  <script>window.CMS_MANUAL_INIT = true;</script>
  <script src="https://unpkg.com/decap-cms@3.4.0/dist/decap-cms.js"></script>
  <script>
    (function () {
      var cmsConfig = ${configJson};

      function boot() {
        if (window.__NUSRL_CMS_READY__) return;
        if (!window.CMS) {
          document.getElementById("cms-loading").textContent =
            "Failed to load CMS. Please refresh the page.";
          return;
        }
        window.__NUSRL_CMS_READY__ = true;
        var loading = document.getElementById("cms-loading");
        if (loading) loading.remove();
        window.CMS.init({
          load_config_file: false,
          config: cmsConfig
        });
      }

      if (window.CMS) {
        boot();
      } else {
        document.querySelector("script[src*='decap-cms']").addEventListener("load", boot);
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
