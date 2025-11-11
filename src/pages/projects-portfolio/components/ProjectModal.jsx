import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectModal = ({ project, isOpen, onClose, onNavigateProject }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setActiveTab('overview');
      setCurrentImageIndex(0);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  if (!isOpen || !project) return null;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'Eye' },
    { id: 'technical', label: 'Technical Details', icon: 'Code' },
    { id: 'gallery', label: 'Gallery', icon: 'Images' },
    { id: 'insights', label: 'AI Insights', icon: 'Brain' }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project?.gallery?.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project?.gallery?.length - 1 : prev - 1
    );
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div 
            className="space-y-6"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">Project Description</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project?.fullDescription}</p>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">Key Features</h3>
              <ul className="space-y-2">
                {project?.features?.map((feature, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start space-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Icon name="Check" size={16} color="#10B981" className="mt-1 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            {project?.challenges && (
              <motion.div variants={itemVariants}>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">Challenges & Solutions</h3>
                <div className="space-y-3">
                  {project?.challenges?.map((challenge, index) => (
                    <motion.div 
                      key={index} 
                      className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-4 border border-white/30 dark:border-gray-700/30"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <h4 className="font-medium text-gray-800 dark:text-gray-100 mb-2">{challenge?.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{challenge?.solution}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        );

      case 'technical':
        return (
          <motion.div 
            className="space-y-6"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">Technology Stack</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project?.technologies?.map((tech, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center space-x-2 p-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-xl border border-blue-300/30 dark:border-purple-400/30"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon name="Code" size={16} color="#3B82F6" />
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-100">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {project?.architecture && (
              <motion.div variants={itemVariants}>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">Architecture</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project?.architecture}</p>
              </motion.div>
            )}
            
            {project?.performance && (
              <motion.div variants={itemVariants}>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">Performance Metrics</h3>
                <div className={`grid gap-4 ${
                  Object.keys(project?.performance).length === 3 
                    ? 'grid-cols-1 md:grid-cols-3' 
                    : 'grid-cols-2 md:grid-cols-4'
                }`}>
                  {Object.entries(project?.performance)?.map(([key, value], index) => (
                    <motion.div 
                      key={key} 
                      className="text-center p-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl border border-blue-300/30 dark:border-purple-400/30"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1, type: "spring", stiffness: 300 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{value}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 capitalize">{key?.replace(/([A-Z])/g, ' $1')}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
            
            {project?.["Food Sites Used"] && (
              <motion.div variants={itemVariants}>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">Food Sites Used</h3>
                <div className="grid grid-cols-3 gap-4">
                  {Object.keys(project?.["Food Sites Used"])?.map((site, index) => (
                    <motion.div 
                      key={site} 
                      className="text-center p-4 bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl border border-green-300/30"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1, type: "spring", stiffness: 300 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <p className="text-lg font-bold text-green-600 dark:text-green-400">{site}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        );

      case 'gallery':
        return (
          <motion.div 
            className="space-y-6"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            {project?.gallery && project?.gallery?.length > 0 ? (
              <>
                <motion.div className="relative" variants={itemVariants}>
                  <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden">
                    <Image
                      src={project?.gallery?.[currentImageIndex]?.src}
                      alt={project?.gallery?.[currentImageIndex]?.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {project?.gallery?.length > 1 && (
                    <>
                      <motion.button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/60 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-black/80 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Icon name="ChevronLeft" size={20} color="currentColor" />
                      </motion.button>
                      <motion.button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/60 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-black/80 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Icon name="ChevronRight" size={20} color="currentColor" />
                      </motion.button>
                    </>
                  )}
                </motion.div>

                <motion.div className="grid grid-cols-4 md:grid-cols-6 gap-2" variants={itemVariants}>
                  {project?.gallery?.map((image, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                        index === currentImageIndex ? 'border-blue-500' : 'border-transparent'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Image
                        src={image?.src}
                        alt={image?.alt}
                        className="w-full h-full object-cover"
                      />
                    </motion.button>
                  ))}
                </motion.div>

                <motion.div className="text-center" variants={itemVariants}>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {project?.gallery?.[currentImageIndex]?.caption}
                  </p>
                </motion.div>
              </>
            ) : (
              <motion.div className="text-center py-12" variants={itemVariants}>
                <Icon name="Image" size={48} color="#6B7280" className="mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400">No gallery images available for this project.</p>
              </motion.div>
            )}
          </motion.div>
        );

      case 'insights':
        return (
          <motion.div 
            className="space-y-6"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-300/30 dark:border-purple-400/30"
              variants={itemVariants}
            >
              <div className="flex items-center space-x-2 mb-4">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Icon name="Brain" size={20} color="#3B82F6" />
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">AI-Generated Insights</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project?.aiInsights}</p>
            </motion.div>
            
            {project?.recommendations && (
              <motion.div variants={itemVariants}>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">Recommended Similar Projects</h3>
                <div className="space-y-3">
                  {project?.recommendations?.map((rec, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-center justify-between p-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-white/30 dark:border-gray-700/30"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div>
                        <h4 className="font-medium text-gray-800 dark:text-gray-100">{rec?.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{rec?.reason}</p>
                      </div>
                      <motion.button
                        onClick={() => onNavigateProject(rec?.id)}
                        className="inline-flex items-center space-x-1 px-3 py-1 bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-xl font-medium hover:bg-blue-500/30 transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>View</span>
                        <Icon name="ArrowRight" size={14} color="currentColor" />
                      </motion.button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
            
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">Learning Outcomes</h3>
              <ul className="space-y-2">
                {project?.learnings?.map((learning, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start space-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Icon name="Lightbulb" size={16} color="#F59E0B" className="mt-1 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">{learning}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div 
            className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden border border-white/30 dark:border-gray-700/30"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/30 dark:border-gray-700/30">
              <motion.div 
                className="flex items-center space-x-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon name="FolderOpen" size={24} color="white" />
                </motion.div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{project?.title}</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{project?.category} • {project?.year}</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                {project?.liveUrl && (
                  <motion.button
                    onClick={() => window.open(project?.liveUrl, '_blank')}
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/20 backdrop-blur-sm text-blue-600 dark:text-blue-400 rounded-xl font-semibold border border-blue-300/50 hover:bg-blue-500/30 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon name="ExternalLink" size={16} color="currentColor" />
                    <span>Live Demo</span>
                  </motion.button>
                )}
                {project?.githubUrl && (
                  <motion.button
                    onClick={() => window.open(project?.githubUrl, '_blank')}
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-500/20 backdrop-blur-sm text-gray-600 dark:text-gray-400 rounded-xl font-semibold border border-gray-300/50 hover:bg-gray-500/30 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon name="Github" size={16} color="currentColor" />
                    <span>Code</span>
                  </motion.button>
                )}
                {project?.documentationUrl && (
                  <motion.button
                    onClick={() => window.open(project?.documentationUrl, '_blank')}
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-green-500/20 backdrop-blur-sm text-green-600 dark:text-green-400 rounded-xl font-semibold border border-green-300/50 hover:bg-green-500/30 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon name="FileText" size={16} color="currentColor" />
                    <span>Documentation</span>
                  </motion.button>
                )}
                <motion.button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-200/50 dark:hover:bg-gray-700/50 rounded-xl transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon name="X" size={20} color="currentColor" />
                </motion.button>
              </motion.div>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-white/30 dark:border-gray-700/30 overflow-x-auto">
              {tabs?.map((tab, index) => (
                <motion.button
                  key={tab?.id}
                  onClick={() => setActiveTab(tab?.id)}
                  className={`flex items-center space-x-2 px-6 py-3 text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    activeTab === tab?.id
                      ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-500 bg-blue-500/10' 
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                  }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  whileHover={{ y: -2 }}
                >
                  <Icon name={tab?.icon} size={16} color="currentColor" />
                  <span>{tab?.label}</span>
                </motion.button>
              ))}
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-96">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {renderTabContent()}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;