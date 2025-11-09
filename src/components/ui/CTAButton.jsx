import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from './Button';

const CTAButton = ({ 
  className = '',
  variant = 'default',
  size = 'default',
  position = 'inline' // 'inline', 'floating', 'sticky'
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const getContextualCTA = () => {
    const path = location?.pathname;
    
    switch (path) {
      case '/home-landing':
        return {
          text: 'View My Work',
          icon: 'ArrowRight',
          action: () => navigate('/projects-portfolio'),
          description: 'Explore my latest projects'
        };
      case '/projects-portfolio':
        return {
          text: 'See My Skills',
          icon: 'User',
          action: () => navigate('/skills-experience'),
          description: 'Learn about my expertise'
        };
      case '/skills-experience':
        return {
          text: "Let's Connect",
          icon: 'MessageCircle',
          action: () => navigate('/contact-engagement'),
          description: 'Start a conversation'
        };
      case '/contact-engagement':
        return {
          text: 'Download Resume',
          icon: 'Download',
          action: () => {
            // Simulate resume download
            const link = document.createElement('a');
            link.href = '/assets/resume.pdf';
            link.download = 'Resume.pdf';
            link?.click();
          },
          description: 'Get my latest resume'
        };
      default:
        return {
          text: 'Get In Touch',
          icon: 'Mail',
          action: () => navigate('/contact-engagement'),
          description: 'Start our conversation'
        };
    }
  };

  const cta = getContextualCTA();

  const baseClasses = position === 'floating' ?'fixed bottom-6 left-6 z-200 shadow-lg'
    : position === 'sticky' ?'sticky top-24 z-100' :'';

  if (position === 'floating') {
    return (
      <div className={`${baseClasses} ${className}`}>
        <div className="group">
          <Button
            variant={variant}
            size={size}
            iconName={cta?.icon}
            iconPosition="left"
            onClick={cta?.action}
            className="hover-lift shadow-lg hover:shadow-xl nav-transition"
          >
            {cta?.text}
          </Button>
          
          {/* Tooltip */}
          <div className="absolute bottom-full left-0 mb-2 px-3 py-2 bg-text-primary text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 nav-transition pointer-events-none whitespace-nowrap">
            {cta?.description}
            <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-text-primary"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${baseClasses} ${className}`}>
      <Button
        variant={variant}
        size={size}
        iconName={cta?.icon}
        iconPosition="right"
        onClick={cta?.action}
        className="hover-lift nav-transition"
      >
        {cta?.text}
      </Button>
    </div>
  );
};

export default CTAButton;