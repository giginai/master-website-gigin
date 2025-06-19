
import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = <T extends HTMLElement = HTMLDivElement>(
  thresholdOrOptions: number | UseScrollAnimationOptions = 0.1
) => {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  // Handle both number and options parameter
  const options = typeof thresholdOrOptions === 'number' 
    ? { threshold: thresholdOrOptions, rootMargin: '0px 0px -100px 0px', triggerOnce: true }
    : { threshold: 0.1, rootMargin: '0px 0px -100px 0px', triggerOnce: true, ...thresholdOrOptions };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!options.triggerOnce || !hasTriggered)) {
          setIsVisible(true);
          if (options.triggerOnce) {
            setHasTriggered(true);
          }
        } else if (!options.triggerOnce && !entry.isIntersecting) {
          setIsVisible(false);
        }
      },
      { 
        threshold: options.threshold,
        rootMargin: options.rootMargin
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options.threshold, options.rootMargin, options.triggerOnce, hasTriggered]);

  return { ref, isVisible };
};
