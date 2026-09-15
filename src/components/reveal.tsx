"use client";

import {
  type CSSProperties,
  type ElementType,
  type ReactNode,
  useEffect,
  useRef,
} from "react";

type RevealProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
  from?: "up" | "left" | "right";
  style?: CSSProperties;
  id?: string;
};

// Aparición suave al hacer scroll, una sola vez. El estado oculto solo existe
// si el script del <head> marcó <html class="js-reveal"> (navegador con
// IntersectionObserver y sin "reducir movimiento"); si no, todo se ve igual.
export default function Reveal({
  as: Tag = "div",
  children,
  className = "",
  delay = 0,
  from = "up",
  style,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    (window as Window & { __revealReady?: boolean }).__revealReady = true;
    const element = ref.current;
    if (!element) return;

    if (!("IntersectionObserver" in window)) {
      element.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          element.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const direction =
    from === "left" ? "reveal-left" : from === "right" ? "reveal-right" : "";

  return (
    <Tag
      ref={ref}
      className={`reveal ${direction} ${className}`}
      style={{ ...style, "--reveal-delay": `${delay}ms` } as CSSProperties}
      {...rest}
    >
      {children}
    </Tag>
  );
}
