
import IndustryPageTemplate from "@/components/industry/IndustryPageTemplate";
import { Shield, Clock, Users, CheckCircle, Database, FileText, Lock, AlertTriangle } from "lucide-react";

const FacilityManagement = () => {
  const industryData = {
    industryName: "Facility Management",
    heroImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=600&fit=crop",
    description: "Comprehensive background verification solutions for facility management companies, ensuring safety, security, and compliance across all operations.",
    
    outcomes: [
      "Enhanced security through thorough background screening of maintenance staff, security personnel, and cleaning crews",
      "Reduced liability risks and improved compliance with industry regulations and client requirements",
      "Faster hiring cycles with automated verification processes, reducing time-to-hire by up to 60%",
      "Improved client trust and satisfaction through transparent verification reporting",
      "Lower employee turnover rates through better candidate quality assessment",
      "Streamlined onboarding process with integrated verification workflows"
    ],

    businessImpact: {
      title: "Measurable Business Impact",
      stats: [
        { value: "85%", label: "Reduction in Security Incidents" },
        { value: "60%", label: "Faster Hiring Process" },
        { value: "40%", label: "Lower Employee Turnover" }
      ],
      description: "Our comprehensive verification process has helped facility management companies achieve significant improvements in security, efficiency, and employee retention."
    },

    differentiators: [
      "Industry-specific verification checks tailored for facility management roles including security clearances and technical certifications",
      "Real-time verification status updates and alerts for ongoing employee monitoring and compliance",
      "Integration with major facility management software and HRMS platforms for seamless workflow",
      "24/7 customer support with dedicated account managers who understand facility management challenges",
      "Comprehensive adverse case management with immediate notifications for critical findings",
      "Customizable verification packages based on client requirements and site-specific security needs"
    ],

    useCases: [
      {
        title: "Security Personnel Verification",
        description: "Comprehensive screening for security guards, access control operators, and surveillance staff working in sensitive facilities.",
        benefits: [
          "Criminal background checks with county, state, and federal databases",
          "Security license verification and ongoing monitoring",
          "Reference checks from previous security employers",
          "Drug screening and periodic re-screening programs"
        ]
      },
      {
        title: "Maintenance Staff Screening",
        description: "Thorough verification for maintenance technicians, HVAC specialists, and repair personnel with access to client facilities.",
        benefits: [
          "Technical certification verification and skills assessment",
          "Employment history validation with previous contractors",
          "Safety training records and compliance verification",
          "Identity verification and right-to-work confirmation"
        ]
      },
      {
        title: "Cleaning Crew Background Checks",
        description: "Essential screening for janitorial staff and cleaning personnel working in office buildings, healthcare facilities, and educational institutions.",
        benefits: [
          "Criminal history screening with focus on theft and property crimes",
          "Employment verification and performance history",
          "Health and safety certification checks",
          "Immigration status and work authorization verification"
        ]
      }
    ],

    productFeatures: [
      {
        title: "Multi-Level Security Clearance",
        description: "Tiered verification packages for different security levels from basic facility access to high-security government buildings.",
        icon: Shield
      },
      {
        title: "Real-Time Monitoring",
        description: "Continuous monitoring of employee records with instant alerts for any new criminal activity or license suspensions.",
        icon: AlertTriangle
      },
      {
        title: "Compliance Dashboard",
        description: "Centralized dashboard for tracking verification status, renewal dates, and compliance requirements across all employees.",
        icon: Database
      },
      {
        title: "Mobile Verification",
        description: "Mobile app for on-site verification checks and instant access to employee background information.",
        icon: Users
      },
      {
        title: "Document Management",
        description: "Secure storage and management of all verification documents with audit trails and access controls.",
        icon: FileText
      },
      {
        title: "Quick Turnaround",
        description: "Fast-track verification options for urgent hiring needs with results available within 24-48 hours.",
        icon: Clock
      }
    ],

    customerStory: {
      company: "SecureSpace Facility Solutions",
      role: "HR Director",
      quote: "Gigin's verification platform has transformed our hiring process. We've seen a 70% reduction in security incidents and our clients have noticed the improved quality of our staff.",
      result: "40% faster hiring process, 85% reduction in security incidents, improved client satisfaction scores"
    },

    specificChecks: [
      {
        name: "Security License Verification",
        description: "Verification of state-issued security guard licenses, armed security permits, and ongoing license status monitoring."
      },
      {
        name: "Technical Certification Checks",
        description: "Validation of HVAC certifications, electrical licenses, plumbing credentials, and other trade-specific qualifications."
      },
      {
        name: "Facility Access History",
        description: "Previous employment verification with focus on facility access roles and any security-related incidents."
      },
      {
        name: "Criminal Background - Property Crimes",
        description: "Comprehensive criminal screening with emphasis on theft, burglary, property damage, and other facility-related offenses."
      },
      {
        name: "Drug Screening & Testing",
        description: "Pre-employment and random drug testing programs with instant result reporting and ongoing monitoring."
      },
      {
        name: "Reference Verification - Supervisory",
        description: "Detailed reference checks with previous supervisors focusing on reliability, trustworthiness, and job performance."
      },
      {
        name: "Immigration Status Check",
        description: "E-Verify and I-9 compliance verification ensuring all employees are authorized to work in the United States."
      },
      {
        name: "Safety Training Verification",
        description: "Validation of OSHA training, safety certifications, and compliance with facility-specific safety requirements."
      }
    ],

    blogResources: [
      {
        title: "Best Practices for Facility Management Background Checks",
        url: "/blog/facility-management/best-practices-background-checks",
        date: "December 15, 2024"
      },
      {
        title: "Security Compliance in Modern Facility Management",
        url: "/blog/facility-management/security-compliance-guide",
        date: "November 28, 2024"
      },
      {
        title: "Reducing Liability Through Proper Employee Screening",
        url: "/blog/facility-management/reducing-liability-screening",
        date: "November 10, 2024"
      }
    ],

    otherIndustries: [
      { name: "Food & Beverage", link: "/industry/food-beverage" },
      { name: "Transportation", link: "/industry/transportation" },
      { name: "Healthcare", link: "/industry/healthcare" },
      { name: "Retail", link: "/industry/retail" },
      { name: "Manufacturing", link: "/industry/manufacturing" },
      { name: "Financial Services", link: "/industry/financial-services" },
      { name: "Education", link: "/industry/education" },
      { name: "Technology", link: "/industry/technology" }
    ]
  };

  return <IndustryPageTemplate {...industryData} />;
};

export default FacilityManagement;
