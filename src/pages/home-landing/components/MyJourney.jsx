import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const MyJourney = () => {
  const journeySteps = [
    {
      id: 1,
      title: 'SVCE',
      subtitle: 'Sri Venkateswara College of Engineering',
      location: 'Chennai, India',
      period: '2017-2021',
      description: 'Bachelor of Engineering in Computer Science',
      logo: '/assets/images/SVCE-logo.png',
      color: 'from-orange-500 to-red-500',
      flag: '🇮🇳',
      bgColor: 'from-orange-50 to-red-50 dark:from-orange-400/30 dark:to-red-400/30'
    },
    {
      id: 2,
      title: 'LTIMindtree',
      subtitle: 'Quality Engineer',
      location: 'Chennai, India',
      period: '2021-2023',
      description: 'Started professional journey in Quality Assurance and Testing',
      logo: '/assets/images/ltimindtree-logo.jfif',
      color: 'from-blue-500 to-indigo-500',
      flag: '🇮🇳',
      bgColor: 'from-blue-50 to-indigo-50 dark:from-blue-400/30 dark:to-indigo-400/30'
    },
    {
      id: 3,
      title: 'University of Windsor',
      subtitle: 'Master of Applied Computing',
      location: 'Windsor, Canada',
      period: '2023-2024',
      description: 'Advanced studies in Computer Science',
      logo: '/assets/images/uwindsor-logo.jfif',
      color: 'from-purple-500 to-pink-500',
      flag: '🇨🇦',
      bgColor: 'from-purple-50 to-pink-50 dark:from-purple-400/30 dark:to-pink-400/30'
    },
    {
      id: 4,
      title: 'Tecsys Inc',
      subtitle: 'Associate Software Developer in Test',
      location: 'Montreal, Canada',
      period: '2024-Present',
      description: 'Leading QA automation and performance testing',
      logo: '/assets/images/tecsys-logo.png',
      color: 'from-green-500 to-emerald-500',
      flag: '🇨🇦',
      bgColor: 'from-green-50 to-emerald-50 dark:from-green-400/30 dark:to-emerald-400/30'
    }
  ];

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
    hidden: { scale: 0.8, opacity: 0, rotateY: -15 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "backOut"
      }
    }
  };

  return (
    <motion.section 
      className="pt-8 pb-16 px-6 bg-gradient-to-br from-indigo-50/50 via-blue-50/50 to-cyan-50/50 dark:from-indigo-900/20 dark:via-blue-900/20 dark:to-cyan-900/20 backdrop-blur-sm"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4"
            variants={itemVariants}
          >
            My <motion.span 
              className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0%', '100%', '0%']
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              Journey
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6"
            variants={itemVariants}
          >
            From the vibrant tech scene of Chennai to the innovation hubs of Canada - 
            a journey of growth, learning, and professional excellence.
          </motion.p>
          <motion.div 
            className="flex items-center justify-center space-x-4 text-3xl"
            variants={itemVariants}
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0 }}
            >
              🇮🇳
            </motion.span>
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Icon name="ArrowRight" size={24} color="#3B82F6" />
            </motion.div>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              🇨🇦
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Journey Timeline */}
        <div className="relative">
          {/* Journey Steps */}
          <div className="grid md:grid-cols-4 gap-8 relative" style={{ zIndex: 10 }}>
            {journeySteps.map((step, index) => (
              <motion.div 
                key={step.id} 
                className="group relative"
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Card */}
                <motion.div 
                  className="group text-center p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl border border-white/20 dark:border-gray-700/20 shadow-lg"
                  whileHover={{
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                  }}
                >
                  {/* Header */}
                  <div className="text-center mb-4">
                    <motion.div 
                      className="w-20 h-20 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg border border-white/50 dark:border-gray-700/50"
                      whileHover={{ 
                        rotate: [0, -5, 5, 0],
                        scale: 1.1
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <img 
                        src={step.logo} 
                        alt={`${step.title} logo`}
                        className="w-14 h-14 object-contain"
                      />
                    </motion.div>
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <motion.span 
                        className="text-3xl"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                      >
                        {step.flag}
                      </motion.span>
                      <motion.span 
                        className="text-sm font-medium text-gray-600 dark:text-gray-400 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30 dark:border-gray-700/30"
                        whileHover={{ scale: 1.05 }}
                      >
                        {step.period}
                      </motion.span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-2">
                    <motion.h3 
                      className="text-lg font-bold text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      {step.title}
                    </motion.h3>
                    <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {step.subtitle}
                    </h4>
                    <div className="flex items-center justify-center space-x-1 text-xs text-gray-500 dark:text-gray-500">
                      <Icon name="MapPin" size={12} color="currentColor" />
                      <span>{step.location}</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mt-3">
                      {step.description}
                    </p>
                  </div>

                  {/* Step Number */}
                  <motion.div 
                    className={`absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r ${step.color} text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg border-2 border-white dark:border-gray-800`}
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    {step.id}
                  </motion.div>
                </motion.div>

                {/* Mobile Arrow */}
                {index < journeySteps.length - 1 && (
                  <motion.div 
                    className="md:hidden flex justify-center my-6"
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  >
                    <Icon name="ArrowDown" size={24} color="#3B82F6" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Journey Stats - Diamond Shape */}
        <motion.div 
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {[
            { value: '2', label: 'Countries', color: 'from-blue-500 to-cyan-500', icon: 'Globe' },
            { value: '4', label: 'Milestones', color: 'from-purple-500 to-pink-500', icon: 'Target' },
            { value: '3+', label: 'Years Experience', color: 'from-green-500 to-emerald-500', icon: 'Clock' },
            { value: '∞', label: 'Learning', color: 'from-orange-500 to-red-500', icon: 'BookOpen' }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="relative group"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.1,
                rotateY: 10
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Diamond Container */}
              <motion.div
                className="relative w-32 h-32 mx-auto"
                style={{
                  transform: 'rotate(45deg)',
                  transformOrigin: 'center'
                }}
              >
                {/* Animated Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl shadow-xl`}
                  animate={{
                    rotate: [0, 360]
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                {/* Inner Content */}
                <motion.div
                  className="absolute inset-1 bg-white/95 dark:bg-gray-800/95 rounded-2xl backdrop-blur-sm flex flex-col items-center justify-center"
                  style={{
                    transform: 'rotate(-45deg)'
                  }}
                >
                  {/* Icon */}
                  <motion.div
                    className="mb-2"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  >
                    <Icon name={stat.icon} size={20} color="#3B82F6" />
                  </motion.div>
                  
                  {/* Value */}
                  <motion.div 
                    className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                    animate={{ 
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      delay: index * 0.3 
                    }}
                  >
                    {stat.value}
                  </motion.div>
                </motion.div>

                {/* Floating Particles */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute w-1 h-1 bg-gradient-to-r ${stat.color} rounded-full`}
                    style={{
                      left: `${20 + i * 30}%`,
                      top: `${10 + i * 20}%`
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.5 + index * 0.2
                    }}
                  />
                ))}
              </motion.div>
              
              {/* Label */}
              <motion.div 
                className="text-center mt-6"
                style={{
                  transform: 'rotate(0deg)'
                }}
              >
                <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                  {stat.label}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MyJourney;