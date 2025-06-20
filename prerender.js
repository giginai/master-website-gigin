import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute("dist/index.html"), "utf-8");
const { render } = await import("./dist/server/entry-server.js");

// Import build-time data functions - simplified approach
const generateJobRoutes = async () => {
  // Mock job routes for now - replace with actual data fetching later
  return [
    "/jobs-for-software-engineer",
    "/jobs-for-data-scientist",
    "/jobs-for-product-manager",
    "/jobs-for-sales-executive",
    "/jobs-for-marketing-manager",
    "/jobs-for-business-analyst",
    "/jobs-in-mumbai",
    "/jobs-in-delhi",
    "/jobs-in-bangalore",
    "/jobs-in-pune",
    "/jobs-in-hyderabad",
    "/jobs-in-chennai",
    "/jobs-in-kolkata",
    "/jobs-in-ahmedabad",
  ];
};

const generateBlogRoutes = async () => {
  // Mock blog routes for now - replace with actual data fetching later
  return [
    "/blog/category/hiring-tips",
    "/blog/category/verification-guides",
    "/blog/category/industry-insights",
    "/blog/hiring-tips/sample-blog-post",
    "/blog/verification-guides/complete-guide-to-background-checks",
    "/blog/industry-insights/future-of-recruitment",
  ];
};

// Static routes matching App.tsx
const staticRoutes = [
  "/",
  "/home",
  "/about-us",
  "/why-gigin",
  "/hiring-solutions",
  "/verification",
  "/verification/identity",
  "/verification/criminal",
  "/verification/employment",
  "/verification/education",
  "/verification/social",
  "/verification/financial",
  "/verification/reference",
  "/verification/address",
  "/find-a-job",
  "/blog",
];

// Function to ensure directory exists
const ensureDirectoryExists = (filePath) => {
  const dirname = path.dirname(filePath);
  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname, { recursive: true });
    console.log("Created directory:", dirname);
  }
};

// Generate routes dynamically
const generateAllRoutes = async () => {
  console.log("Generating dynamic routes...");

  try {
    const [jobRoutes, blogRoutes] = await Promise.all([
      generateJobRoutes(),
      generateBlogRoutes(),
    ]);

    console.log(`Generated ${jobRoutes.length} job routes`);
    console.log(`Generated ${blogRoutes.length} blog routes`);

    return [...staticRoutes, ...jobRoutes, ...blogRoutes];
  } catch (error) {
    console.warn("Error generating dynamic routes:", error);
    // Fallback to static routes if dynamic generation fails
    const fallbackJobRoutes = [
      "/jobs-for-software-engineer",
      "/jobs-for-data-scientist",
      "/jobs-for-product-manager",
      "/jobs-for-sales-executive",
      "/jobs-for-marketing-manager",
      "/jobs-for-business-analyst",
      "/jobs-in-mumbai",
      "/jobs-in-delhi",
      "/jobs-in-bangalore",
      "/jobs-in-pune",
      "/jobs-in-hyderabad",
      "/jobs-in-chennai",
      "/jobs-in-kolkata",
      "/jobs-in-ahmedabad",
    ];

    const fallbackBlogRoutes = [
      "/blog/category/hiring-tips",
      "/blog/category/verification-guides",
      "/blog/category/industry-insights",
      "/blog/hiring-tips/sample-blog-post",
      "/blog/verification-guides/complete-guide-to-background-checks",
      "/blog/industry-insights/future-of-recruitment",
    ];

    return [...staticRoutes, ...fallbackJobRoutes, ...fallbackBlogRoutes];
  }
};

(async () => {
  const allRoutes = await generateAllRoutes();
  console.log(`Pre-rendering ${allRoutes.length} routes...`);

  for (const url of allRoutes) {
    try {
      console.log("Pre-rendering:", url);
      const { html: appHtml, helmet } = render(url);
      let html = template.replace(`<!--app-html-->`, appHtml);

      // Replace helmet meta tags if available
      if (helmet && helmet.title) {
        html = html.replace(/<title>.*?<\/title>/, helmet.title.toString());
      }
      if (helmet && helmet.meta) {
        // Insert additional meta tags
        html = html.replace("</head>", `${helmet.meta.toString()}</head>`);
      }

      // Determine file path
      let filePath;
      if (url === "/") {
        filePath = "dist/index.html";
      } else {
        filePath = `dist${url}.html`;
      }

      const absoluteFilePath = toAbsolute(filePath);

      // Ensure directory exists before writing
      ensureDirectoryExists(absoluteFilePath);

      fs.writeFileSync(absoluteFilePath, html);
      console.log("Pre-rendered:", filePath);
    } catch (error) {
      console.error(`Error pre-rendering ${url}:`, error);
    }
  }

  // Generate sitemap
  try {
    await import("./scripts/generateSitemap.js");
    console.log("Sitemap generation completed");
  } catch (error) {
    console.error("Error generating sitemap:", error);
  }

  console.log("✅ SSG build completed successfully!");
})();
