
const TrustSection = () => {
  const features = [
    {
      title: "One Stop Solution",
      description: "One seamless workflow for sourcing, hiring & background verification.",
      image: "/lovable-uploads/ba01d0fa-4dfe-4924-ad72-5d391b109ea6.png"
    },
    {
      title: "Empower with AI", 
      description: "AI-powered insights to support and enhance human decisions.",
      image: "/lovable-uploads/e8148bbc-686e-4866-b24a-81ea4eac5d04.png"
    },
    {
      title: "Fast & Reliable",
      description: "Faster hiring with built-in trust & compliance.",
      image: "/lovable-uploads/01756287-e821-490e-b192-b1b3e8445b44.png"
    },
    {
      title: "Candidate-Centric Hiring",
      description: "Personalized candidate experiences at scale.",
      image: "/lovable-uploads/ddfca99d-2d16-402d-8286-1ad67f76b60c.png"
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
              <div className="w-16 h-16 mx-auto mb-4">
                <img 
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-contain"
                />
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
