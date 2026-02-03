import { useRef } from "react";
import { motion } from "motion/react";
import { GraduationCap, BookOpen, Flame, Globe } from "lucide-react";
import { MagicCard } from "../components/MagicCard";
import { GlobalSpotlight } from "../components/GlobalSpotlight";
import uncpLogo from "../assets/img/education/uncp-logo-2.png";
import fisLogo from "../assets/img/education/fis-logo.png";
const ProfileEducation = () => {
  const gridRef = useRef(null);

  return (
    <div className="flex-1 w-full max-w-7xl mx-auto p-4 lg:px-10 lg:py-4 flex flex-col gap-6 overflow-y-auto lg:overflow-hidden font-clash lg:h-screen">
      <GlobalSpotlight gridRef={gridRef} />

      <div
        ref={gridRef}
        className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-5 gap-4 h-full w-full"
      >
        {/* --- Top: Academic Formation (Full Width) --- */}
        <MagicCard
          className="lg:col-span-3 lg:row-span-2 card-glass p-6 lg:p-8 bg-gradient-to-br from-[#111111] to-[#0a1f0a] border-white/5 relative group font-roboto"
          enableBorderGlow={true}
          glowColor="0, 255, 100"
        >
          {/* Subtle Green Glow Background */}
          <div className="absolute top-[-40%] right-[-10%] w-[500px] h-[500px] bg-green-500/10 blur-[120px] rounded-full pointer-events-none group-hover:bg-green-500/15 transition-all duration-1000"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10 w-full h-full">
            {/* Left/Center Info */}
            <div className="lg:col-span-9 flex flex-col items-center justify-center text-center h-full">
              <h2 className="text-lg md:text-2xl font-light tracking-[0.3em] text-[#ffffff90] mb-2 uppercase leading-none">
                Formación Académica
              </h2>
              <h3 className="text-base md:text-xl font-bold text-white mb-4 tracking-tight uppercase max-w-2xl">
                Universidad Nacional del Centro del Perú
              </h3>

              <div className="flex flex-col items-center gap-3">
                <div className="flex items-center gap-3 bg-white/[0.03] px-4 py-2 rounded-xl border border-white/10 shadow-xl">
                  <img
                    src={fisLogo}
                    alt="Sistemas Icon"
                    className="w-6 h-6 object-contain drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]"
                  />
                  <h4 className="text-xs md:text-base font-bold text-white tracking-tight">
                    Facultad de Ingeniería de Sistemas
                  </h4>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-blue-500/10 rounded-lg border border-blue-500/20">
                      <GraduationCap className="text-blue-400 w-4 h-4" />
                    </div>
                    <span className="text-sm md:text-base font-bold text-white/90">
                      Bachiller en Ing. de Sistemas
                    </span>
                  </div>
                  <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-lg text-xs md:text-sm font-black border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.1)] tracking-wider">
                    ( 2018 - 2023 )
                  </span>
                </div>
              </div>
            </div>

            {/* Right Logo (Hombre Pájaro) */}
            <div className="lg:col-span-3 flex justify-center items-center">
              <img
                src={uncpLogo}
                alt="UNCP Hombre Pájaro"
                className="w-full max-w-[120px] lg:max-w-[160px] h-auto object-contain drop-shadow-[0_0_30px_rgba(163,163,163,0.1)] opacity-90"
              />
            </div>
          </div>
        </MagicCard>

        {/* --- Middle Row: Certifications (3 cards) --- */}
        <MagicCard className="lg:col-span-1 lg:row-span-2 card-glass p-6 flex flex-col items-start justify-between bg-[#0a0a0a90] border-white/5 font-roboto">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 w-full text-center mb-2">
            Certificado
          </span>
          <div className="flex flex-col gap-2 flex-1 justify-center">
            <h4 className="text-base md:text-lg font-bold text-white/90 leading-tight">
              Responsive Web Design
            </h4>
            <div className="flex flex-col">
              <span className="text-[#ff4b2b] font-black text-base md:text-lg tracking-widest">
                2024
              </span>
              <p className="text-white/60 text-xs md:text-sm">freeCodeCamp</p>
            </div>
          </div>
          <div className="self-end opacity-80">
            <Flame className="w-10 h-10 md:w-12 md:h-12 text-white" />
          </div>
        </MagicCard>

        <MagicCard className="lg:col-span-1 lg:row-span-2 card-glass p-6 flex flex-col items-start justify-between bg-[#0a0a0a90] border-white/5 font-roboto">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 w-full text-center mb-2">
            Certificado
          </span>
          <div className="flex flex-col gap-2 flex-1 justify-center">
            <h4 className="text-base md:text-lg font-bold text-white/90 leading-tight">
              JavaScript Algorithms and Data Structures
            </h4>
            <div className="flex flex-col">
              <span className="text-[#ff4b2b] font-black text-base md:text-lg tracking-widest">
                2025
              </span>
              <p className="text-white/60 text-xs md:text-sm">freeCodeCamp</p>
            </div>
          </div>
          <div className="self-end opacity-80">
            <Flame className="w-10 h-10 md:w-12 md:h-12 text-white" />
          </div>
        </MagicCard>

        <MagicCard className="lg:col-span-1 lg:row-span-2 card-glass p-6 flex flex-col items-start justify-between bg-[#0a0a0a90] border-white/5 font-roboto">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 w-full text-center mb-2">
            Certificado
          </span>
          <div className="flex flex-col gap-2 flex-1 justify-center">
            <h4 className="text-base md:text-lg font-bold text-white/90 leading-tight">
              Desarrollo Front-End
              <br />
              <span className="text-sm">(Nivel Básico)</span>
            </h4>
            <div className="flex flex-col">
              <span className="text-[#ff4b2b] font-black text-base md:text-lg tracking-widest">
                2025
              </span>
              <p className="text-white/60 text-xs md:text-sm">
                Gobierno del Perú
              </p>
            </div>
          </div>
          <div className="self-end opacity-80">
            <img
              src="/gob-pe-logo.png"
              alt="Gob PE"
              className="w-10 h-auto md:w-12"
            />
          </div>
        </MagicCard>

        {/* --- Bottom Row: Continuous Learning --- */}
        <MagicCard className="lg:col-span-3 lg:row-span-2 card-glass p-6 lg:p-8 bg-[#0a0a0a80] border-white/5 flex items-center justify-center font-roboto">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8 w-full max-w-4xl">
            {/* Icon */}
            <div className="relative flex-shrink-0">
              <Globe
                size={60}
                className="text-white opacity-20 group-hover:opacity-40 transition-all duration-500"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-75">
                <BookOpen size={32} className="text-white" />
              </div>
            </div>

            {/* Text Content */}
            <div className="flex flex-col gap-2 text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold leading-none tracking-tighter text-white/90">
                Aprendizaje continuo
              </h3>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">
                Me mantengo en constante actualización mediante proyectos en
                GitHub, documentación oficial y práctica autodidacta.
                Actualmente estoy fortaleciendo mi nivel en React y explorando
                el uso de frameworks.
              </p>
            </div>
          </div>
        </MagicCard>
      </div>
    </div>
  );
};

export default ProfileEducation;
