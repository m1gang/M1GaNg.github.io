import { useRef } from "react";
import Icon from "../components/Icon";
import {
  Layout,
  MessageSquare,
  Users2,
  RefreshCw,
  Flame,
  Database,
  Box,
  FileText,
  Wrench,
  Settings,
} from "lucide-react";
import { MagicCard } from "../components/MagicCard";

const ProfileSkills = () => {
  const gridRef = useRef(null);

  return (
    <div className="flex-1 w-full max-w-7xl mx-auto p-4 lg:px-10 lg:py-4 flex flex-col gap-6 overflow-y-auto lg:overflow-hidden font-clash lg:h-screen">

      <div
        ref={gridRef}
        className="grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-6 gap-4 h-full w-full"
      >
        {/* --- Top Left: Skill Bars (5 cols) --- */}
        <MagicCard
          className="lg:col-span-5 lg:row-span-3 card-glass p-8 bg-[#0a0a0a90] border-white/5 font-roboto"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 h-full items-center">
            {/* Left Column Skills */}
            <div className="flex flex-col gap-5 w-full">
              <SkillBar label="HTML" percent={95} color="bg-blue-500" />
              <SkillBar label="CSS" percent={85} color="bg-blue-400" />
              <SkillBar label="JS" percent={80} color="bg-yellow-400" />
              <SkillBar label="React" percent={75} color="bg-cyan-400" />
              <SkillBar label="Figma" percent={60} color="bg-orange-500" />
              <SkillBar label="Corel" percent={55} color="bg-green-600" />
            </div>

            {/* Right Column Skills */}
            <div className="flex flex-col gap-5 w-full">
              <SkillBar label="Git" percent={90} color="bg-red-500" />
              <SkillBar label="GitHub" percent={85} color="bg-white/80" />
              <SkillBar
                label="Windows Opt."
                percent={80}
                color="bg-yellow-500"
              />
              <SkillBar label="Hardware" percent={70} color="bg-yellow-600" />
            </div>
          </div>
        </MagicCard>

        {/* --- Top Right: Badges (7 cols) --- */}
        <MagicCard
          className="lg:col-span-7 lg:row-span-3 card-glass p-8 lg:p-10 bg-[#0a0a0a90] border-white/5 flex flex-col gap-4 justify-center font-roboto"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h3 className="text-xl font-bold text-white/50 tracking-[0.2em] uppercase text-center mb-2">
            Frontend & Diseño
          </h3>
          <div className="flex flex-wrap justify-center gap-4 content-center">
            <TechBadge name="HTML" icon="html" />
            <TechBadge name="CSS" icon="css" />
            <TechBadge name="React" icon="react" />
            <TechBadge name="Vite" icon="vitejs" />
            <TechBadge name="PHP" icon="code" />
            <TechBadge name="JS" icon="javascript" />
            <TechBadge name="Tailwind" icon="tailwindcss" />
            <TechBadge name="Corel Draw" icon="design" />
            <TechBadge name="Figma" icon="figma" />
            <TechBadge name="UI / UX" icon="ui-ux" />
            <TechBadge name="Responsive" icon="comunicate" />
          </div>
        </MagicCard>

        {/* --- Bottom Left: Soft Skills (5 cols) --- */}
        <MagicCard
          className="lg:col-span-5 lg:row-span-3 card-glass p-8 grid grid-cols-2 gap-8 bg-linear-to-br from-[#111111] to-[#1a1a0030] relative overflow-hidden group border-white/5 items-center justify-items-center font-roboto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          enableBorderGlow={true}
          glowColor="255, 200, 0"
        >
          <div className="absolute inset-0 bg-yellow-500/5 blur-[90px] pointer-events-none group-hover:bg-yellow-500/10 transition-all duration-700"></div>

          <SoftSkillItem
            icon={<Layout size={40} className="text-blue-400" />}
            title="Planificación"
          />
          <SoftSkillItem
            icon={<MessageSquare size={40} className="text-blue-300" />}
            title="Comunicación"
          />
          <SoftSkillItem
            icon={<Users2 size={40} className="text-purple-400" />}
            title="Trabajo en equipo"
          />
          <SoftSkillItem
            icon={<RefreshCw size={40} className="text-cyan-400" />}
            title="Adaptabilidad"
          />
        </MagicCard>

        {/* --- Bottom Right: Tech Grid (7 cols) --- */}
        <div className="lg:col-span-7 lg:row-span-3 grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
          <TechCategoryCard title="Backend & BD">
            <div className="flex flex-wrap justify-center gap-3">
              <TechBadgeSmall
                name="Firebase"
                lucideIcon={Flame}
                iconColor="text-orange-500"
              />
              <TechBadgeSmall
                name="MySQL"
                lucideIcon={Database}
                iconColor="text-blue-400"
              />
            </div>
          </TechCategoryCard>

          <TechCategoryCard title="Herramientas">
            <div className="flex flex-wrap justify-center gap-3">
              <TechBadgeSmall name="VS Code" icon="code" />
              <TechBadgeSmall
                name="yarn"
                lucideIcon={Box}
                iconColor="text-blue-300"
              />
              <TechBadgeSmall name="Node JS" icon="code" />
              <TechBadgeSmall
                name="npm"
                lucideIcon={Box}
                iconColor="text-red-500"
              />
            </div>
          </TechCategoryCard>

          <TechCategoryCard
            title="Control Versiones"
            className="bg-yellow-900/10"
          >
            <div className="flex flex-wrap justify-center gap-3">
              <TechBadgeSmall name="GitHub" icon="github" />
              <TechBadgeSmall name="Git" icon="git" />
              <TechBadgeSmall
                name="Notion"
                lucideIcon={FileText}
                iconColor="text-white"
              />
            </div>
          </TechCategoryCard>

          <TechCategoryCard title="Soporte & Opt.">
            <div className="flex flex-col gap-3 w-full px-4">
              <TechBadgeSmall
                name="Soporte técnico"
                lucideIcon={Wrench}
                iconColor="text-blue-400"
                width="w-full"
              />
              <TechBadgeSmall
                name="Optimización"
                lucideIcon={Settings}
                iconColor="text-white/80"
                width="w-full"
              />
            </div>
          </TechCategoryCard>
        </div>
      </div>

      {/* Bottom Orange Glow Effect */}
      <div className="fixed bottom-[-100px] left-1/2 -translate-x-1/2 w-[80%] h-[250px] bg-orange-600/20 blur-[130px] rounded-full pointer-events-none -z-10"></div>
    </div>
  );
};

// --- Subcomponents ---

const SkillBar = ({ label, percent, color }) => (
  <div className="flex flex-col gap-1 group w-full">
    <div className="flex justify-between items-center px-1">
      <span
        className="text-[10px] lg:text-[11px] font-bold tracking-wider text-white/50 group-hover:text-white transition-colors uppercase truncate"
        title={label}
      >
        {label}
      </span>
    </div>
    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
      <div
        className={`h-full ${color} shadow-[0_0_8px_rgba(255,255,255,0.2)]`}
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  </div>
);

const TechBadge = ({ name, icon }) => (
  <div className="flex items-center gap-2 px-3 py-1.5 bg-[#1a1a1a] border border-white/5 rounded-[12px] group hover:bg-white/[0.05] transition-all hover:scale-105 hover:border-white/10 shadow-lg">
    <Icon
      name={icon}
      size={20}
      className="opacity-90 group-hover:opacity-100"
    />
    <span className="text-xs font-bold text-white/70 group-hover:text-white">
      {name}
    </span>
  </div>
);

const TechBadgeSmall = ({
  name,
  icon,
  lucideIcon: LucideIcon,
  iconColor = "text-white/80",
  width = "w-auto",
}) => (
  <div
    className={`flex items-center justify-center gap-2 px-3 py-1 bg-[#1f1f1f] border border-white/5 rounded-md hover:bg-white/10 transition-colors ${width}`}
  >
    {LucideIcon ? (
      <LucideIcon size={14} className={`${iconColor} opacity-90`} />
    ) : (
      <Icon name={icon} size={14} className="opacity-80" />
    )}
    <span className="text-[10px] font-bold text-white/60">{name}</span>
  </div>
);

const SoftSkillItem = ({ icon, title }) => (
  <div className="flex flex-col items-center text-center gap-2 group z-10 cursor-default">
    <div className="group-hover:scale-110 transition-transform duration-300 filter drop-shadow-[0_0_15px_rgba(255,255,255,0.05)]">
      {icon}
    </div>
    <span className="text-xs lg:text-sm font-bold text-white/70 leading-tight group-hover:text-white transition-colors">
      {title}
    </span>
  </div>
);

const TechCategoryCard = ({ title, children, className = "" }) => (
  <MagicCard
    className={`card-glass p-4 bg-[#0a0a0a90] border-white/5 flex flex-col gap-3 text-center items-center justify-center h-full ${className}`}
  >
    <h4 className="text-[11px] font-bold text-white/40 tracking-wider uppercase leading-snug max-w-[180px]">
      {title}
    </h4>
    <div className="w-full flex items-center justify-center">{children}</div>
  </MagicCard>
);

export default ProfileSkills;
