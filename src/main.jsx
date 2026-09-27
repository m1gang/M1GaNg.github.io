import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { getLogoAsset } from "./lib/metallic/logoAsset";
import "./index.css";

// Arranca el fetch + parse del logo antes de montar React: así se solapa con
// la carga del bundle y el canvas del loader está listo casi de inmediato.
getLogoAsset();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
