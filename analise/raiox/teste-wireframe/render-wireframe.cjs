const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1500, height: 1000 },
    deviceScaleFactor: 2
  });

  const htmlPath = path.resolve(__dirname, 'wireframe-teste.html');
  await page.goto('file://' + htmlPath);
  await page.waitForTimeout(1500);

  const el = await page.locator('.canvas');
  await el.screenshot({ path: path.resolve(__dirname, 'previa-conta-gestor.png') });
  console.log('Gerado previa-conta-gestor.png');

  await browser.close();
})();
