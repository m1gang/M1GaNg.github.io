# MiGaNg — Portafolio v2.0

Portafolio personal de **Miguel Ángel Yapias Veli (MiGaNg)** — Ingeniero de Sistemas y Frontend Developer.

Bento grid con loader de logo metálico (WebGL2), animaciones de entrada/salida entre rutas, datos en caché con TanStack Query (GitHub + Deezer) y diseño oscuro en zinc con glassmorphism.

## Stack

- **React 19** + **Vite 7** + **React Router 7**
- **Tailwind CSS 4** + **Motion** (Framer Motion) + **shadcn/ui** (New York, Zinc)
- **TanStack Query** (caché de datos), **Lucide** (iconos UI), **SVGR** (logos de marca)
- **WebGL2** (shader de pintura metálica en el loader)

## Comandos

```bash
pnpm dev       # servidor de desarrollo
pnpm build     # build de producción
pnpm preview   # preview del build
pnpm lint      # ESLint
```

## Estructura

```
src/
  components/   # UI compartida (TechBadge, MagicCard, GlowButton, carruseles…)
  hooks/        # useDeezer, useGitHubActivity, useMetallicGL, useAutoplay…
  layouts/      # MainLayout (sidebar + outlet con transiciones)
  lib/          # motion (sistema de movimiento), metallic (shaders + parse)
  pages/        # Home, Perfil, Proyectos, Experiencia, Contacto
  data/         # datos por sección (experiencia, proyectos, perfil…)
  styles/       # fuentes y keyframes
```

## Despliegue

GitHub Pages — cada PR a `react-rewrite` se integra y `main` recibe el merge con su tag de versión.
