// ─── Coverflow (carrusel con ítem central destacado) ──────────────────────────
// Utilidades compartidas por el carrusel de canciones y el de artistas.
// Inspirado en coverflow clásico: ítem activo grande con borde blanco y sombra;
// vecinos escalados y atenuados; lejanos tenues y recortados en los bordes.

/**
 * Asigna a cada ítem su slot relativo al activo (0 = centro).
 * Los vecinos más cercanos toman ±1, los siguientes ±2... Alternando derecha
 * e izquierda para que la tira siempre se lea simétrica alrededor del centro.
 * @returns {Record<number, number>} mapa índice → offset de slot
 */
export const slotOffsets = (n, active) => {
  if (!n) return {};
  const circular = (i) => Math.min(Math.abs(i - active), n - Math.abs(i - active));
  const others = Array.from({ length: n }, (_, i) => i)
    .filter((i) => i !== active)
    .sort((a, b) => circular(a) - circular(b) || a - b);

  const result = { [active]: 0 };
  let slot = 1;
  for (const i of others) {
    result[i] = slot;
    slot = slot > 0 ? -slot : -slot + 1; // +1, -1, +2, -2, ...
  }
  return result;
};

/**
 * Transformación visual de un ítem según su distancia al centro.
 * @param {number} offset slot del ítem (0 = activo)
 * @param {number} step   separación en px entre centros de ítem adyacentes
 */
export const coverTransform = (offset, step) => {
  const abs = Math.abs(offset);
  return {
    x: offset * step,
    scale: abs === 0 ? 1 : abs === 1 ? 0.84 : abs === 2 ? 0.7 : 0.6,
    dim: abs === 0 ? 0 : abs === 1 ? 0.3 : abs === 2 ? 0.45 : 0.55,
    opacity: abs === 0 ? 1 : abs === 1 ? 1 : abs === 2 ? 0.65 : 0.4,
    zIndex: 10 - abs,
  };
};

// Degradado de bordes: los ítemes extremos se funden con el fondo del card,
// igual que en la referencia (los laterales se desvanecen hacia los costados).
export const coverMaskStyle = {
  maskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
  WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
};
