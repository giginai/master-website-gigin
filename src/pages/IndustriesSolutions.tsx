import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Building2, Users, Truck, DollarSign, Shield, Utensils, Factory, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
const IndustriesSolutions = () => {
  const industries = [{
    name: "Facility Management",
    icon: Building2,
    description: "Comprehensive background checks for security personnel, maintenance staff, and facility management teams ensuring safety and reliability.",
    keyChecks: ["Criminal Background Check", "Identity Verification", "Employment History", "Reference Verification"],
    link: "/industry/facility-management"
  }, {
    name: "Food & Beverage",
    icon: Utensils,
    description: "Health and safety compliance verification for restaurant staff, food handlers, and hospitality workers with industry-specific requirements.",
    keyChecks: ["Health Certificate Verification", "Criminal Background Check", "Employment Verification", "Address Verification"],
    link: "/industry/food-beverage"
  }, {
    name: "Gig Economy",
    icon: Users,
    description: "Rapid verification solutions for freelancers, delivery partners, and on-demand service providers with streamlined processes.",
    keyChecks: ["Identity Verification", "Driving License Check", "Criminal Background Check", "Reference Verification"],
    link: "/industry/gig-economy"
  }, {
    name: "Transportation & Logistics",
    icon: Truck,
    description: "Specialized verification for drivers, logistics personnel, and transportation staff with focus on safety and compliance.",
    keyChecks: ["Driving License Verification", "Criminal Background Check", "Employment History", "Medical Fitness Check"],
    link: "/industry/transportation"
  }, {
    name: "Financial Services",
    icon: DollarSign,
    description: "Stringent verification standards for banking, insurance, and financial sector employees with regulatory compliance focus.",
    keyChecks: ["Financial Background Check", "Criminal Record Check", "Education Verification", "Professional Certification"],
    link: "/industry/financial-services"
  }, {
    name: "Insurance",
    icon: Shield,
    description: "Comprehensive verification for insurance agents, underwriters, and claims processors with emphasis on trustworthiness.",
    keyChecks: ["Professional License Check", "Financial Verification", "Criminal Background Check", "Education Verification"],
    link: "/industry/insurance"
  }, {
    name: "Manufacturing",
    icon: Factory,
    description: "Safety-focused verification for manufacturing workers, quality control staff, and industrial personnel.",
    keyChecks: ["Safety Certification Check", "Employment Verification", "Criminal Background Check", "Technical Skills Validation"],
    link: "/industry/manufacturing"
  }, {
    name: "Corporate Services",
    icon: Briefcase,
    description: "Executive and professional verification for corporate roles, management positions, and office-based employees.",
    keyChecks: ["Education Verification", "Employment History", "Professional References", "Social Media Screening"],
    link: "/industry/corporate-services"
  }];
  return <div className="min-h-screen bg-gray-50">
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

      {/* Industries Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => <Link key={index} to={industry.link} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200 hover:border-pink-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-xl flex items-center justify-center mr-4">
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-pink-600">
                    {industry.name}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {industry.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Verification Checks:</h4>
                  {industry.keyChecks.map((check, checkIndex) => <div key={checkIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                      {check}
                    </div>)}
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <span className="text-pink-500 font-medium text-sm group-hover:text-pink-600">
                    Learn More →
                  </span>
                </div>
              </Link>)}
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
    </div>;
};
export default IndustriesSolutions;