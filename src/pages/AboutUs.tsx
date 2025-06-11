
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const AboutUs = () => {
  const [activeValueTab, setActiveValueTab] = useState("excellence");

  const coreValues = [
    {
      id: "excellence",
      title: "Customer-Driven Excellence",
      description: "We prioritize solving real hiring challenges with AI-driven efficiency. Every decision is guided by innovation, customer needs, and measurable results."
    },
    {
      id: "teams",
      title: "Strong Teams, Stronger Outcomes", 
      description: "Collaboration, leadership, and data-driven insights power our hiring ecosystem. We build accountable teams that drive impact at scale."
    },
    {
      id: "trust",
      title: "Trust, Growth & Impact",
      description: "Transparency and integrity define how we work with businesses and job seekers. Trust and continuous learning fuel long-term success."
    }
  ];

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

      <Header currentPage="about-us" />
      
      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-0">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center bg-black/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-gray-300">
            <span className="text-gray-300">✦</span>
            <span className="text-white font-medium mx-2">About Us</span>
            <span className="text-gray-300">✦</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
            On A Mission To Better<br />
            Billion Lives
          </h1>
        </div>
        
        {/* Team Image - Full width, no gaps */}
        <div className="w-full">
          <img 
            src="/lovable-uploads/87b15fdb-bc3f-4754-a553-2f3e9cf9b7fe.png"
            alt="Gigin Team - Diverse professionals representing our mission"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Mission, Vision, Goals Section */}
      <section className="relative z-10 py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Our Mission */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                We are on a mission to make a billion lives better and be the world's best workforce-centric platform.
              </p>
            </div>

            {/* Our Vision */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To help the multi-collar workforce and businesses all across the world to realize the true potential of Informal Economy.
              </p>
            </div>

            {/* Our Goals */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Goals</h3>
              <p className="text-gray-600 leading-relaxed">
                Empowering the multi-collar workforce with AI-driven technology, bridging employment gaps, and transforming hiring with seamless, efficient, and trusted opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Leaders Section */}
      <section className="relative z-10 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-black text-gray-300 px-6 py-3 rounded-full text-sm font-medium mb-6 border border-gray-400">
              ✦ Team members ✦
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Meet Our<br />
              Leaders
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Leader 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <div className="w-24 h-24 bg-gray-300 rounded-full"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-bold text-gray-900 text-lg mb-1">Surinder Bhagat</h3>
                <p className="text-gray-600 text-sm">Founder & CEO</p>
              </div>
            </div>

            {/* Leader 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-square bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                <div className="w-24 h-24 bg-gray-300 rounded-full"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-bold text-gray-900 text-lg mb-1">Mahesh Kumar</h3>
                <p className="text-gray-600 text-sm">Co-Founder & CTO</p>
              </div>
            </div>

            {/* Leader 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                <div className="w-24 h-24 bg-gray-300 rounded-full"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-bold text-gray-900 text-lg mb-1">Majed Al Tassan</h3>
                <p className="text-gray-600 text-sm">Co-Founder and Corp Dev</p>
              </div>
            </div>

            {/* Leader 4 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-square bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center">
                <div className="w-24 h-24 bg-gray-300 rounded-full"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-bold text-gray-900 text-lg mb-1">Gursharan Singh Saggu</h3>
                <p className="text-gray-600 text-sm">Co-Founder and CRO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="relative z-10 py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-black text-gray-300 px-6 py-3 rounded-full text-sm font-medium mb-6 border border-gray-400">
              ✦ Goals ✦
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Gigin's Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              At Gigin, our values shape how we build technology, serve businesses, and empower job seekers daily. We are committed to creating a seamless hiring ecosystem that drives efficiency, fosters trust and delivers real impact.
            </p>
          </div>

          <Tabs value={activeValueTab} onValueChange={setActiveValueTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-gray-100 p-1 rounded-xl mb-12 h-auto">
              <TabsTrigger 
                value="excellence" 
                className="rounded-lg py-4 px-6 text-base font-medium data-[state=active]:bg-white data-[state=active]:shadow-md transition-all duration-300 m-1"
              >
                Customer Excellence
              </TabsTrigger>
              <TabsTrigger 
                value="teams" 
                className="rounded-lg py-4 px-6 text-base font-medium data-[state=active]:bg-white data-[state=active]:shadow-md transition-all duration-300 m-1"
              >
                Strong Teams
              </TabsTrigger>
              <TabsTrigger 
                value="trust" 
                className="rounded-lg py-4 px-6 text-base font-medium data-[state=active]:bg-white data-[state=active]:shadow-md transition-all duration-300 m-1"
              >
                Trust & Growth
              </TabsTrigger>
            </TabsList>

            {coreValues.map((value) => (
              <TabsContent key={value.id} value={value.id} className="mt-0">
                <div className="bg-white rounded-2xl p-12 text-center shadow-lg border border-gray-100 max-w-4xl mx-auto">
                  <h3 className="text-3xl font-bold text-gray-900 mb-8">{value.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
