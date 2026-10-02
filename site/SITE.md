# Site Institucional APSIDE

## O que é

Site institucional da APSIDE pra vender serviços de presença digital pra negócios locais. Não é apresentação pro cliente (aquilo ficou em `site/antigo/`). É o site que converte visitante em lead.

## Estrutura

```
site/
├── modelos/                  # 3 opções de design (teste)
│   ├── modelo-1-impacto.html
│   ├── modelo-2-elegancia.html
│   ├── modelo-3-fluxo.html
│   └── modelo-final.html     # ← Modelo escolhido (base, não mexer)
├── index.html                # Site vivo (02/10/2026) — fechado a partir do modelo-final
├── _preview-hero.png         # Screenshot de verificação (02/10)
├── _preview-full.png         # Screenshot full page (02/10)
└── SITE.md                   # Este arquivo
```

## Modelo final — Decisões de design

- **Layout:** Hero centralizado (texto + botoes), stats row abaixo, servicos alternando texto/visual, processo flutuante, CTA
- **Nav:** Começa solida (opaca), vira glass translúcida ao rolar. Formato pill, centralizada
- **Partículas:** 180 pontos simulando céu noturno. 3 padroes de brilho independentes (suave, irregular, flicker). Interação com mouse (desorganiza e volta). Mais fortes que o normal
- **Cores:** Preto e branco. Sem verde. `%` nos stats em cinza claro
- **Service cards:** Mocks detalhados (perfil GMB, navegador com site, conversa WhatsApp). Borda com luz percorrendo no hover (conic-gradient, 6s por volta)
- **Processo:** Numeros flutuando sem moldura. Hover revela fundo sutil
- **Fonte:** Inter (Google Fonts)
- **Animacoes:** GSAP + ScrollTrigger. Entradas suaves com power2
- **Copy:** Direta, sem tracos, sem jargão. Foco no problema do cliente

## Seções do site

1. **Hero** — Titulo grande, descricao, 2 botoes (primario branco + outline)
2. **Stats** — 4 numeros grandes (76%, 75%, 87%, 46%) com label embaixo
3. **Soluções** — 3 rows alternados:
   - Google Meu Negócio (mock com perfil, estrelas, fotos)
   - Sites e Landing Pages (mock com navegador, nav, hero)
   - Automação e IA (mock com conversa WhatsApp automatizada)
4. **Como funciona** — 4 etapas: Diagnóstico, Estratégia, Implementação, Resultado
5. **CTA** — Titulo + frase + botao primario
6. **Footer** — Copyright + email

## O que falta

- [x] Link do WhatsApp funcional — os 3 CTAs (nav, hero, seção final) vão pra
  `wa.me/5542999955452` com texto pré-preenchido por CTA (02/10/2026)
- [x] Link do email funcional — footer em `mailto:guilherme@apside.com.br`
- [x] SEO básico — title, meta description, theme-color, favicon SVG inline
- [x] Botões viraram links (antes eram `<button>` morto, sem handler)
- [ ] Deploy (Vercel, Netlify ou GitHub Pages) — **gate: domínio/escolha é do Guilherme**
- [ ] `og:image` + `og:url` — precisam de URL absoluta, só depois do deploy
- [ ] Testar em dispositivos reais (só verificado em desktop 1440px via puppeteer)
- [ ] Contagem dos stats (76%, 75%, 87%, 46%) — conferir fonte antes do deploy

## Referências usadas

- Template dark (`dados/clinicas-ponta-grossa-2026-09-08/landing-pages/template-dark.html`)
- Site antigo (`site/index.html`) — partículas, GSAP, comparador
- Design guide (`identidade/design-guide.md`) — cores da marca

## Notas pro próximo passo

O modelo final é a base. Evoluir a partir dele, não criar do zero. O site ainda é estático (HTML puro). Quando tiver deploy, considerar transformar em algo mais dinâmico se necessário.
