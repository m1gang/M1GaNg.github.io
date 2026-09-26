// Sistema de movimiento compartido (PORT-6).
// Reglas de rendimiento: animar solo `transform` y `opacity`, duraciones cortas
// (<=0.55s), stagger <=0.08s y un único nivel de anidación por reveal.
// `reduce` viene de `useReducedMotion()` de motion/react (prefers-reduced-motion).

export const EASE = [0.22, 1, 0.36, 1];
export const DURATION = 0.45;
export const STAGGER = 0.07;

/**
 * Reveal de entrada (fade + subida) para un nodo o para un item escalonado.
 * Devuelve props para esparcir en un `motion.*` ({...reveal(reduce, { index })}).
 */
export const reveal = (
  reduce,
  { index = 0, y = 16, duration = DURATION, stagger = STAGGER } = {},
) => {
  if (reduce) return { initial: false };

  return {
    initial: { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration,
      delay: index * stagger,
      ease: EASE,
    },
  };
};

/**
 * Transición de página para el Outlet de MainLayout (entrada + salida).
 * Salida más corta que la entrada para que la navegación no se sienta lenta.
 */
export const pageTransition = (reduce) => {
  if (reduce) return {};

  return {
    initial: { opacity: 0, y: 8 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: EASE },
    },
    exit: {
      opacity: 0,
      y: -8,
      transition: { duration: 0.12, ease: EASE },
    },
  };
};
