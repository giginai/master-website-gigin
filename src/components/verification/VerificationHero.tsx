
import { Button } from "@/components/ui/button";

interface VerificationHeroProps {
  title: string;
  heroSubtitle: string;
  heroImage: string;
  icon: React.ComponentType<{ className?: string }>;
  onGetStarted: () => void;
}

const VerificationHero = ({
  title,
  heroSubtitle,
  heroImage,
  icon: Icon,
  onGetStarted
}: VerificationHeroProps) => {
  return (
    <section className="relative pt-32 pb-20 min-h-[85vh] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/50"></div>
      
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10 flex items-center justify-center min-h-[65vh]">
        <div className="max-w-4xl">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 mb-8 border border-white/20">
            <Icon className="w-6 h-6 text-white mr-3" />
            <span className="text-white font-semibold text-lg">{title}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            {title}
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-4xl mx-auto leading-relaxed">
            {heroSubtitle}
          </p>
          
          <Button 
            onClick={onGetStarted}
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-10 py-6 text-xl rounded-xl font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VerificationHero;
