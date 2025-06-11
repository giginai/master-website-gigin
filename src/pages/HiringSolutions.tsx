
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Search, CheckCircle, Bot, MapPin, Clock, DollarSign, Briefcase, Target, TrendingUp, Zap } from "lucide-react";
import { useState, useEffect } from "react";

const HiringSolutions = () => {
  const [progress, setProgress] = useState(0);
  const [activeTab, setActiveTab] = useState("marketplace");

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  const tabItems = [
    { id: "marketplace", label: "Job Market Place" },
    { id: "ats", label: "AI Assisted ATS" },
    { id: "guaranteed", label: "Guaranteed Hiring Program" },
    { id: "recruiter", label: "AI Recruiter Agent" }
  ];

  const jobMarketplaceFeatures = [
    {
      icon: Search,
      title: "Smart Job Matching",
      description: "AI-powered matching connects you with qualified candidates instantly"
    },
    {
      icon: Users,
      title: "Talent Pool Access",
      description: "Access to a curated pool of pre-verified professionals"
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Target specific skills, experience levels, and locations"
    },
    {
      icon: TrendingUp,
      title: "Market Insights",
      description: "Real-time salary benchmarks and hiring trend analytics"
    }
  ];

  const atsFeatures = [
    {
      icon: Bot,
      title: "AI Resume Screening",
      description: "Automatically screen and rank candidates based on job requirements"
    },
    {
      icon: CheckCircle,
      title: "Interview Scheduling",
      description: "Automated scheduling with calendar integration and reminders"
    },
    {
      icon: Users,
      title: "Collaboration Tools",
      description: "Team-based hiring with shared feedback and decision tracking"
    },
    {
      icon: Zap,
      title: "Workflow Automation",
      description: "Streamline repetitive tasks with intelligent automation"
    }
  ];

  const guaranteedFeatures = [
    {
      icon: CheckCircle,
      title: "Success Guarantee",
      description: "100% guarantee on successful placements or your money back"
    },
    {
      icon: Clock,
      title: "Rapid Turnaround",
      description: "Fill positions within 30 days or receive additional support"
    },
    {
      icon: Target,
      title: "Quality Assurance",
      description: "Pre-vetted candidates with verified skills and background"
    },
    {
      icon: DollarSign,
      title: "Cost Effective",
      description: "Reduce hiring costs by up to 60% compared to traditional methods"
    }
  ];

  const recruiterFeatures = [
    {
      icon: Bot,
      title: "AI-Powered Sourcing",
      description: "Intelligent candidate sourcing from multiple platforms and databases"
    },
    {
      icon: Users,
      title: "Relationship Management",
      description: "Automated candidate relationship management and nurturing"
    },
    {
      icon: Search,
      title: "Deep Candidate Search",
      description: "Advanced search capabilities with boolean and semantic matching"
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Track recruiter performance and optimize hiring strategies"
    }
  ];

  const jobListings = [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      salary: "$120k - $150k",
      type: "Full-time",
      posted: "2 days ago"
    },
    {
      title: "Product Manager",
      company: "StartupXYZ",
      location: "New York, NY",
      salary: "$100k - $130k",
      type: "Full-time",
      posted: "1 week ago"
    },
    {
      title: "UX Designer",
      company: "Design Studios",
      location: "Remote",
      salary: "$80k - $110k",
      type: "Contract",
      posted: "3 days ago"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/lovable-uploads/f0acdf04-0015-4664-af62-d43a84908fcd.png)'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <Header currentPage="hiring-solutions" />
      
      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <span className="text-white">✦</span>
            <span className="text-white font-medium mx-2">Hiring Solutions</span>
            <span className="text-white">✦</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-5xl mx-auto">
            Transform Your Hiring<br />
            With AI-Powered Solutions
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            From job marketplace to AI-assisted ATS, discover comprehensive hiring solutions<br />
            that reduce time-to-hire by 70% and improve candidate quality significantly.
          </p>
          <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 text-lg rounded-lg font-medium mb-12 shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transition-all duration-300">
            Explore Solutions
          </Button>
        </div>
      </section>

      {/* Solutions Tabs Section */}
      <section className="relative z-10 py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Complete Hiring Ecosystem
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Choose from our comprehensive suite of hiring solutions designed to meet every stage of your recruitment process
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-12 bg-gray-100 p-2 rounded-2xl relative overflow-hidden">
              {tabItems.map((item) => (
                <TabsTrigger 
                  key={item.id}
                  value={item.id} 
                  className="relative text-sm md:text-base font-medium px-4 py-3 rounded-xl transition-all duration-300 data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-lg"
                >
                  {item.label}
                </TabsTrigger>
              ))}
              <Progress 
                value={progress} 
                className="absolute bottom-0 left-0 w-full h-1 bg-transparent"
                style={{
                  '--progress-background': 'transparent',
                  '--progress-foreground': 'white'
                } as React.CSSProperties}
              />
            </TabsList>

            <TabsContent value="marketplace" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Job Market Place</h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Connect with top talent through our intelligent job marketplace. Our AI-powered platform matches you with the most qualified candidates while providing real-time market insights and competitive intelligence.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {jobMarketplaceFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                        <feature.icon className="w-5 h-5 text-pink-500 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                          <p className="text-sm text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Recent Job Listings</h4>
                  {jobListings.map((job, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-1">{job.title}</h5>
                            <p className="text-gray-600">{job.company}</p>
                          </div>
                          <span className="text-sm text-gray-500">{job.posted}</span>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {job.location}
                          </div>
                          <div className="flex items-center">
                            <DollarSign className="w-4 h-4 mr-1" />
                            {job.salary}
                          </div>
                          <div className="flex items-center">
                            <Briefcase className="w-4 h-4 mr-1" />
                            {job.type}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="ats" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">AI Assisted ATS</h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Streamline your entire recruitment process with our intelligent Applicant Tracking System. From resume screening to interview scheduling, our AI handles the heavy lifting while you focus on building relationships.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {atsFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                        <feature.icon className="w-5 h-5 text-pink-500 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                          <p className="text-sm text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
                    alt="AI Assisted ATS Dashboard"
                    className="w-full h-96 object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="guaranteed" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Guaranteed Hiring Program</h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Take the risk out of hiring with our guaranteed placement program. We're so confident in our process that we offer a 100% success guarantee with full money-back assurance on every placement.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {guaranteedFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                        <feature.icon className="w-5 h-5 text-pink-500 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                          <p className="text-sm text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
                    alt="Guaranteed Hiring Success"
                    className="w-full h-96 object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="recruiter" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">AI Recruiter Agent</h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Deploy your personal AI recruiter that works 24/7 to source, engage, and nurture candidates. Our intelligent agent learns your preferences and continuously improves its performance to deliver better results.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {recruiterFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                        <feature.icon className="w-5 h-5 text-pink-500 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                          <p className="text-sm text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80"
                    alt="AI Recruiter Agent Interface"
                    className="w-full h-96 object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready To Transform Your Hiring?
          </h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto mb-8">
            Join thousands of companies that have revolutionized their hiring process with our AI-powered solutions.
          </p>
          <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 text-lg rounded-lg font-medium shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transition-all duration-300">
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HiringSolutions;
