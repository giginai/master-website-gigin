import { Helmet } from "react-helmet-async";
import { useSEOContext } from "@/contexts/SEOContext";
import {
  generatePageTitle,
  generateCanonicalUrl,
  generateOGImage,
} from "@/hooks/useSEO";
import { StructuredData } from "@/types/seo";

interface SEOHeadProps {
  structuredData?: StructuredData[];
}

const SEOHead: React.FC<SEOHeadProps> = ({ structuredData = [] }) => {
  const { seoConfig } = useSEOContext();

  const pageTitle = generatePageTitle(seoConfig.title, seoConfig.siteName);
  const canonicalUrl =
    seoConfig.url ||
    generateCanonicalUrl(
      typeof window !== "undefined" ? window.location.pathname : "/"
    );
  const ogImage = generateOGImage(seoConfig.image);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      {seoConfig.description && (
        <meta name="description" content={seoConfig.description} />
      )}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={pageTitle} />
      {seoConfig.description && (
        <meta property="og:description" content={seoConfig.description} />
      )}
      <meta property="og:type" content={seoConfig.type || "website"} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={seoConfig.siteName || "Gigin"} />

      {/* Article specific tags */}
      {seoConfig.type === "article" && (
        <>
          {seoConfig.author && (
            <meta property="article:author" content={seoConfig.author} />
          )}
          {seoConfig.publishedTime && (
            <meta
              property="article:published_time"
              content={seoConfig.publishedTime}
            />
          )}
          {seoConfig.modifiedTime && (
            <meta
              property="article:modified_time"
              content={seoConfig.modifiedTime}
            />
          )}
          {seoConfig.section && (
            <meta property="article:section" content={seoConfig.section} />
          )}
          {seoConfig.tags?.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      {seoConfig.description && (
        <meta name="twitter:description" content={seoConfig.description} />
      )}
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      {structuredData.map((data, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOHead;
