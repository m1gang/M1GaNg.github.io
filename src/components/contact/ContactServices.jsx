import { motion } from "motion/react";
import { MagicCard } from "../MagicCard";
import { SERVICES } from "../../constants/contact";

// En qué puedo ayudar — card central de la columna lateral. Su
// fila fr queda dimensionada sobre su altura natural, así que el
// contenido nunca se aprieta ni se recorta; si sobra altura, la
// card la absorbe como padding equilibrado (justify-center) en
// lugar de explosionar los huecos entre filas.
export const ContactServices = ({ rise }) => (
  <motion.section
    {...rise}
    aria-labelledby="contact-services-title"
    className="flex min-h-0 min-w-0"
  >
    <MagicCard className="card-glass h-full w-full p-4 lg:p-5 font-roboto flex flex-col justify-center min-h-0">
      <h2
        id="contact-services-title"
        className="text-base lg:text-lg font-semibold tracking-tight leading-tight text-white"
      >
        En qué puedo ayudar
      </h2>
      <ul className="mt-3 flex flex-col gap-3">
        {SERVICES.map(({ icon: Icon, title }) => (
          <li key={title} className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="grid size-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/75"
            >
              <Icon className="size-5" />
            </span>
            <span className="min-w-0 text-[15px] font-medium leading-snug text-white">
              {title}
            </span>
          </li>
        ))}
      </ul>
    </MagicCard>
  </motion.section>
);

export default ContactServices;
