import { CheckCircle } from "lucide-react";
interface UseCase {
  title: string;
  description: string;
}
interface VerificationUseCasesProps {
  useCases: UseCase[];
}
const VerificationUseCases = ({
  useCases
}: VerificationUseCasesProps) => {
  return <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Common Use Cases
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world applications across industries and roles
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => <div key={index} className="group bg-gradient-to-br from-white to-gray-50 border-2 border-gray-100 rounded-2xl p-8 hover:border-pink-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-pink-600 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{useCase.description}</p>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default VerificationUseCases;