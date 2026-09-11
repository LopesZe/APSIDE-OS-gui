const fs = require('fs');
const path = require('path');

const template = fs.readFileSync(path.join(__dirname, 'template-dark.html'), 'utf-8');

const prospects = [
  {
    slug: 'estetica-bucal',
    nome: 'Clínica de Estética Bucal',
    nomeCurto: 'Estética Bucal',
    endereco: 'R. Visconde de Nacar, 768 · Centro · Ponta Grossa/PR',
    telefone: '(42) 3226-6748',
    score: 35,
    scoreDesc: '4.7★ DentMap · 6.995 seguidores Instagram · sem site próprio.',
    scoreCor: '#f59e0b',
    problemas: [
      { ico: '🌐', titulo: 'Sem site', texto: 'Com 7 mil seguidores no Instagram, não existe endereço online. Quem pesquisa "estética bucal Ponta Grossa" no Google não encontra nada.' },
      { ico: '📷', titulo: 'Google incompleto', texto: 'O Google Meu Negócio não tem fotos profissionais, descrição detalhada nem horário. O Instagram é forte, mas o Google não sabe disso.' },
      { ico: '⭐', titulo: 'Avaliações sem gestão', texto: 'Avaliações positivas no DentMap, mas nenhuma presença no Google. Quem busca não vê social proof.' },
      { ico: '📊', titulo: 'Dependência de uma plataforma', texto: 'Todo tráfego vem do Instagram. Se o algoritmo mudar, 7 mil seguidores podem virar zero.' },
    ],
    solucoes: [
      { ico: '🌐', titulo: 'Landing Page com agendamento', texto: 'Página profissional com WhatsApp direto, fotos dos procedimentos e depoimentos.', tag: '5–7 dias' },
      { ico: '📸', titulo: 'Google Meu Negócio otimizado', texto: 'Perfil completo: foto de capa, 8 fotos, serviços categorizados, horário, WhatsApp.', tag: '2–5 dias' },
      { ico: '⭐', titulo: 'Gestão de avaliações', texto: 'Resposta pra cada avaliação. Solicitação ativa pros clientes satisfeitos.', tag: '30 avaliações em 90 dias' },
      { ico: '📱', titulo: 'Display NFC', texto: 'Plaqueta no balcão. Paciente aproxima e abre o Google Maps.', tag: 'Incluso' },
    ],
    precos: [
      { nome: 'Básico', valor: '297', itens: ['Google Meu Negócio completo', '8 fotos profissionais', '3 serviços categorizados', 'Respostas por 30 dias', 'Display NFC'] },
      { nome: 'Completo', valor: '697', featured: true, itens: ['Tudo do Básico', 'Landing Page responsiva', 'SEO básico local', '4 peças de conteúdo', 'Display NFC'] },
      { nome: 'Premium', valor: '1.990', itens: ['Tudo do Completo', '12 peças de conteúdo', 'Redes sociais (3 meses)', 'Gestão Google (3 meses)', 'Display NFC'] },
    ],
    frase: '"Vi que vocês têm 7 mil seguidores no Instagram. Quando alguém pesquisa estética bucal, vocês não aparecem no Google. Um site simples resolve isso em 2 semanas."',
  },
  {
    slug: 'lessa-clinica',
    nome: 'Lessa Clínica Médica',
    nomeCurto: 'Lessa',
    endereco: 'R. Adair Cruz Jakinzo, 136 · Cara-Cara · Ponta Grossa/PR',
    telefone: '(44) 3031-1015',
    score: 10,
    scoreDesc: '0 avaliações Google · sem site · sem presença digital nenhuma.',
    scoreCor: '#ef4444',
    problemas: [
      { ico: '⭐', titulo: '0 avaliações no Google', texto: 'Nenhuma avaliação registrada. Pacientes que buscam "clínica médica perto de mim" veem concorrentes com avaliações — e escolhem eles.' },
      { ico: '🌐', titulo: 'Sem site', texto: 'Não existe endereço online pra quem quer saber horários, especialidades ou como chegar.' },
      { ico: '📷', titulo: 'Google sem foto', texto: 'O perfil mostra um ícone genérico. Sem foto de fachada ou consultório, o paciente não sabe o que esperar.' },
      { ico: '🕐', titulo: 'Informações desatualizadas', texto: 'Horário e endereço podem estar errados no Google. O paciente liga e não atende. Desiste.' },
    ],
    solucoes: [
      { ico: '📸', titulo: 'Google Meu Negócio completo', texto: 'Perfil otimizado: foto de capa, consultório, horário completo, WhatsApp, serviços.', tag: '2–5 dias' },
      { ico: '🌐', titulo: 'Landing Page simples', texto: 'Página com endereço, mapa, horários, especialidades e botão de WhatsApp.', tag: '5–7 dias' },
      { ico: '⭐', titulo: 'Gestão de avaliações', texto: 'Estratégia pra começar a receber avaliações. Solicitação ativa pros pacientes.', tag: 'Primeiras avaliações em 30 dias' },
      { ico: '📱', titulo: 'Display NFC', texto: 'Plaqueta no recepcionista. Paciente aproxima e abre o Maps.', tag: 'Incluso' },
    ],
    precos: [
      { nome: 'Básico', valor: '297', itens: ['Google Meu Negócio completo', '8 fotos profissionais', '3 serviços categorizados', 'Respostas por 30 dias', 'Display NFC'] },
      { nome: 'Completo', valor: '697', featured: true, itens: ['Tudo do Básico', 'Landing Page responsiva', 'SEO básico local', '4 peças de conteúdo', 'Display NFC'] },
      { nome: 'Premium', valor: '1.990', itens: ['Tudo do Completo', '12 peças de conteúdo', 'Redes sociais (3 meses)', 'Gestão Google (3 meses)', 'Display NFC'] },
    ],
    frase: '"A Lessa não aparece quando alguém busca clínica médica perto de mim em Ponta Grossa. Isso significa pacientes perdidos todo dia."',
  },
  {
    slug: 'primed-health',
    nome: 'Primed Health Care',
    nomeCurto: 'Primed',
    endereco: 'R. Nestor Guimarães, 281 · Estrela · Ponta Grossa/PR',
    telefone: 'Verificar',
    score: 30,
    scoreDesc: 'Site existe mas básico · 34 likes Facebook · 0 avaliações Google.',
    scoreCor: '#f59e0b',
    problemas: [
      { ico: '🌐', titulo: 'Site básico e lento', texto: 'clinicaprimed.com.br existe, mas é amador. Sem SEO, sem agendamento, sem WhatsApp. Não converte.' },
      { ico: '⭐', titulo: '0 avaliações Google', texto: 'Com site mas nenhuma avaliação. O Google prioriza quem tem provas sociais. A Primed não aparece.' },
      { ico: '📱', titulo: 'Redes sociais fracas', texto: '34 likes no Facebook. Instagram fraco ou inexistente. Não gera autoridade.' },
      { ico: '🔍', titulo: 'SEO zero', texto: 'Quem busca "fisioterapia Ponta Grossa" não encontra a Primed nas primeiras páginas.' },
    ],
    solucoes: [
      { ico: '📸', titulo: 'Google Meu Negócio otimizado', texto: 'Perfil completo com fotos, serviços, horário e avaliações gerenciadas.', tag: '2–5 dias' },
      { ico: '🌐', titulo: 'Reformulação do site', texto: 'Novo site responsivo com SEO, agendamento pelo WhatsApp e depoimentos.', tag: '10–15 dias' },
      { ico: '⭐', titulo: 'Gestão de avaliações', texto: 'Respostas + solicitação ativa. Meta: 30 avaliações em 90 dias.', tag: '30 avaliações em 90 dias' },
      { ico: '📱', titulo: 'Display NFC', texto: 'Plaqueta no balcão pra pacientes aproximarem e avaliarem.', tag: 'Incluso' },
    ],
    precos: [
      { nome: 'Básico', valor: '297', itens: ['Google Meu Negócio completo', '8 fotos profissionais', '3 serviços categorizados', 'Respostas por 30 dias', 'Display NFC'] },
      { nome: 'Completo', valor: '697', featured: true, itens: ['Tudo do Básico', 'Reformulação do site', 'SEO básico local', '4 peças de conteúdo', 'Display NFC'] },
      { nome: 'Premium', valor: '1.990', itens: ['Tudo do Completo', '12 peças de conteúdo', 'Redes sociais (3 meses)', 'Gestão Google (3 meses)', 'Display NFC'] },
    ],
    frase: '"A Primed tem um site, mas quando alguém busca fisioterapia, o Google recomenda antes clínicas com mais avaliações. Posso colocar vocês no mapa."',
  },
  {
    slug: 'bergasse',
    nome: 'Clínica Bergasse',
    nomeCurto: 'Bergasse',
    endereco: 'R. Joaquim de Paula Xavier, 561 · Jardim Américo · Ponta Grossa/PR',
    telefone: '(42) 3224-5549',
    score: 15,
    scoreDesc: 'Policlínica com vários médicos · 0 avaliações · sem site.',
    scoreCor: '#ef4444',
    problemas: [
      { ico: '🌐', titulo: 'Sem site', texto: 'Policlínica com múltiplos especialistas, mas sem nenhum site. Quem busca "psiquiatria Ponta Grossa" não encontra.' },
      { ico: '⭐', titulo: '0 avaliações', texto: 'Nenhum profissional tem avaliações no Google. Cada médico é uma oportunidade perdida.' },
      { ico: '📷', titulo: 'Google genérico', texto: 'Perfil sem foto, sem descrição das especialidades. O Google não sabe o que a Bergasse oferece.' },
      { ico: '📋', titulo: 'Múltiplos profissionais sem presença', texto: 'Cada médico atende sozinho, mas nenhum tem presença digital individual.' },
    ],
    solucoes: [
      { ico: '📸', titulo: 'Google por profissional', texto: 'Perfil otimizado pra cada médico com especialidade, fotos e avaliações.', tag: '5–10 dias' },
      { ico: '🌐', titulo: 'Site institucional', texto: 'Página com todos os profissionais, especialidades, horários e agendamento.', tag: '10–15 dias' },
      { ico: '⭐', titulo: 'Gestão de avaliações', texto: 'Estratégia pra cada médico receber avaliações individuais.', tag: '30 por profissional em 90 dias' },
      { ico: '📱', titulo: 'Display NFC', texto: 'Plaqueta na recepção. Paciente aproxima e avalia o médico.', tag: 'Incluso' },
    ],
    precos: [
      { nome: 'Básico', valor: '497', itens: ['Google completo', '8 fotos por profissional', 'Até 3 médicos', 'Respostas por 30 dias', 'Display NFC'] },
      { nome: 'Completo', valor: '997', featured: true, itens: ['Tudo do Básico', 'Site institucional', 'SEO básico', '6 peças de conteúdo', 'Display NFC'] },
      { nome: 'Premium', valor: '2.490', itens: ['Tudo do Completo', '12 peças de conteúdo', 'Redes sociais (3 meses)', 'Gestão Google (3 meses)', 'Display NFC'] },
    ],
    frase: '"A Bergasse atende psiquiatria, psicologia e clínica geral, mas não aparece em nenhuma busca. Pacientes vão pra clínicas que aparecem."',
  },
];

function buildLista(items, tipo) {
  return items.map(it => {
    const tag = it.tag ? `<span class="lista-tag ${tipo === 'problema' ? 'vermelho' : 'verde'}">${it.tag}</span>` : '';
    return `        <li class="lista-item">
          <div class="lista-ico ${tipo}">${it.ico}</div>
          <div class="lista-texto">
            <h4>${it.titulo}</h4>
            <p>${it.texto}</p>
            ${tag}
          </div>
        </li>`;
  }).join('\n');
}

function buildPrecos(items) {
  return items.map(p => {
    const cls = p.featured ? ' featured' : '';
    const btnCls = p.featured ? ' primary' : '';
    const lis = p.itens.map(i => `          <li>${i}</li>`).join('\n');
    return `        <div class="price-card${cls}">
          <div class="price-name">${p.nome}</div>
          <div class="price-val">R$ ${p.valor}<small>/mês</small></div>
          <ul class="price-list">
${lis}
          </ul>
          <button class="price-btn${btnCls}">Escolher ${p.nome}</button>
        </div>`;
  }).join('\n\n');
}

prospects.forEach(p => {
  let html = template
    .replace(/\{\{NOME\}\}/g, p.nome)
    .replace(/\{\{NOME_CURTO\}\}/g, p.nomeCurto)
    .replace(/\{\{ENDERECO\}\}/g, p.endereco)
    .replace(/\{\{TELEFONE\}\}/g, p.telefone)
    .replace(/\{\{SCORE\}\}/g, p.score)
    .replace(/\{\{SCORE_DESC\}\}/g, p.scoreDesc)
    .replace(/\{\{SCORE_COR\}\}/g, p.scoreCor)
    .replace(/\{\{FRASE\}\}/g, p.frase)
    .replace('{{PROBLEMAS}}', buildLista(p.problemas, 'problema'))
    .replace('{{SOLUCOES}}', buildLista(p.solucoes, 'solucao'))
    .replace('{{PRECOS}}', buildPrecos(p.precos));

  const dir = path.join(__dirname, p.slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf-8');
  console.log(`✅ ${p.slug}/index.html`);
});

console.log('\nPronto!');
