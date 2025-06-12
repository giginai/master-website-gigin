
import { Button } from "@/components/ui/button";

const VerificationCTASection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/lovable-uploads/aabac661-4393-418d-847f-8d74a313e0b3.png)'
        }}
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Book A Demo For Background<br />
          Verification
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
          Comprehensive Screening Services - Identity, criminal, employment,<br />
          education, social media, and digital footprint verification.
        </p>
        <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 text-lg rounded-lg font-medium mb-12">
          Talk to Sales
        </Button>
        
        {/* CTA Dashboard Image */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <img 
              src="/lovable-uploads/44f3826a-9ec1-4397-bcaf-340a68a507ee.png" 
              alt="Verification Dashboard Interface" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerificationCTASection;
