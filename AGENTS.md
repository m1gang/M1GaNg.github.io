# AGENTS.md — MiGaNg Portfolio

## Commands
```bash
npm run dev      # Vite dev server
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # ESLint on *.{js,jsx}
```
No test script, no typecheck script.

## Stack
React 19 + Vite 7 + Tailwind CSS 4 + React Router 7 + Motion (Framer Motion) + GSAP + Three.js + OGL + shadcn/ui (New York, Zinc, no RSC)

## Architecture
- **Entry**: `src/main.jsx` → `App.jsx` (2s loader → `RouterProvider`)
- **Router**: `createBrowserRouter` in `src/routes/routes.jsx` — all routes nested under `MainLayout`
- **Layout**: `MainLayout.jsx` renders Sidebar + SubNavbar + `<Outlet/>`
- **URL paths**: all in Spanish (`/inicio/portada`, `/perfil/sobre-mi`, `/proyectos/miniapps`, etc.)

## Conventions
- **Alias**: `@/*` → `./src/*` (configured in both `vite.config.js` and `tsconfig.json`). Use it consistently.
- **Icons**: SVG sprite at `public/sprite.svg`, rendered via `<Icon name="..." />` from `src/components/Icon.jsx`
- **CSS**: Tailwind v4 (`@import "tailwindcss"`). Glassmorphism card class: `.card-glass`. Custom fonts defined in `src/index.css` via `@theme`.
- **Utils**: `cn()` from `src/lib/utils.ts` (clsx + tailwind-merge) for conditional classes
- **Components**: all `.jsx` (no `.tsx` despite tsconfig existing). ESLint only covers `*.{js,jsx}` files.
- **Images**: Imported directly (`import img from "../assets/img/foo.png"`) or via `new URL(..., import.meta.url).href`

## Dead code (do not use)
- `src/pages/Inicio.jsx` — old landing, not in router
- `src/components/GridSection.jsx` — replaced by `MagicGridSection` / `HomePortada`
- `src/components/MagicBento.jsx` — never imported
- `src/components/AnimatedBackground.jsx`, `GlobalSpotlight.jsx`, `MouseTrail.jsx` — all return null, rendered but inert
- `src/components/AnimatedBackground.css` — unused

## Gotchas
- `MagicCard.jsx` accepts `initial`/`animate`/`transition`/`enableTilt`/etc. props but ignores them all (renders plain `<div>`). Passing motion props has no effect.
- `GlobalSpotlight.jsx` (standalone) returns null. The real implementation is inside `MagicBento.jsx` (which is unused). Spotlight effects on grids do not work.
- Keyframe animations (`border-glow-translate`, `star-rotate`) are defined inside `<style>` in `MagicGridSection.jsx` but referenced in `HomePortada.jsx` — they won't render on that page.
- No test framework. No CI workflows detected.
