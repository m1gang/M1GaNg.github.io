import { useEffect, useRef, useState } from "react";
import { sileo } from "sileo";
import { EMAIL, MESSAGE_MAX } from "../constants/contact";

// Endpoint de Web3Forms (plan gratis: 250 envíos/mes, filtro anti-spam incluido).
const WEB3FORMS_URL = "https://api.web3forms.com/submit";

// Formulario de Contacto: estado, envío real a Web3Forms y copiar email.
export const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [copied, setCopied] = useState(false);
  const copyTimer = useRef(null);

  useEffect(
    () => () => {
      if (copyTimer.current) clearTimeout(copyTimer.current);
    },
    [],
  );

  const sending = status === "sending";
  const sent = status === "sent";
  const error = status === "error";
  const messageCount = formData.message.length;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status !== "idle") setStatus("idle");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey || accessKey.includes("tu_access_key")) {
      console.warn("[Contacto] Falta VITE_WEB3FORMS_ACCESS_KEY en .env");
      setStatus("error");
      sileo.error({
        title: "Formulario sin configurar",
        description: "Falta la clave de Web3Forms. Avisa al desarrollador.",
      });
      return;
    }

    setStatus("sending");

    // botcheck = honeypot de Web3Forms: debe viajar vacío; si un bot lo
    // rellena, el servicio rechaza el envío server-side.
    const payload = { access_key: accessKey, ...formData, botcheck: "" };

    try {
      const res = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok || data?.success !== true) {
        throw new Error(data?.message || `HTTP ${res.status}`);
      }

      setStatus("sent");
      setFormData({ name: "", email: "", subject: "", message: "" });
      sileo.success({
        title: "¡Mensaje enviado!",
        description: "Te responderé en menos de 24 h. ¡Gracias por escribir!",
      });
    } catch (err) {
      console.error("[Contacto] Error al enviar:", err);
      setStatus("error");
      sileo.error({
        title: "No se pudo enviar",
        description: "Revisa tu conexión e inténtalo de nuevo.",
      });
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = EMAIL;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    if (copyTimer.current) clearTimeout(copyTimer.current);
    copyTimer.current = setTimeout(() => setCopied(false), 2000);
  };

  return {
    formData,
    status,
    copied,
    sending,
    sent,
    error,
    messageCount,
    handleChange,
    handleSubmit,
    handleCopyEmail,
    messageMax: MESSAGE_MAX,
  };
};
