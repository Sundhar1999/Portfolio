import React from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HeroSection = ({ onNavigate }) => {
  const heroData = {
    name: "Sundhar Kaleeswaran",
    title: "Associate Software Developer in Test",
    image: "/assets/images/Profilepic.jpg",
    imageAlt: "Professional headshot of QA automation engineer",
    tagline: "Ensuring software quality through performance testing, automation, and continuous improvement",
    description: `Associate Software Developer in Test with 3+ years of excellence in performance engineering, load testing, and UI automation. I specialize in turning complex testing ecosystems into scalable solutions that enhance reliability and speed. Where automation meets excellence, I ensure every SaaS release performs with confidence — building systems that run flawlessly, scale effortlessly, and deliver quality with every release.`
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-6 py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-secondary rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              
              <h1 className="text-4xl md:text-6xl font-bold text-text-primary leading-tight">
                Hi, I'm{' '}
                <span className="text-gradient">{heroData?.name}</span>
              </h1>
              
              <h2 className="text-xl md:text-2xl text-text-secondary font-medium">
                {heroData?.title}
              </h2>
              
              <p className="text-lg md:text-xl text-primary font-medium">
                {heroData?.tagline}
              </p>
            </div>

            <p className="text-text-secondary text-lg leading-relaxed max-w-2xl">
              {heroData?.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="default"
                size="lg"
                iconName="ArrowRight"
                iconPosition="right"
                onClick={() => onNavigate('/projects-portfolio')}
                className="hover-lift">

                View My Work
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                iconName="Download"
                iconPosition="left"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/assets/resume.pdf';
                  link.download = 'Sundhar_Kaleeswaran_Resume.pdf';
                  link?.click();
                }}
                className="hover-lift">

                Download Resume
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">700</div>
                <div className="text-sm text-text-secondary">Concurrent Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-text-secondary">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">70%</div>
                <div className="text-sm text-text-secondary">Automation Efficiency</div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-gradient-to-tl from-secondary/20 to-primary/20 rounded-full blur-xl"></div>
              
              {/* Main Image Container */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl hover-lift">
                <img
                  src={heroData?.image}
                  alt={heroData?.imageAlt}
                  className="w-full h-full object-cover relative z-10"
                />
              </div>


            </div>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2 text-text-secondary">
          <span className="text-sm">Explore More</span>
          <Icon name="ChevronDown" size={20} color="var(--color-text-secondary)" />
        </div>
      </div>
    </section>);

};

export default HeroSection;