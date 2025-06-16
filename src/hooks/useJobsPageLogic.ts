
import { useState, useEffect } from 'react';
import { useParams, useSearchParams, useLocation } from 'react-router-dom';
import { useJobs, useJobsByPageSlug } from "@/hooks/useJobs";
import { JobFilters as JobFiltersType } from "@/types/jobs";

type UseJobsPageLogicProps = {
  slugType?: "for" | "in";
  slugValue?: string;
};

export const useJobsPageLogic = ({ slugType, slugValue }: UseJobsPageLogicProps = {}) => {
  const { role, city } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [filters, setFilters] = useState<JobFiltersType>({
    role: role || searchParams.get('role') || '',
    location: city || searchParams.get('location') || ''
  });

  const currentPage = parseInt(searchParams.get('page') || '1');
  
  const getPageSlug = () => {
    const pathname = location.pathname;
    
    if (pathname.startsWith('/jobs-for-')) {
      return pathname.substring(1);
    }
    
    if (pathname.startsWith('/jobs-in-')) {
      return pathname.substring(1);
    }
    
    if (slugType && slugValue) {
      return `jobs-${slugType}-${slugValue}`;
    }
    
    if (role && city) {
      return `${role}-jobs-in-${city}`;
    }
    
    return null;
  };

  const pageSlug = getPageSlug();
  const isPageSlugBased = pageSlug !== null;

  const jobsQuery = isPageSlugBased 
    ? useJobsByPageSlug(pageSlug, currentPage, 10)
    : useJobs({ 
        role: filters.role, 
        location: filters.location, 
        page: currentPage, 
        per_page: 30 
      });

  const { data: jobsData, isLoading, error } = jobsQuery;

  const handleSearch = (newFilters: JobFiltersType) => {
    setFilters(newFilters);
    const params = new URLSearchParams();
    if (newFilters.role) params.set('role', newFilters.role);
    if (newFilters.location) params.set('location', newFilters.location);
    params.set('page', '1');
    setSearchParams(params);
  };

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', page.toString());
    setSearchParams(params);
  };

  const getPageTitle = () => {
    if (slugType === "for" && slugValue) {
      return `${slugValue.charAt(0).toUpperCase() + slugValue.slice(1)} Jobs`;
    }
    if (slugType === "in" && slugValue) {
      return `Jobs in ${slugValue.charAt(0).toUpperCase() + slugValue.slice(1)}`;
    }
    if (role && city) return `${role.charAt(0).toUpperCase() + role.slice(1)} Jobs in ${city.charAt(0).toUpperCase() + city.slice(1)}`;
    if (role) return `${role.charAt(0).toUpperCase() + role.slice(1)} Jobs`;
    if (city) return `Jobs in ${city.charAt(0).toUpperCase() + city.slice(1)}`;
    return 'Find Your Dream Job';
  };

  useEffect(() => {
    setFilters({
      role: role || searchParams.get('role') || '',
      location: city || searchParams.get('location') || ''
    });
  }, [role, city, searchParams]);

  return {
    filters,
    jobsData,
    isLoading,
    error,
    currentPage,
    isPageSlugBased,
    handleSearch,
    handlePageChange,
    getPageTitle
  };
};
