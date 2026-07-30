import { chromium } from '@playwright/test';

const viewports = [
  { name: 'desktop', width: 1440, height: 1000 },
  { name: 'mobile', width: 390, height: 844 },
];

const browser = await chromium.launch();
const results = [];

for (const viewport of viewports) {
  const page = await browser.newPage({ viewport });
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
  await page.waitForSelector('.cinematic-canvas');
  await page.waitForTimeout(1400);

  const metrics = await page.evaluate(() => {
    const canvas = document.querySelector('.cinematic-canvas');
    const rect = canvas.getBoundingClientRect();
    const context = canvas.getContext('webgl2') || canvas.getContext('webgl');
    const width = Math.min(canvas.width, 96);
    const height = Math.min(canvas.height, 96);
    const pixels = new Uint8Array(width * height * 4);

    context.readPixels(
      Math.max(0, Math.floor(canvas.width / 2 - width / 2)),
      Math.max(0, Math.floor(canvas.height / 2 - height / 2)),
      width,
      height,
      context.RGBA,
      context.UNSIGNED_BYTE,
      pixels,
    );

    let coloredPixels = 0;
    for (let i = 0; i < pixels.length; i += 4) {
      if (pixels[i] + pixels[i + 1] + pixels[i + 2] > 18) {
        coloredPixels += 1;
      }
    }

    return {
      canvasWidth: canvas.width,
      canvasHeight: canvas.height,
      rectWidth: Math.round(rect.width),
      rectHeight: Math.round(rect.height),
      coloredPixels,
      textVisible: Boolean(document.querySelector('.cinematic-copy h1')),
    };
  });

  await page.mouse.move(viewport.width * 0.72, viewport.height * 0.42);
  await page.evaluate(() => window.scrollTo({ top: window.innerHeight * 1.8, behavior: 'instant' }));
  await page.waitForTimeout(700);
  await page.screenshot({ path: `/tmp/serendia-cinematic-${viewport.name}.png`, fullPage: false });

  results.push({ viewport: viewport.name, ...metrics });
  await page.close();
}

await browser.close();

console.log(JSON.stringify(results, null, 2));
