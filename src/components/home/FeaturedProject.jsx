import { motion } from "motion/react";
import { ArrowUpRight, Github } from "lucide-react";
import featuredProjectImg from "../../assets/img/projects/landing/construcciones-sostenibles-1.webp";
import { FEATURED_PROJECT } from "../../data/home";

// Celda 9 — proyecto destacado.
export const FeaturedProject = ({ reveal }) => (
  <motion.div
    {...reveal}
    className="magic-card card-glass flex min-h-0 flex-col justify-center gap-1.5 overflow-hidden px-4 py-3 font-roboto
                order-9
                md:col-span-4 md:col-start-1
                lg:col-span-2 lg:row-span-1 lg:col-start-5 lg:row-start-6"
  >
    <div className="flex min-h-0 flex-1 items-center gap-3">
      <img
        src={featuredProjectImg}
        alt="Vista previa de la landing page Construcciones Sostenibles"
        className="w-24 shrink-0 self-stretch rounded-lg border border-white/10 object-cover object-top"
      />
      <span className="flex min-w-0 flex-1 flex-col justify-center gap-0.5">
        <span className="px-1 text-[13px] font-medium leading-tight text-white/55">
          Último proyecto
        </span>
        <span className="truncate px-1 text-lg font-semibold leading-tight tracking-tight text-white">
          {FEATURED_PROJECT.name}
        </span>
        <span className="truncate px-1 text-[13px] leading-snug text-white/70">
          {FEATURED_PROJECT.tagline}
        </span>
      </span>
      <span className="flex shrink-0 flex-col items-center gap-1.5">
        <a
          href={FEATURED_PROJECT.demo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Abrir demo de ${FEATURED_PROJECT.name}`}
          className="grid size-8 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors hover:border-white/25 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <ArrowUpRight aria-hidden="true" className="size-4" />
        </a>
        <a
          href={FEATURED_PROJECT.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ver ${FEATURED_PROJECT.name} en GitHub`}
          className="grid size-8 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors hover:border-white/25 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <Github aria-hidden="true" className="size-4" />
        </a>
      </span>
    </div>
  </motion.div>
);

export default FeaturedProject;
