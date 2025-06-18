import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Users, CreditCard, FileCheck, Building, Eye, Globe, CheckCircle, UserCheck } from "lucide-react";
import { Link } from "react-router-dom";
const VerificationCatalogue = () => {
  const verificationCategories = [{
    title: "Identity Verification",
    icon: Shield,
    description: "AI-powered ID authentication for government-issued documents. Biometric matching for fraud-proof identity validation. Automated risk assessment for fake profiles and identity theft.",
    checks: [{
      name: "Passport Verification",
      link: "/verification/identity"
    }, {
      name: "PAN ID Verification",
      link: "/verification/identity"
    }, {
      name: "Aadhaar Verification",
      link: "/verification/identity"
    }, {
      name: "Voter ID Verification",
      link: "/verification/identity"
    }, {
      name: "TIN Verification",
      link: "/verification/identity"
    }, {
      name: "GSTIN Verification",
      link: "/verification/identity"
    }]
  }, {
    title: "Employment Verification",
    icon: Building,
    description: "Comprehensive employment history validation with multi-source database verification and automated cross-checking of job roles, tenure, and salary analysis.",
    checks: [{
      name: "Employment History Check",
      link: "/verification/employment"
    }, {
      name: "Salary Verification",
      link: "/verification/employment"
    }, {
      name: "Job Title Verification",
      link: "/verification/employment"
    }, {
      name: "Reference Check",
      link: "/verification/reference"
    }]
  }, {
    title: "Education Verification",
    icon: CheckCircle,
    description: "Ensure confidence in candidate qualifications with fast verification processes, AI-assisted certificate authentication and degree validation.",
    checks: [{
      name: "Degree Verification",
      link: "/verification/education"
    }, {
      name: "Professional Certification",
      link: "/verification/education"
    }, {
      name: "Training Certificate Validation",
      link: "/verification/education"
    }]
  }, {
    title: "Criminal Record Verification",
    icon: FileCheck,
    description: "Reliable international criminal record screening by AI scanning for court cases, legal disputes, and criminal sanctions for high-security roles.",
    checks: [{
      name: "Criminal Background Check",
      link: "/verification/criminal"
    }, {
      name: "Court Records Search",
      link: "/verification/criminal"
    }, {
      name: "Global Watchlist Check",
      link: "/verification/criminal"
    }]
  }, {
    title: "Address & Residence Verification",
    icon: Eye,
    description: "Real-time address validation and residence history verification using multiple databases and AI-powered cross-referencing for accuracy.",
    checks: [{
      name: "Current Address Verification",
      link: "/verification/address"
    }, {
      name: "Permanent Address Check",
      link: "/verification/address"
    }, {
      name: "Residence History Validation",
      link: "/verification/address"
    }]
  }, {
    title: "Financial Risk Verification",
    icon: CreditCard,
    description: "Comprehensive financial history checks including credit scores, bankruptcy records, and financial stability assessment for high-trust positions.",
    checks: [{
      name: "Credit Score Check",
      link: "/verification/financial"
    }, {
      name: "Bankruptcy Records",
      link: "/verification/financial"
    }, {
      name: "Financial Stability Assessment",
      link: "/verification/financial"
    }]
  }, {
    title: "Social Media Screening",
    icon: Globe,
    description: "AI-powered social media analysis for professional reputation assessment, identifying potential risks and ensuring brand alignment.",
    checks: [{
      name: "Professional Social Media Check",
      link: "/verification/social"
    }, {
      name: "Public Records Analysis",
      link: "/verification/social"
    }, {
      name: "Digital Footprint Assessment",
      link: "/verification/social"
    }]
  }];
  return <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <span className="text-white">✦</span>
            <span className="text-white font-medium mx-2">Verification Catalogue</span>
            <span className="text-white">✦</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            All Services
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Comprehensive verification solutions tailored to your specific needs. Choose from our extensive catalogue of AI-powered verification services.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-32">
                <div className="flex items-center mb-6">
                  <Shield className="w-5 h-5 text-pink-500 mr-2" />
                  <span className="text-sm font-medium text-green-600">Background Verification</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">All Services</h3>
                <nav className="space-y-2">
                  <div className="p-3 bg-pink-50 border border-pink-200 rounded-lg">
                    <span className="text-gray-700 font-medium">All</span>
                  </div>
                  {verificationCategories.map((category, index) => <div key={index} className="p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
                      <span className="text-gray-600">{category.title}</span>
                    </div>)}
                </nav>
              </div>
            </div>

            {/* Services Content */}
            <div className="lg:col-span-2">
              <div className="space-y-12">
                {verificationCategories.map((category, categoryIndex) => <div key={categoryIndex}>
                    <div className="mb-8">
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">{category.title}</h2>
                      <p className="text-gray-600 text-lg">{category.description}</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {category.checks.map((check, checkIndex) => <Link key={checkIndex} to={check.link} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-pink-300 hover:bg-pink-50 transition-all duration-300 group">
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                              <category.icon className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-pink-600">
                              {check.name}
                            </h3>
                          </div>
                          <p className="text-gray-600 text-sm">
                            Comprehensive verification with AI-powered analysis and real-time validation.
                          </p>
                        </Link>)}
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default VerificationCatalogue;