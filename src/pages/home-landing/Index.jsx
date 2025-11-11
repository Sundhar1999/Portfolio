import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import AIChatbot from '../../components/ui/AIChatbot';
import CTAButton from '../../components/ui/CTAButton';
import HeroSection from './components/HeroSection';
import IntroductionSection from './components/IntroductionSection';
import MyJourney from './components/MyJourney';

const HomeLanding = () => {
  const navigate = useNavigate();

  const handleNavigation = (route) => {
    navigate(route);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Animated Gradient Orbs */}
        <motion.div 
          className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/30 to-purple-500/30 rounded-full blur-xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/3 right-20 w-24 h-24 bg-gradient-to-br from-pink-400/40 to-red-500/40 rounded-full blur-lg"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-gradient-to-br from-green-400/25 to-teal-500/25 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-28 h-28 bg-gradient-to-br from-yellow-400/35 to-orange-500/35 rounded-full blur-xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5
            }}
          />
        ))}
      </div>
      
      <Header />
      
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <motion.div variants={itemVariants}>
          <HeroSection onNavigate={handleNavigation} />
        </motion.div>
        
        {/* Introduction Section */}
        <motion.div 
          variants={itemVariants}
          className="backdrop-blur-sm bg-white/10 dark:bg-gray-800/10 border-t border-white/20 dark:border-gray-700/20"
        >
          <IntroductionSection />
        </motion.div>
        
        {/* My Journey */}
        <motion.div 
          variants={itemVariants}
          className="backdrop-blur-sm bg-gradient-to-r from-blue-50/50 to-indigo-50/50 dark:from-gray-800/50 dark:to-blue-900/50"
        >
          <MyJourney />
        </motion.div>
      </main>

      {/* Interactive Elements */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1.5, duration: 0.8, ease: "backOut" }}
      >
        <AIChatbot />
      </motion.div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <CTAButton position="floating" />
      </motion.div>
    </motion.div>
  );
};

export default HomeLanding;