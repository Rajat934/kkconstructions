# KK Constructions Premium v3

This version follows the supplied visual reference: clean white/ivory layout, orange CTA accents, large architectural photography, serif editorial headings, service icons, process section, client portal CTA and a dark footer.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Before production

Replace the demo contact details and demo photographs. The client and admin pages are UI foundations only; connect authentication/database/storage before using them for real customers.

Recommended free-tier architecture:
- GitHub for source control
- Cloudflare Workers for the Next.js-compatible app deployment
- Supabase for Auth, PostgreSQL and private project-media storage

Logo:
- `public/logo.jpg` is the supplied KK Constructions logo.

## Main routes

/ - homepage
/projects - portfolio
/services - services
/client - client portal UI
/admin - owner dashboard UI
