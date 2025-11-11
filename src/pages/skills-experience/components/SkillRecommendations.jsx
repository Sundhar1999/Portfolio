import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SkillRecommendations = () => {
  const [selectedGoal, setSelectedGoal] = useState('fullstack');

  const careerGoals = [
    { id: 'fullstack', label: 'Full Stack Mastery', icon: 'Layers' },
    { id: 'leadership', label: 'Tech Leadership', icon: 'Crown' },
    { id: 'ai', label: 'AI/ML Specialist', icon: 'Brain' },
    { id: 'devops', label: 'DevOps Engineer', icon: 'Settings' }
  ];

  const recommendations = {
    fullstack: [
      {
        skill: "GraphQL",
        priority: "High",
        reason: "Modern API development standard, complements your React expertise",
        timeToLearn: "2-3 months",
        resources: ["Apollo GraphQL Course", "GraphQL Foundation Certification"],
        marketDemand: 85,
        icon: "Database",
        color: "#E10098"
      },
      {
        skill: "Next.js",
        priority: "High",
        reason: "React framework for production, enhances your current React skills",
        timeToLearn: "1-2 months",
        resources: ["Next.js Official Tutorial", "Vercel Deployment Guide"],
        marketDemand: 92,
        icon: "Zap",
        color: "#000000"
      },
      {
        skill: "Microservices Architecture",
        priority: "Medium",
        reason: "Scalable system design, builds on your Node.js background",
        timeToLearn: "3-4 months",
        resources: ["Microservices Patterns Book", "Kubernetes Fundamentals"],
        marketDemand: 78,
        icon: "Grid3X3",
        color: "#326CE5"
      }
    ],
    leadership: [
      {
        skill: "System Design",
        priority: "High",
        reason: "Essential for senior roles, leverages your technical background",
        timeToLearn: "4-6 months",
        resources: ["System Design Interview Book", "High Scalability Blog"],
        marketDemand: 88,
        icon: "Network",
        color: "#FF6B6B"
      },
      {
        skill: "Agile Coaching",
        priority: "Medium",
        reason: "Complements your Scrum Master certification",
        timeToLearn: "2-3 months",
        resources: ["ICAgile Certification", "Agile Coaching Institute"],
        marketDemand: 72,
        icon: "Users",
        color: "#4ECDC4"
      }
    ],
    ai: [
      {
        skill: "TensorFlow",
        priority: "High",
        reason: "Industry-standard ML framework, builds on your Python skills",
        timeToLearn: "3-4 months",
        resources: ["TensorFlow Developer Certificate", "Deep Learning Specialization"],
        marketDemand: 89,
        icon: "Brain",
        color: "#FF6F00"
      },
      {
        skill: "MLOps",
        priority: "Medium",
        reason: "Combines ML with your DevOps knowledge",
        timeToLearn: "2-3 months",
        resources: ["MLOps Specialization", "Kubeflow Tutorial"],
        marketDemand: 76,
        icon: "Cog",
        color: "#00D4AA"
      }
    ],
    devops: [
      {
        skill: "Kubernetes",
        priority: "High",
        reason: "Container orchestration, extends your Docker expertise",
        timeToLearn: "3-4 months",
        resources: ["CKA Certification", "Kubernetes in Action Book"],
        marketDemand: 91,
        icon: "Package",
        color: "#326CE5"
      },
      {
        skill: "Terraform",
        priority: "High",
        reason: "Infrastructure as Code, complements your AWS skills",
        timeToLearn: "2-3 months",
        resources: ["HashiCorp Certified Terraform Associate", "Terraform Up & Running"],
        marketDemand: 84,
        icon: "Cloud",
        color: "#623CE4"
      }
    ]
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'bg-red-500/20 text-red-300 border-red-500/30';
      case 'Medium': return 'bg-amber-500/20 text-amber-300 border-amber-500/30';
      case 'Low': return 'bg-green-500/20 text-green-300 border-green-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  const currentRecommendations = recommendations?.[selectedGoal] || [];

  return (
    <motion.div 
      className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl p-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.div 
        className="mb-8"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center space-x-2 mb-2">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Icon name="Sparkles" size={24} color="rgb(168 85 247)" />
          </motion.div>
          <h2 className="text-2xl font-semibold text-text-primary">AI Skill Recommendations</h2>
        </div>
        <p className="text-text-secondary">Personalized learning path based on industry trends and your career goals</p>
      </motion.div>

      {/* Career Goal Selection */}
      <div className="mb-8">
        <motion.h3 
          className="text-lg font-semibold text-text-primary mb-4"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Select Your Career Goal
        </motion.h3>
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-3"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {careerGoals?.map((goal, index) => (
            <motion.button
              key={goal?.id}
              onClick={() => setSelectedGoal(goal?.id)}
              className={`flex flex-col items-center space-y-2 p-4 rounded-lg border transition-all duration-300 ${
                selectedGoal === goal?.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white border-transparent shadow-lg'
                  : 'backdrop-blur-sm bg-white/10 text-text-secondary border-white/20 hover:bg-white/20 hover:text-text-primary'
              }`}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={selectedGoal === goal?.id ? { rotate: 360 } : { rotate: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Icon 
                  name={goal?.icon} 
                  size={24} 
                  color={selectedGoal === goal?.id ? 'currentColor' : 'var(--color-text-secondary)'} 
                />
              </motion.div>
              <span className="text-sm font-medium text-center">{goal?.label}</span>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Recommendations */}
      <div className="space-y-6">
        <motion.div 
          className="flex items-center justify-between"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-text-primary">
            Recommended Skills for {careerGoals?.find(g => g?.id === selectedGoal)?.label}
          </h3>
          <div className="text-sm text-text-secondary">
            {currentRecommendations?.length} recommendations
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedGoal}
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
          >
            {currentRecommendations?.map((rec, index) => (
              <motion.div 
                key={index} 
                className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-all duration-300"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <motion.div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${rec?.color}15` }}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 10,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <Icon 
                        name={rec?.icon} 
                        size={24} 
                        color={rec?.color} 
                      />
                    </motion.div>
                    <div>
                      <h4 className="text-lg font-semibold text-text-primary">{rec?.skill}</h4>
                      <div className="flex items-center space-x-3 mt-1">
                        <span className={`px-2 py-1 text-xs rounded-full border ${getPriorityColor(rec?.priority)}`}>
                          {rec?.priority} Priority
                        </span>
                        <span className="text-sm text-text-secondary">{rec?.timeToLearn}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-sm text-text-secondary mb-1">Market Demand</div>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 bg-white/20 rounded-full h-2">
                        <motion.div 
                          className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${rec?.marketDemand}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                          viewport={{ once: true }}
                        />
                      </div>
                      <span className="text-sm font-medium text-text-primary">{rec?.marketDemand}%</span>
                    </div>
                  </div>
                </div>

                <motion.p 
                  className="text-text-secondary mb-4"
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {rec?.reason}
                </motion.p>

                <div className="space-y-3">
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <h5 className="text-sm font-medium text-text-primary mb-2">Recommended Resources</h5>
                    <div className="flex flex-wrap gap-2">
                      {rec?.resources?.map((resource, idx) => (
                        <motion.span 
                          key={idx}
                          className="px-3 py-1 backdrop-blur-sm bg-white/10 text-text-secondary text-sm rounded-full border border-white/20"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.4 + idx * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ 
                            scale: 1.05,
                            transition: { duration: 0.2 }
                          }}
                        >
                          {resource}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-center justify-between pt-3 border-t border-white/10"
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center space-x-4 text-sm text-text-secondary">
                      <span className="flex items-center">
                        <Icon name="Clock" size={14} className="mr-1" />
                        {rec?.timeToLearn}
                      </span>
                      <span className="flex items-center">
                        <Icon name="TrendingUp" size={14} className="mr-1" />
                        {rec?.marketDemand}% demand
                      </span>
                    </div>
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        iconName="ExternalLink"
                        iconPosition="right"
                        onClick={() => {
                          console.log(`Opening resources for ${rec?.skill}`);
                        }}
                        className="backdrop-blur-sm bg-white/10 border-white/20 hover:bg-white/20"
                      >
                        Start Learning
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Learning Path Summary */}
      <motion.div 
        className="mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex items-start space-x-3">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <Icon name="Lightbulb" size={20} color="rgb(59 130 246)" className="mt-1 flex-shrink-0" />
          </motion.div>
          <div>
            <h4 className="font-semibold text-text-primary mb-2">Your Personalized Learning Path</h4>
            <p className="text-sm text-text-secondary mb-3">
              Based on your current skills and selected career goal, focus on high-priority skills first. 
              The estimated timeline for mastering these recommendations is 6-12 months with consistent practice.
            </p>
            <div className="flex items-center space-x-4 text-sm">
              <span className="flex items-center text-text-secondary">
                <Icon name="Target" size={14} className="mr-1" />
                {currentRecommendations?.filter(r => r?.priority === 'High')?.length} high-priority skills
              </span>
              <span className="flex items-center text-text-secondary">
                <Icon name="Calendar" size={14} className="mr-1" />
                6-12 months timeline
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SkillRecommendations;