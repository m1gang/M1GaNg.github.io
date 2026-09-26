// Sistema de movimiento compartido (PORT-6).
// Reglas de rendimiento: animar solo `transform` y `opacity`, duraciones cortas
// (<=0.55s), stagger <=0.08s y un único nivel de anidación por reveal.
import { useEffect, useState } from "react";

export const EASE = [0.22, 1, 0.36, 1];
export const DURATION = 0.45;
export const STAGGER = 0.07;

const REDUCE_QUERY = "(prefers-reduced-motion: reduce)";

/**
 * `prefers-reduced-motion` en tiempo real.
 *
 * No usamos `useReducedMotion()` de motion/react: ese hook congela en el primer
 * render un valor leído de un singleton a nivel de módulo, así que si ese primer
 * render llega antes de que el media query esté aplicado, la animación monta
 * desactivada (o activada) para siempre. Este hook lee la media query en el
 * inicializador de `useState` (valor correcto desde el primer render) y se
 * suscribe a los cambios.
 */
export const useReducedMotion = () => {
  const [reduce, setReduce] = useState(
    () =>
      typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      window.matchMedia(REDUCE_QUERY).matches,
  );

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
      return undefined;
    }
    const query = window.matchMedia(REDUCE_QUERY);
    const onChange = () => setReduce(query.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return reduce;
};

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
