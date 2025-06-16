
import VerificationCheckPage from "@/components/VerificationCheckPage";
import { CheckCircle } from "lucide-react";

const EducationVerification = () => {
  const pageData = {
    title: "Education & Certification Verification",
    heroSubtitle: "Ensure confidence in candidate qualifications with fast verification processes, AI-assisted certificate authentication and degree validation.",
    heroImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop",
    icon: CheckCircle,
    aboutDescription: "Our Education & Certification Verification service validates academic credentials, professional certifications, and training programs. Using AI-powered verification and direct institution contacts, we ensure the authenticity of educational qualifications.",
    whyImportant: [
      "Prevents degree fraud and fake academic credentials",
      "Ensures candidates meet minimum educational requirements",
      "Validates specialized certifications and licenses",
      "Confirms training completion for compliance roles",
      "Protects against liability from unqualified hires",
      "Maintains professional standards and credibility"
    ],
    useCases: [
      {
        title: "Licensed Professionals",
        description: "Doctors, lawyers, engineers, and other licensed professionals require verification of degrees and professional certifications."
      },
      {
        title: "Academic Positions",
        description: "Universities and research institutions need thorough verification of advanced degrees and research credentials."
      },
      {
        title: "Technical Certifications",
        description: "IT, cybersecurity, and technical roles require validation of industry certifications and training programs."
      },
      {
        title: "Regulated Industries",
        description: "Healthcare, finance, and aviation industries have strict educational requirements that must be verified."
      }
    ],
    gapToday: "Educational credential fraud is increasing, with diploma mills and fake certification programs proliferating online. Traditional verification methods are slow and often incomplete, missing recent certifications or failing to detect sophisticated forgeries. Many organizations lack direct relationships with educational institutions for efficient verification.",
    howItWorks: [
      "Collect educational credentials and certification details",
      "Contact educational institutions and certification bodies directly",
      "Cross-reference with official databases and registries",
      "AI analyzes credential authenticity and identifies red flags",
      "Verify graduation dates, degrees, and academic performance",
      "Generate detailed education verification report"
    ],
    faqs: [
      {
        question: "What educational credentials can be verified?",
        answer: "We verify high school diplomas, undergraduate and graduate degrees, professional certifications, training certificates, and continuing education credits."
      },
      {
        question: "How long does education verification take?",
        answer: "Most education verifications are completed within 3-7 business days, though international institutions may take longer."
      },
      {
        question: "Can you verify international degrees?",
        answer: "Yes, we can verify degrees from institutions worldwide and provide credential evaluation services for international qualifications."
      },
      {
        question: "What if an educational institution has closed?",
        answer: "We maintain relationships with state education departments and accrediting bodies who often hold records for closed institutions."
      },
      {
        question: "How do you detect fake or fraudulent credentials?",
        answer: "Our AI system analyzes multiple factors including institution accreditation, document formatting, and cross-references with known diploma mills and fraudulent programs."
      }
    ]
  };

  return <VerificationCheckPage {...pageData} />;
};

export default EducationVerification;
