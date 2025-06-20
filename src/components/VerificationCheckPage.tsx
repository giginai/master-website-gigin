import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import LeadGenerationModal from "./LeadGenerationModal";
import VerificationHero from "./verification/VerificationHero";
import VerificationAbout from "./verification/VerificationAbout";
import VerificationWhyImportant from "./verification/VerificationWhyImportant";
import VerificationUseCases from "./verification/VerificationUseCases";
import VerificationGap from "./verification/VerificationGap";
import VerificationHowItWorks from "./verification/VerificationHowItWorks";
import VerificationCTA from "./verification/VerificationCTA";
import VerificationFAQ from "./verification/VerificationFAQ";

interface FAQ {
  question: string;
  answer: string;
}

interface UseCase {
  title: string;
  description: string;
}

interface VerificationCheckPageProps {
  title: string;
  heroSubtitle: string;
  heroImage: string;
  icon: React.ComponentType<{ className?: string }>;
  aboutDescription: string;
  whyImportant: string[];
  useCases: UseCase[];
  gapToday: string;
  howItWorks: string[];
  faqs: FAQ[];
}

const VerificationCheckPage = ({
  title,
  heroSubtitle,
  heroImage,
  icon,
  aboutDescription,
  whyImportant,
  useCases,
  gapToday,
  howItWorks,
  faqs,
}: VerificationCheckPageProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  // Generate SEO data based on the page title
  const pageTitle = `${title} | Gigin`;
  const pageDescription = `Professional ${title.toLowerCase()} services by Gigin. ${heroSubtitle}`;
  const pageUrl = `https://master-website-gigin.lovable.app/verification/${title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")}`;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta
          property="og:image"
          content="https://master-website-gigin.lovable.app/lovable-uploads/og-gigin.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta
          name="twitter:image"
          content="https://master-website-gigin.lovable.app/lovable-uploads/og-gigin.jpg"
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <Header />

        <VerificationHero
          title={title}
          heroSubtitle={heroSubtitle}
          heroImage={heroImage}
          icon={icon}
          onGetStarted={handleModalOpen}
        />

        <VerificationAbout title={title} aboutDescription={aboutDescription} />

        <VerificationWhyImportant title={title} whyImportant={whyImportant} />

        <VerificationUseCases useCases={useCases} />

        <VerificationGap gapToday={gapToday} />

        <VerificationHowItWorks howItWorks={howItWorks} />

        <VerificationCTA title={title} onBookDemo={handleModalOpen} />

        <VerificationFAQ title={title} faqs={faqs} />

        <Footer />
      </div>

      <LeadGenerationModal isOpen={isModalOpen} onClose={handleModalClose} />
    </>
  );
};

export default VerificationCheckPage;
