import { motion } from "motion/react";
import { ActivityCalendar } from "../../hooks/useGitHubActivity";
import { GITHUB_URL } from "../../constants/contact";
import { GITHUB_CALENDAR_PROPS } from "../../data/home";

// Celda 8 — calendario de contribuciones de GitHub.
export const GithubActivity = ({ reveal, contributions, isPending }) => (
  <motion.div
    {...reveal}
    className="magic-card card-glass flex min-h-0 flex-col justify-center overflow-hidden px-4 py-2 font-roboto
                order-8
                md:col-span-4 md:col-start-1
                lg:col-span-4 lg:row-span-1 lg:col-start-1 lg:row-start-6"
  >
    <a
      href={GITHUB_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Ver perfil de GitHub de M1GaNg"
      className="block w-full overflow-x-auto rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      <ActivityCalendar
        {...GITHUB_CALENDAR_PROPS}
        data={contributions}
        loading={isPending}
      />
    </a>
  </motion.div>
);

export default GithubActivity;
