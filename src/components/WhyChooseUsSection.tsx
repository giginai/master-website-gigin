
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Clock, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const whyVerifyinCards = [
  {
    title: "Instant Verification",
    description: "AI-driven batch detection with real-time processing",
    icon: Zap,
    gradient: "from-blue-500 to-purple-600"
  },
  {
    title: "AI + Human Expertise", 
    description: "Advanced algorithms with human oversight for accuracy",
    icon: Award,
    gradient: "from-purple-500 to-pink-600"
  },
  {
    title: "Lightning Fast",
    description: "Comprehensive screening in record time",
    icon: Clock,
    gradient: "from-pink-500 to-red-600"
  }
];

const WhyChooseUsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className={`py-20 bg-gradient-to-br from-gray-50 to-white transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose VerifyIn?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Next-generation verification powered by AI
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {whyVerifyinCards.map((card, index) => (
            <Card key={index} className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border-0 group hover:-translate-y-3 overflow-hidden">
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div className={`w-24 h-24 bg-gradient-to-br ${card.gradient} rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <card.icon className="w-12 h-12 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-pink-600 transition-colors">
                  {card.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed flex-grow text-lg">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
