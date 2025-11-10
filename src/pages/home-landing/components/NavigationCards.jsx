import React from 'react';
import Icon from '../../../components/AppIcon';

const NavigationCards = ({ onNavigate }) => {
  const navigationSections = [
    {
      id: 'projects',
      title: 'Projects Portfolio',
      description: 'Explore my latest web applications, AI integrations, and innovative solutions',
      icon: 'FolderOpen',
      route: '/projects-portfolio',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      stats: '15+ Projects',
      featured: true
    },
    {
      id: 'skills',
      title: 'Skills & Experience',
      description: 'Discover my technical expertise, professional journey, and core competencies',
      icon: 'User',
      route: '/skills-experience',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      stats: '5+ Years',
      featured: false
    },
    {
      id: 'contact',
      title: 'Contact & Engagement',
      description: 'Connect with me for collaborations, opportunities, and professional discussions',
      icon: 'Mail',
      route: '/contact-engagement',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      stats: 'Available Now',
      featured: false
    }
  ];

  return (
    <section className="py-10 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Explore My Portfolio
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Navigate through different sections to learn more about my work, skills, and how we can collaborate together.
          </p>
        </div>

        {/* Navigation Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {navigationSections?.map((section) => (
            <div
              key={section?.id}
              onClick={() => onNavigate(section?.route)}
              className={`group relative cursor-pointer rounded-2xl overflow-hidden hover-lift nav-transition ${
                section?.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Background */}
              <div className={`${section?.bgColor} p-8 h-full min-h-[280px] flex flex-col justify-between relative overflow-hidden`}>
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <div className={`w-full h-full bg-gradient-to-br ${section?.color} rounded-full blur-2xl`}></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon & Stats */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${section?.color} rounded-xl flex items-center justify-center group-hover:scale-110 nav-transition shadow-lg`}>
                      <Icon name={section?.icon} size={28} color="white" />
                    </div>
                    
                    <div className="text-right">
                      <div className="text-sm font-medium text-text-secondary">
                        {section?.stats}
                      </div>
                      {section?.featured && (
                        <div className="inline-flex items-center space-x-1 mt-1 px-2 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium">
                          <Icon name="Star" size={12} color="var(--color-accent)" />
                          <span>Featured</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-text-primary group-hover:text-primary nav-transition">
                      {section?.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {section?.description}
                    </p>
                  </div>
                </div>

                {/* Action Indicator */}
                <div className="relative z-10 flex items-center justify-between mt-6">
                  <span className="text-sm font-medium text-text-secondary group-hover:text-primary nav-transition">
                    Explore Section
                  </span>
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 nav-transition">
                    <Icon name="ArrowRight" size={16} color="var(--color-text-primary)" />
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 nav-transition"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-muted rounded-full">
            <Icon name="Info" size={16} color="var(--color-text-secondary)" />
            <span className="text-sm text-text-secondary">
              Use the AI assistant for personalized navigation and questions
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavigationCards;