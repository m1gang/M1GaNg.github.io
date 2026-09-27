import { motion } from "motion/react";
import GlowButton from "../GlowButton";
import {
  ProjectsButtonIcon,
  ContactButtonIcon,
  CvButtonIcon,
} from "../ButtonIcon";
import { CV_URL } from "../../constants/contact";

// Celda 7 — botones de acción con degradado animado.
export const ActionButtons = ({ reveal }) => (
  <motion.div
    {...reveal}
    className="flex min-h-0 flex-col justify-center items-center px-4 py-3 font-roboto w-full
                order-7
                md:col-span-4 md:row-span-1 md:col-start-1 md:row-start-6
                lg:col-span-2 lg:row-span-1 lg:col-start-5 lg:row-start-5"
  >
    <div className="flex flex-col md:flex-row lg:grid lg:grid-cols-2 w-full gap-2">
      <GlowButton
        to="/proyectos/landings"
        className="w-full md:flex-1 lg:col-span-2"
        glow="linear-gradient(135deg, rgb(122, 105, 249), rgb(242, 99, 120), rgb(245, 131, 63))"
        icon={ProjectsButtonIcon}
        label="Ver proyectos"
      />

      <GlowButton
        to="/contacto"
        className="w-full md:flex-1"
        glow="linear-gradient(135deg, rgb(59, 196, 242), rgb(122, 105, 249), rgb(180, 92, 242))"
        icon={ContactButtonIcon}
        label="Contactar"
      />

      <GlowButton
        href={CV_URL}
        target="_blank"
        rel="noreferrer"
        className="w-full md:flex-1"
        glow="linear-gradient(135deg, rgb(52, 211, 153), rgb(163, 230, 53), rgb(34, 211, 238))"
        icon={CvButtonIcon}
        label="Ver CV"
      />
    </div>
  </motion.div>
);

export default ActionButtons;
