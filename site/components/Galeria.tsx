"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";

const fotos = [
  { src: "/media/usar 1.jpg", alt: "Decoracao infantil" },
  { src: "/media/usar 2.jpg", alt: "Espaco decorado" },
  { src: "/media/usar 3.jpg", alt: "Mesa de doces" },
  { src: "/media/usar 4.jpg", alt: "Baloes e ornamentacao" },
  { src: "/media/usar 5.jpg", alt: "Detalhes da decoracao" },
  { src: "/media/usar 6.jpg", alt: "Ambiente do evento" },
  { src: "/media/usar 7.jpg", alt: "Celebracao" },
  { src: "/media/usar 8.jpg", alt: "Festa tematica" },
  { src: "/media/usar 9.jpg", alt: "Espaco para confraternizacao" },
];

export function Galeria() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="galeria" className="py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-sm font-semibold tracking-wide text-[#9b72cf] bg-[#e8dff5]/60 rounded-full px-4 py-1.5 mb-4">
              Nosso trabalho
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#3d3d3d]">
              Galeria de{" "}
              <span className="text-[#9b72cf]">eventos</span>
            </h2>
            <p className="mt-4 text-[#6d6d6d] text-lg leading-relaxed">
              Confira alguns dos eventos que já realizamos. Cada um único e especial.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {fotos.map((f, i) => (
            <Reveal key={f.src} delay={i * 0.06}>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelected(i)}
                className="rounded-2xl overflow-hidden aspect-square w-full bg-[#f0eaf8]"
              >
                <img
                  src={f.src}
                  alt={f.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox Fotos */}
      <AnimatePresence>
        {selected !== null && (
          <div
            className="fixed inset-0 z-50 bg-white/95 backdrop-blur-sm flex items-center justify-center"
            onClick={() => setSelected(null)}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 text-[#3d3d3d] text-3xl z-50 hover:text-[#9b72cf] transition-colors"
            >
              ✕
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); setSelected((selected - 1 + fotos.length) % fotos.length); }}
              className="absolute left-4 md:left-8 z-50 w-12 h-12 bg-[#3d3d3d]/10 backdrop-blur-sm rounded-full flex items-center justify-center text-[#3d3d3d] hover:bg-[#9b72cf]/20 transition-colors"
            >
              ‹
            </button>

            <img
              key={selected}
              src={fotos[selected].src}
              alt={fotos[selected].alt}
              className="max-w-full max-h-[85vh] mx-16 rounded-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={(e) => { e.stopPropagation(); setSelected((selected + 1) % fotos.length); }}
              className="absolute right-4 md:right-8 z-50 w-12 h-12 bg-[#3d3d3d]/10 backdrop-blur-sm rounded-full flex items-center justify-center text-[#3d3d3d] hover:bg-[#9b72cf]/20 transition-colors"
            >
              ›
            </button>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
