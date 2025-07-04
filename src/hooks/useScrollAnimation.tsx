
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
    triggerOnce = false, // Changed to false for more dynamic animations
    animationType = 'fade',
    delay = 0,
    duration = 1.2 // Increased for more fluid motion
  } = options;
  
  const [isVisible, setIsVisible] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Set initial visibility immediately
    gsap.set(element, { visibility: 'visible' });

    // More dramatic initial states for fluid animations
    switch (animationType) {
      case 'slideLeft':
        gsap.set(element, { x: -60, opacity: 0, scale: 0.95 });
        break;
        
      case 'slideRight':
        gsap.set(element, { x: 60, opacity: 0, scale: 0.95 });
        break;
        
      case 'slideUp':
        gsap.set(element, { y: 60, opacity: 0, scale: 0.95 });
        break;
        
      case 'slideDown':
        gsap.set(element, { y: -60, opacity: 0, scale: 0.95 });
        break;
        
      case 'scale':
        gsap.set(element, { scale: 0.8, opacity: 0, rotation: -5 });
        break;
        
      case 'rotate':
        gsap.set(element, { rotation: -15, scale: 0.8, opacity: 0 });
        break;
        
      case 'aiPrecision':
        gsap.set(element, { x: -30, opacity: 0, scale: 0.9, rotation: -3 });
        break;
        
      default: // fade
        gsap.set(element, { opacity: 0, scale: 0.95 });
    }

    let currentScrollTrigger: ScrollTrigger | null = null;

    try {
      currentScrollTrigger = ScrollTrigger.create({
        trigger: element,
        start: "top 90%",
        end: "bottom 10%",
        toggleActions: "play none none reverse", // Reverse animation when scrolling up
        onEnter: () => {
          setIsVisible(true);
          
          // Create super fluid animations with advanced easing
          const tl = gsap.timeline();
          
          switch (animationType) {
            case 'slideLeft':
            case 'slideRight':
              tl.to(element, { 
                x: 0, 
                opacity: 1, 
                scale: 1, 
                duration: duration, 
                ease: "power3.out", 
                delay 
              });
              break;
              
            case 'slideUp':
            case 'slideDown':
              tl.to(element, { 
                y: 0, 
                opacity: 1, 
                scale: 1, 
                duration: duration, 
                ease: "power3.out", 
                delay 
              });
              break;
              
            case 'scale':
              tl.to(element, { 
                scale: 1, 
                opacity: 1, 
                rotation: 0, 
                duration: duration, 
                ease: "elastic.out(1, 0.3)", 
                delay 
              });
              break;
              
            case 'rotate':
              tl.to(element, { 
                rotation: 0, 
                scale: 1, 
                opacity: 1, 
                duration: duration, 
                ease: "back.out(1.7)", 
                delay 
              });
              break;
              
            case 'aiPrecision':
              tl.to(element, {
                x: 0,
                opacity: 1,
                scale: 1,
                rotation: 0,
                duration: duration,
                ease: "power4.out",
                delay,
                onComplete: () => setAnimationComplete(true)
              });
              break;
              
            default: // fade
              tl.to(element, { 
                opacity: 1, 
                scale: 1, 
                duration: duration, 
                ease: "power2.out", 
                delay 
              });
          }
        },
        onLeave: () => {
          if (!triggerOnce) {
            // Reverse animation when leaving viewport
            const tl = gsap.timeline();
            switch (animationType) {
              case 'slideLeft':
                tl.to(element, { x: -30, opacity: 0.7, scale: 0.98, duration: 0.5, ease: "power2.in" });
                break;
              case 'slideRight':
                tl.to(element, { x: 30, opacity: 0.7, scale: 0.98, duration: 0.5, ease: "power2.in" });
                break;
              case 'slideUp':
                tl.to(element, { y: 30, opacity: 0.7, scale: 0.98, duration: 0.5, ease: "power2.in" });
                break;
              case 'slideDown':
                tl.to(element, { y: -30, opacity: 0.7, scale: 0.98, duration: 0.5, ease: "power2.in" });
                break;
              default:
                tl.to(element, { opacity: 0.7, scale: 0.98, duration: 0.5, ease: "power2.in" });
            }
          }
        },
        onEnterBack: () => {
          // Re-animate when scrolling back up
          setIsVisible(true);
          const tl = gsap.timeline();
          tl.to(element, { 
            x: 0, 
            y: 0, 
            opacity: 1, 
            scale: 1, 
            rotation: 0, 
            duration: 0.8, 
            ease: "power3.out" 
          });
        }
      });
    } catch (error) {
      console.error('ScrollTrigger error:', error);
      // Enhanced fallback with immediate smooth transition
      gsap.to(element, { 
        opacity: 1, 
        x: 0, 
        y: 0, 
        scale: 1, 
        rotation: 0, 
        duration: 0.6, 
        ease: "power2.out" 
      });
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
