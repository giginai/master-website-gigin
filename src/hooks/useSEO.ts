
import { useEffect } from 'react';
import { useSEOContext } from '@/contexts/SEOContext';
import { SEOConfig } from '@/types/seo';

export const useSEO = (config: Partial<SEOConfig>) => {
  const { updateSEO } = useSEOContext();

  useEffect(() => {
    // Generate canonical URL if not provided
    if (!config.url) {
      config.url = `https://master-website-gigin.lovable.app${window.location.pathname}`;
    }

    updateSEO(config);
  }, [updateSEO, config]);
};

export const generatePageTitle = (title?: string, siteName = 'Gigin') => {
  if (!title) return siteName;
  return `${title} | ${siteName}`;
};

export const generateCanonicalUrl = (path: string) => {
  return `https://master-website-gigin.lovable.app${path}`;
};

export const generateOGImage = (image?: string) => {
  if (image && image.startsWith('http')) return image;
  if (image && image.startsWith('/')) return `https://master-website-gigin.lovable.app${image}`;
  return 'https://master-website-gigin.lovable.app/lovable-uploads/og-gigin.jpg';
};
