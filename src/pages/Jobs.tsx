
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JobFilters from "@/components/JobFilters";
import JobsHeroSection from "@/components/JobsHeroSection";
import JobsList from "@/components/JobsList";
import JobsPagination from "@/components/JobsPagination";
import { useJobsPageLogic } from "@/hooks/useJobsPageLogic";

const Jobs = () => {
  const {
    filters,
    jobsData,
    isLoading,
    error,
    currentPage,
    isPageSlugBased,
    handleSearch,
    handlePageChange,
    getPageTitle
  } = useJobsPageLogic();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-24 pb-16">
        <JobsHeroSection 
          title={getPageTitle()} 
          total={jobsData?.total} 
        />

        <div className="max-w-7xl mx-auto px-6 -mt-10">
          {!isPageSlugBased && (
            <JobFilters onSearch={handleSearch} initialFilters={filters} />
          )}

          <JobsList 
            jobs={jobsData?.jobs || []} 
            isLoading={isLoading} 
            error={error} 
          />

          {jobsData && (
            <JobsPagination
              currentPage={currentPage}
              totalPages={jobsData.totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Jobs;
