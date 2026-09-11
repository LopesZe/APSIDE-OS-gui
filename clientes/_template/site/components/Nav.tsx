"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#capacidades", label: "Capacidades" },
  { href: "#metodo", label: "Método" },
  { href: "#como", label: "Como trabalhamos" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <motion.nav
        initial={{ maxWidth: 1200, borderRadius: 0 }}
        animate={{
          maxWidth: scrolled ? 680 : 1200,
          borderRadius: scrolled ? 999 : 0,
          backgroundColor: scrolled
            ? "rgba(31,33,51,0.82)"
            : "rgba(31,33,51,0)",
          borderColor: scrolled
            ? "rgba(255,255,255,0.12)"
            : "rgba(255,255,255,0)",
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="w-full border backdrop-blur-md"
        style={{ backdropFilter: "blur(10px)" }}
      >
        <div className="flex items-center justify-between h-16 md:h-20 px-5 md:px-6">
          <a href="#top" className="flex items-center">
            <img src="/logo.png" alt="{{PRIMARY_BRAND}}" className="h-12 md:h-16 w-auto" />
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <a
            href="#contato"
            className="text-sm font-medium px-4 py-2 rounded-full bg-green text-navy hover:bg-green/90 transition-colors"
          >
            Falar com a {{PRIMARY_BRAND}}
          </a>
        </div>
      </motion.nav>
    </motion.header>
  );
}
