# Custom domain: apf.nusrlranchi.ac.in

Host the project site on **https://apf.nusrlranchi.ac.in** (Vercel + NUSRL DNS).

---

## Part 1 — Vercel (your side)

1. Open [Vercel Dashboard](https://vercel.com) → project **nusrl-undertrial-cle**
2. Go to **Settings** → **Domains**
3. Click **Add** and enter: `apf.nusrlranchi.ac.in`
4. Vercel will show the **DNS records** required (usually one of the options below)

### DNS record for NUSRL IT (required)

Domain **apf.nusrlranchi.ac.in** is already added in Vercel.  
NUSRL IT must add this record in the DNS panel (e.g. Cloudflare for `nusrlranchi.ac.in`):

| Type | Name / Host | Value        |
|------|-------------|--------------|
| **A** | `apf`      | `76.76.21.21` |

*(This is Vercel’s recommended record for this project. Confirm in Vercel → Settings → Domains if it changes.)*

5. Wait for DNS propagation (minutes to 48 hours). Vercel will issue **HTTPS** automatically.

6. **Environment variables** (Settings → Environment Variables) — set for **Production**:

| Variable | Value |
|----------|--------|
| `NEXT_PUBLIC_SITE_URL` | `https://apf.nusrlranchi.ac.in` |
| `GITHUB_CLIENT_ID` | (unchanged) |
| `GITHUB_CLIENT_SECRET` | (unchanged) |

7. **Redeploy** after changing env vars (Deployments → ⋯ → Redeploy).

8. Optional: set `apf.nusrlranchi.ac.in` as the **primary** domain and redirect the old `*.vercel.app` URL in Domains settings.

---

## Part 2 — NUSRL IT / DNS admin (share this section)

Please create a DNS record for the university subdomain:

- **Subdomain:** `apf.nusrlranchi.ac.in`
- **Type:** CNAME  
- **Host:** `apf` (or `apf.nusrlranchi.ac.in` depending on your DNS panel)  
- **Target:** `cname.vercel-dns.com` (confirm in Vercel Domains if different)

The website is hosted on Vercel; no server maintenance is required at NUSRL beyond DNS.

After DNS is live, the site will be available at:

**https://apf.nusrlranchi.ac.in**

---

## Part 3 — CMS GitHub login (after domain is live)

Update your **GitHub OAuth App** ([github.com/settings/developers](https://github.com/settings/developers)):

| Field | New value |
|-------|-----------|
| Homepage URL | `https://apf.nusrlranchi.ac.in` |
| Authorization callback URL | `https://apf.nusrlranchi.ac.in/api/cms-callback` |

CMS admin URL: **https://apf.nusrlranchi.ac.in/admin**

---

## Part 4 — Link from main NUSRL website

Ask IT/content team to add a link on [nusrlranchi.ac.in/projects/](https://nusrlranchi.ac.in/projects/) to:

**https://apf.nusrlranchi.ac.in**

---

## Verify

```text
https://apf.nusrlranchi.ac.in          → project homepage
https://apf.nusrlranchi.ac.in/admin    → CMS (after OAuth setup)
https://apf.nusrlranchi.ac.in/sitemap.xml
```

Check DNS: [https://dnschecker.org](https://dnschecker.org) for `apf.nusrlranchi.ac.in` CNAME.

---

## Troubleshooting

| Issue | Action |
|-------|--------|
| Domain shows “Invalid configuration” in Vercel | DNS not propagated or wrong CNAME target |
| SSL pending | Wait up to 24h after DNS is correct |
| CMS login fails after domain change | Update GitHub OAuth callback URL + `NEXT_PUBLIC_SITE_URL` + redeploy |
| Old Vercel URL still opens | Normal until you set primary domain / redirects in Vercel |
