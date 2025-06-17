
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, '..', p);

const baseUrl = 'https://master-website-gigin.lovable.app';

// Static routes matching App.tsx
const staticRoutes = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/home', priority: '1.0', changefreq: 'weekly' },
  { url: '/about-us', priority: '0.8', changefreq: 'monthly' },
  { url: '/why-gigin', priority: '0.8', changefreq: 'monthly' },
  { url: '/hiring-solutions', priority: '0.8', changefreq: 'monthly' },
  { url: '/verification', priority: '0.8', changefreq: 'monthly' },
  { url: '/verification/identity', priority: '0.7', changefreq: 'monthly' },
  { url: '/verification/criminal', priority: '0.7', changefreq: 'monthly' },
  { url: '/verification/employment', priority: '0.7', changefreq: 'monthly' },
  { url: '/verification/education', priority: '0.7', changefreq: 'monthly' },
  { url: '/verification/social', priority: '0.7', changefreq: 'monthly' },
  { url: '/verification/financial', priority: '0.7', changefreq: 'monthly' },
  { url: '/verification/reference', priority: '0.7', changefreq: 'monthly' },
  { url: '/verification/address', priority: '0.7', changefreq: 'monthly' },
  { url: '/find-a-job', priority: '0.9', changefreq: 'daily' },
  { url: '/blog', priority: '0.8', changefreq: 'daily' }
];

// Job routes
const jobRoutes = [
  // Job categories
  { url: '/jobs-for-software-engineer', priority: '0.8', changefreq: 'weekly' },
  { url: '/jobs-for-data-scientist', priority: '0.8', changefreq: 'weekly' },
  { url: '/jobs-for-product-manager', priority: '0.8', changefreq: 'weekly' },
  { url: '/jobs-for-sales-executive', priority: '0.8', changefreq: 'weekly' },
  { url: '/jobs-for-marketing-manager', priority: '0.8', changefreq: 'weekly' },
  { url: '/jobs-for-business-analyst', priority: '0.8', changefreq: 'weekly' },
  
  // Job locations
  { url: '/jobs-in-mumbai', priority: '0.8', changefreq: 'weekly' },
  { url: '/jobs-in-delhi', priority: '0.8', changefreq: 'weekly' },
  { url: '/jobs-in-bangalore', priority: '0.8', changefreq: 'weekly' },
  { url: '/jobs-in-pune', priority: '0.8', changefreq: 'weekly' },
  { url: '/jobs-in-hyderabad', priority: '0.8', changefreq: 'weekly' },
  { url: '/jobs-in-chennai', priority: '0.8', changefreq: 'weekly' },
  { url: '/jobs-in-kolkata', priority: '0.8', changefreq: 'weekly' },
  { url: '/jobs-in-ahmedabad', priority: '0.8', changefreq: 'weekly' }
];

// Blog routes
const blogRoutes = [
  { url: '/blog/category/hiring-tips', priority: '0.7', changefreq: 'weekly' },
  { url: '/blog/category/verification-guides', priority: '0.7', changefreq: 'weekly' },
  { url: '/blog/category/industry-insights', priority: '0.7', changefreq: 'weekly' },
  { url: '/blog/hiring-tips/sample-blog-post', priority: '0.6', changefreq: 'monthly' },
  { url: '/blog/verification-guides/complete-guide-to-background-checks', priority: '0.6', changefreq: 'monthly' },
  { url: '/blog/industry-insights/future-of-recruitment', priority: '0.6', changefreq: 'monthly' }
];

const generateSitemap = () => {
  const allRoutes = [...staticRoutes, ...jobRoutes, ...blogRoutes];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(route => `  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  // Ensure dist directory exists
  const distDir = toAbsolute('dist');
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  fs.writeFileSync(toAbsolute('dist/sitemap.xml'), sitemap);
  console.log('Sitemap generated: dist/sitemap.xml');
};

generateSitemap();
