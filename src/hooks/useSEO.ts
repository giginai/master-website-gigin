import { useEffect } from "react";
import { useSEOContext } from "@/contexts/SEOContext";
import { SEOConfig } from "@/types/seo";

export const useSEO = (config: Partial<SEOConfig>) => {
  const { updateSEO } = useSEOContext();

  // Update SEO immediately during render for SSR compatibility
  // Generate canonical URL if not provided
  const processedConfig = { ...config };
  if (!processedConfig.url && typeof window !== "undefined") {
    processedConfig.url = `https://master-website-gigin.lovable.app${window.location.pathname}`;
  }

  // Call updateSEO immediately during render for SSR
  updateSEO(processedConfig);

  useEffect(() => {
    // Also update in useEffect for client-side navigation
    updateSEO(processedConfig);
  }, [updateSEO, JSON.stringify(processedConfig)]);
};

export const generatePageTitle = (title?: string, siteName = "Gigin") => {
  if (!title) return siteName;
  return `${title} | ${siteName}`;
};

export const generateCanonicalUrl = (path: string) => {
  return `https://master-website-gigin.lovable.app${path}`;
};

export const generateOGImage = (image?: string) => {
  if (image && image.startsWith("http")) return image;
  if (image && image.startsWith("/"))
    return `https://master-website-gigin.lovable.app${image}`;
  return "https://master-website-gigin.lovable.app/lovable-uploads/og-gigin.jpg";
};
