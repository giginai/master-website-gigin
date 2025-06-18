
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const CTASection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation(0.3);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: 'url(/lovable-uploads/11434d01-2732-42ae-8655-0fefec0ffe3f.png)'
      }}></div>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div 
          ref={titleRef}
          className={`text-center mb-12 transition-all duration-700 ${
            titleVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Revolutionise Your HR?</h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto mb-8">
            One platform to source, hire, and verify with ease.
          </p>
          <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 text-lg rounded-lg font-medium shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transition-all duration-300">
            Get Started Now
          </Button>
        </div>

        {/* New Dashboard Image */}
        <div 
          ref={imageRef}
          className={`relative max-w-6xl mx-auto transition-all duration-700 delay-300 ${
            imageVisible ? 'animate-fade-in animate-scale-in' : 'opacity-0 translate-y-8 scale-95'
          }`}
        >
          <div className="flex justify-center">
            <div className="relative">
              <img src="/lovable-uploads/c9bccb68-f552-4043-b277-c5dc203fa088.png" alt="New Dashboard Interface" className="w-full max-w-5xl h-auto object-contain rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
