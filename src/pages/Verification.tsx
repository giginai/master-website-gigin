
import Header from "@/components/Header";
import VerificationHeroSection from "@/components/VerificationHeroSection";
import VerificationProductFeatures from "@/components/VerificationProductFeatures";
import VerificationUSPSection from "@/components/VerificationUSPSection";
import VerificationCarousel from "@/components/VerificationCarousel";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import VerificationCTASection from "@/components/VerificationCTASection";
import Footer from "@/components/Footer";

const Verification = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage="verification" />
      <VerificationHeroSection />
      <VerificationProductFeatures />
      <VerificationUSPSection />
      <VerificationCarousel />
      <WhyChooseUsSection />
      <VerificationCTASection />
      <Footer />
    </div>
  );
};

export default Verification;
