
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Clock, Award } from "lucide-react";

const whyVerifyinCards = [
  {
    title: "Expert Verification Requests",
    description: "Instant Verification with AI-driven Batch Detection and Full Risk Assessment with Live Tracking",
    icon: Zap,
    gradient: "from-blue-500 to-purple-600"
  },
  {
    title: "AI Precision Meets Human Expertise",
    description: "Advanced Logistic & AI-driven processes combined with human oversight for maximum accuracy",
    icon: Award,
    gradient: "from-purple-500 to-pink-600"
  },
  {
    title: "Lightning Fast Processing",
    description: "Comprehensive screening services with identity, criminal, employment, and education verification in record time",
    icon: Clock,
    gradient: "from-pink-500 to-red-600"
  }
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why choose us?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the perfect blend of AI precision and human expertise
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {whyVerifyinCards.map((card, index) => (
            <Card key={index} className="group hover:scale-105 transition-all duration-300 border-0 overflow-hidden glass-morphism backdrop-blur-xl bg-white/10 hover:bg-white/20">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${card.gradient} mb-4`}>
                    <card.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
