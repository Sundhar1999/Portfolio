import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import AIChatbot from '../../components/ui/AIChatbot';
import SocialMediaBar from '../../components/ui/SocialMediaBar';
import CTAButton from '../../components/ui/CTAButton';
import ProjectCard from './components/ProjectCard';
import ProjectFilter from './components/ProjectFilter';
import ProjectModal from './components/ProjectModal';
import ProjectStats from './components/ProjectStats';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const ProjectsPortfolio = () => {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [filters, setFilters] = useState({
    category: 'all',
    technology: 'all',
    sort: 'recent'
  });
  const [isMobile, setIsMobile] = useState(false);

  // Project data
  const projects = [
  {
    id: 1,
    title: "Food Price Analysis",
    description: "A scalable food deals analysis application built as an alternative to FLIPP, helping users find the best grocery deals and price comparisons across multiple stores.",
    fullDescription: `Built a comprehensive food deals analysis app using Java and Spring Boot, ensuring stability under load with over 5,000+ users. The application provides real-time price comparison across multiple grocery stores, helping users save money on their shopping. Implemented robust testing with Selenium and Maven, reducing bugs by 30% and significantly improving user experience.\n\nThe project demonstrates full-stack development capabilities with modern technologies and follows best practices for scalability and performance optimization.`,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136",
    imageAlt: "Food price analysis dashboard showing grocery deals and price comparisons",
    category: "Web Development",
    technologies: ["Java", "Spring Boot", "ReactJS", "MongoDB", "Selenium", "Maven"],
    year: "2024",
    status: "completed",
    liveUrl: "https://www.youtube.com/watch?v=wBxCHenE2Vw",
    githubUrl: "https://github.com/Sundhar1999/Food_Price_Analysis",
    features: [
    "Real-time price comparison",
    "Multi-store deal aggregation",
    "Advanced search and filtering",
    "User-friendly interface",
    "Automated testing framework",
    "Scalable architecture",
    "Performance optimization"],

    challenges: [
    {
      title: "Handling Large Data Sets",
      solution: "Implemented efficient data processing algorithms and database optimization techniques to handle price data from multiple sources."
    },
    {
      title: "Performance Under Load",
      solution: "Used Spring Boot's built-in performance features and implemented comprehensive testing with Selenium to ensure stability for 5000+ users."
    }],

    architecture: "The application follows a layered architecture with Spring Boot backend, ReactJS frontend, and MongoDB for data storage. Comprehensive testing implemented using Selenium and Maven for continuous integration.",
    performance: {
      loadTime: "0.8s",
      uptime: "99.8%",
      users: "5K+",
      bugReduction: "30%"
    },
    gallery: [
    {
      src: "https://images.unsplash.com/photo-1646193186138-148d07f84b13",
      alt: "E-commerce homepage with featured products and navigation menu",
      caption: "Homepage with featured products and intuitive navigation"
    },
    {
      src: "https://images.unsplash.com/photo-1626722328956-e80ec08b202a",
      alt: "Product detail page showing high-resolution images and customer reviews",
      caption: "Detailed product page with reviews and recommendations"
    },
    {
      src: "https://images.unsplash.com/photo-1726066012801-14d892021339",
      alt: "Shopping cart interface with payment options and shipping calculator",
      caption: "Streamlined checkout process with multiple payment options"
    }],

    aiInsights: "This food price analysis application demonstrates strong full-stack development skills with Java Spring Boot and ReactJS. The focus on performance testing and user experience optimization shows expertise in building scalable applications that serve real user needs.",
    recommendations: [
    { id: 2, title: "Task Management App", reason: "Similar React and Node.js stack" },
    { id: 4, title: "Real Estate Platform", reason: "Comparable complexity and features" }],

    learnings: [
    "Full-stack development with Java Spring Boot",
    "Frontend development with ReactJS",
    "Automated testing with Selenium and Maven",
    "Performance optimization for large user bases"],

    stats: {
      duration: "3 months",
      teamSize: "Individual project",
      complexity: "Medium"
    }
  },
  {
    id: 2,
    title: "Vehicle Loan Management System",
    description: "A comprehensive vehicle loan management system that automates loan processing, integrates with Oracle SQL database, and provides user/admin modules for efficient loan management.",
    fullDescription: `Developed a robust vehicle loan management system using Java, Spring Boot, and RESTful services, automating loan approval processes and improving efficiency by 40%. The system features separate user and admin modules built with Angular, utilizing SOAP web services to boost throughput by 25%.\n\nThe project demonstrates expertise in full-stack development, database integration, and enterprise-level application architecture with Docker containerization for improved deployment and scalability.`,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
    imageAlt: "Vehicle loan management system dashboard showing loan applications and approval workflow",
    category: "Web Development",
    technologies: ["Angular", "Java", "Spring Boot", "Hibernate", "Oracle SQL", "Docker"],
    year: "2021",
    status: "completed",
    liveUrl: null,
    githubUrl: "https://github.com/Sundhar1999/Vehicle-Loan-System",
    features: [
    "Automated loan processing",
    "User and admin modules",
    "RESTful API integration",
    "Oracle SQL database",
    "Docker containerization",
    "SOAP web services",
    "Loan approval workflow"],

    challenges: [
    {
      title: "Database Performance Optimization",
      solution: "Implemented efficient Oracle SQL queries and database indexing to improve data retrieval speed by 20%."
    },
    {
      title: "System Integration",
      solution: "Successfully integrated SOAP web services with Angular frontend to boost system throughput by 25%."
    }],

    architecture: "Multi-tier architecture with Angular frontend, Java Spring Boot backend, Oracle SQL database, and Docker containerization for scalable deployment.",
    performance: {
      uptime: "40% increase",
      dataRetrieval: "20% faster",
      throughput: "25% boost",
      efficiency: "Automated"
    },
    gallery: [
    {
      src: "https://images.unsplash.com/photo-1609188343737-366b8dc25152",
      alt: "Kanban board view with drag-and-drop task cards organized in columns",
      caption: "Intuitive Kanban board with drag-and-drop functionality"
    },
    {
      src: "https://images.unsplash.com/photo-1733877687392-7aa39d980a7f",
      alt: "Analytics dashboard showing project progress charts and team performance metrics",
      caption: "Comprehensive analytics and reporting dashboard"
    }],

    aiInsights: "This vehicle loan management system demonstrates expertise in enterprise application development with Java Spring Boot and Angular. The integration of multiple technologies and focus on performance optimization shows strong full-stack development capabilities.",
    recommendations: [
    { id: 1, title: "E-Commerce Platform", reason: "Similar technology stack" },
    { id: 3, title: "Weather Dashboard", reason: "Real-time data handling experience" }],

    learnings: [
    "Enterprise application development",
    "Database optimization techniques",
    "RESTful and SOAP web services",
    "Docker containerization and deployment"],

    stats: {
      duration: "5 months",
      teamSize: "Team project",
      complexity: "High"
    }

  },
  {
    id: 3,
    title: "Brain-Computer Interface (BCI)",
    description: "An innovative Brain-Computer Interface system that translates brain signals into text/speech using CNN and Bayesian Decoding with 90% accuracy for accessibility applications.",
    fullDescription: `Developed a cutting-edge Brain-Computer Interface (BCI) system using Convolutional Neural Networks (CNN) and Bayesian Decoding algorithms to translate brain signals into text and speech with 90% accuracy. The system improves signal precision through advanced feedback mechanisms and was tested on 100 diverse brain signals to enhance accessibility for individuals with disabilities.\n\nThis research project demonstrates expertise in machine learning, signal processing, and accessibility technology, contributing to the advancement of assistive technologies for people with communication disabilities.`,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56",
    imageAlt: "Brain-computer interface visualization showing neural signals and text conversion",
    category: "Research & AI",
    technologies: ["Python", "CNN", "Bayesian Decoding", "Signal Processing", "Machine Learning"],
    year: "2023",
    status: "completed",
    liveUrl: null,
    githubUrl: "https://github.com/Sundhar1999/Brain_Computer_Interface",
    features: [
    "Brain signal processing",
    "CNN-based signal analysis",
    "Bayesian decoding algorithms",
    "Text/speech conversion",
    "Feedback mechanisms",
    "Accessibility focused design",
    "High accuracy (90%)"],

    challenges: [
    {
      title: "Signal Processing Accuracy",
      solution: "Implemented advanced CNN architectures and Bayesian decoding to achieve 90% accuracy in brain signal interpretation."
    },
    {
      title: "Diverse Signal Patterns",
      solution: "Tested on 100 diverse brain signals and implemented feedback mechanisms to improve signal precision across different users."
    }],

    architecture: "Python-based machine learning pipeline with CNN for signal processing, Bayesian decoding for interpretation, and feedback systems for continuous improvement.",
    performance: {
      accuracy: "90%",
      testSignals: "100",
      processing: "Real-time",
      accessibility: "Enhanced"
    },
    gallery: [
    {
      src: "https://images.unsplash.com/photo-1588326356398-a81e0551c94a",
      alt: "Main weather dashboard showing current conditions with temperature and humidity graphs",
      caption: "Main dashboard with current conditions and trends"
    },
    {
      src: "https://images.unsplash.com/photo-1587401048156-69f5f72c6246",
      alt: "Interactive weather map showing precipitation patterns and temperature zones across regions",
      caption: "Interactive weather maps with detailed meteorological data"
    }],

    aiInsights: "This Brain-Computer Interface project demonstrates advanced expertise in machine learning, signal processing, and accessibility technology. The achievement of 90% accuracy with CNN and Bayesian decoding shows strong research and development capabilities.",
    recommendations: [
    { id: 5, title: "Analytics Platform", reason: "Similar data visualization focus" },
    { id: 2, title: "Task Management App", reason: "Dashboard design patterns" }],

    learnings: [
    "Convolutional Neural Networks (CNN)",
    "Bayesian decoding algorithms",
    "Brain signal processing techniques",
    "Accessibility technology development"],

    stats: {
      duration: "3 months",
      teamSize: "Research project",
      complexity: "High"
    }

  },
  {
    id: 4,
    title: "Real Estate Platform",
    description: "A comprehensive property listing platform with advanced search, virtual tours, and AI-powered property recommendations.",
    fullDescription: `A full-featured real estate platform that connects buyers, sellers, and agents. The platform includes advanced property search with multiple filters, virtual tour integration, mortgage calculators, and AI-powered property recommendations. Features include user profiles, saved searches, property comparisons, and integrated communication tools.\n\nThe platform supports multiple user types including buyers, sellers, agents, and administrators, each with tailored interfaces and functionality. Advanced features include market analysis, price predictions, and neighborhood insights.`,
    image: "https://images.unsplash.com/photo-1644123073553-e8452bba7458",
    imageAlt: "Modern real estate platform showing property listings with high-quality photos and detailed information cards",
    category: "Web Development",
    technologies: ["Vue.js", "Laravel", "MySQL", "Elasticsearch", "AWS S3"],
    year: "2023",
    status: "completed",
    liveUrl: "https://realestate-demo.example.com",
    githubUrl: "https://github.com/username/real-estate-platform",
    features: [
    "Advanced property search",
    "Virtual tour integration",
    "Mortgage calculators",
    "AI property recommendations",
    "Agent profiles and ratings",
    "Market analysis tools",
    "Mobile app available"],

    challenges: [
    {
      title: "Search Performance",
      solution: "Implemented Elasticsearch for fast, complex property searches with multiple filters and geolocation."
    }],

    architecture: "Vue.js frontend with Laravel backend, MySQL for relational data, Elasticsearch for search functionality, and AWS S3 for media storage with CDN distribution.",
    performance: {
      loadTime: "1.1s",
      uptime: "99.9%",
      properties: "50K+",
      searches: "1M+"
    },
    gallery: [
    {
      src: "https://images.unsplash.com/photo-1644123073553-e8452bba7458",
      alt: "Property listing page with high-resolution photos and detailed property information",
      caption: "Detailed property listings with comprehensive information"
    },
    {
      src: "https://images.unsplash.com/photo-1657696489779-e9acbc0419a4",
      alt: "Real estate search interface with map view and filter options for property hunting",
      caption: "Advanced search interface with map integration"
    }],

    aiInsights: "This real estate platform showcases expertise in complex web applications with advanced search capabilities. The integration of AI recommendations and Elasticsearch demonstrates knowledge of modern search technologies and machine learning applications.",
    recommendations: [
    { id: 1, title: "E-Commerce Platform", reason: "Similar search and filtering complexity" },
    { id: 6, title: "Portfolio Website", reason: "Professional web development approach" }],

    learnings: [
    "Advanced search implementation with Elasticsearch",
    "AI recommendation system development",
    "Large-scale media management",
    "Multi-user role management systems"],

    stats: {
      duration: "8 months",
      teamSize: "6 people",
      complexity: "High"
    }
  },
  {
    id: 5,
    title: "Analytics Platform",
    description: "A business intelligence dashboard with real-time data processing, custom reports, and predictive analytics capabilities.",
    fullDescription: `A comprehensive business intelligence platform designed for data-driven decision making. The platform processes large volumes of data in real-time, provides customizable dashboards, generates automated reports, and includes predictive analytics capabilities.\n\nFeatures include data source integration, custom visualization builder, automated alerting system, and collaborative reporting tools. The platform supports multiple data formats and provides APIs for third-party integrations.`,
    image: "https://images.unsplash.com/photo-1583373325529-501e03a3a8e7",
    imageAlt: "Business analytics dashboard displaying various charts, graphs, and KPI metrics on multiple monitors",
    category: "Data Analytics",
    technologies: ["Angular", "Python", "PostgreSQL", "Apache Kafka", "Docker"],
    year: "2023",
    status: "in-progress",
    githubUrl: "https://github.com/username/analytics-platform",
    features: [
    "Real-time data processing",
    "Custom dashboard builder",
    "Predictive analytics",
    "Automated reporting",
    "Data source integration",
    "Collaborative tools",
    "API for integrations"],

    challenges: [
    {
      title: "Real-time Data Processing",
      solution: "Implemented Apache Kafka for stream processing with Python-based analytics engine for real-time insights."
    }],

    architecture: "Angular frontend with Python backend, PostgreSQL for data storage, Apache Kafka for real-time data streaming, and Docker containers for scalable deployment.",
    performance: {
      loadTime: "1.3s",
      uptime: "99.6%",
      dataPoints: "100M+",
      reports: "10K+"
    },
    gallery: [
    {
      src: "https://images.unsplash.com/photo-1573311525852-81c1a0b8d03c",
      alt: "Analytics dashboard with multiple charts showing business performance metrics and trends",
      caption: "Comprehensive business intelligence dashboard"
    },
    {
      src: "https://images.unsplash.com/photo-1543947516-d55207244d19",
      alt: "Data visualization interface with custom chart builder and real-time data streams",
      caption: "Custom visualization builder with real-time data"
    }],

    aiInsights: "This analytics platform demonstrates advanced skills in data processing and business intelligence. The use of Apache Kafka for real-time processing and predictive analytics shows expertise in modern data engineering and machine learning applications.",
    recommendations: [
    { id: 3, title: "Weather Dashboard", reason: "Similar data visualization expertise" },
    { id: 2, title: "Task Management App", reason: "Dashboard and analytics experience" }],

    learnings: [
    "Real-time data stream processing",
    "Predictive analytics implementation",
    "Large-scale data visualization",
    "Business intelligence system design"]

  },
  {
    id: 6,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing creative work with smooth animations and interactive elements.",
    fullDescription: `A beautifully designed portfolio website that showcases creative work and professional achievements. The site features smooth animations, interactive elements, and a modern design aesthetic. Built with performance and accessibility in mind, the website includes project galleries, about sections, contact forms, and blog functionality.\n\nThe website is fully responsive and optimized for all devices, with fast loading times and SEO optimization. It includes advanced features like lazy loading, progressive image enhancement, and smooth scrolling effects.`,
    image: "https://images.unsplash.com/photo-1715958207781-9e28c879d739",
    imageAlt: "Modern portfolio website design showing clean layout with project showcases and smooth navigation elements",
    category: "Web Design",
    technologies: ["HTML5", "CSS3", "JavaScript", "GSAP", "Webpack"],
    year: "2024",
    status: "completed",
    liveUrl: "https://portfolio-demo.example.com",
    githubUrl: "https://github.com/username/portfolio-website",
    features: [
    "Responsive design",
    "Smooth animations",
    "Interactive elements",
    "Project galleries",
    "Contact forms",
    "Blog functionality",
    "SEO optimized"],

    challenges: [
    {
      title: "Animation Performance",
      solution: "Used GSAP for hardware-accelerated animations and implemented intersection observer for performance optimization."
    }],

    architecture: "Static site built with modern HTML5, CSS3, and JavaScript, using GSAP for animations and Webpack for build optimization. Deployed on CDN for fast global access.",
    performance: {
      loadTime: "0.6s",
      uptime: "100%",
      visitors: "2K+",
      pageViews: "15K+"
    },
    gallery: [
    {
      src: "https://images.unsplash.com/photo-1530435460869-d13625c69bbf",
      alt: "Portfolio homepage with hero section and smooth scrolling project previews",
      caption: "Clean, modern homepage with engaging hero section"
    },
    {
      src: "https://images.unsplash.com/photo-1586381312254-c9f081a4b392",
      alt: "Project gallery page displaying creative work in grid layout with hover effects",
      caption: "Interactive project gallery with smooth hover effects"
    }],

    aiInsights: "This portfolio website demonstrates strong front-end development skills with a focus on user experience and performance. The use of GSAP for animations and attention to performance optimization shows expertise in modern web development practices.",
    recommendations: [
    { id: 4, title: "Real Estate Platform", reason: "Similar attention to UI/UX design" },
    { id: 1, title: "E-Commerce Platform", reason: "Modern web development approach" }],

    learnings: [
    "Advanced CSS animations and transitions",
    "Performance optimization techniques",
    "Responsive design best practices",
    "SEO and accessibility implementation"]

  }];


  // Extract unique categories and technologies
  const categories = [...new Set(projects.map((p) => p.category))];
  const technologies = [...new Set(projects.flatMap((p) => p.technologies))];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    let filtered = [...projects];

    // Apply category filter
    if (filters?.category !== 'all') {
      filtered = filtered?.filter((project) =>
      project?.category?.toLowerCase() === filters?.category
      );
    }

    // Apply technology filter
    if (filters?.technology !== 'all') {
      filtered = filtered?.filter((project) =>
      project?.technologies?.some((tech) =>
      tech?.toLowerCase() === filters?.technology
      )
      );
    }

    // Apply sorting
    switch (filters?.sort) {
      case 'recent':
        filtered?.sort((a, b) => b?.year - a?.year);
        break;
      case 'oldest':
        filtered?.sort((a, b) => a?.year - b?.year);
        break;
      case 'alphabetical':
        filtered?.sort((a, b) => a?.title?.localeCompare(b?.title));
        break;
      case 'complexity':
        const complexityOrder = { 'High': 3, 'Medium': 2, 'Low': 1 };
        filtered?.sort((a, b) => {
          const aComplexity = a?.stats?.complexity || 'Medium';
          const bComplexity = b?.stats?.complexity || 'Medium';
          return (complexityOrder?.[bComplexity] || 2) - (complexityOrder?.[aComplexity] || 2);
        });
        break;
      default:
        break;
    }

    setFilteredProjects(filtered);
  }, [filters]);

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value
    }));
  };

  const handleSortChange = (value) => {
    setFilters((prev) => ({
      ...prev,
      sort: value
    }));
  };

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleNavigateProject = (projectId) => {
    const project = projects?.find((p) => p?.id === projectId);
    if (project) {
      setSelectedProject(project);
    }
  };

  const featuredProjects = projects?.filter((p) => [1, 4]?.includes(p?.id));
  const regularProjects = filteredProjects?.filter((p) => ![1, 4]?.includes(p?.id));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="pt-12 pb-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Icon name="FolderOpen" size={32} color="var(--color-primary)" />
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary">
                My Projects
              </h1>
            </div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Explore my portfolio of innovative projects spanning web development, data analytics, 
              and creative design. Each project represents a unique challenge solved with modern 
              technologies and best practices.
            </p>
          </div>

          {/* Project Statistics */}
          <ProjectStats projects={projects} />

          {/* Filter Controls */}
          <ProjectFilter
            categories={categories}
            technologies={technologies}
            onFilterChange={handleFilterChange}
            onSortChange={handleSortChange}
            activeFilters={filters}
            isMobile={isMobile} />


          {/* Results Summary */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-text-secondary">
              Showing {filteredProjects?.length} of {projects?.length} projects
            </p>
            
            {/* View Toggle for Desktop */}
            {!isMobile &&
            <div className="flex items-center space-x-2">
                <span className="text-sm text-text-secondary">View:</span>
                <div className="flex bg-muted rounded-lg p-1">
                  <button className="px-3 py-1 bg-primary text-primary-foreground rounded text-sm">
                    Grid
                  </button>
                  <button className="px-3 py-1 text-text-secondary hover:text-text-primary text-sm nav-transition">
                    List
                  </button>
                </div>
              </div>
            }
          </div>

          {/* Featured Projects */}
          {filters?.category === 'all' && filters?.technology === 'all' &&
          <div className="mb-12">
              <div className="flex items-center space-x-2 mb-6">
                <Icon name="Star" size={20} color="var(--color-accent)" />
                <h2 className="text-2xl font-semibold text-text-primary">Featured Projects</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {featuredProjects?.map((project) =>
              <ProjectCard
                key={project?.id}
                project={project}
                onViewDetails={handleViewDetails}
                featured={true} />

              )}
              </div>
            </div>
          }

          {/* All Projects Grid */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-text-primary mb-6">
              {filters?.category === 'all' && filters?.technology === 'all' ? 'All Projects' : 'Filtered Results'}
            </h2>
            
            {filteredProjects?.length > 0 ?
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {(filters?.category === 'all' && filters?.technology === 'all' ? regularProjects : filteredProjects)?.map((project) =>
              <ProjectCard
                key={project?.id}
                project={project}
                onViewDetails={handleViewDetails} />

              )}
              </div> :

            <div className="text-center py-16">
                <Icon name="Search" size={48} color="var(--color-text-secondary)" className="mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-text-primary mb-2">No Projects Found</h3>
                <p className="text-text-secondary mb-6">
                  Try adjusting your filters to see more projects.
                </p>
                <Button
                variant="outline"
                iconName="RotateCcw"
                iconPosition="left"
                onClick={() => {
                  setFilters({ category: 'all', technology: 'all', sort: 'recent' });
                }}>

                  Reset Filters
                </Button>
              </div>
            }
          </div>

          {/* Load More Button (if needed) */}
          {filteredProjects?.length > 9 &&
          <div className="text-center mt-12">
              <Button
              variant="outline"
              size="lg"
              iconName="Plus"
              iconPosition="left">

                Load More Projects
              </Button>
            </div>
          }
        </div>
      </section>
      {/* Call to Action Section */}
      <section className="py-16 px-8 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            Interested in Working Together?
          </h2>
          <p className="text-lg text-text-secondary mb-8">
            I'm always excited to take on new challenges and collaborate on innovative projects. Let's discuss how we can bring your ideas to life.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              variant="default"
              size="lg"
              iconName="MessageCircle"
              iconPosition="left"
              onClick={() => navigate('/contact-engagement')}>

              Start a Conversation
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              iconName="User"
              iconPosition="left"
              onClick={() => navigate('/skills-experience')}>

              View My Skills
            </Button>
          </div>
        </div>
      </section>
      {/* Social Media Bar */}
      <div className="hidden lg:block fixed left-6 top-1/2 transform -translate-y-1/2 z-100">
        <SocialMediaBar variant="vertical" />
      </div>
      {/* Floating CTA */}
      <CTAButton position="floating" />
      {/* AI Chatbot */}
      <AIChatbot />
      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onNavigateProject={handleNavigateProject} />

    </div>);

};

export default ProjectsPortfolio;