import React from 'react';
import Icon from '../AppIcon';

const SocialMediaBar = ({ className = '', variant = 'horizontal' }) => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: 'Linkedin',
      url: 'https://www.linkedin.com/in/sundhar-k/',
      color: '#0077B5',
      followers: '2.5K'
    },
    {
      name: 'GitHub',
      icon: 'Github',
      url: 'https://github.com/Sundhar1999/',
      color: '#333333',
      followers: '1.2K'
    },
    {
      name: 'Email',
      icon: 'Mail',
      url: 'mailto:sundhark603@gmail.com',
      color: '#EA4335',
      followers: null
    }
  ];

  const handleSocialClick = (url, name) => {
    if (url?.startsWith('mailto:')) {
      window.location.href = url;
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  if (variant === 'vertical') {
    return (
      <div className={`flex flex-col space-y-4 ${className}`}>
        {socialLinks?.map((social) => (
          <button
            key={social?.name}
            onClick={() => handleSocialClick(social?.url, social?.name)}
            className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-muted nav-transition hover-lift"
            title={`Connect on ${social?.name}`}
          >
            <div 
              className="w-10 h-10 rounded-lg flex items-center justify-center nav-transition group-hover:scale-110"
              style={{ backgroundColor: `${social?.color}15` }}
            >
              <Icon 
                name={social?.icon} 
                size={20} 
                color={social?.color} 
              />
            </div>
            <div className="flex-1 text-left">
              <p className="font-medium text-text-primary group-hover:text-primary nav-transition">
                {social?.name}
              </p>
              {social?.followers && (
                <p className="text-xs text-text-secondary">
                  {social?.followers} followers
                </p>
              )}
            </div>
            <Icon 
              name="ExternalLink" 
              size={14} 
              color="var(--color-text-secondary)" 
              className="opacity-0 group-hover:opacity-100 nav-transition"
            />
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      {socialLinks?.map((social) => (
        <button
          key={social?.name}
          onClick={() => handleSocialClick(social?.url, social?.name)}
          className="group relative p-2 rounded-lg hover:bg-muted nav-transition hover-lift"
          title={`Connect on ${social?.name}`}
        >
          <Icon 
            name={social?.icon} 
            size={20} 
            color="var(--color-text-secondary)" 
            className="group-hover:scale-110 nav-transition"
          />
          
          {/* Tooltip */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-text-primary text-white text-xs rounded opacity-0 group-hover:opacity-100 nav-transition pointer-events-none whitespace-nowrap">
            {social?.name}
            {social?.followers && (
              <span className="ml-1 text-gray-300">({social?.followers})</span>
            )}
          </div>
        </button>
      ))}
    </div>
  );
};

export default SocialMediaBar;