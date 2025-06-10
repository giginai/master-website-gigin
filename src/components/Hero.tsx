
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative z-10 px-6 pt-32 pb-20 min-h-screen flex items-center">
      {/* Black blur overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-6">
          {/* Gigin Badge */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <span className="text-white">✦</span>
            <span className="text-white font-medium mx-2">Gigin</span>
            <span className="text-white">✦</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-5xl mx-auto">
            Unified AI-Powered Solution To<br />
            Source, Hire, & Verify Talent
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Empower your HR teams with speed, quality and human-centric<br />
            intelligence that accelerates sourcing, simplifies hiring, and ensures trust<br />
            through verification—all in one place
          </p>

          {/* CTA Button */}
          <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 text-lg rounded-lg font-medium mb-6 shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transition-all duration-300">
            Hire Verified Talent Now
          </Button>
        </div>

        {/* Hero Image - Without glow effects */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative">
            <div className="relative h-96 md:h-[450px] lg:h-[500px] overflow-hidden rounded-3xl">
              <img 
                src="/lovable-uploads/56a40185-261b-4872-a09a-a76c5af61583.png" 
                alt="Gigin Dashboard Interface" 
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
