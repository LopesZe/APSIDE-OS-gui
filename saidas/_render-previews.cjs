const puppeteer = require('puppeteer');
const path = require('path');

const htmlArg = process.argv[2] || 'saidas/apresentacao-decisao-modelo-2026-10-02.html';
const outArg = process.argv[3] || 'saidas/previews-decisao';

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1600, height: 900, deviceScaleFactor: 1 });
  const file = 'file:///' + path.resolve(htmlArg).replace(/\\/g, '/');
  await page.goto(file, { waitUntil: 'networkidle0', timeout: 30000 });
  await page.evaluate(() => document.fonts.ready);
  const slides = await page.$$('.slide');
  console.log('slides:', slides.length);
  const outDir = path.resolve(outArg);
  require('fs').mkdirSync(outDir, { recursive: true });
  for (let i = 0; i < slides.length; i++) {
    await slides[i].screenshot({ path: path.join(outDir, `slide-${String(i + 1).padStart(2, '0')}.png`) });
    console.log('ok slide', i + 1);
  }
  await browser.close();
})();
