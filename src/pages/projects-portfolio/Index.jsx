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
  const [viewMode, setViewMode] = useState('grid');

  // Project data
  const projects = [
  {
    id: 1,
    title: "Smart Shop - Grocery Deal Analysis",
    description: "An ambitious web application that transforms online grocery shopping by providing unparalleled access to deals from major Canadian retailers using advanced data structures and algorithms.",
    fullDescription: `Smart Shop is a comprehensive grocery deal analysis platform built with Spring Boot, React, MongoDB, and Selenium Java. The application revolutionizes how users approach grocery shopping by providing intelligent deal analysis across major retailers like Walmart, Zehrs, and Metro.\n\nKey technical implementations include web scraping with Selenium, data validation using regular expressions, inverted indexing for fast retrieval, sophisticated page ranking algorithms, and advanced search capabilities with Trie data structures for word completion. The system processes thousands of deals daily and provides personalized recommendations to help users maximize their savings.`,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136",
    imageAlt: "Food price analysis dashboard showing grocery deals and price comparisons",
    category: "Full Stack Application",
    technologies: ["Java", "Spring Boot", "ReactJS", "MongoDB", "Selenium", "Maven", "Docker", "Data Structures", "Algorithms"],
    year: "2024",
    status: "completed",
    liveUrl: "https://www.youtube.com/watch?v=wBxCHenE2Vw",
    githubUrl: "https://github.com/Sundhar1999/Food_Price_Analysis",
    features: [
    "Web scraping with Selenium Java across multiple retailers",
    "Data validation using regular expressions",
    "Inverted indexing for lightning-fast deal retrieval",
    "Page ranking algorithms for personalized recommendations",
    "Pattern recognition for deal trend analysis",
    "Spell checking with edit distance algorithms",
    "Frequency analysis using Red-Black Tree data structure",
    "Word completion with Trie data structures",
    "Comprehensive deal comparison across stores",
    "Search frequency insights with max heap implementation"],

    challenges: [
    {
      title: "Efficient Data Structure Implementation",
      solution: "Implemented Trie data structures for word completion, Red-Black Trees for frequency counting, and inverted indexing for fast search retrieval across thousands of products."
    },
    {
      title: "Real-time Web Scraping at Scale",
      solution: "Developed robust Selenium-based web scraping with regular expression validation to handle dynamic content from multiple grocery store websites while maintaining data accuracy."
    },
    {
      title: "Advanced Search and Ranking",
      solution: "Created sophisticated page ranking algorithms and pattern recognition systems to provide personalized deal recommendations based on user preferences and shopping history."
    }],

    architecture: "Multi-tier architecture featuring Spring Boot REST APIs, React frontend with responsive design, MongoDB for deal storage, and advanced data structures including Trie trees, Red-Black trees, and inverted indexes. Selenium automation handles web scraping while regular expressions ensure data validation and pattern recognition.",
    "Food Sites Used": {
      "Walmart": true,
      "Zehers": true,
      "Metro": true
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
    "Advanced data structures implementation (Trie, Red-Black Tree, Inverted Index)",
    "Web scraping automation with Selenium Java",
    "Regular expression patterns for data validation and extraction",
    "Algorithm design for page ranking and pattern recognition",
    "Full-stack development with Spring Boot and React",
    "Database optimization for high-volume deal processing"],

    stats: {
      duration: "4 months",
      teamSize: "4",
      complexity: "High"
    }
  },
  {
    id: 2,
    title: "Vehicle Loan Management System - Indian Finance Solution",
    description: "An end-to-end vehicle loan management system addressing India's complex loan approval challenges, reducing processing time from months to days through automation and digital transformation.",
    fullDescription: `A comprehensive solution to India's vehicle loan acquisition challenges, where traditional processes take weeks to months for approval with multiple institutional visits. This system revolutionizes the Indian finance sector by automating requirements verification, document processing, and loan approvals while providing a 360-degree customer view across the organization.\n\nBuilt with enterprise-grade technologies including Angular, Spring Boot, Hibernate, and Oracle Database, the system features dual modules for users and administrators, EMI calculators, eligibility checkers, and comprehensive loan tracking. The solution transforms customer interactions and significantly reduces both processing time and associated risks in vehicle loan management.`,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
    imageAlt: "Vehicle loan management system dashboard showing loan applications and approval workflow",
    category: "Enterprise Finance Application",
    technologies: ["Angular", "Spring Boot", "Hibernate", "Oracle Database", "RESTful APIs", "Postman", "Maven", "RestClient"],
    year: "2021",
    status: "completed",
    liveUrl: null,
    githubUrl: "https://github.com/Sundhar1999/Vehicle-Loan-System",
    problemStatement: "In India, acquiring a vehicle loan is an arduous and time-consuming process, often stretching from weeks to months for approval. Applicants frequently need to visit financial institutions multiple times for document submission and verification.",
    projectDomain: "Finance - Indian Banking & Lending Sector",
    objective: "Streamline the vehicle loan approval process by reducing both associated risks and time required to secure a loan through comprehensive automation and digital transformation.",
    features: [
    "🏦 User Module: Complete loan application, document submission, and status tracking",
    "👨💼 Admin Module: Loan application management, user information, and document verification",
    "💰 EMI Calculator: Monthly installment calculation based on loan amount, interest rate, and tenure",
    "✅ Eligibility Checker: Pre-defined criteria-based loan eligibility assessment",
    "📋 Automated Requirements Verification: Instant user requirement validation",
    "📄 Quick Document Verification: Streamlined document processing and validation",
    "⚡ Faster Loan Approvals: Reduced processing time from months to days",
    "📊 Comprehensive User Tracking: 360-degree customer view across organization",
    "🔄 RESTful API Integration: Seamless service communication and data exchange",
    "🗄️ Oracle Database Management: Robust data storage and retrieval system"],

    challenges: [
    {
      title: "🇮🇳 Indian Finance Sector Complexity",
      solution: "Designed system architecture to handle complex Indian banking regulations, multiple document types, and varied eligibility criteria while ensuring compliance with RBI guidelines and financial institution requirements."
    },
    {
      title: "⏱️ Processing Time Reduction",
      solution: "Implemented automated workflows, document verification algorithms, and real-time eligibility checking to reduce loan processing time from traditional weeks/months to just a few days."
    },
    {
      title: "🏢 Multi-Institutional Integration",
      solution: "Developed RESTful APIs and SOAP web services to integrate with multiple financial institutions, enabling seamless data exchange and comprehensive customer tracking across organizations."
    }],

    architecture: "Enterprise-grade multi-tier architecture featuring Angular frontend for dynamic user interfaces, Spring Boot backend with RESTful APIs, Hibernate ORM for seamless database operations, Oracle Database for robust data management, and Maven for dependency management. The system includes comprehensive API testing with Postman and external service integration via RestClient.",
    performance: {
      processingTimeReduction: "From months to days (95% improvement)",
      systemEfficiency: "40% increase in overall efficiency",
      dataRetrieval: "20% faster query performance"
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
    "🏦 Indian finance sector domain expertise and regulatory compliance",
    "🏗️ Enterprise application architecture with Spring Boot and Angular",
    "🗄️ Oracle Database optimization and performance tuning",
    "🔄 RESTful API design and SOAP web services integration",
    "📊 Business process automation and workflow optimization",
    "🧪 Comprehensive API testing and validation with Postman"],

    stats: {
      duration: "5 months",
      teamSize: "4 developers",
      complexity: "High - Enterprise Finance Application"
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
    title: "LeadConnect - AI-Powered Lead Nurturing",
    description: "An AI-powered lead nurturing platform that integrates with LinkedIn to help businesses maintain connections, nurture relationships, and fuel growth through personalized outreach.",
    fullDescription: `LeadConnect is your AI-powered lead nurturing sidekick designed to help you keep in touch with your network, nurture relationships, and fuel growth. In today's fast-paced business environment, staying connected with former colleagues, promising leads, and talented individuals often falls by the wayside.\n\nThe platform seamlessly integrates with LinkedIn and harnesses AI to provide timely, personalized message recommendations. Unlike traditional CRM solutions that rely on templated messages, LeadConnect offers a personalized approach to outreach, ensuring communications resonate with each recipient while focusing on nurturing relationships for long-term growth.`,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
    imageAlt: "AI-powered lead nurturing dashboard showing LinkedIn integration and personalized outreach recommendations",
    category: "Full Stack AI powered Application",
    technologies: ["JavaScript", "Python", "Flask", "SQL", "Tailwind CSS", "React"],
    year: "2024",
    status: "completed",
    liveUrl: "https://www.youtube.com/watch?v=ZiyUfM9W_Qw",
    githubUrl: "https://github.com/Sundhar1999/LeadConnect",
    features: [
    "LinkedIn integration for seamless connection management",
    "AI-powered personalized message recommendations",
    "Automated outreach opportunity alerts",
    "Talent pool expansion and partner engagement",
    "Personalized outreach over templated messages",
    "Relationship nurturing focus for long-term growth",
    "Cost-effective alternative to traditional CRMs",
    "Data export capabilities with no vendor lock-in"],

    challenges: [
    {
      title: "AI-Powered Personalization",
      solution: "Implemented machine learning algorithms to analyze LinkedIn profiles and generate personalized message recommendations based on connection history and engagement patterns."
    },
    {
      title: "LinkedIn API Integration",
      solution: "Developed robust integration with LinkedIn's API to seamlessly manage connections while respecting rate limits and privacy guidelines."
    },
    {
      title: "Real-time Outreach Timing",
      solution: "Created intelligent algorithms to identify optimal outreach moments based on user activity patterns and relationship lifecycle stages."
    }],

    architecture: "React frontend with Tailwind CSS for responsive design, Flask backend API, SQL database for relationship data, and Python-based AI engine for personalized recommendations and LinkedIn integration.",
    performance: {
      responseTime: "<500ms",
      accuracy: "95%",
      connections: "1K+"
    },
    gallery: [
    {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978",
      alt: "LeadConnect dashboard showing AI-powered recommendations and LinkedIn integration",
      caption: "Main dashboard with AI recommendations and connection insights"
    },
    {
      src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd",
      alt: "Personalized outreach interface with message templates and timing suggestions",
      caption: "Personalized outreach interface with intelligent timing"
    }],

    aiInsights: "LeadConnect demonstrates expertise in AI integration, social media APIs, and relationship management systems. The focus on personalized AI recommendations and LinkedIn integration shows advanced skills in modern web development and machine learning applications for business growth.",
    recommendations: [
    { id: 1, title: "Smart Shop", reason: "Similar AI-powered recommendation systems" },
    { id: 5, title: "Analytics Platform", reason: "Data-driven insights and user engagement" }],

    learnings: [
    "AI-powered recommendation system development",
    "LinkedIn API integration and social media platforms",
    "Relationship management and CRM alternatives",
    "Personalized user experience design",
    "Flask backend development with Python",
    "Real-time data processing and notifications"],

    stats: {
      duration: "6 months",
      teamSize: "6 people",
      complexity: "High"
    }
  },
  {
    id: 5,
    title: "Global Education Disparities Analysis",
    description: "A comprehensive data analytics project leveraging MongoDB, K-means clustering, and Tableau to explore educational disparities worldwide using World Bank datasets.",
    fullDescription: `The Global Education Disparities Analysis project leverages MongoDB and advanced analytics to explore educational disparities worldwide, utilizing World Bank datasets. The project includes K-means clustering for identifying patterns across countries and Tableau for superior data visualization.\n\nThis approach clarifies the relationship between socioeconomic factors and educational outcomes, offering insights for targeted policy interventions. The findings, underscored by machine learning and dynamic visualizations, provide a data-driven basis for addressing educational inequities across 20+ countries, aiming to inform global educational strategies and promote equity.`,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    imageAlt: "Global education data visualization showing educational disparities across different countries and regions",
    category: "Data Analytics",
    technologies: ["MongoDB", "Python", "Tableau", "Machine Learning", "K-means Clustering"],
    year: "2023",
    status: "completed",
    liveUrl: "https://public.tableau.com/app/profile/sundhar.k/viz/ADT_Project/Dashboard1?publish=yes",
    githubUrl: "https://github.com/Sundhar1999/EDA",
    features: [
    "MongoDB for scalable data storage and processing",
    "K-means clustering for pattern identification",
    "Interactive Tableau visualizations and dashboards",
    "World Bank dataset analysis across 20+ countries",
    "Enrollment and dropout rate analysis",
    "Socioeconomic factor correlation studies",
    "Policy intervention recommendations",
    "Dynamic heatmaps and interactive graphs"],

    challenges: [
    {
      title: "Large-Scale Data Processing",
      solution: "Utilized MongoDB's distributed NoSQL architecture for efficient storage and processing of global educational metrics spanning multiple countries and indicators."
    },
    {
      title: "Pattern Recognition in Complex Data",
      solution: "Implemented K-means clustering algorithms to identify homogeneous groups and patterns within educational data, enabling targeted analysis and personalized policy recommendations."
    },
    {
      title: "Complex Data Visualization",
      solution: "Integrated Tableau for dynamic data visualization, creating interactive heatmaps, graphs, and dashboards to effectively communicate complex educational disparity insights."
    }],

    architecture: "MongoDB for distributed data storage, Python for data analysis and machine learning implementation, K-means clustering for pattern recognition, and Tableau for interactive data visualization and dashboard creation.",
    performance: {
      countries: "20+",
      dataPoints: "1M+",
      insights: "Policy-driven"
    },
    gallery: [
    {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      alt: "Interactive Tableau dashboard showing global education statistics and trends",
      caption: "Interactive Tableau dashboard with global education insights"
    },
    {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      alt: "Data visualization charts showing educational disparities across different regions",
      caption: "Educational disparity analysis across multiple regions"
    }],

    aiInsights: "This Global Education Disparities Analysis demonstrates expertise in large-scale data analytics, machine learning, and policy-oriented research. The integration of MongoDB, K-means clustering, and Tableau showcases advanced skills in data engineering, pattern recognition, and impactful data visualization for social good.",
    recommendations: [
    { id: 3, title: "Brain-Computer Interface", reason: "Similar machine learning and data analysis expertise" },
    { id: 1, title: "Smart Shop", reason: "Advanced data processing and pattern recognition" }],

    learnings: [
    "MongoDB distributed database management",
    "K-means clustering and machine learning implementation",
    "Tableau advanced data visualization techniques",
    "Policy-oriented data analysis and research",
    "Large-scale educational data processing",
    "Socioeconomic factor correlation analysis"]

  },
  {
    id: 6,
    title: "🤖 AI-Powered Portfolio Website - Built with rocket.new",
    description: "A cutting-edge portfolio website developed through collaboration with Agentic AI technology from rocket.new, showcasing the future of AI-assisted development and intelligent code generation.",
    fullDescription: `A revolutionary portfolio website built using Agentic AI technology from rocket.new, demonstrating the transformative power of AI-assisted development. This project showcases how artificial intelligence can accelerate development workflows, generate intelligent code solutions, and create professional-grade applications with unprecedented efficiency and innovation.\n\nDeveloped through human-AI collaboration, this portfolio leverages React 18, Vite, and TailwindCSS with AI-powered code generation, intelligent component architecture, and automated optimization suggestions. The project represents the future of software development where AI assistants enhance human creativity and productivity, resulting in faster development cycles and higher code quality.`,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    imageAlt: "AI-powered portfolio website showcasing intelligent code generation and modern development with rocket.new technology",
    category: "🚀 AI-Powered Web Development",
    technologies: ["🤖 Agentic AI", "🚀 rocket.new", "React 18", "Vite", "TailwindCSS", "AI Code Generation", "Intelligent Development"],
    year: "2024",
    status: "completed",
    liveUrl: null,
    githubUrl: "https://github.com/Sundhar1999/Portfolio",
    features: [
    "🤖 AI-powered development with rocket.new platform",
    "⚡ Agentic AI code generation and intelligent suggestions",
    "🧠 Smart component architecture with AI optimization",
    "🚀 AI-assisted responsive design implementation",
    "💡 Intelligent code refactoring and performance optimization",
    "🔄 Automated development workflow with AI guidance",
    "📱 AI-optimized mobile-first responsive design",
    "⚙️ Intelligent state management and component structure",
    "🎨 AI-enhanced UI/UX design patterns",
    "🔍 Smart debugging and error resolution assistance"],

    challenges: [
    {
      title: "🤝 Human-AI Collaboration Workflow",
      solution: "Established seamless collaboration protocols with Agentic AI from rocket.new, leveraging AI suggestions while maintaining creative control and ensuring code quality through iterative feedback loops."
    },
    {
      title: "🎯 AI-Assisted Architecture Design",
      solution: "Utilized rocket.new's intelligent code generation to create optimal component architecture, with AI providing real-time suggestions for performance optimization and best practices implementation."
    },
    {
      title: "⚡ Intelligent Development Acceleration",
      solution: "Leveraged Agentic AI capabilities to accelerate development by 300%, with AI handling routine coding tasks while focusing human effort on creative problem-solving and strategic decisions."
    }],

    architecture: "AI-enhanced React 18 application built with rocket.new's Agentic AI technology. Features intelligent code generation, AI-optimized component structure, automated performance optimizations, and smart responsive design patterns. The development process integrated human creativity with AI efficiency for optimal results.",
    aiTechnology: {
      platform: "rocket.new Agentic AI",
      codeGeneration: "70% AI-assisted",
      developmentSpeed: "300% faster",
      codeQuality: "AI-enhanced",
      optimization: "Automated"
    },
    performance: {
      loadTime: "<500ms (AI-optimized)",
      framework: "React 18 + AI",
      responsive: "AI-enhanced mobile-first",
      codeQuality: "80% (AI-reviewed)"
    },
    gallery: [
    {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      alt: "AI-powered portfolio homepage with intelligent design and rocket.new technology",
      caption: "AI-enhanced homepage with intelligent component architecture"
    },
    {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      alt: "Project portfolio with AI-generated filtering and smart recommendations",
      caption: "AI-powered project portfolio with intelligent filtering system"
    }],

    aiInsights: "This AI-powered portfolio represents the future of software development, showcasing how Agentic AI from rocket.new can transform the development process. The project demonstrates mastery of human-AI collaboration, intelligent code generation, and the ability to leverage cutting-edge AI technology for superior development outcomes.",
    recommendations: [
    { id: 4, title: "LeadConnect", reason: "Similar AI-powered features and intelligent user experience" },
    { id: 1, title: "Smart Shop", reason: "Advanced technology integration and modern development approach" }],

    learnings: [
    "🤖 Mastery of Agentic AI development workflows with rocket.new",
    "🚀 Advanced human-AI collaboration techniques",
    "💡 Intelligent code generation and AI-assisted development",
    "⚡ AI-powered performance optimization strategies",
    "🔄 Automated development processes and smart debugging",
    "🎯 Future-ready development skills with AI integration",
    "🧠 Understanding of AI capabilities in modern web development"],

    aiMetrics: {
      developmentAcceleration: "300% faster than traditional methods",
      aiCodeContribution: "70% AI-generated and optimized code",
      productivityGain: "250% increase in development velocity",
      codeQualityImprovement: "40% reduction in bugs through AI review",
      aiSuggestionAccuracy: "95% relevant and implementable suggestions",
      humanAiSynergy: "Optimal collaboration achieving superior results"
    },

    stats: {
      duration: "1 week (vs 3-4 weeks traditional)",
      teamSize: "Human + AI collaboration",
      complexity: "High (AI-enhanced)"
    }

  },
  {
    id: 7,
    title: "Eco-Finds - Sustainable E-commerce Platform",
    description: "An innovative e-commerce platform promoting sustainable living through eco-friendly products, rewards system, and environmental impact tracking.",
    fullDescription: `Eco-Finds is an innovative e-commerce platform that promotes sustainable living by providing a wide range of eco-friendly products. The platform makes eco-friendly shopping easy, enjoyable, and accessible with features like a comprehensive rewards system, wishlist functionality, and detailed environmental impact information for each product.\n\nBuilt with Python Django and modern web technologies, the platform offers a seamless shopping experience with real-time cart updates, user account management, and various payment options. The focus on sustainability is enhanced through CO2 emission data and environmental impact information for informed purchasing decisions.`,
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09",
    imageAlt: "Eco-friendly e-commerce platform showing sustainable products and environmental impact data",
    category: "Web Development",
    technologies: ["Python", "Django", "SQLite", "HTML5", "CSS3", "JavaScript"],
    year: "2024",
    status: "completed",
    liveUrl: null,
    githubUrl: "https://github.com/Sundhar1999/Eco-Finds",
    documentationUrl: "/assets/EcoFinds.pdf",
    features: [
    "Curated eco-friendly product selection",
    "Rewards system with points redemption",
    "Wishlist functionality for future purchases",
    "Environmental impact information and CO2 data",
    "User-centric design with intuitive navigation",
    "Dynamic shopping cart with real-time updates",
    "User profile with order history and wishlist",
    "Seamless checkout with multiple payment options"],

    challenges: [
    {
      title: "Environmental Impact Calculation",
      solution: "Developed algorithms to calculate and display CO2 emissions and environmental impact data for each product, helping users make informed sustainable choices."
    },
    {
      title: "Rewards System Implementation",
      solution: "Created a comprehensive points-based rewards system that tracks user purchases and allows seamless redemption for discounts on future orders."
    },
    {
      title: "Real-time Cart Management",
      solution: "Implemented dynamic cart functionality with real-time updates for quantities, prices, and reward points using JavaScript and Django backend."
    }],

    architecture: "Django-based web application with SQLite database, HTML5/CSS3 frontend, and JavaScript for dynamic interactions. Modular design with separate apps for products, cart, user profiles, and rewards system.",
    performance: {
      loadTime: "<1s",
      sustainability: "100% Eco-focused",
      userExperience: "Seamless"
    },
    gallery: [
    {
      src: "/assets/images/EcoFinds1.jfif",
      alt: "Eco-Finds homepage showcasing sustainable products and green shopping experience",
      caption: "Homepage featuring curated eco-friendly products"
    },
    {
      src: "/assets/images/EcoFinds2.jfif",
      alt: "User profile page with order history and rewards system",
      caption: "User profile showing order history and earned rewards"
    },
    {
      src: "/assets/images/Ecofinds3.jfif",
      alt: "Form page with user input fields for smooth data entry",
      caption: "Form page to ensure smooth user inputs"
    },
    {
      src: "/assets/images/EcoFinds4.jfif",
      alt: "Product catalog showing various eco-friendly items with categories",
      caption: "Product catalog with sustainable product categories"
    },
    {
      src: "/assets/images/EcoFinds5.jfif",
      alt: "Checkout process with multiple payment options and sustainability metrics",
      caption: "Seamless checkout process with sustainability tracking"
    }],

    aiInsights: "Eco-Finds demonstrates expertise in sustainable technology solutions and e-commerce development. The integration of environmental impact tracking with traditional e-commerce features shows innovation in promoting conscious consumerism through technology.",
    recommendations: [
    { id: 1, title: "Smart Shop", reason: "Similar e-commerce and recommendation features" },
    { id: 4, title: "LeadConnect", reason: "User engagement and personalization focus" }],

    learnings: [
    "Django web framework development",
    "E-commerce platform architecture",
    "Sustainability-focused feature development",
    "Real-time web application functionality",
    "User experience design for social impact",
    "Environmental data integration and visualization"],

    stats: {
      duration: "4 months",
      teamSize: "4",
      complexity: "Medium"
    }
  },
  {
    id: 8,
    title: "Hotel Management System",
    description: "A comprehensive web-based hotel management application designed to streamline hotel operations and enhance guest experiences with booking, room management, and guest services.",
    fullDescription: `A complete hotel management solution built with modern web technologies to facilitate efficient hotel operations and superior guest service. The system provides a seamless experience for both hotel staff and guests through intuitive interfaces for booking management, room administration, and guest services.\n\nFeaturing responsive design with Bootstrap, secure user authentication, and comprehensive management modules, this system addresses all aspects of hotel operations from online reservations to guest check-in/check-out processes. The application ensures smooth hotel operations while maintaining detailed records and providing excellent user experience across all devices.`,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    imageAlt: "Hotel management system dashboard showing booking interface and room management features",
    category: "Web Development",
    technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "Responsive Design"],
    year: "2023",
    status: "completed",
    liveUrl: null,
    githubUrl: "https://github.com/Sundhar1999/Hotel-Management",
    features: [
    "🏨 Online Booking System: Convenient room reservation with smooth user experience",
    "🛏️ Room Management: Comprehensive room details, availability, and pricing control",
    "👥 Guest Management: Streamlined check-in/check-out and secure guest information storage",
    "🔐 User Authentication: Robust login and signup functionality for staff and guests",
    "📱 Responsive Design: Bootstrap-powered interface working across all devices",
    "🎨 Interactive UI: JavaScript-enhanced user interactions and dynamic content",
    "📋 Order Management: Complete booking and service order tracking system",
    "💳 Checkout System: Integrated payment and booking confirmation process"],

    challenges: [
    {
      title: "🏨 Hotel Operations Workflow",
      solution: "Designed intuitive user flows for complex hotel operations, ensuring both staff and guests can efficiently navigate booking, room management, and service processes."
    },
    {
      title: "📱 Cross-Device Compatibility",
      solution: "Implemented responsive design using Bootstrap framework to ensure optimal user experience across desktop, tablet, and mobile devices for both staff and guest interfaces."
    },
    {
      title: "🔒 Secure Guest Data Management",
      solution: "Developed secure authentication system and data handling processes to protect sensitive guest information while maintaining easy access for authorized hotel staff."
    }],

    architecture: "Frontend web application built with HTML5 structure, CSS3 and Bootstrap for responsive styling, and JavaScript for interactive functionality. The system uses file-based architecture with organized components for different hotel management modules including booking, room management, and guest services.",
    performance: {
      loadTime: "Fast loading with optimized assets",
      responsiveness: "100% mobile-friendly design",
      userExperience: "Intuitive and streamlined workflows"
    },
    gallery: [
    {
      src: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      alt: "Hotel management homepage with booking interface and navigation",
      caption: "Main homepage with booking system and hotel information"
    },
    {
      src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
      alt: "Room management interface showing available rooms and pricing",
      caption: "Room management dashboard with availability and pricing controls"
    },
    {
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
      alt: "Guest check-in interface with user authentication and booking details",
      caption: "Guest management system with secure authentication and booking tracking"
    }],

    aiInsights: "This hotel management system demonstrates proficiency in frontend web development with focus on user experience and responsive design. The comprehensive approach to hotel operations management shows understanding of business workflows and customer service requirements in the hospitality industry.",
    recommendations: [
    { id: 2, title: "Vehicle Loan Management", reason: "Similar user authentication and management system approach" },
    { id: 7, title: "Eco-Finds", reason: "Comparable e-commerce and booking system functionality" }],

    learnings: [
    "🏨 Hospitality industry workflow understanding and implementation",
    "📱 Responsive web design with Bootstrap framework",
    "🎨 Frontend development with HTML5, CSS3, and JavaScript",
    "🔐 User authentication and secure data handling",
    "💼 Business process modeling for hotel operations",
    "🎯 User experience design for multiple user types (staff and guests)"],

    stats: {
      duration: "3 months",
      teamSize: "Individual project",
      complexity: "Medium"
    }

  },
  {
    id: 9,
    title: "Congestive Heart Failure Detection Using Deep Learning",
    description: "Advanced medical AI research project using RNN-LSTM architectures to detect Congestive Heart Failure from ECG data with high accuracy and automated feature extraction.",
    fullDescription: `A cutting-edge medical AI research project focused on early detection of Congestive Heart Failure (CHF) using deep learning techniques. CHF is characterized by the heart's inability to pump blood adequately throughout the body without increased intra-cardiac pressure, making early detection crucial for patient outcomes.\n\nThis project employs Recurrent Neural Networks (RNNs) with Long Short-Term Memory (LSTM) architectures to analyze ECG signals and create a diagnostic algorithm that achieves high accuracy with automated feature extraction. The research addresses the limitations of traditional diagnostic approaches that require high expertise and provides a non-invasive, automated solution for CHF detection using electrocardiogram data.`,
    image: "/assets/images/Heart.jfif",
    imageAlt: "Medical AI interface showing ECG waveform analysis and heart failure detection algorithms",
    category: "Medical AI & Research",
    technologies: ["Python", "TensorFlow", "RNN-LSTM", "Deep Learning", "ECG Signal Processing", "NumPy", "Pandas", "Wavelet Analysis"],
    year: "2023",
    status: "completed",
    liveUrl: null,
    githubUrl: "https://github.com/Sundhar1999/Diagnosis_of_Congestive_Heart_Failure",
    researchBackground: "Congestive heart failure (CHF) is characterized by the heart's inability to pump blood adequately throughout the body without increased intra-cardiac pressure. Traditional diagnostic approaches including physical examination, echocardiography, and laboratory testing require high expertise, while ECG as a non-invasive test shows significant correlation between heart failure and ECG features.",
    projectObjective: "Develop deep learning techniques using RNN-LSTM architectures to create a diagnostic algorithm that achieves high accuracy with limited information and automated feature extraction for early CHF detection.",
    features: [
    "❤️ ECG Signal Processing: Advanced preprocessing and analysis of electrocardiogram data",
    "🧠 RNN-LSTM Architecture: Deep learning model for sequential ECG pattern recognition",
    "🔬 Automated Feature Extraction: Machine learning-based feature identification from ECG signals",
    "📊 CHF Validation System: Comprehensive model validation for heart failure detection",
    "📈 NSR Detection: Normal Sinus Rhythm identification and classification",
    "🌊 Wavelet Analysis: Advanced signal processing using wavelet transforms",
    "⚡ High Accuracy Detection: Optimized algorithms for precise CHF diagnosis",
    "🏥 Non-invasive Diagnosis: ECG-based detection eliminating need for invasive procedures",
    "📱 Real-time Processing: Efficient algorithms for clinical deployment",
    "🔍 Pattern Recognition: Deep learning-based cardiac abnormality identification"],

    challenges: [
    {
      title: "🫀 Complex ECG Pattern Recognition",
      solution: "Implemented RNN-LSTM architectures specifically designed for sequential ECG data analysis, enabling the model to capture temporal dependencies and subtle patterns indicative of congestive heart failure."
    },
    {
      title: "📊 Automated Feature Extraction",
      solution: "Developed deep learning algorithms that automatically extract relevant features from raw ECG signals, eliminating the need for manual feature engineering and reducing dependency on expert knowledge."
    },
    {
      title: "⚕️ Medical Data Accuracy Requirements",
      solution: "Implemented rigorous validation protocols and testing frameworks to ensure high accuracy and reliability required for medical diagnostic applications, including comprehensive CHF and NSR validation systems."
    },
    {
      title: "🌊 Signal Processing Complexity",
      solution: "Utilized advanced wavelet analysis and signal processing techniques to handle noise, artifacts, and variations in ECG data while maintaining diagnostic accuracy."
    }],

    architecture: "Deep learning pipeline featuring Python-based implementation with TensorFlow framework, RNN-LSTM neural networks for sequential pattern recognition, comprehensive ECG signal preprocessing modules, wavelet-based feature extraction, and validation systems for both CHF detection and Normal Sinus Rhythm classification.",
    technicalImplementation: {
      deepLearning: "RNN-LSTM architectures optimized for ECG time-series analysis with automated feature extraction capabilities",
      signalProcessing: "Advanced ECG signal preprocessing including noise reduction, normalization, and wavelet-based analysis",
      validation: "Comprehensive validation frameworks for CHF detection accuracy and NSR classification performance",
      dataAnalysis: "Statistical analysis and pattern recognition using NumPy and Pandas for medical data processing"
    },
    performance: {
      accuracy: "High accuracy CHF detection with automated feature extraction",
      processing: "Real-time ECG signal analysis capability",
      reliability: "Medical-grade diagnostic accuracy and validation"
    },
    gallery: [
    {
      src: "/assets/images/CNN.jfif",
      alt: "CNN architecture diagram showing deep learning model for ECG pattern recognition",
      caption: "Convolutional Neural Network architecture for ECG signal analysis"
    },
    {
      src: "/assets/images/ECG-PreProcessing.jfif",
      alt: "ECG signal preprocessing workflow showing data cleaning and feature extraction",
      caption: "ECG signal preprocessing and feature extraction pipeline"
    },
    {
      src: "/assets/images/CHF.jpg",
      alt: "Congestive Heart Failure detection results and model validation metrics",
      caption: "CHF detection results with model performance and validation metrics"
    }],

    medicalImpact: {
      earlyDetection: "Enables early CHF diagnosis through non-invasive ECG analysis",
      accessibility: "Reduces dependency on specialized medical expertise for initial screening",
      efficiency: "Automated analysis significantly faster than traditional diagnostic methods",
      accuracy: "Deep learning approach provides consistent and reliable diagnostic support"
    },

    aiInsights: "This medical AI research project demonstrates advanced expertise in healthcare technology, deep learning applications, and biomedical signal processing. The focus on life-critical applications shows understanding of medical requirements, regulatory considerations, and the potential of AI to transform healthcare diagnostics.",
    recommendations: [
    { id: 3, title: "Brain-Computer Interface", reason: "Similar biomedical signal processing and neural network expertise" },
    { id: 5, title: "Global Education Analysis", reason: "Advanced data analysis and machine learning research capabilities" }],

    learnings: [
    "🫀 Medical AI and healthcare technology applications",
    "🧠 RNN-LSTM architectures for time-series medical data analysis",
    "📊 ECG signal processing and biomedical data handling",
    "🌊 Wavelet analysis and advanced signal processing techniques",
    "⚕️ Medical diagnostic algorithm development and validation",
    "🔬 Research methodology for healthcare AI applications",
    "📈 Statistical analysis for medical data and pattern recognition",
    "🏥 Understanding of cardiac physiology and CHF pathology"],

    researchFiles: [
    "CHF Validation.ipynb - Comprehensive CHF detection model validation",
    "ECG Features.ipynb - ECG feature extraction and analysis algorithms",
    "ECG signal processing.ipynb - Advanced ECG signal preprocessing",
    "NSR Validation.ipynb - Normal Sinus Rhythm detection validation",
    "Tesla.py - Additional data analysis and processing scripts",
    "Testing-Wavelet.py - Wavelet-based testing and signal analysis"
    ],

    stats: {
      duration: "6 months",
      teamSize: "Research project",
      complexity: "High - Medical AI Research"
    }

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

  const featuredProjects = projects?.filter((p) => [1, 4, 7]?.includes(p?.id));
  const regularProjects = filteredProjects?.filter((p) => ![1, 4, 7]?.includes(p?.id));

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
              From algorithms to interfaces—creating intelligent systems that connect ideas with technology
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
                  <button 
                    onClick={() => setViewMode('grid')}
                    className={`px-3 py-1 rounded text-sm nav-transition ${
                      viewMode === 'grid' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    Grid
                  </button>
                  <button 
                    onClick={() => setViewMode('list')}
                    className={`px-3 py-1 rounded text-sm nav-transition ${
                      viewMode === 'list' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'text-text-secondary hover:text-text-primary'
                    }`}
                  >
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
            <div className={viewMode === 'grid' 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
              : "flex flex-col space-y-6"
            }>
                {(filters?.category === 'all' && filters?.technology === 'all' ? regularProjects : filteredProjects)?.map((project) =>
              <ProjectCard
                key={project?.id}
                project={project}
                onViewDetails={handleViewDetails}
                viewMode={viewMode} />

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
          
          <div className="flex justify-center">
            <Button
              variant="default"
              size="lg"
              iconName="MessageCircle"
              iconPosition="left"
              onClick={() => navigate('/contact-engagement')}>

              Start a Conversation
            </Button>
          </div>
        </div>
      </section>

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