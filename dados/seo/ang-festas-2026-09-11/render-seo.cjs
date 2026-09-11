const { chromium } = require('C:\\Users\\Guilherme Lopes\\APSIDE-OS-gui\\marketing\\conteudo\\carrossel-presenca-2026-08-25\\node_modules\\playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1080, height: 1920 } });
  await p.goto('file://' + path.resolve(__dirname, 'relatorio-seo.html'));
  await p.waitForTimeout(2000);
  const buf = await p.screenshot({ fullPage: true });
  fs.writeFileSync(path.resolve(__dirname, 'relatorio-seo.png'), buf);
  console.log('gerado relatorio-seo.png', buf.length, 'bytes');
  await b.close();
})();
