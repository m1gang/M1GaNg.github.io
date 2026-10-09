import { motion } from "motion/react";
import { Mail, Check, Copy, Phone, MessageCircle, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { MagicCard } from "../MagicCard";
import {
  EMAIL,
  PHONE_HREF,
  PHONE_LABEL,
  TILE_CLS,
  WHATSAPP_HREF,
} from "../../constants/contact";

// Canales directos — card superior de la columna lateral: email
// copiable y el número de teléfono por sus dos vías (llamada y
// WhatsApp). Sin scroll interno.
export const ContactChannels = ({ rise, copied, handleCopyEmail }) => (
  <motion.section
    {...rise}
    aria-label="Canales directos de contacto"
    className="flex min-w-0"
  >
    <MagicCard className="card-glass h-full w-full p-4 lg:p-5 font-roboto flex flex-col gap-2">
      {/* Email directo copiable */}
      <div className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-2.5 transition-colors duration-200 hover:border-white/20 hover:bg-white/[0.06]">
        <span
          aria-hidden="true"
          className={cn(
            "grid size-10 shrink-0 place-items-center rounded-xl border transition-colors duration-200",
            TILE_CLS,
          )}
        >
          <Mail className="size-[18px]" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-[12px] leading-tight text-white/60">
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
          className="inline-flex h-9 shrink-0 items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 text-[13px] font-medium text-white/70 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          {copied ? (
            <Check aria-hidden="true" className="size-4" />
          ) : (
            <Copy aria-hidden="true" className="size-4" />
          )}
          {copied ? "Copiado" : "Copiar"}
        </button>
      </div>

      {/* Teléfono — llamada directa */}
      <a
        href={PHONE_HREF}
        className="group flex items-center gap-3 rounded-2xl border border-transparent px-2.5 transition-colors duration-200 hover:border-white/10 hover:bg-white/[0.04] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <span
          aria-hidden="true"
          className={cn(
            "grid size-9 shrink-0 place-items-center rounded-xl border transition-colors duration-200",
            TILE_CLS,
          )}
        >
          <Phone className="size-[18px]" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-[12px] leading-tight text-white/60">
            Teléfono
          </span>
          <span className="block truncate text-[15px] font-medium leading-snug text-white">
            {PHONE_LABEL}
          </span>
        </span>
        <ArrowUpRight
          aria-hidden="true"
          className="size-4 shrink-0 text-white/35 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
        />
      </a>

      {/* WhatsApp — chat con el verde de marca */}
      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 rounded-2xl border border-transparent px-2.5 transition-colors duration-200 hover:border-white/10 hover:bg-white/[0.04] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <span
          aria-hidden="true"
          className="grid size-9 shrink-0 place-items-center rounded-xl border border-transparent bg-gradient-to-br from-[#25D366] to-[#075E54] text-white"
        >
          <MessageCircle className="size-[18px]" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-[12px] leading-tight text-white/60">
            WhatsApp
          </span>
          <span className="block truncate text-[15px] font-medium leading-snug text-white">
            Chatea conmigo
          </span>
        </span>
        <ArrowUpRight
          aria-hidden="true"
          className="size-4 shrink-0 text-white/35 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
        />
      </a>

      {copied && (
        <p
          aria-live="polite"
          className="-mt-0.5 text-[13px] leading-tight text-emerald-300"
        >
          Correo copiado. Pégalo donde prefieras.
        </p>
      )}
    </MagicCard>
  </motion.section>
);

export default ContactChannels;
