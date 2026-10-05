"use client";

import { Reveal } from "./Reveal";

export function CtaFooter() {
  return (
    <>
      {/* CTA Section */}
      <section className="relative z-10 pt-16 pb-12 md:pt-20 md:pb-16 bg-[#9b72cf]">
        {/* Wave divider top */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none" style={{ transform: "translateY(-99%)" }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24">
            <path d="M0,0 C300,120 900,0 1200,80 L1200,120 L0,120 Z" fill="#9b72cf" />
          </svg>
        </div>

        <div className="container-page text-center">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
              Pronto para comemorar?
            </h2>
            <p className="text-white/80 text-base max-w-md mx-auto mb-6">
              Fale conosco e monte a festa dos seus sonhos. Atendimento personalizado e sem compromisso.
            </p>
            <a
              href="https://wa.me/5542999909828"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded-full bg-white text-[#9b72cf] font-bold text-sm hover:bg-[#f5f0ff] transition-colors"
            >
              Falar no WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-10 bg-[#3d3d3d] text-white/70 text-sm">
        <div className="container-page flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl">🎉</span>
            <span className="font-extrabold text-white">
              ANG <span className="text-[#d4a5f5]">Festas</span>
            </span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-center">
            <span>R. Castanheira, 147 - Santa Paula, Ponta Grossa - PR</span>
            <span className="hidden md:inline">•</span>
            <span>(42) 99990-9828</span>
          </div>

          <span className="text-white/40 text-xs">
            © 2026 ANG Festas. Todos os direitos reservados.
          </span>
        </div>
      </footer>
    </>
  );
}
