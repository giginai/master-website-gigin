
import { useParams } from 'react-router-dom';
import { useSEO } from "@/hooks/useSEO";
import { generateJobPostingSchema } from "@/utils/schemaGenerator";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useJobDetail } from "@/hooks/useJobs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Calendar, Building2, DollarSign, Clock } from "lucide-react";

const JobDetail = () => {
  const { jobPageUrl } = useParams<{ jobPageUrl: string }>();
  const { data: job, isLoading, error } = useJobDetail(jobPageUrl || '');

  // SEO Configuration
  const title = job ? `${job.title} at ${job.company} - ${job.location}` : "Job Details";
  const description = job 
    ? `${job.title} position at ${job.company} in ${job.location}. ${job.description?.substring(0, 160)}...`
    : "View detailed job information and apply for positions on Gigin.";

  useSEO({
    title,
    description,
    url: `https://master-website-gigin.lovable.app/job-detail/${jobPageUrl}`,
    type: "website"
  });

  const structuredData = job ? [generateJobPostingSchema(job)] : [];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded mb-4"></div>
              <div className="h-6 bg-gray-200 rounded mb-8 w-2/3"></div>
              <div className="space-y-4">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !job) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Job Not Found</h1>
            <p className="text-gray-600">The job you're looking for doesn't exist or has been removed.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead structuredData={structuredData} />
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Job Header */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-2xl mb-2">{job.title}</CardTitle>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Building2 className="w-5 h-5 mr-2" />
                    <span className="text-lg">{job.company}</span>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{job.location}</span>
                    </div>
                    {job.salary && (
                      <div className="flex items-center text-green-600">
                        <DollarSign className="w-4 h-4 mr-1" />
                        <span>{job.salary}</span>
                      </div>
                    )}
                    {job.experience && (
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{job.experience}</span>
                      </div>
                    )}
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>Posted {new Date(job.publishedDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
                {job.companyLogo && (
                  <img 
                    src={job.companyLogo} 
                    alt={`${job.company} logo`}
                    className="w-20 h-20 object-contain rounded"
                  />
                )}
              </div>
            </CardHeader>
            <CardContent>
              <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 text-lg">
                Apply Now
              </Button>
            </CardContent>
          </Card>

          {/* Job Description */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Job Description</CardTitle>
            </CardHeader>
            <CardContent>
              <div 
                className="prose max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ __html: job.description }}
              />
            </CardContent>
          </Card>

          {/* Requirements */}
          {job.requirements && job.requirements.length > 0 && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {job.requirements.map((requirement, index) => (
                    <li key={index}>{requirement}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {/* Benefits */}
          {job.benefits && job.benefits.length > 0 && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {job.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {/* Skills */}
          {job.skills && job.skills.length > 0 && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Required Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Apply Section */}
          <Card>
            <CardContent className="text-center py-8">
              <h3 className="text-xl font-semibold mb-4">Ready to apply?</h3>
              <p className="text-gray-600 mb-6">
                Don't miss out on this opportunity. Apply now and take the next step in your career.
              </p>
              <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 text-lg">
                Apply for this Job
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default JobDetail;
