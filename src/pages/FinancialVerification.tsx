
import VerificationCheckPage from "@/components/VerificationCheckPage";
import { Globe } from "lucide-react";

const FinancialVerification = () => {
  const pageData = {
    title: "Financial Background Verification",
    heroSubtitle: "Comprehensive financial history checks including credit scores, bankruptcy records, and financial stability assessment for high-trust positions.",
    heroImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
    icon: Globe,
    aboutDescription: "Our Financial Background Verification service provides comprehensive financial screening including credit history, bankruptcy records, liens, and overall financial stability assessment. This is crucial for positions involving financial responsibility or access to company assets.",
    whyImportant: [
      "Reduces risk of financial fraud and embezzlement",
      "Ensures financial responsibility for money-handling roles",
      "Identifies potential security risks from financial stress",
      "Meets regulatory requirements for financial sector jobs",
      "Protects company assets and financial integrity",
      "Enables informed decisions for fiduciary positions"
    ],
    useCases: [
      {
        title: "Financial Services",
        description: "Bank tellers, financial advisors, and investment professionals require clean financial backgrounds to handle client money and sensitive financial information."
      },
      {
        title: "Accounting Roles",
        description: "Accountants, bookkeepers, and CFOs need financial verification to ensure trustworthiness with company finances."
      },
      {
        title: "Retail Management",
        description: "Store managers and cash handlers require financial screening to reduce theft and fraud risks."
      },
      {
        title: "Executive Positions",
        description: "C-level executives and board members need financial verification to ensure fiduciary responsibility and stakeholder confidence."
      }
    ],
    gapToday: "Many organizations lack comprehensive financial screening processes, relying only on basic credit checks that miss important financial red flags. Traditional methods don't provide real-time updates on financial status changes, and companies often struggle to interpret financial data in the context of job relevance and legal compliance.",
    howItWorks: [
      "Obtain candidate consent for financial background check",
      "Access credit reports from major credit bureaus",
      "Search for bankruptcy filings, liens, and judgments",
      "Analyze debt-to-income ratios and financial patterns",
      "Check for recent financial distress or irregularities",
      "Generate comprehensive financial risk assessment report"
    ],
    faqs: [
      {
        question: "What financial information is included in the check?",
        answer: "We review credit scores, payment history, outstanding debts, bankruptcies, liens, judgments, and overall financial stability indicators."
      },
      {
        question: "Is candidate consent required for financial checks?",
        answer: "Yes, written consent is required for all financial background checks, and candidates must be informed of their rights under the Fair Credit Reporting Act."
      },
      {
        question: "How recent is the financial information?",
        answer: "We provide the most current financial information available, typically updated within 30 days of the credit reporting date."
      },
      {
        question: "Can poor credit disqualify a candidate?",
        answer: "Financial history should only impact hiring decisions when directly relevant to job duties. We provide guidance on legally compliant decision-making."
      },
      {
        question: "What if a candidate disputes financial information?",
        answer: "Candidates have the right to dispute inaccurate information. We provide clear processes for dispute resolution and correction of errors."
      }
    ]
  };

  return <VerificationCheckPage {...pageData} />;
};

export default FinancialVerification;
