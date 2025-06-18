
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const InteractiveProductStack = () => {
  const [activeProduct, setActiveProduct] = useState("jobs");

  const products = [
    {
      id: "jobs",
      name: "Gigin Jobs",
      description: "AI-powered job marketplace connecting talent with opportunities",
      color: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop"
    },
    {
      id: "recruiter",
      name: "Gigin Recruiter",
      description: "Smart recruitment tools for faster hiring decisions",
      color: "bg-purple-500",
      hoverColor: "hover:bg-purple-600",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop"
    },
    {
      id: "verifyin",
      name: "Gigin VerifyIn",
      description: "AI-driven background verification platform",
      color: "bg-green-500",
      hoverColor: "hover:bg-green-600",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop"
    },
    {
      id: "skillfit",
      name: "Gigin SkillFit",
      description: "Skills assessment and matching technology",
      color: "bg-orange-500",
      hoverColor: "hover:bg-orange-600",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
    },
    {
      id: "ats",
      name: "Gigin ATS",
      description: "Comprehensive applicant tracking system",
      color: "bg-pink-500",
      hoverColor: "hover:bg-pink-600",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
    },
    {
      id: "waas",
      name: "Gigin Work-as-a-Service",
      description: "Flexible workforce solutions for modern businesses",
      color: "bg-teal-500",
      hoverColor: "hover:bg-teal-600",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop"
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

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Product Navigation - More compact design */}
          <div className="space-y-2">
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => setActiveProduct(product.id)}
                className={`w-full text-left p-3 md:p-4 rounded-xl transition-all duration-300 border ${
                  activeProduct === product.id
                    ? `${product.color} text-white border-transparent shadow-md scale-[1.02]`
                    : "bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:shadow-sm"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base md:text-lg font-semibold mb-1">{product.name}</h3>
                    <p className={`text-xs md:text-sm ${
                      activeProduct === product.id ? "text-white/90" : "text-gray-600"
                    }`}>
                      {product.description}
                    </p>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${
                    activeProduct === product.id ? "rotate-90" : ""
                  }`} />
                </div>
              </button>
            ))}
          </div>

          {/* Active Product Display - More compact */}
          <div className="relative">
            <div className={`rounded-2xl p-5 md:p-6 text-white ${activeProductData?.color} shadow-xl`}>
              <div className="mb-4 relative group overflow-hidden rounded-xl">
                <img 
                  src={activeProductData?.image}
                  alt={activeProductData?.name}
                  className="w-full h-40 md:h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button 
                    variant="outline" 
                    className="bg-white/90 border-white text-gray-900 hover:bg-white hover:border-white text-sm"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">{activeProductData?.name}</h3>
              <p className="text-sm md:text-base mb-3 md:mb-4 text-white/90">{activeProductData?.description}</p>
              <Button 
                variant="outline" 
                className="bg-white/20 border-white/30 text-white hover:bg-white/30 hover:border-white/50 text-sm"
              >
                Get Started
              </Button>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -top-3 -right-3 w-full h-full rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveProductStack;
