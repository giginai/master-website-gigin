
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Shield, CheckCircle, Users, FileCheck, Eye, Search, Building, Globe } from "lucide-react";

const verificationData = [
  {
    id: "identity",
    title: "Identity Checks & KYC",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
    content: "AI-powered ID verification ensures fast and accurate identity validation based on documents, removing the fraud alert identity validation. Automated risk assessment for large profiles of real identity theft."
  },
  {
    id: "criminal",
    title: "Criminal Record Checks",
    icon: FileCheck,
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop",
    content: "Reliable and international criminal record screening by AI scanning for court cases, legal disputes, and criminal sanctions. Compliance verification for high-security roles and industries."
  },
  {
    id: "employment",
    title: "Employment & Experience Verification",
    icon: Building,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
    content: "AI-powered employment history validation with multi-source database verification. Automated cross-checking of job roles, tenure, and salary analysis of fraud detection for resume inconsistencies and discrepancies."
  },
  {
    id: "education",
    title: "Education & Certification Verification",
    icon: CheckCircle,
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop",
    content: "Ensure confidence in candidate qualifications with fast verification processes. AI-assisted certificate authentication and degree validation. Fraud detection for fake stated academic credentials."
  },
  {
    id: "social",
    title: "Social Media & Digital Footprint Screening",
    icon: Search,
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
    content: "Automated behavioral screening for risk profile behavior analysis. Online quality control for potential compliance violations. Digital reputation analysis to ensure company brand safety."
  },
  {
    id: "financial",
    title: "Financial Background Verification",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
    content: "Comprehensive financial history checks including credit scores, bankruptcy records, and financial stability assessment for high-trust positions."
  },
  {
    id: "reference",
    title: "Reference & Character Verification",
    icon: Users,
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop",
    content: "AI-powered reference validation with automated contact verification and character assessment through multiple touchpoints and data sources."
  },
  {
    id: "address",
    title: "Address & Residence Verification",
    icon: Eye,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
    content: "Real-time address validation and residence history verification using multiple databases and AI-powered cross-referencing for accuracy."
  }
];

const VerificationCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIndex((current) => (current + 1) % verificationData.length);
          return 0;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleCardClick = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  const getCardStyle = (index: number) => {
    const diff = index - currentIndex;
    const totalCards = verificationData.length;
    
    // Normalize the difference to handle wrapping
    const normalizedDiff = diff > totalCards / 2 ? diff - totalCards : diff < -totalCards / 2 ? diff + totalCards : diff;
    
    if (normalizedDiff === 0) {
      return {
        transform: 'scale(1) translateX(0px) translateZ(0px)',
        zIndex: 10,
        opacity: 1,
      };
    } else if (Math.abs(normalizedDiff) === 1) {
      return {
        transform: `scale(0.8) translateX(${normalizedDiff * 320}px) translateZ(-100px)`,
        zIndex: 5,
        opacity: 0.7,
      };
    } else if (Math.abs(normalizedDiff) === 2) {
      return {
        transform: `scale(0.6) translateX(${normalizedDiff * 480}px) translateZ(-200px)`,
        zIndex: 2,
        opacity: 0.4,
      };
    } else {
      return {
        transform: `scale(0.4) translateX(${normalizedDiff * 600}px) translateZ(-300px)`,
        zIndex: 1,
        opacity: 0.2,
      };
    }
  };

  const currentCard = verificationData[currentIndex];

  return (
    <div className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tailored Background Verification Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive verification services powered by AI for faster, more accurate results
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative h-[500px] mb-8" style={{ perspective: '1000px' }}>
          <div className="absolute inset-0 flex items-center justify-center">
            {verificationData.map((card, index) => {
              const Icon = card.icon;
              return (
                <Card
                  key={card.id}
                  className={`absolute w-80 h-96 cursor-pointer transition-all duration-700 ease-in-out border-0 shadow-2xl ${
                    index === currentIndex ? 'shadow-pink-200/50' : 'shadow-gray-200/50'
                  }`}
                  style={getCardStyle(index)}
                  onClick={() => handleCardClick(index)}
                >
                  <CardContent className="p-0 h-full">
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      <img 
                        src={card.image} 
                        alt={card.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                        <div className="p-2 rounded-full bg-white/20 backdrop-blur-sm">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                        {card.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-4">
                        {card.content}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">
              {currentIndex + 1} of {verificationData.length}
            </span>
            <span className="text-sm text-gray-500">
              {currentCard.title}
            </span>
          </div>
          <Progress value={progress} className="h-2 bg-gray-200">
            <div className="h-full bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-100"></div>
          </Progress>
        </div>

        {/* Card Indicators */}
        <div className="flex justify-center space-x-2">
          {verificationData.map((_, index) => (
            <button
              key={index}
              onClick={() => handleCardClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-pink-500 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerificationCarousel;
