
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface UseScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { threshold = 0.1, triggerOnce = true } = options;
  const [isVisible, setIsVisible] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // GSAP Timeline for complex animations
    const tl = gsap.timeline({ paused: true });
    
    // Initial state
    gsap.set(element, {
      x: -100,
      opacity: 0,
      scale: 0.8,
    });

    // Animation sequence
    tl.to(element, {
      x: 0,
      opacity: 1,
      scale: 1,
      duration: 1.2,
      ease: "power3.out",
      onComplete: () => {
        setAnimationComplete(true);
      }
    })
    .to(element, {
      backgroundPosition: "200% center",
      duration: 2,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true
    }, "-=0.5");

    // ScrollTrigger setup
    ScrollTrigger.create({
      trigger: element,
      start: "top 80%",
      onEnter: () => {
        setIsVisible(true);
        tl.play();
        
        if (triggerOnce) {
          ScrollTrigger.getById('ai-precision-trigger')?.kill();
        }
      },
      onLeave: () => {
        if (!triggerOnce) {
          setIsVisible(false);
          setAnimationComplete(false);
          tl.pause().progress(0);
        }
      },
      id: 'ai-precision-trigger'
    });

    return () => {
      tl.kill();
      ScrollTrigger.getById('ai-precision-trigger')?.kill();
    };
  }, [threshold, triggerOnce]);

  return { elementRef, isVisible, animationComplete };
};
