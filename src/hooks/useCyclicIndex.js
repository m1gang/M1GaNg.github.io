import { useState } from "react";

// Navegación cíclica por una lista de keys (proyectos, slides, etc).
export const useCyclicIndex = (keys, initial = 0) => {
  const [index, setIndex] = useState(initial);
  const total = keys.length;

  const goTo = (i) => setIndex(((i % total) + total) % total);
  const goToNext = () => setIndex((prev) => (prev + 1) % total);
  const goToPrevious = () => setIndex((prev) => (prev - 1 + total) % total);

  return { index, key: keys[index], goTo, goToNext, goToPrevious };
};
