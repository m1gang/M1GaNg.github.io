import { motion } from "motion/react";
import { Mail, Github, MapPin } from "lucide-react";
import { EMAIL, GITHUB_URL, LOCATION_LABEL } from "../../constants/contact";

// Celda 6 — disponibilidad y contacto directo.
export const AvailabilityCard = ({ reveal }) => (
  <motion.div
    {...reveal}
    className="magic-card card-glass relative flex min-h-0 flex-col justify-center gap-1.5 overflow-hidden px-5 py-4 font-roboto
                order-6
                md:col-span-4 md:row-span-1 md:col-start-1 md:row-start-5
                lg:col-span-2 lg:row-span-1 lg:col-start-1 lg:row-start-5"
  >
    <span
      aria-hidden="true"
      className="pointer-events-none absolute -left-12 -top-16 size-48 rounded-full bg-[radial-gradient(closest-side,rgba(52,211,153,0.16),transparent)] blur-2xl"
    />
    <div className="relative flex items-center justify-between gap-3">
      <p
        role="status"
        className="flex items-center gap-2.5 text-lg font-semibold leading-tight tracking-tight text-white"
      >
        <span aria-hidden="true" className="relative flex size-2.5 shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-60 motion-reduce:animate-none" />
          <span className="relative inline-flex size-2.5 rounded-full bg-emerald-300" />
        </span>
        Disponible para trabajar
      </p>

      <span className="flex items-center gap-1.5">
        <a
          href={`mailto:${EMAIL}`}
          aria-label={`Enviar correo a ${EMAIL}`}
          className="grid size-9 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors hover:border-white/25 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <Mail aria-hidden="true" className="size-4" />
        </a>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir mi perfil de GitHub en una pestaña nueva"
          className="grid size-9 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors hover:border-white/25 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <Github aria-hidden="true" className="size-4" />
        </a>
      </span>
    </div>
    <p className="relative flex items-center gap-2 pl-[20px] text-[13px] leading-snug text-white/70">
      <MapPin aria-hidden="true" className="size-4 shrink-0 text-white/45" />
      {LOCATION_LABEL}
    </p>
  </motion.div>
);

export default AvailabilityCard;
