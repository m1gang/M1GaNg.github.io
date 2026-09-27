import { motion } from "motion/react";
import { Mail, Check, Copy, Phone, MapPin, ArrowUpRight, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { MagicCard } from "../MagicCard";
import {
  EMAIL,
  LOCATION_LABEL,
  PHONE_LABEL,
  PHONE_HREF,
  STEPS,
  TILE_CLS,
  WHATSAPP_HREF,
} from "../../constants/contact";

// Columna izquierda de Contacto: contexto, email hero copiable, pasos y canales.
export const ContactAside = ({ rise, copied, handleCopyEmail }) => (
  <motion.div
    {...rise}
    className="lg:col-span-5 min-w-0 order-2 lg:order-1 lg:min-h-0 lg:h-full"
  >
    <MagicCard className="card-glass p-5 lg:p-5 font-roboto flex flex-col gap-5 lg:gap-3 min-w-0 h-full lg:min-h-0 lg:overflow-y-auto">
      <div className="min-w-0">
        <div className="flex items-center gap-2.5 flex-wrap">
          <h2 className="text-[28px] lg:text-[32px] font-semibold tracking-tight leading-tight text-white text-balance">
            Hablemos de tu proyecto
          </h2>
          <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1.5 text-[13px] font-medium text-emerald-200">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-300" />
            </span>
            Disponible
          </span>
        </div>
        <p className="mt-2 max-w-[52ch] text-sm leading-relaxed text-white/75">
          Vacante, freelance o colaboración: cuéntame qué necesitas lograr y para
          cuándo. Te respondo con propuesta y tiempos.
        </p>
      </div>

      {/* Email hero copiable */}
      <div className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3 transition-colors duration-200 hover:border-white/20 hover:bg-white/[0.06]">
        <span
          aria-hidden="true"
          className={cn(
            "grid size-11 shrink-0 place-items-center rounded-xl border transition-colors duration-200",
            TILE_CLS,
          )}
        >
          <Mail className="size-5" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-[13px] leading-tight text-white/60">
            Escríbeme directo
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="block truncate text-[15px] font-semibold leading-snug text-white rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {EMAIL}
          </a>
        </div>
        <button
          type="button"
          onClick={handleCopyEmail}
          aria-live="polite"
          aria-label={
            copied ? "Correo copiado al portapapeles" : `Copiar ${EMAIL}`
          }
          className="inline-flex h-9 items-center gap-1.5 shrink-0 rounded-xl border border-white/10 bg-white/5 px-3 text-[13px] font-medium text-white/70 transition-colors duration-200 hover:border-white/20 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          {copied ? (
            <Check aria-hidden="true" className="size-4" />
          ) : (
            <Copy aria-hidden="true" className="size-4" />
          )}
          {copied ? "Copiado" : "Copiar"}
        </button>
      </div>
      {copied && (
        <p
          aria-live="polite"
          className="-mt-3 text-[13px] leading-tight text-emerald-300"
        >
          Correo copiado — pégalo donde prefieras.
        </p>
      )}

      {/* Qué pasa después */}
      <ol className="flex flex-col gap-1 lg:gap-0.5">
        {STEPS.map(({ icon: Icon, title, desc }, i) => (
          <li
            key={title}
            className="flex items-start gap-3 rounded-xl px-1 py-1.5 lg:py-1"
          >
            <span className="flex items-center gap-2.5 shrink-0">
              <span
                aria-hidden="true"
                className="grid size-7 place-items-center rounded-full border border-white/15 bg-white/5 text-[13px] font-semibold tabular-nums text-white"
              >
                {i + 1}
              </span>
              <span
                aria-hidden="true"
                className="grid size-9 lg:size-8 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/75"
              >
                <Icon className="size-[18px]" />
              </span>
            </span>
            <span className="min-w-0 pt-0.5">
              <span className="block text-[15px] font-semibold leading-snug text-white">
                {title}
              </span>
              <span className="mt-0.5 block text-sm lg:text-[13px] leading-relaxed text-white/65">
                {desc}
              </span>
            </span>
          </li>
        ))}
      </ol>

      <div aria-hidden="true" className="h-px shrink-0 bg-white/10" />

      {/* Canales directos */}
      <ul className="flex flex-col gap-0.5">
        <li>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 rounded-xl border border-transparent px-2 py-1.5 lg:py-1 transition-colors duration-200 hover:border-white/10 hover:bg-white/[0.04] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <span
              aria-hidden="true"
              className={cn(
                "grid size-10 lg:size-9 shrink-0 place-items-center rounded-xl border transition-colors duration-200",
                TILE_CLS,
              )}
            >
              <Phone className="size-5" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-[13px] leading-tight text-white/60">
                Teléfono / WhatsApp
              </span>
              <span className="block truncate text-[15px] font-medium leading-snug text-white">
                {PHONE_LABEL}
              </span>
            </span>
            <ArrowUpRight
              aria-hidden="true"
              className="size-4 shrink-0 text-white/35 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
            />
          </a>
        </li>
        <li className="flex items-center gap-2.5 px-2 py-1.5 lg:py-1">
          <span
            aria-hidden="true"
            className="grid size-10 lg:size-9 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/80"
          >
            <MapPin className="size-5" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-[13px] leading-tight text-white/60">
              Ubicación
            </span>
            <span className="block truncate text-[15px] font-medium leading-snug text-white">
              {LOCATION_LABEL}
            </span>
          </span>
        </li>
      </ul>
      <p className="flex items-center gap-1.5 text-[13px] font-medium text-white/60">
        <Clock aria-hidden="true" className="size-4 shrink-0" />
        Respuesta en menos de 24 h · Lun–Vie
      </p>
    </MagicCard>
  </motion.div>
);

export default ContactAside;
