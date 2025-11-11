// Bytez.js API Integration
let Bytez, sdk, model, isInitialized = false;

const key = "4bfbb0d02b46766bdd9956956bdf3c26";

// Initialize Bytez with error handling
const initializeBytez = async () => {
  if (isInitialized) return;
  
  try {
    const BytezModule = await import("bytez.js");
    Bytez = BytezModule.default || BytezModule;
    sdk = new Bytez(key);
    model = sdk.model("openai/gpt-4o");
    isInitialized = true;
    console.log('Bytez initialized successfully');
  } catch (error) {
    console.error('Failed to initialize Bytez:', error);
    isInitialized = false;
  }
};

/**
 * Generates a chat completion response using Bytez.js with GPT-4o.
 */
export async function getChatCompletion(userMessage, conversationHistory = [], systemPrompt = 'You are a helpful assistant.') {
  try {
    await initializeBytez();
    
    if (!isInitialized || !model) {
      throw new Error('Bytez not properly initialized');
    }

    const messages = [
      { role: 'system', content: systemPrompt },
      ...conversationHistory,
      { role: 'user', content: userMessage },
    ];

    const { error, output } = await model.run(messages);
    
    if (error) {
      console.error('Bytez API error:', error);
      return "I'm having trouble connecting right now. Please try again later.";
    }

    return output || "I received your message but couldn't generate a response. Please try again.";
  } catch (error) {
    console.error('Error in Bytez chat completion:', error);
    return getStaticResponse(userMessage);
  }
}

/**
 * Simulates streaming by chunking the response
 */
export async function getStreamingChatCompletion(userMessage, conversationHistory = [], onChunk, systemPrompt = 'You are a helpful assistant.') {
  try {
    const response = await getChatCompletion(userMessage, conversationHistory, systemPrompt);
    
    // Simulate streaming by chunking the response
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

/**
 * Generates contextual welcome messages
 */
export async function getContextualWelcome(pathname) {
  const contextPrompts = {
    '/home-landing': "Generate a welcoming message for a portfolio homepage. Be friendly and offer to help with questions about background, skills, and projects.",
    '/projects-portfolio': "Generate a welcoming message for a projects section. Offer to provide detailed insights about projects, technologies used, or help find projects matching interests.",
    '/skills-experience': "Generate a welcoming message for an experience section. Offer to elaborate on skills, share professional journey stories, or explain how background aligns with needs.",
    '/contact-engagement': "Generate a welcoming message for a contact section. Offer to help choose the best way to reach out, schedule meetings, or answer final questions.",
  };

  const prompt = contextPrompts[pathname] || "Generate a friendly welcoming message for a portfolio website. Offer to help explore projects, skills, experience, or contact information.";
  
  try {
    const response = await getChatCompletion(
      "Generate a brief, welcoming message (2-3 sentences max).",
      [],
      prompt
    );
    return response;
  } catch (error) {
    console.error('Error generating contextual welcome:', error);
    return getStaticWelcome(pathname);
  }
}

/**
 * Generates intelligent responses with portfolio context
 */
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

/**
 * Static fallback responses
 */
function getStaticResponse(userMessage) {
  const message = userMessage.toLowerCase();
  
  if (message.includes('project') || message.includes('work')) {
    return "I'd be happy to discuss my projects! I've worked on a Food Price Analysis app, Vehicle Loan Management System, and a Brain-Computer Interface using CNN. Which project interests you most - web development, enterprise systems, or AI/ML research?";
  }
  
  if (message.includes('skill') || message.includes('technology') || message.includes('experience')) {
    return "My expertise focuses on performance testing and automation with JMeter, Selenium, and cloud technologies. I specialize in load testing, UI automation, and have experience with Java, Python, React, and AWS. What specific technology would you like to know more about?";
  }
  
  if (message.includes('contact') || message.includes('hire') || message.includes('collaborate')) {
    return "I'm always open to new opportunities! You can reach out via email for formal inquiries, LinkedIn for professional networking, or schedule a call for immediate discussions. What type of collaboration are you considering?";
  }
  
  if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
    return "Hello! Great to meet you. I'm here to help you learn more about this portfolio. Feel free to ask about projects, technical skills, experience, or anything else you'd like to know!";
  }
  
  return "I'm here to help you learn about Sundhar's portfolio! You can ask me about his projects, technical skills, work experience, or how to get in touch. What would you like to know more about?";
}

/**
 * Static welcome messages
 */
function getStaticWelcome(pathname) {
  const fallbackMessages = {
    '/home-landing': "Hi! I'm your AI assistant. I can help you navigate my portfolio and answer questions about my background, skills, and projects. What would you like to know?",
    '/projects-portfolio': "Welcome to the projects section! I can provide detailed insights about any project, explain the technologies used, or help you find projects that match your interests.",
    '/skills-experience': "Exploring my experience? I can elaborate on any skill, share stories about my professional journey, or help you understand how my background aligns with your needs.",
    '/contact-engagement': "Ready to connect? I can help you choose the best way to reach out, schedule a meeting, or answer any final questions before you get in touch.",
  };
  
  return fallbackMessages[pathname] || "Hello! I'm here to help you explore this portfolio. Ask me anything about projects, skills, experience, or how to get in touch!";
}

/**
 * Checks if Bytez API is properly configured
 */
export function isBytezConfigured() {
  try {
    return isInitialized && Boolean(sdk && model && key && key !== 'your-api-key-here');
  } catch (error) {
    console.error('Error checking Bytez configuration:', error);
    return false;
  }
}