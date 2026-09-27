import { motion } from "motion/react";
import MigangIsotipo from "../icons/custom/migang-isotipo.svg?react";
import MigangLogotipo from "../icons/custom/migang-logotipo.svg?react";

// Celda 2 — presentación con isotipo/logotipo y quote.
export const Presentation = ({ reveal }) => (
  <motion.div
    {...reveal}
    className="magic-card card-glass flex min-h-0 flex-col items-center justify-center gap-1 overflow-hidden px-4 py-3 font-roboto
                order-1
                md:col-span-4 md:row-span-1 md:col-start-1 md:row-start-1
                lg:col-span-4 lg:row-span-2 lg:col-start-3 lg:row-start-1"
  >
    <h2 className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-2xl lg:text-3xl">
      Hola soy
      <span className="relative flex items-center gap-2">
        {/* Resplandor pastel: conserva el acento de color del antiguo texto degradado */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -inset-x-6 -inset-y-3 rounded-full bg-[radial-gradient(closest-side,rgba(254,228,230,0.22),rgba(206,251,241,0.12),transparent)] blur-xl"
        />
        <MigangIsotipo
          width={41}
          height={32}
          className="h-8 w-auto lg:h-11"
          fill="white"
          aria-hidden="true"
        />
        <MigangLogotipo
          width={131}
          height={32}
          className="h-8 w-auto lg:h-11"
          fill="white"
          aria-hidden="true"
        />
      </span>
    </h2>
    <h2 className="w-fit inline-block px-3 my-1 bg-white rounded-full font-medium text-black text-[19px]">
      &lt;Ingeniero de Sistemas &amp; Frontend Developer/&gt;
    </h2>
    <p className="max-w-[62ch] text-center text-lg font-thin">
      "Me especializo en construir experiencias digitales que no solo
      funcionan, sino que comunican y fluyen."
    </p>
  </motion.div>
);

export default Presentation;
