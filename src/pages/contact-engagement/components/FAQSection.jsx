import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What's your experience in QA and testing?",
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
      question: "What's your approach to API testing?",
      answer: `I have extensive experience in both SOAP and REST API testing using Postman and automated validation scripts. I can design comprehensive test suites for API endpoints, validate data integrity, test error handling, and ensure proper authentication and authorization mechanisms.`
    },
    {
      id: 6,
      question: "Can you work on AI/ML and data analytics projects?",
      answer: `Yes! I have experience with deep learning, signal processing, and data analytics. I've worked on projects involving brain-computer interfaces, medical AI for CHF detection, and sustainable technology solutions. I can contribute to both the development and testing aspects of AI/ML projects.`
    },
    {
      id: 7,
      question: "What's your availability for consulting or collaboration?",
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
    <motion.div 
      className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl p-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.div 
        className="mb-6"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-semibold text-text-primary mb-2 flex items-center space-x-2">
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <Icon name="HelpCircle" size={24} color="rgb(59 130 246)" />
          </motion.div>
          <span>Frequently Asked Questions</span>
        </h3>
        <p className="text-text-secondary">
          Common questions about my QA expertise and collaboration opportunities.
        </p>
      </motion.div>

      <div className="space-y-4">
        {faqs?.map((faq, index) => (
          <motion.div
            key={faq?.id}
            className="border border-white/20 rounded-lg overflow-hidden backdrop-blur-sm bg-white/5"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.01,
              transition: { duration: 0.2 }
            }}
          >
            <motion.button
              onClick={() => toggleFAQ(faq?.id)}
              className="w-full px-4 py-4 text-left flex items-center justify-between hover:bg-white/10 transition-all duration-300"
              whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.99 }}
            >
              <span className="font-medium text-text-primary pr-4">
                {faq?.question}
              </span>
              <motion.div
                animate={{ rotate: openFAQ === faq?.id ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <Icon
                  name="ChevronDown"
                  size={20}
                  color="var(--color-text-secondary)"
                  className="flex-shrink-0"
                />
              </motion.div>
            </motion.button>
            
            <AnimatePresence>
              {openFAQ === faq?.id && (
                <motion.div 
                  className="border-t border-white/10"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="px-4 pb-4 pt-3"
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                  >
                    <p className="text-text-secondary leading-relaxed">
                      {faq?.answer}
                    </p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="mt-6 pt-6 border-t border-white/10"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="flex items-center space-x-3 p-4 backdrop-blur-sm bg-white/10 rounded-lg border border-white/20"
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
        >
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Icon name="MessageCircle" size={20} color="rgb(59 130 246)" />
          </motion.div>
          <div>
            <p className="text-sm font-medium text-text-primary">
              Still have questions?
            </p>
            <p className="text-xs text-text-secondary">
              Feel free to reach out directly or use the AI chatbot for instant answers.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default FAQSection;