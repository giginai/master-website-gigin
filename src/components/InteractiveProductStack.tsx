
import { useState } from "react";
import { Button } from "@/components/ui/button";

const InteractiveProductStack = () => {
  const [activeProduct, setActiveProduct] = useState("jobs");

  const products = [
    {
      id: "jobs",
      name: "Gigin Jobs",
      color: "bg-blue-500",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop"
    },
    {
      id: "recruiter",
      name: "Gigin Recruiter",
      color: "bg-purple-500",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop"
    },
    {
      id: "verifyin",
      name: "Gigin VerifyIn",
      color: "bg-green-500",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop"
    },
    {
      id: "skillfit",
      name: "Gigin SkillFit",
      color: "bg-orange-500",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
    },
    {
      id: "ats",
      name: "Gigin ATS",
      color: "bg-pink-500",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
    },
    {
      id: "waas",
      name: "Gigin Work-as-a-Service",
      color: "bg-teal-500",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop"
    }
  ];

  const activeProductData = products.find(p => p.id === activeProduct);

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
            Built to Hire Right. Built for You.
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Our complete product stack uses AI to simplify hiring from start to finish.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Product Navigation Tabs */}
          <div className="lg:w-1/3">
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
              {products.map((product) => (
                <button
                  key={product.id}
                  onClick={() => setActiveProduct(product.id)}
                  className={`relative p-4 rounded-lg transition-all duration-300 text-left ${
                    activeProduct === product.id
                      ? `${product.color} text-white shadow-lg transform scale-105`
                      : "bg-white text-gray-700 border border-gray-200 hover:border-gray-300 hover:shadow-md"
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
          <div className="lg:w-2/3">
            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src={activeProductData?.image}
                  alt={activeProductData?.name}
                  className="w-full h-64 md:h-80 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4">
                    {activeProductData?.name}
                  </h3>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      className="bg-white text-gray-900 hover:bg-gray-100 font-medium"
                    >
                      Learn More
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-white text-white hover:bg-white hover:text-gray-900 font-medium"
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
                
                {/* Hover Effect Indicator */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`w-3 h-3 rounded-full ${activeProductData?.color} animate-pulse`}></div>
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
