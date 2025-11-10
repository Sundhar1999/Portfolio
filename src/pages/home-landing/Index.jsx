import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import AIChatbot from '../../components/ui/AIChatbot';
import CTAButton from '../../components/ui/CTAButton';
import HeroSection from './components/HeroSection';
import IntroductionSection from './components/IntroductionSection';
import MyJourney from './components/MyJourney';

const HomeLanding = () => {
  const navigate = useNavigate();

  const handleNavigation = (route) => {
    navigate(route);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <HeroSection onNavigate={handleNavigation} />
        
        {/* Introduction Section */}
        <IntroductionSection />
        
        {/* My Journey */}
        <MyJourney />
      </main>

      {/* Interactive Elements */}
      <AIChatbot />
      <CTAButton position="floating" />
    </div>
  );
};

export default HomeLanding;