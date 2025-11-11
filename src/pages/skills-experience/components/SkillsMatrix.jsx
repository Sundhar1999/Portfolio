import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const SkillsMatrix = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    { id: 'all', label: 'All Skills', icon: 'Grid3X3' },
    { id: 'testing', label: 'Testing & QA', icon: 'TestTube' },
    { id: 'automation', label: 'Automation', icon: 'Bot' },
    { id: 'technical', label: 'Development', icon: 'Code2' },
    { id: 'ai', label: 'AI & ML', icon: 'Brain' },
    { id: 'tools', label: 'Tools & Cloud', icon: 'Wrench' }
  ];

  const skills = [
    // Testing & QA
    {
      id: 1,
      name: "JMeter",
      category: "testing",
      experience: "3+ years",
      certification: "Load testing and performance optimization\nEnterprise application scalability",
      examples: ["Load testing 700+ concurrent users", "API performance optimization", "Bottleneck identification"],
      icon: "Zap",
      color: "#DC143C"
    },
    {
      id: 2,
      name: "LoadRunner",
      category: "testing",
      experience: "2+ years",
      certification: "Large-scale application testing\nSAP and enterprise system validation",
      examples: ["Enterprise load testing", "SAP application testing", "5000+ user load scenarios"],
      icon: "Activity",
      color: "#FF6B35"
    },
    {
      id: 3,
      name: "API Testing",
      category: "testing",
      experience: "3+ years",
      certification: "REST and SOAP API validation\nAutomated backend testing workflows",
      examples: ["SOAP/REST API validation", "Postman automation", "Performance API testing"],
      icon: "Globe",
      color: "#FF851B"
    },
    {
      id: 5,
      name: "Manual Testing",
      category: "testing",
      experience: "4+ years",
      certification: "Comprehensive testing methodologies\nQuality assurance best practices",
      examples: ["Functional testing", "Regression testing", "User acceptance testing"],
      icon: "TestTube",
      color: "#8E44AD"
    },
    // Automation
    {
      id: 6,
      name: "Selenium",
      category: "automation",
      experience: "3+ years",
      certification: "UI automation framework development\nAutomated testing workflows",
      examples: ["UI automation frameworks", "70% manual workload reduction", "Automated testing workflows"],
      icon: "Bot",
      color: "#43B02A"
    },
    {
      id: 7,
      name: "Playwright",
      category: "automation",
      experience: "1+ years",
      certification: "Cross-browser testing implementation\nAPI and UI automation integration",
      examples: ["Cross-browser automation", "API testing", "Modern web app testing"],
      icon: "Play",
      color: "#2ECC40"
    },
    // Development
    {
      id: 10,
      name: "Java",
      category: "technical",
      experience: "4+ years",
      certification: "Enterprise application development\nSpring Boot and microservices architecture",
      examples: ["Spring Boot applications", "RESTful API development", "Enterprise solutions"],
      icon: "Coffee",
      color: "#ED8B00"
    },
    {
      id: 11,
      name: "Spring Boot",
      category: "technical",
      experience: "3+ years",
      certification: "RESTful API development\nMicroservices and enterprise solutions",
      examples: ["Microservices architecture", "REST API development", "Enterprise applications"],
      icon: "Leaf",
      color: "#6DB33F"
    },
    {
      id: 12,
      name: "React",
      category: "technical",
      experience: "2+ years",
      certification: "Component-based UI development\nModern React application architecture",
      examples: ["Food Price Analysis UI", "Component-based architecture", "State management"],
      icon: "Code2",
      color: "#61DAFB"
    },
    {
      id: 13,
      name: "JavaScript",
      category: "technical",
      experience: "3+ years",
      certification: "Modern JavaScript development\nAsynchronous programming and ES6+",
      examples: ["DOM manipulation", "Async programming", "Modern ES6+ features"],
      icon: "Code",
      color: "#F7DF1E"
    },
    {
      id: 14,
      name: "Python",
      category: "technical",
      experience: "2+ years",
      certification: "Signal processing and data analysis\nMachine learning model implementation",
      examples: ["BCI signal processing", "CNN implementation", "Data analysis automation"],
      icon: "Code",
      color: "#3776AB"
    },
    {
      id: 15,
      name: "HTML/CSS",
      category: "technical",
      experience: "4+ years",
      certification: "Responsive web design\nModern CSS and layout techniques",
      examples: ["Responsive design", "CSS Grid & Flexbox", "Modern web standards"],
      icon: "Layout",
      color: "#E34F26"
    },
    {
      id: 25,
      name: "TensorFlow",
      category: "ai",
      experience: "1+ years",
      certification: "Neural network implementation\nMedical AI and signal processing",
      examples: ["RNN-LSTM for ECG analysis", "Medical AI applications", "Neural network optimization"],
      icon: "Brain",
      color: "#FF6F00"
    },
    {
      id: 26,
      name: "Machine Learning",
      category: "ai",
      experience: "2+ years",
      certification: "Pattern recognition systems\nBayesian algorithms and CNN development",
      examples: ["CNN for signal processing", "Bayesian decoding algorithms", "Pattern recognition systems"],
      icon: "Cpu",
      color: "#4285F4"
    },
    {
      id: 27,
      name: "Deep Learning",
      category: "ai",
      experience: "2+ years",
      certification: "Brain-computer interface development\nMedical diagnostics and AI applications",
      examples: ["Congestive Heart Failure detection", "Brain-Computer Interface", "Medical diagnostics AI"],
      icon: "Network",
      color: "#34A853"
    },
    {
      id: 28,
      name: "Signal Processing",
      category: "ai",
      experience: "1+ years",
      certification: "ECG signal analysis and processing\nMedical data preprocessing techniques",
      examples: ["ECG signal analysis", "Wavelet transforms", "Medical data preprocessing"],
      icon: "Activity",
      color: "#EA4335"
    },
    {
      id: 29,
      name: "Vite",
      category: "technical",
      experience: "1+ years",
      certification: "Lightning-fast development setup\nHot module replacement and optimization",
      examples: ["Lightning-fast development", "AI-powered portfolio", "Hot module replacement"],
      icon: "Zap",
      color: "#646CFF"
    },
    {
      id: 30,
      name: "TailwindCSS",
      category: "technical",
      experience: "2+ years",
      certification: "Design system implementation\nResponsive component styling",
      examples: ["Responsive design systems", "Component styling", "Design token management"],
      icon: "Palette",
      color: "#06B6D4"
    },
    {
      id: 31,
      name: "MongoDB",
      category: "tools",
      experience: "2+ years",
      certification: "Document-based data storage\nScalable database solutions",
      examples: ["Document-based storage", "Scalable data solutions", "Aggregation pipelines"],
      icon: "Database",
      color: "#47A248"
    },
    {
      id: 32,
      name: "Django",
      category: "technical",
      experience: "2+ years",
      certification: "Rapid web application development\nE-commerce and sustainable tech solutions",
      examples: ["E-commerce platforms", "Sustainable tech solutions", "Rapid development"],
      icon: "Code2",
      color: "#092E20"
    },
    {
      id: 33,
      name: "Flask",
      category: "technical",
      experience: "1+ years",
      certification: "Lightweight web service development\nAI-powered API implementation",
      examples: ["AI-powered APIs", "Lightweight web services", "RESTful backends"],
      icon: "Server",
      color: "#000000"
    },
    {
      id: 34,
      name: "Tableau",
      category: "tools",
      experience: "1+ years",
      certification: "Interactive dashboard creation\nEducational data analysis and insights",
      examples: ["Interactive dashboards", "Educational data analysis", "Policy insights visualization"],
      icon: "BarChart3",
      color: "#E97627"
    },
    {
      id: 35,
      name: "Agentic AI",
      category: "ai",
      experience: "1+ years",
      certification: "Human-AI collaborative workflows\nIntelligent code generation and optimization",
      examples: ["rocket.new collaboration", "Intelligent code generation", "Human-AI workflows"],
      icon: "Sparkles",
      color: "#8B5CF6"
    },
    // Tools & Cloud
    {
      id: 16,
      name: "AWS",
      category: "tools",
      experience: "2+ years",
      certification: "Cloud infrastructure deployment\nScalable AWS solutions implementation",
      examples: ["EC2 deployment", "S3 storage", "Scalable cloud solutions"],
      icon: "Cloud",
      color: "#FF9900"
    },
    {
      id: 17,
      name: "Docker",
      category: "tools",
      experience: "2+ years",
      certification: "Application containerization\nDeployment automation and optimization",
      examples: ["Application containerization", "40% uptime improvement", "Deployment automation"],
      icon: "Package",
      color: "#2496ED"
    },
    {
      id: 18,
      name: "PostgreSQL",
      category: "tools",
      experience: "3+ years",
      certification: "Query optimization and performance\nDatabase design and architecture",
      examples: ["Query optimization", "Database design", "Performance tuning"],
      icon: "Database",
      color: "#336791"
    },
    {
      id: 19,
      name: "MySQL",
      category: "tools",
      experience: "3+ years",
      certification: "Relational database design\nData modeling and optimization",
      examples: ["Database design", "Query optimization", "Data modeling"],
      icon: "Database",
      color: "#4479A1"
    },
    {
      id: 20,
      name: "Git",
      category: "tools",
      experience: "4+ years",
      certification: "Collaborative development workflows\nBranch management and CI/CD integration",
      examples: ["Branch management", "Collaborative development", "CI/CD integration"],
      icon: "GitBranch",
      color: "#F05032"
    },
    {
      id: 21,
      name: "Jenkins",
      category: "tools",
      experience: "2+ years",
      certification: "Automated testing and deployment\nBuild orchestration and pipeline management",
      examples: ["Automated testing pipelines", "Build automation", "Deployment orchestration"],
      icon: "Workflow",
      color: "#D33833"
    },
    {
      id: 22,
      name: "Postman",
      category: "tools",
      experience: "3+ years",
      certification: "API documentation and automation\nCollection management and validation",
      examples: ["API documentation", "Automated API testing", "Collection management"],
      icon: "Send",
      color: "#FF6C37"
    },
    {
      id: 23,
      name: "JIRA",
      category: "tools",
      experience: "3+ years",
      certification: "Agile project tracking\nSprint planning and test case management",
      examples: ["Bug tracking", "Sprint planning", "Test case management"],
      icon: "Kanban",
      color: "#0052CC"
    },
    {
      id: 24,
      name: "Confluence",
      category: "tools",
      experience: "2+ years",
      certification: "Technical documentation creation\nKnowledge sharing and process documentation",
      examples: ["Test documentation", "Knowledge sharing", "Process documentation"],
      icon: "FileText",
      color: "#172B4D"
    }
  ];

  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills?.filter(skill => skill?.category === selectedCategory);

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
        <h2 className="text-2xl font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>Skills & Expertise</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>Interactive overview of my technical and professional capabilities</p>
      </motion.div>

      {/* Category Filter */}
      <motion.div 
        className="flex flex-wrap gap-3 mb-8"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {skillCategories?.map((category, index) => (
          <motion.button
            key={category?.id}
            onClick={() => setSelectedCategory(category?.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
              selectedCategory === category?.id
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                : 'backdrop-blur-sm bg-white/10 border border-white/20 text-text-secondary hover:bg-white/20'
            }`}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={selectedCategory === category?.id ? { rotate: 360 } : { rotate: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Icon 
                name={category?.icon} 
                size={16} 
                color={selectedCategory === category?.id ? 'currentColor' : 'var(--color-text-secondary)'} 
              />
            </motion.div>
            <span className="font-medium">{category?.label}</span>
          </motion.button>
        ))}
      </motion.div>

      {/* Skills Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        layout
      >
        <AnimatePresence mode="wait">
          {filteredSkills?.map((skill, index) => (
            <motion.div
              key={skill?.id}
              className="relative group backdrop-blur-sm bg-white/10 border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
              onMouseEnter={() => setHoveredSkill(skill?.id)}
              onMouseLeave={() => setHoveredSkill(null)}
              layout
            >
              {/* Skill Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <motion.div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${skill?.color}15` }}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 10,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <Icon 
                      name={skill?.icon} 
                      size={20} 
                      color={skill?.color} 
                    />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold" style={{ color: 'var(--color-text-primary)' }}>{skill?.name}</h3>
                  </div>
                </div>
                <motion.div 
                  className="text-right"
                  whileHover={{ scale: 1.05 }}
                >
                  <div 
                    className="text-xs px-2 py-1 rounded-full text-white"
                    style={{ backgroundColor: skill?.color }}
                  >
                    {skill?.experience}
                  </div>
                </motion.div>
              </div>

              {/* Certification Badge */}
              <motion.div 
                className="flex items-center space-x-2 mb-3"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <Icon name="Award" size={14} color="rgb(59 130 246)" />
                <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{skill?.certification}</span>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      
      {/* Skill Detail Modal */}
      <AnimatePresence>
        {hoveredSkill && (
          <motion.div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setHoveredSkill(null)}
          >
            <motion.div 
              className="backdrop-blur-sm bg-white/20 border border-white/30 rounded-xl p-8 max-w-md w-full mx-4 shadow-2xl"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const skill = skills.find(s => s.id === hoveredSkill);
                return (
                  <>
                    <motion.div 
                      className="flex items-center space-x-4 mb-6"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    >
                      <motion.div 
                        className="w-12 h-12 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${skill?.color}15` }}
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 360,
                          transition: { duration: 0.6 }
                        }}
                      >
                        <Icon 
                          name={skill?.icon} 
                          size={24} 
                          color={skill?.color} 
                        />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-semibold" style={{ color: 'var(--color-text-primary)' }}>{skill?.name}</h3>
                        <p style={{ color: 'var(--color-text-secondary)' }}>{skill?.experience} experience</p>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="mb-6"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      <div className="flex items-center space-x-2 mb-3">
                        <Icon name="Award" size={16} color="rgb(59 130 246)" />
                        <span style={{ color: 'var(--color-text-secondary)' }}>{skill?.certification}</span>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                    >
                      <h4 className="text-lg font-medium mb-4" style={{ color: 'var(--color-text-primary)' }}>Key Applications</h4>
                      <ul className="space-y-3">
                        {skill?.examples?.map((example, index) => (
                          <motion.li 
                            key={index} 
                            className="flex items-start space-x-3"
                            style={{ color: 'var(--color-text-primary)' }}
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                          >
                            <Icon name="CheckCircle" size={16} color="rgb(34 197 94)" className="mt-0.5 flex-shrink-0" />
                            <span>{example}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SkillsMatrix;