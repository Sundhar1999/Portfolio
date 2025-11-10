import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

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
          isScrolled ? 'glass-effect shadow-md' : 'bg-surface'
        }`}
      >
        <div className="w-full px-8 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div 
              className="flex items-center cursor-pointer hover-lift"
              onClick={() => handleNavigation('/home-landing')}
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-3">
                <img src="/assets/images/tecsys-logo.png" alt="Tecsys Logo" className="w-full h-full object-contain" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-semibold text-text-primary">Sundhar Kaleeswaran</h1>
                <p className="text-xs text-text-secondary -mt-1">Associate Software Developer in Test<br/>Tecsys Inc, Montreal, QC</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems?.map((item) => (
                <button
                  key={item?.path}
                  onClick={() => handleNavigation(item?.path)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg nav-transition hover-lift ${
                    isActivePath(item?.path)
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-text-secondary hover:text-text-primary hover:bg-muted'
                  }`}
                >
                  <Icon 
                    name={item?.icon} 
                    size={18} 
                    color={isActivePath(item?.path) ? 'currentColor' : 'var(--color-text-secondary)'} 
                  />
                  <span className="font-medium">{item?.label}</span>
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button
                variant="default"
                iconName="MessageCircle"
                iconPosition="left"
                onClick={() => handleNavigation('/contact-engagement')}
                className="hover-lift"
              >
                Let's Connect
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-muted nav-transition"
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
          <div className="absolute top-0 right-0 w-80 h-full bg-surface shadow-lg animate-slide-down">
            <div className="p-6 pt-20">
              <nav className="space-y-4">
                {navigationItems?.map((item) => (
                  <button
                    key={item?.path}
                    onClick={() => handleNavigation(item?.path)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg nav-transition text-left ${
                      isActivePath(item?.path)
                        ? 'bg-primary text-primary-foreground'
                        : 'text-text-secondary hover:text-text-primary hover:bg-muted'
                    }`}
                  >
                    <Icon 
                      name={item?.icon} 
                      size={20} 
                      color={isActivePath(item?.path) ? 'currentColor' : 'var(--color-text-secondary)'} 
                    />
                    <span className="font-medium">{item?.label}</span>
                  </button>
                ))}
              </nav>
              
              <div className="mt-8 pt-6 border-t border-border">
                <Button
                  variant="default"
                  iconName="MessageCircle"
                  iconPosition="left"
                  fullWidth
                  onClick={() => handleNavigation('/contact-engagement')}
                >
                  Let's Connect
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