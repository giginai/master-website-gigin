import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState("sourcing");
  const features = [{
    id: "sourcing",
    title: "Intelligent Talent Sourcing",
    description: "AI-driven sourcing scans millions of profiles to identify high-intent candidates with precision. Advanced algorithms match skills, experience, and cultural fit to deliver quality talent faster than traditional methods.",
    stats: [{
      value: "50%",
      label: "Faster Discovery"
    }, {
      value: "2M+",
      label: "Pre-Screened Profiles"
    }],
    image: "/lovable-uploads/dcea3cf5-e387-4d07-9397-b7d7870c08cb.png"
  }, {
    id: "screening",
    title: "Smart Matching & Screening",
    description: "AI-powered screening evaluates skills, experience, and soft skills to rank top candidates instantly. Automated assessments reduce hiring time while ensuring better candidate-role alignment for successful placements.",
    stats: [{
      value: "60%",
      label: "Faster Screening"
    }, {
      value: "80%",
      label: "Better Alignment"
    }],
    image: "/lovable-uploads/02c228f4-c84a-4d4e-9381-f72a54f72bb8.png"
  }, {
    id: "verification",
    title: "Agentified Background Verification",
    description: "AI-powered background verification ensures accurate identity, employment, and credential checks. Automated processes reduce fraud risks while maintaining compliance standards for secure, trustworthy hiring decisions.",
    stats: [{
      value: "90%",
      label: "Faster Verification"
    }, {
      value: "40%",
      label: "Lower Risks"
    }],
    image: "/lovable-uploads/9441c202-33f5-42c1-a3fc-9468ce0635b2.png"
  }];
  return <section className="pt-8 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-[48px]">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Smarter Features. Faster Hiring
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From sourcing to verification—make every step smarter.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-gray-100 p-1 rounded-xl mb-12 h-auto">
            <TabsTrigger value="sourcing" className="rounded-lg py-3 px-6 text-base font-medium data-[state=active]:bg-white data-[state=active]:shadow-md transition-all duration-300 m-1">
              Sourcing
            </TabsTrigger>
            <TabsTrigger value="screening" className="rounded-lg py-3 px-6 text-base font-medium data-[state=active]:bg-white data-[state=active]:shadow-md transition-all duration-300 m-1">
              Screening
            </TabsTrigger>
            <TabsTrigger value="verification" className="rounded-lg py-3 px-6 text-base font-medium data-[state=active]:bg-white data-[state=active]:shadow-md transition-all duration-300 m-1">
              Verification
            </TabsTrigger>
          </TabsList>

          {features.map(feature => <TabsContent key={feature.id} value={feature.id} className="mt-0">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  
                  <div className="flex gap-8">
                    {feature.stats.map((stat, index) => <div key={index} className="text-left">
                        <div className="text-3xl md:text-4xl font-bold text-pink-500 mb-1">
                          {stat.value}
                        </div>
                        <div className="text-gray-600 font-medium text-sm">
                          {stat.label}
                        </div>
                      </div>)}
                  </div>
                </div>

                <div className="relative">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-50 to-gray-100 p-6">
                    <img src={feature.image} alt={feature.title} className="w-full h-auto object-contain" />
                  </div>
                </div>
              </div>
            </TabsContent>)}
        </Tabs>
      </div>
    </section>;
};
export default FeaturesSection;