import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Loader } from "./pages/Loader";

import { Routes, Route, Navigate } from "react-router";
import MainLayout from "./layouts/MainLayout";
import HomePortada from "./pages/HomePortada";
import HomeRedes from "./pages/HomeRedes";
import ProfileAbout from "./pages/ProfileAbout";
import ProfileEducation from "./pages/ProfileEducation";
import ProfileSkills from "./pages/ProfileSkills";
import ExperienceCondisa from "./pages/ExperienceCondisa";
import ExperienceUNCP from "./pages/ExperienceUNCP";
import Contact from "./pages/Contact";
import ProjectsMiniApps from "./pages/ProjectsMiniApps";
import ProjectsReact from "./pages/ProjectsReact";
import ProjectsCondisa from "./pages/ProjectsCondisa";

function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShowLoader(false), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {showLoader ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
            className="absolute inset-0 bg-black z-100"
          >
            <Loader />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
            className="bg-black min-h-screen"
          >
            <Routes>
              {/* Main Layout wrapper */}
              <Route path="/" element={<MainLayout />}>
                {/* Inicio Section */}
                <Route
                  path="inicio"
                  element={<Navigate to="/inicio/portada" replace />}
                />
                <Route path="inicio/portada" element={<HomePortada />} />
                <Route path="inicio/redes" element={<HomeRedes />} />

                {/* Perfil Section */}
                <Route
                  path="perfil"
                  element={<Navigate to="/perfil/sobre-mi" replace />}
                />
                <Route path="perfil/sobre-mi" element={<ProfileAbout />} />
                <Route path="perfil/educacion" element={<ProfileEducation />} />
                <Route path="perfil/habilidades" element={<ProfileSkills />} />

                {/* Fallbacks for other sections until implemented */}
                {/* Proyectos Section */}
                <Route
                  path="proyectos"
                  element={<Navigate to="/proyectos/miniapps" replace />}
                />
                <Route
                  path="proyectos/miniapps"
                  element={<ProjectsMiniApps />}
                />
                <Route path="proyectos/react" element={<ProjectsReact />} />
                <Route path="proyectos/condisa" element={<ProjectsCondisa />} />
                {/* Experiencia Section */}
                <Route
                  path="experiencia"
                  element={<Navigate to="/experiencia/condisa" replace />}
                />
                <Route
                  path="experiencia/condisa"
                  element={<ExperienceCondisa />}
                />
                <Route path="experiencia/uncp" element={<ExperienceUNCP />} />
                <Route path="contacto" element={<Contact />} />

                {/* Redirect root to inicio */}
                <Route
                  index
                  element={<Navigate to="/inicio/portada" replace />}
                />
              </Route>
            </Routes>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
