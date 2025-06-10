
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative z-10 px-6 pt-32 pb-12 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto">
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
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed">
            Empower your HR teams with speed, quality and human-centric<br />
            intelligence that accelerates sourcing, simplifies hiring, and ensures trust<br />
            through verification—all in one place
          </p>

          {/* CTA Button with glow effect */}
          <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 text-lg rounded-lg font-medium mb-6 shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transition-all duration-300">
            Hire Verified Talent Now
          </Button>
        </div>

        {/* Hero Image - Seamless with hover animations */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative group cursor-pointer">
            <div className="relative h-96 md:h-[450px] lg:h-[500px] overflow-hidden rounded-3xl">
              <img 
                src="/lovable-uploads/56a40185-261b-4872-a09a-a76c5af61583.png" 
                alt="Gigin Dashboard Interface" 
                className="w-full h-full object-cover object-top transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-110"
              />
              {/* Glow overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out"></div>
              {/* Enhanced glow border effect */}
              <div className="absolute inset-0 rounded-3xl ring-0 group-hover:ring-2 group-hover:ring-pink-400/50 group-hover:shadow-[0_0_40px_rgba(236,72,153,0.4)] transition-all duration-700 ease-out"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
