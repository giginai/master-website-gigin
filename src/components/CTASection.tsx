
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/lovable-uploads/f0acdf04-0015-4664-af62-d43a84908fcd.png)'
        }}
      ></div>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready To Hire Smarter?
          </h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto mb-8">
            Sign up today and streamline your hiring with AI-powered sourcing, smart matching, and seamless verification—all in one platform.
          </p>
          <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 text-lg rounded-lg font-medium shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transition-all duration-300">
            Sign Up
          </Button>
        </div>

        {/* App Mockup */}
        <div className="relative max-w-6xl mx-auto">
          <div className="flex justify-center items-end space-x-8">
            {/* Mobile mockup */}
            <div className="relative">
              <div className="w-64 h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                  <img 
                    src="/lovable-uploads/d3b7e973-7b38-4327-a321-970ea9af74fa.png"
                    alt="Mobile App Interface"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Desktop mockup */}
            <div className="relative">
              <div className="w-96 h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-3 shadow-2xl">
                <div className="w-full h-full bg-white rounded-xl overflow-hidden">
                  <img 
                    src="/lovable-uploads/d8e99f47-c4db-469d-96ee-4f111c32f5fe.png"
                    alt="Desktop App Interface"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Tablet mockup */}
            <div className="relative">
              <div className="w-72 h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                  <img 
                    src="/lovable-uploads/e05ceff6-fc47-4e20-a343-00fa60c3f2ac.png"
                    alt="Tablet App Interface"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
