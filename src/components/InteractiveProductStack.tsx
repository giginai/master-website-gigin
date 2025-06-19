
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const InteractiveProductStack = () => {
  const [activeProduct, setActiveProduct] = useState("jobs");
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLHeadingElement>(0.2);
  const { ref: tabsRef, isVisible: tabsVisible } = useScrollAnimation<HTMLDivElement>(0.3);

  const products = [
    {
      id: "jobs",
      name: "Gigin Jobs",
      color: "bg-pink-500",
      image: "/lovable-uploads/96449f98-263b-49ae-b6af-a28a3417dbf1.png",
      description: "Smart job matching platform connecting talent with opportunities through AI-powered recommendations and seamless application processes."
    },
    {
      id: "recruiter",
      name: "Gigin Recruiter",
      color: "bg-pink-500",
      image: "/lovable-uploads/73afd943-4f79-42ef-8961-a18a24ed9e65.png",
      description: "Advanced recruitment tools for efficient talent acquisition and candidate management."
    },
    {
      id: "verifyin",
      name: "Gigin VerifyIn",
      color: "bg-pink-500",
      image: "/lovable-uploads/e1e402ad-d167-4348-bc39-578071bd8385.png",
      description: "AI-powered background verification system providing comprehensive screening with real-time reporting and adverse case management."
    },
    {
      id: "skillfit",
      name: "Gigin SkillFit",
      color: "bg-pink-500",
      image: "/lovable-uploads/3dfdea50-f92b-4766-8026-72d73b5e4e85.png",
      description: "Intelligent skill assessment and matching platform for accurate talent evaluation."
    },
    {
      id: "ats",
      name: "Gigin ATS",
      color: "bg-pink-500",
      image: "/lovable-uploads/9f9e9d29-ddb9-4893-84a7-11f97ba68802.png",
      description: "Complete applicant tracking system with candidate pipeline management, interview scheduling, and hiring analytics dashboard."
    },
    {
      id: "waas",
      name: "Gigin Work-as-a-Service",
      color: "bg-pink-500",
      image: "/lovable-uploads/ba79173e-1705-47ed-a8bf-8f9c4fd3939f.png",
      description: "Flexible workforce solutions for on-demand talent and project-based hiring."
    }
  ];

  const activeProductData = products.find(p => p.id === activeProduct);

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-[48px]">
        <div className="text-center mb-10 md:mb-12">
          <h2 
            ref={titleRef}
            className={`text-4xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4 transition-all duration-700 ${
              titleVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'
            }`}
          >
            Your Complete Talent Ecosystem
          </h2>
          <p className={`text-base md:text-lg text-gray-600 max-w-3xl mx-auto transition-all duration-700 delay-200 ${
            titleVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'
          }`}>
            Fragmented systems and manual tasks are a thing of the past. Gigin AI brings all your critical HR functions into one unified platform
          </p>
        </div>

        <div 
          ref={tabsRef}
          className={`flex flex-col lg:flex-row gap-8 transition-all duration-700 delay-400 ${
            tabsVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Product Navigation Tabs */}
          <div className="lg:w-1/3">
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
              {products.map((product, index) => (
                <button
                  key={product.id}
                  onClick={() => setActiveProduct(product.id)}
                  className={`relative p-4 rounded-lg transition-all duration-300 text-left transform hover:scale-105 ${
                    activeProduct === product.id
                      ? "bg-pink-500 text-white shadow-lg scale-105"
                      : "bg-white text-gray-700 border border-gray-200 hover:border-pink-300 hover:shadow-md hover:text-pink-600"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="font-semibold text-sm md:text-base">
                    {product.name}
                  </div>
                  {activeProduct === product.id && (
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-white/20 to-transparent pointer-events-none"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Active Product Display */}
          <div className="lg:w-2/3 py-[8px]">
            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src={activeProductData?.image} 
                  alt={activeProductData?.name} 
                  className="w-full h-64 md:h-80 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                
                {/* Enhanced Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"></div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 py-[32px]">
                  <div className="rounded-lg p-6 mb-2 bg-inherit my-0 py-0 px-0">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4">
                      {activeProductData?.name}
                    </h3>
                    
                    <p className="text-white/95 text-sm md:text-base mb-6 leading-relaxed">
                      {activeProductData?.description}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button className="bg-white text-gray-900 hover:bg-gray-100 font-medium transition-all duration-300 hover:scale-105">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* Hover Effect Indicator */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-3 h-3 rounded-full bg-pink-500 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveProductStack;
