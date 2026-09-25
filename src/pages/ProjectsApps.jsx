import { useState } from "react";
import { Github } from "lucide-react";
import { MagicCard } from "../components/MagicCard";
import ImageCarousel from "../components/ImageCarousel";
import TechBadge from "../components/TechBadge";
import { MINI_APPS } from "../data/miniapps";
import { REACT_APPS } from "../data/apps-react";
import { TECH_ICONS } from "../data/tech-icons";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  { id: "miniapps", label: "Mini Apps" },
  { id: "react", label: "Apps React" },
];

const CATEGORY_DATA = {
  miniapps: MINI_APPS,
  react: REACT_APPS,
};

const CATEGORY_DEFAULTS = {
  miniapps: "telephone",
  react: "gifs",
};

const ProjectsApps = () => {
  const [category, setCategory] = useState("miniapps");
  const [activeProject, setActiveProject] = useState(
    CATEGORY_DEFAULTS[category],
  );

  const projectsData = CATEGORY_DATA[category];
  const projectKeys = Object.keys(projectsData);
  const currentProject = projectsData[activeProject] ?? projectsData[projectKeys[0]];

  const selectCategory = (nextCategory) => {
    setCategory(nextCategory);
    setActiveProject(CATEGORY_DEFAULTS[nextCategory]);
  };

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
    <div className="flex-1 w-full max-w-7xl mx-auto p-4 lg:px-10 lg:py-4 flex flex-col gap-6 overflow-y-auto lg:min-h-0 lg:overflow-y-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-6 gap-4 min-h-full w-full">
        <MagicCard className="lg:col-span-12 lg:row-span-1 card-glass p-4 bg-[#0a0a0a90] border-white/5 font-roboto">
          <div className="flex items-center justify-center gap-2 h-full">
            {CATEGORIES.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => selectCategory(id)}
                aria-pressed={category === id}
                className={cn(
                  "px-5 py-1.5 rounded-[25px] transition-all duration-300 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
                  category === id
                    ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                    : "text-white/60 hover:text-white hover:bg-white/5",
                )}
              >
                {label}
              </button>
            ))}
          </div>
        </MagicCard>

        <MagicCard className="lg:col-span-4 lg:row-span-1 card-glass p-4 lg:px-6 lg:py-4 bg-[#0a0a0a90] border-white/5 font-roboto transition-colors duration-500 hover:bg-white/[0.02]">
          <div className="flex items-center gap-4 h-full w-full justify-center">
            <div className="p-3 rounded-xl border bg-white/5 border-white/10 transition-colors duration-500 shrink-0 flex items-center justify-center">
              <img
                src={currentProject.iconSrc}
                alt={currentProject.title}
                className="w-10 h-10 object-contain drop-shadow-md"
              />
            </div>

            <h2 className="text-lg md:text-xl font-bold text-white text-center select-none">
              {currentProject.title}
            </h2>
          </div>
        </MagicCard>

        <MagicCard className="lg:col-span-8 lg:row-span-1 card-glass p-4 lg:px-6 lg:py-4 bg-[#0a0a0a90] border-white/5 font-roboto">
          <div className="flex items-center h-full">
            <p className="text-xs md:text-sm text-white/70">
              {currentProject.description}
            </p>
          </div>
        </MagicCard>

        <MagicCard className="lg:col-span-12 lg:row-span-3 card-glass p-4 bg-[#0a0a0a90] border-white/5 overflow-hidden group">
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

        <MagicCard className="lg:col-span-12 lg:row-span-1 card-glass p-4 lg:p-6 bg-[#0a0a0a90] border-white/5 font-roboto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 h-full">
            <div className="flex flex-wrap gap-3 items-center justify-center lg:justify-start">
              <div className="flex flex-wrap gap-3">
                {currentProject.techs.map((name) => (
                  <TechBadge
                    key={name}
                    icon={TECH_ICONS[name]}
                    name={name}
                  />
                ))}
              </div>
            </div>

            {currentProject.repoUrl !== "#" && (
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
            )}
          </div>
        </MagicCard>
      </div>
    </div>
  );
};

export default ProjectsApps;
