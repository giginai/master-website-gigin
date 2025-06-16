
import { Zap } from "lucide-react";

interface VerificationWhyImportantProps {
  title: string;
  whyImportant: string[];
}

const VerificationWhyImportant = ({ title, whyImportant }: VerificationWhyImportantProps) => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white rounded-full px-4 py-2 mb-6 shadow-md">
            <Zap className="w-5 h-5 text-pink-500 mr-2" />
            <span className="text-pink-600 font-medium">Why It Matters</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why {title} is Important
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding the critical role this verification plays in modern hiring
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyImportant.map((point, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <span className="text-white font-bold text-2xl">{index + 1}</span>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VerificationWhyImportant;
