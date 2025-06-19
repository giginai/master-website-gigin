
import IndustryPageTemplate from "@/components/industry/IndustryPageTemplate";
import { Utensils, Clock, Shield, CheckCircle, Users, FileText, Heart, AlertTriangle } from "lucide-react";

const FoodBeverage = () => {
  const industryData = {
    industryName: "Food & Beverage",
    heroImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=600&fit=crop",
    description: "Ensure food safety and compliance with comprehensive background verification for restaurant staff, food handlers, and hospitality workers.",
    
    outcomes: [
      "Enhanced food safety through thorough screening of kitchen staff, food handlers, and restaurant personnel",
      "Improved compliance with health department regulations and industry safety standards",
      "Reduced liability risks and protection against food safety incidents through proper staff verification",
      "Faster hiring cycles with streamlined verification processes for high-turnover industry positions",
      "Better customer trust and brand reputation through verified, reliable food service staff",
      "Comprehensive health certificate validation and ongoing monitoring for food safety compliance"
    ],

    businessImpact: {
      title: "Business Impact in Food & Beverage",
      stats: [
        { value: "90%", label: "Reduction in Food Safety Incidents" },
        { value: "65%", label: "Faster Staff Onboarding" },
        { value: "35%", label: "Lower Staff Turnover" }
      ],
      description: "Our specialized verification process helps food & beverage businesses maintain the highest safety standards while efficiently scaling their workforce."
    },

    differentiators: [
      "Industry-specific health certificate verification and ongoing monitoring for food safety compliance",
      "Specialized screening for food handling certifications, allergy awareness, and safety training records",
      "Integration with health department databases for real-time certificate status verification",
      "24/7 support with dedicated account managers experienced in food service industry requirements",
      "Rapid verification turnaround times designed for the fast-paced hospitality hiring environment",
      "Comprehensive adverse case management with immediate alerts for health-related violations"
    ],

    useCases: [
      {
        title: "Food Handler Verification",
        description: "Complete screening for kitchen staff, prep cooks, and food service workers handling consumables.",
        benefits: [
          "Health certificate verification and expiration monitoring",
          "Food safety training certification validation",
          "Criminal background checks with focus on health violations",
          "Allergy awareness and safety protocol training verification"
        ]
      },
      {
        title: "Restaurant Management Screening",
        description: "Comprehensive verification for managers, supervisors, and key restaurant personnel.",
        benefits: [
          "Management certification and training validation",
          "Employment history verification with previous restaurants",
          "Financial background checks for cash handling positions",
          "Reference verification from hospitality industry contacts"
        ]
      },
      {
        title: "Delivery Personnel Background Checks",
        description: "Essential screening for delivery drivers and food courier staff ensuring customer safety.",
        benefits: [
          "Driving license verification and motor vehicle record checks",
          "Criminal background screening with focus on public safety",
          "Employment verification and delivery experience validation",
          "Customer service and safety training certification checks"
        ]
      }
    ],

    productFeatures: [
      {
        title: "Health Certificate Tracking",
        description: "Automated monitoring of food handler certificates, health permits, and safety training with renewal alerts.",
        icon: Heart
      },
      {
        title: "Real-Time Compliance",
        description: "Instant verification of health department requirements and ongoing compliance monitoring.",
        icon: CheckCircle
      },
      {
        title: "Safety Protocol Verification",
        description: "Validation of food safety training, allergy awareness, and hygiene protocol certifications.",
        icon: Shield
      },
      {
        title: "Rapid Turnaround",
        description: "Fast-track verification processes designed for high-volume hospitality hiring needs.",
        icon: Clock
      },
      {
        title: "Team Management",
        description: "Centralized dashboard for tracking verification status across all restaurant locations and staff.",
        icon: Users
      },
      {
        title: "Compliance Documentation",
        description: "Comprehensive record keeping and audit trails for health department inspections.",
        icon: FileText
      }
    ],

    customerStory: {
      company: "Metro Restaurant Group",
      role: "Operations Director",
      quote: "Gigin's food safety verification has been a game-changer for our restaurant chain. We've seen zero health violations since implementation and our hiring process is 60% faster.",
      result: "Zero health violations, 60% faster hiring, improved customer satisfaction scores"
    },

    specificChecks: [
      {
        name: "Food Handler Certificate Verification",
        description: "Validation of current food safety certificates, ServSafe certifications, and health department permits."
      },
      {
        name: "Health Department Clearance",
        description: "Verification of medical clearances, tuberculosis testing, and health department approvals."
      },
      {
        name: "Food Safety Training Validation",
        description: "Confirmation of completed food safety courses, allergen awareness training, and hygiene protocols."
      },
      {
        name: "Criminal Background - Food Safety Focus",
        description: "Comprehensive screening with emphasis on health violations, food tampering, and public safety offenses."
      },
      {
        name: "Employment History - Restaurant Industry",
        description: "Detailed verification of previous restaurant and food service employment with performance references."
      },
      {
        name: "Alcohol Service Certification",
        description: "Validation of responsible beverage service training and alcohol handling certifications where applicable."
      },
      {
        name: "Cash Handling Verification",
        description: "Background checks for positions involving money handling, with focus on theft and financial crimes."
      },
      {
        name: "Customer Service Training",
        description: "Verification of hospitality training, customer service certifications, and communication skills assessment."
      }
    ],

    blogResources: [
      {
        title: "Food Safety Compliance in Restaurant Hiring",
        url: "/blog/food-beverage/food-safety-compliance-hiring",
        date: "December 12, 2024"
      },
      {
        title: "Background Screening Best Practices for Restaurants",
        url: "/blog/food-beverage/restaurant-screening-best-practices",
        date: "November 25, 2024"
      },
      {
        title: "Managing High-Volume Hiring in Food Service",
        url: "/blog/food-beverage/high-volume-hiring-food-service",
        date: "November 8, 2024"
      }
    ],

    otherIndustries: [
      { name: "Facility Management", link: "/industry/facility-management" },
      { name: "Gig Economy", link: "/industry/gig-economy" },
      { name: "Transportation", link: "/industry/transportation" },
      { name: "Manufacturing", link: "/industry/manufacturing" },
      { name: "Financial Services", link: "/industry/financial-services" },
      { name: "Insurance", link: "/industry/insurance" },
      { name: "Corporate Services", link: "/industry/corporate-services" }
    ]
  };

  return <IndustryPageTemplate {...industryData} />;
};

export default FoodBeverage;
