const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1080 }, deviceScaleFactor: 1 });
  await page.goto('file://' + path.resolve(__dirname, 'teste-padrao.html'));
  const slide = await page.$('.slide');
  await slide.screenshot({ path: path.join(__dirname, 'instagram', 'teste-slide03.png') });
  await browser.close();
  console.log('Teste renderizado.');
})();
