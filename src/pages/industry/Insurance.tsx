
import IndustryPageTemplate from "@/components/industry/IndustryPageTemplate";
import { Shield, Users, CheckCircle, FileText, TrendingUp, Lock, AlertTriangle, Star } from "lucide-react";

const Insurance = () => {
  const industryData = {
    industryName: "Insurance",
    heroImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=600&fit=crop",
    description: "Comprehensive background verification for insurance agents, underwriters, claims processors, and risk assessment professionals with emphasis on trustworthiness and regulatory compliance.",
    
    outcomes: [
      "Enhanced regulatory compliance through thorough licensing verification and ongoing monitoring",
      "Reduced fraud risk through comprehensive background screening of claims and underwriting staff",
      "Improved customer confidence through verified, licensed insurance professionals",
      "Faster agent onboarding with streamlined license verification and appointment processes",
      "Better risk management through continuous monitoring of agent compliance and violations",
      "Strengthened brand reputation through qualified, trustworthy insurance representatives"
    ],

    businessImpact: {
      title: "Business Impact in Insurance",
      stats: [
        { value: "85%", label: "Reduction in Compliance Issues" },
        { value: "70%", label: "Faster Agent Licensing" },
        { value: "40%", label: "Lower Fraud Incidents" }
      ],
      description: "Our insurance verification solutions help companies maintain regulatory compliance while building trust with policyholders through verified professionals."
    },

    differentiators: [
      "State insurance license verification with real-time monitoring across all 50 states",
      "Specialized screening for insurance fraud detection and claims processing positions",
      "Integration with NIPR and state insurance department databases for comprehensive license tracking",
      "Ongoing monitoring of professional licenses with automatic alerts for suspensions and violations",
      "Customized verification packages for different insurance sectors including life, health, property, and casualty",
      "Advanced compliance reporting and audit trail capabilities for regulatory examinations"
    ],

    useCases: [
      {
        title: "Licensed Insurance Agent Verification",
        description: "Complete screening for insurance agents, brokers, and sales representatives across all insurance lines.",
        benefits: [
          "State insurance license verification and appointment status confirmation",
          "Continuing education requirement validation and compliance tracking",
          "Professional conduct history and disciplinary action review",
          "E&O insurance coverage verification and claims history analysis"
        ]
      },
      {
        title: "Claims Processing Staff Screening",
        description: "Comprehensive background checks for claims adjusters, investigators, and processing personnel.",
        benefits: [
          "Criminal background screening with focus on fraud and financial crimes",
          "Professional certification validation for claims handling licenses",
          "Employment verification with previous insurance carriers",
          "Training certification for claims processing and investigation protocols"
        ]
      },
      {
        title: "Underwriting Personnel Verification",
        description: "Specialized screening for underwriters, risk assessors, and actuarial professionals.",
        benefits: [
          "Professional certification and designation verification",
          "Educational background validation for technical roles",
          "Financial background screening for positions with financial authority",
          "Industry experience verification and performance reference checks"
        ]
      }
    ],

    productFeatures: [
      {
        title: "License Management System",
        description: "Comprehensive tracking of insurance licenses across multiple states with automatic renewal monitoring.",
        icon: Shield
      },
      {
        title: "Compliance Monitoring",
        description: "Real-time monitoring of regulatory compliance, continuing education, and professional requirements.",
        icon: CheckCircle
      },
      {
        title: "Fraud Detection Screening",
        description: "Advanced screening against insurance fraud databases and regulatory violation records.",
        icon: AlertTriangle
      },
      {
        title: "Multi-State Tracking",
        description: "Centralized management of licenses and appointments across multiple state jurisdictions.",
        icon: Star
      },
      {
        title: "Audit Documentation",
        description: "Comprehensive record keeping and compliance documentation for regulatory examinations.",
        icon: FileText
      },
      {
        title: "Performance Analytics",
        description: "Advanced reporting and analytics for license compliance and verification metrics.",
        icon: TrendingUp
      }
    ],

    customerStory: {
      company: "United Insurance Partners",
      role: "Compliance Director",
      quote: "Gigin's insurance verification platform has transformed our agent management process. We've eliminated license compliance issues and reduced onboarding time by 65%.",
      result: "Zero license violations, 65% faster onboarding, improved regulatory examination results"
    },

    specificChecks: [
      {
        name: "State Insurance License Verification",
        description: "Comprehensive validation of insurance licenses, appointments, and status across all relevant states."
      },
      {
        name: "NIPR Database Check",
        description: "Verification through National Insurance Producer Registry for comprehensive licensing history."
      },
      {
        name: "Professional Designation Validation",
        description: "Verification of industry designations such as CLU, ChFC, CPCU, and other professional certifications."
      },
      {
        name: "Regulatory Violation History",
        description: "Review of disciplinary actions, license suspensions, and regulatory enforcement history."
      },
      {
        name: "Criminal Background - Insurance Fraud Focus",
        description: "Background screening with emphasis on insurance fraud, financial crimes, and fiduciary violations."
      },
      {
        name: "Continuing Education Compliance",
        description: "Verification of completed continuing education requirements and training certifications."
      },
      {
        name: "E&O Insurance Verification",
        description: "Validation of errors and omissions insurance coverage and claims history review."
      },
      {
        name: "Employment History - Insurance Industry",
        description: "Detailed verification of previous insurance industry employment with performance references."
      }
    ],

    blogResources: [
      {
        title: "Insurance License Compliance and Verification Best Practices",
        url: "/blog/insurance/license-compliance-best-practices",
        date: "December 3, 2024"
      },
      {
        title: "Fraud Prevention in Insurance Through Background Screening",
        url: "/blog/insurance/fraud-prevention-screening",
        date: "November 15, 2024"
      },
      {
        title: "Multi-State Insurance License Management Strategies",
        url: "/blog/insurance/multi-state-license-management",
        date: "October 28, 2024"
      }
    ],

    otherIndustries: [
      { name: "Financial Services", link: "/industry/financial-services" },
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

export default Insurance;
