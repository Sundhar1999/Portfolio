import React, { useState } from 'react';
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
      case 'High': return 'bg-red-100 text-red-800 border-red-200';
      case 'Medium': return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const currentRecommendations = recommendations?.[selectedGoal] || [];

  return (
    <div className="bg-surface rounded-xl border border-border p-8">
      <div className="mb-8">
        <div className="flex items-center space-x-2 mb-2">
          <Icon name="Sparkles" size={24} color="var(--color-accent)" />
          <h2 className="text-2xl font-semibold text-text-primary">AI Skill Recommendations</h2>
        </div>
        <p className="text-text-secondary">Personalized learning path based on industry trends and your career goals</p>
      </div>
      {/* Career Goal Selection */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Select Your Career Goal</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {careerGoals?.map((goal) => (
            <button
              key={goal?.id}
              onClick={() => setSelectedGoal(goal?.id)}
              className={`flex flex-col items-center space-y-2 p-4 rounded-lg border nav-transition hover-lift ${
                selectedGoal === goal?.id
                  ? 'bg-primary text-primary-foreground border-primary shadow-sm'
                  : 'bg-card text-text-secondary border-border hover:border-primary hover:text-text-primary'
              }`}
            >
              <Icon 
                name={goal?.icon} 
                size={24} 
                color={selectedGoal === goal?.id ? 'currentColor' : 'var(--color-text-secondary)'} 
              />
              <span className="text-sm font-medium text-center">{goal?.label}</span>
            </button>
          ))}
        </div>
      </div>
      {/* Recommendations */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-text-primary">
            Recommended Skills for {careerGoals?.find(g => g?.id === selectedGoal)?.label}
          </h3>
          <div className="text-sm text-text-secondary">
            {currentRecommendations?.length} recommendations
          </div>
        </div>

        {currentRecommendations?.map((rec, index) => (
          <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-md nav-transition">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${rec?.color}15` }}
                >
                  <Icon 
                    name={rec?.icon} 
                    size={24} 
                    color={rec?.color} 
                  />
                </div>
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
                  <div className="w-16 bg-muted rounded-full h-2">
                    <div 
                      className="h-2 bg-primary rounded-full"
                      style={{ width: `${rec?.marketDemand}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium text-text-primary">{rec?.marketDemand}%</span>
                </div>
              </div>
            </div>

            <p className="text-text-secondary mb-4">{rec?.reason}</p>

            <div className="space-y-3">
              <div>
                <h5 className="text-sm font-medium text-text-primary mb-2">Recommended Resources</h5>
                <div className="flex flex-wrap gap-2">
                  {rec?.resources?.map((resource, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-muted text-text-secondary text-sm rounded-full"
                    >
                      {resource}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-border">
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
                
                <Button
                  variant="outline"
                  size="sm"
                  iconName="ExternalLink"
                  iconPosition="right"
                  onClick={() => {
                    // Simulate opening learning resources
                    console.log(`Opening resources for ${rec?.skill}`);
                  }}
                >
                  Start Learning
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Learning Path Summary */}
      <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/20">
        <div className="flex items-start space-x-3">
          <Icon name="Lightbulb" size={20} color="var(--color-primary)" className="mt-1 flex-shrink-0" />
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
      </div>
    </div>
  );
};

export default SkillRecommendations;