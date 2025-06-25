
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface PageParticlesProps {
  count?: number;
}

const PageParticles: React.FC<PageParticlesProps> = ({ count = 15 }) => {
  const location = useLocation();
  const [particles, setParticles] = useState<Array<{ id: number; style: React.CSSProperties }>>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      
      for (let i = 0; i < count; i++) {
        const style: React.CSSProperties = {
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 8}s`,
        };

        // Different positioning and styling based on page
        switch (location.pathname) {
          case '/':
            // Home: Floating particles
            style.top = `${Math.random() * 100}%`;
            break;
          case '/about':
            // About: Data streams from top
            style.top = `${Math.random() * -50}%`;
            style.left = `${Math.random() * 100}%`;
            break;
          case '/services':
            // Services: Circuit lines
            style.top = `${Math.random() * 100}%`;
            style.width = `${50 + Math.random() * 200}px`;
            break;
          case '/contact':
            // Contact: Connection pulses
            style.top = `${Math.random() * 100}%`;
            break;
          default:
            style.top = `${Math.random() * 100}%`;
        }

        newParticles.push({
          id: i,
          style
        });
      }
      
      setParticles(newParticles);
    };

    generateParticles();
  }, [location.pathname, count]);

  const getPageClass = () => {
    switch (location.pathname) {
      case '/':
        return 'home-particles';
      case '/about':
        return 'about-particles';
      case '/services':
        return 'services-particles';
      case '/contact':
        return 'contact-particles';
      default:
        return 'home-particles';
    }
  };

  const renderParticle = (particle: { id: number; style: React.CSSProperties }) => {
    if (location.pathname === '/services') {
      return (
        <div
          key={particle.id}
          className="circuit-line"
          style={particle.style}
        />
      );
    }

    return (
      <div
        key={particle.id}
        className="particle"
        style={particle.style}
      />
    );
  };

  return (
    <div className={`page-particles ${getPageClass()}`}>
      {particles.map(renderParticle)}
    </div>
  );
};

export default PageParticles;
