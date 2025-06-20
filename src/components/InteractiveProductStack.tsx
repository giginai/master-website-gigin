import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const InteractiveProductStack = () => {
  const [activeProduct, setActiveProduct] = useState("jobs");
  const [isImageVisible, setIsImageVisible] = useState(true);

  const handleProductChange = (productId: string) => {
    if (productId !== activeProduct) {
      setIsImageVisible(false);
      setTimeout(() => {
        setActiveProduct(productId);
        setIsImageVisible(true);
      }, 300);
    }
  };

  const products = [{
    id: "jobs",
    name: "Gigin Jobs",
    color: "bg-pink-500",
    image: "/lovable-uploads/706670bc-10c9-4512-9601-19e853973778.png",
    description: "Smart job matching platform connecting talent with opportunities through AI-powered recommendations and seamless application processes."
  }, {
    id: "recruiter",
    name: "Gigin Recruiter",
    color: "bg-pink-500",
    image: "/lovable-uploads/4c0628fc-95da-40e4-8fa2-4360b37b7aa7.png",
    description: "Advanced recruitment tools for efficient talent acquisition and candidate management."
  }, {
    id: "verifyin",
    name: "Gigin VerifyIn",
    color: "bg-pink-500",
    image: "/lovable-uploads/9952fca3-e010-4a73-886c-3236a423a930.png",
    description: "AI-powered background verification system providing comprehensive screening with real-time reporting and adverse case management."
  }, {
    id: "skillfit",
    name: "Gigin SkillFit",
    color: "bg-pink-500",
    image: "/lovable-uploads/282d10e0-e49e-4fd3-b4fc-d3447cb38526.png",
    description: "Intelligent skill assessment and matching platform for accurate talent evaluation."
  }, {
    id: "ats",
    name: "Gigin ATS",
    color: "bg-pink-500",
    image: "/lovable-uploads/9f9e9d29-ddb9-4893-84a7-11f97ba68802.png",
    description: "Complete applicant tracking system with candidate pipeline management, interview scheduling, and hiring analytics dashboard."
  }, {
    id: "waas",
    name: "Gigin Work-as-a-Service",
    color: "bg-pink-500",
    image: "/lovable-uploads/2172be88-31b6-4d91-ba38-e327b73f715c.png",
    description: "Flexible workforce solutions for on-demand talent and project-based hiring."
  }];

  const activeProductData = products.find(p => p.id === activeProduct);

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-[48px]">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            Your Complete Talent Ecosystem
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Fragmented systems and manual tasks are a thing of the past. Gigin AI brings all your critical HR functions into one unified platform
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Product Navigation Tabs */}
          <div className="lg:w-1/3">
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
              {products.map(product => (
                <button
                  key={product.id}
                  onClick={() => handleProductChange(product.id)}
                  className={`relative p-4 rounded-lg transition-all duration-300 text-left transform ${
                    activeProduct === product.id
                      ? "bg-pink-500 text-white shadow-lg scale-105"
                      : "bg-white text-gray-700 border border-gray-200 hover:border-pink-300 hover:shadow-md hover:text-pink-600 hover:scale-102"
                  }`}
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
              <div className={`relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-700 ease-out transform ${
                isImageVisible 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-12 scale-95'
              }`}>
                <img
                  src={activeProductData?.image}
                  alt={activeProductData?.name}
                  className="w-full h-64 md:h-80 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Enhanced Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 py-[32px]">
                  {/* Text Background for Better Visibility */}
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
