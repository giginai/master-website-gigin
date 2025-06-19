
import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";

const InteractiveProductStack = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [progress, setProgress] = useState(0);

  const cards = [
    {
      id: "ats",
      title: "ATS (Applicant Tracking System)",
      subtitle: "Smart Hiring Platform",
      description: "Streamline your entire hiring process with our intelligent ATS. Track candidates, manage pipelines, and make data-driven hiring decisions.",
      image: "/lovable-uploads/d76849a1-064a-4fa3-aec2-50cf0ab617bc.png",
      imageDescription: "Comprehensive ATS dashboard showing candidate pipeline, interview scheduling, and hiring analytics in a unified interface."
    },
    {
      id: "bgv",
      title: "BGV (Background Verification)",
      subtitle: "Instant Verification",
      description: "Verify candidates instantly with our comprehensive background check system. Ensure compliance and build trust in your hiring process.",
      image: "/lovable-uploads/d76849a1-064a-4fa3-aec2-50cf0ab617bc.png",
      imageDescription: "Advanced BGV system displaying real-time verification results, document validation, and compliance reporting features."
    },
    {
      id: "ai-insights",
      title: "AI-Powered Insights",
      subtitle: "Smart Analytics",
      description: "Leverage artificial intelligence to get deeper insights into your hiring patterns and make more informed decisions.",
      image: "/lovable-uploads/d76849a1-064a-4fa3-aec2-50cf0ab617bc.png",
      imageDescription: "AI analytics dashboard with predictive hiring insights, candidate scoring algorithms, and performance metrics visualization."
    }
  ];

  // Auto-rotate cards every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveCard((current) => (current + 1) % cards.length);
          return 0;
        }
        return prev + 2; // Increment by 2% every 100ms to reach 100% in 5 seconds
      });
    }, 100);

    return () => clearInterval(interval);
  }, [cards.length]);

  // Reset progress when manually changing cards
  const handleCardChange = (index: number) => {
    setActiveCard(index);
    setProgress(0);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="mb-4">
            <div className="inline-flex items-center bg-blue-100 text-blue-700 border border-blue-200 rounded-full px-4 py-2">
              <span>✦</span>
              <span className="font-medium mx-2">Complete Ecosystem</span>
              <span>✦</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Complete Talent Ecosystem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our integrated platform transforms your hiring process from start to finish
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Card tabs with progress bars */}
          <div className="space-y-6">
            {cards.map((card, index) => (
              <div
                key={card.id}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border-2 ${
                  activeCard === index
                    ? 'bg-white border-blue-500 shadow-lg'
                    : 'bg-white/50 border-gray-200 hover:border-blue-300'
                }`}
                onClick={() => handleCardChange(index)}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{card.title}</h3>
                  <span className="text-sm text-blue-600 font-medium">{card.subtitle}</span>
                </div>
                <p className="text-gray-600 mb-4">{card.description}</p>
                
                {/* Progress bar - only show for active card */}
                {activeCard === index && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Progress</span>
                      <span>{Math.round(progress)}%</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right side - Active card image with description */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white">
              <img
                src={cards[activeCard].image}
                alt={cards[activeCard].title}
                className="w-full h-auto object-contain transition-all duration-500"
              />
              
              {/* Image description overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white text-sm leading-relaxed">
                  {cards[activeCard].imageDescription}
                </p>
              </div>
            </div>

            {/* Card indicator dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {cards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleCardChange(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeCard === index ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveProductStack;
