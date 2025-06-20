
const TrustSection = () => {
  const features = [
    {
      title: "One Stop Solution",
      description: "One seamless workflow for sourcing, hiring & background verification.",
      backDescription: "Eliminate the hassle of managing multiple vendors and platforms. Our integrated solution streamlines your entire hiring process from initial sourcing to final verification, reducing complexity and saving valuable time for your HR team.",
      image: "/lovable-uploads/a6994b90-24e7-4e66-974a-d51dbf602e8f.png"
    },
    {
      title: "Empower with AI",
      description: "AI-powered insights to support and enhance human decisions.",
      backDescription: "Our advanced AI algorithms analyze candidate data, predict job fit, and provide intelligent recommendations. This empowers your hiring managers to make better decisions faster while maintaining the human touch in the final selection process.",
      image: "/lovable-uploads/43258c9d-33d1-41dc-ba91-e119cd57edba.png"
    },
    {
      title: "Fast & Reliable",
      description: "Faster hiring with built-in trust & compliance.",
      backDescription: "Reduce time-to-hire by up to 60% with automated workflows and real-time verification processes. Our compliance-first approach ensures all checks meet industry standards while maintaining speed and accuracy throughout the hiring journey.",
      image: "/lovable-uploads/1db7c0ae-2c21-42e1-9b37-25650d99432d.png"
    },
    {
      title: "Candidate-Centric Hiring",
      description: "Personalized candidate experiences at scale.",
      backDescription: "Create exceptional candidate experiences with personalized communication, transparent process updates, and mobile-first interactions. Our platform ensures every candidate feels valued while maintaining efficiency at enterprise scale.",
      image: "/lovable-uploads/063e86ea-9817-44fa-98b8-5c4bc9f3bfd4.png"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-[48px]">
        <div className="text-center mb-16">
          <div className="mb-4">
            <div className="inline-flex items-center bg-gray-100 text-gray-700 border border-gray-200 rounded-full px-4 py-2">
              <span>✦</span>
              <span className="font-medium mx-2">Trust</span>
              <span>✦</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Do Employers Trust Gigin?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            More than automation—our AI-powered hiring & verification enhances decision-making, ensuring speed, trust, and human-first intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group perspective-1000 h-64">
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front of card */}
                <div className="absolute inset-0 w-full h-full backface-hidden bg-gray-50 rounded-2xl p-8 text-center flex flex-col justify-center items-center shadow-lg">
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

                {/* Back of card */}
                <div className="absolute inset-0 w-full h-full backface-hidden bg-pink-50 rounded-2xl p-8 text-center flex flex-col justify-center items-center shadow-lg rotate-y-180">
                  <h3 className="text-xl font-bold text-pink-600 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {feature.backDescription}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
