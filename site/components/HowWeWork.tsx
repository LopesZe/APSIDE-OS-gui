"use client";

import { Reveal } from "./Reveal";

const steps = [
  {
    n: "01",
    name: "Diagnóstico",
    desc: "Conversa curta para entender a operação e onde está o gargalo. Sem compromisso.",
  },
  {
    n: "02",
    name: "Implementação",
    desc: "Executamos a solução em etapas curtas, com entrega visível a cada ciclo.",
  },
  {
    n: "03",
    name: "Evolução",
    desc: "Acompanhamos os resultados e ajustamos. Você acompanha pelo painel.",
  },
];

export function HowWeWork() {
  return (
    <section id="como" className="py-24 md:py-32 bg-navy-soft/40">
      <div className="container-page">
        <Reveal>
          <p className="text-sm font-medium tracking-widest text-white/50 uppercase">
            Como trabalhamos
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 text-4xl md:text-6xl font-semibold leading-[1.1] tracking-tight max-w-3xl">
            Da conversa ao resultado.
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <div className="group h-full border border-white/10 rounded-2xl p-8 bg-white/[0.02] transition-all duration-300 hover:-translate-y-1 hover:border-green/60 hover:shadow-[0_24px_70px_-20px_rgba(0,230,91,0.55)]">
                <span className="text-sm font-mono text-green">{s.n}</span>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                  {s.name}
                </h3>
                <p className="mt-4 text-white/70">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
