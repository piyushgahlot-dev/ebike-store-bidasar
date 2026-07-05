# E-Bike Store Bidasar — Website

Authorized Tunwal E-Motors dealership website. React + Vite + Tailwind CSS + Framer Motion.

## Run locally (VS Code)

```bash
npm install
npm run dev
```

Open the printed localhost URL in your browser. Vite will hot-reload as you edit files.

## Build for production

```bash
npm run build
npm run preview   # optional: preview the production build locally
```

The build output goes to `dist/` — that's the folder you deploy to Vercel/Netlify.

## Where to edit things

Everything real-world lives in `src/data/` so you never have to touch component code
for content changes:

| File | What it controls |
|---|---|
| `src/data/business.js` | Address, phone, WhatsApp, email, hours, social links, finance partner. **Also where you plug in real logo/photo file paths** under `assets`. |
| `src/data/models.js` | All 8 Tunwal models: prices, specs, features, badges. |
| `src/data/testimonials.js` | Customer review cards — replace placeholder quotes with real ones anytime. |
| `src/data/faq.js` | FAQ accordion content. |
| `src/data/gallery.js` | Gallery photos — swap `src` URLs for real delivery/showroom photos. |

## Adding real photos/logos

1. Drop image files into `src/assets/` (create the folder if it doesn't exist).
2. Import them at the top of the relevant component, e.g.:
   ```js
   import tunwalLogo from '../assets/tunwal-logo.png'
   ```
3. Update `src/data/business.js` → `assets` object, or swap the placeholder
   `<Zap />` icon blocks in `Hero` (Home.jsx), `ModelCard.jsx`, and `ModelDetail.jsx`
   with an `<img>` tag.

## Domain & hosting

Not configured here — connect your own domain and deploy via Vercel or Netlify
(both auto-detect Vite projects: build command `npm run build`, output dir `dist`).

Before going live, update:
- `index.html` — canonical URL, OG image, Search Console verification tag
- `public/robots.txt` and `public/sitemap.xml` — replace `ebikestorebidasar.com` with your real domain
