
import Header from "@/components/Header";
import Hero from "@/components/Hero";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden">
      {/* Animated background lines */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle glowing lines */}
        <div className="absolute top-1/4 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-blue-400/20 to-transparent animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-px h-24 bg-gradient-to-b from-transparent via-purple-400/15 to-transparent animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/2 w-px h-28 bg-gradient-to-b from-transparent via-pink-400/20 to-transparent animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 right-1/4 w-px h-20 bg-gradient-to-b from-transparent via-blue-300/15 to-transparent animate-pulse delay-500"></div>
        <div className="absolute bottom-1/4 left-1/3 w-px h-36 bg-gradient-to-b from-transparent via-purple-300/20 to-transparent animate-pulse delay-1500"></div>
        
        {/* Horizontal glowing lines */}
        <div className="absolute top-1/3 left-1/4 h-px w-24 bg-gradient-to-r from-transparent via-blue-400/15 to-transparent animate-pulse delay-3000"></div>
        <div className="absolute bottom-1/2 right-1/3 h-px w-32 bg-gradient-to-r from-transparent via-pink-400/20 to-transparent animate-pulse delay-4000"></div>
        <div className="absolute top-2/3 left-1/2 h-px w-20 bg-gradient-to-r from-transparent via-purple-400/15 to-transparent animate-pulse delay-2500"></div>
      </div>

      {/* Shining ray effect behind hero */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute w-96 h-96 bg-gradient-radial from-blue-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute w-[600px] h-[600px] bg-gradient-radial from-pink-500/8 via-blue-500/4 to-transparent rounded-full blur-3xl"></div>
      </div>

      <Header />
      <Hero />
    </div>
  );
};

export default Index;
