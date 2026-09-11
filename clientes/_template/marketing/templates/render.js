const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

// Uso: node render.js [arquivo.html]
// Padrão: carrossel-base.html (ou o html que estiver na pasta)
(async () => {
  const file = process.argv[2] || 'carrossel-base.html';
  const out = path.join(__dirname, 'instagram');
  fs.mkdirSync(out, { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1080 }, deviceScaleFactor: 1 });
  await page.goto('file://' + path.resolve(__dirname, file));
  const slides = await page.$$('.slide');
  for (let i = 0; i < slides.length; i++) {
    const n = String(i + 1).padStart(2, '0');
    await slides[i].screenshot({ path: path.join(out, `slide-${n}.png`) });
  }
  await browser.close();
  console.log(`Renderizados ${slides.length} slides em ${out}`);
})();
