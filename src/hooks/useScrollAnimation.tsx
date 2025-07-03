
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface UseScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  animationType?: 'slideLeft' | 'slideRight' | 'slideUp' | 'slideDown' | 'fade' | 'scale' | 'rotate' | 'aiPrecision';
  delay?: number;
  duration?: number;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { 
    threshold = 0.1, 
    triggerOnce = true, 
    animationType = 'fade',
    delay = 0,
    duration = 0.6
  } = options;
  
  const [isVisible, setIsVisible] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Set initial states based on animation type (no blinking)
    switch (animationType) {
      case 'slideLeft':
        gsap.set(element, { x: -50, opacity: 0 });
        break;
        
      case 'slideRight':
        gsap.set(element, { x: 50, opacity: 0 });
        break;
        
      case 'slideUp':
        gsap.set(element, { y: 30, opacity: 0 });
        break;
        
      case 'slideDown':
        gsap.set(element, { y: -30, opacity: 0 });
        break;
        
      case 'scale':
        gsap.set(element, { scale: 0.95, opacity: 0 });
        break;
        
      case 'rotate':
        gsap.set(element, { rotation: -5, scale: 0.95, opacity: 0 });
        break;
        
      case 'aiPrecision':
        gsap.set(element, { x: -30, opacity: 0, scale: 0.95 });
        break;
        
      default: // fade
        gsap.set(element, { opacity: 0 });
    }

    const scrollTrigger = ScrollTrigger.create({
      trigger: element,
      start: "top 85%",
      onEnter: () => {
        setIsVisible(true);
        
        // Create and play animation
        const tl = gsap.timeline();
        
        switch (animationType) {
          case 'slideLeft':
          case 'slideRight':
            tl.to(element, { x: 0, opacity: 1, duration, ease: "power2.out", delay });
            break;
            
          case 'slideUp':
          case 'slideDown':
            tl.to(element, { y: 0, opacity: 1, duration, ease: "power2.out", delay });
            break;
            
          case 'scale':
            tl.to(element, { scale: 1, opacity: 1, duration, ease: "back.out(1.2)", delay });
            break;
            
          case 'rotate':
            tl.to(element, { rotation: 0, scale: 1, opacity: 1, duration, ease: "power2.out", delay });
            break;
            
          case 'aiPrecision':
            tl.to(element, {
              x: 0,
              opacity: 1,
              scale: 1,
              duration: 0.8,
              ease: "power2.out",
              delay,
              onComplete: () => setAnimationComplete(true)
            });
            break;
            
          default: // fade
            tl.to(element, { opacity: 1, duration, ease: "power2.out", delay });
        }
        
        if (triggerOnce) {
          scrollTrigger.kill();
        }
      },
      onLeave: () => {
        if (!triggerOnce) {
          setIsVisible(false);
          setAnimationComplete(false);
          // Reset to initial state
          switch (animationType) {
            case 'slideLeft': gsap.set(element, { x: -50, opacity: 0 }); break;
            case 'slideRight': gsap.set(element, { x: 50, opacity: 0 }); break;
            case 'slideUp': gsap.set(element, { y: 30, opacity: 0 }); break;
            case 'slideDown': gsap.set(element, { y: -30, opacity: 0 }); break;
            case 'scale': gsap.set(element, { scale: 0.95, opacity: 0 }); break;
            case 'rotate': gsap.set(element, { rotation: -5, scale: 0.95, opacity: 0 }); break;
            case 'aiPrecision': gsap.set(element, { x: -30, opacity: 0, scale: 0.95 }); break;
            default: gsap.set(element, { opacity: 0 });
          }
        }
      }
    });

    return () => {
      if (scrollTrigger) {
        scrollTrigger.kill();
      }
    };
  }, [threshold, triggerOnce, animationType, delay, duration]);

  return { elementRef, isVisible, animationComplete };
};
