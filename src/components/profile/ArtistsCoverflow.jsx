import { motion } from "motion/react";
import { MagicCard } from "../MagicCard";

// Card 5 — artistas favoritos en coverflow (mismo lenguaje que SongCarouselCard).
export const ArtistsCoverflow = ({
  artists,
  status,
  activeArtist,
  onSelect,
  base,
  step,
  spring,
  maskStyle,
  offsets,
  getTransform,
}) => (
  <MagicCard className="min-h-[10rem] lg:min-h-0 lg:col-start-9 lg:col-span-4 lg:row-start-2 lg:row-span-2 card-glass p-4 font-roboto flex flex-col justify-center gap-3">
    <div className="relative h-[112px] shrink-0 overflow-hidden" style={maskStyle}>
      {status === "loading"
        ? [0, 1, 2].map((i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-[92px] h-[92px] rounded-xl animate-pulse motion-reduce:animate-none bg-white/10"
              style={{
                marginLeft: -46 + (i - 1) * step,
                marginTop: -46,
                transform: i === 1 ? "scale(1.3)" : "scale(0.85)",
                zIndex: i === 1 ? 10 : 5,
              }}
            />
          ))
        : artists.map((artist, idx) => {
            const offset = offsets[idx] ?? 99;
            const isActive = offset === 0;
            const { x, scale, dim, opacity, zIndex } = getTransform(offset);
            if (Math.abs(offset) > 3) return null;
            const Wrapper = isActive && artist.link ? "a" : "button";

            return (
              <motion.div
                key={artist.name}
                initial={false}
                animate={{ x, scale, opacity }}
                transition={spring}
                style={{ marginLeft: -base / 2, marginTop: -base / 2, zIndex }}
                className="absolute top-1/2 left-1/2"
              >
                <Wrapper
                  {...(Wrapper === "a"
                    ? { href: artist.link, target: "_blank", rel: "noopener noreferrer" }
                    : { type: "button", onClick: () => onSelect(idx) })}
                  aria-label={isActive ? `Abrir a ${artist.name} en Deezer` : `Ver ${artist.name}`}
                  className={`group block relative w-[92px] h-[92px] rounded-xl overflow-hidden bg-white/5 transition-shadow ${
                    isActive
                      ? "border-[3px] border-white shadow-[0_18px_36px_-10px_rgba(0,0,0,0.8)]"
                      : "border border-white/10 hover:border-white/30"
                  }`}
                >
                  {artist.picture ? (
                    <img
                      src={artist.picture}
                      alt={`Foto de ${artist.name}`}
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-white/40 text-lg font-bold">
                      {artist.name.charAt(0)}
                    </div>
                  )}
                  <span
                    className="absolute inset-0 bg-black pointer-events-none"
                    style={{ opacity: dim }}
                  />
                  {isActive && (
                    <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent px-1 pb-1 pt-3 text-center text-[9px] font-semibold text-white leading-tight line-clamp-1 pointer-events-none">
                      {artist.name}
                    </span>
                  )}
                </Wrapper>
              </motion.div>
            );
          })}
    </div>

    {/* Nombre del artista activo + contador (bajo la tira) */}
    <div className="flex shrink-0 items-center justify-between gap-2 border-t border-white/10 pt-2 text-[11px]">
      <span className="text-white/70 font-medium truncate">
        {status === "loading" ? "Cargando artistas..." : artists[activeArtist]?.name}
      </span>
      <span className="text-white/35 tabular-nums shrink-0">
        {activeArtist + 1} / {artists.length}
      </span>
    </div>
  </MagicCard>
);

export default ArtistsCoverflow;
