# AGENTS.md — MiGaNg Portfolio

## Commands

```bash
pnpm dev       # Vite dev server
pnpm build     # Production build
pnpm preview   # Preview production build
pnpm lint      # ESLint on *.{js,jsx}
```

No test script, no typecheck script.

### Deploy (GitHub Pages via `gh-pages` branch)

Pages publica la rama `gh-pages`, y su contenido es el `dist/` buildeado. **El build debe ejecutarse con el `.env` presente**, porque las variables `VITE_*` se incrustan en el JavaScript al compilar (no se leen en runtime): si el `dist` se construye sin `.env`, en producción `import.meta.env.VITE_WEB3FORMS_ACCESS_KEY` queda `undefined` y el formulario falla con el toast "Formulario sin configurar" aunque en local funcione.

Windows (PowerShell), sin escribir la clave en disco:

```powershell
$env:VITE_WEB3FORMS_ACCESS_KEY = ((Get-Content .env | Select-String '^VITE_WEB3FORMS_ACCESS_KEY=') -split '=',2)[1].Trim()
pnpm build
# verificar antes de subir: la clave debe aparecer en dist/assets/*.js
```

Vite carga `.env` solo, así que `pnpm build` desde la raíz del repo ya la incluye; la inyección manual solo hace falta si el build corre en un entorno sin el archivo.

Luego copiar `dist/*` dentro de un worktree sobre `origin/gh-pages`, commitear como `deploy: <sha de main>` y hacer push a `gh-pages`.

## Stack

React 19 + Vite 7 + Tailwind CSS 4 + React Router 7 + Motion + shadcn/ui (New York, Zinc, no RSC)

## Architecture

- **Entry**: `src/main.jsx` → `App.jsx` (1s loader → `RouterProvider`)
- **Router**: `createBrowserRouter` in `src/routes/routes.jsx` — all routes nested under `MainLayout`
- **Layout**: `MainLayout.jsx` renders Sidebar + SubNavbar + `[[ORCA_RICH_MD:e4a4f6eb18ded0f330614369a93481f9:inline-html:%3COutlet%2F%3E]]`, with `SECTION_TITLES` map for readable section titles
- **URL paths**: all in Spanish (`/inicio/portada`, `/perfil/sobre-mi`, `/perfil/intereses`, `/proyectos/miniapps`, etc.)

## Conventions

- **Alias**: `@/*` → `./src/*` (configured in both `vite.config.js` and `tsconfig.json`). Use it consistently.
- **Icons**: SVGR components via direct `*.svg?react` imports (per-page, for code-splitting) — shared set in `src/components/icons/` (`nav/` outline+fill, `custom/`, `tech/`), page-specific designs in `src/assets/svg/` (e.g. `skills/`, nav `contact*.svg`); nav uses `Outline`/`Fill` pair from `constants/navigation.js` (fill when link active); `[[ORCA_RICH_MD:e4a4f6eb18ded0f330614369a93481f9:inline-html:%3CTechBadge%20icon%3D%7B...%7D%20%2F%3E]]` accepts any SVG component (SVGR or Lucide). Lucide (`lucide-react`) for generic UI icons. No emojis as icons.
- **Badges**: shared `[[ORCA_RICH_MD:e4a4f6eb18ded0f330614369a93481f9:inline-html:%3CTechBadge%20%2F%3E]]` in `src/components/TechBadge.jsx` (sprite `icon` or `lucideIcon`, merged with `cn()`). Do not create local badge components.
- **CSS**: Tailwind v4 (`@import "tailwindcss"`). Glassmorphism card class: `.card-glass`. Custom fonts defined in `src/index.css` via `@theme` (with `font-display: swap`). Global `:focus-visible` ring in base layer.
- **Utils**: `cn()` from `src/lib/utils.ts` (clsx + tailwind-merge) for conditional classes
- **Components**: all `.jsx` (no `.tsx` despite tsconfig existing). ESLint only covers `*.{js,jsx}` files.
- **Images**: webp only under `src/assets/img/` — imported directly (`import img from "../assets/img/foo.webp"`) or via `new URL(..., import.meta.url).href`. Do not add PNG/JPG.

## Gotchas

- `MagicCard.jsx` is a plain `[[ORCA_RICH_MD:e4a4f6eb18ded0f330614369a93481f9:inline-html:%3Cdiv%3E]]` wrapper (no motion/tilt/particles). Do not pass motion props.
- `ImageCarousel.jsx` autoplay respects `prefers-reduced-motion`, pauses on hover/tab-hide; edge nav buttons are always visible on touch (`hover:none`).
- Contact form submits via Web3Forms (free tier): access key in `.env` as `VITE_WEB3FORMS_ACCESS_KEY` (see `.env.example`), honeypot `botcheck` travels empty in the JSON payload. Toasts use Sileo (`<Toaster>` mounted in `App.jsx`, dark defaults via `options`).
- No test framework. No CI workflows detected.

