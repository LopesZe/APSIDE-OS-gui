const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1180, height: 1600 } });
  await p.goto('file://' + path.resolve(__dirname, 'gmb-comparativo.html'));
  await p.waitForTimeout(1500);
  const buf = await p.screenshot({ fullPage: true });
  fs.writeFileSync(path.resolve(__dirname, 'instagram', 'gmb-comparativo.png'), buf);
  console.log('gerado gmb-comparativo.png', buf.length, 'bytes');
  await b.close();
})();
