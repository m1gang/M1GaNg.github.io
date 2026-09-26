import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useReducedMotion } from "./lib/motion";
import { Loader } from "./pages/Loader";
import { RouterProvider } from "react-router";
import { router } from "./routes/routes";

const FADE = { duration: 0.1, ease: "easeInOut" };

function App() {
  const [showLoader, setShowLoader] = useState(true);
  const reduce = useReducedMotion();

  useEffect(() => {
    const t = setTimeout(() => setShowLoader(false), 1000);
    return () => clearTimeout(t);
  }, []);

  const fade = reduce ? {} : { transition: FADE };

  return (
    <>
      <AnimatePresence mode="wait">
        {showLoader ? (
          <motion.div
            key="loader"
            initial={reduce ? false : { opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            {...fade}
            className="absolute inset-0 bg-black z-100"
          >
            <Loader />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={reduce ? false : { opacity: 0 }}
            animate={reduce ? undefined : { opacity: 1 }}
            {...fade}
            className="bg-black min-h-screen"
          >
            <RouterProvider router={router} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
