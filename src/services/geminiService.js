import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = "AIzaSyAcDK0FVhYkip9k2tTNOflHInqhO-UfSLI";
let genAI, model;

try {
  genAI = new GoogleGenerativeAI(API_KEY);
  model = genAI.getGenerativeModel({ model: "gemini-pro" });
} catch (error) {
  console.error('Error initializing Gemini:', error);
}

export async function getChatCompletion(userMessage, conversationHistory = [], systemPrompt = 'You are a helpful assistant.') {
  try {
    if (!model) {
      throw new Error('Gemini model not initialized');
    }

    const prompt = `${systemPrompt}\n\nConversation history:\n${conversationHistory.map(msg => `${msg.role}: ${msg.content}`).join('\n')}\n\nUser: ${userMessage}\n\nAssistant:`;
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error in Gemini chat completion:', error);
    return getStaticResponse(userMessage);
  }
}

export async function getStreamingChatCompletion(userMessage, conversationHistory = [], onChunk, systemPrompt = 'You are a helpful assistant.') {
  try {
    const response = await getChatCompletion(userMessage, conversationHistory, systemPrompt);
    
    const words = response.split(' ');
    const chunkSize = 3;
    
    for (let i = 0; i < words.length; i += chunkSize) {
      const chunk = words.slice(i, i + chunkSize).join(' ') + (i + chunkSize < words.length ? ' ' : '');
      onChunk(chunk);
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  } catch (error) {
    console.error('Error in streaming chat completion:', error);
    onChunk(getStaticResponse(userMessage));
  }
}

export async function getContextualWelcome(pathname) {
  const contextPrompts = {
    '/home-landing': "You are an AI assistant for Sundhar Kaleeswaran's portfolio homepage. Generate a brief, welcoming message (2-3 sentences) that's friendly and offers to help with questions about his background, skills, and projects.",
    '/projects-portfolio': "You are an AI assistant for Sundhar's projects section. Generate a brief welcome message offering to provide detailed insights about projects, technologies used, or help find projects matching interests.",
    '/skills-experience': "You are an AI assistant for Sundhar's experience section. Generate a brief welcome message offering to elaborate on skills, share professional journey stories, or explain how his background aligns with needs.",
    '/contact-engagement': "You are an AI assistant for Sundhar's contact section. Generate a brief welcome message offering to help choose the best way to reach out, schedule meetings, or answer final questions.",
  };

  const prompt = contextPrompts[pathname] || "You are an AI assistant for Sundhar Kaleeswaran's portfolio website. Generate a friendly welcoming message offering to help explore projects, skills, experience, or contact information.";
  
  try {
    return await getChatCompletion("Generate a brief welcome message", [], prompt);
  } catch (error) {
    console.error('Error generating contextual welcome:', error);
    return getStaticWelcome(pathname);
  }
}

export async function getPortfolioResponse(userMessage, pathname = '/') {
  const contextualSystemPrompt = `You are an AI assistant for Sundhar Kaleeswaran's professional portfolio website. You are knowledgeable about:

- Performance testing and automation expertise with JMeter, Selenium, and Load Runner
- Associate Software Developer in Test at Tecsys Inc. (Supply Chain SaaS)
- 3+ years experience in performance testing, UI automation, and cloud deployment
- Technical skills: Java, Python, React, Docker, AWS, PostgreSQL, Kubernetes
- Projects: Food Price Analysis, Vehicle Loan Management System, Brain-Computer Interface
- Education: Master's in Applied Computing (University of Windsor), Bachelor's in Computer Science (94% CGPA)
- Location: Toronto, ON, Canada (currently working in Montreal, QC)

Current page context: ${pathname}

Provide helpful, professional responses about Sundhar's expertise while being conversational and engaging. Keep responses concise (2-3 sentences) unless asked for detailed explanations.`;

  try {
    return await getChatCompletion(userMessage, [], contextualSystemPrompt);
  } catch (error) {
    console.error('Error getting portfolio response:', error);
    return getStaticResponse(userMessage);
  }
}

function getStaticResponse(userMessage) {
  const message = userMessage.toLowerCase();
  
  // Handle exact quick action questions
  if (message === 'show me your best projects' || message.includes('best project')) {
    return "Here are my top projects:\n\n🚀 **Smart Shop - Food Price Analysis**: React.js app with ML price prediction using Python and MongoDB. Helps users find the best grocery deals.\n\n💼 **LeadConnect - AI Lead Nurturing**: Enterprise lead management platform with AI insights using React, Node.js, and PostgreSQL.\n\n🌱 **Eco-Finds - Sustainable E-commerce**: Full-stack platform promoting eco-friendly products with sustainability metrics.\n\n🧠 **Brain-Computer Interface**: Medical AI system for EEG/ECG analysis using TensorFlow and signal processing.\n\nWhich project would you like to explore in detail?";
  }
  
  if (message === 'what technologies do you use?' || message.includes('technologies') || message.includes('tech stack')) {
    return "My technical expertise spans:\n\n🔧 **Testing & QA**: JMeter, LoadRunner, Selenium, Playwright, Postman, TestNG\n\n💻 **Programming**: Java, Python, JavaScript, TypeScript, React.js, Node.js\n\n☁️ **Cloud & DevOps**: AWS, Azure, Docker, Kubernetes, Jenkins, Git\n\n🗄️ **Databases**: MongoDB, MySQL, PostgreSQL\n\n🤖 **AI/ML**: TensorFlow, PyTorch, Deep Learning, Signal Processing\n\nI specialize in performance testing and automation with 3+ years of experience. What specific technology interests you?";
  }
  
  if (message === 'how can we work together?' || message.includes('work together') || message.includes('collaborate')) {
    return "I'm excited about collaboration opportunities! Here's how we can work together:\n\n💼 **Performance Testing**: Load testing, stress testing, and automation for your applications\n\n🔧 **QA Consulting**: Test strategy, automation frameworks, and quality processes\n\n🚀 **Full-Stack Development**: React.js, Node.js applications with modern tech stacks\n\n🤖 **AI/ML Projects**: Data analysis, machine learning models, and intelligent systems\n\n📧 **Contact**: sundhark603@gmail.com\n📱 **LinkedIn**: Professional networking\n📞 **Schedule**: Available for calls and meetings\n\nWhat type of project do you have in mind?";
  }
  
  // General keyword matching
  if (message.includes('project') || message.includes('work') || message.includes('built') || message.includes('developed')) {
    return "I'd be happy to discuss my projects! I've worked on a Food Price Analysis app, Vehicle Loan Management System, and a Brain-Computer Interface using CNN. Which project interests you most - web development, enterprise systems, or AI/ML research?";
  }
  
  if (message.includes('skill') || message.includes('technology') || message.includes('experience') || message.includes('expertise') || message.includes('area') || message.includes('profession') || message.includes('job') || message.includes('role') || message.includes('what do you do') || message.includes('specializ')) {
    return "Sundhar is an Associate Software Developer in Test at Tecsys Inc. with expertise in performance testing and automation using JMeter, Selenium, and Load Runner. He specializes in UI automation, cloud deployment, and has 3+ years of experience with Java, Python, React, Docker, AWS, and Kubernetes.";
  }
  
  if (message.includes('contact') || message.includes('hire') || message.includes('collaborate') || message.includes('reach') || message.includes('email') || message.includes('connect')) {
    return "I'm always open to new opportunities! You can reach out via email for formal inquiries, LinkedIn for professional networking, or schedule a call for immediate discussions. What type of collaboration are you considering?";
  }
  
  if (message.includes('hello') || message.includes('hi') || message.includes('hey') || message.includes('greet')) {
    return "Hello! Great to meet you. I'm here to help you learn more about this portfolio. Feel free to ask about projects, technical skills, experience, or anything else you'd like to know!";
  }
  
  if (message.includes('education') || message.includes('study') || message.includes('degree') || message.includes('university') || message.includes('school')) {
    return "Sundhar holds a Master's in Applied Computing from the University of Windsor and a Bachelor's in Computer Science with an impressive 94% CGPA. His academic background provides a strong foundation for his technical expertise.";
  }
  
  if (message.includes('location') || message.includes('where') || message.includes('live') || message.includes('based')) {
    return "Sundhar is based in Toronto, ON, Canada, and currently works in Montreal, QC. He's available for both remote collaboration and on-site opportunities.";
  }
  
  return "I'm here to help you learn about Sundhar's portfolio! You can ask me about his projects, technical skills, work experience, education, or how to get in touch. What would you like to know more about?";
}

function getStaticWelcome(pathname) {
  const fallbackMessages = {
    '/home-landing': "Hi! I'm your AI assistant. I can help you navigate my portfolio and answer questions about my background, skills, and projects. What would you like to know?",
    '/projects-portfolio': "Welcome to the projects section! I can provide detailed insights about any project, explain the technologies used, or help you find projects that match your interests.",
    '/skills-experience': "Exploring my experience? I can elaborate on any skill, share stories about my professional journey, or help you understand how my background aligns with your needs.",
    '/contact-engagement': "Ready to connect? I can help you choose the best way to reach out, schedule a meeting, or answer any final questions before you get in touch.",
  };
  
  return fallbackMessages[pathname] || "Hello! I'm here to help you explore this portfolio. Ask me anything about projects, skills, experience, or how to get in touch!";
}

export function isGeminiConfigured() {
  try {
    return Boolean(genAI && model && API_KEY);
  } catch (error) {
    console.error('Error checking Gemini configuration:', error);
    return false;
  }
}