
export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary?: string;
  experience?: string;
  jobType?: string;
  description: string;
  requirements?: string[];
  benefits?: string[];
  jobpageurl: string;
  publishedDate: string;
  applicationDeadline?: string;
  companyLogo?: string;
  category: string;
  skills?: string[];
}

export interface JobsApiResponse {
  jobs: Job[];
  total: number;
  totalPages: number;
  currentPage: number;
}

export interface JobDetailResponse {
  job: Job;
}

export interface JobSearchParams {
  role?: string;
  location?: string;
  page?: number;
  per_page?: number;
  pageSlug?: string;
}

export interface JobFilters {
  role: string;
  location: string;
}
