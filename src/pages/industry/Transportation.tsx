
import IndustryPageTemplate from "@/components/industry/IndustryPageTemplate";
import { Truck, Shield, Clock, CheckCircle, Users, FileText, AlertTriangle, MapPin } from "lucide-react";

const Transportation = () => {
  const industryData = {
    industryName: "Transportation & Logistics",
    heroImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=600&fit=crop",
    description: "Comprehensive background verification for drivers, logistics personnel, and transportation staff with focus on safety, compliance, and regulatory requirements.",
    
    outcomes: [
      "Enhanced road safety through thorough screening of commercial drivers and transportation personnel",
      "Improved DOT compliance and regulatory adherence with specialized transportation verification protocols",
      "Reduced insurance premiums and liability risks through verified, qualified driver workforce",
      "Faster driver onboarding with streamlined CDL verification and medical certification validation",
      "Better cargo security through comprehensive background checks for logistics and warehouse staff",
      "Ongoing monitoring of driver records with real-time alerts for violations and license issues"
    ],

    businessImpact: {
      title: "Business Impact in Transportation",
      stats: [
        { value: "75%", label: "Reduction in Safety Incidents" },
        { value: "50%", label: "Faster Driver Onboarding" },
        { value: "30%", label: "Lower Insurance Costs" }
      ],
      description: "Our transportation verification solutions help companies maintain safety standards while efficiently scaling their driver workforce and logistics operations."
    },

    differentiators: [
      "DOT-compliant verification processes designed specifically for transportation industry requirements",
      "Real-time CDL verification with automatic alerts for license suspensions, violations, and expirations",
      "Integration with FMCSA databases for comprehensive driver safety record monitoring",
      "Medical certification validation and ongoing monitoring for DOT physical compliance",
      "Specialized screening for hazmat endorsements and specialized transportation certifications",
      "24/7 monitoring of driver records with instant notifications for any safety violations"
    ],

    useCases: [
      {
        title: "Commercial Driver Verification",
        description: "Complete screening for CDL drivers, long-haul truckers, and commercial vehicle operators.",
        benefits: [
          "CDL license verification and classification validation",
          "DOT medical certification and physical exam verification",
          "Motor vehicle record review and violation history analysis",
          "Drug and alcohol testing program compliance verification"
        ]
      },
      {
        title: "Logistics Personnel Screening",
        description: "Comprehensive background checks for warehouse staff, logistics coordinators, and supply chain personnel.",
        benefits: [
          "Criminal background screening with focus on theft and property crimes",
          "Employment verification with previous logistics and warehouse employers",
          "Forklift and equipment operation certification validation",
          "Safety training and warehouse protocol certification checks"
        ]
      },
      {
        title: "Fleet Management Verification",
        description: "Specialized screening for fleet managers, dispatchers, and transportation supervisors.",
        benefits: [
          "Management and supervisory experience verification",
          "Transportation industry certification and training validation",
          "Financial background checks for fleet management positions",
          "Emergency response and safety protocol training verification"
        ]
      }
    ],

    productFeatures: [
      {
        title: "DOT Compliance Monitoring",
        description: "Automated tracking of DOT requirements, medical certifications, and regulatory compliance status.",
        icon: Shield
      },
      {
        title: "CDL Verification System",
        description: "Real-time verification of commercial driver licenses with automatic renewal and violation monitoring.",
        icon: CheckCircle
      },
      {
        title: "MVR Monitoring",
        description: "Continuous motor vehicle record monitoring with instant alerts for violations and suspensions.",
        icon: AlertTriangle
      },
      {
        title: "Medical Certification Tracking",
        description: "Automated monitoring of DOT medical certificates and physical exam compliance requirements.",
        icon: FileText
      },
      {
        title: "Fleet Dashboard",
        description: "Centralized management dashboard for tracking driver compliance across entire fleet operations.",
        icon: Users
      },
      {
        title: "Rapid Processing",
        description: "Fast-track verification for urgent hiring needs with expedited DOT compliance validation.",
        icon: Clock
      }
    ],

    customerStory: {
      company: "National Freight Solutions",
      role: "Safety Director",
      quote: "Gigin's transportation verification platform has revolutionized our safety program. We've achieved zero preventable accidents and improved our DOT safety rating significantly.",
      result: "Zero preventable accidents, improved DOT safety rating, 45% faster driver onboarding"
    },

    specificChecks: [
      {
        name: "Commercial Driver License (CDL) Verification",
        description: "Comprehensive validation of CDL status, classifications, endorsements, and expiration dates."
      },
      {
        name: "DOT Medical Certification Check",
        description: "Verification of current DOT medical certificates and physical examination compliance status."
      },
      {
        name: "Motor Vehicle Record (MVR) Review",
        description: "Complete driving history analysis including violations, accidents, and license suspensions."
      },
      {
        name: "Drug & Alcohol Testing Compliance",
        description: "Verification of completed drug and alcohol testing programs and ongoing compliance monitoring."
      },
      {
        name: "Hazmat Endorsement Verification",
        description: "Validation of hazardous materials endorsements and specialized transportation certifications."
      },
      {
        name: "Criminal Background - Transportation Focus",
        description: "Background screening with emphasis on theft, DUI, violent crimes, and transportation-related offenses."
      },
      {
        name: "Employment History - Transportation Industry",
        description: "Detailed verification of previous transportation and logistics employment with safety record review."
      },
      {
        name: "Equipment Operation Certification",
        description: "Validation of forklift, crane, and specialized equipment operation licenses and certifications."
      }
    ],

    blogResources: [
      {
        title: "DOT Compliance and Driver Screening Best Practices",
        url: "/blog/transportation/dot-compliance-screening",
        date: "December 8, 2024"
      },
      {
        title: "Reducing Transportation Safety Risks Through Background Verification",
        url: "/blog/transportation/safety-risk-reduction",
        date: "November 20, 2024"
      },
      {
        title: "Fleet Management and Driver Compliance Monitoring",
        url: "/blog/transportation/fleet-management-compliance",
        date: "November 3, 2024"
      }
    ],

    otherIndustries: [
      { name: "Gig Economy", link: "/industry/gig-economy" },
      { name: "Manufacturing", link: "/industry/manufacturing" },
      { name: "Facility Management", link: "/industry/facility-management" },
      { name: "Food & Beverage", link: "/industry/food-beverage" },
      { name: "Financial Services", link: "/industry/financial-services" },
      { name: "Insurance", link: "/industry/insurance" },
      { name: "Corporate Services", link: "/industry/corporate-services" }
    ]
  };

  return <IndustryPageTemplate {...industryData} />;
};

export default Transportation;
