
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
          backgroundImage: 'url(/lovable-uploads/4ecd3353-db67-4541-aa16-d14ac3ab34fd.png)'
        }}
      >
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <Header currentPage="about-us" />
      
      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-0">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8">
            <span className="text-white text-sm">✦</span>
            <span className="text-white font-semibold mx-3 text-sm">About Us</span>
            <span className="text-white text-sm">✦</span>
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
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                We are on a mission to make a billion lives better and be the world's best workforce-centric platform.
              </p>
            </div>

            {/* Our Vision */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To help the multi-collar workforce and businesses all across the world to realize the true potential of Informal Economy.
              </p>
            </div>

            {/* Our Goals */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
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
            <div className="inline-flex items-center bg-gray-200 text-gray-800 border border-gray-300 rounded-full px-6 py-3 mb-6">
              <span className="text-sm">✦</span>
              <span className="font-semibold mx-3 text-sm">Team members</span>
              <span className="text-sm">✦</span>
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
            <div className="inline-flex items-center bg-gray-200 text-gray-800 border border-gray-300 rounded-full px-6 py-3 mb-6">
              <span className="text-sm">✦</span>
              <span className="font-semibold mx-3 text-sm">Goals</span>
              <span className="text-sm">✦</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Gigin's Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              At Gigin, our values shape how we build technology, serve businesses, and empower job seekers daily. We are committed to creating a seamless hiring ecosystem that drives efficiency, fosters trust and delivers real impact.
            </p>
          </div>

          {/* Interactive Tab Design with Card Overlapping Effect */}
          <div className="w-full">
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {coreValues.map((value) => (
                <button
                  key={value.id}
                  onClick={() => setActiveValueTab(value.id)}
                  className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-105 border-2 ${
                    activeValueTab === value.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-700 text-white shadow-2xl shadow-blue-600/30 border-blue-600 scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-lg border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {value.id === 'excellence' && 'Customer Excellence'}
                  {value.id === 'teams' && 'Strong Teams'}
                  {value.id === 'trust' && 'Trust & Growth'}
                </button>
              ))}
            </div>

            {/* Tab Content with Card Overlapping Effect */}
            <div className="relative h-[400px] perspective-1000">
              {coreValues.map((value, index) => (
                <div
                  key={value.id}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out transform-gpu ${
                    activeValueTab === value.id
                      ? 'opacity-100 scale-100 z-30 translate-y-0 rotate-0'
                      : index < coreValues.findIndex(v => v.id === activeValueTab)
                      ? 'opacity-60 scale-95 z-10 -translate-y-4 -rotate-2 translate-x-8'
                      : 'opacity-60 scale-95 z-10 translate-y-4 rotate-2 -translate-x-8'
                  }`}
                  style={{
                    transformOrigin: 'center center',
                  }}
                >
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-12 text-center shadow-2xl border border-gray-200 max-w-4xl mx-auto h-full flex flex-col justify-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-700 rounded-full"></div>
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">{value.title}</h3>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
