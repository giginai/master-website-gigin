
import { StructuredData } from '@/types/seo';
import { BlogPost } from '@/types/wordpress';

export const generateWebsiteSchema = (): StructuredData => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Gigin',
  url: 'https://master-website-gigin.lovable.app/home',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://master-website-gigin.lovable.app/find-a-job?search={search_term_string}',
    'query-input': 'required name=search_term_string'
  }
});

export const generateOrganizationSchema = (): StructuredData => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Gigin',
  url: 'https://master-website-gigin.lovable.app',
  logo: 'https://master-website-gigin.lovable.app/lovable-uploads/og-gigin.jpg',
  description: 'Gigin helps businesses simplify background verification and access a verified workforce across India.',
  foundingDate: '2020',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    url: 'https://master-website-gigin.lovable.app/contact'
  }
});

export const generateBlogPostSchema = (post: BlogPost): StructuredData => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: post.title,
  description: post.excerpt,
  image: post.image,
  datePublished: post.date,
  dateModified: post.date,
  author: {
    '@type': 'Person',
    name: post.author
  },
  publisher: {
    '@type': 'Organization',
    name: 'Gigin',
    logo: {
      '@type': 'ImageObject',
      url: 'https://master-website-gigin.lovable.app/lovable-uploads/og-gigin.jpg'
    }
  }
});

export const generateJobPostingSchema = (job: any): StructuredData => ({
  '@context': 'https://schema.org',
  '@type': 'JobPosting',
  title: job.title,
  description: job.description,
  hiringOrganization: {
    '@type': 'Organization',
    name: job.company,
    logo: job.companyLogo
  },
  jobLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      addressLocality: job.location
    }
  },
  datePosted: job.publishedDate,
  employmentType: job.type || 'FULL_TIME',
  baseSalary: job.salary ? {
    '@type': 'MonetaryAmount',
    currency: 'INR',
    value: job.salary
  } : undefined
});
