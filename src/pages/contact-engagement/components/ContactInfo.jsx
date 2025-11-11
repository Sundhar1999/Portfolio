import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
      available: '24/7',
      color: '#EA4335'
    },
    {
      type: 'phone',
      label: 'Phone',
      value: '(226) 961-9931',
      icon: 'Phone',
      description: 'Available for urgent matters',
      action: () => window.location.href = 'tel:+12269619931',
      available: 'Mon-Fri, 9AM - 5PM EST',
      color: '#34A853'
    },
    {
      type: 'location',
      label: 'Location',
      value: 'Ottawa, ON, Canada',
      icon: 'MapPin',
      description: 'Open to remote work',
      action: null,
      available: 'EST Timezone',
      color: '#4285F4'
    },
    {
      type: 'linkedin',
      label: 'LinkedIn',
      value: 'LinkedIn Profile',
      icon: 'Linkedin',
      description: 'Professional networking',
      action: () => window.open('https://www.linkedin.com/in/sundhar-k/', '_blank'),
      available: 'Active daily',
      color: '#0A66C2'
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
      <motion.div 
        className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl p-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h3 
          className="text-xl font-semibold text-text-primary mb-4 flex items-center space-x-2"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <Icon name="Contact" size={24} color="rgb(59 130 246)" />
          </motion.div>
          <span>Get In Touch</span>
        </motion.h3>
        
        <div className="space-y-4">
          {contactMethods?.map((method, index) => (
            <motion.div
              key={method?.type}
              className={`flex items-center justify-between p-4 rounded-lg border border-white/20 hover:border-blue-500/50 transition-all duration-300 ${
                method?.action ? 'cursor-pointer hover:bg-white/10' : ''
              }`}
              onClick={method?.action}
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: method?.action ? 1.02 : 1,
                transition: { duration: 0.2 }
              }}
            >
              <div className="flex items-center space-x-3">
                <motion.div 
                  className="w-10 h-10 bg-white/20 border border-white/30 rounded-lg flex items-center justify-center"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Icon name={method?.icon} size={20} color={method?.color} />
                </motion.div>
                <div>
                  <p className="font-medium text-text-primary">{method?.label}</p>
                  <p className="text-sm text-text-secondary">{method?.value}</p>
                  <p className="text-xs text-text-secondary">{method?.description}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-text-secondary">{method?.available}</p>
                {method?.action && (
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon name="ExternalLink" size={16} color="var(--color-text-secondary)" />
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Response Times */}
      <motion.div 
        className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl p-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <motion.h3 
          className="text-lg font-semibold text-text-primary mb-4 flex items-center space-x-2"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Icon name="Clock" size={20} color="rgb(168 85 247)" />
          </motion.div>
          <span>Response Times</span>
        </motion.h3>
        
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(responseInfo)?.map(([method, time], index) => (
            <motion.div 
              key={method} 
              className="text-center p-3 backdrop-blur-sm bg-white/10 rounded-lg border border-white/20"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <p className="text-sm font-medium text-text-primary capitalize">{method}</p>
              <p className="text-lg font-semibold text-purple-400">{time}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Availability Info */}
      <motion.div 
        className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl p-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.h3 
          className="text-lg font-semibold text-text-primary mb-4 flex items-center space-x-2"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            <Icon name="Calendar" size={20} color="rgb(34 197 94)" />
          </motion.div>
          <span>Availability</span>
        </motion.h3>
        
        <div className="space-y-3">
          {[
            { icon: "Globe", label: "Timezone", value: availability?.timezone },
            { icon: "Clock", label: "Working Hours", value: availability?.workingHours },
            { icon: "MessageSquare", label: "Preferred Method", value: availability?.preferredMethod }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="flex items-start space-x-3"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Icon name={item.icon} size={16} color="var(--color-text-secondary)" className="mt-0.5" />
              </motion.div>
              <div>
                <p className="text-sm font-medium text-text-primary">{item.label}</p>
                <p className="text-sm text-text-secondary">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div 
        className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl p-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <motion.h3 
          className="text-lg font-semibold text-text-primary mb-4"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Quick Actions
        </motion.h3>
        
        <div className="space-y-3">
          {[
            {
              icon: "MessageSquare",
              text: "Leave a Note",
              action: () => setIsNoteModalOpen(true)
            },
            {
              icon: "Download",
              text: "Download Resume",
              action: () => {
                const link = document.createElement('a');
                link.href = '/assets/resume.pdf';
                link.download = 'Sundhar_Kaleeswaran_Resume.pdf';
                link?.click();
              }
            },
            {
              icon: "FileText",
              text: "View Portfolio PDF",
              action: () => {
                const pdf = generatePortfolioPDF();
                pdf.save('Sundhar_Kaleeswaran_Portfolio.pdf');
              }
            }
          ].map((button, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="outline"
                  fullWidth
                  iconName={button.icon}
                  iconPosition="left"
                  onClick={button.action}
                  className="backdrop-blur-sm bg-white/10 border-white/20 hover:bg-white/20 text-text-primary"
                >
                  {button.text}
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      <QuickNoteModal 
        isOpen={isNoteModalOpen} 
        onClose={() => setIsNoteModalOpen(false)} 
      />
    </div>
  );
};

export default ContactInfo;