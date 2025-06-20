
import { Building2, Users, Shield } from "lucide-react";

const IndustryBenefitsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Industry-Specific Verification Matters
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-pink-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Compliance Assurance</h3>
            <p className="text-gray-600">
              Meet industry-specific regulations and compliance requirements with tailored verification processes.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-pink-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Risk Mitigation</h3>
            <p className="text-gray-600">
              Reduce industry-specific risks through targeted background checks and specialized screening protocols.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Building2 className="w-8 h-8 text-pink-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Industry Expertise</h3>
            <p className="text-gray-600">
              Benefit from our deep understanding of industry challenges and best practices in background verification.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryBenefitsSection;
