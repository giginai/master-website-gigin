
import VerificationCheckPage from "@/components/VerificationCheckPage";
import { Search } from "lucide-react";

const SocialMediaScreening = () => {
  const pageData = {
    title: "Social Media & Digital Footprint Screening",
    heroSubtitle: "Automated behavioral screening for risk profile behavior analysis, online quality control for potential compliance violations, and digital reputation analysis.",
    heroImage: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
    icon: Search,
    aboutDescription: "Our Social Media & Digital Footprint Screening service analyzes candidates' online presence to identify potential risks, inappropriate behavior, or content that could impact your organization. We use AI to scan public social media profiles while respecting privacy and legal boundaries.",
    whyImportant: [
      "Protects company reputation from employee misconduct",
      "Identifies potential security risks and inappropriate behavior",
      "Ensures compliance with company values and culture",
      "Prevents hiring individuals with discriminatory views",
      "Reduces workplace harassment and conflict risks",
      "Maintains professional standards across the organization"
    ],
    useCases: [
      {
        title: "Customer-Facing Roles",
        description: "Sales, customer service, and public relations roles require employees who represent the company professionally online."
      },
      {
        title: "Leadership Positions",
        description: "Executives and managers need to maintain professional digital presence that aligns with company values."
      },
      {
        title: "Brand Ambassadors",
        description: "Marketing and communications roles require individuals with positive online presence and brand alignment."
      },
      {
        title: "Security-Sensitive Roles",
        description: "Positions with access to sensitive information need screening for potential security risks or foreign influences."
      }
    ],
    gapToday: "Many organizations lack systematic approaches to social media screening, leading to inconsistent hiring decisions. Manual social media checks are time-consuming and may miss important red flags. Companies often struggle to balance candidate privacy with risk assessment, and may inadvertently engage in discriminatory practices without proper guidelines.",
    howItWorks: [
      "Search for candidate's public social media profiles",
      "AI analyzes content for inappropriate behavior or risk factors",
      "Identify discriminatory language, illegal activities, or violence",
      "Check for potential security risks or conflicting interests",
      "Generate risk assessment with specific examples and recommendations",
      "Provide compliant reporting that respects privacy laws"
    ],
    faqs: [
      {
        question: "What social media platforms are screened?",
        answer: "We screen major platforms including Facebook, Twitter, LinkedIn, Instagram, TikTok, and other relevant social networks based on the position requirements."
      },
      {
        question: "Is social media screening legal?",
        answer: "Yes, screening public social media content is legal, but we ensure compliance with local privacy laws and employment regulations in each jurisdiction."
      },
      {
        question: "What types of content are flagged as concerning?",
        answer: "We flag illegal activities, discriminatory language, violence, inappropriate sexual content, substance abuse, and behavior that conflicts with professional standards."
      },
      {
        question: "How do you protect candidate privacy?",
        answer: "We only review publicly available content and follow strict guidelines to avoid protected class discrimination and privacy violations."
      },
      {
        question: "Can candidates be rejected based on social media content?",
        answer: "Rejection decisions should be based on job-relevant factors. We provide guidance on legally defensible decision-making based on social media findings."
      }
    ]
  };

  return <VerificationCheckPage {...pageData} />;
};

export default SocialMediaScreening;
