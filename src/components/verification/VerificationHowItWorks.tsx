
interface VerificationHowItWorksProps {
  howItWorks: string[];
}

const VerificationHowItWorks = ({ howItWorks }: VerificationHowItWorksProps) => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined process ensures accuracy and efficiency
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {howItWorks.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-2xl">{index + 1}</span>
                </div>
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-pink-200 to-purple-200 transform translate-x-10"></div>
                )}
              </div>
              <p className="text-gray-700 text-lg leading-relaxed group-hover:text-gray-900 transition-colors">
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VerificationHowItWorks;
