const puppeteer = require('puppeteer');
const { spawnSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const W = 1920, H = 1080, FPS = 30, DUR = 10;
const FRAMES = FPS * DUR;

(async () => {
  const dir = __dirname;
  const framesDir = path.join(dir, 'frames');
  if (!fs.existsSync(framesDir)) fs.mkdirSync(framesDir);
  else fs.readdirSync(framesDir).filter(f => f.endsWith('.png'))
        .forEach(f => fs.unlinkSync(path.join(framesDir, f)));

  console.log(`Render ${W}x${H} @ ${FPS}fps — ${FRAMES} frames`);

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu',
           '--force-device-scale-factor=1', '--hide-scrollbars'],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: W, height: H, deviceScaleFactor: 1 });

  const htmlPath = path.join(dir, 'motion.html');
  await page.goto('file:///' + htmlPath.replace(/\\/g, '/'), { waitUntil: 'networkidle0' });
  await page.evaluate(() => document.fonts.ready);

  const t0 = Date.now();
  for (let i = 0; i < FRAMES; i++) {
    const t = i / FPS;
    await page.evaluate(tt => window.__seek(tt), t);
    await page.screenshot({ path: path.join(framesDir, `frame_${String(i + 1).padStart(4, '0')}.png`) });
    if (i % 60 === 0) console.log(`  frame ${i}/${FRAMES} (t=${t.toFixed(2)}s)`);
  }
  await browser.close();
  console.log(`Captura: ${((Date.now() - t0) / 1000).toFixed(1)}s`);

  const out = path.join(dir, 'apside-10s.mp4');
  const res = spawnSync('ffmpeg', [
    '-y', '-framerate', FPS, '-start_number', '1',
    '-i', path.join(framesDir, 'frame_%04d.png'),
    '-c:v', 'libx264', '-preset', 'medium', '-crf', '17',
    '-pix_fmt', 'yuv420p', '-movflags', '+faststart', out,
  ], { stdio: ['ignore', 'pipe', 'pipe'] });

  if (res.status !== 0) {
    console.error(res.stderr.toString().slice(-2000));
    process.exit(1);
  }
  const kb = Math.round(fs.statSync(out).size / 1024);
  console.log(`OK: ${out} (${kb} KB)`);
})();
