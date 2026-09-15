const fs = require('fs');
const path = require('path');

const transcricoesDir = path.resolve(__dirname, 'transcricoes');
const files = fs.readdirSync(transcricoesDir).filter(f => f.endsWith('.vtt'));

const videos = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'videos.json'), 'utf-8'));

files.forEach(file => {
  const videoId = file.split('.')[0];
  const video = videos.find(v => v.videoId === videoId);
  const title = video ? video.title : videoId;
  
  const content = fs.readFileSync(path.resolve(transcricoesDir, file), 'utf-8');
  const lines = content.split('\n');
  
  const cleanLines = [];
  const seen = new Set();
  
  lines.forEach(line => {
    // Skip VTT header, timestamps, empty lines, and alignment info
    if (line.startsWith('WEBVTT') || 
        line.startsWith('Kind:') || 
        line.startsWith('Language:') ||
        line.match(/^\d{2}:\d{2}:\d{2}/) ||
        line.match(/^align:/) ||
        line.trim() === '' ||
        line.match(/^Kind: captions$/)) {
      return;
    }
    
    // Remove HTML/caption tags and clean up
    let cleaned = line
      .replace(/<[^>]+>/g, '')  // Remove HTML tags
      .replace(/\s+/g, ' ')    // Normalize whitespace
      .trim();
    
    // Skip duplicate lines and very short lines
    if (cleaned && cleaned.length > 3 && !seen.has(cleaned)) {
      seen.add(cleaned);
      cleanLines.push(cleaned);
    }
  });
  
  const cleanContent = cleanLines.join('\n');
  const outputFile = path.resolve(transcricoesDir, `${videoId}_limpo.txt`);
  fs.writeFileSync(outputFile, cleanContent);
  
  console.log(`${title}: ${cleanContent.length} chars`);
});

console.log('\nDone!');
