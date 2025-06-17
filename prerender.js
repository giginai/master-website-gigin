import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8');
const { render } = await import('./dist/server/entry-server.js');

// Define static routes from src/pages
const routesToPrerender = fs
  .readdirSync(toAbsolute('src/pages'))
  .map((file) => {
    const name = file.replace(/\.tsx$/, '').toLowerCase();
    return name === 'index' ? `/` : `/${name}`;
  });

// Add additional dynamic routes
const additionalRoutes = [
  '/home',
  '/about-us',
  '/why-gigin',
  '/hiring-solutions',
  '/verification',
  '/find-a-job',
  '/blog',
  '/jobs-for-accountant',
  '/jobs-in-noida'
];

const allRoutes = [...new Set([...routesToPrerender, ...additionalRoutes])];

(async () => {
  for (const url of allRoutes) {
    try {
      const { html: appHtml, helmet } = await render(url); // await is important
      let html = template.replace(`<!--app-html-->`, appHtml);

      if (helmet?.title) {
        html = html.replace(/<title>.*?<\/title>/, helmet.title.toString());
      }
      if (helmet?.meta) {
        html = html.replace('</head>', `${helmet.meta.toString()}</head>`);
      }

      const filePath = `dist${url === '/' ? '/index' : url}.html`;
      fs.writeFileSync(toAbsolute(filePath), html);
      console.log('✅ pre-rendered:', filePath);
    } catch (error) {
      console.error(`❌ Error pre-rendering ${url}:`, error);
    }
  }

  // Generate sitemap
  await import('./scripts/generateSitemap.js');
})();
