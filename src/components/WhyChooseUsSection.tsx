import { Card, CardContent } from "@/components/ui/card";
import { Zap, Clock, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
const whyVerifyinCards = [{
  title: "Instant Verification",
  description: "AI-driven batch detection with real-time processing",
  icon: Zap,
  gradient: "from-blue-500 to-purple-600"
}, {
  title: "AI + Human Expertise",
  description: "Advanced algorithms with human oversight for accuracy",
  icon: Award,
  gradient: "from-purple-500 to-pink-600"
}, {
  title: "Lightning Fast",
  description: "Comprehensive screening in record time",
  icon: Clock,
  gradient: "from-pink-500 to-red-600"
}];
const WhyChooseUsSection = () => {
  const {
    ref,
    isVisible
  } = useScrollAnimation();
  return <section ref={ref} className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What makes us stand out?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the next generation of background verification with AI-powered accuracy and lightning-fast results.
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {whyVerifyinCards.map((card, index) => <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${card.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <card.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-pink-600 transition-colors">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default WhyChooseUsSection;