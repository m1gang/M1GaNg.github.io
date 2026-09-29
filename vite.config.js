import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr({ svgrOptions: { icon: true, memo: true } }),
    {
      // GitHub Pages no tiene fallback de SPA: al recargar /proyectos/condisa
      // serviría un 404. Copiamos index.html a 404.html para que el router del
      // cliente maneje cualquier ruta.
      name: "spa-404",
      closeBundle() {
        const dist = path.resolve(__dirname, "dist");
        fs.copyFileSync(
          path.join(dist, "index.html"),
          path.join(dist, "404.html"),
        );
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true, // Permite exponer el servidor en tu red
    allowedHosts: [".tunnelmole.net", ".trycloudflare.com"], // Permite ambos proveedores de túneles
  },
});
