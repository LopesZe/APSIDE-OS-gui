const puppeteer = require('C:/Users/Guilherme Lopes/APSIDE-OS-gui/clientes/ang-festas/site/node_modules/puppeteer');
const path = require('path');
const fs = require('fs');

// Uso: node render.cjs caminho/para/deck.html [pasta-de-saida]
const htmlArg = process.argv[2];
if (!htmlArg) {
  console.error('Uso: node render.cjs caminho/para/deck.html [pasta-de-saida]');
  process.exit(1);
}

(async () => {
  const htmlPath = path.resolve(htmlArg);
  const outDir = process.argv[3]
    ? path.resolve(process.argv[3])
    : path.join(path.dirname(htmlPath), 'previews');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 810 });
  await page.goto('file:///' + htmlPath.replace(/\\/g, '/'), { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1500));

  const total = await page.$$eval('.slide', els => els.length);
  console.log('Slides encontrados:', total);

  for (let i = 0; i < total; i++) {
    if (i === 0) {
      await page.keyboard.press('Home');
    } else {
      await page.keyboard.press('ArrowRight');
    }
    await new Promise(r => setTimeout(r, 400));
    const n = String(i + 1).padStart(2, '0');
    await page.screenshot({ path: path.join(outDir, `slide-${n}.png`) });
    console.log(`slide-${n}.png salvo`);
  }

  await browser.close();
  console.log('OK — previews em', outDir);
})().catch(e => { console.error(e); process.exit(1); });
