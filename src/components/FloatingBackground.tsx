
import React from 'react';

interface FloatingBackgroundProps {
  variant?: 'default' | 'neural' | 'data' | 'circuit' | 'minimal';
}

const FloatingBackground: React.FC<FloatingBackgroundProps> = ({ variant = 'minimal' }) => {
  const getVariantElements = () => {
    switch (variant) {
      case 'neural':
        return (
          <>
            {/* Subtle neural network nodes */}
            <div className="absolute top-20 left-10 w-2 h-2 bg-sky-400/20 rounded-full animate-pulse-slow"></div>
            <div className="absolute top-40 left-32 w-1.5 h-1.5 bg-blue-400/15 rounded-full animate-pulse-slow animation-delay-2000"></div>
            <div className="absolute top-60 left-16 w-2.5 h-2.5 bg-cyan-400/10 rounded-full animate-pulse-slow animation-delay-4000"></div>
            
            {/* Gentle connection lines */}
            <div className="absolute top-20 left-10 w-20 h-px bg-gradient-to-r from-sky-400/10 to-transparent rotate-45 animate-pulse-slow"></div>
            <div className="absolute top-40 left-32 w-16 h-px bg-gradient-to-r from-blue-400/8 to-transparent -rotate-12 animate-pulse-slow animation-delay-2000"></div>
          </>
        );
      
      case 'data':
        return (
          <>
            {/* Subtle data streams */}
            <div className="absolute top-0 right-20 w-px h-1/2 bg-gradient-to-b from-transparent via-sky-400/15 to-transparent animate-pulse-slow"></div>
            <div className="absolute top-1/4 right-40 w-px h-1/3 bg-gradient-to-b from-transparent via-blue-400/10 to-transparent animate-pulse-slow animation-delay-1500"></div>
            
            {/* Floating binary particles */}
            <div className="absolute top-16 right-16 text-sky-400/20 text-xs font-mono animate-float-gentle">01</div>
            <div className="absolute top-32 right-44 text-blue-400/15 text-xs font-mono animate-float-gentle animation-delay-2000">10</div>
            <div className="absolute top-48 right-20 text-cyan-400/10 text-xs font-mono animate-float-gentle animation-delay-4000">11</div>
          </>
        );
      
      case 'circuit':
        return (
          <>
            {/* Minimal circuit patterns */}
            <div className="absolute bottom-20 left-20 w-12 h-px bg-sky-400/15"></div>
            <div className="absolute bottom-20 left-20 w-px h-12 bg-sky-400/15"></div>
            <div className="absolute bottom-20 left-32 w-px h-6 bg-blue-400/10"></div>
            <div className="absolute bottom-26 left-26 w-6 h-px bg-cyan-400/8"></div>
            
            {/* Subtle circuit nodes */}
            <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-sky-500/20 rounded-sm animate-glow-gentle"></div>
            <div className="absolute bottom-20 left-32 w-1.5 h-1.5 bg-blue-500/15 rounded-sm animate-glow-gentle animation-delay-2000"></div>
          </>
        );
      
      case 'minimal':
        return (
          <>
            {/* Ultra-subtle floating orbs */}
            <div className="absolute top-1/4 right-10 w-32 h-32 bg-gradient-to-br from-sky-400/5 to-sky-600/5 rounded-full blur-3xl animate-float-gentle"></div>
            <div className="absolute top-3/4 left-10 w-24 h-24 bg-gradient-to-br from-blue-400/4 to-blue-600/4 rounded-full blur-3xl animate-float-gentle animation-delay-4000"></div>
            <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-br from-cyan-400/3 to-cyan-600/3 rounded-full blur-2xl animate-float-gentle animation-delay-8000"></div>
          </>
        );
      
      default:
        return (
          <>
            {/* Gentle floating orbs */}
            <div className="absolute top-1/4 right-10 w-48 h-48 bg-gradient-to-br from-sky-400/8 to-sky-600/8 rounded-full blur-3xl animate-float-gentle"></div>
            <div className="absolute top-3/4 left-10 w-36 h-36 bg-gradient-to-br from-blue-400/6 to-blue-600/6 rounded-full blur-3xl animate-float-gentle animation-delay-4000"></div>
            <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-br from-cyan-400/5 to-cyan-600/5 rounded-full blur-2xl animate-float-gentle animation-delay-8000"></div>
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
