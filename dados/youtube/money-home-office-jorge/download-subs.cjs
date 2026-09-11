const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const videos = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'videos.json'), 'utf-8'));

// Filter SEO-related videos based on title keywords
const seoKeywords = ['seo', 'backlink', 'site', 'blog', 'afiliado', 'google', 'tráfego', 'rank', 'pagina', 'domínio'];
const seoVideos = videos.filter(v => {
  const lower = v.title.toLowerCase();
  return seoKeywords.some(kw => lower.includes(kw));
});

console.log(`Found ${seoVideos.length} SEO-related videos out of ${videos.length}`);
console.log('\nSEO-related videos:');
seoVideos.forEach((v, i) => {
  console.log(`${i+1}. ${v.title}`);
});

// Download subtitles for each SEO video
const outputDir = path.resolve(__dirname, 'transcricoes');
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

seoVideos.forEach((v, i) => {
  console.log(`\n[${i+1}/${seoVideos.length}] Downloading subtitles for: ${v.title}`);
  try {
    const cmd = `yt-dlp --write-auto-sub --sub-lang pt --skip-download --output "${outputDir}/${v.videoId}" "https://www.youtube.com/watch?v=${v.videoId}"`;
    execSync(cmd, { stdio: 'pipe', timeout: 30000 });
    console.log(`  ✓ Subtitles saved for ${v.videoId}`);
  } catch (e) {
    console.log(`  ✗ Failed: ${e.message}`);
  }
});

// List downloaded files
const files = fs.readdirSync(outputDir);
console.log(`\n\nDownloaded ${files.length} files:`);
files.forEach(f => console.log(`  ${f}`));
