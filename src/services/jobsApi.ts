
import { Job, JobsApiResponse, JobDetailResponse, JobSearchParams } from '@/types/jobs';

const GIGIN_API_BASE = 'https://gigin.ai/wp-json/gigin/v1';

class JobsApiError extends Error {
  constructor(message: string, public status?: number) {
    super(message);
    this.name = 'JobsApiError';
  }
}

const fetchFromJobsApi = async <T>(endpoint: string, params: Record<string, any> = {}): Promise<{
  data: T;
  total: number;
  totalPages: number;
}> => {
  const url = new URL(`${GIGIN_API_BASE}${endpoint}`);
  
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      url.searchParams.append(key, String(value));
    }
  });

  try {
    const response = await fetch(url.toString());
    
    if (!response.ok) {
      throw new JobsApiError(
        `Jobs API request failed: ${response.status} ${response.statusText}`,
        response.status
      );
    }

    const data = await response.json();
    const total = parseInt(response.headers.get('X-WP-Total') || '0');
    const totalPages = parseInt(response.headers.get('X-WP-TotalPages') || '0');

    return {
      data,
      total,
      totalPages
    };
  } catch (error) {
    if (error instanceof JobsApiError) {
      throw error;
    }
    throw new JobsApiError(`Network error: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};

export const jobsApi = {
  async findJobs(params: JobSearchParams = {}): Promise<JobsApiResponse> {
    const defaultParams = {
      page: 1,
      per_page: 30,
      ...params
    };

    const response = await fetchFromJobsApi<Job[]>('/find-a-job', defaultParams);
    
    return {
      jobs: response.data,
      total: response.total,
      totalPages: response.totalPages,
      currentPage: defaultParams.page
    };
  },

  async getJobsByPageSlug(pageSlug: string, page: number = 1, per_page: number = 10): Promise<JobsApiResponse> {
    const response = await fetchFromJobsApi<Job[]>('/jobs', {
      pageSlug,
      page,
      per_page
    });

    return {
      jobs: response.data,
      total: response.total,
      totalPages: response.totalPages,
      currentPage: page
    };
  },

  async getJobDetail(jobPageUrl: string): Promise<Job> {
    const response = await fetchFromJobsApi<Job>('/job', {
      jobpageurl: jobPageUrl
    });

    return response.data;
  }
};
