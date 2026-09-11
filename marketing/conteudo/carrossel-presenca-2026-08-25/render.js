const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1080 }, deviceScaleFactor: 1 });
  const fileUrl = 'file://' + path.resolve(__dirname, 'carrossel.html');
  await page.goto(fileUrl);
  const slides = await page.$$('.slide');
  const total = slides.length;
  for (let i = 0; i < total; i++) {
    const n = String(i + 1).padStart(2, '0');
    await slides[i].screenshot({ path: path.join(__dirname, 'instagram', `slide-${n}.png`) });
  }
  await browser.close();
  console.log(`Renderizados ${total} slides.`);
})();
