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
      description: 'Specialized in Selenium, Playwright, achieving 90% automation efficiency'
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



  return (
    <section className="pt-10 pb-4 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Main Introduction */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-10">
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


          </div>

          <div className="space-y-8">
            {/* Quote */}
            <div className="flex items-center justify-center">
              <div className="text-center">
                <blockquote className="text-2xl md:text-3xl font-bold text-gradient">
                  "Believe In Yourself, Be Yourself"
                </blockquote>
              </div>
            </div>

            {/* Social Media Integration */}
            <div className="space-y-4 text-center">
              <h3 className="text-lg font-semibold text-text-primary">Connect With Me</h3>
              <SocialMediaBar variant="horizontal" className="justify-center" />
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


      </div>
    </section>
  );
};

export default IntroductionSection;