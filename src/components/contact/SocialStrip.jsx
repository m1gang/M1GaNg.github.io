import { motion } from "motion/react";
import { ArrowUpRight, FileDown } from "lucide-react";
import { MagicCard } from "../MagicCard";
import { CV_URL, SOCIALS } from "../../constants/contact";

// Tira inferior de Contacto: redes + CV en una sola fila.
export const SocialStrip = ({ rise }) => (
  <motion.div {...rise} className="min-w-0 shrink-0">
    <MagicCard
      aria-label="Redes sociales y currículum"
      className="card-glass px-4 py-3 font-roboto flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 min-w-0"
    >
      <p className="shrink-0 px-1 text-sm font-semibold text-white">
        Redes y CV
        <span className="ml-2 font-normal text-white/60">
          Sígueme o descarga mi experiencia
        </span>
      </p>
      <ul className="flex flex-wrap items-center gap-1.5 min-w-0">
        {SOCIALS.map(({ icon: Icon, label, href }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${label} — abrir perfil en una pestaña nueva`}
              className="group inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-white/75 transition-colors duration-200 hover:border-white/20 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <Icon aria-hidden="true" className="size-4" />
              {label}
              <ArrowUpRight
                aria-hidden="true"
                className="size-3.5 text-white/35 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
              />
            </a>
          </li>
        ))}
        <li>
          <a
            href={CV_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver CV — abrir en una pestaña nueva"
            className="group inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <FileDown aria-hidden="true" className="size-4" />
            Currículum · PDF
            <ArrowUpRight
              aria-hidden="true"
              className="size-3.5 opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </li>
      </ul>
    </MagicCard>
  </motion.div>
);

export default SocialStrip;
