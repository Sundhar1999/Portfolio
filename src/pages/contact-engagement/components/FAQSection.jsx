import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What\'s your experience in QA and testing?",
      answer: `I have 3+ years of experience as a QA Performance & Automation Engineer, currently working at Tecsys Inc. I specialize in performance testing with JMeter and LoadRunner, test automation using Selenium and Playwright, and comprehensive API testing with Postman. I've successfully supported enterprise applications with 700+ concurrent users.`
    },
    {
      id: 2,
      question: "What testing tools and technologies do you work with?",
      answer: `I'm proficient in JMeter, LoadRunner, Selenium WebDriver, Playwright, Postman, TestNG, and various CI/CD tools. I also work with programming languages like Java, Python, JavaScript, and have experience with cloud platforms, databases, and modern web technologies including React and Node.js.`
    },
    {
      id: 3,
      question: "Can you help with performance testing and optimization?",
      answer: `Absolutely! Performance testing is one of my core specialties. I can design and execute load tests, stress tests, and endurance tests using JMeter and LoadRunner. I've optimized applications to handle high concurrent user loads and can identify performance bottlenecks and provide actionable recommendations.`
    },
    {
      id: 4,
      question: "Do you provide test automation services?",
      answer: `Yes, I specialize in test automation with 90% automation efficiency. I can create robust automation frameworks using Selenium, Playwright, and other tools. This includes functional testing, regression testing, API testing, and integration with CI/CD pipelines for continuous testing.`
    },
    {
      id: 5,
      question: "What\'s your approach to API testing?",
      answer: `I have extensive experience in both SOAP and REST API testing using Postman and automated validation scripts. I can design comprehensive test suites for API endpoints, validate data integrity, test error handling, and ensure proper authentication and authorization mechanisms.`
    },
    {
      id: 6,
      question: "Can you work on AI/ML and data analytics projects?",
      answer: `Yes! I have experience with deep learning, signal processing, and data analytics. I've worked on projects involving brain-computer interfaces, medical AI for CHF detection, and sustainable technology solutions. I can contribute to both the development and testing aspects of AI/ML projects.`
    },
    {
      id: 7,
      question: "What\'s your availability for consulting or collaboration?",
      answer: `I'm based in Ottawa, ON, Canada (EST timezone) and available for consulting, collaboration, and freelance projects. I typically respond within 24 hours and can accommodate different time zones for meetings. I'm open to both short-term consulting and longer-term project collaborations.`
    },
    {
      id: 8,
      question: "Do you have experience with enterprise-level applications?",
      answer: `Yes, at Tecsys Inc, I work with enterprise-level supply chain and distribution software. I understand the complexities of large-scale applications, compliance requirements, and the importance of maintaining high quality standards in mission-critical business systems.`
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
          Common questions about my QA expertise and collaboration opportunities.
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