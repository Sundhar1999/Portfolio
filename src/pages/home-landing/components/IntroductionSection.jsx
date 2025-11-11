import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import SocialMediaBar from '../../../components/ui/SocialMediaBar';

const IntroductionSection = () => {
  const highlights = [
    {
      icon: 'TestTube',
      title: 'Performance Testing',
      description: 'Expert in JMeter, Load Runner, supporting 700+ concurrent users in enterprise environments',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'Bot',
      title: 'Test Automation',
      description: 'Specialized in Selenium, Playwright, achieving 90% automation efficiency',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: 'Activity',
      title: 'API Testing',
      description: 'Comprehensive SOAP/REST API testing with Postman and automated validation',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: 'Zap',
      title: 'Quality Assurance',
      description: 'Ensuring software reliability through rigorous testing methodologies and best practices',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    }
  };

  return (
    <motion.section 
      className="pt-10 pb-4 px-6 bg-gradient-to-b from-slate-50/50 to-white/50 dark:from-gray-900/50 dark:to-gray-800/50 backdrop-blur-sm"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto">
        {/* Main Introduction */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-10">
          <motion.div className="space-y-8" variants={itemVariants}>
            <div>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6"
                variants={itemVariants}
              >
                Ensuring Quality Through 
                <motion.span 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block"
                  animate={{
                    backgroundPosition: ['0%', '100%', '0%']
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  Rigorous Testing
                </motion.span>
              </motion.h2>
              
              <motion.p 
                className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6"
                variants={itemVariants}
              >
                I'm an Associate Software Developer in Test who believes in ensuring quality through rigorous testing. To me, great software isn't just about features—it's about reliability, precision, and trust. I focus on building systems that perform flawlessly under pressure, turning challenges into opportunities for improvement. Testing, for me, is more than a process—it's a mindset of crafting confidence in every release.
              </motion.p>
              
              {/* Personal Interests Cards */}
              <motion.div className="space-y-4" variants={itemVariants}>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Beyond Testing</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { icon: 'Cpu', title: 'Tech Explorer', desc: 'Exploring new technologies and testing methodologies', color: 'from-blue-500 to-cyan-500' },
                    { icon: 'Trophy', title: 'Cricket Player', desc: 'Strategy meets athleticism on the cricket field', color: 'from-green-500 to-emerald-500' },
                    { icon: 'Coffee', title: 'Food Explorer', desc: 'Discovering new cuisines and flavors', color: 'from-orange-500 to-red-500' }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-4 border border-white/20 dark:border-gray-700/20 shadow-lg"
                      variants={cardVariants}
                      whileHover={{ 
                        scale: 1.05, 
                        y: -5,
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div 
                        className={`flex items-center justify-center w-12 h-12 bg-gradient-to-r ${item.color} rounded-2xl mb-2 mx-auto`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon name={item.icon} size={20} color="white" />
                      </motion.div>
                      <h4 className="text-sm font-medium text-gray-800 dark:text-gray-100 text-center mb-1">{item.title}</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                        {item.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div 
                  className="text-center mt-4"
                  variants={itemVariants}
                >
                  <motion.div 
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-300/30 dark:border-purple-400/30"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Icon name="Heart" size={16} color="#3B82F6" />
                    </motion.div>
                    <span className="text-sm font-medium" style={{color: 'var(--color-text-primary)'}}>Driven by curiosity and continuous learning</span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div className="space-y-8" variants={itemVariants}>
            {/* Quote */}
            <motion.div 
              className="flex items-center justify-center"
              variants={itemVariants}
            >
              <motion.div 
                className="text-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 backdrop-blur-sm rounded-3xl p-8 border border-blue-200/30 dark:border-purple-400/30"
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.blockquote 
                  className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0%', '100%', '0%']
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  "Believe In Yourself, Be Yourself"
                </motion.blockquote>
              </motion.div>
            </motion.div>

            {/* Social Media Integration */}
            <motion.div 
              className="space-y-4 text-center"
              variants={itemVariants}
            >
              <h3 className="text-lg font-semibold" style={{color: 'var(--color-text-primary)'}}>Connect With Me</h3>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <SocialMediaBar variant="horizontal" className="justify-center" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <motion.div className="space-y-8" variants={containerVariants}>
          <motion.div className="text-center" variants={itemVariants}>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              What I Bring to the Table
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A comprehensive skill set combined with a passion for innovation and a commitment to delivering exceptional results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights?.map((highlight, index) => (
              <motion.div 
                key={index} 
                className="group text-center p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl border border-white/20 dark:border-gray-700/20 shadow-lg"
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-r ${highlight.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  whileHover={{ 
                    rotate: [0, -10, 10, 0],
                    scale: 1.1
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon name={highlight?.icon} size={28} color="white" />
                </motion.div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {highlight?.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {highlight?.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default IntroductionSection;