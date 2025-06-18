import { Shield, Users, Zap, Bell, Settings, Lock } from "lucide-react";
const VerificationUSPSection = () => {
  const differentiators = [{
    icon: Users,
    title: "Enterprise-Grade Features",
    description: "Multi-Org & Team Management, Secure Sign-In & M FA, Unlimited Team Members, and HRMS Integration Ready",
    outcome: "Gives HR full control across the org, even with distributed teams—no compromise on scale or security.",
    features: ["Multi-Org & Team Management", "Secure Sign-In & MFA", "Unlimited Team Members", "HRMS Integration Ready"]
  }, {
    icon: Zap,
    title: "Minimal HR Effort",
    description: "Built for Bulk processing with AI for mapping/organizing, Secure Candidate-Led Data Collection, Live Dashboard View",
    outcome: "Automates low-value tasks, saving time and ensuring consistent documentation for audits and hiring reviews.",
    features: ["Built for Bulk (AI for mapping/organizing ZIPs)", "Secure Candidate-Led Data Collection", "Live Dashboard View", "Downloadable MIS Reports", "Multi-Channel Data Intake"]
  }, {
    icon: Shield,
    title: "AI-Driven Deeper Verification",
    description: "Advanced Forgery Detection, Pre-Screening Intelligence, and comprehensive Workflow Automation",
    outcome: "HR gets faster, more reliable verifications with minimal manual involvement.",
    features: ["Forgery Detection", "Pre-Screening Intelligence", "Workflow Automation"]
  }, {
    icon: Bell,
    title: "Always in the Know – No Follow-Ups Needed",
    description: "Automated Email Triggers, Daily & Weekly Status Reports, and Vendor-Free Coordination",
    outcome: "HR spends less time chasing status and more time focusing on hiring the right people.",
    features: ["Automated Email Triggers", "Daily & Weekly Status Reports", "Vendor-Free Coordination"]
  }, {
    icon: Settings,
    title: "Customization That Works for You",
    description: "Flexible Check Configuration, Tailored Reports, Custom Decision Logic, and Customizable Packages",
    outcome: "HR gets exactly what they need—relevant data, aligned with business needs and risk policies.",
    features: ["Flexible Check Configuration", "Tailored Reports", "Custom Decision Logic", "Notification preferences", "Roles and permissions", "Customised data segregation", "Customisable Package"]
  }, {
    icon: Lock,
    title: "End-to-End Security & Compliance",
    description: "ISO 27001 Certified with PII Stored in Vault, Custom Data Retention Period, and comprehensive Audit Logs",
    outcome: "HR can rest assured knowing sensitive data is secure, auditable, and compliant with global standards.",
    features: ["ISO 27001 Certified", "PII Stored in Vault", "Custom Data Retention Period", "Audit Logs & Trails", "Encrypted Storage & Transit", "Brute-Force Protection"]
  }];
  const keyBenefits = ["Enterprise-grade access and flexibility", "Verified security/audit trails/compliance", "Minimal effort with maximum visibility", "Automated updates/no chasing vendors", "Smarter workflows driven by AI", "Reports/checks tailored to exact needs"];
  return <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose VerifyIn?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-powered platform delivers what HR teams need most—fast, accurate, and comprehensive background verification 
            with enterprise-grade security and zero compromise on compliance.
          </p>
        </div>

        {/* Key Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {differentiators.map((item, index) => <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {item.description}
              </p>
              
              <div className="bg-pink-50 border border-pink-200 rounded-lg p-4 mb-4">
                <p className="text-pink-800 font-medium text-sm">
                  <strong>Outcome:</strong> {item.outcome}
                </p>
              </div>
              
              <div className="space-y-2">
                {item.features.map((feature, featureIndex) => <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                    {feature}
                  </div>)}
              </div>
            </div>)}
        </div>

        {/* VerifyIn Delivers Section */}
        <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-8">
            VerifyIn Delivers What HR Needs Most
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {keyBenefits.map((benefit, index) => <div key={index} className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                </div>
                <p className="text-white font-medium">{benefit}</p>
              </div>)}
          </div>
          
          <div className="mt-12">
            <button className="bg-white text-pink-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Experience the Difference
            </button>
          </div>
        </div>
      </div>
    </section>;
};
export default VerificationUSPSection;