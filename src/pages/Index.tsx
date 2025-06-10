
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoCarousel from "@/components/LogoCarousel";
import FeaturesSection from "@/components/FeaturesSection";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/lovable-uploads/b4b1c883-f32c-4d6f-8b13-b57cf11be4e2.png)'
        }}
      >
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Additional subtle animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle glowing lines */}
        <div className="absolute top-1/4 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-blue-400/10 to-transparent animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-px h-24 bg-gradient-to-b from-transparent via-purple-400/8 to-transparent animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/2 w-px h-28 bg-gradient-to-b from-transparent via-pink-400/10 to-transparent animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 right-1/4 w-px h-20 bg-gradient-to-b from-transparent via-blue-300/8 to-transparent animate-pulse delay-500"></div>
        <div className="absolute bottom-1/4 left-1/3 w-px h-36 bg-gradient-to-b from-transparent via-purple-300/10 to-transparent animate-pulse delay-1500"></div>
      </div>

      <Header />
      <Hero />
      
      {/* Logo Carousel */}
      <div className="relative z-10">
        <LogoCarousel />
      </div>
      
      {/* Features Section with white background */}
      <div className="relative z-10">
        <FeaturesSection />
      </div>
    </div>
  );
};

export default Index;
