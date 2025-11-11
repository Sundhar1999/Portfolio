import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import AIChatbot from '../../components/ui/AIChatbot';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import FAQSection from './components/FAQSection';
import Icon from '../../components/AppIcon';

const ContactEngagement = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
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
        className="pt-8 pb-12 px-8 relative"
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
            <motion.div 
              className="inline-flex items-center space-x-2 backdrop-blur-sm bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-500/20"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Icon name="MessageCircle" size={16} color="rgb(96 165 250)" />
              </motion.div>
              <span>Let's Connect</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-text-primary mb-6"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Let's debug ideas together
              <motion.span 
                className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                whether it's a line of code or a spark of inspiration
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              I'm always excited to discuss new opportunities, collaborate on innovative projects, 
              and help bring your ideas to life. Let's explore how we can work together.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content */}
      <section className="pb-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Contact Form */}
            <motion.div 
              className="lg:col-span-2 space-y-8"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <ContactForm />
              </motion.div>
              <motion.div
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <FAQSection />
              </motion.div>
            </motion.div>

            {/* Right Column - Contact Info */}
            <motion.div 
              className="space-y-8"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <ContactInfo />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Personal Interests Section */}
      <motion.section 
        className="py-16 px-8 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" />
        
        <div className="max-w-6xl mx-auto relative">
          <motion.div 
            className="text-center mb-12"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Beyond the Code
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              When I'm not testing, I love exploring new technologies and emerging testing methodologies that challenge my way of thinking. Outside of work, you'll often find me on the cricket field or discovering new cuisines. Whether it's mastering a new tool or trying a new dish, I'm always 
              <span style={{ color: 'var(--color-text-primary)' }}> driven by curiosity and a love for continuous learning</span>.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "Cpu",
                title: "Tech Explorer",
                description: "Always diving into emerging technologies and innovative testing methodologies that push the boundaries of what's possible.",
                color: "rgb(59 130 246)"
              },
              {
                icon: "Trophy", 
                title: "Cricket Enthusiast",
                description: "You'll often find me on the cricket field, where strategy meets athleticism and teamwork drives success.",
                color: "rgb(168 85 247)"
              },
              {
                icon: "Coffee",
                title: "Culinary Explorer", 
                description: "Discovering new cuisines and flavors, because the best innovations often come from unexpected combinations.",
                color: "rgb(34 197 94)"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full mb-4 mx-auto"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Icon name={item.icon} size={32} color={item.color} />
                </motion.div>
                <h3 className="text-xl font-semibold text-text-primary mb-3 text-center">{item.title}</h3>
                <p className="text-text-secondary text-center leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-flex items-center space-x-2 backdrop-blur-sm bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-6 py-3 rounded-full border border-blue-500/20"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <Icon name="Heart" size={20} color="rgb(59 130 246)" />
              </motion.div>
              <span className="font-medium" style={{ color: 'var(--color-text-primary)' }}>
                Driven by curiosity and a love for continuous learning
              </span>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section 
        className="py-16 px-8 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Floating Elements */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-20 h-20 bg-white rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${20 + (i % 2) * 60}%`,
              }}
              animate={{
                y: [0, -20, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto text-center text-white relative">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Let's Build Something Amazing Together
          </motion.h2>
          <motion.p 
            className="text-xl opacity-90 mb-8 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Whether you're a startup with a bold vision or an established company looking to innovate, 
            I'm here to help turn your ideas into reality.
          </motion.p>
          
          <motion.div 
            className="mb-8"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={() => {
                import('../../utils/portfolioPdfGenerator').then(({ generatePortfolioPDF }) => {
                  const doc = generatePortfolioPDF();
                  doc.save('Portfolio-Summary.pdf');
                });
              }}
              className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold shadow-lg"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon name="Download" size={20} color="rgb(37 99 235)" />
              <span>Portfolio Summary</span>
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {[
              { icon: "Clock", text: "Usually responds within 24 hours" },
              { icon: "Globe", text: "Available for remote collaboration" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="flex items-center space-x-2 text-white opacity-90"
                whileHover={{ 
                  scale: 1.05,
                  opacity: 1,
                  transition: { duration: 0.2 }
                }}
              >
                <Icon name={item.icon} size={16} color="white" />
                <span className="text-sm">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        className="backdrop-blur-sm bg-white/5 border-t border-white/10 py-8 px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div 
              className="flex items-center space-x-3 mb-4 md:mb-0"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <img src="/assets/images/tecsys-logo.png" alt="Tecsys Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <p className="font-semibold text-text-primary">Sundhar Kaleeswaran</p>
                <p className="text-xs text-text-secondary">Associate Software Developer in Test</p>
              </div>
            </motion.div>
            
            <div className="flex items-center space-x-6">
              {[
                { icon: "MapPin", text: "Ottawa, ON, Canada" },
                { icon: "Mail", text: "sundhark603@gmail.com" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center space-x-2 text-sm text-text-secondary"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Icon name={item.icon} size={14} color="var(--color-text-secondary)" />
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-white/10 text-center">
            <p className="text-sm text-text-secondary">
              © {new Date()?.getFullYear()} Sundhar Kaleeswaran. All rights reserved. Built with React & Tailwind CSS.
            </p>
          </div>
        </div>
      </motion.footer>

      {/* Floating Elements */}
      <AIChatbot />
    </div>
  );
};

export default ContactEngagement;