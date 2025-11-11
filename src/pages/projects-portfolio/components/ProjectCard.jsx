import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, onViewDetails, featured = false, viewMode = 'grid' }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hover: { 
      scale: 1.1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  const cardClasses = viewMode === 'list'
    ? "group relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/30 dark:border-gray-700/30 overflow-hidden flex"
    : featured 
      ? "group relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/30 dark:border-gray-700/30 overflow-hidden col-span-2 row-span-2"
      : "group relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/30 dark:border-gray-700/30 overflow-hidden";

  return (
    <motion.div 
      className={cardClasses}
      variants={cardVariants}
      whileHover={{ 
        y: -10, 
        scale: 1.02,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
      }}
      transition={{ type: "spring", stiffness: 300 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className={`relative overflow-hidden ${
        viewMode === 'list' 
          ? 'w-80 h-48 flex-shrink-0' 
          : featured ? 'h-64' : 'h-48'
      }`}>
        <motion.div
          variants={imageVariants}
          whileHover="hover"
        >
          <Image
            src={project?.image}
            alt={project?.imageAlt}
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Overlay on hover */}
        <motion.div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center"
          variants={overlayVariants}
          initial="hidden"
          animate={isHovered ? "visible" : "hidden"}
        >
          <div className="flex space-x-3">
            {project?.liveUrl && (
              <motion.button
                onClick={(e) => {
                  e?.stopPropagation();
                  window.open(project?.liveUrl, '_blank');
                }}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold border border-white/30 hover:bg-white/30 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon name="ExternalLink" size={16} color="white" />
                <span>Live Demo</span>
              </motion.button>
            )}
            {!project?.liveUrl && project?.documentationUrl && (
              <motion.button
                onClick={(e) => {
                  e?.stopPropagation();
                  window.open(project?.documentationUrl, '_blank');
                }}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold border border-white/30 hover:bg-white/30 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon name="FileText" size={16} color="white" />
                <span>Documentation</span>
              </motion.button>
            )}
            {project?.githubUrl && (
              <motion.button
                onClick={(e) => {
                  e?.stopPropagation();
                  window.open(project?.githubUrl, '_blank');
                }}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold border border-white/30 hover:bg-white/30 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon name="Github" size={16} color="white" />
                <span>Code</span>
              </motion.button>
            )}
          </div>
        </motion.div>

        {/* Status Badge */}
        {project?.status && (
          <motion.div 
            className="absolute top-4 right-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
          >
            <span className={`px-3 py-1 text-xs font-medium rounded-full backdrop-blur-sm border ${
              project?.status === 'completed' 
                ? 'bg-green-500/20 text-green-600 dark:text-green-400 border-green-300/50'
                : project?.status === 'in-progress' 
                ? 'bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 border-yellow-300/50' 
                : 'bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-300/50'
            }`}>
              {project?.status === 'completed' ? 'Completed' : 
               project?.status === 'in-progress' ? 'In Progress' : 'Planning'}
            </span>
          </motion.div>
        )}

        {/* Featured Badge */}
        {featured && (
          <motion.div 
            className="absolute top-4 left-4"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center space-x-1 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-sm text-yellow-600 dark:text-yellow-400 px-3 py-1 rounded-full text-xs font-medium border border-yellow-300/50">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Icon name="Star" size={12} color="currentColor" />
              </motion.div>
              <span>Featured</span>
            </div>
          </motion.div>
        )}
      </div>

      {/* Project Content */}
      <div className={`p-6 ${
        viewMode === 'list' 
          ? 'flex-1 flex flex-col justify-between' 
          : featured ? 'space-y-4' : 'space-y-3'
      }`}>
        <motion.div 
          className="flex items-start justify-between"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h3 className={`font-semibold text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 ${
            featured ? 'text-xl' : 'text-lg'
          }`}>
            {project?.title}
          </h3>
          <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
            <Icon name="Calendar" size={14} color="currentColor" />
            <span className="text-xs">{project?.year}</span>
          </div>
        </motion.div>

        <motion.p 
          className={`text-gray-600 dark:text-gray-300 leading-relaxed ${
            featured ? 'text-base' : 'text-sm'
          }`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {project?.description}
        </motion.p>

        {/* Technology Tags */}
        <motion.div 
          className="flex flex-wrap gap-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {project?.technologies?.slice(0, featured ? 6 : 4)?.map((tech, index) => (
            <motion.span
              key={index}
              className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm text-gray-700 dark:text-gray-300 text-xs rounded-full font-medium border border-blue-300/30 dark:border-purple-400/30"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {tech}
            </motion.span>
          ))}
          {project?.technologies?.length > (featured ? 6 : 4) && (
            <span className="px-3 py-1 bg-gradient-to-r from-gray-500/10 to-gray-600/10 backdrop-blur-sm text-gray-600 dark:text-gray-400 text-xs rounded-full font-medium border border-gray-300/30">
              +{project?.technologies?.length - (featured ? 6 : 4)} more
            </span>
          )}
        </motion.div>

        {/* Project Stats */}
        {featured && project?.stats && (
          <motion.div 
            className="grid grid-cols-3 gap-4 pt-4 border-t border-white/30 dark:border-gray-700/30"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="text-center">
              <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">{project?.stats?.duration}</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Duration</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">{project?.stats?.teamSize}</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Team Size</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">{project?.stats?.complexity}</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Complexity</p>
            </div>
          </motion.div>
        )}

        {/* Action Button */}
        <motion.div 
          className="pt-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            onClick={() => onViewDetails(project)}
            className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm text-gray-800 dark:text-gray-100 rounded-xl font-semibold border border-blue-300/30 dark:border-purple-400/30 hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>View Details</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Icon name="ArrowRight" size={16} color="currentColor" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;