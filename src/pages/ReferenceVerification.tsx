
import VerificationCheckPage from "@/components/VerificationCheckPage";
import { Users } from "lucide-react";

const ReferenceVerification = () => {
  const pageData = {
    title: "Reference & Character Verification",
    heroSubtitle: "AI-powered reference validation with automated contact verification and character assessment through multiple touchpoints and data sources.",
    heroImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop",
    icon: Users,
    aboutDescription: "Our Reference & Character Verification service conducts thorough reference checks with former colleagues, supervisors, and professional contacts. We use AI to analyze responses and identify patterns that provide insights into candidate character and work performance.",
    whyImportant: [
      "Validates candidate's work performance and behavior",
      "Provides insights into team collaboration and leadership skills",
      "Identifies potential red flags not visible in interviews",
      "Confirms cultural fit and work style compatibility",
      "Reduces turnover by ensuring realistic job expectations",
      "Enhances hiring confidence with third-party validation"
    ],
    useCases: [
      {
        title: "Management Positions",
        description: "Leadership roles require validation of management style, team building skills, and ability to drive results through others."
      },
      {
        title: "Team-Based Roles",
        description: "Positions requiring close collaboration need verification of teamwork skills and interpersonal effectiveness."
      },
      {
        title: "Client-Facing Positions",
        description: "Sales and customer service roles require confirmation of communication skills and customer relationship management abilities."
      },
      {
        title: "High-Stakes Roles",
        description: "Critical positions need comprehensive character assessment to ensure reliability and trustworthiness under pressure."
      }
    ],
    gapToday: "Traditional reference checks are often superficial, with many employers providing only basic employment confirmation due to legal concerns. Candidates sometimes provide references who aren't qualified to assess their work, and busy hiring managers may skip thorough reference checks due to time constraints.",
    howItWorks: [
      "Collect professional reference contacts from candidate",
      "Verify reference relationships and contact authenticity",
      "Conduct structured interviews with multiple references",
      "AI analyzes response patterns and identifies key insights",
      "Cross-reference feedback with job requirements",
      "Generate comprehensive character and performance assessment"
    ],
    faqs: [
      {
        question: "How many references do you typically contact?",
        answer: "We recommend contacting 3-5 professional references, including former supervisors, colleagues, and direct reports when possible."
      },
      {
        question: "What questions are asked during reference checks?",
        answer: "We ask about work performance, reliability, teamwork, communication skills, strengths, areas for improvement, and whether they would rehire the candidate."
      },
      {
        question: "What if references don't respond?",
        answer: "We make multiple contact attempts through different channels and can work with candidates to provide alternative references if needed."
      },
      {
        question: "Can personal references be included?",
        answer: "We focus primarily on professional references, but personal references may be included for entry-level positions or when professional references are limited."
      },
      {
        question: "How do you ensure reference authenticity?",
        answer: "We verify reference contact information, validate their relationship to the candidate, and use AI to detect potentially fraudulent responses."
      }
    ]
  };

  return <VerificationCheckPage {...pageData} />;
};

export default ReferenceVerification;
