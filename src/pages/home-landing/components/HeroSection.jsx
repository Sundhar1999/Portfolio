import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import QAPhilosophyModal from '../../../components/ui/QAPhilosophyModal';

const HeroSection = ({ onNavigate }) => {
  const [isQAModalOpen, setIsQAModalOpen] = useState(false);
  const heroData = {
    name: "Sundhar Kaleeswaran",
    title: "Associate Software Developer in Test",
    image: "/assets/images/Profilepic.jpg",
    imageAlt: "Professional headshot of QA automation engineer",
    tagline: "Ensuring software quality through performance testing, automation, and continuous improvement",
    description: `Associate Software Developer in Test with 3+ years of excellence in performance engineering, load testing, and UI automation. I specialize in turning complex testing ecosystems into scalable solutions that enhance reliability and speed. Where automation meets excellence, I ensure every SaaS release performs with confidence — building systems that run flawlessly, scale effortlessly with every release.`
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "backOut"
      }
    }
  };

  return (
    <motion.section 
      className="relative min-h-screen flex items-center justify-center px-6 py-10 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Glassmorphism Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-100/40 dark:from-gray-900/20 dark:via-blue-900/30 dark:to-indigo-900/40 backdrop-blur-3xl"></div>
        
        {/* Animated Geometric Shapes */}
        <motion.div 
          className="absolute top-1/4 right-1/4 w-20 h-20 bg-gradient-to-br from-blue-400/30 to-purple-500/30 rounded-2xl border border-blue-300/50"
          animate={{
            rotate: [0, 45, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 left-1/5 w-16 h-16 bg-gradient-to-br from-pink-400/30 to-red-500/30 rounded-full border border-pink-300/50"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div 
            className="text-center lg:text-left space-y-8"
            variants={containerVariants}
          >
            <div className="space-y-6">
              <motion.h1 
                className="text-5xl md:text-7xl font-bold leading-tight"
                variants={itemVariants}
              >
                <span className="text-gray-800 dark:text-gray-100">Hi, I'm </span>
                <motion.span 
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0%', '100%', '0%']
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  {heroData?.name}
                </motion.span>
              </motion.h1>
              
              <motion.h2 
                className="text-2xl md:text-3xl font-semibold"
                variants={itemVariants}
              >
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {heroData?.title}
                </span>
              </motion.h2>
              
              <motion.p 
                className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300"
                variants={itemVariants}
              >
                {heroData?.tagline}
              </motion.p>
            </div>

            <motion.p 
              className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-2xl"
              variants={itemVariants}
            >
              {heroData?.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <motion.button
                onClick={() => setIsQAModalOpen(true)}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon name="Shield" size={20} color="white" />
                <span>What is QA?</span>
              </motion.button>
              
              <motion.button
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/assets/resume.pdf';
                  link.download = 'Sundhar_Kaleeswaran_Resume.pdf';
                  link?.click();
                }}
                className="px-8 py-4 bg-white/20 backdrop-blur-sm border-2 border-blue-300/50 text-gray-800 dark:text-gray-100 rounded-2xl font-semibold text-lg hover:bg-white/30 transition-all duration-300 flex items-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon name="Download" size={20} color="currentColor" />
                <span>Download Resume</span>
              </motion.button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div 
              className="flex flex-wrap gap-8 justify-center lg:justify-start pt-8"
              variants={itemVariants}
            >
              {[
                { value: '700', label: 'Concurrent Users' },
                { value: '3+', label: 'Years Experience' },
                { value: '70%', label: 'Automation Efficiency' }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center group cursor-pointer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            variants={imageVariants}
          >
            <div className="relative">
              {/* Glassmorphism Decorative Elements */}
              <motion.div 
                className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-xl backdrop-blur-sm"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute -bottom-4 -right-4 w-64 h-64 bg-gradient-to-tl from-pink-400/20 to-indigo-500/20 rounded-full blur-xl backdrop-blur-sm"
                animate={{
                  scale: [1, 0.9, 1],
                  opacity: [0.2, 0.5, 0.2]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
              
              {/* Main Image Container */}
              <motion.div 
                className="relative w-96 h-96 rounded-3xl overflow-hidden border-4 border-white/30 dark:border-gray-700/30 shadow-2xl backdrop-blur-sm bg-white/10 dark:bg-gray-800/10"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-500/10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <img
                  src={heroData?.image}
                  alt={heroData?.imageAlt}
                  className="w-full h-full object-cover scale-75 -translate-y-8"
                />
              </motion.div>
              
              {/* Floating Icons */}
              <motion.div 
                className="absolute top-10 right-10 w-14 h-14 bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30 dark:border-gray-700/30"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Icon name="Code" size={24} color="#3B82F6" />
              </motion.div>
              <motion.div 
                className="absolute bottom-10 left-10 w-14 h-14 bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30 dark:border-gray-700/30"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <Icon name="TestTube" size={24} color="#8B5CF6" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <QAPhilosophyModal 
        isOpen={isQAModalOpen} 
        onClose={() => setIsQAModalOpen(false)} 
      />
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="flex flex-col items-center space-y-2 text-gray-600 dark:text-gray-400">
          <span className="text-sm font-medium">Explore More</span>
          <Icon name="ChevronDown" size={20} color="currentColor" />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;