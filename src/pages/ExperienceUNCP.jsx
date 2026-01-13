import { useRef } from "react";
import { motion } from "motion/react";
import { MapPin, Phone, FileText, Wrench } from "lucide-react";
import { MagicCard } from "../components/MagicCard";
import { GlobalSpotlight } from "../components/GlobalSpotlight";

const ExperienceUNCP = () => {
  const gridRef = useRef(null);

  return (
    <div className="flex-1 w-full max-w-7xl mx-auto p-4 lg:px-10 lg:py-4 flex flex-col gap-6 overflow-y-auto lg:overflow-hidden font-clash lg:h-screen">
      <GlobalSpotlight gridRef={gridRef} />

      <div
        ref={gridRef}
        className="grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-6 gap-4 h-full w-full"
      >
        {/* Header Card - Office Info */}
        <MagicCard
          className="lg:col-span-12 lg:row-span-2 card-glass p-6 lg:p-8 bg-gradient-to-br from-[#3a0a1f] to-[#0a0a0a] border-white/5 relative group font-roboto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="absolute top-[-40%] right-[-10%] w-[500px] h-[500px] bg-pink-500/10 blur-[120px] rounded-full pointer-events-none group-hover:bg-pink-500/15 transition-all duration-1000"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start relative z-10 w-full h-full">
            {/* UNCP Logo */}
            <div className="lg:col-span-2 flex justify-center items-start pt-4">
              <img
                src="/uncp-hombre-pajaro.png"
                alt="UNCP Logo"
                className="w-32 h-auto object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.1)] opacity-90"
              />
            </div>

            {/* Office Details */}
            <div className="lg:col-span-5 flex flex-col justify-start gap-3">
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                UNCP (Oficina de T.I.)
              </h2>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-white/70">
                  <MapPin size={16} className="text-pink-400" />
                  <span className="text-sm">Huancayo, Perú</span>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <Phone size={16} className="text-pink-400" />
                  <span className="text-sm">Presencial</span>
                </div>
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-white/90 mt-2">
                Practicante Preprofesional en Informática
              </h3>

              <p className="text-sm text-red-500 font-bold">
                Enero 2022 - Abril 2022
              </p>
            </div>

            {/* Office Description */}
            <div className="lg:col-span-5 flex items-start justify-center h-full">
              <p className="text-sm md:text-base text-white/60 leading-relaxed text-justify">
                La Oficina de Tecnologías de la Información de la Universidad
                Nacional del Centro del Perú es el área responsable de la
                gestión de los sistemas informáticos institucionales. Se encarga
                del portal web institucional, el portal de transparencia, la
                administración de la telefonía VoIP, así como del soporte y
                mantenimiento de equipos.
              </p>
            </div>
          </div>
        </MagicCard>

        {/* Responsibilities Card */}
        <MagicCard className="lg:col-span-6 lg:row-span-2 card-glass p-6 lg:p-8 bg-[#0a0a0a90] border-white/5 font-roboto">
          <h3 className="text-xl font-bold text-white mb-6 tracking-tight">
            Responsabilidades
          </h3>

          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <div className="mt-1">
                <Phone className="w-5 h-5 text-green-400" />
              </div>
              <p className="text-sm md:text-base text-white/70 leading-relaxed flex-1">
                Soporte técnico en telefonía VoIP y mantenimiento de sistemas
                informáticos.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1">
                <FileText className="w-5 h-5 text-blue-400" />
              </div>
              <p className="text-sm md:text-base text-white/70 leading-relaxed flex-1">
                Apoyo en gestión documental interna, digitalización y
                organización de información.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1">
                <Wrench className="w-5 h-5 text-yellow-400" />
              </div>
              <p className="text-sm md:text-base text-white/70 leading-relaxed flex-1">
                Mantenimiento preventivo de equipos de cómputo en laboratorios y
                oficinas.
              </p>
            </div>
          </div>
        </MagicCard>

        {/* Services Card */}
        <MagicCard className="lg:col-span-6 lg:row-span-2 card-glass p-6 lg:p-8 bg-[#0a0a0a90] border-white/5 font-roboto">
          <h3 className="text-xl font-bold text-white mb-6 tracking-tight">
            Servicios
          </h3>

          <div className="flex flex-wrap gap-3">
            <ServiceBadge
              icon="🌐"
              name="Servicios Web"
              color="text-purple-400"
            />
            <ServiceBadge
              icon="📊"
              name="Portal de transparencia"
              color="text-yellow-500"
            />
            <ServiceBadge
              icon="📞"
              name="Telefonía VoIP"
              color="text-green-400"
            />
            <ServiceBadge
              icon="🛠️"
              name="Soporte técnico"
              color="text-blue-400"
            />
          </div>
        </MagicCard>

        {/* Key Learnings Card */}
        <MagicCard className="lg:col-span-12 lg:row-span-2 card-glass p-6 lg:p-8 bg-[#0a0a0a80] border-white/5 font-roboto">
          <div className="flex items-center gap-3 mb-6">
            <div className="text-3xl">💡</div>
            <h3 className="text-xl font-bold text-white tracking-tight">
              Aprendizajes clave
            </h3>
          </div>

          <div className="flex flex-col gap-4">
            <blockquote className="text-sm md:text-base text-white/70 italic border-l-2 border-white/20 pl-4">
              "Fortalecí mi capacidad para desarrollar soluciones web adaptadas
              a necesidades reales."
            </blockquote>

            <blockquote className="text-sm md:text-base text-white/70 italic border-l-2 border-white/20 pl-4">
              "Mejoré mis habilidades de soporte técnico y resolución de
              problemas bajo presión."
            </blockquote>

            <blockquote className="text-sm md:text-base text-white/70 italic border-l-2 border-white/20 pl-4">
              "Aprendí a integrar diseño y funcionalidad en entornos
              corporativos."
            </blockquote>
          </div>
        </MagicCard>
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
