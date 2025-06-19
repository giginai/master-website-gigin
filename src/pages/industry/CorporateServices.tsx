
import IndustryPageTemplate from "@/components/industry/IndustryPageTemplate";
import { Briefcase, Users, Shield, CheckCircle, TrendingUp, FileText, Lock, Star } from "lucide-react";

const CorporateServices = () => {
  const industryData = {
    industryName: "Corporate Services",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=600&fit=crop",
    description: "Executive and professional background verification for corporate roles, management positions, and office-based employees with emphasis on integrity and professional qualifications.",
    
    outcomes: [
      "Enhanced executive hiring through comprehensive C-suite and senior management background verification",
      "Improved professional integrity through thorough screening of finance, HR, and administrative personnel",
      "Reduced corporate liability through verified professional credentials and ethical background checks",
      "Faster hiring for professional roles with streamlined education and employment verification",
      "Better workplace culture through comprehensive reference and behavioral assessment verification",
      "Strengthened compliance through proper screening for regulatory and fiduciary responsibilities"
    ],

    businessImpact: {
      title: "Business Impact in Corporate Services",
      stats: [
        { value: "90%", label: "Executive Hiring Success Rate" },
        { value: "65%", label: "Faster Professional Verification" },
        { value: "80%", label: "Reduction in Workplace Issues" }
      ],
      description: "Our corporate verification solutions help companies build trustworthy, qualified leadership teams while maintaining the highest professional standards."
    },

    differentiators: [
      "Executive-level verification including comprehensive background checks for C-suite and senior management",
      "Professional credential verification including degrees, certifications, and industry-specific qualifications",
      "Advanced reference checking with detailed professional and character reference validation",
      "Social media and digital footprint screening for public-facing and leadership positions",
      "International verification capabilities for global corporate hiring and executive recruitment",
      "Confidential verification processes designed for sensitive executive and management positions"
    ],

    useCases: [
      {
        title: "Executive and C-Suite Verification",
        description: "Comprehensive screening for executives, directors, and senior management positions.",
        benefits: [
          "Advanced background investigation including financial and reputational screening",
          "Board position and directorship verification with conflict of interest analysis",
          "International background checks for global executive positions",
          "Media and public record screening for reputational risk assessment"
        ]
      },
      {
        title: "Professional Staff Screening",
        description: "Complete verification for managers, analysts, consultants, and professional service employees.",
        benefits: [
          "Educational background verification including degree and certification validation",
          "Professional license and certification verification for specialized roles",
          "Employment history verification with detailed performance reference checks",
          "Skills assessment and professional competency validation"
        ]
      },
      {
        title: "Administrative and Support Staff Verification",
        description: "Essential screening for office administrators, assistants, and corporate support personnel.",
        benefits: [
          "Criminal background screening appropriate for office environment access",
          "Employment verification and administrative skills validation",
          "Reference checks focused on reliability, trustworthiness, and work quality",
          "Basic financial screening for positions involving financial responsibilities"
        ]
      }
    ],

    productFeatures: [
      {
        title: "Executive Investigation Services",
        description: "Comprehensive investigation services for senior executive and board-level positions.",
        icon: Star
      },
      {
        title: "Educational Verification",
        description: "Global degree verification and academic credential validation for professional positions.",
        icon: CheckCircle
      },
      {
        title: "Professional Reference Network",
        description: "Extensive professional reference checking with industry-specific expertise.",
        icon: Users
      },
      {
        title: "Digital Footprint Analysis",
        description: "Social media and online presence screening for reputation and cultural fit assessment.",
        icon: TrendingUp
      },
      {
        title: "Confidential Processing",
        description: "Discreet verification processes designed for sensitive corporate and executive roles.",
        icon: Lock
      },
      {
        title: "Global Verification Network",
        description: "International verification capabilities for multinational corporate hiring needs.",
        icon: Briefcase
      }
    ],

    customerStory: {
      company: "Global Consulting Partners",
      role: "Chief Human Resources Officer",
      quote: "Gigin's corporate verification services have been instrumental in our executive hiring success. We've made better hires and avoided several potential issues through their comprehensive screening.",
      result: "95% executive hiring success rate, zero background-related issues, improved leadership quality"
    },

    specificChecks: [
      {
        name: "Executive Background Investigation",
        description: "Comprehensive investigation including financial, legal, and reputational screening for senior positions."
      },
      {
        name: "Educational Background Verification",
        description: "Global degree verification, academic credential validation, and educational achievement confirmation."
      },
      {
        name: "Professional License Validation",
        description: "Verification of professional licenses, certifications, and industry-specific qualifications."
      },
      {
        name: "Employment History - Executive Level",
        description: "Detailed verification of executive and management positions with performance and achievement validation."
      },
      {
        name: "Professional Reference Checks",
        description: "Comprehensive reference verification including professional, character, and industry references."
      },
      {
        name: "Financial Background Review",
        description: "Financial screening appropriate for fiduciary responsibilities and executive positions."
      },
      {
        name: "Social Media and Digital Screening",
        description: "Professional social media review and digital footprint analysis for reputation assessment."
      },
      {
        name: "Board and Directorship Verification",
        description: "Validation of board positions, directorship roles, and potential conflicts of interest."
      }
    ],

    blogResources: [
      {
        title: "Executive Hiring and Background Screening Best Practices",
        url: "/blog/corporate-services/executive-hiring-best-practices",
        date: "November 30, 2024"
      },
      {
        title: "Professional Credential Verification in Corporate Hiring",
        url: "/blog/corporate-services/professional-credential-verification",
        date: "November 10, 2024"
      },
      {
        title: "Building Trust Through Corporate Background Screening",
        url: "/blog/corporate-services/building-trust-screening",
        date: "October 22, 2024"
      }
    ],

    otherIndustries: [
      { name: "Financial Services", link: "/industry/financial-services" },
      { name: "Insurance", link: "/industry/insurance" },
      { name: "Facility Management", link: "/industry/facility-management" },
      { name: "Food & Beverage", link: "/industry/food-beverage" },
      { name: "Gig Economy", link: "/industry/gig-economy" },
      { name: "Transportation", link: "/industry/transportation" },
      { name: "Manufacturing", link: "/industry/manufacturing" }
    ]
  };

  return <IndustryPageTemplate {...industryData} />;
};

export default CorporateServices;
