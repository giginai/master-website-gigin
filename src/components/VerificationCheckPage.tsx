
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import LeadGenerationModal from "./LeadGenerationModal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
  icon: Icon,
  aboutDescription,
  whyImportant,
  useCases,
  gapToday,
  howItWorks,
  faqs
}: VerificationCheckPageProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 min-h-[80vh] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${heroImage})`
            }}
          />
          <div className="absolute inset-0 bg-black/60"></div>
          
          <div className="max-w-7xl mx-auto px-6 text-center relative z-10 flex items-center justify-center min-h-[60vh]">
            <div>
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
                <Icon className="w-5 h-5 text-white mr-2" />
                <span className="text-white font-medium">{title}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {title}
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                {heroSubtitle}
              </p>
              
              <Button 
                onClick={() => setIsModalOpen(true)}
                className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 text-lg rounded-lg font-medium"
              >
                Get Started
              </Button>
            </div>
          </div>
        </section>

        {/* About the Check */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              About {title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed text-center">
              {aboutDescription}
            </p>
          </div>
        </section>

        {/* Why It's Important */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Why {title} is Important
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyImportant.map((point, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-pink-500 font-bold text-lg">{index + 1}</span>
                  </div>
                  <p className="text-gray-600">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Use Cases */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Common Use Cases
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gap Today */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Where's the Gap Today?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {gapToday}
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {howItWorks.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{index + 1}</span>
                  </div>
                  <p className="text-gray-600">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Implement {title}?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Get started with our comprehensive {title.toLowerCase()} solution and enhance your hiring process today.
            </p>
            <Button 
              onClick={() => setIsModalOpen(true)}
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 text-lg rounded-lg font-medium"
            >
              Book a Demo
            </Button>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <Footer />
      </div>

      <LeadGenerationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default VerificationCheckPage;
