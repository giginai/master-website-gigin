
import { Shield, CheckCircle } from "lucide-react";

interface VerificationAboutProps {
  title: string;
  aboutDescription: string;
}

const VerificationAbout = ({ title, aboutDescription }: VerificationAboutProps) => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-600"></div>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center bg-pink-50 rounded-full px-4 py-2 mb-6">
              <Shield className="w-5 h-5 text-pink-500 mr-2" />
              <span className="text-pink-600 font-medium">About the Check</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              About {title}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {aboutDescription}
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop" 
              alt="About verification" 
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerificationAbout;
