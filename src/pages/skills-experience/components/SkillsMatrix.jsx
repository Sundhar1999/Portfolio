import React, { useState } from 'react';
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
      certification: "Performance Testing Expert",
      examples: ["Load testing 700+ concurrent users", "API performance optimization", "Bottleneck identification"],
      icon: "Zap",
      color: "#DC143C"
    },
    {
      id: 2,
      name: "LoadRunner",
      category: "testing",
      experience: "2+ years",
      certification: "Enterprise Performance Testing",
      examples: ["Enterprise load testing", "SAP application testing", "5000+ user load scenarios"],
      icon: "Activity",
      color: "#FF6B35"
    },
    {
      id: 3,
      name: "API Testing",
      category: "testing",
      experience: "3+ years",
      certification: "API Testing Specialist",
      examples: ["SOAP/REST API validation", "Postman automation", "Performance API testing"],
      icon: "Globe",
      color: "#FF851B"
    },

    {
      id: 5,
      name: "Manual Testing",
      category: "testing",
      experience: "4+ years",
      certification: "QA Fundamentals",
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
      certification: "Test Automation Specialist",
      examples: ["UI automation frameworks", "70% manual workload reduction", "Cross-browser testing"],
      icon: "Bot",
      color: "#43B02A"
    },
    {
      id: 7,
      name: "Playwright",
      category: "automation",
      experience: "1+ years",
      certification: "Modern Test Automation",
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
      certification: "Oracle Java Certified",
      examples: ["Spring Boot applications", "RESTful API development", "Enterprise solutions"],
      icon: "Coffee",
      color: "#ED8B00"
    },
    {
      id: 11,
      name: "Spring Boot",
      category: "technical",
      experience: "3+ years",
      certification: "Spring Framework",
      examples: ["Microservices architecture", "REST API development", "Enterprise applications"],
      icon: "Leaf",
      color: "#6DB33F"
    },
    {
      id: 12,
      name: "React",
      category: "technical",
      experience: "2+ years",
      certification: "Frontend Development",
      examples: ["Food Price Analysis UI", "Component-based architecture", "State management"],
      icon: "Code2",
      color: "#61DAFB"
    },
    {
      id: 13,
      name: "JavaScript",
      category: "technical",
      experience: "3+ years",
      certification: "Frontend Development",
      examples: ["DOM manipulation", "Async programming", "Modern ES6+ features"],
      icon: "Code",
      color: "#F7DF1E"
    },
    {
      id: 14,
      name: "Python",
      category: "technical",
      experience: "2+ years",
      certification: "Data Science & ML",
      examples: ["BCI signal processing", "CNN implementation", "Data analysis automation"],
      icon: "Code",
      color: "#3776AB"
    },
    {
      id: 15,
      name: "HTML/CSS",
      category: "technical",
      experience: "4+ years",
      certification: "Web Development",
      examples: ["Responsive design", "CSS Grid & Flexbox", "Modern web standards"],
      icon: "Layout",
      color: "#E34F26"
    },
    {
      id: 25,
      name: "TensorFlow",
      category: "ai",
      experience: "2+ years",
      certification: "Deep Learning Specialist",
      examples: ["RNN-LSTM for ECG analysis", "Medical AI applications", "Neural network optimization"],
      icon: "Brain",
      color: "#FF6F00"
    },
    {
      id: 26,
      name: "Machine Learning",
      category: "ai",
      experience: "2+ years",
      certification: "ML Engineer",
      examples: ["CNN for signal processing", "Bayesian decoding algorithms", "Pattern recognition systems"],
      icon: "Cpu",
      color: "#4285F4"
    },
    {
      id: 27,
      name: "Deep Learning",
      category: "ai",
      experience: "2+ years",
      certification: "Neural Networks",
      examples: ["Congestive Heart Failure detection", "Brain-Computer Interface", "Medical diagnostics AI"],
      icon: "Network",
      color: "#34A853"
    },
    {
      id: 28,
      name: "Signal Processing",
      category: "ai",
      experience: "2+ years",
      certification: "Biomedical Engineering",
      examples: ["ECG signal analysis", "Wavelet transforms", "Medical data preprocessing"],
      icon: "Activity",
      color: "#EA4335"
    },
    {
      id: 29,
      name: "Vite",
      category: "technical",
      experience: "1+ years",
      certification: "Modern Build Tools",
      examples: ["Lightning-fast development", "AI-powered portfolio", "Hot module replacement"],
      icon: "Zap",
      color: "#646CFF"
    },
    {
      id: 30,
      name: "TailwindCSS",
      category: "technical",
      experience: "2+ years",
      certification: "Utility-First CSS",
      examples: ["Responsive design systems", "Component styling", "Design token management"],
      icon: "Palette",
      color: "#06B6D4"
    },
    {
      id: 31,
      name: "MongoDB",
      category: "tools",
      experience: "2+ years",
      certification: "NoSQL Database",
      examples: ["Document-based storage", "Scalable data solutions", "Aggregation pipelines"],
      icon: "Database",
      color: "#47A248"
    },
    {
      id: 32,
      name: "Django",
      category: "technical",
      experience: "2+ years",
      certification: "Python Web Framework",
      examples: ["E-commerce platforms", "Sustainable tech solutions", "Rapid development"],
      icon: "Code2",
      color: "#092E20"
    },
    {
      id: 33,
      name: "Flask",
      category: "technical",
      experience: "1+ years",
      certification: "Microframework",
      examples: ["AI-powered APIs", "Lightweight web services", "RESTful backends"],
      icon: "Server",
      color: "#000000"
    },
    {
      id: 34,
      name: "Tableau",
      category: "tools",
      experience: "1+ years",
      certification: "Data Visualization",
      examples: ["Interactive dashboards", "Educational data analysis", "Policy insights visualization"],
      icon: "BarChart3",
      color: "#E97627"
    },
    {
      id: 35,
      name: "Agentic AI",
      category: "ai",
      experience: "1+ years",
      certification: "AI-Assisted Development",
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
      certification: "Cloud Practitioner",
      examples: ["EC2 deployment", "S3 storage", "Scalable cloud solutions"],
      icon: "Cloud",
      color: "#FF9900"
    },
    {
      id: 17,
      name: "Docker",
      category: "tools",
      experience: "2+ years",
      certification: "Container Specialist",
      examples: ["Application containerization", "40% uptime improvement", "Deployment automation"],
      icon: "Package",
      color: "#2496ED"
    },
    {
      id: 18,
      name: "PostgreSQL",
      category: "tools",
      experience: "3+ years",
      certification: "Database Administrator",
      examples: ["Query optimization", "Database design", "Performance tuning"],
      icon: "Database",
      color: "#336791"
    },
    {
      id: 19,
      name: "MySQL",
      category: "tools",
      experience: "3+ years",
      certification: "Database Management",
      examples: ["Database design", "Query optimization", "Data modeling"],
      icon: "Database",
      color: "#4479A1"
    },
    {
      id: 20,
      name: "Git",
      category: "tools",
      experience: "4+ years",
      certification: "Version Control",
      examples: ["Branch management", "Collaborative development", "CI/CD integration"],
      icon: "GitBranch",
      color: "#F05032"
    },
    {
      id: 21,
      name: "Jenkins",
      category: "tools",
      experience: "2+ years",
      certification: "CI/CD Pipeline",
      examples: ["Automated testing pipelines", "Build automation", "Deployment orchestration"],
      icon: "Workflow",
      color: "#D33833"
    },
    {
      id: 22,
      name: "Postman",
      category: "tools",
      experience: "3+ years",
      certification: "API Testing",
      examples: ["API documentation", "Automated API testing", "Collection management"],
      icon: "Send",
      color: "#FF6C37"
    },
    {
      id: 23,
      name: "JIRA",
      category: "tools",
      experience: "3+ years",
      certification: "Project Management",
      examples: ["Bug tracking", "Sprint planning", "Test case management"],
      icon: "Kanban",
      color: "#0052CC"
    },
    {
      id: 24,
      name: "Confluence",
      category: "tools",
      experience: "2+ years",
      certification: "Documentation",
      examples: ["Test documentation", "Knowledge sharing", "Process documentation"],
      icon: "FileText",
      color: "#172B4D"
    }
  ];

  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills?.filter(skill => skill?.category === selectedCategory);

  const getProficiencyColor = (proficiency) => {
    if (proficiency >= 90) return 'bg-emerald-500';
    if (proficiency >= 80) return 'bg-blue-500';
    if (proficiency >= 70) return 'bg-amber-500';
    return 'bg-gray-400';
  };

  const getProficiencyLabel = (proficiency) => {
    if (proficiency >= 90) return 'Expert';
    if (proficiency >= 80) return 'Advanced';
    if (proficiency >= 70) return 'Intermediate';
    return 'Beginner';
  };

  return (
    <div className="bg-surface rounded-xl border border-border p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-text-primary mb-2">Skills & Expertise</h2>
        <p className="text-text-secondary">Interactive overview of my technical and professional capabilities</p>
      </div>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 mb-8">
        {skillCategories?.map((category) => (
          <button
            key={category?.id}
            onClick={() => setSelectedCategory(category?.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg nav-transition hover-lift ${
              selectedCategory === category?.id
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'bg-muted text-text-secondary hover:text-text-primary hover:bg-border'
            }`}
          >
            <Icon 
              name={category?.icon} 
              size={16} 
              color={selectedCategory === category?.id ? 'currentColor' : 'var(--color-text-secondary)'} 
            />
            <span className="font-medium">{category?.label}</span>
          </button>
        ))}
      </div>
      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
        {filteredSkills?.map((skill) => (
          <div
            key={skill?.id}
            className="relative group bg-card border border-border rounded-lg p-6 hover:shadow-md nav-transition hover-lift cursor-pointer overflow-visible"
            onMouseEnter={() => setHoveredSkill(skill?.id)}
            onMouseLeave={() => setHoveredSkill(null)}
            style={{ zIndex: hoveredSkill === skill?.id ? 100 : 1 }}
          >
            {/* Skill Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${skill?.color}15` }}
                >
                  <Icon 
                    name={skill?.icon} 
                    size={20} 
                    color={skill?.color} 
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary">{skill?.name}</h3>
                  <p className="text-sm text-text-secondary">{skill?.experience}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs px-2 py-1 rounded-full bg-accent text-white">
                  {skill?.experience}
                </div>
              </div>
            </div>



            {/* Certification Badge */}
            <div className="flex items-center space-x-2 mb-3">
              <Icon name="Award" size={14} color="var(--color-accent)" />
              <span className="text-sm text-text-secondary">{skill?.certification}</span>
            </div>


          </div>
        ))}
      </div>
      
      {/* Dialog Overlay */}
      {hoveredSkill && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-surface border border-primary rounded-xl p-8 max-w-md w-full mx-4 shadow-2xl animate-scale-in">
            {(() => {
              const skill = skills.find(s => s.id === hoveredSkill);
              return (
                <>
                  <div className="flex items-center space-x-4 mb-6">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${skill?.color}15` }}
                    >
                      <Icon 
                        name={skill?.icon} 
                        size={24} 
                        color={skill?.color} 
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-text-primary">{skill?.name}</h3>
                      <p className="text-text-secondary">{skill?.experience} experience</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <Icon name="Award" size={16} color="var(--color-accent)" />
                      <span className="text-text-secondary">{skill?.certification}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-text-primary mb-4">Key Applications</h4>
                    <ul className="space-y-3">
                      {skill?.examples?.map((example, index) => (
                        <li key={index} className="text-text-secondary flex items-start space-x-3">
                          <Icon name="CheckCircle" size={16} color="var(--color-accent)" className="mt-0.5 flex-shrink-0" />
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              );
            })()} 
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillsMatrix;