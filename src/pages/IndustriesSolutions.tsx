
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Building2, Users, Truck, DollarSign, Shield, Utensils, Factory, Briefcase, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const IndustriesSolutions = () => {
  const industries = [{
    name: "Facility Management",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
    description: "Comprehensive background checks for security personnel, maintenance staff, and facility management teams ensuring safety and reliability.",
    keyChecks: ["Criminal Background Check", "Identity Verification", "Employment History", "Reference Verification"],
    link: "/industry/facility-management",
    useCases: ["Security Personnel", "Maintenance Staff", "Cleaning Crews", "Access Control"]
  }, {
    name: "Food & Beverage",
    icon: Utensils,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
    description: "Health and safety compliance verification for restaurant staff, food handlers, and hospitality workers with industry-specific requirements.",
    keyChecks: ["Health Certificate Verification", "Criminal Background Check", "Employment Verification", "Address Verification"],
    link: "/industry/food-beverage",
    useCases: ["Food Handlers", "Kitchen Staff", "Restaurant Managers", "Delivery Personnel"]
  }, {
    name: "Gig Economy",
    icon: Users,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    description: "Rapid verification solutions for freelancers, delivery partners, and on-demand service providers with streamlined processes.",
    keyChecks: ["Identity Verification", "Driving License Check", "Criminal Background Check", "Reference Verification"],
    link: "/industry/gig-economy",
    useCases: ["Delivery Drivers", "Freelance Workers", "On-demand Services", "Contract Workers"]
  }, {
    name: "Transportation & Logistics",
    icon: Truck,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
    description: "Specialized verification for drivers, logistics personnel, and transportation staff with focus on safety and compliance.",
    keyChecks: ["Driving License Verification", "Criminal Background Check", "Employment History", "Medical Fitness Check"],
    link: "/industry/transportation",
    useCases: ["Commercial Drivers", "Logistics Coordinators", "Warehouse Staff", "Fleet Managers"]
  }, {
    name: "Financial Services",
    icon: DollarSign,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    description: "Stringent verification standards for banking, insurance, and financial sector employees with regulatory compliance focus.",
    keyChecks: ["Financial Background Check", "Criminal Record Check", "Education Verification", "Professional Certification"],
    link: "/industry/financial-services",
    useCases: ["Bank Employees", "Financial Advisors", "Insurance Agents", "Investment Professionals"]
  }, {
    name: "Insurance",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",
    description: "Comprehensive verification for insurance agents, underwriters, and claims processors with emphasis on trustworthiness.",
    keyChecks: ["Professional License Check", "Financial Verification", "Criminal Background Check", "Education Verification"],
    link: "/industry/insurance",
    useCases: ["Insurance Agents", "Claims Adjusters", "Underwriters", "Risk Assessors"]
  }, {
    name: "Manufacturing",
    icon: Factory,
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&h=400&fit=crop",
    description: "Safety-focused verification for manufacturing workers, quality control staff, and industrial personnel.",
    keyChecks: ["Safety Certification Check", "Employment Verification", "Criminal Background Check", "Technical Skills Validation"],
    link: "/industry/manufacturing",
    useCases: ["Production Workers", "Quality Controllers", "Safety Officers", "Equipment Operators"]
  }, {
    name: "Corporate Services",
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    description: "Executive and professional verification for corporate roles, management positions, and office-based employees.",
    keyChecks: ["Education Verification", "Employment History", "Professional References", "Social Media Screening"],
    link: "/industry/corporate-services",
    useCases: ["Executives", "Managers", "Office Staff", "Consultants"]
  }];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="glass-morphism rounded-full px-4 py-2 mb-8 inline-flex items-center">
            <span className="text-white">✦</span>
            <span className="text-white font-medium mx-2">Industries & Use Cases</span>
            <span className="text-white">✦</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Industry-Specific<br />Verification Solutions
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Tailored background verification solutions designed for the unique requirements of different industries and business sectors.
          </p>
        </div>
      </section>

      {/* Industries Carousel */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Explore Industries We Serve
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each industry has unique challenges and requirements. Our specialized solutions address specific compliance needs, safety standards, and regulatory requirements across various sectors.
            </p>
          </div>

          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {industries.map((industry, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="glass-morphism rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-white/30 bg-white/80 backdrop-blur-sm overflow-hidden h-full">
                    {/* Industry Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={industry.image} 
                        alt={industry.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                          <industry.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <h3 className="text-xl font-bold text-white">
                          {industry.name}
                        </h3>
                      </div>
                    </div>

                    {/* Industry Content */}
                    <div className="p-6">
                      <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                        {industry.description}
                      </p>

                      {/* Use Cases */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Common Use Cases:</h4>
                        <div className="grid grid-cols-2 gap-1">
                          {industry.useCases.slice(0, 4).map((useCase, useCaseIndex) => (
                            <div key={useCaseIndex} className="text-xs text-gray-600 bg-gray-100/80 rounded-md px-2 py-1">
                              {useCase}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Key Checks */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Verification Checks:</h4>
                        <div className="space-y-1">
                          {industry.keyChecks.slice(0, 3).map((check, checkIndex) => (
                            <div key={checkIndex} className="flex items-center text-xs text-gray-600">
                              <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-2"></div>
                              {check}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Subtle CTA */}
                      <Link 
                        to={industry.link} 
                        className="inline-flex items-center text-sm text-pink-600 hover:text-pink-700 font-medium group/link"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-3 h-3 ml-1 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="glass-morphism bg-white/80 border-white/30 hover:bg-white/90" />
            <CarouselNext className="glass-morphism bg-white/80 border-white/30 hover:bg-white/90" />
          </Carousel>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-pink-100/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-purple-100/30 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Industry-Specific Verification Matters
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center glass-morphism rounded-2xl p-8 bg-white/60 border border-white/30">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Compliance Assurance</h3>
              <p className="text-gray-600">
                Meet industry-specific regulations and compliance requirements with tailored verification processes.
              </p>
            </div>
            
            <div className="text-center glass-morphism rounded-2xl p-8 bg-white/60 border border-white/30">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Risk Mitigation</h3>
              <p className="text-gray-600">
                Reduce industry-specific risks through targeted background checks and specialized screening protocols.
              </p>
            </div>
            
            <div className="text-center glass-morphism rounded-2xl p-8 bg-white/60 border border-white/30">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Industry Expertise</h3>
              <p className="text-gray-600">
                Benefit from our deep understanding of industry challenges and best practices in background verification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M50 0a50 50 0 1 1 0 100 50 50 0 0 1 0-100z"/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don't See Your Industry?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            We provide customized verification solutions for businesses across all sectors. 
            Contact us to discuss your specific requirements.
          </p>
          <button className="glass-morphism bg-white/20 text-white border border-white/30 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/30 transition-all duration-300 backdrop-blur-sm">
            Contact Our Experts
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IndustriesSolutions;
