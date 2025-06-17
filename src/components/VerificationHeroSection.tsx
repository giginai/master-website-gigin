
import { Button } from "@/components/ui/button";
import { useState } from "react";
import LeadGenerationModal from "./LeadGenerationModal";

const VerificationHeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative pt-32 pb-8 min-h-[90vh] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/lovable-uploads/aabac661-4393-418d-847f-8d74a313e0b3.png)'
          }}
        />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10 flex items-center justify-center min-h-[80vh]">
          <div>
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
              <span className="text-white">✦</span>
              <span className="text-white font-medium mx-2">VerifyIn</span>
              <span className="text-white">✦</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Fast & Accurate - AI Driven<br />
              Background Verification
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Streamline background verification for HR teams—removing friction, reducing turnaround time, 
              and providing control, compliance, and peace of mind from start to finish.
            </p>
            
            <Button 
              onClick={() => setIsModalOpen(true)}
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 text-lg rounded-lg font-medium mb-8"
            >
              Get Started
            </Button>
            
            {/* Hero Dashboard Image with hover animation */}
            <div className="relative max-w-4xl mx-auto mb-8">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                <img 
                  src="/lovable-uploads/44f3826a-9ec1-4397-bcaf-340a68a507ee.png" 
                  alt="Verification Dashboard" 
                  className="w-full h-auto transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <LeadGenerationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default VerificationHeroSection;
