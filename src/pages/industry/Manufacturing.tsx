
import IndustryPageTemplate from "@/components/industry/IndustryPageTemplate";
import { Factory, Shield, Users, CheckCircle, AlertTriangle, FileText, TrendingUp, Lock } from "lucide-react";

const Manufacturing = () => {
  const industryData = {
    industryName: "Manufacturing",
    heroImage: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1200&h=600&fit=crop",
    description: "Safety-focused background verification for manufacturing workers, quality control staff, and industrial personnel with emphasis on workplace safety and technical competency.",
    
    outcomes: [
      "Enhanced workplace safety through comprehensive screening of production and maintenance personnel",
      "Improved OSHA compliance and reduced workplace incidents through proper safety certification verification",
      "Better quality control through verified technical skills and certification validation",
      "Reduced liability risks through thorough background checks for equipment operators and safety personnel",
      "Faster hiring for skilled positions with streamlined technical certification verification",
      "Strengthened security for sensitive manufacturing processes through comprehensive personnel screening"
    ],

    businessImpact: {
      title: "Business Impact in Manufacturing",
      stats: [
        { value: "70%", label: "Reduction in Safety Incidents" },
        { value: "55%", label: "Faster Skilled Worker Hiring" },
        { value: "45%", label: "Lower Workers' Comp Claims" }
      ],
      description: "Our manufacturing verification solutions help companies maintain the highest safety standards while efficiently scaling their skilled workforce."
    },

    differentiators: [
      "Industry-specific safety certification verification including OSHA, forklift, and equipment operation licenses",
      "Technical skills assessment and trade certification validation for specialized manufacturing roles",
      "Integration with safety training databases for comprehensive certification tracking and monitoring",
      "Specialized screening for security clearances and sensitive manufacturing environment access",
      "Ongoing monitoring of safety violations and certification renewals with automatic alerts",
      "Customized verification packages for different manufacturing sectors including automotive, aerospace, and electronics"
    ],

    useCases: [
      {
        title: "Production Worker Verification",
        description: "Comprehensive screening for assembly line workers, machine operators, and production personnel.",
        benefits: [
          "Safety training certification validation and compliance verification",
          "Equipment operation license verification for specialized machinery",
          "Criminal background screening with focus on workplace safety violations",
          "Drug and alcohol testing compliance for safety-sensitive positions"
        ]
      },
      {
        title: "Quality Control Staff Screening",
        description: "Specialized verification for quality inspectors, testing personnel, and compliance officers.",
        benefits: [
          "Technical certification and quality control training validation",
          "Industry-specific certification verification for ISO and quality standards",
          "Educational background verification for technical and engineering roles",
          "Previous manufacturing experience and performance reference validation"
        ]
      },
      {
        title: "Safety Officer and Supervisor Verification",
        description: "Complete background checks for safety managers, supervisors, and industrial hygienists.",
        benefits: [
          "Professional safety certification and OSHA training verification",
          "Management experience validation in manufacturing environments",
          "Emergency response and first aid certification checks",
          "Regulatory compliance training and certification validation"
        ]
      }
    ],

    productFeatures: [
      {
        title: "Safety Certification Tracking",
        description: "Comprehensive monitoring of OSHA certifications, safety training, and equipment operation licenses.",
        icon: Shield
      },
      {
        title: "Technical Skills Verification",
        description: "Validation of trade certifications, technical training, and specialized manufacturing skills.",
        icon: CheckCircle
      },
      {
        title: "Compliance Monitoring",
        description: "Real-time tracking of regulatory compliance, safety requirements, and certification renewals.",
        icon: FileText
      },
      {
        title: "Incident Screening",
        description: "Background checks with focus on workplace safety violations and industrial accidents.",
        icon: AlertTriangle
      },
      {
        title: "Workforce Management",
        description: "Centralized dashboard for tracking certifications and compliance across manufacturing facilities.",
        icon: Users
      },
      {
        title: "Security Clearance Processing",
        description: "Specialized verification for sensitive manufacturing environments and defense contractors.",
        icon: Lock
      }
    ],

    customerStory: {
      company: "Advanced Manufacturing Solutions",
      role: "Plant Safety Manager",
      quote: "Since implementing Gigin's manufacturing verification system, we've seen a dramatic reduction in workplace incidents and achieved our best OSHA compliance record ever.",
      result: "75% reduction in workplace incidents, perfect OSHA compliance record, 50% faster skilled hiring"
    },

    specificChecks: [
      {
        name: "OSHA Safety Certification Verification",
        description: "Validation of OSHA 10/30-hour training, safety certifications, and workplace safety compliance."
      },
      {
        name: "Equipment Operation License Check",
        description: "Verification of forklift, crane, welding, and specialized machinery operation certifications."
      },
      {
        name: "Technical Trade Certification",
        description: "Validation of trade-specific certifications including welding, electrical, mechanical, and industrial skills."
      },
      {
        name: "Drug & Alcohol Testing Compliance",
        description: "Verification of completed drug and alcohol testing for safety-sensitive manufacturing positions."
      },
      {
        name: "Criminal Background - Safety Focus",
        description: "Background screening with emphasis on workplace violence, safety violations, and theft prevention."
      },
      {
        name: "Industrial Experience Verification",
        description: "Detailed validation of previous manufacturing and industrial employment with safety record review."
      },
      {
        name: "Quality Control Certification",
        description: "Verification of quality control training, ISO certification, and inspection qualifications."
      },
      {
        name: "Security Clearance Validation",
        description: "Processing and verification of government security clearances for defense and sensitive manufacturing."
      }
    ],

    blogResources: [
      {
        title: "Manufacturing Safety and Background Screening Best Practices",
        url: "/blog/manufacturing/safety-screening-best-practices",
        date: "December 1, 2024"
      },
      {
        title: "Technical Skills Verification in Manufacturing Hiring",
        url: "/blog/manufacturing/technical-skills-verification",
        date: "November 12, 2024"
      },
      {
        title: "OSHA Compliance Through Proper Employee Screening",
        url: "/blog/manufacturing/osha-compliance-screening",
        date: "October 25, 2024"
      }
    ],

    otherIndustries: [
      { name: "Transportation", link: "/industry/transportation" },
      { name: "Facility Management", link: "/industry/facility-management" },
      { name: "Corporate Services", link: "/industry/corporate-services" },
      { name: "Food & Beverage", link: "/industry/food-beverage" },
      { name: "Gig Economy", link: "/industry/gig-economy" },
      { name: "Financial Services", link: "/industry/financial-services" },
      { name: "Insurance", link: "/industry/insurance" }
    ]
  };

  return <IndustryPageTemplate {...industryData} />;
};

export default Manufacturing;
