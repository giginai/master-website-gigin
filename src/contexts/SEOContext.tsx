
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { SEOConfig } from '@/types/seo';

interface SEOContextType {
  seoConfig: SEOConfig;
  updateSEO: (config: Partial<SEOConfig>) => void;
}

const SEOContext = createContext<SEOContextType | undefined>(undefined);

export const useSEOContext = () => {
  const context = useContext(SEOContext);
  if (!context) {
    throw new Error('useSEOContext must be used within a SEOProvider');
  }
  return context;
};

interface SEOProviderProps {
  children: ReactNode;
  defaultConfig?: SEOConfig;
}

export const SEOProvider: React.FC<SEOProviderProps> = ({ 
  children, 
  defaultConfig = {} 
}) => {
  const [seoConfig, setSeoConfig] = useState<SEOConfig>({
    siteName: 'Gigin',
    type: 'website',
    image: '/lovable-uploads/og-gigin.jpg',
    ...defaultConfig
  });

  const updateSEO = (config: Partial<SEOConfig>) => {
    setSeoConfig(prev => ({ ...prev, ...config }));
  };

  return (
    <SEOContext.Provider value={{ seoConfig, updateSEO }}>
      {children}
    </SEOContext.Provider>
  );
};
