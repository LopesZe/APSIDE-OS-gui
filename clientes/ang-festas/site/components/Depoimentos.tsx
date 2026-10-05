"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const depoimentos = [
  {
    name: "Camila S.",
    text: "A Maria e sua equipe são incríveis! Minha filha adorou a festa do Lion King. Tudo ficou perfeito, do bolo à decoração. Recomendo demais!",
    stars: 5,
  },
  {
    name: "Roberto A.",
    text: "Fizemos a confraternização da empresa lá e foi um sucesso. Espaço amplo, organizado e o atendimento foi nota 10. Vamos voltar com certeza.",
    stars: 5,
  },
  {
    name: "Fernanda L.",
    text: "O Chá de Bebê da minha sobrinha ficou lindo! A decoração superou nossas expectativas. Todo mundo elogiou. Muito obrigada, ANG Festas!",
    stars: 5,
  },
];

export function Depoimentos() {
  return (
    <section id="depoimentos" className="py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-sm font-semibold tracking-wide text-[#9b72cf] bg-[#e8dff5]/60 rounded-full px-4 py-1.5 mb-4">
              Depoimentos
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#3d3d3d]">
              O que dizem{" "}
              <span className="text-[#9b72cf]">sobre nos</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {depoimentos.map((d, i) => (
            <Reveal key={d.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-6 border border-[#f0eaf8]"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(d.stars)].map((_, j) => (
                    <span key={j} className="text-[#ffd700] text-base">★</span>
                  ))}
                </div>
                <p className="text-[#555] text-sm leading-relaxed mb-5 italic">
                  &ldquo;{d.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#e8dff5] flex items-center justify-center text-[#9b72cf] font-bold text-sm">
                    {d.name.charAt(0)}
                  </div>
                  <span className="font-semibold text-[#3d3d3d] text-sm">{d.name}</span>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
