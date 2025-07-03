
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
    duration = 1
  } = options;
  
  const [isVisible, setIsVisible] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const tl = gsap.timeline({ paused: true });
    
    // Set initial states based on animation type
    switch (animationType) {
      case 'slideLeft':
        gsap.set(element, { x: -100, opacity: 0 });
        tl.to(element, { x: 0, opacity: 1, duration, ease: "power3.out", delay });
        break;
        
      case 'slideRight':
        gsap.set(element, { x: 100, opacity: 0 });
        tl.to(element, { x: 0, opacity: 1, duration, ease: "power3.out", delay });
        break;
        
      case 'slideUp':
        gsap.set(element, { y: 50, opacity: 0 });
        tl.to(element, { y: 0, opacity: 1, duration, ease: "power3.out", delay });
        break;
        
      case 'slideDown':
        gsap.set(element, { y: -50, opacity: 0 });
        tl.to(element, { y: 0, opacity: 1, duration, ease: "power3.out", delay });
        break;
        
      case 'scale':
        gsap.set(element, { scale: 0.8, opacity: 0 });
        tl.to(element, { scale: 1, opacity: 1, duration, ease: "back.out(1.7)", delay });
        break;
        
      case 'rotate':
        gsap.set(element, { rotation: -10, scale: 0.9, opacity: 0 });
        tl.to(element, { rotation: 0, scale: 1, opacity: 1, duration, ease: "power3.out", delay });
        break;
        
      case 'aiPrecision':
        gsap.set(element, { x: -100, opacity: 0, scale: 0.8 });
        tl.to(element, {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          onComplete: () => setAnimationComplete(true)
        })
        .to(element, {
          backgroundPosition: "200% center",
          duration: 2,
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true
        }, "-=0.5");
        break;
        
      default: // fade
        gsap.set(element, { opacity: 0 });
        tl.to(element, { opacity: 1, duration, ease: "power2.out", delay });
    }

    // ScrollTrigger setup
    const trigger = ScrollTrigger.create({
      trigger: element,
      start: "top 85%",
      onEnter: () => {
        setIsVisible(true);
        tl.play();
        
        if (triggerOnce) {
          trigger.kill();
        }
      },
      onLeave: () => {
        if (!triggerOnce) {
          setIsVisible(false);
          setAnimationComplete(false);
          tl.pause().progress(0);
        }
      }
    });

    return () => {
      tl.kill();
      trigger.kill();
    };
  }, [threshold, triggerOnce, animationType, delay, duration]);

  return { elementRef, isVisible, animationComplete };
};
