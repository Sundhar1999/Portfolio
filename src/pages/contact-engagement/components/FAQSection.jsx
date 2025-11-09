import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What\'s your typical response time for project inquiries?",
      answer: `I aim to respond to all project inquiries within 24 hours during business days. For urgent matters, I'm available via phone during business hours (9 AM - 6 PM PST). Initial consultations are usually scheduled within 48-72 hours of first contact.`
    },
    {
      id: 2,
      question: "What types of projects do you work on?",
      answer: `I specialize in full-stack web development, mobile applications, and UI/UX design. My expertise includes React, Node.js, Python, and cloud technologies. I work on everything from startup MVPs to enterprise applications, e-commerce platforms, and custom software solutions.`
    },
    {
      id: 3,
      question: "Do you work with remote teams and clients?",
      answer: `Absolutely! I have extensive experience working with remote teams and clients worldwide. I'm comfortable with various collaboration tools like Slack, Zoom, Figma, and project management platforms. I'm based in PST but can accommodate different time zones for meetings and communication.`
    },
    {
      id: 4,
      question: "What\'s your project timeline and pricing structure?",
      answer: `Project timelines vary based on complexity, typically ranging from 2-12 weeks. I provide detailed project estimates after our initial consultation. I offer both fixed-price projects and hourly rates depending on the scope. All pricing includes regular updates, testing, and post-launch support.`
    },
    {
      id: 5,
      question: "Do you provide ongoing support after project completion?",
      answer: `Yes, I offer various support packages including bug fixes, feature updates, and maintenance. Most projects include 30 days of complimentary support. I also provide training sessions to help your team manage the delivered solution effectively.`
    },
    {
      id: 6,
      question: "Can you help with existing projects or just new ones?",
      answer: `I work on both new projects and existing codebases. I can help with code reviews, performance optimization, feature additions, bug fixes, and modernizing legacy systems. I always start with a thorough assessment to understand the current state and requirements.`
    },
    {
      id: 7,
      question: "What information should I include in my initial inquiry?",
      answer: `Please include your project goals, target audience, preferred timeline, budget range, and any specific technical requirements. If you have existing designs, wireframes, or technical documentation, that's helpful too. The more details you provide, the better I can tailor my response to your needs.`
    },
    {
      id: 8,
      question: "Do you sign NDAs and work with confidential projects?",
      answer: `Yes, I regularly work with confidential projects and am happy to sign NDAs before discussing project details. I understand the importance of protecting intellectual property and maintain strict confidentiality standards for all client work.`
    }
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="bg-surface rounded-xl p-6 shadow-sm border border-border">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-text-primary mb-2 flex items-center space-x-2">
          <Icon name="HelpCircle" size={24} color="var(--color-primary)" />
          <span>Frequently Asked Questions</span>
        </h3>
        <p className="text-text-secondary">
          Quick answers to common questions about working together.
        </p>
      </div>
      <div className="space-y-4">
        {faqs?.map((faq) => (
          <div
            key={faq?.id}
            className="border border-border rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(faq?.id)}
              className="w-full px-4 py-4 text-left flex items-center justify-between hover:bg-muted nav-transition"
            >
              <span className="font-medium text-text-primary pr-4">
                {faq?.question}
              </span>
              <Icon
                name={openFAQ === faq?.id ? 'ChevronUp' : 'ChevronDown'}
                size={20}
                color="var(--color-text-secondary)"
                className="flex-shrink-0"
              />
            </button>
            
            {openFAQ === faq?.id && (
              <div className="px-4 pb-4 border-t border-border">
                <p className="text-text-secondary leading-relaxed pt-3">
                  {faq?.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-6 pt-6 border-t border-border">
        <div className="flex items-center space-x-3 p-4 bg-muted rounded-lg">
          <Icon name="MessageCircle" size={20} color="var(--color-primary)" />
          <div>
            <p className="text-sm font-medium text-text-primary">
              Still have questions?
            </p>
            <p className="text-xs text-text-secondary">
              Feel free to reach out directly or use the AI chatbot for instant answers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;