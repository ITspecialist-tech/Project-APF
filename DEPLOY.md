# Deployment guide (Vercel)

## Prerequisites

- GitHub account (employer policy permitting)
- [Vercel](https://vercel.com) account linked to GitHub

## Option A — Vercel Dashboard (recommended)

1. Push this repo to GitHub:
   ```bash
   git remote add origin https://github.com/YOUR_ORG/nusrl-undertrial-cle.git
   git push -u origin master
   ```
2. Go to [vercel.com/new](https://vercel.com/new) → Import the repository.
3. Framework: **Next.js** (auto-detected). Root directory: `.`
4. Environment variable:
   - `NEXT_PUBLIC_SITE_URL` = `https://YOUR-PROJECT.vercel.app` (set after first deploy, then redeploy)
5. Deploy.

## Option B — Vercel CLI

```bash
npm i -g vercel
vercel login
cd C:\Users\hp\Projects\nusrl-undertrial-cle
vercel --prod
```

Set `NEXT_PUBLIC_SITE_URL` in the Vercel project settings after the first deployment.

## Custom domain (apf.nusrlranchi.ac.in)

See **[CUSTOM_DOMAIN.md](./CUSTOM_DOMAIN.md)** for Vercel + DNS + CMS steps.

## Post-deploy

- Share **https://apf.nusrlranchi.ac.in** with NUSRL stakeholders.
- Request listing on [nusrlranchi.ac.in/projects/](https://nusrlranchi.ac.in/projects/).
- Replace placeholder content in `src/content/` with email attachment materials.
- Upload PDFs to `public/documents/` and set `file` paths in `publications.json`.

## Local preview

```bash
npm run dev
```

Production build test:

```bash
npm run build
npm start
```
