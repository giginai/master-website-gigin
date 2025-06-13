
import { useQuery } from '@tanstack/react-query';
import { jobsApi } from '@/services/jobsApi';
import { JobSearchParams } from '@/types/jobs';

export const useJobs = (params: JobSearchParams = {}) => {
  return useQuery({
    queryKey: ['jobs', params],
    queryFn: () => jobsApi.findJobs(params),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useJobsByPageSlug = (pageSlug: string, page: number = 1, per_page: number = 10) => {
  return useQuery({
    queryKey: ['jobs', 'pageSlug', pageSlug, page, per_page],
    queryFn: () => jobsApi.getJobsByPageSlug(pageSlug, page, per_page),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useJobDetail = (jobPageUrl: string) => {
  return useQuery({
    queryKey: ['job', 'detail', jobPageUrl],
    queryFn: () => jobsApi.getJobDetail(jobPageUrl),
    staleTime: 10 * 60 * 1000, // 10 minutes
    enabled: !!jobPageUrl,
  });
};
