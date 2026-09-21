import { useRef } from "react";
import {
  Rocket,
  Eye,
  UserPlus,
  Music,
  Gamepad2,
  Palette,
  Dribbble,
} from "lucide-react";
import { MagicCard } from "../components/MagicCard";

const ProfileIntereses = () => {
  const gridRef = useRef(null);

  return (
    <div className="flex-1 w-full max-w-7xl mx-auto p-4 lg:px-10 lg:py-4 flex flex-col gap-6 overflow-y-auto lg:min-h-0 lg:overflow-y-auto font-clash">
      <div
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 lg:grid-rows-6 gap-4 min-h-full w-full"
      >
        {/* --- Header --- */}
        <MagicCard className="md:col-span-2 lg:col-span-12 lg:row-span-1 card-glass p-6 bg-[#0a0a0a80] border-white/5 flex flex-col items-center justify-center text-center gap-1 font-roboto">
          <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
            Intereses
          </h2>
          <p className="text-sm text-white/60">
            Lo que me mueve fuera del código: aprender, cuidar el detalle y
            compartir en comunidad.
          </p>
        </MagicCard>

        {/* --- Values --- */}
        <MagicCard className="lg:col-span-4 lg:row-span-2 card-glass p-6 bg-[#0a0a0a80] border-white/5 flex flex-col gap-2 justify-center items-center text-center font-roboto">
          <div className="flex items-center gap-2">
            <Rocket className="w-5 h-5 text-white" />
            <h3 className="text-base font-bold text-white">
              Crecimiento constante
            </h3>
          </div>
          <p className="text-sm text-white/60 italic leading-snug">
            "Siempre abierto a aprender"
          </p>
        </MagicCard>
        <MagicCard className="lg:col-span-4 lg:row-span-2 card-glass p-6 bg-[#0a0a0a80] border-white/5 flex flex-col gap-2 justify-center items-center text-center font-roboto">
          <div className="flex items-center gap-2">
            <Eye className="w-5 h-5 text-white" />
            <h3 className="text-base font-bold text-white">
              Atención al detalle
            </h3>
          </div>
          <p className="text-sm text-white/60 italic leading-snug">
            "Me gusta que las cosas funcionen y se vean bien"
          </p>
        </MagicCard>
        <MagicCard className="lg:col-span-4 lg:row-span-2 card-glass p-6 bg-[#0a0a0a80] border-white/5 flex flex-col gap-2 justify-center items-center text-center font-roboto">
          <div className="flex items-center gap-2">
            <UserPlus className="w-5 h-5 text-white" />
            <h3 className="text-base font-bold text-white">Comunidad</h3>
          </div>
          <p className="text-sm text-white/60 italic leading-snug">
            "Creo en compartir conocimiento y trabajar en equipo"
          </p>
        </MagicCard>

        {/* --- Hobbies --- */}
        <MagicCard className="md:col-span-1 lg:col-span-3 lg:row-span-3 card-glass p-6 bg-[#0a0a0a80] border-white/5 flex flex-col items-center justify-center gap-3 hover:bg-white/10 transition-colors font-roboto text-center">
          <Music size={30} className="text-white mb-1" />
          <span className="text-sm font-bold tracking-widest text-white uppercase">
            Música
          </span>
          <p className="text-sm text-white/60 leading-snug">
            Me inspira, me despeja y me da creatividad
          </p>
        </MagicCard>
        <MagicCard className="md:col-span-1 lg:col-span-3 lg:row-span-3 card-glass p-6 bg-[#0a0a0a80] border-white/5 flex flex-col items-center justify-center gap-3 hover:bg-white/10 transition-colors font-roboto text-center">
          <Gamepad2 size={30} className="text-white mb-1" />
          <span className="text-sm font-bold tracking-widest text-white uppercase">
            Gaming
          </span>
          <p className="text-sm text-white/60 leading-snug">
            Me apasiona jugar y también analizar los juegos desde lo visual
          </p>
        </MagicCard>
        <MagicCard className="md:col-span-1 lg:col-span-3 lg:row-span-3 card-glass p-6 bg-[#0a0a0a80] border-white/5 flex flex-col items-center justify-center gap-3 hover:bg-white/10 transition-colors font-roboto text-center">
          <Palette size={30} className="text-white mb-1" />
          <span className="text-sm font-bold tracking-widest text-white uppercase">
            Diseño
          </span>
          <p className="text-sm text-white/60 leading-snug">
            Me atrae el aspecto visual de las interfaces
          </p>
        </MagicCard>
        <MagicCard className="md:col-span-1 lg:col-span-3 lg:row-span-3 card-glass p-6 bg-[#0a0a0a80] border-white/5 flex flex-col items-center justify-center gap-3 hover:bg-white/10 transition-colors font-roboto text-center">
          <Dribbble size={30} className="text-white mb-1" />
          <span className="text-sm font-bold tracking-widest text-white uppercase">
            Basketball
          </span>
          <p className="text-sm text-white/60 leading-snug">
            Me enseña disciplina, trabajo en equipo y estrategia
          </p>
        </MagicCard>
      </div>
    </div>
  );
};

export default ProfileIntereses;
