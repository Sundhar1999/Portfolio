import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import Icon from '../AppIcon';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-muted nav-transition hover-lift"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <Icon 
        name={theme === 'light' ? 'Moon' : 'Sun'} 
        size={20} 
        color="var(--color-text-primary)" 
      />
    </button>
  );
};

export default ThemeToggle;