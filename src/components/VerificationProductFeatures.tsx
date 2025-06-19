
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Search, FileCheck, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  {
    title: "Identity Verification",
    description: "Instant document validation with AI-powered fraud detection",
    icon: Shield,
    image: "/lovable-uploads/34dbba9e-aa01-4445-8f77-636e94470acb.png"
  },
  {
    title: "Smart Screening", 
    description: "Automated background checks with comprehensive reporting",
    icon: Search,
    image: "/lovable-uploads/02c228f4-c84a-4d4e-9381-f72a54f72bb8.png"
  },
  {
    title: "Document Verification",
    description: "Real-time validation of certificates and credentials",
    icon: FileCheck,
    image: "/lovable-uploads/dcea3cf5-e387-4d07-9397-b7d7870c08cb.png"
  },
  {
    title: "Candidate Management",
    description: "Streamlined workflow for bulk verification processes",
    icon: Users,
    image: "/lovable-uploads/9441c202-33f5-42c1-a3fc-9468ce0635b2.png"
  }
];

const VerificationProductFeatures = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className={`py-20 bg-white transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete verification suite designed for modern HR teams
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2 overflow-hidden">
              <CardContent className="p-6">
                <div className="mb-6 relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-20 h-20 rounded-xl overflow-hidden opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VerificationProductFeatures;
