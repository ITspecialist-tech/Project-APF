# CMS GitHub login setup (Vercel)

Decap CMS cannot use Netlify OAuth on Vercel. Use a GitHub OAuth App with these server routes:

- `/api/cms-auth` — starts GitHub login
- `/api/cms-callback` — completes login

## 1. Create GitHub OAuth App

1. GitHub → **Settings** → **Developer settings** → **OAuth Apps** → **New OAuth App**
2. Fill in:
   - **Application name:** `NUSRL CMS`
   - **Homepage URL:** `https://apf.nusrlranchi.ac.in`
   - **Authorization callback URL:** `https://apf.nusrlranchi.ac.in/api/cms-callback`
3. Create the app and copy **Client ID**
4. Generate a **Client secret**

## 2. Add Vercel environment variables

In Vercel → Project → **Settings** → **Environment Variables**, add:

| Name | Value |
|------|--------|
| `GITHUB_CLIENT_ID` | Your OAuth App Client ID |
| `GITHUB_CLIENT_SECRET` | Your OAuth App Client secret |
| `NEXT_PUBLIC_SITE_URL` | `https://apf.nusrlranchi.ac.in` |

Redeploy after saving variables.

## 3. GitHub repository access

- CMS is configured for repo: `ITspecialist-tech/Project-APF`, branch `main`
- Your GitHub account must have **write** access to that repository
- If your code lives in a different repo/branch, update `public/admin/config.yml` → `backend.repo` and `backend.branch`

## 4. Test login

1. Open [https://apf.nusrlranchi.ac.in/admin](https://apf.nusrlranchi.ac.in/admin)
2. Click **Login with GitHub**
3. Approve access — popup should close and CMS dashboard should load

## Local development

```bash
# .env.local
GITHUB_CLIENT_ID=...
GITHUB_CLIENT_SECRET=...
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Create a second OAuth callback for local testing: `http://localhost:3000/api/cms-callback`
