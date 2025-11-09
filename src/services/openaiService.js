import openai from './openaiClient';

/**
 * Generates a chat completion response using GPT-5.
 * @param {string} userMessage - The user's input message.
 * @param {Array} conversationHistory - Previous messages in the conversation.
 * @param {string} systemPrompt - System prompt for context.
 * @returns {Promise<string>} The assistant's response.
 */
export async function getChatCompletion(userMessage, conversationHistory = [], systemPrompt = 'You are a helpful assistant.') {
  try {
    const messages = [
      { role: 'system', content: systemPrompt },
      ...conversationHistory,
      { role: 'user', content: userMessage },
    ];

    const response = await openai?.chat?.completions?.create({
      model: 'gpt-5',
      messages: messages,
      max_completion_tokens: 2000,
      reasoning_effort: 'medium',
      verbosity: 'medium',
    });

    return response?.choices?.[0]?.message?.content;
  } catch (error) {
    console.error('Error in OpenAI chat completion:', error);
    
    // Return fallback response if API fails
    if (error?.code === 'insufficient_quota' || error?.code === 'rate_limit_exceeded') {
      return "I'm experiencing high demand right now. Please try again in a moment.";
    }
    
    if (error?.code === 'invalid_api_key') {
      return "OpenAI API key is not configured. Please check your environment variables.";
    }
    
    return "I'm having trouble connecting right now. Please try again later.";
  }
}

/**
 * Streams a chat completion response chunk by chunk.
 * @param {string} userMessage - The user's input message.
 * @param {Array} conversationHistory - Previous messages in the conversation.
 * @param {Function} onChunk - Callback to handle each streamed chunk.
 * @param {string} systemPrompt - System prompt for context.
 */
export async function getStreamingChatCompletion(userMessage, conversationHistory = [], onChunk, systemPrompt = 'You are a helpful assistant.') {
  try {
    const messages = [
      { role: 'system', content: systemPrompt },
      ...conversationHistory,
      { role: 'user', content: userMessage },
    ];

    const stream = await openai?.chat?.completions?.create({
      model: 'gpt-5-mini', // Use mini for faster streaming
      messages: messages,
      stream: true,
      reasoning_effort: 'minimal', // For faster streaming
      verbosity: 'medium',
    });

    for await (const chunk of stream) {
      const content = chunk?.choices?.[0]?.delta?.content || '';
      if (content) {
        onChunk(content);
      }
    }
  } catch (error) {
    console.error('Error in streaming chat completion:', error);
    
    // Handle errors with fallback chunks
    if (error?.code === 'insufficient_quota' || error?.code === 'rate_limit_exceeded') {
      onChunk("I'm experiencing high demand right now. Please try again in a moment.");
    } else if (error?.code === 'invalid_api_key') {
      onChunk("OpenAI API key is not configured. Please check your environment variables.");
    } else {
      onChunk("I'm having trouble connecting right now. Please try again later.");
    }
  }
}

/**
 * Generates contextual welcome messages based on current page.
 * @param {string} pathname - Current page path.
 * @returns {Promise<string>} Contextual welcome message.
 */
export async function getContextualWelcome(pathname) {
  const contextPrompts = {
    '/home-landing': "Generate a welcoming message for a portfolio homepage. Be friendly and offer to help with questions about background, skills, and projects.",
    '/projects-portfolio': "Generate a welcoming message for a projects section. Offer to provide detailed insights about projects, technologies used, or help find projects matching interests.",
    '/skills-experience': "Generate a welcoming message for an experience section. Offer to elaborate on skills, share professional journey stories, or explain how background aligns with needs.",
    '/contact-engagement': "Generate a welcoming message for a contact section. Offer to help choose the best way to reach out, schedule meetings, or answer final questions.",
  };

  const prompt = contextPrompts?.[pathname] || "Generate a friendly welcoming message for a portfolio website. Offer to help explore projects, skills, experience, or contact information.";
  
  try {
    const response = await getChatCompletion(
      "Generate a brief, welcoming message (2-3 sentences max).",
      [],
      prompt
    );
    return response;
  } catch (error) {
    console.error('Error generating contextual welcome:', error);
    
    // Fallback to static messages
    const fallbackMessages = {
      '/home-landing': "Hi! I'm your AI assistant. I can help you navigate my portfolio and answer questions about my background, skills, and projects. What would you like to know?",
      '/projects-portfolio': "Welcome to the projects section! I can provide detailed insights about any project, explain the technologies used, or help you find projects that match your interests.",
      '/skills-experience': "Exploring my experience? I can elaborate on any skill, share stories about my professional journey, or help you understand how my background aligns with your needs.",
      '/contact-engagement': "Ready to connect? I can help you choose the best way to reach out, schedule a meeting, or answer any final questions before you get in touch.",
    };
    
    return fallbackMessages?.[pathname] || "Hello! I'm here to help you explore this portfolio. Ask me anything about projects, skills, experience, or how to get in touch!";
  }
}

/**
 * Generates intelligent responses based on user input with portfolio context.
 * @param {string} userMessage - User's message.
 * @param {string} pathname - Current page path for context.
 * @returns {Promise<string>} AI-generated response.
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
    
    // Intelligent fallback responses
    const message = userMessage?.toLowerCase();
    
    if (message?.includes('project') || message?.includes('work')) {
      return "I'd be happy to discuss my projects! I've worked on a Food Price Analysis app, Vehicle Loan Management System, and a Brain-Computer Interface using CNN. Which project interests you most - web development, enterprise systems, or AI/ML research?";
    }
    
    if (message?.includes('skill') || message?.includes('technology') || message?.includes('experience')) {
      return "My expertise focuses on performance testing and automation with JMeter, Selenium, and cloud technologies. I specialize in load testing, UI automation, and have experience with Java, Python, React, and AWS. What specific technology would you like to know more about?";
    }
    
    if (message?.includes('contact') || message?.includes('hire') || message?.includes('collaborate')) {
      return "I'm always open to new opportunities! You can reach out via email for formal inquiries, LinkedIn for professional networking, or schedule a call for immediate discussions. What type of collaboration are you considering?";
    }
    
    if (message?.includes('hello') || message?.includes('hi') || message?.includes('hey')) {
      return "Hello! Great to meet you. I'm here to help you learn more about this portfolio. Feel free to ask about projects, technical skills, experience, or anything else you'd like to know!";
    }
    
    return "That's an interesting question! While I can provide insights about the portfolio content, I'd recommend exploring the relevant sections or reaching out directly for more detailed discussions. Is there a specific area you'd like me to guide you to?";
  }
}

/**
 * Checks if OpenAI API is properly configured.
 * @returns {boolean} True if API key is available.
 */
export function isOpenAIConfigured() {
  return Boolean(import.meta.env?.VITE_OPENAI_API_KEY && import.meta.env?.VITE_OPENAI_API_KEY !== 'your-openai-api-key-here');
}