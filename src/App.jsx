import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useReducedMotion } from "./lib/motion";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Loader } from "./pages/Loader";
import { RouterProvider } from "react-router";
import { router } from "./routes/routes";
import { Toaster } from "sileo";

const FADE = { duration: 0.1, ease: "easeInOut" };

// El loader se muestra 2s, una sola vez al iniciar (no vuelve en navegación SPA).
const LOADER_MS = 2000;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  const [showLoader, setShowLoader] = useState(true);
  const reduce = useReducedMotion();

  useEffect(() => {
    const t = setTimeout(() => setShowLoader(false), LOADER_MS);
    return () => clearTimeout(t);
  }, []);

  const fade = reduce ? {} : { transition: FADE };

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster
        position="top-right"
        options={{
          fill: "#18181b",
          roundness: 20,
          styles: {
            title: "font-clash tracking-tight text-white!",
            description: "font-roboto text-white/75!",
            badge: "bg-white/10!",
            button: "bg-white/10! hover:bg-white/15!",
          },
        }}
      />
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
    </QueryClientProvider>
  );
}

export default App;
