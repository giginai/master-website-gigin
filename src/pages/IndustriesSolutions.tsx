import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Building2, Users, Truck, DollarSign, Shield, Utensils, Factory, Briefcase } from "lucide-react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import IndustryCard from "@/components/industry/IndustryCard";
import IndustryTabNavigation from "@/components/industry/IndustryTabNavigation";
import IndustryHeroSection from "@/components/industry/IndustryHeroSection";
import IndustryBenefitsSection from "@/components/industry/IndustryBenefitsSection";
import IndustryCTASection from "@/components/industry/IndustryCTASection";
const IndustriesSolutions = () => {
  const industries = [{
    id: "facility-management",
    name: "Facility Management",
    icon: Building2,
    description: "Comprehensive background checks for security personnel, maintenance staff, and facility management teams ensuring safety and reliability.",
    keyChecks: ["Criminal Background Check", "Identity Verification", "Employment History", "Reference Verification"],
    link: "/industry/facility-management",
    useCases: ["Security Personnel", "Maintenance Staff", "Cleaning Crews", "Access Control"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
  }, {
    id: "food-beverage",
    name: "Food & Beverage",
    icon: Utensils,
    description: "Health and safety compliance verification for restaurant staff, food handlers, and hospitality workers with industry-specific requirements.",
    keyChecks: ["Health Certificate Verification", "Criminal Background Check", "Employment Verification", "Address Verification"],
    link: "/industry/food-beverage",
    useCases: ["Food Handlers", "Kitchen Staff", "Restaurant Managers", "Delivery Personnel"],
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop"
  }, {
    id: "gig-economy",
    name: "Gig Economy",
    icon: Users,
    description: "Rapid verification solutions for freelancers, delivery partners, and on-demand service providers with streamlined processes.",
    keyChecks: ["Identity Verification", "Driving License Check", "Criminal Background Check", "Reference Verification"],
    link: "/industry/gig-economy",
    useCases: ["Delivery Drivers", "Freelance Workers", "On-demand Services", "Contract Workers"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop"
  }, {
    id: "transportation",
    name: "Transportation & Logistics",
    icon: Truck,
    description: "Specialized verification for drivers, logistics personnel, and transportation staff with focus on safety and compliance.",
    keyChecks: ["Driving License Verification", "Criminal Background Check", "Employment History", "Medical Fitness Check"],
    link: "/industry/transportation",
    useCases: ["Commercial Drivers", "Logistics Coordinators", "Warehouse Staff", "Fleet Managers"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop"
  }, {
    id: "financial-services",
    name: "Financial Services",
    icon: DollarSign,
    description: "Stringent verification standards for banking, insurance, and financial sector employees with regulatory compliance focus.",
    keyChecks: ["Financial Background Check", "Criminal Record Check", "Education Verification", "Professional Certification"],
    link: "/industry/financial-services",
    useCases: ["Bank Employees", "Financial Advisors", "Insurance Agents", "Investment Professionals"],
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop"
  }, {
    id: "insurance",
    name: "Insurance",
    icon: Shield,
    description: "Comprehensive verification for insurance agents, underwriters, and claims processors with emphasis on trustworthiness.",
    keyChecks: ["Professional License Check", "Financial Verification", "Criminal Background Check", "Education Verification"],
    link: "/industry/insurance",
    useCases: ["Insurance Agents", "Claims Adjusters", "Underwriters", "Risk Assessors"],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop"
  }, {
    id: "manufacturing",
    name: "Manufacturing",
    icon: Factory,
    description: "Safety-focused verification for manufacturing workers, quality control staff, and industrial personnel.",
    keyChecks: ["Safety Certification Check", "Employment Verification", "Criminal Background Check", "Technical Skills Validation"],
    link: "/industry/manufacturing",
    useCases: ["Production Workers", "Quality Controllers", "Safety Officers", "Equipment Operators"],
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&h=600&fit=crop"
  }, {
    id: "corporate-services",
    name: "Corporate Services",
    icon: Briefcase,
    description: "Executive and professional verification for corporate roles, management positions, and office-based employees.",
    keyChecks: ["Education Verification", "Employment History", "Professional References", "Social Media Screening"],
    link: "/industry/corporate-services",
    useCases: ["Executives", "Managers", "Office Staff", "Consultants"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
  }];
  return <div className="min-h-screen bg-gray-50">
      <Header />
      
      <IndustryHeroSection />

      {/* Interactive Industry Tabs */}
      <section className="relative overflow-hidden py-[4px]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            
            
          </div>

          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="facility-management" className="w-full">
              <IndustryTabNavigation industries={industries} />

              {/* Tab Content */}
              {industries.map(industry => <TabsContent key={industry.id} value={industry.id} className="mt-0">
                  <IndustryCard industry={industry} />
                </TabsContent>)}
            </Tabs>
          </div>
        </div>
      </section>

      <IndustryBenefitsSection />
      <IndustryCTASection />

      <Footer />
    </div>;
};
export default IndustriesSolutions;