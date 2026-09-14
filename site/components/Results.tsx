"use client";

import { Reveal } from "./Reveal";

const rows = [
  {
    caseId: "CASE_1",
    label: "Horas de trabalho manual por mês",
    before: "120h",
    after: "30h",
  },
  {
    caseId: "CASE_2",
    label: "Tempo para gerar um relatório",
    before: "2 dias",
    after: "1 clique",
  },
  {
    caseId: "CASE_3",
      label: "Fontes de dados isoladas",
    before: "5",
    after: "1 painel",
  },
];

export function Results() {
  return (
    <section id="resultados" className="py-16 md:py-24">
      <div className="container-page">
        <Reveal>
          <p className="text-sm font-medium tracking-widest text-green uppercase">
            Resultados
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold leading-[1.1] tracking-tight max-w-3xl">
            Antes e depois, em números.
          </h2>
        </Reveal>

        <div className="mt-10 divide-y divide-white/10 border-t border-white/10">
          {rows.map((r, i) => (
            <Reveal key={r.caseId} delay={i * 0.08}>
              <div className="grid md:grid-cols-12 gap-3 items-center py-6">
                <div className="md:col-span-5 text-white/80">
                  {r.label}
                </div>
                <div className="md:col-span-3 text-xl md:text-2xl font-semibold text-white/40 line-through decoration-white/20">
                  {r.before}
                </div>
                <div className="md:col-span-1 text-green text-lg">→</div>
                <div className="md:col-span-3 text-2xl md:text-3xl font-semibold text-green">
                  {r.after}
                </div>
              </div>
              <div className="text-xs font-mono text-white/30 -mt-3 pb-1">
                [{r.caseId}]
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-6 text-sm text-white/40">
            Estrutura pronta. Os marcadores [{`CASE_x`}] indicam onde entram os
            números reais dos primeiros clientes.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
