import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ProjectStats = ({ projects }) => {
  const stats = [
    {
      icon: 'FolderOpen',
      label: 'Total Projects',
      value: projects?.length,
      color: '#3B82F6',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'CheckCircle',
      label: 'Completed',
      value: projects?.filter(p => p?.status === 'completed')?.length,
      color: '#10B981',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: 'Clock',
      label: 'In Progress',
      value: projects?.filter(p => p?.status === 'in-progress')?.length,
      color: '#F59E0B',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: 'Code',
      label: 'Technologies Used',
      value: [...new Set(projects.flatMap(p => p.technologies))]?.length,
      color: '#8B5CF6',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {stats?.map((stat, index) => (
        <motion.div
          key={index}
          className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-white/30 dark:border-gray-700/30 p-6 text-center shadow-lg"
          variants={itemVariants}
          whileHover={{ 
            scale: 1.05, 
            y: -5,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div 
            className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center bg-gradient-to-r ${stat?.gradient} shadow-lg`}
            whileHover={{ 
              rotate: [0, -10, 10, 0],
              scale: 1.1
            }}
            transition={{ duration: 0.6 }}
          >
            <Icon name={stat?.icon} size={28} color="white" />
          </motion.div>
          
          <motion.p 
            className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-1"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 300 }}
          >
            {stat?.value}
          </motion.p>
          
          <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">{stat?.label}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectStats;