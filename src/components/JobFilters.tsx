
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
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

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
  );
};

export default JobFilters;
