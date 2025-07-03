
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface AIPrecisionTextProps {
  className?: string;
  children?: React.ReactNode;
}

const AIPrecisionText: React.FC<AIPrecisionTextProps> = ({ 
  className = "", 
  children = "AI Precision" 
}) => {
  const { elementRef, isVisible, animationComplete } = useScrollAnimation();

  return (
    <span 
      ref={elementRef}
      className={`
        inline-block font-extrabold letter-spacing-tight
        bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600
        bg-clip-text text-transparent bg-size-200
        ${animationComplete ? 'gsap-animation-complete' : 'gsap-animation-initial'}
        ${className}
      `}
      style={{
        backgroundSize: '200% 200%',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      {children}
    </span>
  );
};

export default AIPrecisionText;
