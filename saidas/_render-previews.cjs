const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1600, height: 900, deviceScaleFactor: 1 });
  const file = 'file:///' + path.resolve('saidas/apresentacao-decisao-modelo-2026-10-02.html').replace(/\\/g, '/');
  await page.goto(file, { waitUntil: 'networkidle0', timeout: 30000 });
  await page.evaluate(() => document.fonts.ready);
  const slides = await page.$$('.slide');
  console.log('slides:', slides.length);
  const outDir = path.resolve('saidas/previews-decisao');
  require('fs').mkdirSync(outDir, { recursive: true });
  for (let i = 0; i < slides.length; i++) {
    await slides[i].screenshot({ path: path.join(outDir, `slide-${String(i + 1).padStart(2, '0')}.png`) });
    console.log('ok slide', i + 1);
  }
  await browser.close();
})();
