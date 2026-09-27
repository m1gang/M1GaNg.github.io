import { useReducedMotion } from "../lib/motion";
import {
  coverMaskStyle,
  coverTransform,
  slotOffsets,
} from "../lib/coverflow";

// Coverflow compartido por SongCarouselCard (base 180 / step 122) y ProfileAbout
// (artistas: base 92 / step 70). Centraliza geometría, spring y reduced-motion.
export const useCoverflow = ({ base, step }) => {
  const reduce = useReducedMotion();

  const spring = reduce
    ? { duration: 0 }
    : { type: "spring", stiffness: 320, damping: 34, mass: 0.8 };

  return {
    base,
    step,
    spring,
    maskStyle: coverMaskStyle,
    getOffsets: (count, activeIndex) => slotOffsets(count, activeIndex),
    getTransform: (offset) => coverTransform(offset, step),
  };
};
