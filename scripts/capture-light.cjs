const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const targetUrl = 'http://localhost:5173';
const outDir = path.resolve(__dirname, '..', 'screenshots', 'editorial-light');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  
  await page.goto(targetUrl, { waitUntil: 'networkidle0' });
  await page.evaluate(() => {
    localStorage.setItem('steveceto-theme', 'light');
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
  });
  await page.reload({ waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 600));

  // Capture Light Hero
  await page.screenshot({
    path: path.join(outDir, 'desktop-1440-hero-light.png'),
    fullPage: false
  });
  console.log('✓ Captured desktop-1440-hero-light.png');

  // Jump sequentially to each section with behavior: auto
  for (const sec of ['about', 'experience', 'projects', 'capabilities', 'certifications', 'contact']) {
    await page.evaluate((id) => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'auto', block: 'start' });
      }
    }, sec);
    await new Promise(r => setTimeout(r, 400));
    await page.screenshot({
      path: path.join(outDir, `section-${sec}-light.png`),
      fullPage: false
    });
    console.log(`✓ Captured section-${sec}-light.png`);
  }

  // Mobile viewport 390px in light mode
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({
    path: path.join(outDir, 'mobile-390-hero-light.png'),
    fullPage: false
  });
  console.log('✓ Captured mobile-390-hero-light.png');

  await browser.close();
  console.log('All light mode screenshots captured successfully!');
})();
