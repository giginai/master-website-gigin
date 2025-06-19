
import { CheckCircle, Shield, Users, FileCheck } from "lucide-react";
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ProductStackSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>(0.2);
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation<HTMLDivElement>(0.3);
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation<HTMLDivElement>(0.4);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Complete Product Stack
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to hire right, powered by AI
          </p>
        </div>

        <div 
          ref={contentRef}
          className={`grid lg:grid-cols-2 gap-16 items-center mb-16 transition-all duration-700 delay-200 ${
            contentVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* ATS Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-pink-100 rounded-xl transform hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">
                ATS (Applicant Tracking System)
              </h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-gray-600">
                  <strong>Track applicants:</strong> Monitor every candidate through your hiring pipeline with real-time status updates
                </p>
              </div>
              <div className="flex items-start gap-3 group">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-gray-600">
                  <strong>Manage pipelines:</strong> Customize stages, automate workflows, and never lose track of promising candidates
                </p>
              </div>
              <div className="flex items-start gap-3 group">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-gray-600">
                  <strong>Streamline communication:</strong> Automated emails, interview scheduling, and collaborative hiring decisions
                </p>
              </div>
            </div>
          </div>

          {/* BGV Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-100 rounded-xl transform hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">
                BGV (Background Verification)
              </h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <FileCheck className="w-5 h-5 text-green-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-gray-600">
                  <strong>Instant identity checks:</strong> Verify documents, credentials, and personal information in real-time
                </p>
              </div>
              <div className="flex items-start gap-3 group">
                <FileCheck className="w-5 h-5 text-green-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-gray-600">
                  <strong>Employment history verification:</strong> Confirm past roles, tenure, and performance with previous employers
                </p>
              </div>
              <div className="flex items-start gap-3 group">
                <FileCheck className="w-5 h-5 text-green-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-gray-600">
                  <strong>Compliant reporting:</strong> Generate audit-ready reports that meet industry standards and regulations
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Stack Image with Subtext */}
        <div 
          ref={imageRef}
          className={`mt-16 text-center transition-all duration-700 delay-400 ${
            imageVisible ? 'animate-scale-in' : 'opacity-0 scale-95'
          }`}
        >
          <div className="relative max-w-5xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
              <img 
                src="/lovable-uploads/d76849a1-064a-4fa3-aec2-50cf0ab617bc.png"
                alt="Complete Product Stack - ATS and BGV Dashboard"
                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Subtext below the image */}
            <div className="mt-6 max-w-3xl mx-auto">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                Unified Dashboard Experience
              </h4>
              <p className="text-lg text-gray-600 leading-relaxed">
                Experience seamless integration between our ATS and BGV systems. Our unified dashboard provides 
                real-time insights, streamlined workflows, and comprehensive reporting all in one place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductStackSection;
