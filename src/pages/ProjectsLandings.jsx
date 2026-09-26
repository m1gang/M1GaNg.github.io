import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Github, Lock } from "lucide-react";
import { MagicCard } from "../components/MagicCard";
import ImageCarousel from "../components/ImageCarousel";
import TechBadge from "../components/TechBadge";
import { LANDINGS } from "../data/landings";
import { reveal } from "@/lib/motion";

const ProjectsLandings = () => {
  const reduce = useReducedMotion();
  const [activeProject, setActiveProject] = useState(LANDINGS[0].id);

  const projectKeys = LANDINGS.map((project) => project.id);
  const currentProject =
    LANDINGS.find((project) => project.id === activeProject) ?? LANDINGS[0];

  const nextProject = () => {
    const currentIndex = projectKeys.indexOf(currentProject.id);
    const nextIndex = (currentIndex + 1) % projectKeys.length;
    setActiveProject(projectKeys[nextIndex]);
  };

  const prevProject = () => {
    const currentIndex = projectKeys.indexOf(currentProject.id);
    const prevIndex =
      (currentIndex - 1 + projectKeys.length) % projectKeys.length;
    setActiveProject(projectKeys[prevIndex]);
  };

  return (
    <div className="flex-1 w-full max-w-7xl mx-auto p-4 lg:px-10 lg:py-4 flex flex-col gap-6 overflow-y-auto lg:overflow-hidden lg:h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-6 gap-4 min-h-full w-full">
        <motion.div
          {...reveal(reduce, { index: 0 })}
          className="lg:col-span-4 lg:row-span-1"
        >
          <MagicCard className="h-full card-glass p-4 lg:px-6 lg:py-4 bg-[#0a0a0a90] border-white/5 font-roboto transition-colors duration-500 hover:bg-white/[0.02]">
            <div className="flex items-center gap-4 h-full w-full justify-center">
              <div className="p-3 rounded-xl border bg-white/5 border-white/10 transition-colors duration-500 shrink-0 flex items-center justify-center">
                <img
                  src={currentProject.iconSrc}
                  alt={currentProject.title}
                  className="w-10 h-10 object-contain drop-shadow-md"
                />
              </div>

              <h2 className="text-lg md:text-xl font-bold text-white text-center select-none min-w-0">
                {currentProject.title}
              </h2>
            </div>
          </MagicCard>
        </motion.div>

        <motion.div
          {...reveal(reduce, { index: 1 })}
          className="lg:col-span-8 lg:row-span-1"
        >
          <MagicCard className="h-full card-glass p-4 lg:px-6 lg:py-4 bg-[#0a0a0a90] border-white/5 font-roboto">
            <div className="flex items-center h-full">
              <p className="text-xs md:text-sm text-white/70">
                {currentProject.description}
              </p>
            </div>
          </MagicCard>
        </motion.div>

        <motion.div
          {...reveal(reduce, { index: 2 })}
          className="lg:col-span-12 lg:row-span-4"
        >
          <MagicCard className="h-full card-glass p-4 bg-[#0a0a0a90] border-white/5 overflow-hidden group">
            <div className="w-full h-full">
              <ImageCarousel
                images={currentProject.images}
                alt={`${currentProject.title} screenshot`}
                autoPlay={true}
                interval={4000}
                onPrevProject={prevProject}
                onNextProject={nextProject}
              />
            </div>
          </MagicCard>
        </motion.div>

        <motion.div
          {...reveal(reduce, { index: 3 })}
          className="lg:col-span-12 lg:row-span-1"
        >
          <MagicCard className="h-full card-glass p-4 lg:p-6 bg-[#0a0a0a90] border-white/5 font-roboto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 h-full">
              <div className="flex flex-wrap gap-3 items-center justify-center lg:justify-start">
                {currentProject.techs.map(({ name, Icon }) => (
                  <TechBadge key={name} icon={Icon} name={name} />
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-end gap-3">
                <a
                  href={currentProject.deployUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-white/85 transition-colors group"
                >
                  <span>Ver Demo</span>
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {currentProject.repoUrl ? (
                  <a
                    href={currentProject.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-colors group"
                  >
                    <Github className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                    <span className="text-white font-semibold">
                      Ver Repositorio
                    </span>
                  </a>
                ) : (
                  <span className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-lg text-white/50 font-semibold cursor-default">
                    <Lock className="w-5 h-5" />
                    <span>Repositorio privado</span>
                  </span>
                )}
              </div>
            </div>
          </MagicCard>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsLandings;
