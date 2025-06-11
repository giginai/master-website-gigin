
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is Gigin and how does it work?",
      answer: "Gigin is an AI-powered platform that streamlines the entire talent acquisition process. It combines sourcing, hiring, and verification tools in one unified solution to help HR teams find, evaluate, and onboard the right candidates faster and more efficiently."
    },
    {
      question: "How does Gigin's AI-powered sourcing work?",
      answer: "Our AI technology scans multiple talent pools, analyzes candidate profiles, and matches them to your specific requirements. It uses advanced algorithms to identify the best-fit candidates based on skills, experience, and cultural alignment with your organization."
    },
    {
      question: "What verification services does Gigin provide?",
      answer: "Gigin offers comprehensive background verification including identity verification, employment history, educational qualifications, skill assessments, and reference checks. Our verification process ensures you hire trustworthy and qualified candidates."
    },
    {
      question: "How much time can I save using Gigin?",
      answer: "On average, our clients experience 60% faster hiring cycles. Our platform automates many manual processes, reducing the time from job posting to offer acceptance significantly while maintaining quality standards."
    },
    {
      question: "Is Gigin suitable for all company sizes?",
      answer: "Yes, Gigin is designed to scale with your needs. Whether you're a startup looking to hire your first employees or an enterprise managing thousands of hires, our platform adapts to your requirements and volume."
    },
    {
      question: "What types of roles can I hire for through Gigin?",
      answer: "Gigin supports hiring for all types of roles across industries - from entry-level positions to senior executives, technical roles to creative positions, full-time employees to gig workers and contractors."
    },
    {
      question: "How does pricing work for Gigin?",
      answer: "We offer flexible pricing models based on your hiring volume and requirements. Contact our sales team for a customized quote that fits your organization's needs and budget."
    },
    {
      question: "Can Gigin integrate with our existing HR systems?",
      answer: "Yes, Gigin offers seamless integrations with popular HR management systems, applicant tracking systems (ATS), and other workforce management tools. Our API allows for custom integrations as well."
    },
    {
      question: "What support do you provide during implementation?",
      answer: "We provide comprehensive onboarding support including platform training, setup assistance, best practices guidance, and ongoing customer success support to ensure you get maximum value from Gigin."
    },
    {
      question: "How secure is candidate data on Gigin?",
      answer: "Data security is our top priority. Gigin employs enterprise-grade security measures including encryption, secure data centers, compliance with privacy regulations, and regular security audits to protect all candidate and company information."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="mb-4">
            <div className="inline-flex items-center bg-gray-100 text-gray-700 border border-gray-200 rounded-full px-4 py-2">
              <span>✦</span>
              <span className="font-medium mx-2">FAQ</span>
              <span>✦</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>

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
  );
};

export default FAQSection;
