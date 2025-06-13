
import { useState, useEffect } from 'react';
import { useParams, useSearchParams, useLocation } from 'react-router-dom';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JobCard from "@/components/JobCard";
import JobFilters from "@/components/JobFilters";
import { useJobs, useJobsByPageSlug } from "@/hooks/useJobs";
import { JobFilters as JobFiltersType } from "@/types/jobs";
import { 
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";

const Jobs = () => {
  const { role, city } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [filters, setFilters] = useState<JobFiltersType>({
    role: role || searchParams.get('role') || '',
    location: city || searchParams.get('location') || ''
  });

  const currentPage = parseInt(searchParams.get('page') || '1');
  
  // Determine if this is a pageSlug-based route and generate the appropriate pageSlug
  const getPageSlug = () => {
    const pathname = location.pathname;
    
    if (pathname.startsWith('/jobs-for-')) {
      return pathname.substring(1); // Remove leading slash, e.g., "jobs-for-accountant"
    }
    
    if (pathname.startsWith('/jobs-in-')) {
      return pathname.substring(1); // Remove leading slash, e.g., "jobs-in-mumbai"
    }
    
    // Handle pattern like "/accountant-jobs-in-mumbai"
    if (role && city) {
      return `${role}-jobs-in-${city}`;
    }
    
    return null;
  };

  const pageSlug = getPageSlug();
  const isPageSlugBased = pageSlug !== null;

  // Use appropriate hook based on URL pattern
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

  // Update filters when URL params change
  useEffect(() => {
    setFilters({
      role: role || searchParams.get('role') || '',
      location: city || searchParams.get('location') || ''
    });
  }, [role, city, searchParams]);

  const getPageTitle = () => {
    if (role && city) return `${role.charAt(0).toUpperCase() + role.slice(1)} Jobs in ${city.charAt(0).toUpperCase() + city.slice(1)}`;
    if (role) return `${role.charAt(0).toUpperCase() + role.slice(1)} Jobs`;
    if (city) return `Jobs in ${city.charAt(0).toUpperCase() + city.slice(1)}`;
    return 'Find Your Dream Job';
  };

  // Generate pagination items with ellipsis - copied from Blog page
  const getPaginationItems = () => {
    if (!jobsData) return [];
    
    const totalPages = jobsData.totalPages;
    const items = [];
    const delta = 2; // Number of pages to show around current page
    
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 || // Always show first page
        i === totalPages || // Always show last page
        (i >= currentPage - delta && i <= currentPage + delta) // Show pages around current
      ) {
        items.push(i);
      } else if (
        (i === currentPage - delta - 1 && currentPage - delta - 1 > 1) || // Show ellipsis before current range
        (i === currentPage + delta + 1 && currentPage + delta + 1 < totalPages) // Show ellipsis after current range
      ) {
        if (items[items.length - 1] !== 'ellipsis') {
          items.push('ellipsis');
        }
      }
    }
    
    return items;
  };

  const renderPagination = () => {
    if (!jobsData || jobsData.totalPages <= 1) return null;

    const totalPages = jobsData.totalPages;

    return (
      <Pagination className="mt-8">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious 
              onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
              className={currentPage <= 1 ? 'pointer-events-none opacity-50 cursor-default' : 'cursor-pointer'}
            />
          </PaginationItem>
          
          {getPaginationItems().map((item, index) => {
            if (item === 'ellipsis') {
              return (
                <PaginationItem key={`ellipsis-${index}`}>
                  <PaginationEllipsis />
                </PaginationItem>
              );
            }
            
            return (
              <PaginationItem key={item}>
                <PaginationLink
                  onClick={() => handlePageChange(item as number)}
                  isActive={currentPage === item}
                  className="cursor-pointer"
                >
                  {item}
                </PaginationLink>
              </PaginationItem>
            );
          })}
          
          <PaginationItem>
            <PaginationNext 
              onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
              className={currentPage >= totalPages ? 'pointer-events-none opacity-50 cursor-default' : 'cursor-pointer'}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section with dark gradient like blogs page */}
        <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-6">
              {getPageTitle()}
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              {jobsData ? `Explore ${jobsData.total} amazing job opportunities` : 'Discover your next career opportunity with top companies'}
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 -mt-10">
          {!isPageSlugBased && (
            <JobFilters onSearch={handleSearch} initialFilters={filters} />
          )}

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md animate-pulse">
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded mb-4 w-2/3"></div>
                  <div className="h-3 bg-gray-200 rounded mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded mb-4"></div>
                  <div className="h-8 bg-gray-200 rounded w-24"></div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-600 text-lg">
                Error loading jobs. Please try again later.
              </p>
            </div>
          ) : jobsData && jobsData.jobs.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {jobsData.jobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>

              {renderPagination()}
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No jobs found. Try adjusting your search criteria.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Jobs;
