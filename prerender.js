
import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

// Static routes matching App.tsx
const staticRoutes = [
  '/',
  '/home',
  '/about-us',
  '/why-gigin',
  '/hiring-solutions',
  '/verification',
  '/verification/identity',
  '/verification/criminal',
  '/verification/employment',
  '/verification/education',
  '/verification/social',
  '/verification/financial',
  '/verification/reference',
  '/verification/address',
  '/find-a-job',
  '/blog'
];

// Dynamic job routes based on App.tsx patterns
const jobRoutes = [
  '/jobs-for-software-engineer',
  '/jobs-for-data-scientist',
  '/jobs-for-product-manager',
  '/jobs-for-sales-executive',
  '/jobs-for-marketing-manager',
  '/jobs-for-business-analyst',
  '/jobs-in-mumbai',
  '/jobs-in-delhi',
  '/jobs-in-bangalore',
  '/jobs-in-pune',
  '/jobs-in-hyderabad',
  '/jobs-in-chennai',
  '/jobs-in-kolkata',
  '/jobs-in-ahmedabad'
];

// Sample blog routes (these should be generated dynamically in a real implementation)
const blogRoutes = [
  '/blog/category/hiring-tips',
  '/blog/category/verification-guides',
  '/blog/category/industry-insights',
  '/blog/hiring-tips/sample-blog-post',
  '/blog/verification-guides/complete-guide-to-background-checks',
  '/blog/industry-insights/future-of-recruitment'
];

const allRoutes = [...staticRoutes, ...jobRoutes, ...blogRoutes];

// Function to ensure directory exists
const ensureDirectoryExists = (filePath) => {
  const dirname = path.dirname(filePath);
  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname, { recursive: true });
    console.log('Created directory:', dirname);
  }
};

;(async () => {
  for (const url of allRoutes) {
    try {
      console.log('Pre-rendering:', url);
      const { html: appHtml, helmet } = render(url);
      let html = template.replace(`<!--app-html-->`, appHtml);
      
      // Replace helmet meta tags if available
      if (helmet && helmet.title) {
        html = html.replace(/<title>.*?<\/title>/, helmet.title.toString());
      }
      if (helmet && helmet.meta) {
        // Insert additional meta tags
        html = html.replace('</head>', `${helmet.meta.toString()}</head>`);
      }

      // Determine file path
      let filePath;
      if (url === '/') {
        filePath = 'dist/index.html';
      } else {
        filePath = `dist${url}.html`;
      }

      const absoluteFilePath = toAbsolute(filePath);
      
      // Ensure directory exists before writing
      ensureDirectoryExists(absoluteFilePath);
      
      fs.writeFileSync(absoluteFilePath, html);
      console.log('Pre-rendered:', filePath);
    } catch (error) {
      console.error(`Error pre-rendering ${url}:`, error);
    }
  }
  
  // Generate sitemap
  try {
    await import('./scripts/generateSitemap.js');
    console.log('Sitemap generation completed');
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
})()
