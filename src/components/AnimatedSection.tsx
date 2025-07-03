
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animationType?: 'slideLeft' | 'slideRight' | 'slideUp' | 'slideDown' | 'fade' | 'scale' | 'rotate';
  delay?: number;
  duration?: number;
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animationType = 'fade',
  delay = 0,
  duration = 1,
  className = ''
}) => {
  const { elementRef } = useScrollAnimation({
    animationType,
    delay,
    duration,
    triggerOnce: true
  });

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export default AnimatedSection;
