import sharp from 'sharp';

await sharp('public/og.svg').png().toFile('public/og.png');
console.log('Generated public/og.png (1200 × 630).');
