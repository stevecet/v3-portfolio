const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const targetUrl = process.argv[2] || 'http://localhost:5173';
const label = process.argv[3] || 'current';

const viewports = [
  { name: 'desktop-1440', width: 1440, height: 900 },
  { name: 'tablet-768', width: 768, height: 1024 },
  { name: 'mobile-390', width: 390, height: 844 },
];

(async () => {
  const outDir = path.resolve(__dirname, '..', 'screenshots', label);
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  for (const vp of viewports) {
    const page = await browser.newPage();
    await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: 2 });
    try {
      await page.goto(targetUrl, { waitUntil: 'networkidle0', timeout: 15000 });
      await new Promise(r => setTimeout(r, 1000));

      // Scroll smoothly down the entire page to trigger in-view animations
      await page.evaluate(async () => {
        await new Promise((resolve) => {
          let totalHeight = 0;
          const distance = 400;
          const timer = setInterval(() => {
            const scrollHeight = document.body.scrollHeight;
            window.scrollBy(0, distance);
            totalHeight += distance;

            if (totalHeight >= scrollHeight) {
              clearInterval(timer);
              window.scrollTo(0, 0); // scroll back to top
              setTimeout(resolve, 800);
            }
          }, 100);
        });
      });

      // Wait for layout and animations to settle
      await new Promise(r => setTimeout(r, 1000));

      // Capture viewport top (hero)
      await page.screenshot({
        path: path.join(outDir, `${vp.name}-hero.png`),
        fullPage: false
      });

      // Capture full page
      await page.screenshot({
        path: path.join(outDir, `${vp.name}-full.png`),
        fullPage: true
      });
      console.log(`Captured ${vp.name}`);
    } catch (err) {
      console.error(`Error capturing ${vp.name}:`, err.message);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  console.log(`All screenshots saved in: ${outDir}`);
})();
