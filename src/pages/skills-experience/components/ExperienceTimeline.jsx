import React, { useState } from 'react';
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
    "Cross-functional collaboration with development and QA teams"],

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
    "Deployed and managed test environments using Docker and AWS for production-scale scenarios"],

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
    "Enhanced test coverage and accelerated defect detection through data-driven execution"],

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
    "Applied unit testing with JUnit and automated validation for code reliability"],

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
    "Supported data-driven features using Pandas and basic web analytics"],

    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "React.js", "Pandas", "Web Analytics"],
    aiSummary: `Foundation internship experience in web development. Gained hands-on experience in responsive design and modern web technologies.`,
    testimonial: null
  }];


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
  }];


  const toggleExpanded = (id) => {
    setExpandedEntry(expandedEntry === id ? null : id);
  };

  return (
    <div className="bg-surface rounded-xl border border-border p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-text-primary mb-2">Professional Journey</h2>
        <p className="text-text-secondary">Career progression and educational background</p>
      </div>
      {/* Experience Timeline */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold text-text-primary mb-6 flex items-center">
          <Icon name="Briefcase" size={20} color="var(--color-primary)" className="mr-2" />
          Professional Experience
        </h3>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border"></div>
          
          {experiences?.map((exp, index) =>
          <div key={exp?.id} className="relative flex items-start space-x-6 pb-8">
              {/* Timeline Dot */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-12 h-12 bg-white border-2 border-primary rounded-full flex items-center justify-center overflow-hidden">
                  <Image
                  src={exp?.logo}
                  alt={exp?.logoAlt}
                  className="w-10 h-10 object-contain"
                  style={{ filter: 'none' }} />

                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md nav-transition">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-text-primary">{exp?.position}</h4>
                      <p className="text-primary font-medium">{exp?.company}</p>
                      <div className="flex items-center space-x-4 mt-1 text-sm text-text-secondary">
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
                    </div>
                    <button
                    onClick={() => toggleExpanded(exp?.id)}
                    className="mt-3 sm:mt-0 flex items-center space-x-2 px-3 py-1 bg-muted hover:bg-border rounded-lg nav-transition text-sm">

                      <span>{expandedEntry === exp?.id ? 'Less' : 'More'}</span>
                      <Icon
                      name={expandedEntry === exp?.id ? 'ChevronUp' : 'ChevronDown'}
                      size={14} />

                    </button>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp?.technologies?.map((tech) =>
                  <span
                    key={tech}
                    className="px-2 py-1 bg-primary bg-opacity-10 text-primary text-xs rounded-full">

                        {tech}
                      </span>
                  )}
                  </div>

                  {/* AI Summary */}
                  <div className="bg-muted rounded-lg p-4 mb-4">
                    <div className="flex items-start space-x-2">
                      <Icon name="Sparkles" size={16} color="var(--color-accent)" className="mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-text-primary mb-1">AI Career Insight</p>
                        <p className="text-sm text-text-secondary">{exp?.aiSummary}</p>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {expandedEntry === exp?.id &&
                <div className="space-y-4 animate-scale-in">
                      {/* Achievements */}
                      <div>
                        <h5 className="font-medium text-text-primary mb-3">Key Achievements</h5>
                        <ul className="space-y-2">
                          {exp?.achievements?.map((achievement, idx) =>
                      <li key={idx} className="flex items-start space-x-2">
                              <Icon name="CheckCircle" size={16} color="var(--color-success)" className="mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-text-secondary">{achievement}</span>
                            </li>
                      )}
                        </ul>
                      </div>

                      {/* Testimonial */}
                      {exp?.testimonial &&
                  <div className="bg-surface border border-border rounded-lg p-4">
                          <div className="flex items-start space-x-3">
                            <Image
                        src={exp?.testimonial?.avatar}
                        alt={exp?.testimonial?.avatarAlt}
                        className="w-10 h-10 rounded-full object-cover flex-shrink-0" />

                            <div className="flex-1">
                              <p className="text-sm text-text-secondary italic mb-2">"{exp?.testimonial?.text}"</p>
                              <div>
                                <p className="text-sm font-medium text-text-primary">{exp?.testimonial?.author}</p>
                                <p className="text-xs text-text-secondary">{exp?.testimonial?.role}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                  }
                    </div>
                }
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Education Section */}
      <div>
        <h3 className="text-xl font-semibold text-text-primary mb-6 flex items-center">
          <Icon name="GraduationCap" size={20} color="var(--color-primary)" className="mr-2" />
          Education
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {education?.map((edu) =>
          <div key={edu?.id} className="bg-card border border-border rounded-lg p-6 hover:shadow-md nav-transition">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-white border border-border rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
                  <Image
                  src={edu?.logo}
                  alt={edu?.logoAlt}
                  className="w-10 h-10 object-contain"
                  style={{ filter: 'none' }} />
                </div>

                <div className="flex-1">
                  <h4 className="font-semibold text-text-primary">{edu?.degree}</h4>
                  <p className="text-primary font-medium">{edu?.institution}</p>
                  <div className="flex items-center space-x-4 mt-1 text-sm text-text-secondary">
                    <span>{edu?.duration}</span>
                    <span>{edu?.gpa}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <h5 className="text-sm font-medium text-text-primary mb-2">Relevant Coursework</h5>
                  <div className="flex flex-wrap gap-1">
                    {edu?.coursework?.map((course) =>
                  <span
                    key={course}
                    className="px-2 py-1 bg-muted text-text-secondary text-xs rounded">

                        {course}
                      </span>
                  )}
                  </div>
                </div>

                <div>
                  <h5 className="text-sm font-medium text-text-primary mb-2">Achievements</h5>
                  <ul className="space-y-1">
                    {edu?.achievements?.map((achievement, idx) =>
                  <li key={idx} className="flex items-start space-x-2">
                        <Icon name="Award" size={12} color="var(--color-accent)" className="mt-1 flex-shrink-0" />
                        <span className="text-xs text-text-secondary">{achievement}</span>
                      </li>
                  )}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>);

};

export default ExperienceTimeline;