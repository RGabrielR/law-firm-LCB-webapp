"use client";

import { useEffect, useRef, useState } from "react";

type NetworkInformation = { saveData?: boolean; effectiveType?: string };

// El video es decoración: solo se suma si el aparato lo aguanta. Si algo
// falla (navegador viejo, datos móviles, poca memoria) queda la foto fija
// que ya se ve de fondo, así que nunca hay pantalla vacía ni tirones.
function puedeReproducirVideo() {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  if (!window.matchMedia("(min-width: 768px)").matches) return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;

  const nav = navigator as Navigator & {
    connection?: NetworkInformation;
    deviceMemory?: number;
  };
  if (nav.connection && nav.connection.saveData) return false;
  if (nav.connection && /2g|3g/.test(nav.connection.effectiveType || "")) {
    return false;
  }
  if (nav.deviceMemory && nav.deviceMemory < 2) return false;

  const prueba = document.createElement("video");
  return Boolean(
    prueba.canPlayType &&
      (prueba.canPlayType('video/webm; codecs="vp9"') ||
        prueba.canPlayType('video/mp4; codecs="avc1.4D401F"')),
  );
}

export default function HeroVideo() {
  const [montado, setMontado] = useState(false);
  const [visible, setVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!puedeReproducirVideo()) return;

    // Se carga después de que la página terminó, para no competir con el
    // texto y la foto, que es lo que Google mide.
    const arrancar = () => setMontado(true);
    if (document.readyState === "complete") {
      const id = window.setTimeout(arrancar, 300);
      return () => window.clearTimeout(id);
    }
    window.addEventListener("load", arrancar, { once: true });
    return () => window.removeEventListener("load", arrancar);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!montado || !video) return;
    // React no siempre deja el atributo muted en el DOM, y sin él los
    // navegadores bloquean el autoplay.
    video.muted = true;

    // Si la pestaña está en segundo plano el navegador no deja arrancar:
    // se reintenta cuando la persona vuelve. Mientras tanto se ve la foto.
    const reproducir = () => {
      if (document.hidden) return;
      const intento = video.play();
      if (intento && typeof intento.catch === "function") {
        intento.catch(() => undefined);
      }
    };
    reproducir();
    document.addEventListener("visibilitychange", reproducir);
    return () => document.removeEventListener("visibilitychange", reproducir);
  }, [montado]);

  if (!montado) return null;

  return (
    <video
      ref={videoRef}
      className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
      onPlaying={() => setVisible(true)}
      onError={() => setMontado(false)}
    >
      <source src="/hero-consulta.webm" type="video/webm" />
      <source src="/hero-consulta.mp4" type="video/mp4" />
    </video>
  );
}
