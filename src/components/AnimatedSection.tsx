
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: 'fade-in' | 'slide-up' | 'slide-left' | 'slide-right' | 'scale-in';
  delay?: number;
  threshold?: number;
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation = 'fade-in',
  delay = 0,
  threshold = 0.1,
  className = ''
}) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>(threshold);

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all duration-700 ease-out';
    
    if (isVisible) {
      return `${baseClasses} animate-${animation}`;
    }

    switch (animation) {
      case 'slide-up':
        return `${baseClasses} opacity-0 translate-y-8`;
      case 'slide-left':
        return `${baseClasses} opacity-0 translate-x-8`;
      case 'slide-right':
        return `${baseClasses} opacity-0 -translate-x-8`;
      case 'scale-in':
        return `${baseClasses} opacity-0 scale-95`;
      default:
        return `${baseClasses} opacity-0 translate-y-4`;
    }
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClasses()} ${className}`}
      style={{ 
        animationDelay: `${delay}ms`,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
