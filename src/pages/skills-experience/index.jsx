import React from 'react';
import Header from '../../components/ui/Header';
import AIChatbot from '../../components/ui/AIChatbot';
import SocialMediaBar from '../../components/ui/SocialMediaBar';
import CTAButton from '../../components/ui/CTAButton';
import Icon from '../../components/AppIcon';
import SkillsMatrix from './components/SkillsMatrix';
import ExperienceTimeline from './components/ExperienceTimeline';
import SkillRecommendations from './components/SkillRecommendations';

const SkillsExperience = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="px-8 py-8 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              QA & <span className="text-gradient">Testing Expertise</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Explore my specialized journey in Quality Assurance, Performance Testing, and Test Automation. 
              Discover how my testing expertise can ensure the quality and reliability of your software products.
            </p>
          </div>

          {/* Expertise Cards */}
          <div className="mb-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="group text-center p-6 bg-surface rounded-xl border border-border hover:shadow-lg nav-transition">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 nav-transition">
                  <Icon name="TestTube" size={28} color="var(--color-primary)" />
                </div>
                <h4 className="text-lg font-semibold text-text-primary mb-3 group-hover:text-primary nav-transition">
                  Performance Testing
                </h4>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Expert in JMeter, Load Runner, supporting 700+ concurrent users in enterprise environments
                </p>
              </div>
              
              <div className="group text-center p-6 bg-surface rounded-xl border border-border hover:shadow-lg nav-transition">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 nav-transition">
                  <Icon name="Bot" size={28} color="var(--color-primary)" />
                </div>
                <h4 className="text-lg font-semibold text-text-primary mb-3 group-hover:text-primary nav-transition">
                  Test Automation
                </h4>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Specialized in Selenium, Playwright, achieving 90% automation efficiency
                </p>
              </div>
              
              <div className="group text-center p-6 bg-surface rounded-xl border border-border hover:shadow-lg nav-transition">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 nav-transition">
                  <Icon name="Activity" size={28} color="var(--color-primary)" />
                </div>
                <h4 className="text-lg font-semibold text-text-primary mb-3 group-hover:text-primary nav-transition">
                  API Testing
                </h4>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Comprehensive SOAP/REST API testing with Postman and automated validation
                </p>
              </div>
              
              <div className="group text-center p-6 bg-surface rounded-xl border border-border hover:shadow-lg nav-transition">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 nav-transition">
                  <Icon name="Zap" size={28} color="var(--color-primary)" />
                </div>
                <h4 className="text-lg font-semibold text-text-primary mb-3 group-hover:text-primary nav-transition">
                  Quality Assurance
                </h4>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Ensuring software reliability through rigorous testing methodologies and best practices
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Main Content */}
      <section className="px-8 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Skills Matrix Section */}
          <div className="mb-8">
            <SkillsMatrix />
          </div>

          {/* Experience Timeline Section */}
          <div className="mb-8">
            <ExperienceTimeline />
          </div>

          {/* AI Recommendations Section */}
          <div className="mb-8">
            <SkillRecommendations />
          </div>

          {/* Professional Summary */}
          <div className="bg-surface rounded-xl border border-border p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold text-text-primary mb-4">Professional Summary</h2>
              <p className="text-text-secondary max-w-4xl mx-auto">
                A dedicated QA Performance & Automation Engineer with 3+ years of experience in ensuring software quality through comprehensive testing strategies. 
                Proven track record of optimizing application performance, implementing automated testing frameworks, and delivering reliable software solutions. 
                Committed to continuous improvement in testing methodologies and quality assurance practices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Innovation Driven</h3>
                <p className="text-sm text-text-secondary">
                  Always exploring new technologies and methodologies to deliver cutting-edge solutions
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Results Focused</h3>
                <p className="text-sm text-text-secondary">
                  Committed to delivering measurable results and exceeding project expectations
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Team Collaboration</h3>
                <p className="text-sm text-text-secondary">
                  Strong believer in collaborative development and knowledge sharing
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Social Media & CTA */}
      <section className="px-8 py-8 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-text-primary mb-4">Let's Connect</h2>
          <p className="text-text-secondary mb-6">
            Interested in working together or discussing opportunities? I'd love to hear from you.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-6">
            <SocialMediaBar variant="horizontal" />
          </div>
          
          <CTAButton 
            variant="default" 
            size="lg"
            className="mx-auto"
          />
        </div>
      </section>
      {/* Footer */}
      <footer className="px-8 py-8 border-t border-border bg-surface">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-text-secondary text-sm">
            © {new Date()?.getFullYear()} AI-Assisted Portfolio. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
      {/* Floating Elements */}
      <CTAButton position="floating" variant="default" />
      <AIChatbot />
    </div>
  );
};

export default SkillsExperience;