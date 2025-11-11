import React from 'react';
import { motion } from 'framer-motion';
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
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <Header />
      
      {/* Hero Section */}
      <motion.section 
        className="px-8 py-16 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />
        
        <div className="max-w-7xl mx-auto relative">
          <motion.div 
            className="text-center mb-12"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-text-primary mb-6"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              QA & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Testing Expertise</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-text-secondary max-w-3xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Pushing software to its limits—because true quality never breaks under pressure
            </motion.p>
          </motion.div>

          {/* Expertise Cards */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {[
              {
                icon: "TestTube",
                title: "Performance Testing",
                description: "Expert in JMeter, Load Runner, supporting 700+ concurrent users in enterprise environments"
              },
              {
                icon: "Bot",
                title: "Test Automation",
                description: "Specialized in Selenium, Playwright, achieving 90% automation efficiency"
              },
              {
                icon: "Activity",
                title: "API Testing",
                description: "Comprehensive SOAP/REST API testing with Postman and automated validation"
              },
              {
                icon: "Zap",
                title: "Quality Assurance",
                description: "Ensuring software reliability through rigorous testing methodologies and best practices"
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                className="group relative backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Icon name={card.icon} size={28} color="rgb(59 130 246)" />
                </motion.div>
                <motion.h4 
                  className="text-lg font-semibold text-text-primary mb-3 text-center"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {card.title}
                </motion.h4>
                <p className="text-text-secondary text-sm leading-relaxed text-center">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content */}
      <section className="px-8 py-16">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Skills Matrix Section */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SkillsMatrix />
          </motion.div>

          {/* Experience Timeline Section */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ExperienceTimeline />
          </motion.div>

          {/* AI Recommendations Section */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <SkillRecommendations />
          </motion.div>

          {/* Professional Summary */}
          <motion.div 
            className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl p-8"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="text-center mb-8"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold text-text-primary mb-4">Professional Summary</h2>
              <p className="text-text-secondary max-w-4xl mx-auto">
                A dedicated QA Performance & Automation Engineer with 3+ years of experience in ensuring software quality through comprehensive testing strategies. 
                Proven track record of optimizing application performance, implementing automated testing frameworks, and delivering reliable software solutions. 
                Committed to continuous improvement in testing methodologies and quality assurance practices.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  emoji: "🚀",
                  title: "Innovation Driven",
                  description: "Always exploring new technologies and methodologies to deliver cutting-edge solutions"
                },
                {
                  emoji: "🎯",
                  title: "Results Focused",
                  description: "Committed to delivering measurable results and exceeding project expectations"
                },
                {
                  emoji: "🤝",
                  title: "Team Collaboration",
                  description: "Strong believer in collaborative development and knowledge sharing"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
                    whileHover={{ 
                      rotate: 360,
                      transition: { duration: 0.6 }
                    }}
                  >
                    <span className="text-2xl">{item.emoji}</span>
                  </motion.div>
                  <h3 className="font-semibold text-text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-text-secondary">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Connect Section */}
      <motion.section 
        className="px-8 py-16 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" />
        
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.h2 
            className="text-2xl font-semibold text-text-primary mb-4"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Let's Connect
          </motion.h2>
          <motion.p 
            className="text-text-secondary mb-8"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Interested in working together or discussing opportunities? I'd love to hear from you.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <SocialMediaBar variant="horizontal" />
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <CTAButton 
              variant="default" 
              size="lg"
              className="mx-auto"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        className="px-8 py-8 border-t border-white/10 backdrop-blur-sm bg-white/5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-text-secondary text-sm">
            © {new Date()?.getFullYear()} Sundhar Kaleeswaran. Built with React & Tailwind CSS.
          </p>
        </div>
      </motion.footer>

      {/* Floating Elements */}
      <AIChatbot />
    </div>
  );
};

export default SkillsExperience;