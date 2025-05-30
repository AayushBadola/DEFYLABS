
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
            <div className="absolute top-20 left-10 w-3 h-3 bg-purple-400/20 rounded-full floating-orb"></div>
            <div className="absolute top-40 left-32 w-2 h-2 bg-pink-400/15 rounded-full floating-orb"></div>
            <div className="absolute top-60 left-16 w-4 h-4 bg-violet-400/10 rounded-full floating-orb"></div>
            
            {/* Gentle connection lines */}
            <div className="absolute top-20 left-10 w-24 h-px bg-gradient-to-r from-purple-400/10 to-transparent rotate-45 floating-orb"></div>
            <div className="absolute top-40 left-32 w-20 h-px bg-gradient-to-r from-pink-400/8 to-transparent -rotate-12 floating-orb"></div>
          </>
        );
      
      case 'data':
        return (
          <>
            {/* Subtle data streams */}
            <div className="absolute top-0 right-20 w-px h-1/2 bg-gradient-to-b from-transparent via-purple-400/15 to-transparent floating-orb"></div>
            <div className="absolute top-1/4 right-40 w-px h-1/3 bg-gradient-to-b from-transparent via-violet-400/10 to-transparent floating-orb"></div>
            
            {/* Floating data particles */}
            <div className="absolute top-16 right-16 text-purple-400/20 text-xs font-mono floating-orb">01</div>
            <div className="absolute top-32 right-44 text-pink-400/15 text-xs font-mono floating-orb">10</div>
            <div className="absolute top-48 right-20 text-violet-400/10 text-xs font-mono floating-orb">11</div>
          </>
        );
      
      case 'circuit':
        return (
          <>
            {/* Minimal circuit patterns */}
            <div className="absolute bottom-20 left-20 w-16 h-px bg-purple-400/15 floating-orb"></div>
            <div className="absolute bottom-20 left-20 w-px h-16 bg-purple-400/15 floating-orb"></div>
            <div className="absolute bottom-20 left-36 w-px h-8 bg-pink-400/10 floating-orb"></div>
            <div className="absolute bottom-28 left-28 w-8 h-px bg-violet-400/8 floating-orb"></div>
            
            {/* Subtle circuit nodes */}
            <div className="absolute bottom-20 left-20 w-2 h-2 bg-purple-500/20 rounded-sm floating-orb"></div>
            <div className="absolute bottom-20 left-36 w-2 h-2 bg-pink-500/15 rounded-sm floating-orb"></div>
          </>
        );
      
      case 'minimal':
        return (
          <>
            {/* Ultra-subtle floating orbs */}
            <div className="absolute top-1/4 right-10 w-40 h-40 bg-gradient-to-br from-purple-400/5 to-purple-600/5 rounded-full blur-3xl floating-orb"></div>
            <div className="absolute top-3/4 left-10 w-32 h-32 bg-gradient-to-br from-pink-400/4 to-pink-600/4 rounded-full blur-3xl floating-orb"></div>
            <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-br from-violet-400/3 to-violet-600/3 rounded-full blur-2xl floating-orb"></div>
            <div className="absolute bottom-1/4 left-1/3 w-28 h-28 bg-gradient-to-br from-fuchsia-400/3 to-fuchsia-600/3 rounded-full blur-2xl floating-orb"></div>
          </>
        );
      
      default:
        return (
          <>
            {/* Gentle floating orbs */}
            <div className="absolute top-1/4 right-10 w-56 h-56 bg-gradient-to-br from-purple-400/8 to-purple-600/8 rounded-full blur-3xl floating-orb"></div>
            <div className="absolute top-3/4 left-10 w-40 h-40 bg-gradient-to-br from-pink-400/6 to-pink-600/6 rounded-full blur-3xl floating-orb"></div>
            <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-gradient-to-br from-violet-400/5 to-violet-600/5 rounded-full blur-2xl floating-orb"></div>
            <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-gradient-to-br from-fuchsia-400/4 to-fuchsia-600/4 rounded-full blur-3xl floating-orb"></div>
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
