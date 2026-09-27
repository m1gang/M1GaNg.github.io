import { useEffect, useRef, useState } from "react";
import { EMAIL, MESSAGE_MAX } from "../constants/contact";

// Formulario de Contacto (visual-only): estado, envío simulado y copiar email.
export const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent
  const [copied, setCopied] = useState(false);
  const sendTimer = useRef(null);
  const copyTimer = useRef(null);

  useEffect(
    () => () => {
      if (sendTimer.current) clearTimeout(sendTimer.current);
      if (copyTimer.current) clearTimeout(copyTimer.current);
    },
    [],
  );

  const sending = status === "sending";
  const sent = status === "sent";
  const messageCount = formData.message.length;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status === "sent") setStatus("idle");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (sending) return;
    setStatus("sending");
    sendTimer.current = setTimeout(() => {
      setStatus("sent");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 900);
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
    messageCount,
    handleChange,
    handleSubmit,
    handleCopyEmail,
    messageMax: MESSAGE_MAX,
  };
};
