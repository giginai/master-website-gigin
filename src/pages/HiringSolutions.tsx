
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Bot, CheckCircle, Users, Zap, Database, Clock, Target, BarChart3, Shield, Star, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const HiringSolutions = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const jobMarketFeatures = [
    {
      title: "AI-Powered Candidate Sourcing",
      description: "Find the right candidates from millions of profiles using advanced AI matching algorithms",
      icon: Search
    },
    {
      title: "Real-time Job Posting",
      description: "Post jobs instantly across multiple platforms and get qualified candidates faster",
      icon: Zap
    },
    {
      title: "Smart Filtering",
      description: "Advanced filters to narrow down candidates based on skills, experience, and location",
      icon: Target
    },
    {
      title: "Candidate Analytics",
      description: "Get detailed insights and analytics on candidate performance and engagement",
      icon: BarChart3
    }
  ];

  const atsFeatures = [
    {
      title: "Automated Screening",
      description: "AI-powered resume screening and candidate ranking to save time and improve quality",
      icon: Bot
    },
    {
      title: "Interview Scheduling",
      description: "Seamless interview scheduling with calendar integration and automated reminders",
      icon: Clock
    },
    {
      title: "Collaborative Hiring",
      description: "Team-based hiring with role-based permissions and feedback collection",
      icon: Users
    },
    {
      title: "Custom Workflows",
      description: "Create custom hiring workflows that match your company's unique process",
      icon: Target
    },
    {
      title: "Integration Ready",
      description: "Seamlessly integrate with your existing HRMS and other business tools",
      icon: Database
    },
    {
      title: "Compliance Management",
      description: "Built-in compliance features to ensure your hiring process meets all regulations",
      icon: Shield
    }
  ];

  const bulkHiringCards = [
    {
      title: "Mass Recruitment Campaigns",
      description: "Launch large-scale recruitment drives with automated candidate sourcing and screening",
      image: "photo-1605810230434-7631ac76ec81"
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
      description: "Our AI agents analyze job requirements and candidate profiles to find perfect matches automatically",
      image: "photo-1605810230434-7631ac76ec81",
      stats: "95% Match Accuracy"
    },
    {
      title: "Automated Outreach",
      description: "AI-powered personalized messaging to engage candidates at scale with human-like communication",
      image: "photo-1519389950473-47ba0277781c",
      stats: "3x Higher Response Rate"
    },
    {
      title: "Predictive Analytics",
      description: "Predict candidate success and retention rates using advanced machine learning algorithms",
      image: "photo-1581091226825-a6a2a5aee158",
      stats: "85% Retention Prediction"
    },
    {
      title: "Continuous Learning",
      description: "AI agents that learn from your hiring decisions to improve recommendations over time",
      image: "photo-1486312338219-ce68d2c6f44d",
      stats: "Improves 20% Monthly"
    }
  ];

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
          backgroundImage: 'url(/lovable-uploads/f0acdf04-0015-4664-af62-d43a84908fcd.png)'
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
          <div className="relative max-w-6xl mx-auto">
            <div className="relative overflow-hidden rounded-t-3xl group h-64 md:h-80 lg:h-96">
              <img 
                src="/lovable-uploads/56a40185-261b-4872-a09a-a76c5af61583.png" 
                alt="Gigin Hiring Platform Dashboard" 
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ objectPosition: 'center top' }}
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
            {jobMarketFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
                  <CardHeader className="text-center p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>

          {/* Job Marketplace Stats */}
          <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-3xl p-8 text-center text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">2M+</div>
                <div className="text-lg opacity-90">Active Candidates</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100K+</div>
                <div className="text-lg opacity-90">Jobs Posted</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="text-lg opacity-90">Match Accuracy</div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {atsFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
                  <CardHeader className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
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
                    src={`https://images.unsplash.com/${card.image}?auto=format&fit=crop&w=800&q=80`}
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
          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {aiAgentCards.map((card, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mx-4">
                      <div className="grid lg:grid-cols-2 gap-0">
                        <div className="p-12 flex flex-col justify-center">
                          <h3 className="text-3xl font-bold text-gray-900 mb-6">
                            {card.title}
                          </h3>
                          <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            {card.description}
                          </p>
                          <div className="flex items-center space-x-4">
                            <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-lg font-bold">
                              {card.stats}
                            </div>
                            <Button className="bg-transparent border border-pink-500 text-pink-600 hover:bg-pink-500 hover:text-white px-6 py-2 rounded-lg">
                              Learn More
                            </Button>
                          </div>
                        </div>
                        <div className="relative">
                          <img 
                            src={`https://images.unsplash.com/${card.image}?auto=format&fit=crop&w=800&q=80`}
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
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-pink-600" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 text-lg rounded-lg font-medium shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transition-all duration-300">
              Start Free Trial
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg rounded-lg font-medium transition-all duration-300">
              Schedule Demo
            </Button>
          </div>

          {/* CTA Dashboard Image */}
          <div className="relative max-w-6xl mx-auto">
            <div className="h-64 md:h-80 lg:h-96 overflow-hidden rounded-t-3xl">
              <img 
                src="/lovable-uploads/56a40185-261b-4872-a09a-a76c5af61583.png"
                alt="Gigin Platform Dashboard"
                className="w-full h-full object-cover object-top"
                style={{ objectPosition: 'center top' }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HiringSolutions;
