
import { Shield, Users, Zap, Bell, Settings, Lock, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const VerificationUSPSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const differentiators = [
    {
      icon: Users,
      title: "Enterprise-Grade Features",
      description: "Multi-Org & Team Management, Secure Sign-In & MFA, Unlimited Team Members, and HRMS Integration Ready",
      outcome: "Gives HR full control across the org, even with distributed teams—no compromise on scale or security.",
      features: ["Multi-Org & Team Management", "Secure Sign-In & MFA", "Unlimited Team Members", "HRMS Integration Ready"]
    },
    {
      icon: Zap,
      title: "Minimal HR Effort",
      description: "Built for Bulk processing with AI for mapping/organizing, Secure Candidate-Led Data Collection, Live Dashboard View",
      outcome: "Automates low-value tasks, saving time and ensuring consistent documentation for audits and hiring reviews.",
      features: ["Built for Bulk (AI for mapping/organizing ZIPs)", "Secure Candidate-Led Data Collection", "Live Dashboard View", "Downloadable MIS Reports", "Multi-Channel Data Intake"]
    },
    {
      icon: Shield,
      title: "AI-Driven Deeper Verification",
      description: "Advanced Forgery Detection, Pre-Screening Intelligence, and comprehensive Workflow Automation",
      outcome: "HR gets faster, more reliable verifications with minimal manual involvement.",
      features: ["Forgery Detection", "Pre-Screening Intelligence", "Workflow Automation"]
    },
    {
      icon: Bell,
      title: "Always in the Know – No Follow-Ups Needed",
      description: "Automated Email Triggers, Daily & Weekly Status Reports, and Vendor-Free Coordination",
      outcome: "HR spends less time chasing status and more time focusing on hiring the right people.",
      features: ["Automated Email Triggers", "Daily & Weekly Status Reports", "Vendor-Free Coordination"]
    },
    {
      icon: Settings,
      title: "Customization That Works for You",
      description: "Flexible Check Configuration, Tailored Reports, Custom Decision Logic, and Customizable Packages",
      outcome: "HR gets exactly what they need—relevant data, aligned with business needs and risk policies.",
      features: ["Flexible Check Configuration", "Tailored Reports", "Custom Decision Logic", "Notification preferences", "Roles and permissions", "Customised data segregation", "Customisable Package"]
    },
    {
      icon: Lock,
      title: "End-to-End Security & Compliance",
      description: "ISO 27001 Certified with PII Stored in Vault, Custom Data Retention Period, and comprehensive Audit Logs",
      outcome: "HR can rest assured knowing sensitive data is secure, auditable, and compliant with global standards.",
      features: ["ISO 27001 Certified", "PII Stored in Vault", "Custom Data Retention Period", "Audit Logs & Trails", "Encrypted Storage & Transit", "Brute-Force Protection"]
    }
  ];

  const keyBenefits = [
    "Enterprise-grade access and flexibility",
    "Verified security/audit trails/compliance",
    "Minimal effort with maximum visibility",
    "Automated updates/no chasing vendors",
    "Smarter workflows driven by AI",
    "Reports/checks tailored to exact needs"
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(differentiators.length / 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(differentiators.length / 2)) % Math.ceil(differentiators.length / 2));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose VerifyIn?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI-powered platform delivers what HR teams need most—fast, accurate, and comprehensive 
            background verification with enterprise-grade security.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative mb-16">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(differentiators.length / 2) }, (_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
                    {differentiators.slice(slideIndex * 2, slideIndex * 2 + 2).map((item, index) => (
                      <div 
                        key={slideIndex * 2 + index} 
                        className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1"
                      >
                        <div className="flex items-start mb-6">
                          <div className="w-14 h-14 bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:from-pink-200 group-hover:to-purple-200 transition-all duration-300">
                            <item.icon className="w-7 h-7 text-pink-600" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                              {item.title}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed mb-4">
                              {item.description}
                            </p>
                          </div>
                        </div>
                        
                        <div className="bg-gradient-to-r from-pink-50 to-purple-50 border-l-4 border-pink-400 p-4 mb-4 rounded-r-lg">
                          <p className="text-pink-700 font-medium text-sm">
                            <strong>Impact:</strong> {item.outcome}
                          </p>
                        </div>
                        
                        <div className="space-y-2">
                          {item.features.slice(0, 3).map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                              <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full mr-3 flex-shrink-0"></div>
                              {feature}
                            </div>
                          ))}
                          {item.features.length > 3 && (
                            <div className="text-sm text-pink-500 font-medium mt-2">
                              +{item.features.length - 3} more features
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 group z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-pink-600" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 group z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-pink-600" />
          </button>

          {/* Carousel Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {Array.from({ length: Math.ceil(differentiators.length / 2) }, (_, index) => (
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

        {/* VerifyIn Delivers Section */}
        <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-8">
            VerifyIn Delivers What HR Needs Most
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-10">
            {keyBenefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                </div>
                <p className="text-white font-medium text-lg leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-10">
            <button className="bg-white text-pink-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg">
              Experience the Difference
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerificationUSPSection;
