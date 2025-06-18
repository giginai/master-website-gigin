import { Card, CardContent } from "@/components/ui/card";
import { Zap, Clock, Award, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
const whyVerifyinCards = [{
  title: "Expert Verification Requests",
  description: "Instant Verification with AI-driven Batch Detection and Full Risk Assessment with Live Tracking",
  icon: Zap,
  gradient: "from-blue-500 to-purple-600"
}, {
  title: "AI Precision Meets Human Expertise",
  description: "Advanced Logistic & AI-driven processes combined with human oversight for maximum accuracy",
  icon: Award,
  gradient: "from-purple-500 to-pink-600"
}, {
  title: "Lightning Fast Processing",
  description: "Comprehensive screening services with identity, criminal, employment, and education verification in record time",
  icon: Clock,
  gradient: "from-pink-500 to-red-600"
}];
const WhyChooseUsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % whyVerifyinCards.length);
  };
  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + whyVerifyinCards.length) % whyVerifyinCards.length);
  };
  return;
};
export default WhyChooseUsSection;