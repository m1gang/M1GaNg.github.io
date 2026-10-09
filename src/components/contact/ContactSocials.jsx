import { motion } from "motion/react";
import { ArrowUpRight, FileDown, MapPin, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { MagicCard } from "../MagicCard";
import { CV_URL, LOCATION_LABEL, SOCIALS } from "../../constants/contact";

// Gradientes de marca por red (brief del usuario): el color de
// cada logo va con su marca. GitHub y X son marcas
// monocromáticas — escala zinc en vez de color inventado.
const SOCIAL_THEME = {
  GitHub: "from-zinc-500 to-zinc-800 text-white",
  LinkedIn: "from-[#0A66C2] to-[#004182] text-white",
  X: "from-zinc-100 to-zinc-300 text-zinc-950",
  Instagram: "from-[#833AB4] via-[#E1306C] to-[#F77737] text-white",
};

// Redes y CV — tarjeta inferior de la columna lateral (donde
// estaba "Qué pasa después"): pills con degradados de marca, CV
// y el pie con ubicación y promesa de respuesta. Sin scroll
// interno.
export const ContactSocials = ({ rise }) => (
  <motion.section
    {...rise}
    aria-label="Redes sociales y currículum"
    className="flex min-w-0"
  >
    <MagicCard className="card-glass h-full w-full px-4 py-3.5 lg:px-5 font-roboto flex flex-col gap-3">
      {/* Redes con gradientes de marca + CV */}
      <ul className="flex flex-wrap items-center gap-1.5">
        {SOCIALS.map(({ icon: Icon, label, href }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${label}, abrir perfil en una pestaña nueva`}
              className={cn(
                "group inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-gradient-to-br px-3 py-1.5 text-[13px] font-semibold shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
                SOCIAL_THEME[label],
              )}
            >
              <Icon aria-hidden="true" className="size-4" />
              {label}
              <ArrowUpRight
                aria-hidden="true"
                className="size-3.5 opacity-70 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </li>
        ))}
        <li>
          <a
            href={CV_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver CV, abrir en una pestaña nueva"
            className="group inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-gradient-to-br from-white to-zinc-200 px-3 py-1.5 text-[13px] font-bold text-zinc-950 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <FileDown aria-hidden="true" className="size-4" />
            Currículum · PDF
            <ArrowUpRight
              aria-hidden="true"
              className="size-3.5 opacity-60 transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </a>
        </li>
      </ul>

      <div aria-hidden="true" className="h-px shrink-0 bg-white/10" />

      {/* Ubicación y promesa de respuesta */}
      <div className="flex flex-col gap-1 text-[13px] font-medium text-white/60">
        <span className="flex items-center gap-1.5">
          <MapPin aria-hidden="true" className="size-4 shrink-0" />
          {LOCATION_LABEL}
        </span>
        <span className="flex items-center gap-1.5">
          <Clock aria-hidden="true" className="size-4 shrink-0" />
          Respuesta en menos de 24 h · Lun-Vie
        </span>
      </div>
    </MagicCard>
  </motion.section>
);

export default ContactSocials;
