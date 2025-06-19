
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useCountAnimation } from '@/hooks/useCountAnimation';

interface AnimatedCounterProps {
  value: string;
  label: string;
  className?: string;
}

const AnimatedCounter = ({ value, label, className = "" }: AnimatedCounterProps) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>(0.3);
  
  // Extract numeric value from string (e.g., "2M+" -> 2000000)
  const getNumericValue = (val: string) => {
    const num = parseFloat(val.replace(/[^0-9.]/g, ''));
    if (val.includes('M')) return num * 1000000;
    if (val.includes('k') || val.includes('K')) return num * 1000;
    if (val.includes('%')) return num;
    return num;
  };

  const numericValue = getNumericValue(value);
  const animatedCount = useCountAnimation(numericValue, 2000, 0, isVisible);
  
  // Format the animated count back to original format
  const formatCount = (count: number) => {
    if (value.includes('M')) {
      return `${(count / 1000000).toFixed(count >= 1000000 ? 0 : 1)}M${value.includes('+') ? '+' : ''}`;
    }
    if (value.includes('k') || value.includes('K')) {
      return `${(count / 1000).toFixed(count >= 1000 ? 0 : 1)}k${value.includes('+') ? '+' : ''}`;
    }
    if (value.includes('%')) {
      return `${count}%`;
    }
    return count.toString() + (value.includes('+') ? '+' : '');
  };

  return (
    <div 
      ref={ref}
      className={`text-center hover:scale-105 transition-all duration-300 ${
        isVisible ? 'animate-fade-in' : 'opacity-0'
      } ${className}`}
    >
      <div className="text-3xl md:text-4xl font-bold mb-3 text-pink-500">
        {formatCount(animatedCount)}
      </div>
      <div className="text-gray-700 font-medium whitespace-nowrap">
        {label}
      </div>
    </div>
  );
};

export default AnimatedCounter;
