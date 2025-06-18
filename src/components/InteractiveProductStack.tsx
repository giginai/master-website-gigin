
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
      hoverColor: "hover:bg-blue-600"
    },
    {
      id: "recruiter",
      name: "Gigin Recruiter",
      description: "Smart recruitment tools for faster hiring decisions",
      color: "bg-purple-500",
      hoverColor: "hover:bg-purple-600"
    },
    {
      id: "verifyin",
      name: "Gigin VerifyIn",
      description: "AI-driven background verification platform",
      color: "bg-green-500",
      hoverColor: "hover:bg-green-600"
    },
    {
      id: "skillfit",
      name: "Gigin SkillFit",
      description: "Skills assessment and matching technology",
      color: "bg-orange-500",
      hoverColor: "hover:bg-orange-600"
    },
    {
      id: "ats",
      name: "Gigin ATS",
      description: "Comprehensive applicant tracking system",
      color: "bg-pink-500",
      hoverColor: "hover:bg-pink-600"
    },
    {
      id: "waas",
      name: "Gigin Work-as-a-Service",
      description: "Flexible workforce solutions for modern businesses",
      color: "bg-teal-500",
      hoverColor: "hover:bg-teal-600"
    }
  ];

  const activeProductData = products.find(p => p.id === activeProduct);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Complete Product Stack
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to hire right, powered by AI
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Product Navigation */}
          <div className="space-y-4">
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => setActiveProduct(product.id)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 border-2 ${
                  activeProduct === product.id
                    ? `${product.color} text-white border-transparent shadow-lg scale-105`
                    : "bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:shadow-md"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <p className={`text-sm ${
                      activeProduct === product.id ? "text-white/90" : "text-gray-600"
                    }`}>
                      {product.description}
                    </p>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${
                    activeProduct === product.id ? "rotate-90" : ""
                  }`} />
                </div>
              </button>
            ))}
          </div>

          {/* Active Product Display */}
          <div className="relative">
            <div className={`rounded-3xl p-8 text-white ${activeProductData?.color} shadow-2xl`}>
              <h3 className="text-3xl font-bold mb-4">{activeProductData?.name}</h3>
              <p className="text-lg mb-6 text-white/90">{activeProductData?.description}</p>
              <Button 
                variant="outline" 
                className="bg-white/20 border-white/30 text-white hover:bg-white/30 hover:border-white/50"
              >
                Learn More
              </Button>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-full h-full rounded-3xl bg-gradient-to-br from-gray-200 to-gray-300 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveProductStack;
