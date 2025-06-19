import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import AnimatedCounter from '@/components/AnimatedCounter';
const ProofSection = () => {
  const {
    ref: titleRef,
    isVisible: titleVisible
  } = useScrollAnimation<HTMLHeadingElement>(0.2);
  const {
    ref: imageRef,
    isVisible: imageVisible
  } = useScrollAnimation<HTMLDivElement>(0.3);
  const stats = [{
    value: "60%",
    label: "Faster Hiring"
  }, {
    value: "37",
    label: "Years of Hiring Time Saved"
  }, {
    value: "20%",
    label: "Higher Employee Retention"
  }, {
    value: "40%",
    label: "Less Manual HR Work"
  }];
  return <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 ref={titleRef} className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 transition-all duration-700 ${titleVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'}`}>
            Trust Built On Results
          </h2>
          
          {/* Updated Visual with new uploaded image */}
          <div ref={imageRef} className={`relative max-w-4xl mx-auto mb-4 transition-all duration-700 delay-300 ${imageVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'}`}>
            <div className="rounded-3xl p-8 relative overflow-hidden">
              <img alt="Diverse professionals representing trust and success" className="w-full h-64 object-cover rounded-3xl" src="/lovable-uploads/21d5e333-ce71-4191-9c34-4516f65f82d7.png" />
            </div>
          </div>
        </div>

        {/* Stats Grid - Plain style with consistent spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-5xl mx-auto">
          {stats.map((stat, index) => <div key={index} style={{
          animationDelay: `${index * 200}ms`
        }}>
              <AnimatedCounter value={stat.value} label={stat.label} />
            </div>)}
        </div>
      </div>
    </section>;
};
export default ProofSection;