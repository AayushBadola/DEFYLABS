
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

    // Set initial visibility to prevent flashing
    gsap.set(element, { visibility: 'visible' });

    // Set minimal initial states to prevent blinking
    switch (animationType) {
      case 'slideLeft':
        gsap.set(element, { x: -20, opacity: 0.8 });
        break;
        
      case 'slideRight':
        gsap.set(element, { x: 20, opacity: 0.8 });
        break;
        
      case 'slideUp':
        gsap.set(element, { y: 20, opacity: 0.8 });
        break;
        
      case 'slideDown':
        gsap.set(element, { y: -20, opacity: 0.8 });
        break;
        
      case 'scale':
        gsap.set(element, { scale: 0.98, opacity: 0.9 });
        break;
        
      case 'rotate':
        gsap.set(element, { rotation: -2, scale: 0.98, opacity: 0.9 });
        break;
        
      case 'aiPrecision':
        gsap.set(element, { x: -15, opacity: 0.9, scale: 0.98 });
        break;
        
      default: // fade
        gsap.set(element, { opacity: 0.9 });
    }

    let currentScrollTrigger: ScrollTrigger | null = null;

    try {
      currentScrollTrigger = ScrollTrigger.create({
        trigger: element,
        start: "top 85%",
        onEnter: () => {
          setIsVisible(true);
          
          // Create smooth animation
          const tl = gsap.timeline();
          
          switch (animationType) {
            case 'slideLeft':
            case 'slideRight':
              tl.to(element, { x: 0, opacity: 1, duration: duration * 0.8, ease: "power1.out", delay });
              break;
              
            case 'slideUp':
            case 'slideDown':
              tl.to(element, { y: 0, opacity: 1, duration: duration * 0.8, ease: "power1.out", delay });
              break;
              
            case 'scale':
              tl.to(element, { scale: 1, opacity: 1, duration: duration * 0.8, ease: "power1.out", delay });
              break;
              
            case 'rotate':
              tl.to(element, { rotation: 0, scale: 1, opacity: 1, duration: duration * 0.8, ease: "power1.out", delay });
              break;
              
            case 'aiPrecision':
              tl.to(element, {
                x: 0,
                opacity: 1,
                scale: 1,
                duration: duration * 0.8,
                ease: "power1.out",
                delay,
                onComplete: () => setAnimationComplete(true)
              });
              break;
              
            default: // fade
              tl.to(element, { opacity: 1, duration: duration * 0.8, ease: "power1.out", delay });
          }
          
          if (triggerOnce && currentScrollTrigger) {
            currentScrollTrigger.kill();
          }
        }
      });
    } catch (error) {
      console.error('ScrollTrigger error:', error);
      // Fallback: just show the element immediately
      gsap.set(element, { opacity: 1, x: 0, y: 0, scale: 1, rotation: 0, visibility: 'visible' });
      setIsVisible(true);
      setAnimationComplete(true);
    }

    return () => {
      if (currentScrollTrigger) {
        currentScrollTrigger.kill();
      }
    };
  }, [threshold, triggerOnce, animationType, delay, duration]);

  return { elementRef, isVisible, animationComplete };
};
