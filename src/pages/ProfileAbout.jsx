import { useState } from "react";
import { MagicCard } from "../components/MagicCard";
import profile from "../assets/img/about.webp";
import { SongCarouselCard } from "../components/SongCarouselCard";
import { useDeezerArtists } from "../hooks/useDeezer";
import { useCoverflow } from "../hooks/useCoverflow";
import RoleCard from "../components/profile/RoleCard";
import MilestonesTimeline from "../components/profile/MilestonesTimeline";
import ArtistsCoverflow from "../components/profile/ArtistsCoverflow";
import HobbiesGrid from "../components/profile/HobbiesGrid";
import PrinciplesGrid from "../components/profile/PrinciplesGrid";

const ProfileAbout = () => {
  const { artists, status } = useDeezerArtists();
  const [activeArtist, setActiveArtist] = useState(0);
  const { base, step, spring, maskStyle, getOffsets, getTransform } =
    useCoverflow({ base: 92, step: 70 });
  const offsets = getOffsets(artists.length, activeArtist);

  return (
    <div className="flex-1 w-full max-w-7xl mx-auto p-4 lg:px-10 lg:py-4 flex flex-col gap-6 overflow-y-auto lg:h-screen lg:min-h-0 lg:overflow-y-auto font-clash">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 lg:grid-rows-6 gap-4 h-full w-full">
        {/* Card 1 (pos 1): Nombre + Bio — cols 1-6 / rows 1-2 */}
        <MagicCard className="min-h-[10rem] lg:min-h-0 lg:col-start-1 lg:col-span-6 lg:row-start-1 lg:row-span-2 card-glass flex flex-col justify-center p-5 font-roboto gap-2">
          <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
            <h2 className="text-base lg:text-lg font-bold text-white tracking-tight">
              Miguel Ángel Yapias Veli
            </h2>
            <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/10 text-white/80 font-medium tracking-wider uppercase border border-white/10">
              MiGaNg
            </span>
          </div>
          <p className="max-w-[65ch] text-[14px] lg:text-[14.5px] leading-relaxed text-white/75">
            <span className="font-medium text-white">
              Bachiller en Ingeniería de Sistemas con experiencia en desarrollo web Frontend (React, JavaScript, HTML, CSS),
              soporte técnico y operaciones de almacén y logística.
            </span>{" "}
            Me caracterizo por la responsabilidad, la atención al detalle y la capacidad de adaptación. Busco consolidarme
            como Frontend Developer mientras aporto valor en entornos técnicos y operativos.
          </p>
        </MagicCard>

        {/* Pos 3 (cols 7-8 / rows 1-2): Puesto objetivo */}
        <RoleCard />

        {/* Pos 8 (cols 9-12 / row 1): Trayectoria en una línea de tiempo */}
        <MilestonesTimeline />

        {/* Card 2 (pos 2): Foto Central — cols 5-8 / rows 3-4 */}
        <MagicCard className="min-h-[18rem] lg:min-h-0 lg:col-start-5 lg:col-span-4 lg:row-start-3 lg:row-span-2 card-glass p-1.5">
          <img
            src={profile}
            alt="Foto de perfil de Miguel Ángel"
            className="h-full w-full rounded-[19px] object-cover object-center"
            decoding="async"
          />
        </MagicCard>

        {/* Artistas Favoritos (pos 5): coverflow — cols 9-12 / rows 2-3 */}
        <ArtistsCoverflow
          artists={artists}
          status={status}
          activeArtist={activeArtist}
          onSelect={setActiveArtist}
          base={base}
          step={step}
          spring={spring}
          maskStyle={maskStyle}
          offsets={offsets}
          getTransform={getTransform}
        />

        {/* Hobbies (pos 4) — grid 3 columnas con íconos degradados: cols 1-4 / rows 3-4 */}
        <HobbiesGrid />

        {/* Canciones (pos 6) — coverflow protagonista: cols 9-12 / rows 4-6 */}
        <MagicCard className="min-h-[18rem] lg:min-h-0 lg:col-start-9 lg:col-span-4 lg:row-start-4 lg:row-span-3 card-glass p-4">
          <SongCarouselCard />
        </MagicCard>

        {/* Filosofía de Trabajo (pos 7): cols 1-8 / rows 5-6 */}
        <PrinciplesGrid />
      </div>
    </div>
  );
};

export default ProfileAbout;
