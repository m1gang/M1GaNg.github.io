# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Clientes freelance (primario, confirmado): buscan un ingeniero de sistemas y frontend para proyectos puntuales. Secundarios (evidencia del copy del sitio): reclutadores con vacantes y posibles colaboradores.

## Product Purpose

Portafolio personal de Miguel Ángel (MiGaNg) que exhibe su trabajo y capta trabajo nuevo. Éxito: el visitante envía el formulario de Contacto (confirmado por el usuario).

## Positioning

Ingeniero de Sistemas & Frontend Developer, Perú · GMT-5, remoto o presencial, respuesta en menos de 24 h laborables. Canales directos: email, WhatsApp, teléfono.

## Operating Context

El visitante explora el portafolio (portada, perfil, experiencia, proyectos) y llega a /contacto para escribir. Evalúa el sitio desde escritorio y móvil; el sitio se despliega en GitHub Pages como SPA estática con rutas en español.

## Capabilities and Constraints

- Formulario funcional vía Web3Forms (plan gratis, 250 envíos/mes, honeypot `botcheck`), sin backend propio.
- Toasts con Sileo; email copiable al portapapeles.
- Sitio estático: sin funciones server-side, sin base de datos.
- Motion con `prefers-reduced-motion` respetado en toda la app.
- Contenido y copy en español.

## Brand Commitments

- Nombre e identidad MiGaNg con isotipo y logotipo propios (SVG en `src/assets/icons/custom`).
- Voz en español, directa y profesional.
- Sistema visual incumbentente — zinc monocromo, glass, esmeralda semántico — base del rediseño de Contacto: el brief exige que Contacto se relacione con el resto del sitio.
- Color concentrado (fijado por el usuario en port-10): esmeralda semántico para la acción principal; gradientes de marca solo en íconos/pills de redes sociales (LinkedIn azul, Instagram degradado de marca, WhatsApp verde; GitHub y X en escala zinc por ser marcas monocromáticas). Sin degradado de texto ni color decorativo.

## Evidence on Hand

Proyectos reales con capturas (webp en `src/assets/img`), CV público (cvresume.dev/m1gang), actividad GitHub en portada. No hay testimonios ni clientes que citar: trabajo futuro no debe inventarlos.

## Product Principles

1. El mensaje es la conversión: el formulario protagoniza la página.
2. Confianza por claridad: disponibilidad y tiempos de respuesta visibles, sin promesas infladas.
3. Un solo lenguaje: toda sección del sitio comparte el mismo sistema visual.
4. Contenido real: nada inventado, todo verificable.

## Accessibility & Inclusion

Focus rings visibles, `aria-live` en estados de envío, contraste ≥4.5:1, movimiento reducido respetado, lectura en español (es).
