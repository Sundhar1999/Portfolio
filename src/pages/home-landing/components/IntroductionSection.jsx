import React from 'react';
import Icon from '../../../components/AppIcon';
import SocialMediaBar from '../../../components/ui/SocialMediaBar';

const IntroductionSection = () => {
  const highlights = [
    {
      icon: 'TestTube',
      title: 'Performance Testing',
      description: 'Expert in JMeter, Load Runner, supporting 700+ concurrent users in enterprise environments'
    },
    {
      icon: 'Bot',
      title: 'Test Automation',
      description: 'Specialized in Selenium, Playwright, achieving 70% automation efficiency'
    },
    {
      icon: 'Activity',
      title: 'API Testing',
      description: 'Comprehensive SOAP/REST API testing with Postman and automated validation'
    },
    {
      icon: 'Zap',
      title: 'Quality Assurance',
      description: 'Ensuring software reliability through rigorous testing methodologies and best practices'
    }
  ];

  const achievements = [
    {
      metric: '700+',
      label: 'Concurrent Users',
      icon: 'Users'
    },
    {
      metric: '70%',
      label: 'Automation Efficiency',
      icon: 'Bot'
    },
    {
      metric: '30%',
      label: 'Performance Gain',
      icon: 'TrendingUp'
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Main Introduction */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                Ensuring Quality Through 
                <span className="text-gradient"> Rigorous Testing</span>
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                I’m an Associate Software Developer in Test who believes in ensuring quality through rigorous testing. To me, great software isn’t just about features—it’s about reliability, precision, and trust. I focus on building systems that perform flawlessly under pressure, turning challenges into opportunities for improvement. Testing, for me, is more than a process—it’s a mindset of crafting confidence in every release.
              </p>
              <p className="text-text-secondary leading-relaxed">
                When I’m not testing, I love exploring new technologies and emerging testing methodologies that challenge my way of thinking. Outside of work, you’ll often find me on the cricket field or discovering new cuisines. Whether it’s mastering a new tool or trying a new dish, I’m always driven by curiosity and a love for continuous learning.
              </p>
            </div>

            {/* Social Media Integration */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-text-primary">Connect With Me</h3>
              <SocialMediaBar variant="horizontal" className="justify-start" />
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-8">
            <div className="grid grid-cols-3 gap-6">
              {achievements?.map((achievement, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md nav-transition">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Icon name={achievement?.icon} size={24} color="white" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">{achievement?.metric}</div>
                  <div className="text-sm text-text-secondary">{achievement?.label}</div>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-primary">
              <blockquote className="text-lg text-text-primary italic mb-4">
                "Quality is not an act, it is a habit. Every test case is an opportunity to prevent issues and ensure excellence."
              </blockquote>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                  <Icon name="Quote" size={16} color="white" />
                </div>
                <div>
                  <div className="font-semibold text-text-primary">Sundhar Kaleeswaran</div>
                  <div className="text-sm text-text-secondary">Associate Software Developer in Test</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
              What I Bring to the Table
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              A comprehensive skill set combined with a passion for innovation and a commitment to delivering exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights?.map((highlight, index) => (
              <div key={index} className="group text-center p-6 rounded-xl hover:bg-white hover:shadow-lg nav-transition">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 nav-transition">
                  <Icon name={highlight?.icon} size={28} color="var(--color-primary)" />
                </div>
                <h4 className="text-lg font-semibold text-text-primary mb-3 group-hover:text-primary nav-transition">
                  {highlight?.title}
                </h4>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {highlight?.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary to-accent p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Next Project?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life with cutting-edge technology and innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="inline-flex items-center space-x-2 px-6 py-3 bg-white/20 rounded-lg">
                <Icon name="Calendar" size={16} color="white" />
                <span className="text-sm">Available for new projects</span>
              </div>
              <div className="inline-flex items-center space-x-2 px-6 py-3 bg-white/20 rounded-lg">
                <Icon name="MapPin" size={16} color="white" />
                <span className="text-sm">Remote & On-site</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;