
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, CheckCircle, Users, FileCheck, Eye, Search, Building, Globe } from "lucide-react";
import { useState, useRef } from "react";

const Verification = () => {
  const [activeTab, setActiveTab] = useState("identity");
  const tabsListRef = useRef<HTMLDivElement>(null);

  const verificationTabs = [
    {
      id: "identity",
      title: "Identity Checks & KYC",
      icon: Shield,
      image: "/lovable-uploads/23869083-65b7-438b-bfe6-4aab11bb9527.png",
      content: "AI-powered ID verification ensures fast and accurate identity validation based on documents, removing the fraud alert identity validation. Automated risk assessment for large profilesof real identity theft."
    },
    {
      id: "criminal",
      title: "Criminal Record Checks",
      icon: FileCheck,
      image: "/lovable-uploads/b8f3a332-f59e-4dff-9644-bc2397c4e30d.png",
      content: "Reliable and international criminal record screening by AI scanning for court cases, legal disputes, and criminal sanctions. Compliance verification for high-security roles and industries."
    },
    {
      id: "employment",
      title: "Employment & Experience Verification",
      icon: Building,
      image: "/lovable-uploads/ec8c7937-e805-4733-b171-f703516014ea.png",
      content: "AI-powered employment history validation with multi-source database verification. Automated cross-checking of job roles, tenure, and salary analysis of fraud detection for resume inconsistencies and discrepancies."
    },
    {
      id: "education",
      title: "Education & Certification Verification",
      icon: CheckCircle,
      image: "/lovable-uploads/56a40185-261b-4872-a09a-a76c5af61583.png",
      content: "Ensure confidence in candidate qualifications with fast verification processes. AI-assisted certificate authentication and degree validation. Fraud detection for fake stated academic credentials."
    },
    {
      id: "social",
      title: "Social Media & Digital Footprint Screening",
      icon: Search,
      image: "/lovable-uploads/f0acdf04-0015-4664-af62-d43a84908fcd.png",
      content: "Automated behavioral screening for risk profile behavior analysis. Online quality control for potential compliance violations. Digital reputation analysis to ensure company brand safety."
    },
    {
      id: "financial",
      title: "Financial Background Verification",
      icon: Globe,
      image: "/lovable-uploads/b4b1c883-f32c-4d6f-8b13-b57cf11be4e2.png",
      content: "Comprehensive financial history checks including credit scores, bankruptcy records, and financial stability assessment for high-trust positions."
    },
    {
      id: "reference",
      title: "Reference & Character Verification",
      icon: Users,
      image: "/lovable-uploads/cbc9857f-0271-482c-9bd5-a1612afa5efe.png",
      content: "AI-powered reference validation with automated contact verification and character assessment through multiple touchpoints and data sources."
    },
    {
      id: "address",
      title: "Address & Residence Verification",
      icon: Eye,
      image: "/lovable-uploads/d76849a1-064a-4fa3-aec2-50cf0ab617bc.png",
      content: "Real-time address validation and residence history verification using multiple databases and AI-powered cross-referencing for accuracy."
    }
  ];

  const whyVerifyinCards = [
    {
      title: "Expert Verification Requests",
      description: "Instant Verification Requests",
      image: "/lovable-uploads/87b15fdb-bc3f-4754-a553-2f3e9cf9b7fe.png",
      features: ["Advanced Logistic & AI-driven Batch Detection", "Full Risk Assessment with Live Tracking"]
    },
    {
      title: "AI Precision Meets Human Expertise",
      description: "AI Precision Meets Human Expertise",
      image: "/lovable-uploads/d8e99f47-c4db-469d-96ee-4f111c32f5fe.png",
      features: ["Expert Verification Requests", "Advanced Logistic & AI-driven Batch Detection", "Full Risk Assessment with Live Tracking"]
    },
    {
      title: "Book A Demo For Background Verification",
      description: "Comprehensive Screening Services",
      image: "/lovable-uploads/beecfc18-7b22-448d-8a55-dba9333a3ced.png",
      features: ["Identity, criminal, employment, education, social media, and digital footprint verification"]
    }
  ];

  const scrollTabs = (direction: 'left' | 'right') => {
    if (tabsListRef.current) {
      const scrollAmount = 200;
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
                src="/lovable-uploads/56a40185-261b-4872-a09a-a76c5af61583.png" 
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
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <TabsList 
                ref={tabsListRef}
                className="flex overflow-x-auto scrollbar-hide bg-gray-100 p-2 rounded-xl mx-8 h-auto space-x-2"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {verificationTabs.map((tab) => (
                  <TabsTrigger 
                    key={tab.id}
                    value={tab.id} 
                    className="flex-shrink-0 rounded-lg py-3 px-6 text-sm font-medium data-[state=active]:bg-white data-[state=active]:shadow-md transition-all duration-300 whitespace-nowrap"
                  >
                    <tab.icon className="w-4 h-4 mr-2" />
                    {tab.title}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              <button 
                onClick={() => scrollTabs('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-50 to-gray-100 p-6">
                      <img 
                        src={tab.image} 
                        alt={tab.title}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Why Verifyin Section */}
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

          <div className="space-y-12">
            {whyVerifyinCards.map((card, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className={`grid lg:grid-cols-2 gap-0 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    <div className={`p-12 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        {card.title}
                      </h3>
                      <p className="text-lg text-gray-600 mb-6">
                        {card.description}
                      </p>
                      <ul className="space-y-3">
                        {card.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      {index === whyVerifyinCards.length - 1 && (
                        <Button className="bg-pink-500 hover:bg-pink-600 text-white mt-6">
                          Book A Demo
                        </Button>
                      )}
                    </div>
                    <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      <img 
                        src={card.image} 
                        alt={card.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-800 to-purple-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Book A Demo For Background<br />
            Verification
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Comprehensive Screening Services - Identity, criminal, employment,<br />
            education, social media, and digital footprint verification.
          </p>
          <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 text-lg rounded-lg font-medium">
            Talk to Sales
          </Button>
          
          {/* CTA Dashboard Images */}
          <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="/lovable-uploads/beecfc18-7b22-448d-8a55-dba9333a3ced.png" 
                alt="Verification Dashboard 1" 
                className="w-full h-auto"
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="/lovable-uploads/d8e99f47-c4db-469d-96ee-4f111c32f5fe.png" 
                alt="Verification Dashboard 2" 
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
