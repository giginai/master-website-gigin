
const TrustSection = () => {
  const features = [
    {
      title: "One Stop Solution",
      description: "One seamless workflow for sourcing, hiring & background verification.",
      icon: "🎯"
    },
    {
      title: "Empower with AI", 
      description: "AI-powered insights to support and enhance human decisions.",
      icon: "🤖"
    },
    {
      title: "Fast & Reliable",
      description: "Faster hiring with built-in trust & compliance.",
      icon: "⚡"
    },
    {
      title: "Candidate-Centric Hiring",
      description: "Personalized candidate experiences at scale.",
      icon: "👥"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="mb-4">
            <div className="inline-flex items-center bg-gray-100 text-gray-700 border border-gray-200 rounded-full px-4 py-2">
              <span>✦</span>
              <span className="font-medium mx-2">Trust</span>
              <span>✦</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Do Recruiters Trust Gigin?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            More than automation—our AI-powered hiring & verification enhances decision-making, ensuring speed, trust, and human-first intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 group text-center"
            >
              <div className="text-4xl mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
