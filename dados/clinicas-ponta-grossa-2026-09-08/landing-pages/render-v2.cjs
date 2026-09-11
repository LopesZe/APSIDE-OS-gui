const { chromium } = require('C:/Users/guilo/APSIDE-OS/marketing/conteudo/carrossel-presenca-2026-08-25/node_modules/playwright');
const path = require('path');

const slug = process.argv[2] || 'estetica-bucal';
const htmlPath = path.resolve(__dirname, slug, 'index.html');
const outputPath = path.resolve(__dirname, slug, 'preview.png');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('file:///' + htmlPath.replace(/\\/g, '/'), { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  await page.screenshot({ path: outputPath, fullPage: true });
  await browser.close();
  console.log('✅', outputPath);
})();
