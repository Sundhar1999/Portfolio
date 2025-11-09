import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';
import { getStreamingChatCompletion, getContextualWelcome, getPortfolioResponse, isOpenAIConfigured } from '../../services/openaiService';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [conversationHistory, setConversationHistory] = useState([]);
  const [useStreaming, setUseStreaming] = useState(true);
  const messagesEndRef = useRef(null);
  const location = useLocation();

  const scrollToBottom = () => {
    messagesEndRef?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages?.length === 0) {
      initializeWelcomeMessage();
    }
  }, [isOpen, location?.pathname]);

  const initializeWelcomeMessage = async () => {
    setIsTyping(true);
    try {
      let welcomeMessage;
      
      if (isOpenAIConfigured()) {
        welcomeMessage = await getContextualWelcome(location?.pathname);
      } else {
        welcomeMessage = getStaticContextualWelcome();
      }

      setMessages([{
        id: 1,
        text: welcomeMessage,
        sender: 'ai',
        timestamp: new Date()
      }]);
    } catch (error) {
      console.error('Error initializing welcome message:', error);
      setMessages([{
        id: 1,
        text: getStaticContextualWelcome(),
        sender: 'ai',
        timestamp: new Date()
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const getStaticContextualWelcome = () => {
    const path = location?.pathname;
    switch (path) {
      case '/home-landing':
        return "Hi! I'm your AI assistant. I can help you navigate my portfolio and answer questions about my background, skills, and projects. What would you like to know?";
      case '/projects-portfolio':
        return "Welcome to the projects section! I can provide detailed insights about any project, explain the technologies used, or help you find projects that match your interests.";
      case '/skills-experience':
        return "Exploring my experience? I can elaborate on any skill, share stories about my professional journey, or help you understand how my background aligns with your needs.";
      case '/contact-engagement':
        return "Ready to connect? I can help you choose the best way to reach out, schedule a meeting, or answer any final questions before you get in touch.";
      default:
        return "Hello! I'm here to help you explore this portfolio. Ask me anything about projects, skills, experience, or how to get in touch!";
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue?.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue('');
    setIsTyping(true);

    // Add user message to conversation history
    const newHistory = [...conversationHistory, { role: 'user', content: currentInput }];
    setConversationHistory(newHistory);

    try {
      if (isOpenAIConfigured() && useStreaming) {
        // Streaming response
        const streamingMessage = {
          id: Date.now() + 1,
          text: '',
          sender: 'ai',
          timestamp: new Date(),
          isStreaming: true
        };

        setMessages(prev => [...prev, streamingMessage]);
        setIsTyping(false);

        let fullResponse = '';
        
        await getStreamingChatCompletion(
          currentInput,
          newHistory,
          (chunk) => {
            fullResponse += chunk;
            setMessages(prev => 
              prev?.map(msg => 
                msg?.id === streamingMessage?.id 
                  ? { ...msg, text: fullResponse }
                  : msg
              )
            );
          },
          `You are an AI assistant for a professional portfolio website at ${location?.pathname}`
        );

        // Mark streaming as complete
        setMessages(prev => 
          prev?.map(msg => 
            msg?.id === streamingMessage?.id 
              ? { ...msg, isStreaming: false }
              : msg
          )
        );

        // Add AI response to conversation history
        setConversationHistory([...newHistory, { role: 'assistant', content: fullResponse }]);

      } else {
        // Standard response (fallback or non-streaming)
        let response;
        
        if (isOpenAIConfigured()) {
          response = await getPortfolioResponse(currentInput, location?.pathname);
        } else {
          response = getStaticAIResponse(currentInput);
        }

        const aiResponse = {
          id: Date.now() + 1,
          text: response,
          sender: 'ai',
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, aiResponse]);
        setConversationHistory([...newHistory, { role: 'assistant', content: response }]);
        setIsTyping(false);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      
      const errorResponse = {
        id: Date.now() + 1,
        text: "I apologize, but I'm having trouble responding right now. Please try again in a moment.",
        sender: 'ai',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorResponse]);
      setIsTyping(false);
    }
  };

  const getStaticAIResponse = (userMessage) => {
    const message = userMessage?.toLowerCase();
    
    if (message?.includes('project') || message?.includes('work')) {
      return "I'd be happy to discuss the projects! Each one showcases different aspects of my technical expertise. Which type of project interests you most - web applications, mobile apps, or data analysis?";
    }
    
    if (message?.includes('skill') || message?.includes('technology') || message?.includes('experience')) {
      return "My technical stack spans full-stack development with expertise in React, Node.js, Python, and cloud technologies. I also have strong experience in UI/UX design and project management. What specific area would you like to explore?";
    }
    
    if (message?.includes('contact') || message?.includes('hire') || message?.includes('collaborate')) {
      return "I'm always open to new opportunities! You can reach out via email for formal inquiries, LinkedIn for professional networking, or schedule a call for immediate discussions. What type of collaboration are you considering?";
    }
    
    if (message?.includes('hello') || message?.includes('hi') || message?.includes('hey')) {
      return "Hello! Great to meet you. I'm here to help you learn more about this portfolio. Feel free to ask about projects, technical skills, experience, or anything else you'd like to know!";
    }
    
    return "That's an interesting question! While I can provide insights about the portfolio content, I'd recommend exploring the relevant sections or reaching out directly for more detailed discussions. Is there a specific area you'd like me to guide you to?";
  };

  const handleKeyPress = (e) => {
    if (e?.key === 'Enter' && !e?.shiftKey) {
      e?.preventDefault();
      handleSendMessage();
    }
  };

  const quickActions = [
    { text: "Show me your best projects", icon: "Star" },
    { text: "What technologies do you use?", icon: "Code" },
    { text: "How can we work together?", icon: "Handshake" },
  ];

  const clearConversation = () => {
    setMessages([]);
    setConversationHistory([]);
    if (isOpen) {
      initializeWelcomeMessage();
    }
  };

  return (
    <>
      {/* Chat Widget Button */}
      <div className="fixed bottom-6 right-6 z-200">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full shadow-lg nav-transition hover-lift flex items-center justify-center ${
            isOpen 
              ? 'bg-secondary text-secondary-foreground' 
              : 'bg-primary text-primary-foreground hover:shadow-xl'
          }`}
        >
          <Icon 
            name={isOpen ? 'X' : 'MessageCircle'} 
            size={24} 
            color="currentColor" 
          />
          {/* AI Indicator */}
          {isOpenAIConfigured() && (
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
          )}
        </button>
      </div>
      
      {/* Chat Interface */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-96 bg-surface rounded-lg shadow-lg border border-border z-300 flex flex-col animate-scale-in">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <Icon name="Bot" size={16} color="white" />
              </div>
              <div>
                <h3 className="font-semibold text-text-primary">
                  AI Assistant {isOpenAIConfigured() ? '(GPT-5)' : '(Demo)'}
                </h3>
                <p className="text-xs text-text-secondary">
                  {isOpenAIConfigured() ? 'Powered by OpenAI' : 'Demo mode - Add API key for full features'}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              {/* Settings Toggle */}
              <button
                onClick={() => setUseStreaming(!useStreaming)}
                className="p-1 rounded hover:bg-muted nav-transition"
                title={`${useStreaming ? 'Disable' : 'Enable'} streaming responses`}
              >
                <Icon 
                  name={useStreaming ? 'Zap' : 'ZapOff'} 
                  size={14} 
                  color={useStreaming ? 'var(--color-primary)' : 'var(--color-text-secondary)'} 
                />
              </button>
              {/* Clear Chat */}
              <button
                onClick={clearConversation}
                className="p-1 rounded hover:bg-muted nav-transition"
                title="Clear conversation"
              >
                <Icon name="RotateCcw" size={14} color="var(--color-text-secondary)" />
              </button>
              {/* Minimize */}
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded hover:bg-muted nav-transition"
              >
                <Icon name="Minus" size={16} color="var(--color-text-secondary)" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages?.map((message) => (
              <div
                key={message?.id}
                className={`flex ${message?.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg ${
                    message?.sender === 'user' ?'bg-primary text-primary-foreground' :'bg-muted text-text-primary'
                  }`}
                >
                  <p className="text-sm">{message?.text}</p>
                  {message?.isStreaming && (
                    <div className="flex items-center mt-1">
                      <div className="w-1 h-1 bg-text-secondary rounded-full animate-pulse mr-1"></div>
                      <span className="text-xs text-text-secondary">Thinking...</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-muted px-3 py-2 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-text-secondary rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-text-secondary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-text-secondary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          {messages?.length <= 1 && (
            <div className="px-4 pb-2">
              <div className="space-y-2">
                {quickActions?.map((action, index) => (
                  <button
                    key={index}
                    onClick={() => setInputValue(action?.text)}
                    className="w-full text-left px-3 py-2 text-sm bg-muted hover:bg-border rounded-lg nav-transition flex items-center space-x-2"
                  >
                    <Icon name={action?.icon} size={14} color="var(--color-text-secondary)" />
                    <span className="text-text-secondary">{action?.text}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e?.target?.value)}
                onKeyPress={handleKeyPress}
                placeholder={isOpenAIConfigured() ? "Ask me anything..." : "Demo mode - Ask me anything..."}
                className="flex-1 px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                disabled={isTyping}
              />
              <Button
                variant="default"
                size="sm"
                iconName="Send"
                onClick={handleSendMessage}
                disabled={!inputValue?.trim() || isTyping}
              />
            </div>
          </div>
        </div>
      )}
      
      {/* Mobile Responsive Adjustments */}
      <style jsx>{`
        @media (max-width: 640px) {
          .fixed.bottom-24.right-6 {
            bottom: 6rem;
            right: 1rem;
            left: 1rem;
            width: auto;
          }
        }
      `}</style>
    </>
  );
};

export default AIChatbot;