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
  return;
};
export default WhyChooseUsSection;