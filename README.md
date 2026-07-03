# Paul's Cafe — Kalamassery

A moody, "Modern Industrial × Old Money" single-page site built with React, TypeScript, Vite, and Tailwind CSS.

## Scaffolding this project from scratch

If you want to recreate this setup yourself rather than using the provided files:

```bash
npm create vite@latest pauls-cafe -- --template react-ts
cd pauls-cafe
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Then replace the generated `tailwind.config.js`, `postcss.config.js`, `src/index.css`, `src/App.tsx`,
and add the `src/components/`, `src/hooks/` files with the versions included in this project
(and optionally `npm install framer-motion` if you want to swap the CSS/IntersectionObserver
reveal animations for Framer Motion ones).

## Running this project

```bash
npm install
npm run dev       # start the dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

## Notes

- **Fonts**: Cormorant Garamond (display) + Montserrat (body), loaded via Google Fonts in `index.html`.
- **Design tokens**: colors, fonts, and letter-spacing live in `tailwind.config.js` under
  `theme.extend` (`espresso`, `charcoal`, `brass`, `cream`, `ember`).
- **Signature motif**: `src/components/BrassSeal.tsx` — a wax-seal-style monogram used once per
  section as the page's one recurring signature element.
- **Scroll reveals**: `src/hooks/useReveal.ts` pairs with the `.reveal` / `.is-visible` classes in
  `src/index.css`. It's a lightweight IntersectionObserver hook (no extra dependency), and it
  respects `prefers-reduced-motion`.
- **Images**: the Menu and Gallery components point at Unsplash's CDN (`images.unsplash.com`) as
  placeholder photography (the old `source.unsplash.com/random` endpoint has been discontinued).
  Swap these `src` values for your own licensed photography before launch.
