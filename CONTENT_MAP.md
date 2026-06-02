# Content mapping (email attachments → site sections)

Use this table when integrating files from `source-materials/`.

| Site section | Content file | Suggested source materials |
|--------------|--------------|----------------------------|
| `#home` Hero | `src/content/site.json` → `tagline` | Project overview brochure |
| `#about` | `site.json` → `about` | VC letter, project background doc |
| `#initiatives` | `site.json` → `initiatives` | Programme descriptions |
| `#activities` | `src/content/activities.json` | Event reports, consultation summaries |
| `#publications` | `src/content/publications.json` + `public/documents/` | PDF reports, brochures |
| `#team` | `site.json` → `team`, `patrons` | Team list, faculty bios |
| `#partners` | `site.json` → `partners` | MoUs, collaborator list |
| `#contact` | `site.json` → `contact` | Official letterhead / contact sheet |

## Reference UI mapping (AJP → NUSRL)

| [accesstojusticeprogram.com](https://accesstojusticeprogram.com/) | This site |
|-------------------------------------------------------------------|-----------|
| Hero + CTAs | `Hero.tsx` |
| Impact stats | Omitted until verified NUSRL data provided |
| About + Article 39A | `AboutSection.tsx` |
| Mission & Values | `MissionValues.tsx` |
| What We Do | `ServiceGrid.tsx` |
| In the News / Past Events | `ActivitiesSection.tsx` + `/activities` |
| Publications | `PublicationsSection.tsx` + `/publications` |
| Team / Patrons | `TeamGrid.tsx` |
| Partners | `PartnersGrid.tsx` |
| Get in Touch | `ContactBlock.tsx` |

## NUSRL main site

- Link: [nusrlranchi.ac.in](https://nusrlranchi.ac.in)
- Projects index: [nusrlranchi.ac.in/projects/](https://nusrlranchi.ac.in/projects/) — request listing after Vercel URL is live
