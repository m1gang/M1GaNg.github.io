import { Suspense, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useLocation, useOutlet } from "react-router";
import Sidebar from "../components/layout/Sidebar";
import SubNavbar from "../components/layout/SubNavbar";
import { SUB_NAV_CONFIG } from "../constants/navigation";
import { pageTransition, useReducedMotion } from "../lib/motion";

const SECTION_TITLES = {
  inicio: "Inicio",
  perfil: "Perfil",
  proyectos: "Proyectos",
  experiencia: "Experiencia",
  contacto: "Contacto",
};

const MainLayout = () => {
  const location = useLocation();
  const reduce = useReducedMotion();
  const outlet = useOutlet();

  // AnimatePresence conserva el nodo que sale; si dentro viviera un <Outlet>,
  // éste se re-resolvería contra la ruta nueva y veríamos la página entrante
  // mientras la anterior "sale". Snapshot por pathname evita ese parpadeo.
  const snapshots = useRef(new Map());
  if (!snapshots.current.has(location.pathname)) {
    snapshots.current.set(location.pathname, outlet);
  }
  const activeOutlet = snapshots.current.get(location.pathname);

  // Obtener la sección principal del path
  const pathParts = location.pathname.split("/").filter(Boolean);
  const mainSection = pathParts[0] || "inicio";

  const currentSubNav = SUB_NAV_CONFIG[mainSection] || [];

  return (
    <div
      id="portafolio"
      className="bg-black  flex flex-col lg:flex-row h-auto lg:h-screen lg:overflow-hidden w-full dark:bg-black text-white relative "
    >
      {/* Sidebar Navigation */}
      <Sidebar mainSection={mainSection} />

      {/* Main Content Area */}
      <main className="flex flex-col items-center font-roboto w-full h-full overflow-y-auto lg:overflow-hidden z-10 pt-10 lg:pt-0">
        {/* Main Section Title (Top) */}
        <motion.h1
          key={mainSection}
          initial={reduce ? false : { opacity: 0, y: -6 }}
          animate={reduce ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl p-2 font-thin font-sawbones uppercase tracking-widest"
        >
          {SECTION_TITLES[mainSection] ?? mainSection}
        </motion.h1>

        {/* Sub-Navigation (Top Nav) */}
        <SubNavbar items={currentSubNav} />

        {/* Content Outlet — entrada/salida entre rutas */}
        <div className="flex-1 w-full overflow-hidden flex flex-col lg:min-h-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              {...pageTransition(reduce)}
              className="flex-1 min-h-0 w-full flex flex-col"
            >
              <Suspense fallback={null}>{activeOutlet}</Suspense>
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
