
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";

const WhyGigin = () => {
  const accordionItems = [
    {
      id: "item-1",
      title: "Recruiter Agents - Faster, Smarter Talent Selection",
      content: "Reduce Recruitment Manual Tasks by 70%",
      description: "Scale your business with super assistants that understand complex requirements and execute tasks efficiently. Our AI agents learn from your preferences and continuously improve their performance to deliver better results.",
      image: "photo-1649972904349-6e44c42644a7"
    },
    {
      id: "item-2", 
      title: "Verification Agents",
      content: "AI That Shields Your Business From Bad Hires",
      description: "Our advanced verification system uses AI to validate candidate credentials, work history, and skills through multiple data points. This comprehensive approach reduces hiring risks and ensures you get qualified, trustworthy candidates.",
      image: "photo-1488590528505-98d2b5aba04b"
    },
    {
      id: "item-3",
      title: "AI-Guided Voice-Based Onboarding", 
      content: "Natural Language Processing & Knowledge Graph Intelligence",
      description: "Transform your onboarding process with intelligent voice interactions that guide new hires through company policies, procedures, and training. Our AI understands context and provides personalized assistance throughout the journey.",
      image: "photo-1518770660439-4636190af475"
    },
    {
      id: "item-4",
      title: "Knowledge Graph Intelligence",
      content: "Streamlining Talent Discovery And Optimizing Hiring",
      description: "Leverage advanced knowledge graphs to map relationships between skills, roles, and candidates. Our intelligent system identifies hidden talent connections and suggests optimal matches based on comprehensive data analysis.",
      image: "photo-1461749280684-dccba630e2f6"
    }
  ];

  const cardFeatures = [
    {
      title: "Centralized Your Hiring Requirements",
      description: "Integrate with your existing tools and manage all hiring processes from one unified platform. Streamline workflows and eliminate data silos.",
      image: "photo-1486312338219-ce68d2c6f44d"
    },
    {
      title: "Global Coverage",
      description: "Access talent pools worldwide with our comprehensive global network. Find the right candidates regardless of location or time zone.",
      image: "photo-1581091226825-a6a2a5aee158"
    },
    {
      title: "Data Security & Compliance",
      description: "Enterprise-grade security ensures your hiring data is protected. Compliance with global standards gives you peace of mind.",
      image: "photo-1649972904349-6e44c42644a7"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/lovable-uploads/f0acdf04-0015-4664-af62-d43a84908fcd.png)'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <Header currentPage="why-gigin" />
      
      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <span className="text-white">✦</span>
            <span className="text-white font-medium mx-2">Why Gigin?</span>
            <span className="text-white">✦</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-5xl mx-auto">
            The Future Of Hiring Is<br />
            AI-Driven
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Harness the future of recruitment with intelligent AI systems that understand<br />
            context, learn preferences, and deliver exceptional hiring outcomes that<br />
            transform your business growth and competitive advantage.
          </p>
          <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 text-lg rounded-lg font-medium mb-12 shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transition-all duration-300">
            Get Started
          </Button>

          {/* Hero Dashboard Image */}
          <div className="relative max-w-6xl mx-auto">
            <div className="relative h-96 md:h-[450px] lg:h-[500px] overflow-hidden rounded-t-3xl group">
              <img 
                src="/lovable-uploads/56a40185-261b-4872-a09a-a76c5af61583.png" 
                alt="Gigin AI-Driven Hiring Platform" 
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Outcome-Driven Intelligence Section */}
      <section className="relative z-10 py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="text-gray-800">✦</span>
              <span className="text-gray-800 font-medium mx-2">Intelligence</span>
              <span className="text-gray-800">✦</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Outcome-Driven Intelligence
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
              Our AI-powered platform delivers intelligent solutions that transform traditional hiring into strategic talent acquisition
            </p>
          </div>

          {/* Accordion Section */}
          <Accordion type="single" collapsible className="w-full max-w-6xl mx-auto">
            {accordionItems.map((item, index) => (
              <AccordionItem key={item.id} value={item.id} className="border-b border-gray-200 mb-6">
                <AccordionTrigger className="hover:no-underline group py-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <h3 className="text-left text-xl font-bold text-gray-900 group-hover:text-pink-600 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <ChevronDown className="h-5 w-5 text-gray-500 group-hover:text-pink-600 transition-colors" />
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-4">{item.content}</h4>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                    <div className="relative">
                      <img 
                        src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=800&q=80`}
                        alt={item.title}
                        className="w-full h-64 object-cover rounded-2xl shadow-lg"
                      />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Built For Flexibility Section */}
      <section className="relative z-10 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="text-gray-800">✦</span>
              <span className="text-gray-800 font-medium mx-2">Flexibility</span>
              <span className="text-gray-800">✦</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Built For Flexibility, Collaboration & Compliance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cardFeatures.map((feature, index) => (
              <Card key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
                <div className="relative">
                  <img 
                    src={`https://images.unsplash.com/${feature.image}?auto=format&fit=crop&w=600&q=80`}
                    alt={feature.title}
                    className="w-full h-48 object-cover rounded-t-2xl"
                  />
                </div>
                <CardHeader className="text-center p-6">
                  <CardTitle className="text-xl font-bold text-gray-900 mb-4 group-hover:text-pink-600 transition-colors">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <span className="text-white">✦</span>
            <span className="text-white font-medium mx-2">Get Started</span>
            <span className="text-white">✦</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Turn Weeks Of Hiring Into Days<br />
            With AI That Thinks Like You
          </h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto mb-8">
            Start transforming your hiring process today with intelligent automation that learns your preferences and delivers exceptional results.
          </p>
          <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 text-lg rounded-lg font-medium shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transition-all duration-300">
            Experience Gigin Today
          </Button>

          {/* CTA Dashboard Image */}
          <div className="relative max-w-6xl mx-auto mt-12">
            <div className="relative">
              <img 
                src="/lovable-uploads/56a40185-261b-4872-a09a-a76c5af61583.png"
                alt="Gigin Platform Dashboard"
                className="w-full max-w-5xl h-auto object-contain rounded-2xl shadow-2xl mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyGigin;
