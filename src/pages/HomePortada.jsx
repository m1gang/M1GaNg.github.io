import { reveal, useReducedMotion } from "@/lib/motion";
import { useGitHubActivity } from "../hooks/useGitHubActivity";
import { GITHUB_CALENDAR_PROPS } from "../data/home";
import ProfilePhoto from "../components/home/ProfilePhoto";
import Presentation from "../components/home/Presentation";
import StatsGrid from "../components/home/StatsGrid";
import SkillsGrid from "../components/home/SkillsGrid";
import TechBadges from "../components/home/TechBadges";
import ActionButtons from "../components/home/ActionButtons";
import AvailabilityCard from "../components/home/AvailabilityCard";
import GithubActivity from "../components/home/GithubActivity";
import FeaturedProject from "../components/home/FeaturedProject";

// ─── Grid layout (6 cols × 6 rows en lg, 4 cols en md, 1 col en sm) ──────────
//
//  lg (6×6):
//  ┌──────────┬──────────────────────────┐
//  │ FOTO     │ PRESENTACIÓN             │
//  │ [1-2,1-2]│ [3-6,1-2]               │
//  ├──────────┼───────────┬──────────────┤
//  │ STATS    │ SKILLS    │ TECHS        │
//  │ [1-2,3-4]│ [3-4,3-5] │ [5-6,3-4]  │
//  ├──────────┴───────────┼──────────────┤
//  │ LOGO                 │ BOTONES      │
//  │ [1-2,5]              │ [5-6,5]      │
//  ├────────────────────────────────────┬───────────────┤
//  │ CONTRIBUCIONES (GitHub) [1-4, row6] │ DESTACADO    │
//  │                                     │ [5-6, row6]  │
//  └────────────────────────────────────┴───────────────┘
//
//  md (4×auto): cada card ocupa filas/columnas definidas abajo
//               BOTONES en md → row horizontal (flex-row)
//  sm: columna única, misma dirección que lg (flex-col)

const HomePortada = () => {
  const reduce = useReducedMotion();
  const { data: contributions, isPending } = useGitHubActivity(
    GITHUB_CALENDAR_PROPS.username,
  );

  // Reveal único para todo el bento (stagger por índice de celda).
  const rise = (index) => reveal(reduce, { index, y: 14, duration: 0.4, stagger: 0.05 });

  return (
    <div className="flex-1 w-full max-w-7xl mx-auto p-4 lg:px-10 lg:py-4 flex flex-col gap-6 overflow-y-auto lg:min-h-0 lg:overflow-hidden font-clash">
      <section className="w-full h-auto lg:h-full bento-section rounded-md text-white">
        <div
          className="grid gap-4 h-auto lg:h-full
                      grid-cols-1
                      md:grid-cols-4
                      lg:grid-cols-6 lg:min-h-0 lg:grid-rows-[repeat(2,minmax(0,1.15fr))_repeat(2,minmax(0,1.10fr))_minmax(0,1.05fr)_minmax(0,1.3fr)]
                      pb-4 lg:pb-0"
        >
          {/* 1. FOTO DE PERFIL — sm: order-2  md: [1-2, row2]  lg: [1-2, rows1-2] */}
          <ProfilePhoto reveal={rise(0)} />

          {/* 2. PRESENTACIÓN — sm: order-1  md: [1-4, row1]  lg: [3-6, rows1-2] */}
          <Presentation reveal={rise(1)} />

          {/* 3. ESTADÍSTICAS — sm: order-3  md: [1-2, row3]  lg: [1-2, rows3-4] */}
          <StatsGrid reveal={rise(2)} />

          {/* 4. SKILLS — sm: order-4  md: [3-4, rows2-3]  lg: [3-4, rows3-5] */}
          <SkillsGrid reveal={rise(3)} />

          {/* 5. TECNOLOGÍAS — sm: order-5  md: [1-4, row4]  lg: [5-6, rows3-4] */}
          <TechBadges reveal={rise(4)} />

          {/* 7. BOTONES DE ACCIÓN */}
          <ActionButtons reveal={rise(5)} />

          {/* 6. DISPONIBILIDAD — sm: order-6  md: [1-4, row5]  lg: [1-2, row5] */}
          <AvailabilityCard reveal={rise(6)} />

          {/* 8. CONTRIBUCIONES GITHUB — sm: order-8  md: [1-4, auto]  lg: [1-4, row6] */}
          <GithubActivity
            reveal={rise(7)}
            contributions={contributions}
            isPending={isPending}
          />

          {/* 9. PROYECTO DESTACADO — sm: order-9  md: [1-4, auto]  lg: [5-6, row6] */}
          <FeaturedProject reveal={rise(8)} />
        </div>
      </section>
    </div>
  );
};

export default HomePortada;
