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

// Conversión "Consulta por WhatsApp, teléfono o mail" de la cuenta de Google
// Ads del estudio (la etiqueta AW-17663647340 ya se carga en el layout).
const ADS_CONVERSION = "AW-17663647340/E9iPCIvL8fccEOy81-ZB";

// Registra cada clic a WhatsApp, teléfono o mail: en Google Analytics como
// "generate_lead" y en Google Ads como conversión, para medir las campañas.
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
      window.gtag?.("event", "conversion", {
        send_to: ADS_CONVERSION,
        value: 1.0,
        currency: "ARS",
      });
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
};

export default ContactTracking;
