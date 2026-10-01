"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section
      id="topo"
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Conteúdo centralizado */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto pt-28 pb-20 md:pt-36 md:pb-24">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-[#9b72cf] bg-[#e8dff5]/80 backdrop-blur-sm rounded-full px-5 py-2">
            🎈 Ponta Grossa, PR
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mt-8 text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.1] text-[#3d3d3d]">
            Seu evento{" "}
            <span className="text-[#9b72cf]">começa aqui</span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 text-lg md:text-xl text-[#6d6d6d] max-w-xl mx-auto leading-relaxed">
            Organizamos festas de sonhos para todos os gostos e orçamentos.
            Aniversários, confraternizações, formaturas: aqui sua comemoração
            vira lembrança inesquecível.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/5542999909828"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-48 text-center px-6 py-3.5 rounded-full bg-[#9b72cf] text-white font-bold text-sm hover:bg-[#8a62bf] transition-colors"
            >
              Consulta grátis
            </a>
            <a
              href="#sobre"
              className="w-full sm:w-48 text-center px-6 py-3.5 rounded-full border-2 border-[#9b72cf] text-[#9b72cf] font-bold text-sm hover:bg-[#e8dff5]/60 transition-colors backdrop-blur-sm"
            >
              Conhecer o espaço
            </a>
          </div>
        </Reveal>

        {/* Badges */}
        <div className="relative mt-14 flex flex-wrap items-center justify-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="bg-white/70 backdrop-blur-sm rounded-2xl px-5 py-3"
          >
            <div className="flex items-center gap-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#ffd700] text-base">★</span>
                ))}
              </div>
              <div>
                <p className="text-[#3d3d3d] font-bold text-sm">5.0</p>
                <p className="text-[#999] text-xs">9 avaliações</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="bg-[#fce1e4]/60 backdrop-blur-sm rounded-2xl px-5 py-3"
          >
            <div className="flex items-center gap-2">
              <span className="text-xl">🧸</span>
              <span className="text-[#3d3d3d] font-semibold text-sm">Espaço Kids</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="bg-[#d4f4dd]/60 backdrop-blur-sm rounded-2xl px-5 py-3"
          >
            <div className="flex items-center gap-2">
              <span className="text-xl">🎨</span>
              <span className="text-[#3d3d3d] font-semibold text-sm">Decoração Autoral</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-xs text-[#b0b0b0] font-medium">Role para baixo</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-[#d0d0d0] rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-[#d0d0d0] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
