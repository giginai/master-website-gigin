
import IndustryPageTemplate from "@/components/industry/IndustryPageTemplate";
import { Users, Smartphone, Zap, CheckCircle, Clock, Shield, Star, Truck } from "lucide-react";

const GigEconomy = () => {
  const industryData = {
    industryName: "Gig Economy",
    heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop",
    description: "Rapid, reliable background verification for freelancers, delivery partners, and on-demand service providers with streamlined digital processes.",
    
    outcomes: [
      "Lightning-fast verification enabling same-day onboarding for gig workers and freelancers",
      "Reduced platform liability through comprehensive screening of on-demand service providers",
      "Enhanced customer trust and safety through verified driver and service provider profiles",
      "Automated re-screening and continuous monitoring for ongoing compliance and safety",
      "Scalable verification processes supporting high-volume gig worker acquisition",
      "Mobile-first verification experience optimized for gig worker convenience and accessibility"
    ],

    businessImpact: {
      title: "Business Impact in Gig Economy",
      stats: [
        { value: "80%", label: "Faster Worker Onboarding" },
        { value: "95%", label: "Customer Trust Increase" },
        { value: "50%", label: "Reduction in Safety Incidents" }
      ],
      description: "Our gig economy verification solutions enable platforms to scale rapidly while maintaining the highest safety and trust standards."
    },

    differentiators: [
      "Mobile-optimized verification process designed specifically for gig workers and freelancers",
      "Same-day verification capabilities with real-time status updates and instant notifications",
      "API integration with major gig platforms for seamless onboarding and workflow automation",
      "Continuous monitoring and re-screening alerts for ongoing compliance and risk management",
      "Multi-language support and global verification capabilities for international gig workers",
      "Specialized screening packages tailored for different gig economy sectors and platforms"
    ],

    useCases: [
      {
        title: "Delivery Driver Verification",
        description: "Comprehensive screening for food delivery, package delivery, and rideshare drivers.",
        benefits: [
          "Driving license verification and motor vehicle record checks",
          "Criminal background screening with focus on public safety",
          "Vehicle insurance validation and registration verification",
          "Previous driving experience and violation history review"
        ]
      },
      {
        title: "Freelance Professional Screening",
        description: "Identity and credential verification for independent contractors and service professionals.",
        benefits: [
          "Professional license and certification validation",
          "Identity verification with document authentication",
          "Educational background and skill certification checks",
          "Client reference verification and portfolio validation"
        ]
      },
      {
        title: "On-Demand Service Provider Checks",
        description: "Background verification for home services, repair technicians, and personal service providers.",
        benefits: [
          "Specialized trade certification and license verification",
          "Criminal background checks with emphasis on property crimes",
          "Insurance and bonding verification for service providers",
          "Customer safety training and protocol certification"
        ]
      }
    ],

    productFeatures: [
      {
        title: "Mobile Verification",
        description: "Complete verification process optimized for mobile devices with photo capture and document upload.",
        icon: Smartphone
      },
      {
        title: "Instant Results",
        description: "Real-time verification with immediate status updates and same-day completion capabilities.",
        icon: Zap
      },
      {
        title: "API Integration",
        description: "Seamless integration with gig platforms and marketplaces for automated onboarding workflows.",
        icon: CheckCircle
      },
      {
        title: "Continuous Monitoring",
        description: "Ongoing background monitoring with instant alerts for any new criminal activity or violations.",
        icon: Shield
      },
      {
        title: "Global Coverage",
        description: "International verification capabilities supporting gig workers across multiple countries.",
        icon: Users
      },
      {
        title: "Quick Onboarding",
        description: "Streamlined verification process enabling rapid worker activation and platform participation.",
        icon: Clock
      }
    ],

    customerStory: {
      company: "QuickServe Platform",
      role: "Head of Operations",
      quote: "Gigin's gig verification solution transformed our onboarding process. We went from 5-day verification to same-day activation, increasing our driver acquisition by 200%.",
      result: "200% increase in driver acquisition, same-day onboarding, 40% reduction in safety incidents"
    },

    specificChecks: [
      {
        name: "Identity Verification - Enhanced",
        description: "Multi-factor identity verification using government IDs, biometric matching, and document authentication."
      },
      {
        name: "Driving Record Check",
        description: "Comprehensive motor vehicle record review including violations, suspensions, and driving history."
      },
      {
        name: "Criminal Background - Public Safety Focus",
        description: "Criminal history screening with emphasis on public safety, violent crimes, and property offenses."
      },
      {
        name: "Vehicle Insurance Verification",
        description: "Real-time validation of vehicle insurance coverage, policy status, and coverage limits."
      },
      {
        name: "Professional License Validation",
        description: "Verification of relevant professional licenses, certifications, and trade qualifications."
      },
      {
        name: "Platform History Check",
        description: "Cross-platform verification including ratings, reviews, and performance history from other gig platforms."
      },
      {
        name: "Financial Background - Basic",
        description: "Basic financial verification for positions involving payment processing or high-value transactions."
      },
      {
        name: "Social Media Screening - Optional",
        description: "Optional social media review for public-facing roles and customer service positions."
      }
    ],

    blogResources: [
      {
        title: "Gig Economy Verification Best Practices",
        url: "/blog/gig-economy/verification-best-practices",
        date: "December 10, 2024"
      },
      {
        title: "Building Trust in On-Demand Platforms",
        url: "/blog/gig-economy/building-trust-platforms",
        date: "November 22, 2024"
      },
      {
        title: "Mobile-First Background Screening Solutions",
        url: "/blog/gig-economy/mobile-first-screening",
        date: "November 5, 2024"
      }
    ],

    otherIndustries: [
      { name: "Transportation", link: "/industry/transportation" },
      { name: "Food & Beverage", link: "/industry/food-beverage" },
      { name: "Facility Management", link: "/industry/facility-management" },
      { name: "Manufacturing", link: "/industry/manufacturing" },
      { name: "Financial Services", link: "/industry/financial-services" },
      { name: "Insurance", link: "/industry/insurance" },
      { name: "Corporate Services", link: "/industry/corporate-services" }
    ]
  };

  return <IndustryPageTemplate {...industryData} />;
};

export default GigEconomy;
