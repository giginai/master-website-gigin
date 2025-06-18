
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative z-10 px-6 pt-32 pb-0 min-h-screen flex items-center">
      {/* Hero-specific background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/lovable-uploads/ddbca1bb-1fff-417e-a440-abace6d35099.png)'
        }}
      ></div>
      
      {/* Black blur overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-6">
          {/* Updated Badge */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <span className="text-white">✦</span>
            <span className="text-white font-medium mx-2">All-in-one Platform</span>
            <span className="text-white">✦</span>
          </div>

          {/* Updated Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-5xl mx-auto">
            Source. Hire. Verify.
          </h1>

          {/* Updated Subheading */}
          <p className="text-lg md:text-xl text-white/90 mb-6 max-w-4xl mx-auto leading-relaxed">
            One AI-powered platform to do it all—fast and reliably.
          </p>

          {/* NASSCOM and ISO Logos - Made smaller */}
          <div className="flex justify-center items-center gap-8 mb-8">
            <img 
              src="/lovable-uploads/f600c2f8-99c8-4304-a86f-bc99201989a0.png" 
              alt="NASSCOM Logo" 
              className="h-8 w-auto opacity-90"
            />
            <img 
              src="/lovable-uploads/c6532bb5-904a-458a-a19a-a0d30d3221c9.png" 
              alt="ISO Certification" 
              className="h-8 w-auto opacity-90"
            />
          </div>

          {/* Updated CTA Button */}
          <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 text-lg rounded-lg font-medium mb-6 shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transition-all duration-300">
            Get Started Now
          </Button>
        </div>

        {/* Hero Image - Using new dashboard image */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-t-3xl group h-64 md:h-80 lg:h-96">
            <img 
              src="/lovable-uploads/c9bccb68-f552-4043-b277-c5dc203fa088.png" 
              alt="Gigin Dashboard Interface" 
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              style={{ objectPosition: 'center top' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
