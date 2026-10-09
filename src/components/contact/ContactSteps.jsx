import { motion } from "motion/react";
import { MagicCard } from "../MagicCard";
import { STEPS } from "../../constants/contact";

// Qué pasa después — tarjeta superior de la columna lateral.
// Sin scroll interno: altura natural, estira con flex dentro del
// grid lateral.
export const ContactSteps = ({ rise }) => (
  <motion.section
    {...rise}
    aria-labelledby="contact-steps-title"
    className="flex min-w-0"
  >
    <MagicCard className="card-glass h-full w-full p-4 lg:p-5 font-roboto flex flex-col min-w-0">
      <h2
        id="contact-steps-title"
        className="text-base lg:text-lg font-semibold tracking-tight leading-tight text-white"
      >
        Qué pasa después
      </h2>
      <ol className="mt-2.5 flex flex-col gap-2">
        {STEPS.map(({ icon: Icon, title, desc }, i) => (
          <li
            key={title}
            className="flex shrink-0 items-start gap-2.5 rounded-2xl border border-white/10 bg-white/[0.04] p-2.5 lg:p-3"
          >
            <span className="flex shrink-0 items-center gap-2">
              <span
                aria-hidden="true"
                className="grid size-6 place-items-center rounded-full border border-white/15 bg-white/5 text-[12px] font-semibold tabular-nums text-white"
              >
                {i + 1}
              </span>
              <span
                aria-hidden="true"
                className="grid size-8 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/75"
              >
                <Icon className="size-4" />
              </span>
            </span>
            <span className="min-w-0 pt-0.5">
              <span className="block text-[14px] font-semibold leading-snug text-white">
                {title}
              </span>
              <span className="mt-0.5 block text-[13px] leading-snug text-white/65">
                {desc}
              </span>
            </span>
          </li>
        ))}
      </ol>
    </MagicCard>
  </motion.section>
);

export default ContactSteps;
