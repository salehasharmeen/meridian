# Meridian

A SaaS landing page and an admin dashboard for a fictional revenue-analytics product. Built with Next.js 14 (App Router), React 18 and Tailwind CSS 3. There are no UI or chart libraries; the charts and characters are hand-written SVG.

| Route                 | What it is                                                   |
| --------------------- | ------------------------------------------------------------ |
| `/`                   | Landing page                                                 |
| `/dashboard`          | Overview: stat cards, revenue chart, recent signups          |
| `/dashboard/users`    | User management: search, role/status filters, add/edit/delete |
| `/dashboard/settings` | Profile and notification settings                            |

## Run it locally

You need [Node.js](https://nodejs.org) 18.17 or newer (the LTS release is fine). Check with `node -v`.

```bash
npm install
npm run dev
```

Open <http://localhost:3000>. Stop the server with `Ctrl+C`.

To test the production build before deploying:

```bash
npm run build
npm start
```

The build downloads the two Google fonts once, so it needs an internet connection.

## Deploy to Vercel (free)

1. Create free accounts on [GitHub](https://github.com) and [Vercel](https://vercel.com). Signing up to Vercel with GitHub is the simplest route.
2. Create an empty repository named `meridian` at <https://github.com/new>. Leave every "add a README / .gitignore" option unticked.
3. Push the project from the project folder, replacing `YOUR-USERNAME`:

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/meridian.git
   git push -u origin main
   ```

   `.gitignore` already keeps `node_modules` and `.next` out of the repository. Commit `package-lock.json`; it pins the exact dependency versions.
4. Go to <https://vercel.com/new>, click **Import** next to `meridian`, leave the settings as they are and click **Deploy**. Vercel detects Next.js on its own and no environment variables are needed.
5. After about a minute you get a URL like `meridian-xxxx.vercel.app`. That is the live link to submit.
6. Open the link with the browser console (F12) and click through every page. The console should show no blocked resources.

To update the site later, run `git add .`, `git commit -m "message"` and `git push`. Vercel redeploys automatically.

## Project structure

```
app/                 Routes and layouts only
components/
  art/               SVG characters: Sol (mascot) and Portrait (avatars)
  ui/                Reusable primitives: Button, Card, Field, Modal, Toggle, ...
  charts/            BarChart (SVG, no dependencies)
  landing/           Landing page sections
  dashboard/         Dashboard shell and views
lib/
  content.js         Landing page copy
  mock-data.js       Dashboard seed data
  users-api.js       Mock API: async, validated, in-memory
  validation.js      Form validation shared with the API layer
```

`lib/users-api.js` is the only module that touches data. To use a real backend, replace its method bodies with `fetch()` calls; no component needs to change. Data resets on reload because it lives in memory.

## Design notes

- **Palette:** ink, lime, mint, bone, plus sun and coral as small accents. All colours live in `tailwind.config.js`.
- **Type:** Bricolage Grotesque for headings and DM Sans for text, both loaded through `next/font` and self-hosted, so the browser makes no request to Google.
- **Characters:** Sol is the sun mascot (a meridian is the line the sun crosses at noon). `Portrait` draws a flat avatar from a name, so the same person always gets the same face.
- **Motion:** one entrance sequence in the hero, a slow-turning mascot, bars that grow when the chart loads, and hover and press feedback on interactive elements. Everything stops when the visitor has "reduce motion" enabled.

## Security

- `next.config.js` sets a Content-Security-Policy in production, plus HSTS, `X-Frame-Options`, `nosniff`, `Referrer-Policy`, `Permissions-Policy` and `Cross-Origin-Opener-Policy`. The `X-Powered-By` header is removed.
- All user input is validated in the form and again in the API layer, which whitelists fields, normalises emails and rejects duplicates.
- React escapes everything it renders. There is no `dangerouslySetInnerHTML`, no third-party script and no secret in the client bundle.
- **Limitation:** this is a demo, so the dashboard has no login and the data is fake. `/dashboard` is public and marked `noindex`. A real product would add authentication and enforce permissions on the server.
- **Limitation:** the CSP allows inline scripts because Next.js emits them. Tightening it means nonce-based middleware, which makes every page render dynamically.
