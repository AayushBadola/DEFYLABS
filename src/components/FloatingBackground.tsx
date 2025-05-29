
import React from 'react';

interface FloatingBackgroundProps {
  variant?: 'default' | 'neural' | 'data' | 'circuit';
}

const FloatingBackground: React.FC<FloatingBackgroundProps> = ({ variant = 'default' }) => {
  const getVariantElements = () => {
    switch (variant) {
      case 'neural':
        return (
          <>
            {/* Neural network nodes */}
            <div className="absolute top-20 left-10 w-3 h-3 bg-sky-400/30 rounded-full animate-pulse"></div>
            <div className="absolute top-40 left-32 w-2 h-2 bg-blue-400/40 rounded-full animate-pulse animation-delay-1000"></div>
            <div className="absolute top-60 left-16 w-4 h-4 bg-cyan-400/25 rounded-full animate-pulse animation-delay-2000"></div>
            
            {/* Connection lines */}
            <div className="absolute top-20 left-10 w-24 h-0.5 bg-gradient-to-r from-sky-400/20 to-transparent rotate-45 animate-pulse"></div>
            <div className="absolute top-40 left-32 w-20 h-0.5 bg-gradient-to-r from-blue-400/20 to-transparent -rotate-12 animate-pulse animation-delay-1000"></div>
          </>
        );
      
      case 'data':
        return (
          <>
            {/* Data stream lines */}
            <div className="absolute top-0 right-20 w-0.5 h-full bg-gradient-to-b from-transparent via-sky-400/30 to-transparent animate-pulse"></div>
            <div className="absolute top-0 right-40 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-400/20 to-transparent animate-pulse animation-delay-1500"></div>
            
            {/* Binary particles */}
            <div className="absolute top-16 right-16 text-sky-400/30 text-xs font-mono animate-float">1010</div>
            <div className="absolute top-32 right-44 text-blue-400/30 text-xs font-mono animate-float animation-delay-1000">1101</div>
            <div className="absolute top-48 right-20 text-cyan-400/30 text-xs font-mono animate-float animation-delay-2000">0110</div>
          </>
        );
      
      case 'circuit':
        return (
          <>
            {/* Circuit board patterns */}
            <div className="absolute bottom-20 left-20 w-16 h-0.5 bg-sky-400/20"></div>
            <div className="absolute bottom-20 left-20 w-0.5 h-16 bg-sky-400/20"></div>
            <div className="absolute bottom-20 left-36 w-0.5 h-8 bg-blue-400/20"></div>
            <div className="absolute bottom-28 left-28 w-8 h-0.5 bg-cyan-400/20"></div>
            
            {/* Circuit nodes */}
            <div className="absolute bottom-20 left-20 w-2 h-2 bg-sky-500/40 rounded-sm animate-glow"></div>
            <div className="absolute bottom-20 left-36 w-2 h-2 bg-blue-500/40 rounded-sm animate-glow animation-delay-1000"></div>
          </>
        );
      
      default:
        return (
          <>
            {/* Default floating orbs */}
            <div className="absolute top-1/4 right-10 w-64 h-64 bg-gradient-to-br from-sky-400/10 to-sky-600/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute top-3/4 left-10 w-48 h-48 bg-gradient-to-br from-blue-400/10 to-blue-600/10 rounded-full blur-3xl animate-float animation-delay-2000"></div>
            <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-gradient-to-br from-cyan-400/10 to-cyan-600/10 rounded-full blur-2xl animate-float animation-delay-4000"></div>
          </>
        );
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {getVariantElements()}
    </div>
  );
};

export default FloatingBackground;
