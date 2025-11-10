import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { generatePortfolioPDF } from '../../../utils/portfolioPdfGenerator';
import QuickNoteModal from '../../../components/ui/QuickNoteModal';

const ContactInfo = () => {
  const [isNoteModalOpen, setIsNoteModalOpen] = useState(false);
  const contactMethods = [
    {
      type: 'email',
      label: 'Email',
      value: 'sundhark603@gmail.com',
      icon: 'Mail',
      description: 'Best for detailed inquiries',
      action: () => window.location.href = 'mailto:sundhark603@gmail.com',
      available: '24/7'
    },
    {
      type: 'phone',
      label: 'Phone',
      value: '(226) 961-9931',
      icon: 'Phone',
      description: 'Available for urgent matters',
      action: () => window.location.href = 'tel:+12269619931',
      available: 'Mon-Fri, 9AM - 5PM EST'
    },
    {
      type: 'location',
      label: 'Location',
      value: 'Ottawa, ON, Canada',
      icon: 'MapPin',
      description: 'Open to remote work',
      action: null,
      available: 'EST Timezone'
    },
    {
      type: 'linkedin',
      label: 'LinkedIn',
      value: 'LinkedIn Profile',
      icon: 'Linkedin',
      description: 'Professional networking',
      action: () => window.open('https://www.linkedin.com/in/sundhar-k/', '_blank'),
      available: 'Active daily'
    }
  ];

  const responseInfo = {
    email: '< 24 hours',
    phone: '< 4 hours',
    linkedin: '< 12 hours',
    general: '24-48 hours'
  };

  const availability = {
    timezone: 'Eastern Standard Time (EST)',
    workingHours: 'Monday - Friday, 9:00 AM - 5:00 PM',
    preferredMethod: 'Email for detailed discussions, Phone for quick questions'
  };

  return (
    <div className="space-y-6">
      {/* Contact Methods */}
      <div className="bg-surface rounded-xl p-6 shadow-sm border border-border">
        <h3 className="text-xl font-semibold text-text-primary mb-4 flex items-center space-x-2">
          <Icon name="Contact" size={24} color="var(--color-primary)" />
          <span>Get In Touch</span>
        </h3>
        
        <div className="space-y-4">
          {contactMethods?.map((method) => (
            <div
              key={method?.type}
              className={`flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary nav-transition ${
                method?.action ? 'cursor-pointer hover:bg-muted' : ''
              }`}
              onClick={method?.action}
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center">
                  <Icon name={method?.icon} size={20} color={
                    method?.type === 'email' ? '#EA4335' : // Gmail red
                    method?.type === 'phone' ? '#34A853' : // Phone green  
                    method?.type === 'location' ? '#4285F4' : // Maps blue
                    method?.type === 'linkedin' ? '#0A66C2' : // LinkedIn blue
                    'var(--color-primary)'
                  } />
                </div>
                <div>
                  <p className="font-medium text-text-primary">{method?.label}</p>
                  <p className="text-sm text-text-secondary">{method?.value}</p>
                  <p className="text-xs text-text-secondary">{method?.description}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-text-secondary">{method?.available}</p>
                {method?.action && (
                  <Icon name="ExternalLink" size={16} color="var(--color-text-secondary)" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Response Times */}
      <div className="bg-surface rounded-xl p-6 shadow-sm border border-border">
        <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center space-x-2">
          <Icon name="Clock" size={20} color="var(--color-accent)" />
          <span>Response Times</span>
        </h3>
        
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(responseInfo)?.map(([method, time]) => (
            <div key={method} className="text-center p-3 bg-muted rounded-lg">
              <p className="text-sm font-medium text-text-primary capitalize">{method}</p>
              <p className="text-lg font-semibold text-accent">{time}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Availability Info */}
      <div className="bg-surface rounded-xl p-6 shadow-sm border border-border">
        <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center space-x-2">
          <Icon name="Calendar" size={20} color="var(--color-success)" />
          <span>Availability</span>
        </h3>
        
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <Icon name="Globe" size={16} color="var(--color-text-secondary)" className="mt-0.5" />
            <div>
              <p className="text-sm font-medium text-text-primary">Timezone</p>
              <p className="text-sm text-text-secondary">{availability?.timezone}</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Icon name="Clock" size={16} color="var(--color-text-secondary)" className="mt-0.5" />
            <div>
              <p className="text-sm font-medium text-text-primary">Working Hours</p>
              <p className="text-sm text-text-secondary">{availability?.workingHours}</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Icon name="MessageSquare" size={16} color="var(--color-text-secondary)" className="mt-0.5" />
            <div>
              <p className="text-sm font-medium text-text-primary">Preferred Method</p>
              <p className="text-sm text-text-secondary">{availability?.preferredMethod}</p>
            </div>
          </div>
        </div>
      </div>
      {/* Quick Actions */}
      <div className="bg-surface rounded-xl p-6 shadow-sm border border-border">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Quick Actions</h3>
        
        <div className="space-y-3">
          <Button
            variant="outline"
            fullWidth
            iconName="MessageSquare"
            iconPosition="left"
            onClick={() => setIsNoteModalOpen(true)}
          >
            Leave a Note
          </Button>
          
          <Button
            variant="outline"
            fullWidth
            iconName="Download"
            iconPosition="left"
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/assets/resume.pdf';
              link.download = 'Sundhar_Kaleeswaran_Resume.pdf';
              link?.click();
            }}
          >
            Download Resume
          </Button>
          
          <Button
            variant="outline"
            fullWidth
            iconName="FileText"
            iconPosition="left"
            onClick={() => {
              const pdf = generatePortfolioPDF();
              pdf.save('Sundhar_Kaleeswaran_Portfolio.pdf');
            }}
          >
            View Portfolio PDF
          </Button>
        </div>
      </div>
      
      <QuickNoteModal 
        isOpen={isNoteModalOpen} 
        onClose={() => setIsNoteModalOpen(false)} 
      />
    </div>
  );
};

export default ContactInfo;