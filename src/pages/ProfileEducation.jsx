import { useRef } from "react";
import { GraduationCap, BookOpen, Flame, Globe } from "lucide-react";
import { MagicCard } from "../components/MagicCard";
import uncpLogo from "../assets/img/education/uncp-logo-2.png";
import fisLogo from "../assets/img/education/fis-logo.png";
const ProfileEducation = () => {
  const gridRef = useRef(null);

  return (
    <div className="flex-1 w-full max-w-7xl mx-auto p-4 lg:px-10 lg:py-4 flex flex-col gap-6 overflow-y-auto lg:overflow-hidden font-clash lg:h-screen">


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
          <div className="absolute top-[-40%] right-[-10%] w-[500px] h-[500px] bg-linear-to-br to-green-500/10 from-green-500/10 blur-[120px] rounded-full pointer-events-none group-hover:bg-green-500/15 transition-all duration-1000"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10 w-full h-full">
            {/* Left/Center Info */}
            <div className="lg:col-span-9 flex flex-col items-center justify-center text-center h-full">
              <h2 className="text-lg md:text-2xl font-light tracking-[0.3em] text-[#ffffff90] mb-2 uppercase leading-none">
                Formación Académica
              </h2>
              <h3 className="text-base md:text-xl font-bold text-[#e1b272] mb-4 tracking-wider uppercase max-w-2xl">
                Universidad Nacional del Centro del Perú
              </h3>

              <div className="flex flex-col items-center gap-3">
                <div className="flex items-center gap-3">
                  <img
                    src={fisLogo}
                    alt="Sistemas Icon"
                    className="w-8 h-8 md:w-10 md:h-10 object-contain drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]"
                  />
                  <h4 className="text-sm md:text-lg font-bold text-white tracking-tight">
                    Facultad de Ingeniería de Sistemas
                  </h4>
                </div>

                <div className="flex flex-col items-center gap-2 mt-2">
                  <div className="flex items-center gap-2">
                    <div className="p-1 bg-blue-500/20 rounded">
                      <GraduationCap className="text-blue-400 w-5 h-5" />
                    </div>
                    <span className="text-sm md:text-base font-bold text-white/90">
                      Bachiller en Ing. de Sistemas
                    </span>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <span className="text-[#ff4b2b] text-sm md:text-base font-black tracking-widest mt-1">
                      ( 2018 - 2023 )
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Logo (Hombre Pájaro) */}
            <div className="lg:col-span-3 flex justify-center items-center">
              <img
                src={uncpLogo}
                alt="UNCP LOGO"
                className="w-full max-w-[140px] lg:max-w-[180px] h-auto object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] opacity-100"
              />
            </div>
          </div>
        </MagicCard>

        {/* --- Middle Row: Certifications (3 cards) --- */}
        <MagicCard className="lg:col-span-1 lg:row-span-2 card-glass p-6 lg:p-8 flex flex-col justify-between bg-[#0a0a0a80] border-white/5 font-roboto group text-center lg:text-left">
          <span className="text-sm md:text-base font-light tracking-[0.2em] text-white/60 w-full text-center mb-6">
            CERTIFICADO
          </span>
          <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-4 h-full">
            <div className="flex flex-col gap-1 flex-1 justify-center lg:justify-end items-center lg:items-start text-center lg:text-left">
              <h4 className="text-base md:text-lg font-medium text-white/90 leading-tight">
                Responsive Web
                <br />
                Design
              </h4>
              <div className="flex flex-col mt-4 gap-1">
                <span className="text-[#ff4b2b] font-black text-sm md:text-base tracking-widest">
                  2024
                </span>
                <p className="text-white/60 text-xs md:text-sm">freeCodeCamp</p>
              </div>
            </div>
            <div className="shrink-0">
              <Flame className="w-12 h-12 md:w-16 md:h-16 text-white group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-all duration-300" />
            </div>
          </div>
        </MagicCard>

        <MagicCard className="lg:col-span-1 lg:row-span-2 card-glass p-6 lg:p-8 flex flex-col justify-between bg-[#0a0a0a80] border-white/5 font-roboto group text-center lg:text-left">
          <span className="text-sm md:text-base font-light tracking-[0.2em] text-white/60 w-full text-center mb-6">
            CERTIFICADO
          </span>
          <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-4 h-full">
            <div className="flex flex-col gap-1 flex-1 justify-center lg:justify-end items-center lg:items-start text-center lg:text-left">
              <h4 className="text-base md:text-lg font-medium text-white/90 leading-tight">
                JavaScript Algorithms
                <br />
                and Data Structures
              </h4>
              <div className="flex flex-col mt-4 gap-1">
                <span className="text-[#ff4b2b] font-black text-sm md:text-base tracking-widest">
                  2025
                </span>
                <p className="text-white/60 text-xs md:text-sm">freeCodeCamp</p>
              </div>
            </div>
            <div className="shrink-0">
              <Flame className="w-12 h-12 md:w-16 md:h-16 text-white group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-all duration-300" />
            </div>
          </div>
        </MagicCard>

        <MagicCard className="lg:col-span-1 lg:row-span-2 card-glass p-6 lg:p-8 flex flex-col justify-between bg-[#0a0a0a80] border-white/5 font-roboto group text-center lg:text-left">
          <span className="text-sm md:text-base font-light tracking-[0.2em] text-white/60 w-full text-center mb-6">
            CERTIFICADO
          </span>
          <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-4 h-full">
            <div className="flex flex-col gap-1 flex-1 justify-center lg:justify-end items-center lg:items-start text-center lg:text-left">
              <h4 className="text-base md:text-lg font-medium text-white/90 leading-tight">
                Desarrollo Front-End
                <br />
                <span className="text-sm text-white/70">(Nivel Básico)</span>
              </h4>
              <div className="flex flex-col mt-4 gap-1">
                <span className="text-[#ff4b2b] font-black text-sm md:text-base tracking-widest">
                  2025
                </span>
                <p className="text-white/60 text-xs md:text-sm">
                  Gobierno del Perú
                </p>
              </div>
            </div>
            <div className="shrink-0">
              <img
                src="/gob-pe-logo.png"
                alt="Gob PE"
                className="w-12 h-auto md:w-16 object-contain"
              />
            </div>
          </div>
        </MagicCard>

        {/* --- Bottom Row: Continuous Learning --- */}
        <MagicCard className="lg:col-span-3 lg:row-span-1 card-glass p-4 lg:p-6 bg-[#0a0a0a80] border-white/5 flex items-center justify-center font-roboto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10 w-full max-w-5xl">
            {/* Left: Icon & Title */}
            <div className="flex items-center gap-4 shrink-0">
              <div className="relative">
                <Globe
                  size={50}
                  className="text-white opacity-20 group-hover:opacity-40 transition-all duration-500"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-75">
                  <BookOpen size={24} className="text-white" />
                </div>
              </div>
              <h3 className="text-xl md:text-3xl font-light tracking-tight text-white/90 leading-tight">
                Aprendizaje
                <br />
                continuo
              </h3>
            </div>

            {/* Right: Text Content */}
            <div className="flex-1 text-center lg:text-right border-l-0 lg:border-l border-white/10 lg:pl-10">
              <p className="text-xs md:text-[15px] text-white/70 leading-relaxed font-medium">
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
