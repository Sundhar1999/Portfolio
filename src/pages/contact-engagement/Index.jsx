import React from 'react';
import Header from '../../components/ui/Header';
import AIChatbot from '../../components/ui/AIChatbot';
import CTAButton from '../../components/ui/CTAButton';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import CalendarWidget from './components/CalendarWidget';
import SocialConnections from './components/SocialConnections';
import FAQSection from './components/FAQSection';
import Icon from '../../components/AppIcon';

const ContactEngagement = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="pt-8 pb-12 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-primary bg-opacity-10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Icon name="MessageCircle" size={16} color="var(--color-primary)" />
              <span>Let's Connect</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Ready to Start Your
              <span className="text-gradient block">Next Project?</span>
            </h1>
            
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              I'm always excited to discuss new opportunities, collaborate on innovative projects, 
              and help bring your ideas to life. Let's explore how we can work together.
            </p>
          </div>

          {/* Contact Methods Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="text-center p-6 bg-surface rounded-xl shadow-sm border border-border hover-lift">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={24} color="var(--color-primary)" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">Send a Message</h3>
              <p className="text-text-secondary text-sm">
                Fill out the contact form for detailed project discussions
              </p>
            </div>

            <div className="text-center p-6 bg-surface rounded-xl shadow-sm border border-border hover-lift">
              <div className="w-12 h-12 bg-accent bg-opacity-10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Calendar" size={24} color="var(--color-accent)" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">Schedule a Call</h3>
              <p className="text-text-secondary text-sm">
                Book a consultation to discuss your project in real-time
              </p>
            </div>

            <div className="text-center p-6 bg-surface rounded-xl shadow-sm border border-border hover-lift">
              <div className="w-12 h-12 bg-success bg-opacity-10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={24} color="var(--color-success)" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">Connect Socially</h3>
              <p className="text-text-secondary text-sm">
                Follow my work and connect on professional networks
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Main Content */}
      <section className="pb-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Contact Form */}
            <div className="lg:col-span-2 space-y-8">
              <ContactForm />
              <FAQSection />
            </div>

            {/* Right Column - Contact Info */}
            <div className="space-y-8">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-8 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Whether you're a startup with a bold vision or an established company looking to innovate, 
            I'm here to help turn your ideas into reality.
          </p>
          
          <div className="mb-8">
            <button
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/assets/resume.pdf';
                link.download = 'Resume.pdf';
                link.click();
              }}
              className="inline-flex items-center space-x-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              <Icon name="Download" size={20} color="var(--color-primary)" />
              <span>Download Resume</span>
            </button>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex items-center space-x-2 text-white opacity-90">
              <Icon name="Clock" size={16} color="white" />
              <span className="text-sm">Usually responds within 24 hours</span>
            </div>
            <div className="flex items-center space-x-2 text-white opacity-90">
              <Icon name="Globe" size={16} color="white" />
              <span className="text-sm">Available for remote collaboration</span>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-surface border-t border-border py-8 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <img src="/assets/images/tecsys-logo.png" alt="Tecsys Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <p className="font-semibold text-text-primary">Sundhar Kaleeswaran</p>
                <p className="text-xs text-text-secondary">Associate Software Developer in Test</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-sm text-text-secondary">
                <Icon name="MapPin" size={14} color="var(--color-text-secondary)" />
                <span>Ottawa, ON, Canada</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-text-secondary">
                <Icon name="Mail" size={14} color="var(--color-text-secondary)" />
                <span>sundhark603@gmail.com</span>
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-border text-center">
            <p className="text-sm text-text-secondary">
              © {new Date()?.getFullYear()} Sundhar Kaleeswaran. All rights reserved. Built with React & Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
      {/* Floating Elements */}
      <AIChatbot />
    </div>
  );
};

export default ContactEngagement;