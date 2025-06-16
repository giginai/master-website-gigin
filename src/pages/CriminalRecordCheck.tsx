
import VerificationCheckPage from "@/components/VerificationCheckPage";
import { FileCheck } from "lucide-react";

const CriminalRecordCheck = () => {
  const pageData = {
    title: "Criminal Record Checks",
    heroSubtitle: "Reliable international criminal record screening by AI scanning for court cases, legal disputes, and criminal sanctions for high-security roles.",
    heroImage: "https://axiazgzqwlxafnvdyzir.supabase.co/storage/v1/object/sign/website-images/Verification-Home/photo-1486312338219-ce68d2c6f44d?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wMmRlODRmMS1iNjFlLTRjNzQtYWZiMS1iNWEyNWY5MDAwNDgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWJzaXRlLWltYWdlcy9WZXJpZmljYXRpb24tSG9tZS9waG90by0xNDg2MzEyMzM4MjE5LWNlNjhkMmM2ZjQ0ZCIsImlhdCI6MTc0OTgwMjE0MSwiZXhwIjoxNzgxMzM4MTQxfQ.jQdxPd6ax74f7FZdTinRivUNliF-VCKZcnL7THsZ2Mg",
    icon: FileCheck,
    aboutDescription: "Our Criminal Record Checks provide comprehensive background screening through AI-powered analysis of criminal databases, court records, and legal proceedings. We ensure thorough vetting while maintaining compliance with local and international regulations.",
    whyImportant: [
      "Ensures workplace safety by identifying potential security risks",
      "Meets legal requirements for certain industries and positions",
      "Protects company assets and sensitive information",
      "Reduces liability in case of workplace incidents",
      "Maintains customer and stakeholder trust",
      "Enables informed hiring decisions based on complete information"
    ],
    useCases: [
      {
        title: "Security Personnel",
        description: "Security guards, private investigators, and law enforcement roles require clean criminal records to ensure public safety and trust."
      },
      {
        title: "Financial Sector",
        description: "Banks and financial institutions need to verify clean records for positions handling money, sensitive data, or financial transactions."
      },
      {
        title: "Education Sector",
        description: "Schools and educational institutions require criminal background checks for staff working with minors and vulnerable populations."
      },
      {
        title: "Healthcare Workers",
        description: "Medical professionals and healthcare support staff need screening to ensure patient safety and regulatory compliance."
      }
    ],
    gapToday: "Traditional criminal background checks are fragmented across jurisdictions, time-consuming, and often incomplete. Many organizations struggle with inconsistent screening standards, delayed results, and difficulty accessing international records. Manual processes are prone to errors and may miss recent convictions or ongoing legal proceedings.",
    howItWorks: [
      "Collect candidate consent and personal information",
      "Search multiple criminal databases and court records",
      "Cross-reference with international criminal databases",
      "AI analysis identifies potential matches and risk factors",
      "Manual verification of flagged results by legal experts",
      "Generate detailed report with recommendations and risk assessment"
    ],
    faqs: [
      {
        question: "What types of criminal records are included in the check?",
        answer: "We check for felonies, misdemeanors, pending criminal cases, warrants, sex offender registries, and terrorism watchlists across multiple jurisdictions."
      },
      {
        question: "How far back do criminal record checks go?",
        answer: "Standard checks cover 7-10 years, but this can be customized based on role requirements and local regulations. Some positions may require lifetime checks."
      },
      {
        question: "Are international criminal records included?",
        answer: "Yes, we have access to criminal databases in over 200 countries and can perform comprehensive international background checks."
      },
      {
        question: "What if a candidate has a criminal record?",
        answer: "We provide detailed information about the offense, allowing employers to make informed decisions based on the nature, severity, and relevance to the position."
      },
      {
        question: "How do you ensure compliance with local laws?",
        answer: "Our platform automatically applies local regulations and 'ban the box' laws, ensuring compliant screening practices in each jurisdiction."
      }
    ]
  };

  return <VerificationCheckPage {...pageData} />;
};

export default CriminalRecordCheck;
