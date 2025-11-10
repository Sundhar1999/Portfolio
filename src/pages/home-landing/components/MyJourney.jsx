import React from 'react';
import Icon from '../../../components/AppIcon';

const MyJourney = () => {
  const journeySteps = [
    {
      id: 1,
      title: 'SVCE',
      subtitle: 'Sri Venkateswara College of Engineering',
      location: 'Chennai, India',
      period: '2017-2021',
      description: 'Bachelor of Engineering in Computer Science',
      logo: '/assets/images/SVCE-logo.png',
      color: 'from-orange-500 to-red-500',
      flag: '🇮🇳'
    },
    {
      id: 2,
      title: 'LTIMindtree',
      subtitle: 'Quality Engineer',
      location: 'Chennai, India',
      period: '2021-2023',
      description: 'Started professional journey in Quality Assurance and Testing',
      logo: '/assets/images/ltimindtree-logo.jfif',
      color: 'from-blue-500 to-indigo-500',
      flag: '🇮🇳'
    },
    {
      id: 3,
      title: 'University of Windsor',
      subtitle: 'Master of Applied Computing',
      location: 'Windsor, Canada',
      period: '2023-2024',
      description: 'Advanced studies in Computer Science',
      logo: '/assets/images/uwindsor-logo.jfif',
      color: 'from-purple-500 to-pink-500',
      flag: '🇨🇦'
    },
    {
      id: 4,
      title: 'Tecsys Inc',
      subtitle: 'Associate Software Developer in Test',
      location: 'Montreal, Canada',
      period: '2024-Present',
      description: 'Leading QA automation and performance testing',
      logo: '/assets/images/tecsys-logo.png',
      color: 'from-green-500 to-emerald-500',
      flag: '🇨🇦'
    }
  ];

  return (
    <section className="pt-8 pb-16 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            My <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-6">
            From the vibrant tech scene of Chennai to the innovation hubs of Canada - 
            a journey of growth, learning, and professional excellence.
          </p>
          <div className="flex items-center justify-center space-x-4 text-2xl">
            <span>🇮🇳</span>
            <Icon name="ArrowRight" size={20} color="var(--color-primary)" />
            <span>🇨🇦</span>
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-orange-200 via-blue-200 via-purple-200 to-green-200 transform -translate-y-1/2 z-0"></div>
          
          {/* Journey Steps */}
          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {journeySteps.map((step, index) => (
              <div key={step.id} className="group relative">
                {/* Card */}
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl nav-transition border border-gray-100 group-hover:-translate-y-2">
                  {/* Header */}
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 nav-transition shadow-lg border border-gray-200">
                      <img 
                        src={step.logo} 
                        alt={`${step.title} logo`}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-2xl">{step.flag}</span>
                      <span className="text-sm font-medium text-text-secondary bg-gray-100 px-2 py-1 rounded-full">
                        {step.period}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-2">
                    <h3 className="text-lg font-bold text-text-primary group-hover:text-primary nav-transition">
                      {step.title}
                    </h3>
                    <h4 className="text-sm font-medium text-text-secondary">
                      {step.subtitle}
                    </h4>
                    <div className="flex items-center justify-center space-x-1 text-xs text-text-secondary">
                      <Icon name="MapPin" size={12} color="var(--color-text-secondary)" />
                      <span>{step.location}</span>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed mt-3">
                      {step.description}
                    </p>
                  </div>

                  {/* Step Number */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                    {step.id}
                  </div>
                </div>

                {/* Mobile Arrow */}
                {index < journeySteps.length - 1 && (
                  <div className="md:hidden flex justify-center my-4">
                    <Icon name="ArrowDown" size={20} color="var(--color-primary)" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Journey Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-4 bg-white rounded-xl shadow-md">
            <div className="text-2xl font-bold text-primary mb-1">2</div>
            <div className="text-sm text-text-secondary">Countries</div>
          </div>
          <div className="text-center p-4 bg-white rounded-xl shadow-md">
            <div className="text-2xl font-bold text-primary mb-1">4</div>
            <div className="text-sm text-text-secondary">Milestones</div>
          </div>
          <div className="text-center p-4 bg-white rounded-xl shadow-md">
            <div className="text-2xl font-bold text-primary mb-1">3+</div>
            <div className="text-sm text-text-secondary">Years Experience</div>
          </div>
          <div className="text-center p-4 bg-white rounded-xl shadow-md">
            <div className="text-2xl font-bold text-primary mb-1">∞</div>
            <div className="text-sm text-text-secondary">Learning</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyJourney;