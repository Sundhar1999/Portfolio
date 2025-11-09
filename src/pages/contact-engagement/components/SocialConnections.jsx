import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SocialConnections = () => {
  const socialPlatforms = [
    {
      name: 'LinkedIn',
      icon: 'Linkedin',
      url: 'https://linkedin.com/in/alexdeveloper',
      followers: '2,847',
      description: 'Professional updates and industry insights',
      color: '#0077B5',
      isActive: true,
      lastPost: '2 days ago'
    },
    {
      name: 'GitHub',
      icon: 'Github',
      url: 'https://github.com/alexdeveloper',
      followers: '1,234',
      description: 'Open source projects and code repositories',
      color: '#333333',
      isActive: true,
      lastPost: '1 day ago'
    },
    {
      name: 'Twitter',
      icon: 'Twitter',
      url: 'https://twitter.com/alexdeveloper',
      followers: '892',
      description: 'Tech thoughts and quick updates',
      color: '#1DA1F2',
      isActive: true,
      lastPost: '5 hours ago'
    },
    {
      name: 'Dribbble',
      icon: 'Dribbble',
      url: 'https://dribbble.com/alexdeveloper',
      followers: '456',
      description: 'Design work and creative projects',
      color: '#EA4C89',
      isActive: false,
      lastPost: '1 week ago'
    },
    {
      name: 'Medium',
      icon: 'BookOpen',
      url: 'https://medium.com/@alexdeveloper',
      followers: '678',
      description: 'Technical articles and tutorials',
      color: '#00AB6C',
      isActive: true,
      lastPost: '3 days ago'
    },
    {
      name: 'YouTube',
      icon: 'Play',
      url: 'https://youtube.com/@alexdeveloper',
      followers: '234',
      description: 'Coding tutorials and tech reviews',
      color: '#FF0000',
      isActive: false,
      lastPost: '2 weeks ago'
    }
  ];

  const handleSocialClick = (url, name) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const getActivityStatus = (isActive, lastPost) => {
    if (isActive) {
      return {
        status: 'Active',
        color: 'var(--color-success)',
        icon: 'Circle'
      };
    }
    return {
      status: 'Inactive',
      color: 'var(--color-text-secondary)',
      icon: 'Circle'
    };
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-surface rounded-xl p-6 shadow-sm border border-border">
        <h3 className="text-xl font-semibold text-text-primary mb-2 flex items-center space-x-2">
          <Icon name="Users" size={24} color="var(--color-primary)" />
          <span>Connect on Social Media</span>
        </h3>
        <p className="text-text-secondary">
          Follow me on various platforms to stay updated with my latest work and insights.
        </p>
      </div>
      {/* Social Platforms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {socialPlatforms?.map((platform) => {
          const activity = getActivityStatus(platform?.isActive, platform?.lastPost);
          
          return (
            <div
              key={platform?.name}
              className="bg-surface rounded-xl p-6 shadow-sm border border-border hover:border-primary nav-transition hover-lift cursor-pointer"
              onClick={() => handleSocialClick(platform?.url, platform?.name)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${platform?.color}15` }}
                  >
                    <Icon 
                      name={platform?.icon} 
                      size={24} 
                      color={platform?.color} 
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary">{platform?.name}</h4>
                    <div className="flex items-center space-x-2">
                      <Icon 
                        name={activity?.icon} 
                        size={8} 
                        color={activity?.color} 
                      />
                      <span className="text-xs text-text-secondary">{activity?.status}</span>
                    </div>
                  </div>
                </div>
                <Icon 
                  name="ExternalLink" 
                  size={16} 
                  color="var(--color-text-secondary)" 
                />
              </div>
              <p className="text-sm text-text-secondary mb-4">
                {platform?.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <p className="text-lg font-semibold text-text-primary">
                      {platform?.followers}
                    </p>
                    <p className="text-xs text-text-secondary">Followers</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium text-text-primary">
                      {platform?.lastPost}
                    </p>
                    <p className="text-xs text-text-secondary">Last post</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-primary to-accent rounded-xl p-6 text-white">
        <div className="flex items-center space-x-3 mb-4">
          <Icon name="Mail" size={24} color="white" />
          <h3 className="text-xl font-semibold">Stay Updated</h3>
        </div>
        
        <p className="mb-4 opacity-90">
          Get notified about new projects, articles, and opportunities. No spam, just valuable updates.
        </p>
        
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-4 py-2 rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-white"
          />
          <Button
            variant="secondary"
            iconName="Send"
            iconPosition="left"
            className="bg-white text-primary hover:bg-gray-100"
          >
            Subscribe
          </Button>
        </div>
        
        <p className="text-xs opacity-75 mt-3">
          Join 500+ developers and designers who get my monthly newsletter.
        </p>
      </div>
      {/* Social Stats Summary */}
      <div className="bg-surface rounded-xl p-6 shadow-sm border border-border">
        <h4 className="text-lg font-semibold text-text-primary mb-4">Social Media Impact</h4>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-muted rounded-lg">
            <p className="text-2xl font-bold text-primary">5.3K+</p>
            <p className="text-sm text-text-secondary">Total Followers</p>
          </div>
          
          <div className="text-center p-4 bg-muted rounded-lg">
            <p className="text-2xl font-bold text-accent">127</p>
            <p className="text-sm text-text-secondary">Posts This Year</p>
          </div>
          
          <div className="text-center p-4 bg-muted rounded-lg">
            <p className="text-2xl font-bold text-success">89%</p>
            <p className="text-sm text-text-secondary">Engagement Rate</p>
          </div>
          
          <div className="text-center p-4 bg-muted rounded-lg">
            <p className="text-2xl font-bold text-text-primary">4</p>
            <p className="text-sm text-text-secondary">Active Platforms</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialConnections;