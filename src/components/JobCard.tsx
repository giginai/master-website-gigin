
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Building2 } from "lucide-react";
import { Job } from "@/types/jobs";
import { Link } from "react-router-dom";

interface JobCardProps {
  job: Job;
}

const JobCard = ({ job }: JobCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-1 line-clamp-2">{job.title}</h3>
            <div className="flex items-center text-gray-600 mb-2">
              <Building2 className="w-4 h-4 mr-1" />
              <span className="text-sm">{job.company}</span>
            </div>
            <div className="flex items-center text-gray-600 mb-2">
              <MapPin className="w-4 h-4 mr-1" />
              <span className="text-sm">{job.location}</span>
            </div>
            {job.salary && (
              <div className="text-green-600 font-medium text-sm mb-2">
                {job.salary}
              </div>
            )}
          </div>
          {job.companyLogo && (
            <img 
              src={job.companyLogo} 
              alt={`${job.company} logo`}
              className="w-12 h-12 object-contain rounded"
            />
          )}
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {job.description.replace(/<[^>]*>/g, '').substring(0, 150)}...
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-xs text-gray-500">
            <Calendar className="w-3 h-3 mr-1" />
            <span>{new Date(job.publishedDate).toLocaleDateString()}</span>
          </div>
          <Link to={`/job-detail/${job.jobPageUrl}`}>
            <Button size="sm" className="bg-pink-500 hover:bg-pink-600">
              View Details
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCard;
