const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'transcricoes');
const videos = JSON.parse(fs.readFileSync(path.join(__dirname, 'videos.json'), 'utf8'));
const map = Object.fromEntries(videos.map(v => [v.videoId, v]));

const files = fs.readdirSync(dir).filter(f => f.endsWith('.vtt'));

files.forEach(file => {
  const videoId = file.split('.')[0];
  const content = fs.readFileSync(path.join(dir, file), 'utf8');
  const lines = content.split('\n');

  const cleanLines = [];
  const seen = new Set();

  lines.forEach(line => {
    if (line.startsWith('WEBVTT') ||
        line.startsWith('Kind:') ||
        line.startsWith('Language:') ||
        line.match(/^\d{2}:\d{2}:\d{2}/) ||
        line.match(/^align:/) ||
        line.trim() === '' ||
        /^[\s\d.:]+$/.test(line)) {
      return;
    }

    const cleaned = line
      .replace(/<[^>]+>/g, '')
      .replace(/\s+/g, ' ')
      .trim();

    if (cleaned && cleaned.length > 3 && !seen.has(cleaned)) {
      seen.add(cleaned);
      cleanLines.push(cleaned);
    }
  });

  const cleanContent = cleanLines.join('\n');
  fs.writeFileSync(path.join(dir, `${videoId}_limpo.txt`), cleanContent, 'utf8');
  const v = map[videoId];
  console.log(`${videoId} ${String(cleanContent.length).padStart(6)} | ${v ? v.title : '?'}`);
});

console.log('\nTotal limpos:', files.length);
