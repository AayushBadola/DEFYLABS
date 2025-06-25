
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
        ${isVisible ? 'ai-precision-scroll-trigger' : 'ai-precision-initial'}
        ${animationComplete ? 'ai-precision-final' : ''}
        ${className}
      `}
    >
      {children}
    </span>
  );
};

export default AIPrecisionText;
