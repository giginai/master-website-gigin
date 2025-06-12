import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Search, Bot, CheckCircle, Users, Zap, Database, Clock, Target, BarChart3, Shield, Star, ArrowRight, ChevronLeft, ChevronRight, Award, Verified } from "lucide-react";
import { useState, useEffect } from "react";

const HiringSolutions = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTab, setCurrentTab] = useState(0);
  const [progress, setProgress] = useState(0);

  const jobMarketFeatures = [
    {
      title: "AI-Powered Candidate Sourcing",
      description: "Find the right candidates from millions of profiles using advanced AI matching algorithms",
      icon: "🎯"
    },
    {
      title: "Real-time Job Posting",
      description: "Post jobs instantly across multiple platforms and get qualified candidates faster",
      icon: "⚡"
    },
    {
      title: "Smart Filtering",
      description: "Advanced filters to narrow down candidates based on skills, experience, and location",
      icon: "🔍"
    },
    {
      title: "Candidate Analytics",
      description: "Get detailed insights and analytics on candidate performance and engagement",
      icon: "📊"
    }
  ];

  const atsFeatures = [
    {
      title: "Automated Screening",
      description: "AI-powered resume screening and candidate ranking to save time and improve quality. Our advanced algorithms analyze resumes instantly, identifying top candidates and reducing manual review time by 80%.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      trustIndicators: ["95% Accuracy", "80% Time Saved", "500+ Companies Trust"]
    },
    {
      title: "Interview Scheduling",
      description: "Seamless interview scheduling with calendar integration and automated reminders. Smart scheduling eliminates back-and-forth emails and automatically handles timezone conversions for global teams.",
      image: "photo-1519389950473-47ba0277781c",
      trustIndicators: ["24/7 Availability", "Zero Conflicts", "Global Timezone Support"]
    },
    {
      title: "Collaborative Hiring",
      description: "Team-based hiring with role-based permissions and feedback collection. Enable your entire team to participate in the hiring process with structured feedback and decision-making workflows.",
      image: "photo-1581091226825-a6a2a5aee158",
      trustIndicators: ["Multi-Team Support", "Secure Access", "Real-time Collaboration"]
    },
    {
      title: "Custom Workflows",
      description: "Create custom hiring workflows that match your company's unique process. Design approval chains, automated actions, and custom stages that reflect your organization's hiring methodology.",
      image: "photo-1486312338219-ce68d2c6f44d",
      trustIndicators: ["100% Customizable", "No-Code Setup", "Enterprise Ready"]
    },
    {
      title: "Integration Ready",
      description: "Seamlessly integrate with your existing HRMS and other business tools. Connect with popular platforms like Slack, Teams, and major HRMS systems through our robust API and pre-built integrations.",
      image: "photo-1498050108023-c5249f4df085",
      trustIndicators: ["50+ Integrations", "API First", "Enterprise Security"]
    },
    {
      title: "Compliance Management",
      description: "Built-in compliance features to ensure your hiring process meets all regulations. Automatically handle GDPR, EEOC requirements, and maintain detailed audit trails for complete compliance assurance.",
      image: "photo-1483058712412-4245e9b90334",
      trustIndicators: ["GDPR Compliant", "EEOC Ready", "Full Audit Trail"]
    }
  ];

  const bulkHiringCards = [
    {
      title: "Mass Recruitment Campaigns",
      description: "Launch large-scale recruitment drives with automated candidate sourcing and screening",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Campus Hiring Programs",
      description: "Streamlined campus recruitment with batch processing and student database integration",
      image: "photo-1519389950473-47ba0277781c"
    },
    {
      title: "Seasonal Workforce",
      description: "Quickly scale your workforce for seasonal demands with rapid hiring solutions",
      image: "photo-1581091226825-a6a2a5aee158"
    },
    {
      title: "Global Talent Acquisition",
      description: "Access international talent pools with multi-location hiring capabilities",
      image: "photo-1486312338219-ce68d2c6f44d"
    }
  ];

  const aiAgentCards = [
    {
      title: "Intelligent Candidate Matching",
      description: "Our AI agents analyze job requirements and candidate profiles to find perfect matches automatically. Using advanced machine learning algorithms, we ensure the highest quality matches while reducing time-to-hire significantly.",
      image: "https://images.unsplash.com/photo-1573165231977-3f0e27806045?auto=format&fit=crop&w=800&q=80",
      trustMarkers: ["ISO 27001 Certified", "99.9% Uptime"]
    },
    {
      title: "Automated Outreach",
      description: "AI-powered personalized messaging to engage candidates at scale with human-like communication. Our system crafts personalized messages based on candidate profiles and preferences, improving response rates dramatically.",
      image: "photo-1519389950473-47ba0277781c",
      trustMarkers: ["GDPR Compliant", "Enterprise Grade"]
    },
    {
      title: "Predictive Analytics",
      description: "Predict candidate success and retention rates using advanced machine learning algorithms. Our models analyze historical data and performance indicators to forecast long-term employee success and cultural fit.",
      image: "photo-1581091226825-a6a2a5aee158",
      trustMarkers: ["ML Powered", "Data Secure"]
    },
    {
      title: "Continuous Learning",
      description: "AI agents that learn from your hiring decisions to improve recommendations over time. The system continuously refines its understanding of your preferences and requirements to provide increasingly accurate matches.",
      image: "photo-1486312338219-ce68d2c6f44d",
      trustMarkers: ["Self-Improving", "Trusted by 1000+"]
    }
  ];

  // Auto-switch tabs every 5 seconds with progress bar
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentTab((prevTab) => (prevTab + 1) % atsFeatures.length);
          return 0;
        }
        return prev + 2; // Increment by 2% every 100ms for smooth animation
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, []);

  // Reset progress when tab is manually changed
  const handleTabChange = (index: number) => {
    setCurrentTab(index);
    setProgress(0);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % aiAgentCards.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + aiAgentCards.length) % aiAgentCards.length);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/lovable-uploads/7a20c29e-c288-49cc-aaa7-43dd8f9d3a00.png)'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <Header currentPage="hiring-solutions" />
      
      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-0">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <span className="text-white">✦</span>
            <span className="text-white font-medium mx-2">Hiring Solutions</span>
            <span className="text-white">✦</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-5xl mx-auto">
            The AI-Optimized Hiring Platform<br />
            Built For Speed & Accuracy
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your recruitment process with intelligent automation that finds,<br />
            screens, and hires top talent faster than traditional methods while<br />
            maintaining the highest quality standards.
          </p>
          <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 text-lg rounded-lg font-medium mb-12 shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transition-all duration-300">
            Start Hiring Smarter
          </Button>

          {/* Hero Dashboard Image */}
          <div className="relative max-w-3xl mx-auto">
            <div className="relative overflow-hidden rounded-t-3xl group">
              <img 
                src="/lovable-uploads/31c4796a-7366-4dc3-8833-cc1ae604f052.png" 
                alt="Gigin Hiring Platform Dashboard" 
                className="w-full h-auto object-contain transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Job Market Place Section */}
      <section className="relative z-10 py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gray-100 rounded-full px-4 py-2 mb-6">
              <span className="text-gray-800">✦</span>
              <span className="text-gray-800 font-medium mx-2">Job Market Place</span>
              <span className="text-gray-800">✦</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Gigin's Job Marketplace<br />
              - AI Powered Talent Hub
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
              Access millions of pre-screened candidates and post jobs that reach the right talent instantly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {jobMarketFeatures.map((feature, index) => (
              <Card key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
                <CardHeader className="text-center p-6">
                  <div className="flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-7xl filter drop-shadow-lg">{feature.icon}</span>
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Job Marketplace Stats */}
          <div className="text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div>
                <div className="text-4xl font-bold mb-2 text-pink-500">2M+</div>
                <div className="text-lg text-gray-600">Active Candidates</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2 text-pink-500">100K+</div>
                <div className="text-lg text-gray-600">Jobs Posted</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2 text-pink-500">95%</div>
                <div className="text-lg text-gray-600">Match Accuracy</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI-Assisted ATS Section */}
      <section className="relative z-10 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="text-gray-800">✦</span>
              <span className="text-gray-800 font-medium mx-2">AI-Assisted ATS</span>
              <span className="text-gray-800">✦</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              AI-Assisted Application<br />
              Tracking System
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
              Streamline your entire hiring process with intelligent automation and data-driven insights
            </p>
          </div>

          {/* Interactive Tabs */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Tab Navigation */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-b border-gray-200">
              {atsFeatures.map((feature, index) => (
                <button
                  key={index}
                  onClick={() => handleTabChange(index)}
                  className={`relative p-4 text-xs lg:text-sm font-medium transition-all duration-300 ${
                    currentTab === index
                      ? 'bg-pink-500 text-white'
                      : 'text-gray-600 hover:text-pink-600 hover:bg-pink-50'
                  }`}
                >
                  {feature.title}
                  {currentTab === index && (
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-pink-400">
                      <div 
                        className="bg-white h-full transition-all duration-100 ease-linear"
                        style={{ 
                          width: `${progress}%`
                        }}
                      />
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    {atsFeatures[currentTab].title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {atsFeatures[currentTab].description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {atsFeatures[currentTab].trustIndicators.map((indicator, idx) => (
                      <div key={idx} className="flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        {indicator}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src={atsFeatures[currentTab].image.startsWith('http') ? atsFeatures[currentTab].image : `https://images.unsplash.com/${atsFeatures[currentTab].image}?auto=format&fit=crop&w=800&q=80`}
                    alt={atsFeatures[currentTab].title}
                    className="w-full h-80 object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bulk Hiring Section */}
      <section className="relative z-10 py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gray-100 rounded-full px-4 py-2 mb-6">
              <span className="text-gray-800">✦</span>
              <span className="text-gray-800 font-medium mx-2">Bulk Hiring</span>
              <span className="text-gray-800">✦</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Fast, Scalable & Hiring Without Delays
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
              Scale your recruitment efforts with powerful bulk hiring solutions designed for high-volume needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bulkHiringCards.map((card, index) => (
              <Card key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src={card.image.startsWith('http') ? card.image : `https://images.unsplash.com/${card.image}?auto=format&fit=crop&w=800&q=80`}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardHeader className="p-6">
                  <CardTitle className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors">
                    {card.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {card.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Agent Section */}
      <section className="relative z-10 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="text-gray-800">✦</span>
              <span className="text-gray-800 font-medium mx-2">AI Agent</span>
              <span className="text-gray-800">✦</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Hire Faster, Smarter, &<br />
              More Efficiently
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
              Our AI agents work 24/7 to find, engage, and qualify candidates automatically
            </p>
          </div>

          {/* Carousel */}
          <div className="relative max-w-4xl mx-auto px-16">
            <div className="overflow-hidden rounded-3xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {aiAgentCards.map((card, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mx-2">
                      <div className="grid lg:grid-cols-2 gap-0 min-h-[450px]">
                        <div className="p-6 lg:p-8 flex flex-col justify-center">
                          <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                            {card.title}
                          </h3>
                          <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-6 flex-grow">
                            {card.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {card.trustMarkers.map((marker, idx) => (
                              <div key={idx} className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-lg text-xs lg:text-sm font-medium">
                                <Award className="w-3 h-3 mr-1" />
                                {marker}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="relative min-h-[200px] lg:min-h-[450px]">
                          <img 
                            src={card.image.startsWith('http') ? card.image : `https://images.unsplash.com/${card.image}?auto=format&fit=crop&w=800&q=80`}
                            alt={card.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Controls */}
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 group z-10"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-pink-600" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 group z-10"
            >
              <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-pink-600" />
            </button>

            {/* Carousel Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {aiAgentCards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-pink-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <span className="text-white">✦</span>
            <span className="text-white font-medium mx-2">Get Started</span>
            <span className="text-white">✦</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Secure Top Talent With Gigin's Hiring<br />
            Platform
          </h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto mb-8">
            Join thousands of companies that trust Gigin to find, screen, and hire the best candidates faster than ever before.
          </p>
          <div className="flex justify-center mb-12">
            <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 text-lg rounded-lg font-medium shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transition-all duration-300">
              Sign Up Now
            </Button>
          </div>

          {/* CTA Dashboard Image */}
          <div className="relative max-w-3xl mx-auto">
            <div className="overflow-hidden rounded-t-3xl">
              <img 
                src="/lovable-uploads/31c4796a-7366-4dc3-8833-cc1ae604f052.png"
                alt="Gigin Platform Dashboard"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HiringSolutions;
