
import Header from "@/components/Header";
import VerificationHeroSection from "@/components/VerificationHeroSection";
import VerificationCarousel from "@/components/VerificationCarousel";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import VerificationCTASection from "@/components/VerificationCTASection";

const Verification = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage="verification" />
      <VerificationHeroSection />
      <VerificationCarousel />
      <WhyChooseUsSection />
      <VerificationCTASection />
    </div>
  );
};

export default Verification;
