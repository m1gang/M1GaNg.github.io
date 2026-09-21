import { useRef } from "react";
import {
  Lightbulb,
  Users,
  Cog,
  Target,
} from "lucide-react";
import { MagicCard } from "../components/MagicCard";
import about from "../assets/img/about.webp";
const ProfileAbout = () => {
  const gridRef = useRef(null);

  return (
    <div className="flex-1 w-full max-w-7xl mx-auto p-4 lg:px-10 lg:py-4 flex flex-col gap-6 overflow-y-auto lg:h-screen lg:min-h-0 lg:overflow-y-auto font-clash">


      {/* Main Grid Container - Full Height on Desktop */}
      <div
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 lg:grid-rows-6 gap-3 h-full w-full"
      >
        {/* --- Top Left: Logo --- */}
        <MagicCard
          className="lg:col-span-4 lg:row-span-2 card-glass p-4 lg:p-8 flex flex-col items-center justify-center bg-[#0a0a0a80] border-white/5 font-roboto"

        >
          <img
            src={about}
            alt="MiGaNg Logo"
            className="w-32 md:w-48 h-auto object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] rounded-xl"
          />
        </MagicCard>

        {/* --- Top Right: Bio --- */}
        <MagicCard
          className="lg:col-span-8 lg:row-span-2 card-glass p-6 lg:p-10 flex items-center bg-[#0a0a0a80] border-white/5 font-roboto"

        >
          <p className="text-sm md:text-base lg:text-[1.1rem] text-white/70 leading-relaxed lg:leading-[1.8] font-medium text-center lg:px-8">
            "Soy Miguel Ángel, aunque muchos me conocen como{" "}
            <span className="text-white font-bold">MiGaNg</span>. Más allá de la
            programación, me apasiona entender cómo la tecnología mejora la vida
            de las personas. Me gusta aprender explorando nuevas herramientas,
            resolver problemas técnicos y también disfrutar de la música como
            una forma de creatividad."
          </p>
        </MagicCard>

        {/* --- Middle: Traits Strip (4 cards) --- */}
        <MagicCard
          className="lg:col-span-3 lg:row-span-1 card-glass p-4 flex flex-col items-center justify-center text-center gap-2 bg-[#0a0a0a80] border-white/5 font-roboto"

        >
          <div className="flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-amber-400 drop-shadow-[0_0_10px_rgba(251,146,60,0.8)]" />
            <h3 className="text-[17px] font-bold text-white">Curioso</h3>
          </div>
          <p className="text-xs text-white/60 leading-snug">
            Siempre busco mejorar mis habilidades y aplicar nuevas tecnologías
          </p>
        </MagicCard>
        <MagicCard
          className="lg:col-span-3 lg:row-span-1 card-glass p-4 flex flex-col items-center justify-center text-center gap-2 bg-[#0a0a0a80] border-white/5 font-roboto"

        >
          <div className="flex items-center gap-2">
            <Users className="w-6 h-6 text-blue-400 drop-shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
            <h3 className="text-[17px] font-bold text-white">Colaborativo</h3>
          </div>
          <p className="text-xs text-white/60 leading-snug">
            Disfruto trabajar en equipo y aprender de otros
          </p>
        </MagicCard>
        <MagicCard
          className="lg:col-span-3 lg:row-span-1 card-glass p-4 flex flex-col items-center justify-center text-center gap-2 bg-[#0a0a0a80] border-white/5 font-roboto"

        >
          <div className="flex items-center gap-2">
            <Cog className="w-6 h-6 text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
            <h3 className="text-[17px] font-bold text-white">Resolutivo</h3>
          </div>
          <p className="text-xs text-white/60 leading-snug">
            Me enfoco en encontrar soluciones prácticas a problemas técnicos
          </p>
        </MagicCard>
        <MagicCard
          className="lg:col-span-3 lg:row-span-1 card-glass p-4 flex flex-col items-center justify-center text-center gap-2 bg-[#0a0a0a80] border-white/5 font-roboto"

        >
          <div className="flex items-center gap-2">
            <Target className="w-6 h-6 text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]" />
            <h3 className="text-[17px] font-bold text-white">Enfocado</h3>
          </div>
          <p className="text-xs text-white/60 leading-snug">
            Planifico mis objetivos y trabajo de forma organizada
          </p>
        </MagicCard>

        {/* --- Bottom: Roadmap (full width) --- */}
        <MagicCard
          className="lg:col-span-12 lg:row-span-3 card-glass p-6 md:p-8 bg-[#0a0a0a80] border-white/5 flex flex-col justify-center gap-6 font-roboto"

        >
          <h3 className="text-lg md:text-xl font-bold text-white tracking-tight text-center">
            Mi roadmap
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative px-2">
            {/* Connecting Line (desktop) */}
            <div className="absolute left-8 right-8 top-[7px] h-[2px] bg-gradient-to-r from-[#00ffd1] via-[#76ff03] to-[#ffc107] hidden md:block"></div>

            <RoadmapItem
              label="ACTUAL"
              bgColor="bg-[#00ffd1]"
              text="Fortalecer mi perfil en desarrollo web con proyectos prácticos."
            />
            <RoadmapItem
              label="PROXIMO PASO"
              bgColor="bg-[#76ff03]"
              text="Incorporarme a un equipo como desarrollador frontend o en soporte IT."
            />
            <RoadmapItem
              label="FUTURO"
              bgColor="bg-[#ffc107]"
              text="Especializarme en tecnologías modernas y contribuir en proyectos escalables."
            />
          </div>
        </MagicCard>
      </div>
    </div>
  );
};

const RoadmapItem = ({ label, bgColor, text }) => (
  <div className="flex flex-col items-center text-center gap-3 z-10">
    <div
      className={`w-[14px] h-[14px] rounded-full ${bgColor} shadow-[0_0_15px_rgba(255,255,255,0.1)]`}
    ></div>
    <span
      className={`${bgColor} text-black text-xs font-black px-3 py-1 rounded w-fit text-center tracking-tighter`}
    >
      {label}
    </span>
    <p className="text-sm font-bold text-white leading-snug max-w-[28ch]">
      {text}
    </p>
  </div>
);

export default ProfileAbout;
