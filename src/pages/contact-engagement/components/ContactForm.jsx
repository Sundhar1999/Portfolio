import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Icon from '../../../components/AppIcon';

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
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/?.test(formData?.email)) {
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

    // Clear error when user starts typing
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

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after success
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
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-surface rounded-xl p-8 shadow-sm border border-border">
        <div className="text-center">
          <div className="w-16 h-16 bg-success bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="CheckCircle" size={32} color="var(--color-success)" />
          </div>
          <h3 className="text-xl font-semibold text-text-primary mb-2">
            Message Sent Successfully!
          </h3>
          <p className="text-text-secondary mb-4">
            Thank you for reaching out. I'll get back to you within 24 hours.
          </p>
          <div className="flex items-center justify-center space-x-2 text-sm text-text-secondary">
            <Icon name="Clock" size={16} color="var(--color-text-secondary)" />
            <span>Expected response time: 24 hours</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-surface rounded-xl p-8 shadow-sm border border-border">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-text-primary mb-2">
          Send Me a Message
        </h2>
        <p className="text-text-secondary">
          I'd love to hear from you. Fill out the form below and I'll get back to you as soon as possible.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Full Name"
            type="text"
            placeholder="Enter your full name"
            value={formData?.name}
            onChange={(e) => handleInputChange('name', e?.target?.value)}
            error={errors?.name}
            required
          />

          <Input
            label="Email Address"
            type="email"
            placeholder="your.email@example.com"
            value={formData?.email}
            onChange={(e) => handleInputChange('email', e?.target?.value)}
            error={errors?.email}
            required
          />
        </div>

        <Input
          label="Subject"
          type="text"
          placeholder="What's this about?"
          value={formData?.subject}
          onChange={(e) => handleInputChange('subject', e?.target?.value)}
          error={errors?.subject}
          required
        />

        <Select
          label="Message Type"
          placeholder="Select the type of inquiry"
          options={messageTypeOptions}
          value={formData?.messageType}
          onChange={(value) => handleInputChange('messageType', value)}
          error={errors?.messageType}
          required
        />

        <div className="space-y-2">
          <label className="block text-sm font-medium text-text-primary">
            Message <span className="text-error">*</span>
          </label>
          <textarea
            placeholder="Tell me more about your project, opportunity, or question..."
            value={formData?.message}
            onChange={(e) => handleInputChange('message', e?.target?.value)}
            rows={6}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none ${
              errors?.message 
                ? 'border-error focus:ring-error' :'border-border focus:border-primary'
            }`}
          />
          {errors?.message && (
            <p className="text-sm text-error flex items-center space-x-1">
              <Icon name="AlertCircle" size={14} color="var(--color-error)" />
              <span>{errors?.message}</span>
            </p>
          )}
          <p className="text-xs text-text-secondary">
            Minimum 10 characters required
          </p>
        </div>

        <Button
          type="submit"
          variant="default"
          size="lg"
          fullWidth
          loading={isSubmitting}
          iconName="Send"
          iconPosition="left"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending Message...' : 'Send Message'}
        </Button>
      </form>
      <div className="mt-6 pt-6 border-t border-border">
        <div className="flex items-center space-x-2 text-sm text-text-secondary">
          <Icon name="Shield" size={16} color="var(--color-text-secondary)" />
          <span>Your information is secure and will never be shared with third parties.</span>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;