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

// Route-based SEO data mapping
const routeSEOData = {
  "/": {
    title:
      "Smart Hiring & Background Verification for India's Growing Workforce | Gigin",
    description:
      "Gigin helps businesses simplify background verification and access a verified workforce across India. Hire faster with trust and compliance built-in.",
  },
  "/home": {
    title:
      "Smart Hiring & Background Verification for India's Growing Workforce | Gigin",
    description:
      "Gigin helps businesses simplify background verification and access a verified workforce across India. Hire faster with trust and compliance built-in.",
  },
  "/about-us": {
    title: "About Us - Gigin | Smart Hiring Solutions",
    description:
      "Learn about Gigin's mission to revolutionize hiring and background verification in India with AI-powered solutions.",
  },
  "/why-gigin": {
    title: "Why Choose Gigin | Benefits of Our Hiring Platform",
    description:
      "Discover why leading companies choose Gigin for their hiring and verification needs. Faster, smarter, more reliable.",
  },
  "/hiring-solutions": {
    title: "Hiring Solutions | AI-Powered Recruitment Platform - Gigin",
    description:
      "Comprehensive hiring solutions powered by AI. Source, screen, and hire top talent faster with Gigin's integrated platform.",
  },
  "/verification": {
    title: "Background Verification Services | Comprehensive Checks - Gigin",
    description:
      "Professional background verification services including criminal, employment, education, and identity checks. Fast, accurate, compliant.",
  },
  "/verification/identity": {
    title: "Identity Verification | Secure Identity Checks - Gigin",
    description:
      "Professional identity verification services to ensure candidate authenticity and prevent identity fraud.",
  },
  "/verification/criminal": {
    title: "Criminal Record Checks | Background Verification - Gigin",
    description:
      "Professional criminal record checks services by Gigin. Reliable international criminal record screening by AI scanning for court cases, legal disputes, and criminal sanctions for high-security roles.",
  },
  "/verification/employment": {
    title: "Employment Verification | Work History Checks - Gigin",
    description:
      "Professional employment verification services to validate candidate work history and employment claims.",
  },
  "/verification/education": {
    title: "Education Verification | Academic Credential Checks - Gigin",
    description:
      "Professional education verification services to validate academic credentials and educational qualifications.",
  },
  "/verification/social": {
    title: "Social Media Verification | Digital Background Checks - Gigin",
    description:
      "Professional social media verification services to assess candidate digital presence and online behavior.",
  },
  "/verification/financial": {
    title: "Financial Verification | Credit and Financial Checks - Gigin",
    description:
      "Professional financial verification services including credit checks and financial background screening.",
  },
  "/verification/reference": {
    title: "Reference Verification | Professional Reference Checks - Gigin",
    description:
      "Professional reference verification services to validate candidate references and professional relationships.",
  },
  "/verification/address": {
    title: "Address Verification | Residential Address Checks - Gigin",
    description:
      "Professional address verification services to confirm candidate residential and permanent addresses.",
  },
  "/find-a-job": {
    title: "Find Jobs | Job Search Platform - Gigin",
    description:
      "Find your next career opportunity with Gigin's job search platform. Browse thousands of verified job listings.",
  },
  "/blog": {
    title: "Blog | Hiring Tips and Industry Insights - Gigin",
    description:
      "Stay updated with the latest hiring trends, verification guides, and industry insights from Gigin's experts.",
  },
};

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

const main = async () => {
  const allRoutes = await generateAllRoutes();
  console.log(`Pre-rendering ${allRoutes.length} routes...`);

  for (const url of allRoutes) {
    try {
      console.log("Pre-rendering:", url);
      const { html: appHtml, helmet } = render(url);
      let html = template.replace(`<!--app-html-->`, appHtml);

      // Get SEO data for this route
      const seoData = routeSEOData[url];

      if (seoData) {
        // Replace title with route-specific title
        html = html.replace(
          /<title[^>]*>.*?<\/title>/i,
          `<title>${seoData.title}</title>`
        );
        console.log("Set title for", url, ":", seoData.title);

        // Replace description
        html = html.replace(
          /<meta name="description" content="[^"]*"/,
          `<meta name="description" content="${seoData.description}"`
        );
        console.log("Set description for", url);
      } else {
        // Fallback: try to use helmet data if available
        if (helmet) {
          if (helmet.title && helmet.title.toString) {
            const titleString = helmet.title.toString();
            if (
              titleString.trim() &&
              !titleString.includes('data-rh="true"></title>')
            ) {
              html = html.replace(/<title[^>]*>.*?<\/title>/i, titleString);
              console.log("Used helmet title for", url, ":", titleString);
            }
          }

          if (helmet.meta && helmet.meta.toString) {
            const metaString = helmet.meta.toString();
            if (metaString.trim()) {
              html = html.replace("</head>", `${metaString}</head>`);
            }
          }

          if (helmet.link && helmet.link.toString) {
            const linkString = helmet.link.toString();
            if (linkString.trim()) {
              html = html.replace("</head>", `${linkString}</head>`);
            }
          }
        }

        // If no specific SEO data and no valid helmet data, use a generic title
        if (
          !html.includes("<title>") ||
          html.includes('<title data-rh="true"></title>')
        ) {
          const genericTitle = `Gigin - Smart Hiring & Verification Platform`;
          html = html.replace(
            /<title[^>]*>.*?<\/title>/i,
            `<title>${genericTitle}</title>`
          );
          console.log("Used generic title for", url);
        }
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
  process.exit(0);
};

main().catch((error) => {
  console.error("❌ SSG build failed:", error);
  process.exit(1);
});
