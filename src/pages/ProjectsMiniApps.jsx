import { useRef } from "react";
import { motion } from "motion/react";
import { Smartphone, Github } from "lucide-react";
import { MagicCard } from "../components/MagicCard";
import { GlobalSpotlight } from "../components/GlobalSpotlight";
import ImageCarousel from "../components/ImageCarousel";

// Import images
import telephoneImg from "../assets/img/projects/miniapps/miniapps-telephone-number-validator.png";
import cashRegisterImg from "../assets/img/projects/miniapps/miniapps-cash-register.png";
import palindromeImg from "../assets/img/projects/miniapps/miniapps-palindrome-checker.png";
import romanImg from "../assets/img/projects/miniapps/miniapps-roman-numeral-converter.png";
import rpgImg from "../assets/img/projects/miniapps/miniapps-rpg-creatures-search.png";

const ProjectsMiniApps = () => {
  const gridRef = useRef(null);

  const projectImages = [
    telephoneImg,
    cashRegisterImg,
    palindromeImg,
    romanImg,
    rpgImg,
  ];

  return (
    <div className="flex-1 w-full max-w-7xl mx-auto p-4 lg:px-10 lg:py-4 flex flex-col gap-6 overflow-y-auto lg:overflow-hidden font-clash lg:h-screen">
      <GlobalSpotlight gridRef={gridRef} />

      <div
        ref={gridRef}
        className="grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-6 gap-4 h-full w-full"
      >
        {/* Project Header */}
        <MagicCard
          className="lg:col-span-12 lg:row-span-1 card-glass p-6 lg:p-8 bg-gradient-to-br from-[#2a1a4a] to-[#0a0a0a] border-white/5 font-roboto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center gap-4 h-full">
            <div className="p-3 bg-purple-500/20 rounded-xl border border-purple-500/30">
              <Smartphone className="w-8 h-8 text-purple-400" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Telephone validator
              </h2>
              <p className="text-sm md:text-base text-white/70">
                Una aplicación de diario personal desarrollada con React, Vite y
                Firebase. Permite a los usuarios crear, editar y gestionar sus
                notas personales con autenticación segura y almacenamiento en la
                nube.
              </p>
            </div>
          </div>
        </MagicCard>

        {/* Image Carousel */}
        <MagicCard className="lg:col-span-12 lg:row-span-4 card-glass p-4 bg-[#0a0a0a90] border-white/5 overflow-hidden">
          <ImageCarousel images={projectImages} alt="Mini Apps screenshots" />
        </MagicCard>

        {/* Tech Stack & GitHub */}
        <MagicCard className="lg:col-span-12 lg:row-span-1 card-glass p-4 lg:p-6 bg-[#0a0a0a90] border-white/5 font-roboto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 h-full">
            {/* Tech Badges */}
            <div className="flex flex-wrap gap-3 items-center">
              <TechBadge icon="🌐" name="HTML" color="text-orange-500" />
              <TechBadge icon="🎨" name="CSS" color="text-blue-500" />
              <TechBadge icon="💛" name="JS" color="text-yellow-500" />
              <TechBadge icon="📱" name="Responsive" color="text-green-500" />
            </div>

            {/* GitHub Button */}
            <a
              href="https://github.com/M1GaNg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-colors"
            >
              <Github className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">
                Ver Repositorio en Github
              </span>
            </a>
          </div>
        </MagicCard>
      </div>
    </div>
  );
};

// Tech Badge Component
const TechBadge = ({ icon, name, color }) => (
  <div className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-lg">
    <span className="text-lg">{icon}</span>
    <span className={`text-sm font-medium ${color}`}>{name}</span>
  </div>
);

export default ProjectsMiniApps;
