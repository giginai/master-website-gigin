
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import AnimatedCounter from '@/components/AnimatedCounter';

const MetricsSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLHeadingElement>(0.2);

  const metrics = [
    { value: "2M+", label: "Active Candidates", color: "from-pink-500/20 to-red-500/20" },
    { value: "100k+", label: "Trusted Recruiters", color: "from-blue-500/20 to-purple-500/20" },
    { value: "1M+", label: "Job Applications Processed", color: "from-green-500/20 to-teal-500/20" },
    { value: "40%", label: "Faster Verifications", color: "from-purple-500/20 to-indigo-500/20" }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/lovable-uploads/f0acdf04-0015-4664-af62-d43a84908fcd.png)'
        }}
      ></div>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="mb-4">
            <div className="inline-flex items-center glass-morphism border border-white/20 rounded-full px-4 py-2">
              <span className="text-white">✦</span>
              <span className="text-white font-medium mx-2">Unlocking Strategic HR</span>
              <span className="text-white">✦</span>
            </div>
          </div>
          <h2 
            ref={titleRef}
            className={`text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-700 ${
              titleVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'
            }`}
          >
            How Does Gigin Make Your<br />Life Better?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className={`glass-morphism bg-gradient-to-br ${metric.color} rounded-2xl p-6 text-white transform hover:scale-105 transition-transform duration-300 border border-white/10 backdrop-blur-xl text-center group`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-3xl md:text-4xl font-bold mb-2 text-pink-400 drop-shadow-lg transition-all duration-300 hover:scale-110 hover:text-pink-300 cursor-pointer" 
                   style={{
                     textShadow: '0 0 20px rgba(236, 72, 153, 0.8), 0 0 40px rgba(236, 72, 153, 0.4)',
                     filter: 'drop-shadow(0 0 8px rgba(236, 72, 153, 0.6))'
                   }}>
                <AnimatedCounter value={metric.value} label="" />
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
