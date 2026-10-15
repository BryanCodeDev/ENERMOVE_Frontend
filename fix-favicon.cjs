const sharp = require('sharp');
const fs = require('fs');

const SRC = 'src/assets/images/logo.webp'; // PNG real 1671x941
const BG = { r: 0, g: 78, b: 168, alpha: 1 };

(async () => {
  // 1. Corregir src/assets/images/logo.webp (actualmente es PNG) -> webp real
  await sharp(SRC).webp({ quality: 88 }).toFile('src/assets/images/logo.webp');
  console.log('1. src/assets/images/logo.webp -> webp real');

  // 2. Corregir src/assets/images/favicon.ico (actualmente PNG) -> ICO con 7 tamaños
  const sizes = [16, 32, 48, 64, 128, 256, 512];
  const icoBuffers = await Promise.all(
    sizes.map((s) => sharp(SRC).resize(s, s, { fit: 'contain', background: BG }).png().toBuffer())
  );
  const header = Buffer.alloc(6);
  header.writeUInt8(0, 0); header.writeUInt8(0, 1); header.writeUInt8(1, 2); header.writeUInt8(icoBuffers.length, 3);
  const entries = []; const datas = []; let off = 6 + icoBuffers.length * 16;
  for (let i = 0; i < icoBuffers.length; i++) {
    const e = Buffer.alloc(16); const s = sizes[i]; const buf = icoBuffers[i];
    e.writeUInt8(s >= 256 ? 0 : s, 0); e.writeUInt8(s >= 256 ? 0 : s, 1);
    e.writeUInt8(0, 2); e.writeUInt8(0, 3); e.writeUInt16LE(1, 4); e.writeUInt16LE(32, 6);
    e.writeUInt32LE(buf.length, 8); e.writeUInt32LE(off, 12);
    entries.push(e); datas.push(buf); off += buf.length;
  }
  const ico = Buffer.concat([header, ...entries, ...datas]);
  fs.writeFileSync('src/assets/images/favicon.ico', ico);
  console.log('2. src/assets/images/favicon.ico -> ICO real (' + ico.length + ' bytes)');

  // 3. public/favicon.ico (ya fue regenerado, pero por si acaso lo sobrescribimos)
  fs.writeFileSync('public/favicon.ico', ico);
  console.log('3. public/favicon.ico -> OK');

  // 4. public/favicon.svg
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" fill="#004EA8"/>
  <text x="256" y="340" font-family="Arial, sans-serif" font-size="200" font-weight="bold" fill="#FFFFFF" text-anchor="middle">E</text>
</svg>`;
  fs.writeFileSync('public/favicon.svg', svg);
  console.log('4. public/favicon.svg -> OK');

  // 5. public/apple-touch-icon.png (180x180)
  await sharp(SRC).resize(180, 180, { fit: 'contain', background: BG }).png().toFile('public/apple-touch-icon.png');
  console.log('5. public/apple-touch-icon.png -> OK');

  // 6. public/icon-192.png y icon-512.png (para manifest)
  await sharp(SRC).resize(192, 192, { fit: 'contain', background: BG }).png().toFile('public/icon-192.png');
  await sharp(SRC).resize(512, 512, { fit: 'contain', background: BG }).png().toFile('public/icon-512.png');
  console.log('6. public/icon-192.png, icon-512.png -> OK');

  // Verify
  const meta = await sharp('public/favicon.ico').metadata();
  console.log('VERIFY favicon.ico:', meta.width, 'x', meta.height, meta.format);
})().catch((e) => { console.error('ERROR:', e.message); process.exit(1); });