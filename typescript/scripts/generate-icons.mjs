import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(scriptDir, '..');
const sizes = [16, 48, 128];
const iconsDir = path.join(projectRoot, 'assets', 'icons');
const mainAssetsDir = path.join(projectRoot, 'assets', 'main');
const inputPath = path.join(mainAssetsDir, 'FlowHubIcon.png');

async function generateIcons() {
  if (!fs.existsSync(mainAssetsDir)) {
    throw new Error(`Source assets directory missing: ${mainAssetsDir}`);
  }

  if (!fs.existsSync(inputPath)) {
    throw new Error(`Source icon missing: ${inputPath}`);
  }

  if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir, { recursive: true });
  }

  for (const size of sizes) {
    const outputPath = path.join(iconsDir, `icon${size}.png`);
    await sharp(inputPath)
      .resize(size, size)
      .toFile(outputPath);
    console.log(`Generated ${size}x${size} icon at ${outputPath}`);
  }
}

generateIcons().catch((error) => {
  console.error('Error generating icons:', error);
  process.exit(1);
});
