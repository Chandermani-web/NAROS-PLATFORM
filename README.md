# NAROS: B2B company website

Vite + React 19 + React Router + Tailwind CSS v4. White background, no 3D, no animation.

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
```

Routes: `/`, `/services` (+ `/:slug`), `/projects` (+ `/:slug`), `/contact`, `/about`. `vercel.json` rewrites all paths to `index.html`.

Edit content in `src/data/`:
- `site.js`: address, email, phone, industries, engagement models, standards, testimonials
- `services.js`: 6 services with architecture and FAQs (no prices)
- `projects.js`: 9 projects and their architecture flows (add `links: { live, github }` when ready)
- `architecture.js`: the AWS reference diagram

Contact form uses EmailJS (override keys via `.env`, see `.env.example`).
