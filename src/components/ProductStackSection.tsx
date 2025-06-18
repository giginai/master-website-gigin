
import { CheckCircle, Shield, Users, FileCheck } from "lucide-react";

const ProductStackSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Complete Product Stack
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to hire right, powered by AI
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ATS Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-pink-100 rounded-xl">
                <Users className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">
                ATS (Applicant Tracking System)
              </h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-gray-600">
                  <strong>Track applicants:</strong> Monitor every candidate through your hiring pipeline with real-time status updates
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-gray-600">
                  <strong>Manage pipelines:</strong> Customize stages, automate workflows, and never lose track of promising candidates
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-gray-600">
                  <strong>Streamline communication:</strong> Automated emails, interview scheduling, and collaborative hiring decisions
                </p>
              </div>
            </div>
          </div>

          {/* BGV Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">
                BGV (Background Verification)
              </h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FileCheck className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-gray-600">
                  <strong>Instant identity checks:</strong> Verify documents, credentials, and personal information in real-time
                </p>
              </div>
              <div className="flex items-start gap-3">
                <FileCheck className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-gray-600">
                  <strong>Employment history verification:</strong> Confirm past roles, tenure, and performance with previous employers
                </p>
              </div>
              <div className="flex items-start gap-3">
                <FileCheck className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-gray-600">
                  <strong>Compliant reporting:</strong> Generate audit-ready reports that meet industry standards and regulations
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Stack Image */}
        <div className="mt-16 text-center">
          <div className="relative max-w-5xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="/lovable-uploads/d76849a1-064a-4fa3-aec2-50cf0ab617bc.png"
                alt="Complete Product Stack - ATS and BGV Dashboard"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductStackSection;
