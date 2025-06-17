
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

// Dynamic job routes (jobs-for-* and jobs-in-*)
const dynamicJobRoutes = [
  '/jobs-for-software-engineer',
  '/jobs-for-data-scientist',
  '/jobs-for-product-manager',
  '/jobs-for-sales-executive',
  '/jobs-for-marketing-manager',
  '/jobs-for-business-analyst',
  '/jobs-for-ui-ux-designer',
  '/jobs-for-devops-engineer',
  '/jobs-for-qa-engineer',
  '/jobs-for-project-manager',
  '/jobs-in-mumbai',
  '/jobs-in-delhi',
  '/jobs-in-bangalore',
  '/jobs-in-pune',
  '/jobs-in-hyderabad',
  '/jobs-in-chennai',
  '/jobs-in-kolkata',
  '/jobs-in-ahmedabad',
  '/jobs-in-surat',
  '/jobs-in-jaipur'
];

// Blog category and post routes (examples)
const blogRoutes = [
  '/blog/category/hiring-tips',
  '/blog/category/background-verification',
  '/blog/category/hr-insights',
  '/blog/category/compliance',
  '/blog/hiring-tips/effective-screening-process',
  '/blog/background-verification/identity-verification-guide',
  '/blog/hr-insights/remote-hiring-best-practices'
];

const allRoutes = [...staticRoutes, ...dynamicJobRoutes, ...blogRoutes];

// Function to ensure directory exists
const ensureDirectoryExists = (filePath) => {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log('Created directory:', dir);
  }
};

// Function to get file path for route
const getFilePathForRoute = (route) => {
  if (route === '/') {
    return toAbsolute('dist/index.html');
  }
  
  // For routes ending with a slash, remove it
  const cleanRoute = route.endsWith('/') && route !== '/' ? route.slice(0, -1) : route;
  
  return toAbsolute(`dist${cleanRoute}.html`);
};

;(async () => {
  // Ensure dist directory exists
  const distDir = toAbsolute('dist');
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  for (const url of allRoutes) {
    try {
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

      const filePath = getFilePathForRoute(url);
      
      // Ensure the directory exists before writing the file
      ensureDirectoryExists(filePath);
      
      fs.writeFileSync(filePath, html);
      console.log('pre-rendered:', filePath);
    } catch (error) {
      console.error(`Error pre-rendering ${url}:`, error);
    }
  }
  
  // Generate sitemap
  await import('./scripts/generateSitemap.js');
})()
