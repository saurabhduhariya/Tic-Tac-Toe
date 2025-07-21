// src/contexts/ThemeContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Theme definitions
export const themes = {
  dark: {
    name: 'Dark',
    background: 'radial-gradient(circle at center, #1e293b 0%, #0f172a 100%)',
    primary: 'bg-cyan-600',
    primaryColor: '#06b6d4',
    secondary: 'bg-blue-600',
    secondaryColor: '#3b82f6',
    accent: '#ef4444',
    text: '#ffffff',
    textSecondary: '#94a3b8',
    cardBg: 'rgba(30, 41, 59, 0.7)',
    tileBg: 'bg-gray-800/50',
    boardBg: 'bg-gray-800/60',
    tileBorder: 'border-cyan-500/30',
    borderColor: 'border-cyan-500/30',
    border: 'border-cyan-500',
    accentBorder: 'border-blue-500',
    buttonPrimary: 'bg-gradient-to-r from-cyan-700 to-blue-700',
    buttonSecondary: 'bg-gray-800',
    glowEffect: 'glow-cyan',
    glow: 'shadow-cyan-500/50',
    secondaryGlow: 'shadow-blue-500/50',
    titleGradient: 'bg-gradient-to-r from-cyan-400 to-blue-500'
  },
  light: {
    name: 'Light',
    background: 'radial-gradient(circle at center, #f1f5f9 0%, #e2e8f0 100%)',
    primary: 'bg-cyan-600',
    primaryColor: '#0891b2',
    secondary: 'bg-blue-600',
    secondaryColor: '#2563eb',
    accent: '#dc2626',
    text: '#1e293b',
    textSecondary: '#64748b',
    cardBg: 'rgba(248, 250, 252, 0.9)',
    tileBg: 'bg-slate-100/80',
    boardBg: 'bg-white/80',
    tileBorder: 'border-slate-300',
    borderColor: 'border-slate-300',
    border: 'border-cyan-600',
    accentBorder: 'border-blue-600',
    buttonPrimary: 'bg-gradient-to-r from-cyan-600 to-blue-600',
    buttonSecondary: 'bg-slate-200',
    glowEffect: 'glow-cyan-light',
    glow: 'shadow-cyan-600/50',
    secondaryGlow: 'shadow-blue-600/50',
    titleGradient: 'bg-gradient-to-r from-cyan-600 to-blue-600'
  },
  halloween: {
    name: 'Halloween',
    background: 'radial-gradient(circle at center, #1a1a1a 0%, #000000 100%)',
    primary: 'bg-orange-600',
    primaryColor: '#ea580c',
    secondary: 'bg-orange-800',
    secondaryColor: '#9a3412',
    accent: '#dc2626',
    text: '#ffffff',
    textSecondary: '#fdba74',
    cardBg: 'rgba(26, 26, 26, 0.8)',
    tileBg: 'bg-orange-900/30',
    boardBg: 'bg-black/70',
    tileBorder: 'border-orange-500/50',
    borderColor: 'border-orange-500/50',
    border: 'border-orange-500',
    accentBorder: 'border-red-500',
    buttonPrimary: 'bg-gradient-to-r from-orange-600 to-red-600',
    buttonSecondary: 'bg-gray-900',
    glowEffect: 'glow-orange',
    glow: 'shadow-orange-500/50',
    secondaryGlow: 'shadow-red-500/50',
    titleGradient: 'bg-gradient-to-r from-orange-500 to-red-500',
    seasonal: true,
    icon: '🎃'
  },
  christmas: {
    name: 'Christmas',
    background: 'radial-gradient(circle at center, #1e3a8a 0%, #064e3b 100%)',
    primary: 'bg-red-600',
    primaryColor: '#dc2626',
    secondary: 'bg-green-600',
    secondaryColor: '#16a34a',
    accent: '#eab308',
    text: '#ffffff',
    textSecondary: '#fbbf24',
    cardBg: 'rgba(30, 58, 138, 0.7)',
    tileBg: 'bg-red-900/30',
    boardBg: 'bg-blue-900/60',
    tileBorder: 'border-green-500/50',
    borderColor: 'border-green-500/50',
    border: 'border-red-500',
    accentBorder: 'border-green-500',
    buttonPrimary: 'bg-gradient-to-r from-red-600 to-green-600',
    buttonSecondary: 'bg-blue-900',
    glowEffect: 'glow-red',
    glow: 'shadow-red-500/50',
    secondaryGlow: 'shadow-green-500/50',
    titleGradient: 'bg-gradient-to-r from-red-500 to-green-500',
    seasonal: true,
    icon: '🎄'
  }
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('dark');
  
  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('tic-tac-toe-theme');
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
  }, []);
  
  // Save theme to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('tic-tac-toe-theme', currentTheme);
    
    // Apply background to body
    const theme = themes[currentTheme];
    document.body.style.background = theme.background;
    document.body.style.color = theme.text;
  }, [currentTheme]);
  
  const changeTheme = (themeName) => {
    if (themes[themeName]) {
      setCurrentTheme(themeName);
    }
  };
  
  const toggleDarkLight = () => {
    setCurrentTheme(currentTheme === 'dark' ? 'light' : 'dark');
  };
  
  const value = {
    currentTheme,
    theme: themes[currentTheme],
    themes,
    changeTheme,
    toggleDarkLight,
    isDark: currentTheme === 'dark',
    isLight: currentTheme === 'light',
    isSeasonal: themes[currentTheme].seasonal
  };
  
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
