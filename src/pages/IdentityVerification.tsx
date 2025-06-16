
import VerificationCheckPage from "@/components/VerificationCheckPage";
import { Shield } from "lucide-react";

const IdentityVerification = () => {
  const pageData = {
    title: "Identity Checks & KYC",
    heroSubtitle: "AI-powered identity verification ensures fast and accurate validation based on documents, removing fraud alerts and identity theft risks.",
    heroImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
    icon: Shield,
    aboutDescription: "Our Identity Checks & KYC solution leverages advanced AI technology to verify individual identities through comprehensive document analysis and biometric verification. This process ensures that the person you're hiring is who they claim to be, reducing the risk of identity fraud and ensuring compliance with regulatory requirements.",
    whyImportant: [
      "Prevents identity fraud and impersonation in the hiring process",
      "Ensures compliance with KYC regulations and legal requirements",
      "Builds trust between employers and candidates from the start",
      "Reduces liability risks associated with hiring unverified individuals",
      "Protects company reputation and maintains security standards",
      "Streamlines onboarding with verified identity information"
    ],
    useCases: [
      {
        title: "Financial Services",
        description: "Banks, insurance companies, and fintech startups require stringent identity verification for regulatory compliance and fraud prevention."
      },
      {
        title: "Healthcare Industry",
        description: "Hospitals and healthcare providers need verified identities for staff handling sensitive patient information and controlled substances."
      },
      {
        title: "Government Positions",
        description: "Public sector roles require thorough identity verification for security clearances and access to sensitive information."
      },
      {
        title: "Remote Work Verification",
        description: "Companies hiring remote employees globally need to verify identities across different jurisdictions and document types."
      }
    ],
    gapToday: "Traditional identity verification methods are slow, manual, and prone to human error. Many organizations still rely on basic document checks that can be easily forged or manipulated. The lack of real-time verification leads to delays in hiring and increased risk of fraud. Additionally, inconsistent verification standards across different departments create security vulnerabilities.",
    howItWorks: [
      "Upload identity documents (passport, driver's license, national ID)",
      "AI analyzes document authenticity and extracts key information",
      "Biometric verification through facial recognition technology",
      "Cross-reference with government databases and watchlists",
      "Generate comprehensive verification report with risk assessment",
      "Instant approval or flagging for manual review"
    ],
    faqs: [
      {
        question: "What documents are accepted for identity verification?",
        answer: "We accept government-issued photo IDs including passports, driver's licenses, national identity cards, and military IDs. Our AI can process documents from over 200 countries and territories."
      },
      {
        question: "How long does the identity verification process take?",
        answer: "Most identity verifications are completed within 30 seconds to 2 minutes. Complex cases that require manual review may take up to 24 hours."
      },
      {
        question: "Is the identity verification process GDPR compliant?",
        answer: "Yes, our identity verification solution is fully GDPR compliant. We implement data minimization principles and provide clear consent mechanisms for data processing."
      },
      {
        question: "What happens if someone fails identity verification?",
        answer: "Failed verifications are flagged for manual review. We provide detailed reasons for failure and allow candidates to resubmit with corrected documentation if appropriate."
      },
      {
        question: "Can identity verification detect deepfakes and AI-generated images?",
        answer: "Yes, our advanced AI technology includes deepfake detection capabilities and can identify artificially generated or manipulated images with high accuracy."
      }
    ]
  };

  return <VerificationCheckPage {...pageData} />;
};

export default IdentityVerification;
