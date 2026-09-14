"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function contactMethod(href: string) {
  if (href.includes("api.whatsapp.com") || href.includes("wa.me")) {
    return "whatsapp";
  }
  if (href.startsWith("tel:")) return "telefono";
  if (href.startsWith("mailto:")) return "email";
  return null;
}

// Registra en Google Analytics cada clic a WhatsApp, teléfono o mail como
// evento "generate_lead", para medir cuántas consultas trae cada campaña.
const ContactTracking = () => {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const link = target?.closest("a[href]");
      if (!link) return;

      const method = contactMethod(link.getAttribute("href") ?? "");
      if (!method) return;

      window.gtag?.("event", "generate_lead", {
        method,
        page_path: window.location.pathname,
      });
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
};

export default ContactTracking;
