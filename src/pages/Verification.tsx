
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, CheckCircle, Users, FileCheck, Eye, Search, Building, Globe, Zap, Clock, Award } from "lucide-react";
import { useState, useRef } from "react";

const Verification = () => {
  const [activeTab, setActiveTab] = useState("identity");
  const tabsListRef = useRef<HTMLDivElement>(null);

  const verificationTabs = [
    {
      id: "identity",
      title: "Identity Checks & KYC",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      content: "AI-powered ID verification ensures fast and accurate identity validation based on documents, removing the fraud alert identity validation. Automated risk assessment for large profiles of real identity theft."
    },
    {
      id: "criminal",
      title: "Criminal Record Checks",
      icon: FileCheck,
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop",
      content: "Reliable and international criminal record screening by AI scanning for court cases, legal disputes, and criminal sanctions. Compliance verification for high-security roles and industries."
    },
    {
      id: "employment",
      title: "Employment & Experience Verification",
      icon: Building,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
      content: "AI-powered employment history validation with multi-source database verification. Automated cross-checking of job roles, tenure, and salary analysis of fraud detection for resume inconsistencies and discrepancies."
    },
    {
      id: "education",
      title: "Education & Certification Verification",
      icon: CheckCircle,
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop",
      content: "Ensure confidence in candidate qualifications with fast verification processes. AI-assisted certificate authentication and degree validation. Fraud detection for fake stated academic credentials."
    },
    {
      id: "social",
      title: "Social Media & Digital Footprint Screening",
      icon: Search,
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      content: "Automated behavioral screening for risk profile behavior analysis. Online quality control for potential compliance violations. Digital reputation analysis to ensure company brand safety."
    },
    {
      id: "financial",
      title: "Financial Background Verification",
      icon: Globe,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
      content: "Comprehensive financial history checks including credit scores, bankruptcy records, and financial stability assessment for high-trust positions."
    },
    {
      id: "reference",
      title: "Reference & Character Verification",
      icon: Users,
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop",
      content: "AI-powered reference validation with automated contact verification and character assessment through multiple touchpoints and data sources."
    },
    {
      id: "address",
      title: "Address & Residence Verification",
      icon: Eye,
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
      content: "Real-time address validation and residence history verification using multiple databases and AI-powered cross-referencing for accuracy."
    }
  ];

  const whyVerifyinCards = [
    {
      title: "Expert Verification Requests",
      description: "Instant Verification with AI-driven Batch Detection and Full Risk Assessment with Live Tracking",
      icon: Zap,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "AI Precision Meets Human Expertise",
      description: "Advanced Logistic & AI-driven processes combined with human oversight for maximum accuracy",
      icon: Award,
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Lightning Fast Processing",
      description: "Comprehensive screening services with identity, criminal, employment, and education verification in record time",
      icon: Clock,
      gradient: "from-pink-500 to-red-600"
    }
  ];

  const scrollTabs = (direction: 'left' | 'right') => {
    if (tabsListRef.current) {
      const scrollAmount = 250;
      const currentScroll = tabsListRef.current.scrollLeft;
      const newScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      tabsListRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage="verification" />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-8 min-h-[90vh] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/lovable-uploads/aabac661-4393-418d-847f-8d74a313e0b3.png)'
          }}
        />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10 flex items-center justify-center min-h-[80vh]">
          <div>
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
              <span className="text-white">✦</span>
              <span className="text-white font-medium mx-2">Verifyin</span>
              <span className="text-white">✦</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Fast & Accurate- AI Driven<br />
              Background Verification
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Reduce time-to-hire, mitigate hiring risks, and ensure compliance while<br />
              minimizing the efforts.
            </p>
            
            <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 text-lg rounded-lg font-medium mb-8">
              Get Started
            </Button>
            
            {/* Hero Dashboard Image */}
            <div className="relative max-w-4xl mx-auto">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="/lovable-uploads/44f3826a-9ec1-4397-bcaf-340a68a507ee.png" 
                  alt="Verification Dashboard" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Scroll Tab Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tailored Background Verification Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive verification services powered by AI for faster, more accurate results
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            {/* Scrollable Tab Headers */}
            <div className="relative mb-8">
              <button 
                onClick={() => scrollTabs('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
              >
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="mx-10 overflow-hidden">
                <TabsList 
                  ref={tabsListRef}
                  className="flex overflow-x-auto scrollbar-hide bg-gray-100 p-1 rounded-xl h-auto space-x-1 w-max"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {verificationTabs.map((tab) => (
                    <TabsTrigger 
                      key={tab.id}
                      value={tab.id} 
                      className="flex-shrink-0 flex items-center rounded-lg py-3 px-4 text-sm font-medium data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-pink-600 transition-all duration-300 whitespace-nowrap min-w-[180px] text-gray-600 hover:bg-white/50"
                    >
                      <tab.icon className="w-4 h-4 mr-2" />
                      {tab.title}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              
              <button 
                onClick={() => scrollTabs('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
              >
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Tab Content */}
            {verificationTabs.map((tab) => (
              <TabsContent key={tab.id} value={tab.id} className="mt-0">
                <Card className="border-0 shadow-lg overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-5 gap-0">
                      {/* Content Section */}
                      <div className="lg:col-span-3 p-8 bg-gradient-to-br from-gray-50 to-white">
                        <div className="flex items-center space-x-3 mb-6">
                          <div className="p-3 rounded-full bg-pink-100">
                            <tab.icon className="w-6 h-6 text-pink-600" />
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                            {tab.title}
                          </h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-6">
                          {tab.content}
                        </p>
                        <Button variant="outline" className="border-pink-500 text-pink-500 hover:bg-pink-50">
                          Learn More →
                        </Button>
                      </div>

                      {/* Image Section */}
                      <div className="lg:col-span-2 relative overflow-hidden">
                        <img 
                          src={tab.image} 
                          alt={tab.title}
                          className="w-full h-full object-cover min-h-[300px] lg:min-h-[400px]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why choose us?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the perfect blend of AI precision and human expertise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {whyVerifyinCards.map((card, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300 border-0 overflow-hidden glass-morphism backdrop-blur-xl bg-white/10 hover:bg-white/20">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${card.gradient} mb-4`}>
                      <card.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/lovable-uploads/aabac661-4393-418d-847f-8d74a313e0b3.png)'
          }}
        />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Book A Demo For Background<br />
            Verification
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Comprehensive Screening Services - Identity, criminal, employment,<br />
            education, social media, and digital footprint verification.
          </p>
          <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 text-lg rounded-lg font-medium mb-12">
            Talk to Sales
          </Button>
          
          {/* CTA Dashboard Image */}
          <div className="relative max-w-5xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="/lovable-uploads/44f3826a-9ec1-4397-bcaf-340a68a507ee.png" 
                alt="Verification Dashboard Interface" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Verification;
