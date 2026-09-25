import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Play, Pause, Disc3 } from "lucide-react";
import { useDeezerSongs } from "../hooks/useDeezer";
import { slotOffsets, coverTransform, coverMaskStyle } from "../lib/coverflow";

// El coverflow es el protagonista de la card: las carátulas ocupan la mayor
// parte del espacio y debajo solo quedan dots + título + artista.
const BASE = 180; // lado de la carátula activa en px
const STEP = 122; // separación entre centros de carátulas adyacentes

const Skeleton = ({ className }) => (
  <div className={`animate-pulse bg-white/10 rounded-lg ${className || ""}`} />
);

export const SongCarouselCard = () => {
  const { songs, status } = useDeezerSongs();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(null);
  const reduce = useReducedMotion();
  const song = songs[currentIndex] || songs[0];
  const isLoading = status === "loading";
  const offsets = slotOffsets(songs.length, currentIndex);

  // Al cambiar de canción: parar el preview en curso
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(false);
  }, [currentIndex]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio || !song?.preview) return;
    if (audio.paused) {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const goTo = (index) => {
    const total = songs.length;
    setCurrentIndex(((index % total) + total) % total);
  };

  const spring = reduce
    ? { duration: 0 }
    : { type: "spring", stiffness: 320, damping: 34, mass: 0.8 };

  return (
    <div className="h-full w-full flex flex-col font-roboto select-none gap-2.5">
      {/* Audio nativo (preview Deezer de 30s) */}
      <audio
        ref={audioRef}
        src={song?.preview || undefined}
        onEnded={() => setIsPlaying(false)}
        preload="none"
      />

      {/* ── COVERFLOW: protagonista de la card ──────────────────────────────── */}
      <div
        className="relative flex-1 min-h-[190px] overflow-hidden"
        style={coverMaskStyle}
      >
        {isLoading
          ? [0, 1, 2].map((i) => (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 w-[180px] h-[180px] rounded-3xl animate-pulse bg-white/10"
                style={{
                  marginLeft: -90 + (i - 1) * STEP,
                  marginTop: -90,
                  transform: i === 1 ? "scale(1)" : "scale(0.86)",
                  zIndex: i === 1 ? 10 : 5,
                }}
              />
            ))
          : songs.map((item, idx) => {
              const offset = offsets[idx] ?? 99;
              if (Math.abs(offset) > 2) return null;
              const isActive = offset === 0;
              const { x, scale, dim, opacity, zIndex } = coverTransform(
                offset,
                STEP,
              );

              return (
                <motion.button
                  key={`${item.title}-${idx}`}
                  type="button"
                  initial={false}
                  animate={{ x, scale, opacity }}
                  transition={spring}
                  onClick={() => (isActive ? togglePlay() : goTo(idx))}
                  aria-label={
                    isActive
                      ? `Reproducir o pausar ${item.title}`
                      : `Ver ${item.title}`
                  }
                  className={`group absolute top-1/2 left-1/2 w-[180px] h-[180px] rounded-3xl overflow-hidden bg-black/50 ${
                    isActive
                      ? "border-[3px] border-white shadow-[0_28px_55px_-14px_rgba(0,0,0,0.85)]"
                      : "border border-white/10 hover:border-white/30"
                  }`}
                  style={{
                    marginLeft: -BASE / 2,
                    marginTop: -BASE / 2,
                    zIndex,
                  }}
                >
                  {item.cover ? (
                    <img
                      src={item.cover}
                      alt={`Carátula de ${item.title}`}
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-white/30">
                      <Disc3 size={48} />
                    </div>
                  )}

                  {/* Atenuación de las carátulas laterales */}
                  <span
                    className="absolute inset-0 bg-black pointer-events-none"
                    style={{ opacity: dim }}
                  />

                  {/* Overlay de la carátula activa: título + acción */}
                  {isActive && (
                    <span className="absolute inset-0 flex flex-col items-center justify-end gap-2 bg-gradient-to-t from-black/90 via-black/40 to-transparent px-4 pb-5 text-center pointer-events-none">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-black shadow-lg transition-transform group-hover:scale-105">
                        {isPlaying ? (
                          <Pause size={12} fill="currentColor" />
                        ) : (
                          <Play size={12} fill="currentColor" />
                        )}
                        {isPlaying ? "Pausar" : "Escuchar"}
                      </span>
                    </span>
                  )}
                </motion.button>
              );
            })}
      </div>
      {/* Dots + título/artista (lo único bajo el carrusel) */}
      <div className="flex flex-col items-center gap-1.5 px-2">
        <div className="flex items-center justify-center gap-1.5">
          {songs.map((item, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => goTo(idx)}
              className={`rounded-full transition-all ${
                idx === currentIndex
                  ? "w-5 h-1.5 bg-red-500"
                  : "w-1.5 h-1.5 bg-white/30 hover:bg-white/60"
              }`}
              title={item.title}
              aria-label={`Ir a ${item.title}`}
            />
          ))}
        </div>

        <div className="text-center min-w-0 w-full">
          {isLoading ? (
            <>
              <Skeleton className="h-3.5 w-28 mx-auto mb-1.5" />
              <Skeleton className="h-3 w-20 mx-auto" />
            </>
          ) : (
            <>
              <h4 className="text-sm font-semibold text-white truncate">
                {song?.title}
              </h4>
              <p className="text-xs text-white/55 truncate">{song?.artist}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
