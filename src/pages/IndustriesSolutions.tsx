
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Building2, Users, Truck, DollarSign, Shield, Utensils, Factory, Briefcase, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const IndustriesSolutions = () => {
  const industries = [
    {
      name: "Facility Management",
      icon: Building2,
      description: "Comprehensive background checks for security personnel, maintenance staff, and facility management teams ensuring safety and reliability.",
      keyChecks: ["Criminal Background Check", "Identity Verification", "Employment History", "Reference Verification"],
      link: "/industry/facility-management",
      useCases: ["Security Personnel", "Maintenance Staff", "Cleaning Crews", "Access Control"],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
    },
    {
      name: "Food & Beverage",
      icon: Utensils,
      description: "Health and safety compliance verification for restaurant staff, food handlers, and hospitality workers with industry-specific requirements.",
      keyChecks: ["Health Certificate Verification", "Criminal Background Check", "Employment Verification", "Address Verification"],
      link: "/industry/food-beverage",
      useCases: ["Food Handlers", "Kitchen Staff", "Restaurant Managers", "Delivery Personnel"],
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop"
    },
    {
      name: "Gig Economy",
      icon: Users,
      description: "Rapid verification solutions for freelancers, delivery partners, and on-demand service providers with streamlined processes.",
      keyChecks: ["Identity Verification", "Driving License Check", "Criminal Background Check", "Reference Verification"],
      link: "/industry/gig-economy",
      useCases: ["Delivery Drivers", "Freelance Workers", "On-demand Services", "Contract Workers"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop"
    },
    {
      name: "Transportation & Logistics",
      icon: Truck,
      description: "Specialized verification for drivers, logistics personnel, and transportation staff with focus on safety and compliance.",
      keyChecks: ["Driving License Verification", "Criminal Background Check", "Employment History", "Medical Fitness Check"],
      link: "/industry/transportation",
      useCases: ["Commercial Drivers", "Logistics Coordinators", "Warehouse Staff", "Fleet Managers"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop"
    },
    {
      name: "Financial Services",
      icon: DollarSign,
      description: "Stringent verification standards for banking, insurance, and financial sector employees with regulatory compliance focus.",
      keyChecks: ["Financial Background Check", "Criminal Record Check", "Education Verification", "Professional Certification"],
      link: "/industry/financial-services",
      useCases: ["Bank Employees", "Financial Advisors", "Insurance Agents", "Investment Professionals"],
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop"
    },
    {
      name: "Insurance",
      icon: Shield,
      description: "Comprehensive verification for insurance agents, underwriters, and claims processors with emphasis on trustworthiness.",
      keyChecks: ["Professional License Check", "Financial Verification", "Criminal Background Check", "Education Verification"],
      link: "/industry/insurance",
      useCases: ["Insurance Agents", "Claims Adjusters", "Underwriters", "Risk Assessors"],
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop"
    },
    {
      name: "Manufacturing",
      icon: Factory,
      description: "Safety-focused verification for manufacturing workers, quality control staff, and industrial personnel.",
      keyChecks: ["Safety Certification Check", "Employment Verification", "Criminal Background Check", "Technical Skills Validation"],
      link: "/industry/manufacturing",
      useCases: ["Production Workers", "Quality Controllers", "Safety Officers", "Equipment Operators"],
      image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&h=600&fit=crop"
    },
    {
      name: "Corporate Services",
      icon: Briefcase,
      description: "Executive and professional verification for corporate roles, management positions, and office-based employees.",
      keyChecks: ["Education Verification", "Employment History", "Professional References", "Social Media Screening"],
      link: "/industry/corporate-services",
      useCases: ["Executives", "Managers", "Office Staff", "Consultants"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
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
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Explore Our Industry Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover how our specialized verification services meet the unique needs of your industry
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent className="-ml-4">
                {industries.map((industry, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="relative group">
                      {/* Stacked Card Effect - Background Cards */}
                      <div className="absolute inset-0 bg-white rounded-2xl shadow-lg transform translate-x-2 translate-y-2 opacity-30"></div>
                      <div className="absolute inset-0 bg-white rounded-2xl shadow-lg transform translate-x-1 translate-y-1 opacity-60"></div>
                      
                      {/* Main Card */}
                      <div className="relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 overflow-hidden border border-gray-200">
                        {/* Image Header */}
                        <div className="relative h-48 overflow-hidden">
                          <img 
                            src={industry.image} 
                            alt={industry.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                          
                          {/* Icon Overlay */}
                          <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                            <industry.icon className="w-6 h-6 text-gray-900" />
                          </div>
                          
                          {/* Title Overlay */}
                          <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="text-xl font-bold text-white mb-1">
                              {industry.name}
                            </h3>
                          </div>
                        </div>

                        {/* Card Content */}
                        <div className="p-6">
                          <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                            {industry.description}
                          </p>

                          {/* Use Cases */}
                          <div className="mb-4">
                            <h4 className="text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">Common Use Cases:</h4>
                            <div className="flex flex-wrap gap-1">
                              {industry.useCases.slice(0, 2).map((useCase, useCaseIndex) => (
                                <span key={useCaseIndex} className="text-xs text-gray-600 bg-gray-100 rounded-md px-2 py-1">
                                  {useCase}
                                </span>
                              ))}
                              {industry.useCases.length > 2 && (
                                <span className="text-xs text-gray-500 bg-gray-50 rounded-md px-2 py-1">
                                  +{industry.useCases.length - 2} more
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Key Checks */}
                          <div className="mb-6">
                            <h4 className="text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">Key Verification Checks:</h4>
                            <div className="space-y-1">
                              {industry.keyChecks.slice(0, 3).map((check, checkIndex) => (
                                <div key={checkIndex} className="flex items-center text-xs text-gray-600">
                                  <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-2 flex-shrink-0"></div>
                                  {check}
                                </div>
                              ))}
                              {industry.keyChecks.length > 3 && (
                                <div className="text-xs text-gray-500 ml-3.5">
                                  +{industry.keyChecks.length - 3} more checks
                                </div>
                              )}
                            </div>
                          </div>
                          
                          {/* CTA */}
                          <Link 
                            to={industry.link} 
                            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-4 rounded-lg font-medium text-sm text-center flex items-center justify-center hover:from-pink-600 hover:to-purple-700 transition-all duration-300 group"
                          >
                            <span>Explore {industry.name}</span>
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-12 bg-white shadow-lg border-gray-200 hover:bg-gray-50" />
              <CarouselNext className="hidden md:flex -right-12 bg-white shadow-lg border-gray-200 hover:bg-gray-50" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Industry-Specific Verification Matters
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Compliance Assurance</h3>
              <p className="text-gray-600">
                Meet industry-specific regulations and compliance requirements with tailored verification processes.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Risk Mitigation</h3>
              <p className="text-gray-600">
                Reduce industry-specific risks through targeted background checks and specialized screening protocols.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Building2 className="w-8 h-8 text-pink-600" />
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
      <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don't See Your Industry?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            We provide customized verification solutions for businesses across all sectors. 
            Contact us to discuss your specific requirements.
          </p>
          <button className="bg-white text-pink-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
            Contact Our Experts
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IndustriesSolutions;
