import jsPDF from 'jspdf';

export const generatePortfolioPDF = () => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.width;
  const margin = 20;
  const maxWidth = pageWidth - 2 * margin;
  let yPosition = 30;

  // Helper function to add text with proper spacing
  const addText = (text, fontSize = 10, isBold = false, color = [0, 0, 0]) => {
    doc.setFontSize(fontSize);
    doc.setFont('times', isBold ? 'bold' : 'normal');
    doc.setTextColor(...color);
    const splitText = doc.splitTextToSize(text, maxWidth);
    doc.text(splitText, margin, yPosition);
    yPosition += splitText.length * 4 + 2;
  };

  // Helper function to add section header
  const addSectionHeader = (title) => {
    yPosition += 4;
    doc.setFontSize(12);
    doc.setFont('times', 'bold');
    doc.setTextColor(41, 128, 185);
    doc.text(title, margin, yPosition);
    yPosition += 2;
    doc.setDrawColor(41, 128, 185);
    doc.line(margin, yPosition, pageWidth - margin, yPosition);
    yPosition += 4;
  };

  // Helper function to add bullet point
  const addBullet = (text) => {
    doc.setFontSize(9);
    doc.setFont('times', 'normal');
    doc.setTextColor(0, 0, 0);
    doc.text('•', margin + 3, yPosition);
    const splitText = doc.splitTextToSize(text, maxWidth - 10);
    doc.text(splitText, margin + 8, yPosition);
    yPosition += splitText.length * 3.5 + 1;
  };

  // Check if new page is needed
  const checkNewPage = (requiredSpace = 15) => {
    if (yPosition > doc.internal.pageSize.height - requiredSpace) {
      doc.addPage();
      yPosition = 20;
    }
  };

  // Header
  doc.setFillColor(41, 128, 185);
  doc.rect(0, 0, pageWidth, 20, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(16);
  doc.setFont('times', 'bold');
  doc.text('SUNDHAR KALEESWARAN', margin, 14);
  
  yPosition = 28;
  addText('Associate Software Developer in Test | Tecsys Inc, Montreal, QC', 10, false, [80, 80, 80]);
  addText('sundhark603@gmail.com | (226) 961-9931 | Ottawa, ON | linkedin.com/in/sundhar-k', 9, false, [80, 80, 80]);

  // Professional Summary
  addSectionHeader('PROFESSIONAL SUMMARY');
  addText('QA Performance & Automation Engineer with 3+ years in enterprise software quality assurance. Expert in performance optimization, test automation frameworks, and mission-critical system validation at Tecsys Inc, supporting 700+ concurrent users.', 10);

  // Core Expertise
  addSectionHeader('CORE EXPERTISE');
  addBullet('Performance Testing: JMeter, LoadRunner for enterprise-scale validation (700+ users)');
  addBullet('Test Automation: Selenium, Playwright with 90% automation coverage achievement');
  addBullet('API Testing: REST/SOAP testing with Postman, microservices validation');
  addBullet('Quality Assurance: Enterprise QA processes, CI/CD integration, compliance standards');

  // Professional Experience
  addSectionHeader('PROFESSIONAL EXPERIENCE');
  addText('Associate Software Developer in Test | Tecsys Inc (2024 - Present)', 11, true);
  addBullet('Quality assurance for enterprise supply chain software and mission-critical applications');
  addBullet('Performance testing and automated framework development for CI workflows');
  
  addText('Quality Engineer | LTIMindtree (2021 - 2023)', 11, true);
  addBullet('Comprehensive testing strategies for enterprise applications and performance optimization');

  // Featured Projects
  checkNewPage();
  addSectionHeader('FEATURED PROJECTS');
  addText('Smart Shop - Food Price Analysis Platform', 11, true);
  addBullet('React.js application with ML price prediction (React, Node.js, Python, MongoDB)');
  
  addText('LeadConnect - AI-Powered Lead Nurturing', 11, true);
  addBullet('Enterprise lead management with AI insights (React, Node.js, PostgreSQL, AI/ML)');
  
  addText('Eco-Finds - Sustainable E-commerce Platform', 11, true);
  addBullet('Full-stack e-commerce with sustainability metrics (React, Express.js, MongoDB)');
  
  addText('Brain-Computer Interface & CHF Detection', 11, true);
  addBullet('Medical AI systems with EEG/ECG analysis (Python, TensorFlow, Signal Processing)');

  // Technical Skills
  addSectionHeader('TECHNICAL SKILLS');
  addText('Testing & QA:', 10, true);
  addBullet('JMeter, LoadRunner, Selenium, Playwright, Postman, TestNG, JUnit, Pytest');
  
  addText('Programming:', 10, true);
  addBullet('Java, Python, JavaScript, TypeScript, C++, SQL, React.js, Node.js, Spring Boot');
  
  addText('AI/ML & Data:', 10, true);
  addBullet('TensorFlow, PyTorch, Deep Learning, Signal Processing, Pandas, NumPy');
  
  addText('Tools & Platforms:', 10, true);
  addBullet('AWS, Azure, Docker, Jenkins, Git, MongoDB, MySQL, PostgreSQL');

  // Education & Achievements
  addSectionHeader('EDUCATION & ACHIEVEMENTS');
  addText('Master of Engineering - Electrical & Computer Engineering', 11, true);
  addText('University of Windsor, ON, Canada (2023-2024) - AI/ML, Signal Processing', 10);
  
  addText('Bachelor of Engineering - Electronics & Communication', 11, true);
  addText('Sri Venkateswara College of Engineering, India (2017-2021)', 10);
  
  addText('Key Achievements:', 10, true);
  addBullet('90% test automation coverage, 75% reduction in manual testing effort');
  addBullet('700+ concurrent users performance validation in production environments');
  addBullet('Enterprise-level QA processes implementation improving release reliability');

  // Contact Information
  addSectionHeader('CONTACT & AVAILABILITY');
  addText('Ottawa, ON, Canada | EST Timezone | Available for Remote Work & Consulting', 10);
  addText('Response Time: <24 hours | Working Hours: Mon-Fri, 9AM-5PM EST', 10);

  return doc;
};