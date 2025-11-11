import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ExperienceTimeline = () => {
  const [expandedEntry, setExpandedEntry] = useState(null);

  const experiences = [
    {
      id: 1,
      company: "Tecsys Inc.",
      logo: "/assets/images/tecsys-logo.png",
      logoAlt: "Tecsys Inc. supply chain technology company logo",
      position: "Associate Software Developer in Test",
      duration: "May 2025 - Present",
      period: "7 months",
      location: "Ottawa, ON, Canada",
      type: "Permanent Full-time",
      achievements: [
        "API Testing and Automation testing with 18+ technical skills",
        "Remote work delivering enterprise-level testing solutions",
        "Continuous performance optimization and scalability improvements",
        "Cross-functional collaboration with development and QA teams"
      ],
      technologies: ["API Testing", "Automation Testing", "JMeter", "Selenium", "Performance Testing"],
      aiSummary: `Current role focusing on API testing and automation with comprehensive technical expertise. Leading testing initiatives for enterprise supply chain solutions.`,
      testimonial: null
    },
    {
      id: 2,
      company: "Tecsys Inc.",
      logo: "/assets/images/tecsys-logo.png",
      logoAlt: "Tecsys Inc. supply chain technology company logo",
      position: "Intern - Developer (Performance, Scalability)",
      duration: "Sep 2024 - Apr 2025",
      period: "8 months",
      location: "Canada",
      type: "Internship",
      achievements: [
        "Engineered performance testing solutions using JMeter and Selenium for healthcare supply chain clients",
        "Automated end-to-end regression and UI test suites, cutting manual testing time by 40%",
        "Streamlined API testing (REST/SOAP) and backend validation, improving response times",
        "Deployed and managed test environments using Docker and AWS for production-scale scenarios"
      ],
      technologies: ["JMeter", "Selenium", "Groovy", "PostgreSQL", "Docker", "AWS", "React.js", "JIRA", "Confluence"],
      aiSummary: `Comprehensive internship experience in performance testing and automation. Demonstrated strong technical skills in optimizing system scalability and reliability.`,
      testimonial: null
    },
    {
      id: 3,
      company: "LTIMindtree",
      logo: "/assets/images/ltimindtree-logo.jfif",
      logoAlt: "LTIMindtree technology consulting company logo",
      position: "Quality Engineer",
      duration: "Aug 2021 - Jul 2023",
      period: "2 years",
      location: "Chennai, Tamil Nadu, India",
      type: "Full-time",
      achievements: [
        "Executed end-to-end performance engineering using JMeter, LoadRunner, and NeoLoad",
        "Delivered scalable QA solutions for enterprise clients: SAP, Hitachi, Securitas, Indian Medical Sector",
        "Integrated performance testing into CI/CD pipelines using Jenkins and GitHub",
        "Enhanced test coverage and accelerated defect detection through data-driven execution"
      ],
      technologies: ["JMeter", "LoadRunner", "NeoLoad", "Jenkins", "GitHub", "MySQL", "SAP ERP", "Automation"],
      aiSummary: `Extensive experience in performance engineering and test automation for enterprise clients. Strong expertise in CI/CD integration and scalable QA solutions.`,
      testimonial: null
    },
    {
      id: 4,
      company: "LTIMindtree",
      logo: "/assets/images/ltimindtree-logo.jfif",
      logoAlt: "LTIMindtree technology consulting company logo",
      position: "Java Developer",
      duration: "Jun 2021 - Aug 2021",
      period: "3 months",
      location: "Chennai, Tamil Nadu, India",
      type: "Full-time",
      achievements: [
        "Developed full-stack web applications using Java, Spring Boot, Angular 10, and Bootstrap",
        "Designed RESTful APIs using Django REST Framework and Spring Boot with Hibernate ORM",
        "Leveraged modern web technologies: JavaScript, TypeScript, HTML/CSS, Plotly for data visualization",
        "Applied unit testing with JUnit and automated validation for code reliability"
      ],
      technologies: ["Java", "Spring Boot", "Angular 10", "Bootstrap", "Django", "Hibernate", "JUnit", "Oracle Database"],
      aiSummary: `Full-stack development experience with strong focus on clean coding standards and best practices. Expertise in API development and database integration.`,
      testimonial: null
    },
    {
      id: 5,
      company: "SMI - Sri Mookambika Infotechs",
      logo: "/assets/images/SMI-logo.jfif",
      logoAlt: "SMI Sri Mookambika Infotechs company logo",
      position: "Web Development Intern",
      duration: "Jun 2019 - Jul 2019",
      period: "2 months",
      location: "Madurai, Tamil Nadu, India",
      type: "Internship",
      achievements: [
        "Contributed to front-end and full-stack development projects during 2-month internship",
        "Built responsive web interfaces using HTML, CSS, Bootstrap, and JavaScript",
        "Explored React.js for dynamic UI components and improved user interactivity",
        "Supported data-driven features using Pandas and basic web analytics"
      ],
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "React.js", "Pandas", "Web Analytics"],
      aiSummary: `Foundation internship experience in web development. Gained hands-on experience in responsive design and modern web technologies.`,
      testimonial: null
    }
  ];

  const education = [
    {
      id: 1,
      institution: "University of Windsor",
      logo: "/assets/images/uwindsor-logo.jfif",
      logoAlt: "University of Windsor campus building with academic architecture",
      degree: "Master of Applied Computing",
      duration: "Sep 2023 - Dec 2024",
      gpa: "8-month intern experience",
      coursework: ["Advanced Software Engineering", "OOPS", "Data Structure", "Algorithm Design", "Networking", "Database Systems"],
      achievements: ["Completed with internship experience", "Advanced coursework in software engineering"]
    },
    {
      id: 2,
      institution: "Sri Venkateswara College of Engineering",
      logo: "/assets/images/SVCE-logo.png",
      logoAlt: "Sri Venkateswara College of Engineering campus with academic buildings",
      degree: "Bachelor of Engineering in Computer Science",
      duration: "Aug 2017 - Jun 2021",
      gpa: "94% CGPA",
      coursework: ["Computer Science Fundamentals", "Programming Languages", "Software Engineering", "Database Management"],
      achievements: ["94% CGPA - Excellent Academic Performance", "Strong foundation in Computer Science"]
    }
  ];

  const toggleExpanded = (id) => {
    setExpandedEntry(expandedEntry === id ? null : id);
  };

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
        <h2 className="text-2xl font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>Professional Journey</h2>
        <p style={{ color: 'var(--color-text-secondary)' }}>Career progression and educational background</p>
      </motion.div>

      {/* Experience Timeline */}
      <div className="mb-12">
        <motion.h3 
          className="text-xl font-semibold text-text-primary mb-6 flex items-center"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <Icon name="Briefcase" size={20} color="rgb(59 130 246)" className="mr-2" />
          </motion.div>
          Professional Experience
        </motion.h3>
        
        <div className="relative">
          {/* Animated Timeline Line */}
          <motion.div 
            className="absolute left-6 top-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: true }}
          />
          
          {experiences?.map((exp, index) => (
            <motion.div 
              key={exp?.id} 
              className="relative flex items-start space-x-6 pb-8"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Timeline Dot */}
              <div className="relative z-10 flex-shrink-0">
                <motion.div 
                  className="w-12 h-12 bg-white border-2 border-blue-500 rounded-full flex items-center justify-center overflow-hidden shadow-lg"
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={exp?.logo}
                    alt={exp?.logoAlt}
                    className="w-10 h-10 object-contain"
                    style={{ filter: 'none' }}
                  />
                </motion.div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <motion.div 
                  className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-all duration-300"
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <h4 className="text-lg font-semibold" style={{ color: 'var(--color-text-primary)' }}>{exp?.position}</h4>
                      <p className="font-medium" style={{ color: 'rgb(96 165 250)' }}>{exp?.company}</p>
                      <div className="flex items-center space-x-4 mt-1 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                        <span className="flex items-center">
                          <Icon name="Calendar" size={14} className="mr-1" />
                          {exp?.duration}
                        </span>
                        <span className="flex items-center">
                          <Icon name="MapPin" size={14} className="mr-1" />
                          {exp?.location}
                        </span>
                        <span className="flex items-center">
                          <Icon name="Clock" size={14} className="mr-1" />
                          {exp?.period}
                        </span>
                      </div>
                    </motion.div>
                    <motion.button
                      onClick={() => toggleExpanded(exp?.id)}
                      className="mt-3 sm:mt-0 flex items-center space-x-2 px-3 py-1 backdrop-blur-sm bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>{expandedEntry === exp?.id ? 'Less' : 'More'}</span>
                      <motion.div
                        animate={{ rotate: expandedEntry === exp?.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon name="ChevronDown" size={14} />
                      </motion.div>
                    </motion.button>
                  </div>

                  {/* Technologies */}
                  <motion.div 
                    className="flex flex-wrap gap-2 mb-4"
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    {exp?.technologies?.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="px-2 py-1 bg-gradient-to-r from-blue-400 to-purple-400 text-white text-xs rounded-full border border-blue-400/50"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.3 + techIndex * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ 
                          scale: 1.1,
                          transition: { duration: 0.2 }
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* AI Summary */}
                  <motion.div 
                    className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-4 mb-4"
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start space-x-2">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      >
                        <Icon name="Sparkles" size={16} color="rgb(168 85 247)" className="mt-0.5 flex-shrink-0" />
                      </motion.div>
                      <div>
                        <p className="text-sm font-medium mb-1" style={{ color: 'var(--color-text-primary)' }}>AI Career Insight</p>
                        <p className="text-sm" style={{ color: 'var(--color-text-primary)' }}>{exp?.aiSummary}</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {expandedEntry === exp?.id && (
                      <motion.div 
                        className="space-y-4"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        {/* Achievements */}
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.4, delay: 0.1 }}
                        >
                          <h5 className="font-medium mb-3" style={{ color: 'var(--color-text-primary)' }}>Key Achievements</h5>
                          <ul className="space-y-2">
                            {exp?.achievements?.map((achievement, idx) => (
                              <motion.li 
                                key={idx} 
                                className="flex items-start space-x-2"
                                initial={{ x: -10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.3, delay: 0.2 + idx * 0.1 }}
                              >
                                <Icon name="CheckCircle" size={16} color="rgb(34 197 94)" className="mt-0.5 flex-shrink-0" />
                                <span className="text-sm" style={{ color: 'var(--color-text-primary)' }}>{achievement}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div>
        <motion.h3 
          className="text-xl font-semibold text-text-primary mb-6 flex items-center"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <Icon name="GraduationCap" size={20} color="rgb(59 130 246)" className="mr-2" />
          </motion.div>
          Education
        </motion.h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {education?.map((edu, index) => (
            <motion.div 
              key={edu?.id} 
              className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-all duration-300"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <div className="flex items-start space-x-4 mb-4">
                <motion.div 
                  className="w-12 h-12 bg-white border border-white/20 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Image
                    src={edu?.logo}
                    alt={edu?.logoAlt}
                    className="w-10 h-10 object-contain"
                    style={{ filter: 'none' }}
                  />
                </motion.div>
                <div className="flex-1">
                  <h4 className="font-semibold" style={{ color: 'var(--color-text-primary)' }}>{edu?.degree}</h4>
                  <p className="font-medium" style={{ color: 'rgb(96 165 250)' }}>{edu?.institution}</p>
                  <div className="flex items-center space-x-4 mt-1 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                    <span>{edu?.duration}</span>
                    <span>{edu?.gpa}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h5 className="text-sm font-medium mb-2" style={{ color: 'var(--color-text-primary)' }}>Relevant Coursework</h5>
                  <div className="flex flex-wrap gap-1">
                    {edu?.coursework?.map((course, courseIndex) => (
                      <motion.span
                        key={course}
                        className="px-2 py-1 backdrop-blur-sm bg-white/10 text-xs rounded border border-white/20"
                        style={{ color: 'var(--color-text-secondary)' }}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.3 + courseIndex * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {course}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h5 className="text-sm font-medium mb-2" style={{ color: 'var(--color-text-primary)' }}>Achievements</h5>
                  <ul className="space-y-1">
                    {edu?.achievements?.map((achievement, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-start space-x-2"
                        initial={{ x: -10, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.5 + idx * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Icon name="Award" size={12} color="rgb(168 85 247)" className="mt-1 flex-shrink-0" />
                        <span className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceTimeline;