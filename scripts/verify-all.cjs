const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const targetUrl = 'http://localhost:5173';
const label = process.argv[2] || 'v3-redesign';

const viewports = [
  { name: 'mobile-360', width: 360, height: 780 },
  { name: 'mobile-390', width: 390, height: 844 },
  { name: 'tablet-768', width: 768, height: 1024 },
  { name: 'laptop-1024', width: 1024, height: 768 },
  { name: 'desktop-1440', width: 1440, height: 900 },
  { name: 'large-1920', width: 1920, height: 1080 },
];

const sections = ['hero', 'about', 'experience', 'projects', 'capabilities', 'certifications', 'contact'];

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

  console.log(`Starting comprehensive verification on ${targetUrl}...`);

  for (const vp of viewports) {
    const page = await browser.newPage();
    await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: 2 });
    try {
      await page.goto(targetUrl, { waitUntil: 'networkidle0', timeout: 15000 });
      await new Promise(r => setTimeout(r, 500));

      // Scroll sequentially through all sections to trigger whileInView
      for (const secId of sections) {
        await page.evaluate((id) => {
          document.getElementById(id)?.scrollIntoView();
        }, secId);
        await new Promise(r => setTimeout(r, 200));
      }

      // Scroll back to top
      await page.evaluate(() => window.scrollTo(0, 0));
      await new Promise(r => setTimeout(r, 600));

      // Capture hero
      await page.screenshot({
        path: path.join(outDir, `${vp.name}-hero.png`),
        fullPage: false
      });

      // Capture full page
      await page.screenshot({
        path: path.join(outDir, `${vp.name}-full.png`),
        fullPage: true
      });

      console.log(`✓ Captured ${vp.name} (hero & full)`);
    } catch (err) {
      console.error(`✗ Error capturing ${vp.name}:`, err.message);
    } finally {
      await page.close();
    }
  }

  // Interactive verification: Test Console tab switching and Project tab switching
  const testPage = await browser.newPage();
  await testPage.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  try {
    await testPage.goto(targetUrl, { waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 600));

    // Test Hero Console "Active Runtime" tab click
    await testPage.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('#hero button'));
      const stackBtn = buttons.find(b => b.textContent.includes('Runtime') || b.textContent.includes('Environnement'));
      if (stackBtn) stackBtn.click();
    });
    await new Promise(r => setTimeout(r, 400));
    await testPage.screenshot({
      path: path.join(outDir, `interactive-hero-stack-tab.png`),
      fullPage: false
    });
    console.log('✓ Captured interactive hero stack tab');

    // Scroll to projects and test "Architecture" tab
    await testPage.evaluate(() => {
      document.getElementById('projects')?.scrollIntoView();
    });
    await new Promise(r => setTimeout(r, 600));

    await testPage.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('#projects button'));
      const archBtn = buttons.find(b => b.textContent.includes('Architecture'));
      if (archBtn) archBtn.click();
    });
    await new Promise(r => setTimeout(r, 400));
    await testPage.screenshot({
      path: path.join(outDir, `interactive-project-architecture-tab.png`),
      fullPage: false
    });
    console.log('✓ Captured interactive project architecture tab');

    // Scroll to capabilities and test second domain
    await testPage.evaluate(() => {
      document.getElementById('capabilities')?.scrollIntoView();
    });
    await new Promise(r => setTimeout(r, 600));

    await testPage.evaluate(() => {
      const btns = Array.from(document.querySelectorAll('#capabilities button'));
      if (btns.length > 1) btns[1].click();
    });
    await new Promise(r => setTimeout(r, 400));
    await testPage.screenshot({
      path: path.join(outDir, `interactive-capabilities-tab.png`),
      fullPage: false
    });
    console.log('✓ Captured interactive capabilities tab');

    // Capture specific detailed section screenshots
    for (const sec of ['about', 'experience', 'projects', 'capabilities', 'certifications', 'contact']) {
      await testPage.evaluate((id) => {
        document.getElementById(id)?.scrollIntoView();
      }, sec);
      await new Promise(r => setTimeout(r, 400));
      await testPage.screenshot({
        path: path.join(outDir, `section-${sec}.png`),
        fullPage: false
      });
      console.log(`✓ Captured detailed viewport for section-${sec}`);
    }

  } catch (e) {
    console.error('Interactive testing warning:', e.message);
  } finally {
    await testPage.close();
  }

  await browser.close();
  console.log(`\nAll visual and interaction verification complete in: ${outDir}`);
})();
