# AGENTS.md — MiGaNg Portfolio

## Commands
```bash
pnpm dev       # Vite dev server
pnpm build     # Production build
pnpm preview   # Preview production build
pnpm lint      # ESLint on *.{js,jsx}
```
No test script, no typecheck script.

## Stack
React 19 + Vite 7 + Tailwind CSS 4 + React Router 7 + Motion + shadcn/ui (New York, Zinc, no RSC)

## Architecture
- **Entry**: `src/main.jsx` → `App.jsx` (1s loader → `RouterProvider`)
- **Router**: `createBrowserRouter` in `src/routes/routes.jsx` — all routes nested under `MainLayout`
- **Layout**: `MainLayout.jsx` renders Sidebar + SubNavbar + `<Outlet/>`, with `SECTION_TITLES` map for readable section titles
- **URL paths**: all in Spanish (`/inicio/portada`, `/perfil/sobre-mi`, `/perfil/intereses`, `/proyectos/miniapps`, etc.)

## Conventions
- **Alias**: `@/*` → `./src/*` (configured in both `vite.config.js` and `tsconfig.json`). Use it consistently.
- **Icons**: mixed system — Lucide (`lucide-react`) for UI icons, SVG sprite at `public/sprite.svg` via `<Icon name="..." />` for tech logos. No emojis as icons.
- **Badges**: shared `<TechBadge />` in `src/components/TechBadge.jsx` (sprite `icon` or `lucideIcon`, merged with `cn()`). Do not create local badge components.
- **CSS**: Tailwind v4 (`@import "tailwindcss"`). Glassmorphism card class: `.card-glass`. Custom fonts defined in `src/index.css` via `@theme` (with `font-display: swap`). Global `:focus-visible` ring in base layer.
- **Utils**: `cn()` from `src/lib/utils.ts` (clsx + tailwind-merge) for conditional classes
- **Components**: all `.jsx` (no `.tsx` despite tsconfig existing). ESLint only covers `*.{js,jsx}` files.
- **Images**: webp only under `src/assets/img/` — imported directly (`import img from "../assets/img/foo.webp"`) or via `new URL(..., import.meta.url).href`. Do not add PNG/JPG.

## Gotchas
- `MagicCard.jsx` is a plain `<div>` wrapper (no motion/tilt/particles). Do not pass motion props.
- `ImageCarousel.jsx` autoplay respects `prefers-reduced-motion`, pauses on hover/tab-hide; edge nav buttons are always visible on touch (`hover:none`).
- Contact form is visual-only (simulated sent state, no backend).
- No test framework. No CI workflows detected.
