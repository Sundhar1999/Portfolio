import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import AIChatbot from '../../components/ui/AIChatbot';
import CTAButton from '../../components/ui/CTAButton';
import HeroSection from './components/HeroSection';
import IntroductionSection from './components/IntroductionSection';
import NavigationCards from './components/NavigationCards';

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
        
        {/* Navigation Cards */}
        <NavigationCards onNavigate={handleNavigation} />
      </main>

      {/* Interactive Elements */}
      <AIChatbot />
      <CTAButton position="floating" />
    </div>
  );
};

export default HomeLanding;