
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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
            Trust Built On Results
          </h2>
          
          {/* Silhouettes Visual */}
          <div className="relative max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-blue-400 to-purple-600 rounded-3xl p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10 flex justify-center items-end space-x-4 h-32">
                {/* Silhouette figures */}
                {[...Array(7)].map((_, i) => (
                  <div 
                    key={i}
                    className={`bg-black/60 rounded-t-full ${
                      i === 3 ? 'w-8 h-24' : i === 2 || i === 4 ? 'w-6 h-20' : 'w-5 h-16'
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
              <div className="text-3xl md:text-4xl font-bold text-pink-500 mb-2">
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
