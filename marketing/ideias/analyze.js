const fs = require("fs");
function jpegSize(buf) {
  let i = 2;
  while (i < buf.length) {
    if (buf[i] !== 0xFF) { i++; continue; }
    const m = buf[i + 1];
    const sof = (m >= 0xC0 && m <= 0xC3) || (m >= 0xC5 && m <= 0xC7) ||
                (m >= 0xC9 && m <= 0xCB) || (m >= 0xCD && m <= 0xCF);
    if (sof) {
      const h = buf.readUInt16BE(i + 5);
      const w = buf.readUInt16BE(i + 7);
      return { w, h };
    }
    const len = buf.readUInt16BE(i + 2);
    i += 2 + len;
  }
  return null;
}
const files = fs.readdirSync(".").filter(f => /\.jpg$/i.test(f)).sort();
let total = 0;
for (const f of files) {
  const b = fs.readFileSync(f);
  const s = jpegSize(b);
  const kb = (b.length / 1024).toFixed(0);
  total += b.length;
  let info = "n/a";
  if (s) {
    const r = s.w / s.h;
    let tipo = "?";
    if (Math.abs(r - 0.8) < 0.02) tipo = "feed 4:5";
    else if (Math.abs(r - 1) < 0.02) tipo = "quadrado 1:1";
    else if (Math.abs(r - 0.5625) < 0.02) tipo = "story 9:16";
    else tipo = "outro(" + r.toFixed(2) + ")";
    info = `${s.w}x${s.h}  ${tipo}`;
  }
  console.log(f.padEnd(56) + (s ? s.w + "x" + s.h : "n/a").padEnd(13) + kb.padStart(5) + "kb  " + info);
}
console.log("\nTotal: " + files.length + " arquivos, " + (total / 1024 / 1024).toFixed(1) + " MB");
