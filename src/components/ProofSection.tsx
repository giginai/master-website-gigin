
const ProofSection = () => {
  const stats = [
    { value: "60%", label: "Faster Hiring" },
    { value: "37", label: "Years of Hiring Time Saved" },
    { value: "20%", label: "Higher Employee Retention" },
    { value: "40%", label: "Less Manual HR Work" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trust Built On Results
          </h2>
          
          {/* Updated Visual with uploaded image */}
          <div className="relative max-w-4xl mx-auto mb-8">
            <div className="rounded-3xl p-8 relative overflow-hidden">
              <img 
                src="/lovable-uploads/d9a0276e-c9e1-4ccd-b449-78ed1128fa37.png"
                alt="Diverse professionals representing trust"
                className="w-full h-64 object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>

        {/* Stats Grid with hover animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-300 group"
            >
              <div className="text-3xl md:text-4xl font-bold mb-2 text-pink-500">
                {stat.value}
              </div>
              <div className="text-gray-700 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
