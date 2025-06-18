
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Clock, Award, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

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
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % whyVerifyinCards.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + whyVerifyinCards.length) % whyVerifyinCards.length);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why choose VerifyIn?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the perfect blend of AI precision and human expertise
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {whyVerifyinCards.map((card, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="group hover:scale-105 transition-all duration-300 border-0 shadow-lg hover:shadow-xl bg-white max-w-md mx-auto h-80">
                    <CardContent className="p-8 h-full flex flex-col justify-center">
                      <div className="text-center">
                        <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${card.gradient} mb-6 w-16 h-16 items-center justify-center`}>
                          <card.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                          {card.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 group z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-pink-600" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 group z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-pink-600" />
          </button>

          {/* Carousel Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {whyVerifyinCards.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-pink-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
