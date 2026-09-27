import { motion } from "motion/react";
import { SKILLS } from "../../data/home";

// Celda 4 — skills con degradados.
export const SkillsGrid = ({ reveal }) => (
  <motion.div
    {...reveal}
    className="magic-card card-glass min-h-0 overflow-hidden font-roboto
                order-4
                md:col-span-2 md:row-span-2 md:col-start-3 md:row-start-2
                lg:col-span-2 lg:row-span-3 lg:col-start-3 lg:row-start-3"
  >
    <div className="grid grid-cols-2 grid-rows-3 p-4 gap-2 h-full w-full">
      {SKILLS.map(({ Icon, title, subtitle, chip, textGradient }) => (
        <div
          key={subtitle}
          className="flex min-h-0 flex-col items-center justify-center gap-1.5 rounded-2xl text-2xl"
        >
          <div className="flex gap-2 justify-center items-center text-lg leading-snug text-center">
            <Icon width={26} height={26} />
            <span
              style={{
                backgroundImage: textGradient,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              {title}
            </span>
          </div>
          <p className={`text-xs ${chip} rounded px-1.5 py-0.5 font-thin`}>
            {subtitle}
          </p>
        </div>
      ))}
    </div>
  </motion.div>
);

export default SkillsGrid;
