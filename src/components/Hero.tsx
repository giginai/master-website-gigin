
import { Button } from "@/components/ui/button";
import DashboardMockup from "./DashboardMockup";

const Hero = () => {
  return (
    <div className="relative z-10 px-6 pt-16 pb-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Gigin Badge */}
        <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
          <span className="text-black">✦</span>
          <span className="text-black font-medium mx-2">Gigin</span>
          <span className="text-black">✦</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Unified AI-Powered Solution To<br />
          Source, Hire, & Verify Talent
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
          Empower your HR teams with speed, quality and human-centric<br />
          intelligence that accelerates sourcing, simplifies hiring, and ensures trust<br />
          through verification—all in one place
        </p>

        {/* CTA Button */}
        <Button className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg rounded-lg font-medium mb-16">
          Hire Verified Talent Now
        </Button>

        {/* Dashboard Mockup */}
        <DashboardMockup />
      </div>
    </div>
  );
};

export default Hero;
