import { motion } from "motion/react";
import TechBadge from "../TechBadge";
import { TECH_BADGES } from "../../data/home";

// Celda 5 — badges de tecnologías (componente compartido).
export const TechBadges = ({ reveal }) => (
  <motion.div
    {...reveal}
    className="magic-card card-glass flex min-h-0 flex-col overflow-hidden font-roboto
                order-5
                md:col-span-4 md:row-span-1 md:col-start-1 md:row-start-4
                lg:col-span-2 lg:row-span-2 lg:col-start-5 lg:row-start-3"
  >
    <div className="flex flex-wrap justify-center items-center p-4 grow font-sawbones text-lg gap-2">
      {TECH_BADGES.map(({ Icon, label }) => (
        <TechBadge key={label} name={label} icon={Icon} iconSize={20} />
      ))}
    </div>
  </motion.div>
);

export default TechBadges;
