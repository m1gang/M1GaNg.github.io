import { useRef } from "react";
import { MapPin, Phone, FileText, Wrench } from "lucide-react";
import uncpLogo from "../assets/img/education/uncp-logo-2.png";

const ExperienceUNCP = () => {
  const gridRef = useRef(null);

  return (
    <div className="flex-1 w-full max-w-7xl mx-auto p-4 lg:px-10 lg:py-4 flex flex-col gap-6 overflow-y-auto lg:overflow-hidden font-clash lg:h-screen">
      <div
        ref={gridRef}
        className="grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-6 gap-4 h-full w-full"
      >
        {/* Top left - Office Info */}
        <div
          className="lg:col-span-7 lg:row-span-2 card-glass p-6 lg:p-8 bg-[#3a0a1f]/40 border-white/5 relative group font-roboto flex items-center hover:bg-[#3a0a1f]/50 transition-colors duration-300"
        >
          <div className="absolute top-[-40%] right-[-10%] w-[500px] h-[500px] bg-pink-500/10 blur-[120px] rounded-full pointer-events-none group-hover:bg-pink-500/15 transition-all duration-1000"></div>

          <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start relative z-10 w-full h-full">
            {/* UNCP Logo */}
            <div className="flex justify-center shrink-0 items-center">
              <div className="w-32 h-32 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20">
                <div className="text-center">
                  <img src={uncpLogo} alt="condisa romero logo" />
                </div>
              </div>
            </div>

            {/* Office Details */}
            <div className="flex flex-col justify-center gap-2 h-full py-2">
              <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-tight">
                UNCP (Oficina de T.I.)
              </h2>
              <div className="flex flex-row gap-4">
                <div className="flex items-center gap-1.5 text-white/70">
                  <MapPin size={14} className="text-pink-400" />
                  <span className="text-sm">Huancayo, Perú</span>
                </div>
                <div className="flex items-center gap-1.5 text-white/70">
                  <Phone size={14} className="text-pink-400" />
                  <span className="text-sm">Presencial</span>
                </div>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-white/90 mt-1">
                Practicante Preprofesional en Informática
              </h3>
              <p className="text-sm text-red-500 font-bold">
                Enero 2022 - Abril 2022
              </p>
            </div>
          </div>
        </div>

        {/* Top Right Card - Office Description */}
        <div className="lg:col-span-5 lg:row-span-2 card-glass p-6 lg:p-8 bg-[#0a0a0a90] border-white/5 font-roboto flex items-center justify-center hover:bg-white/[0.02] transition-colors duration-300">
          <p className="text-sm md:text-base text-white/60 leading-relaxed text-justify">
            La Oficina de Tecnologías de la Información de la Universidad
            Nacional del Centro del Perú es el área responsable de la gestión de
            los sistemas informáticos institucionales. Se encarga del portal web
            institucional, el portal de transparencia, la administración de la
            telefonía VoIP, así como del soporte y mantenimiento de equipos.
          </p>
        </div>

        {/* Middle left - Responsibilities */}
        <div className="lg:col-span-7 lg:row-span-2 card-glass p-6 lg:p-8 bg-[#0a0a0a90] border-white/5 font-roboto flex flex-col justify-center hover:bg-white/[0.02] transition-colors duration-300">
          <div className="flex flex-col gap-5">
            <div className="flex items-start gap-4">
              <div className="mt-1 shrink-0">
                <Phone className="w-5 h-5 text-green-400" />
              </div>
              <p className="text-sm md:text-base text-white/80 leading-relaxed">
                Soporte técnico en telefonía VoIP y mantenimiento de sistemas
                informáticos.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 shrink-0">
                <FileText className="w-5 h-5 text-blue-400" />
              </div>
              <p className="text-sm md:text-base text-white/80 leading-relaxed">
                Apoyo en gestión documental interna, digitalización y
                organización de información.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 shrink-0">
                <Wrench className="w-5 h-5 text-yellow-400" />
              </div>
              <p className="text-sm md:text-base text-white/80 leading-relaxed">
                Mantenimiento preventivo de equipos de cómputo en laboratorios y
                oficinas.
              </p>
            </div>
          </div>
        </div>

        {/* Middle right - Services */}
        <div className="lg:col-span-5 lg:row-span-2 card-glass p-6 lg:p-8 bg-[#0a0a0a90] border-white/5 font-roboto flex items-center justify-center hover:bg-white/[0.02] transition-colors duration-300">
          <div className="flex justify-center w-full">
            <div className="flex flex-col gap-3 justify-center items-center">
              <ServiceBadge
                icon="🟪"
                name="Servicios Web"
                color="text-white/80"
              />
              <ServiceBadge
                icon="�‍💻"
                name="Portal de transparencia"
                color="text-white/80"
              />
              <ServiceBadge
                icon="📞"
                name="Telefonía VoIP"
                color="text-white/80"
              />
              <ServiceBadge
                icon="�"
                name="Soporte técnico"
                color="text-white/80"
              />
            </div>
          </div>
        </div>

        {/* Bottom left - Aprendizajes clave title */}
        <div className="lg:col-span-4 lg:row-span-2 card-glass p-6 lg:p-8 bg-[#0a0a0a80] border-white/5 font-roboto flex items-center justify-center hover:bg-white/[0.02] transition-colors duration-300">
          <div className="flex items-center gap-4">
            <div className="text-4xl text-amber-300">💡</div>
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-tight">
              Aprendizajes
              <br />
              clave
            </h3>
          </div>
        </div>

        {/* Bottom right - Quotes */}
        <div className="lg:col-span-8 lg:row-span-2 card-glass p-6 lg:p-8 bg-[#0a0a0a80] border-white/5 font-roboto flex items-center justify-center hover:bg-white/[0.02] transition-colors duration-300">
          <div className="flex flex-col gap-4 text-center w-full">
            <blockquote className="text-sm md:text-base text-white/80">
              "Fortalecí mi capacidad para desarrollar soluciones web adaptadas
              a necesidades reales."
            </blockquote>
            <blockquote className="text-sm md:text-base text-white/80">
              "Mejoré mis habilidades de soporte técnico y resolución de
              problemas bajo presión."
            </blockquote>
            <blockquote className="text-sm md:text-base text-white/80">
              "Aprendí a integrar diseño y funcionalidad en entornos
              corporativos."
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

// Service Badge Component
const ServiceBadge = ({ icon, name, color }) => (
  <div className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors">
    <span className="text-lg">{icon}</span>
    <span className={`text-sm font-medium ${color}`}>{name}</span>
  </div>
);

export default ExperienceUNCP;
