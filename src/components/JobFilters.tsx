
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";
import { JobFilters as JobFiltersType } from "@/types/jobs";

interface JobFiltersProps {
  onSearch: (filters: JobFiltersType) => void;
  initialFilters?: Partial<JobFiltersType>;
}

const JobFilters = ({ onSearch, initialFilters = {} }: JobFiltersProps) => {
  const [filters, setFilters] = useState<JobFiltersType>({
    role: initialFilters.role || '',
    location: initialFilters.location || ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(filters);
  };

  const removeFilter = (filterType: 'role' | 'location') => {
    const newFilters = { ...filters, [filterType]: '' };
    setFilters(newFilters);
    onSearch(newFilters);
  };

  const hasActiveFilters = filters.role || filters.location;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8 relative z-10">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
              Job Role
            </label>
            <Input
              id="role"
              type="text"
              placeholder="e.g. Accountant, Chef, Developer"
              value={filters.role}
              onChange={(e) => setFilters(prev => ({ ...prev, role: e.target.value }))}
            />
          </div>
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <Input
              id="location"
              type="text"
              placeholder="e.g. Mumbai, Delhi, Bangalore"
              value={filters.location}
              onChange={(e) => setFilters(prev => ({ ...prev, location: e.target.value }))}
            />
          </div>
          <div className="flex items-end">
            <Button type="submit" className="w-full bg-pink-500 hover:bg-pink-600">
              <Search className="w-4 h-4 mr-2" />
              Search Jobs
            </Button>
          </div>
        </div>
      </form>

      {/* Active Filter Tags */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200">
          <span className="text-sm font-medium text-gray-600 mr-2">Active filters:</span>
          {filters.role && (
            <div className="flex items-center bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">
              <span className="mr-1">Role: {filters.role}</span>
              <button
                type="button"
                onClick={() => removeFilter('role')}
                className="hover:bg-pink-200 rounded-full p-1"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          )}
          {filters.location && (
            <div className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              <span className="mr-1">Location: {filters.location}</span>
              <button
                type="button"
                onClick={() => removeFilter('location')}
                className="hover:bg-blue-200 rounded-full p-1"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default JobFilters;
