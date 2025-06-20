
import IndustryPageTemplate from "@/components/industry/IndustryPageTemplate";
import { DollarSign, Shield, Lock, CheckCircle, Users, FileText, TrendingUp, AlertTriangle } from "lucide-react";

const FinancialServices = () => {
  const industryData = {
    industryName: "Financial Services",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop",
    description: "Stringent background verification for banking, investment, and financial sector employees with comprehensive regulatory compliance and risk management focus.",
    
    outcomes: [
      "Enhanced regulatory compliance through comprehensive FINRA, SEC, and banking regulation adherence",
      "Reduced financial fraud risk through thorough credit and financial background verification",
      "Improved customer trust and regulatory standing through verified, qualified financial professionals",
      "Faster licensing verification with real-time monitoring of professional certifications and renewals",
      "Better risk management through ongoing monitoring of employee financial status and violations",
      "Streamlined onboarding for licensed professionals with automated compliance documentation"
    ],

    businessImpact: {
      title: "Business Impact in Financial Services",
      stats: [
        { value: "95%", label: "Regulatory Compliance Rate" },
        { value: "80%", label: "Reduction in Fraud Risk" },
        { value: "60%", label: "Faster License Verification" }
      ],
      description: "Our financial services verification ensures the highest standards of compliance while protecting your institution from regulatory and financial risks."
    },

    differentiators: [
      "FINRA and SEC compliance expertise with automated license verification and monitoring systems",
      "Comprehensive financial background checks including credit history, bankruptcy, and financial violations",
      "Real-time monitoring of professional licenses with automatic alerts for suspensions and violations",
      "Integration with regulatory databases for ongoing compliance tracking and reporting",
      "Specialized screening for fiduciary responsibilities and client-facing financial roles",
      "Advanced fraud detection capabilities with continuous monitoring of financial crime databases"
    ],

    useCases: [
      {
        title: "Licensed Financial Professional Verification",
        description: "Complete screening for financial advisors, investment professionals, and licensed banking personnel.",
        benefits: [
          "FINRA Series license verification and status monitoring",
          "SEC registration and compliance history validation",
          "Professional certification and continuing education verification",
          "Client complaint and regulatory violation history review"
        ]
      },
      {
        title: "Banking Personnel Screening",
        description: "Comprehensive background checks for bank employees, loan officers, and customer-facing staff.",
        benefits: [
          "Financial background and credit history verification",
          "Criminal background screening with focus on financial crimes",
          "Employment verification with previous financial institutions",
          "Regulatory compliance and training certification validation"
        ]
      },
      {
        title: "Investment Firm Employee Verification",
        description: "Specialized screening for investment advisors, portfolio managers, and institutional sales staff.",
        benefits: [
          "Investment advisor registration and compliance verification",
          "Educational background and professional qualification validation",
          "Regulatory examination history and violation screening",
          "Fiduciary responsibility and ethics training certification"
        ]
      }
    ],

    productFeatures: [
      {
        title: "Regulatory Compliance Dashboard",
        description: "Centralized monitoring of all regulatory requirements, license renewals, and compliance deadlines.",
        icon: Shield
      },
      {
        title: "Financial Background Analysis",
        description: "Comprehensive review of credit history, financial stability, and bankruptcy records.",
        icon: TrendingUp
      },
      {
        title: "License Monitoring System",
        description: "Real-time tracking of professional licenses with automatic renewal and violation alerts.",
        icon: CheckCircle
      },
      {
        title: "Fraud Detection",
        description: "Advanced screening against financial crime databases and regulatory violation records.",
        icon: AlertTriangle
      },
      {
        title: "Compliance Reporting",
        description: "Automated generation of compliance reports for regulatory audits and internal reviews.",
        icon: FileText
      },
      {
        title: "Secure Data Management",
        description: "Bank-level security for sensitive financial information with encrypted data storage.",
        icon: Lock
      }
    ],

    customerStory: {
      company: "Premier Investment Group",
      role: "Chief Compliance Officer",
      quote: "Gigin's financial services verification platform has streamlined our compliance process and eliminated regulatory violations. Our audit results have never been better.",
      result: "Zero regulatory violations, 70% faster compliance processing, improved audit scores"
    },

    specificChecks: [
      {
        name: "FINRA License Verification",
        description: "Comprehensive validation of FINRA registrations, Series licenses, and compliance status."
      },
      {
        name: "SEC Registration Check",
        description: "Verification of SEC registrations, investment advisor status, and regulatory compliance history."
      },
      {
        name: "Financial Background Review",
        description: "Detailed analysis of credit history, financial stability, bankruptcies, and debt obligations."
      },
      {
        name: "Criminal Background - Financial Crimes Focus",
        description: "Screening with emphasis on financial crimes, fraud, embezzlement, and white-collar offenses."
      },
      {
        name: "Professional Certification Validation",
        description: "Verification of CFP, CFA, CPA, and other relevant financial industry certifications."
      },
      {
        name: "Regulatory Violation History",
        description: "Review of disciplinary actions, client complaints, and regulatory enforcement history."
      },
      {
        name: "Educational Background Verification",
        description: "Validation of degrees, professional education, and continuing education requirements."
      },
      {
        name: "Employment History - Financial Industry",
        description: "Comprehensive verification of previous employment with financial institutions and firms."
      }
    ],

    blogResources: [
      {
        title: "FINRA Compliance and Background Screening Requirements",
        url: "/blog/financial-services/finra-compliance-screening",
        date: "December 5, 2024"
      },
      {
        title: "Financial Crime Prevention Through Background Verification",
        url: "/blog/financial-services/financial-crime-prevention",
        date: "November 18, 2024"
      },
      {
        title: "Best Practices for Financial Services Hiring",
        url: "/blog/financial-services/hiring-best-practices",
        date: "November 1, 2024"
      }
    ],

    otherIndustries: [
      { name: "Insurance", link: "/industry/insurance" },
      { name: "Corporate Services", link: "/industry/corporate-services" },
      { name: "Facility Management", link: "/industry/facility-management" },
      { name: "Food & Beverage", link: "/industry/food-beverage" },
      { name: "Gig Economy", link: "/industry/gig-economy" },
      { name: "Transportation", link: "/industry/transportation" },
      { name: "Manufacturing", link: "/industry/manufacturing" }
    ]
  };

  return <IndustryPageTemplate {...industryData} />;
};

export default FinancialServices;
