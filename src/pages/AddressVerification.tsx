
import VerificationCheckPage from "@/components/VerificationCheckPage";
import { Eye } from "lucide-react";

const AddressVerification = () => {
  const pageData = {
    title: "Address & Residence Verification",
    heroSubtitle: "Real-time address validation and residence history verification using multiple databases and AI-powered cross-referencing for accuracy.",
    heroImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
    icon: Eye,
    aboutDescription: "Our Address & Residence Verification service validates candidate addresses and residence history using multiple data sources and AI-powered verification. This ensures accurate contact information and helps identify potential security risks or false information.",
    whyImportant: [
      "Ensures accurate contact information for employee records",
      "Validates candidate stability and reliability",
      "Identifies potential security risks from undisclosed addresses",
      "Supports compliance with employment law requirements",
      "Helps with tax and legal jurisdiction determinations",
      "Prevents fraud related to false address claims"
    ],
    useCases: [
      {
        title: "Remote Workers",
        description: "Companies hiring remote employees need to verify actual work locations for tax, legal, and security compliance."
      },
      {
        title: "Security-Sensitive Roles",
        description: "Positions requiring security clearances need thorough address verification to assess potential risks and foreign influences."
      },
      {
        title: "Regulated Industries",
        description: "Financial services and healthcare sectors require address verification for regulatory compliance and audit purposes."
      },
      {
        title: "International Hires",
        description: "Global organizations need to verify addresses across different countries for visa and work authorization purposes."
      }
    ],
    gapToday: "Many organizations rely on basic address verification that can be easily manipulated. Traditional methods don't validate residence history or identify temporary addresses used to hide actual locations. Companies often lack real-time verification capabilities and struggle with international address validation.",
    howItWorks: [
      "Collect current and previous address information from candidate",
      "Cross-reference with multiple address databases and public records",
      "Verify residence duration and occupancy status",
      "Check for discrepancies or suspicious address patterns",
      "Validate international addresses through local databases",
      "Generate comprehensive address verification report"
    ],
    faqs: [
      {
        question: "What types of addresses can be verified?",
        answer: "We verify residential addresses, mailing addresses, and work locations across most countries worldwide, including apartments, houses, and temporary accommodations."
      },
      {
        question: "How far back does address history go?",
        answer: "We typically verify address history for the past 5-7 years, though this can be customized based on role requirements and available data."
      },
      {
        question: "Can you verify international addresses?",
        answer: "Yes, we have global address verification capabilities and can validate addresses in most countries using local databases and verification methods."
      },
      {
        question: "What if a candidate has frequently moved?",
        answer: "Frequent moves aren't necessarily problematic, but we verify each address and look for patterns that might indicate fraud or security concerns."
      },
      {
        question: "How accurate is address verification?",
        answer: "Our multi-source verification approach achieves over 95% accuracy for current addresses and 85% accuracy for historical addresses."
      }
    ]
  };

  return <VerificationCheckPage {...pageData} />;
};

export default AddressVerification;
