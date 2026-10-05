const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const src = path.join(__dirname, '..', 'identidade', 'brandkit.svg');
const out = path.join(__dirname, '..', 'identidade', 'brandkit.png');
const W = 1200;
const H = 1800;

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: W, height: H, deviceScaleFactor: 2 });
  await page.goto('file:///' + src.replace(/\\/g, '/'), { waitUntil: 'networkidle0' });
  await page.evaluate(() => document.fonts.ready);
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: out, clip: { x: 0, y: 0, width: W, height: H } });
  await browser.close();

  const kb = Math.round(fs.statSync(out).size / 1024);
  console.log(`OK brandkit.png (${W}x${H}, 2x) — ${kb} KB`);
})();
