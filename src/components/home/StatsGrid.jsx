import { motion } from "motion/react";
import { STATS } from "../../data/home";

// Celda 3 — estadísticas del bento.
export const StatsGrid = ({ reveal }) => (
  <motion.div
    {...reveal}
    className="magic-card card-glass shadow-lg min-h-0 overflow-hidden p-5 font-roboto
                order-3
                md:col-span-2 md:row-span-1 md:col-start-1 md:row-start-3
                lg:col-span-2 lg:row-span-2 lg:col-start-1 lg:row-start-3"
  >
    <div className="grid grid-cols-2 grid-rows-2 gap-3 h-full w-full">
      {STATS.map(({ value, Icon, label, valueClassName }) => (
        <div
          key={label}
          className="flex min-h-0 flex-col items-center justify-center gap-1.5 px-1 text-center"
        >
          <p className={`${valueClassName} leading-none text-red-600 font-sawbones`}>
            {value}
          </p>
          <span className="flex flex-wrap items-center justify-center gap-1.5 text-lg leading-tight">
            <Icon width={20} height={20} />
            {label}
          </span>
        </div>
      ))}
    </div>
  </motion.div>
);

export default StatsGrid;
