"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#sobre", label: "O Espaço" },
  { href: "#eventos", label: "Eventos" },
  { href: "#galeria", label: "Galeria" },
  { href: "#depoimentos", label: "Depoimentos" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className="w-full max-w-[1200px] border border-white/50 backdrop-blur-md overflow-hidden"
        style={{
          borderRadius: 16,
          backgroundColor: scrolled ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.3)",
          boxShadow: scrolled ? "0 4px 20px rgba(155,114,207,0.1)" : "none",
          transition: "background-color 0.3s, box-shadow 0.3s",
        }}
      >
        {/* Desktop */}
        <div className="hidden md:flex items-center justify-between h-16 px-6">
          <a href="#topo" className="flex items-center gap-2">
            <span className="text-2xl">🎉</span>
            <span className="text-lg font-extrabold text-[#3d3d3d]">
              ANG <span className="text-[#9b72cf]">Festas</span>
            </span>
          </a>
          <div className="flex items-center gap-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-semibold text-[#6d6d6d] hover:text-[#9b72cf] transition-colors">
                {l.label}
              </a>
            ))}
          </div>
          <a href="https://wa.me/5542999909828" target="_blank" rel="noopener noreferrer" className="text-sm font-bold px-5 py-2.5 rounded-full bg-[#9b72cf] text-white hover:bg-[#8a62bf] transition-colors">
            Reservar
          </a>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          {/* Barra principal */}
          <div className="flex items-center justify-between h-16 px-5">
            {/* Logo */}
            <a href="#topo" className="flex items-center gap-2">
              <span className="text-2xl">🎉</span>
              <span className="text-lg font-extrabold text-[#3d3d3d]">
                ANG <span className="text-[#9b72cf]">Festas</span>
              </span>
            </a>

            {/* Hamburger / X */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative w-8 h-8 flex items-center justify-center"
              aria-label="Menu"
            >
              <span
                className="absolute w-5 h-[2px] bg-[#3d3d3d] rounded-full transition-all duration-300"
                style={menuOpen ? { transform: "rotate(45deg)" } : { transform: "translateY(-4px)" }}
              />
              <span
                className="absolute w-5 h-[2px] bg-[#3d3d3d] rounded-full transition-all duration-300"
                style={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              />
              <span
                className="absolute w-5 h-[2px] bg-[#3d3d3d] rounded-full transition-all duration-300"
                style={menuOpen ? { transform: "rotate(-45deg)" } : { transform: "translateY(4px)" }}
              />
            </button>
          </div>

          {/* Dropdown com animação */}
          <div
            className="transition-all duration-300 ease-in-out"
            style={{
              maxHeight: menuOpen ? 300 : 0,
              opacity: menuOpen ? 1 : 0,
              overflow: "hidden",
            }}
          >
            <div className="flex flex-col items-center gap-1 py-4 px-5 border-t border-white/30">
              {links.map((l, i) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-semibold text-[#6d6d6d] hover:text-[#9b72cf] py-2"
                  style={{
                    opacity: menuOpen ? 1 : 0,
                    transform: menuOpen ? "translateY(0)" : "translateY(-8px)",
                    transition: `opacity 0.25s ${menuOpen ? i * 50 : 0}ms, transform 0.25s ${menuOpen ? i * 50 : 0}ms`,
                  }}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="https://wa.me/5542999909828"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-2 text-sm font-bold px-6 py-2.5 rounded-full bg-[#9b72cf] text-white hover:bg-[#8a62bf]"
                style={{
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? "translateY(0)" : "translateY(-8px)",
                  transition: `opacity 0.25s ${menuOpen ? links.length * 50 : 0}ms, transform 0.25s ${menuOpen ? links.length * 50 : 0}ms`,
                }}
              >
                Reservar
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
