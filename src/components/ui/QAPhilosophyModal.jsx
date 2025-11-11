import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../AppIcon';

const QAPhilosophyModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8, 
      y: 50,
      transition: {
        duration: 0.2
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-[9999] flex items-start justify-center p-4 pt-20"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div 
            className="absolute inset-0 bg-black/70 backdrop-blur-md" 
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          
          <motion.div 
            className="relative bg-gradient-to-br from-white via-blue-50/50 to-indigo-50/50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20 backdrop-blur-xl rounded-3xl w-full max-w-5xl max-h-[85vh] overflow-y-auto shadow-2xl border border-white/30 dark:border-gray-700/30"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Header */}
            <motion.div 
              className="sticky top-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 p-6 rounded-t-3xl"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="flex items-center justify-between">
                <motion.div 
                  className="flex items-center space-x-4"
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <motion.div 
                    className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon name="Shield" size={32} color="white" />
                  </motion.div>
                  <div>
                    <motion.h2 
                      className="text-3xl font-bold text-white"
                      animate={{
                        backgroundPosition: ['0%', '100%', '0%']
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      The QA Philosophy
                    </motion.h2>
                    <p className="text-white/90 text-base">What Quality Assurance Really Means</p>
                  </div>
                </motion.div>
                
                <motion.button 
                  onClick={onClose}
                  className="p-3 hover:bg-white/20 rounded-2xl transition-all duration-300 group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <motion.div
                    whileHover={{ rotate: 90 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon name="X" size={24} color="white" />
                  </motion.div>
                </motion.button>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div 
              className="p-8 space-y-8"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Opening Statement */}
              <motion.div 
                className="text-center mb-12"
                variants={itemVariants}
              >
                <motion.div 
                  className="inline-block p-8 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-3xl mb-6 border border-blue-300/30 dark:border-purple-400/30"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Icon name="TestTube" size={48} color="#3B82F6" />
                  </motion.div>
                </motion.div>
                
                <motion.p 
                  className="text-xl text-gray-800 dark:text-gray-200 font-medium leading-relaxed"
                  variants={itemVariants}
                >
                  People don't become QAs because they can find bugs. No, that's not the only reason.
                </motion.p>
                
                <motion.p 
                  className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mt-4"
                  variants={itemVariants}
                  animate={{
                    backgroundPosition: ['0%', '100%', '0%']
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  They come for stability, trust, and the guarantee that when users click "Buy Now," it just works.
                </motion.p>
              </motion.div>

              {/* Philosophy Points */}
              <div className="space-y-6">
                {[
                  {
                    icon: 'Settings',
                    color: 'from-blue-500 to-cyan-500',
                    text: 'They don\'t debate tools for fun - Selenium, Playwright, Cypress.',
                    highlight: 'They pick what keeps the product reliable when traffic spikes and users depend on it.'
                  },
                  {
                    icon: 'BarChart3',
                    color: 'from-purple-500 to-pink-500',
                    text: 'They don\'t count how many test cases ran this sprint.',
                    highlight: 'They count how many potential issues never made it to production.'
                  },
                  {
                    icon: 'Code',
                    color: 'from-green-500 to-emerald-500',
                    text: 'They don\'t write automation scripts to impress anyone.',
                    highlight: 'They write them so a release can go live on Friday night - without panic, without firefighting.'
                  },
                  {
                    icon: 'Bug',
                    color: 'from-orange-500 to-red-500',
                    text: 'They don\'t log bugs just to fill dashboards.',
                    highlight: 'They do it because every small defect fixed early saves someone else from a big one later.'
                  },
                  {
                    icon: 'Target',
                    color: 'from-indigo-500 to-purple-500',
                    text: 'They don\'t chase 100% coverage.',
                    highlight: 'They chase confidence that what\'s tested truly works.'
                  },
                  {
                    icon: 'Shield',
                    color: 'from-yellow-500 to-orange-500',
                    text: 'They don\'t block releases to slow things down.',
                    highlight: 'They do it because quality isn\'t about speed. It\'s about trust.'
                  },
                  {
                    icon: 'Users',
                    color: 'from-pink-500 to-rose-500',
                    text: 'They don\'t work behind the scenes for recognition.',
                    highlight: 'They do it so customers never have to think twice before using the product again.'
                  }
                ].map((point, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-6 p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-white/30 dark:border-gray-700/30 shadow-lg"
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.02, 
                      y: -5,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div 
                      className={`w-14 h-14 bg-gradient-to-r ${point.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                      whileHover={{ 
                        rotate: [0, -10, 10, 0],
                        scale: 1.1
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon name={point.icon} size={24} color="white" />
                    </motion.div>
                    
                    <div className="flex-1">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-2">
                        {point.text}
                      </p>
                      <p className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {point.highlight}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Closing Statement */}
              <motion.div 
                className="bg-gradient-to-br from-blue-500/15 via-purple-500/10 to-indigo-500/15 backdrop-blur-sm p-10 rounded-3xl border border-blue-300/30 dark:border-purple-400/30 mt-12 shadow-2xl"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-center space-y-6">
                  <motion.div 
                    className="w-24 h-24 bg-gradient-to-br from-blue-500/30 to-purple-500/30 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto border border-blue-300/50"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Icon name="Heart" size={48} color="#3B82F6" />
                  </motion.div>
                  
                  <div className="space-y-4">
                    <motion.p 
                      className="text-2xl font-bold text-gray-800 dark:text-gray-100"
                      variants={itemVariants}
                    >
                      Real QA isn't about finding what's broken.
                    </motion.p>
                    
                    <motion.p 
                      className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                      variants={itemVariants}
                      animate={{
                        backgroundPosition: ['0%', '100%', '0%']
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      It's about protecting what works.
                    </motion.p>
                    
                    <motion.p 
                      className="text-lg text-gray-600 dark:text-gray-400"
                      variants={itemVariants}
                    >
                      About being the calm in the middle of chaos.
                    </motion.p>
                    
                    <motion.p 
                      className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
                      variants={itemVariants}
                      animate={{
                        backgroundPosition: ['0%', '100%', '0%']
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      That's what quality really means.<br/>
                      That's what real QAs stand for.
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QAPhilosophyModal;