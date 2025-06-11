
const MetricsSection = () => {
  const metrics = [
    { value: "2M+", label: "Active Candidates", color: "from-pink-500 to-red-500" },
    { value: "100k+", label: "Trusted Recruiters", color: "from-blue-500 to-purple-500" },
    { value: "1M+", label: "Job Applications Processed", color: "from-green-500 to-teal-500" },
    { value: "40%", label: "Faster Verifications", color: "from-purple-500 to-indigo-500" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="inline-flex items-center bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
              🟢 Metrics
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How Does Gigin Make Your<br />Life Better?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${metric.color} rounded-2xl p-6 text-white transform hover:scale-105 transition-transform duration-300`}
            >
              <div className="text-3xl md:text-4xl font-bold mb-2">
                {metric.value}
              </div>
              <div className="text-white/90 font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
