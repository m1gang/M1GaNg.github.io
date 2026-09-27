import { useEffect, useState } from "react";
import { useReducedMotion } from "../lib/motion";

// Autoplay de carruseles: avance por intervalo, pausa en hover/focus y al
// ocultar la pestaña. Respeta prefers-reduced-motion (arranca detenido).
export const useAutoplay = ({ count, interval = 3000, autoPlay = true }) => {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(() => autoPlay && !reduce);
  const [pausedByHover, setPausedByHover] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isPlaying && !pausedByHover && count > 1) {
      intervalId = setInterval(() => {
        setIndex((prev) => (prev + 1) % count);
      }, interval);
    }
    return () => clearInterval(intervalId);
  }, [isPlaying, pausedByHover, count, interval]);

  useEffect(() => {
    const onVisibility = () => {
      if (document.hidden) setIsPlaying(false);
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  const goTo = (i) => setIndex(((i % count) + count) % count);
  const goToPrevious = () => setIndex((prev) => (prev - 1 + count) % count);
  const goToNext = () => setIndex((prev) => (prev + 1) % count);
  const togglePlay = () => setIsPlaying((prev) => !prev);

  return {
    index,
    isPlaying,
    pausedByHover,
    setPausedByHover,
    goTo,
    goToPrevious,
    goToNext,
    togglePlay,
  };
};
