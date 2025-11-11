import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Icon from '../../../components/AppIcon';
import { EMAILJS_CONFIG } from '../../../config/emailjs';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    messageType: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const messageTypeOptions = [
    { value: 'collaboration', label: 'Collaboration Opportunity' },
    { value: 'hiring', label: 'Hiring Inquiry' },
    { value: 'general', label: 'General Inquiry' },
    { value: 'project', label: 'Project Discussion' },
    { value: 'consultation', label: 'Consultation Request' }
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.name?.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData?.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData?.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData?.subject?.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData?.messageType) {
      newErrors.messageType = 'Please select a message type';
    }

    if (!formData?.message?.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData?.message?.trim()?.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    if (errors?.[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message_type: formData.messageType,
          message: formData.message,
          to_email: 'sundhark603@gmail.com'
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      setIsSubmitting(false);
      setIsSubmitted(true);
      
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          messageType: '',
          message: ''
        });
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('Email sending failed:', error);
      setIsSubmitting(false);
      alert('Failed to send message. Please try again or contact directly at sundhark603@gmail.com');
    }
  };

  return (
    <motion.div 
      className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl p-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div 
            className="text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring", bounce: 0.5 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <Icon name="CheckCircle" size={32} color="rgb(34 197 94)" />
              </motion.div>
            </motion.div>
            <motion.h3 
              className="text-xl font-semibold text-text-primary mb-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Message Sent Successfully!
            </motion.h3>
            <motion.p 
              className="text-text-secondary mb-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Thank you for reaching out. I'll get back to you within 24 hours.
            </motion.p>
            <motion.div 
              className="flex items-center justify-center space-x-2 text-sm text-text-secondary"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Icon name="Clock" size={16} color="var(--color-text-secondary)" />
              <span>Expected response time: 24 hours</span>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="mb-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold text-text-primary mb-2">
                Send Me a Message
              </h2>
              <p className="text-text-secondary">
                I'd love to hear from you. Fill out the form below and I'll get back to you as soon as possible.
              </p>
            </motion.div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Input
                    label="Full Name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData?.name}
                    onChange={(e) => handleInputChange('name', e?.target?.value)}
                    error={errors?.name}
                    required
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Input
                    label="Email Address"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData?.email}
                    onChange={(e) => handleInputChange('email', e?.target?.value)}
                    error={errors?.email}
                    required
                  />
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Input
                  label="Subject"
                  type="text"
                  placeholder="What's this about?"
                  value={formData?.subject}
                  onChange={(e) => handleInputChange('subject', e?.target?.value)}
                  error={errors?.subject}
                  required
                />
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Select
                  label="Message Type"
                  placeholder="Select the type of inquiry"
                  options={messageTypeOptions}
                  value={formData?.messageType}
                  onChange={(value) => handleInputChange('messageType', value)}
                  error={errors?.messageType}
                  required
                />
              </motion.div>

              <motion.div 
                className="space-y-2"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-medium text-text-primary">
                  Message <span className="text-red-400">*</span>
                </label>
                <motion.textarea
                  placeholder="Tell me more about your project, opportunity, or question..."
                  value={formData?.message}
                  onChange={(e) => handleInputChange('message', e?.target?.value)}
                  rows={6}
                  className={`w-full px-3 py-2 backdrop-blur-sm bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-text-primary placeholder-text-secondary ${
                    errors?.message 
                      ? 'border-red-400 focus:ring-red-400' 
                      : 'focus:border-blue-500'
                  }`}
                  whileHover={{ scale: 1.01 }}
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
                {errors?.message && (
                  <motion.p 
                    className="text-sm text-red-400 flex items-center space-x-1"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon name="AlertCircle" size={14} color="rgb(248 113 113)" />
                    <span>{errors?.message}</span>
                  </motion.p>
                )}
                <p className="text-xs text-text-secondary">
                  Minimum 10 characters required
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    variant="default"
                    size="lg"
                    fullWidth
                    loading={isSubmitting}
                    iconName="Send"
                    iconPosition="left"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                  >
                    {isSubmitting ? 'Sending Message...' : 'Send Message'}
                  </Button>
                </motion.div>
              </motion.div>
            </form>

            <motion.div 
              className="mt-6 pt-6 border-t border-white/10"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 text-sm text-text-secondary">
                <Icon name="Shield" size={16} color="var(--color-text-secondary)" />
                <span>Your information is secure and will never be shared with third parties.</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ContactForm;