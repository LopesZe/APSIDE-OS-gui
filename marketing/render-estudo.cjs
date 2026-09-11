const { chromium } = require('C:/Users/guilo/APSIDE-OS/marketing/conteudo/carrossel-presenca-2026-08-25/node_modules/playwright');
const path = require('path');
const fs = require('fs');

const INPUT = path.join(__dirname, 'estudo-gmb.html');
const OUTPUT_DIR = path.join(__dirname, 'estudo-gmb');

(async () => {
  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1122, height: 794 } });
  await page.goto('file:///' + INPUT.replace(/\\/g, '/'), { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  const pages = await page.$$('.page');
  console.log(`Encontradas ${pages.length} páginas`);

  for (let i = 0; i < pages.length; i++) {
    const num = String(i + 1).padStart(2, '0');
    await pages[i].screenshot({ path: path.join(OUTPUT_DIR, `pagina-${num}.png`), type: 'png' });
    console.log(`  → pagina-${num}.png`);
  }

  await page.screenshot({ path: path.join(OUTPUT_DIR, 'estudo-completo.png'), fullPage: true, type: 'png' });
  console.log('  → estudo-completo.png');

  await page.pdf({
    path: path.join(OUTPUT_DIR, 'estudo-gmb.pdf'),
    format: 'A4',
    landscape: true,
    printBackground: true,
    margin: { top: '0', bottom: '0', left: '0', right: '0' }
  });
  console.log('  → estudo-gmb.pdf');

  await browser.close();
  console.log('\nPronto!');
})();
