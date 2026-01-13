import { useRef } from "react";
import { motion } from "motion/react";
import { BookOpen, Github } from "lucide-react";
import { MagicCard } from "../components/MagicCard";
import { GlobalSpotlight } from "../components/GlobalSpotlight";
import ImageCarousel from "../components/ImageCarousel";

// Import images
import journalImg1 from "../assets/img/projects/REACT/localhost_3000_ 1.png";
import journalImg2 from "../assets/img/projects/REACT/localhost_3000_marvel (1).png";
import journalImg3 from "../assets/img/projects/REACT/localhost_3000_marvel.png";
import journalImg4 from "../assets/img/projects/REACT/localhost_5174_ (1).png";
import journalImg5 from "../assets/img/projects/REACT/localhost_5174_.png";

const ProjectsReact = () => {
  const gridRef = useRef(null);

  const projectImages = [
    journalImg1,
    journalImg2,
    journalImg3,
    journalImg4,
    journalImg5,
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
          className="lg:col-span-12 lg:row-span-1 card-glass p-6 lg:p-8 bg-gradient-to-br from-[#1a3a2a] to-[#0a0a0a] border-white/5 font-roboto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center gap-4 h-full">
            <div className="p-3 bg-green-500/20 rounded-xl border border-green-500/30">
              <BookOpen className="w-8 h-8 text-green-400" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Journal App
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
          <ImageCarousel images={projectImages} alt="Journal App screenshots" />
        </MagicCard>

        {/* Tech Stack & GitHub */}
        <MagicCard className="lg:col-span-12 lg:row-span-1 card-glass p-4 lg:p-6 bg-[#0a0a0a90] border-white/5 font-roboto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 h-full">
            {/* Tech Badges */}
            <div className="flex flex-wrap gap-3 items-center">
              <TechBadge icon="⚛️" name="React" color="text-cyan-400" />
              <TechBadge icon="⚡" name="Vite" color="text-purple-500" />
              <TechBadge icon="🎨" name="MaterialUI" color="text-blue-500" />
              <TechBadge icon="🔥" name="Firebase" color="text-orange-500" />
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

export default ProjectsReact;
