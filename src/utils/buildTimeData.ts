import { supabase } from "@/integrations/supabase/client";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content: string;
  published_at: string;
  featured_image?: string;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  slug: string;
  description: string;
  requirements: string[];
  salary_range?: string;
  job_type: string;
  created_at: string;
}

// Build-time data fetching functions for SSG
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  // In a real implementation, you would fetch from your CMS or API
  // For now, returning mock data to avoid Supabase type issues during build
  return [
    {
      id: "1",
      title: "Complete Guide to Background Checks",
      slug: "complete-guide-to-background-checks",
      category: "verification-guides",
      excerpt: "Everything you need to know about background verification.",
      content: "Detailed content about background checks...",
      published_at: new Date().toISOString(),
      featured_image: "/images/blog/background-checks.jpg",
    },
    {
      id: "2",
      title: "Future of Recruitment",
      slug: "future-of-recruitment",
      category: "industry-insights",
      excerpt: "How recruitment is evolving in the digital age.",
      content: "Detailed content about recruitment trends...",
      published_at: new Date().toISOString(),
      featured_image: "/images/blog/recruitment-future.jpg",
    },
    {
      id: "3",
      title: "Sample Blog Post",
      slug: "sample-blog-post",
      category: "hiring-tips",
      excerpt: "Tips for effective hiring practices.",
      content: "Detailed hiring tips and best practices...",
      published_at: new Date().toISOString(),
      featured_image: "/images/blog/hiring-tips.jpg",
    },
  ];
}

export async function getBlogCategories(): Promise<string[]> {
  return ["hiring-tips", "verification-guides", "industry-insights"];
}

export async function getAllJobs(): Promise<Job[]> {
  // Mock job data for build time
  return [
    {
      id: "1",
      title: "Software Engineer",
      company: "Tech Corp",
      location: "Mumbai",
      slug: "software-engineer-tech-corp-mumbai",
      description: "Exciting software engineering opportunity...",
      requirements: ["React", "TypeScript", "Node.js"],
      salary_range: "12-18 LPA",
      job_type: "Full-time",
      created_at: new Date().toISOString(),
    },
    {
      id: "2",
      title: "Data Scientist",
      company: "Analytics Co",
      location: "Bangalore",
      slug: "data-scientist-analytics-co-bangalore",
      description: "Data science role with machine learning focus...",
      requirements: ["Python", "Machine Learning", "SQL"],
      salary_range: "15-22 LPA",
      job_type: "Full-time",
      created_at: new Date().toISOString(),
    },
  ];
}

// Generate static job routes based on actual data
export async function generateJobRoutes(): Promise<string[]> {
  const jobs = await getAllJobs();
  const routes = new Set<string>();

  // Add job detail routes
  jobs.forEach((job) => {
    routes.add(`/job-detail/${job.slug}`);
  });

  // Add job category routes
  const jobTitles = [
    ...new Set(jobs.map((job) => job.title.toLowerCase().replace(/\s+/g, "-"))),
  ];
  jobTitles.forEach((title) => {
    routes.add(`/jobs-for-${title}`);
  });

  // Add job location routes
  const locations = [
    ...new Set(
      jobs.map((job) => job.location.toLowerCase().replace(/\s+/g, "-"))
    ),
  ];
  locations.forEach((location) => {
    routes.add(`/jobs-in-${location}`);
  });

  return Array.from(routes);
}

// Generate static blog routes based on actual data
export async function generateBlogRoutes(): Promise<string[]> {
  const posts = await getAllBlogPosts();
  const categories = await getBlogCategories();
  const routes = new Set<string>();

  // Add blog post routes
  posts.forEach((post) => {
    routes.add(`/blog/${post.category}/${post.slug}`);
  });

  // Add category routes
  categories.forEach((category) => {
    routes.add(`/blog/category/${category}`);
  });

  return Array.from(routes);
}
