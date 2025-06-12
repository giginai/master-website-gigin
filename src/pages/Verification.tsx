
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
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      content: "AI-powered ID verification ensures fast and accurate identity validation based on documents, removing the fraud alert identity validation. Automated risk assessment for large profiles of real identity theft."
    },
    {
      id: "criminal",
      title: "Criminal Record Checks",
      icon: FileCheck,
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop",
      content: "Reliable and international criminal record screening by AI scanning for court cases, legal disputes, and criminal sanctions. Compliance verification for high-security roles and industries."
    },
    {
      id: "employment",
      title: "Employment & Experience Verification",
      icon: Building,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      content: "AI-powered employment history validation with multi-source database verification. Automated cross-checking of job roles, tenure, and salary analysis of fraud detection for resume inconsistencies and discrepancies."
    },
    {
      id: "education",
      title: "Education & Certification Verification",
      icon: CheckCircle,
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop",
      content: "Ensure confidence in candidate qualifications with fast verification processes. AI-assisted certificate authentication and degree validation. Fraud detection for fake stated academic credentials."
    },
    {
      id: "social",
      title: "Social Media & Digital Footprint Screening",
      icon: Search,
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      content: "Automated behavioral screening for risk profile behavior analysis. Online quality control for potential compliance violations. Digital reputation analysis to ensure company brand safety."
    },
    {
      id: "financial",
      title: "Financial Background Verification",
      icon: Globe,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      content: "Comprehensive financial history checks including credit scores, bankruptcy records, and financial stability assessment for high-trust positions."
    },
    {
      id: "reference",
      title: "Reference & Character Verification",
      icon: Users,
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
      content: "AI-powered reference validation with automated contact verification and character assessment through multiple touchpoints and data sources."
    },
    {
      id: "address",
      title: "Address & Residence Verification",
      icon: Eye,
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
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
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-900 via-teal-700 to-blue-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
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
          
          <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 text-lg rounded-lg font-medium mb-12">
            Get Started
          </Button>
          
          {/* Hero Dashboard Image */}
          <div className="relative max-w-5xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="/lovable-uploads/44f3826a-9ec1-4397-bcaf-340a68a507ee.png" 
                alt="Verification Dashboard" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Scroll Tab Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tailored Background Verification Solutions, Built Around Your Needs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive verification services powered by AI for faster, more accurate results
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="relative mb-12">
              <button 
                onClick={() => scrollTabs('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="mx-12 overflow-hidden">
                <TabsList 
                  ref={tabsListRef}
                  className="flex overflow-x-auto scrollbar-hide bg-gray-50 p-1 rounded-xl h-auto space-x-1 w-full"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {verificationTabs.map((tab) => (
                    <TabsTrigger 
                      key={tab.id}
                      value={tab.id} 
                      className="flex-shrink-0 rounded-lg py-4 px-6 text-sm font-medium data-[state=active]:bg-white data-[state=active]:shadow-lg data-[state=active]:text-pink-600 transition-all duration-300 whitespace-nowrap min-w-[200px] text-center"
                    >
                      <tab.icon className="w-4 h-4 mr-2" />
                      {tab.title}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              
              <button 
                onClick={() => scrollTabs('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {verificationTabs.map((tab) => (
              <TabsContent key={tab.id} value={tab.id} className="mt-0">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <tab.icon className="w-8 h-8 text-pink-500" />
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {tab.title}
                      </h3>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {tab.content}
                    </p>
                    <Button variant="outline" className="border-pink-500 text-pink-500 hover:bg-pink-50">
                      View Details →
                    </Button>
                  </div>

                  <div className="relative">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-50 to-gray-100 p-1">
                      <img 
                        src={tab.image} 
                        alt={tab.title}
                        className="w-full h-80 object-cover rounded-3xl"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why choose us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the perfect blend of AI precision and human expertise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyVerifyinCards.map((card, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                <CardContent className="p-0">
                  <div className={`bg-gradient-to-br ${card.gradient} p-8 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12"></div>
                    <div className="relative z-10">
                      <card.icon className="w-12 h-12 mb-6 text-white" />
                      <h3 className="text-xl font-bold mb-4">
                        {card.title}
                      </h3>
                      <p className="text-white/90 text-sm leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 text-lg rounded-lg font-medium">
              Book A Demo
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
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
