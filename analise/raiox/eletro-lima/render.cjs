const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1350 } });

  const htmlPath = path.resolve(__dirname, 'raio-x-eletrolima.html');
  await page.goto('file://' + htmlPath);
  await page.waitForTimeout(2000);

  // Render full page
  const fullBuf = await page.screenshot({ fullPage: true, type: 'png' });
  fs.writeFileSync(path.resolve(__dirname, 'raio-x-eletrolima.png'), fullBuf);
  console.log('Gerado raio-x-eletrolima.png', fullBuf.length, 'bytes');

  await browser.close();
})();
