// Carga del logo del loader: fetch + parse diferidos.
// Se inicia lo antes posible (import estático desde main.jsx) para que el parse
// se solape con la carga del bundle en lugar de empezar cuando el loader monta.
import { parseLogoImage } from "./parseLogoImage";

const LOGO_URL = "/migang-logo.svg";

let promise = null;

export const getLogoAsset = () => {
  if (!promise) {
    promise = fetch(LOGO_URL)
      .then((r) => r.blob())
      .then((blob) => parseLogoImage(blob))
      .catch(() => null);
  }
  return promise;
};
