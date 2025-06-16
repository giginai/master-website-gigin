
import VerificationCheckPage from "@/components/VerificationCheckPage";
import { Building } from "lucide-react";

const EmploymentVerification = () => {
  const pageData = {
    title: "Employment & Experience Verification",
    heroSubtitle: "AI-powered employment history validation with multi-source database verification and automated cross-checking of job roles, tenure, and salary analysis.",
    heroImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
    icon: Building,
    aboutDescription: "Our Employment & Experience Verification service uses advanced AI to validate candidate work history, job roles, employment duration, and salary information. We cross-reference multiple data sources to provide accurate and comprehensive employment verification.",
    whyImportant: [
      "Prevents resume fraud and false employment claims",
      "Validates actual job responsibilities and achievements",
      "Confirms employment dates and reasons for leaving",
      "Verifies salary information for compensation benchmarking",
      "Ensures candidates have relevant experience for the role",
      "Reduces bad hires and associated costs"
    ],
    useCases: [
      {
        title: "Senior Management Roles",
        description: "Executive and management positions require thorough verification of leadership experience and career progression."
      },
      {
        title: "Specialized Technical Roles",
        description: "IT, engineering, and technical positions need validation of specific skills and project experience."
      },
      {
        title: "Sales Positions",
        description: "Sales roles require verification of achievements, targets met, and customer relationship management experience."
      },
      {
        title: "Contract and Gig Workers",
        description: "Freelancers and contractors need verification of project history and client testimonials."
      }
    ],
    gapToday: "Many employers struggle with inaccurate resumes, with studies showing up to 40% of candidates embellish their employment history. Traditional verification methods are slow, relying on HR departments that may not respond promptly. Companies often lack the resources to verify every aspect of employment history, leading to costly bad hires.",
    howItWorks: [
      "Collect employment history details from candidate",
      "Contact previous employers through multiple channels",
      "Cross-reference with employment databases and social networks",
      "AI analyzes employment patterns and identifies discrepancies",
      "Verify job titles, responsibilities, and performance",
      "Generate comprehensive employment verification report"
    ],
    faqs: [
      {
        question: "What information is verified during employment checks?",
        answer: "We verify job titles, employment dates, salary/compensation, job responsibilities, performance ratings, and reasons for leaving previous positions."
      },
      {
        question: "How long does employment verification take?",
        answer: "Most employment verifications are completed within 2-5 business days, though some may take longer depending on employer responsiveness."
      },
      {
        question: "What if a previous employer doesn't respond?",
        answer: "We use multiple verification methods including alternative contacts, public records, and third-party databases to gather employment information."
      },
      {
        question: "Can you verify international employment history?",
        answer: "Yes, we have global capabilities and can verify employment history from companies worldwide, though timelines may vary by country."
      },
      {
        question: "What happens if employment information cannot be verified?",
        answer: "We clearly indicate what information could not be verified and provide reasons, allowing employers to make informed decisions about next steps."
      }
    ]
  };

  return <VerificationCheckPage {...pageData} />;
};

export default EmploymentVerification;
