
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative z-10 px-6 pt-32 pb-12 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
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
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed">
            Empower your HR teams with speed, quality and human-centric<br />
            intelligence that accelerates sourcing, simplifies hiring, and ensures trust<br />
            through verification—all in one place
          </p>

          {/* CTA Button with glow effect */}
          <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 text-lg rounded-lg font-medium mb-8 shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transition-all duration-300">
            Hire Verified Talent Now
          </Button>
        </div>

        {/* Hero Image */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="/lovable-uploads/56a40185-261b-4872-a09a-a76c5af61583.png" 
              alt="Gigin Dashboard Interface" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
