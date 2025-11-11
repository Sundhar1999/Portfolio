import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigationItems = [
    { label: 'Home', path: '/home-landing', icon: 'Home' },
    { label: 'Projects', path: '/projects-portfolio', icon: 'FolderOpen' },
    { label: 'Experience', path: '/skills-experience', icon: 'User' },
    { label: 'Contact', path: '/contact-engagement', icon: 'Mail' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-100 nav-transition ${
          isScrolled ? 'backdrop-blur-xl bg-gradient-to-r from-blue-50/90 via-purple-50/90 to-cyan-50/90 dark:from-blue-900/90 dark:via-purple-900/90 dark:to-cyan-900/90 shadow-lg border-b border-blue-200/30 dark:border-blue-700/30' : 'backdrop-blur-sm bg-gradient-to-r from-blue-50/70 via-purple-50/70 to-cyan-50/70 dark:from-blue-900/70 dark:via-purple-900/70 dark:to-cyan-900/70 border-b border-blue-200/20 dark:border-blue-700/20'
        }`}
      >
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-cyan-400/10 animate-pulse" />
        
        <div className="relative w-full px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Enhanced Logo */}
            <div 
              className="flex items-center cursor-pointer group"
              onClick={() => handleNavigation('/home-landing')}
            >
              <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 flex items-center justify-center mr-4 group-hover:scale-105 transition-all duration-300 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img src="/assets/images/tecsys-logo.png" alt="Tecsys Logo" className="relative w-8 h-8 object-contain" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  Sundhar Kaleeswaran
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400 -mt-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  Associate Software Developer in Test
                  <span className="block text-xs opacity-75">Tecsys Inc, Montreal, QC</span>
                </p>
              </div>
            </div>

            {/* Enhanced Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-2">
              {navigationItems?.map((item, index) => (
                <button
                  key={item?.path}
                  onClick={() => handleNavigation(item?.path)}
                  className={`relative flex items-center space-x-2 px-5 py-3 rounded-xl nav-transition group overflow-hidden ${
                    isActivePath(item?.path)
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-white/60 dark:hover:bg-gray-800/60 backdrop-blur-sm border border-transparent hover:border-white/20 dark:hover:border-gray-700/20'
                  }`}
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  {!isActivePath(item?.path) && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                  )}
                  <Icon 
                    name={item?.icon} 
                    size={18} 
                    color={isActivePath(item?.path) ? 'white' : 'currentColor'} 
                  />
                  <span className="relative font-semibold">{item?.label}</span>
                  {isActivePath(item?.path) && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full" />
                  )}
                </button>
              ))}
            </nav>

            {/* Enhanced Theme Toggle & CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="p-2 rounded-xl backdrop-blur-sm bg-white/40 dark:bg-gray-800/40 border border-white/20 dark:border-gray-700/20 hover:bg-white/60 dark:hover:bg-gray-800/60 transition-all duration-300">
                <ThemeToggle />
              </div>
              <Button
                variant="default"
                iconName="Download"
                iconPosition="left"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/assets/resume.pdf';
                  link.download = 'Resume.pdf';
                  link.click();
                }}
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300 font-semibold px-6 py-3"
              >
                Download Resume
              </Button>
            </div>

            {/* Enhanced Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-3 rounded-xl backdrop-blur-sm bg-white/40 dark:bg-gray-800/40 border border-white/20 dark:border-gray-700/20 hover:bg-white/60 dark:hover:bg-gray-800/60 transition-all duration-300 group"
            >
              <Icon 
                name={isMobileMenuOpen ? 'X' : 'Menu'} 
                size={24} 
                color="var(--color-text-primary)" 
              />
            </button>
          </div>
        </div>
      </header>
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-150 md:hidden">
          <div 
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute top-0 right-0 w-80 h-full backdrop-blur-xl bg-gradient-to-b from-blue-50/95 via-purple-50/95 to-cyan-50/95 dark:from-blue-900/95 dark:via-purple-900/95 dark:to-cyan-900/95 shadow-2xl border-l border-blue-200/30 dark:border-blue-700/30 animate-slide-down">
            <div className="p-6 pt-20">
              {/* Mobile Header Info */}
              <div className="mb-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 flex items-center justify-center">
                  <img src="/assets/images/tecsys-logo.png" alt="Tecsys Logo" className="w-10 h-10 object-contain" />
                </div>
                <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100">Sundhar Kaleeswaran</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">Associate Software Developer in Test</p>
              </div>
              
              <nav className="space-y-3">
                {navigationItems?.map((item, index) => (
                  <button
                    key={item?.path}
                    onClick={() => handleNavigation(item?.path)}
                    className={`w-full flex items-center space-x-3 px-5 py-4 rounded-xl nav-transition text-left group relative overflow-hidden ${
                      isActivePath(item?.path)
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-white/60 dark:hover:bg-gray-800/60 backdrop-blur-sm border border-transparent hover:border-white/20 dark:hover:border-gray-700/20'
                    }`}
                    style={{
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    {!isActivePath(item?.path) && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                    )}
                    <Icon 
                      name={item?.icon} 
                      size={20} 
                      color={isActivePath(item?.path) ? 'white' : 'currentColor'} 
                    />
                    <span className="relative font-semibold">{item?.label}</span>
                  </button>
                ))}
              </nav>
              
              <div className="mt-8 pt-6 border-t border-white/20 dark:border-gray-700/20 space-y-4">
                <div className="flex justify-center">
                  <div className="p-2 rounded-xl backdrop-blur-sm bg-white/40 dark:bg-gray-800/40 border border-white/20 dark:border-gray-700/20">
                    <ThemeToggle />
                  </div>
                </div>
                <Button
                  variant="default"
                  iconName="Download"
                  iconPosition="left"
                  fullWidth
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/assets/resume.pdf';
                    link.download = 'Resume.pdf';
                    link.click();
                    setIsMobileMenuOpen(false);
                  }}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0 shadow-lg shadow-blue-500/25 font-semibold py-4"
                >
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Spacer for fixed header */}
      <div className="h-20" />
    </>
  );
};

export default Header;