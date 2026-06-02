# NUSRL — Undertrial Prisoners & Continuous Legal Education

Dedicated information website for the project on Undertrial Prisoners and Continuous Legal Education at the National University of Study and Research in Law, Ranchi (NUSRL).

**Design reference:** [Access to Justice Program (NALSAR)](https://accesstojusticeprogram.com/) — adapted for NUSRL branding and content.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

| Path | Purpose |
|------|---------|
| `src/content/site.json` | Main copy: about, mission, team, contact, initiatives |
| `src/content/activities.json` | Activity and event entries |
| `src/content/publications.json` | Publications list (set `file` to `/documents/your.pdf`) |
| `source-materials/` | Raw email attachments (not deployed) |
| `public/documents/` | PDFs served for download |
| `public/images/` | Logos and photos |

## Adding content

### New activity

Edit `src/content/activities.json`:

```json
{
  "id": "unique-slug",
  "title": "Event title",
  "date": "2025-06-15",
  "category": "CLE",
  "summary": "Short description.",
  "venue": "NUSRL, Ranchi"
}
```

### New publication with PDF

1. Copy PDF to `public/documents/my-report.pdf`
2. Edit `src/content/publications.json` and set `"file": "/documents/my-report.pdf"`

### Team and contact

Update `src/content/site.json` — `team`, `patrons`, and `contact` sections.

## Deploy to Vercel

1. Push this repository to GitHub (employer policy permitting).
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Next.js** (auto-detected).
4. Add environment variable: `NEXT_PUBLIC_SITE_URL` = your Vercel URL (e.g. `https://nusrl-undertrial-cle.vercel.app`).
5. Deploy. Enable automatic deploys on `main`.

### Link from NUSRL main site

After launch, request IT to add a card on [nusrlranchi.ac.in/projects/](https://nusrlranchi.ac.in/projects/) pointing to this site.

## Build

```bash
npm run build
npm start
```

## Content from email attachments

Place files in `source-materials/documents/` and `source-materials/images/`, then migrate text and assets into `src/content/` and `public/` as described above.

## License

Internal university project — © NUSRL, Ranchi.
