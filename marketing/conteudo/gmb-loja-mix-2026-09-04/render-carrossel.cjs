const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const file = process.argv[2] || 'carrossel-loja-mix.html';
  const out = path.join(__dirname, 'instagram');
  fs.mkdirSync(out, { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1080 }, deviceScaleFactor: 1 });
  await page.goto('file://' + path.resolve(__dirname, file));
  await page.waitForTimeout(1500);
  const slides = await page.$$('.slide');
  for (let i = 0; i < slides.length; i++) {
    const n = String(i + 1).padStart(2, '0');
    const buf = await slides[i].screenshot({ type: 'png' });
    fs.writeFileSync(path.join(out, `carrossel-slide-${n}.png`), buf);
    console.log(`Slide ${n} (${buf.length} bytes)`);
  }
  await browser.close();
  console.log(`Renderizados ${slides.length} slides`);
})();
