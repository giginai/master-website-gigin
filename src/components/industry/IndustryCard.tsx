
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Industry {
  id: string;
  name: string;
  icon: React.ComponentType<{
    className?: string;
  }>;
  description: string;
  keyChecks: string[];
  link: string;
  useCases: string[];
  image: string;
}

interface IndustryCardProps {
  industry: Industry;
}

const IndustryCard = ({ industry }: IndustryCardProps) => {
  return (
    <div className="w-full pb-8">
      <div className="relative group">
        {/* Stacked Card Effect - Background Cards */}
        <div className="absolute inset-0 bg-white rounded-2xl shadow-lg transform translate-x-3 translate-y-3 opacity-20"></div>
        <div className="absolute inset-0 bg-white rounded-2xl shadow-lg transform translate-x-1.5 translate-y-1.5 opacity-40"></div>
        
        {/* Main Card */}
        <div className="relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 overflow-hidden border border-gray-200">
          <div className="flex flex-col md:flex-row h-[400px]">
            {/* Content Area - Left Side */}
            <div className="flex-1 p-8 flex flex-col justify-between py-[18px]">
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                    <industry.icon className="w-6 h-6 text-pink-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {industry.name}
                  </h3>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  {industry.description}
                </p>
              </div>

              {/* Use Cases & Key Checks */}
              <div className="space-y-4 mb-6">
                {/* Use Cases */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">Common Use Cases:</h4>
                  <div className="flex flex-wrap gap-2">
                    {industry.useCases.slice(0, 3).map((useCase, useCaseIndex) => (
                      <span key={useCaseIndex} className="text-xs text-gray-600 bg-gray-100 rounded-lg px-2 py-1">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Checks */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">Key Verification Checks:</h4>
                  <div className="grid grid-cols-1 gap-1">
                    {industry.keyChecks.slice(0, 3).map((check, checkIndex) => (
                      <div key={checkIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-pink-400 rounded-full mr-3 flex-shrink-0"></div>
                        {check}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* CTA - Changed to pink text */}
              <Link 
                to={industry.link} 
                className="inline-flex items-center text-pink-500 font-semibold text-lg hover:text-pink-600 transition-colors self-start group/cta"
              >
                <span>Explore More</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover/cta:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Image Area - Right Side */}
            <div className="flex-1 relative">
              <img 
                src={industry.image} 
                alt={industry.name} 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryCard;
