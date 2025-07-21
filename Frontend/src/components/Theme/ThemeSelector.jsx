// src/components/Theme/ThemeSelector.jsx
import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { FaSun, FaMoon, FaCog, FaGhost, FaTree } from 'react-icons/fa';

const ThemeSelector = ({ isMobile = false }) => {
  const { currentTheme, themes, changeTheme, toggleDarkLight, isDark } = useTheme();
  const [showThemeMenu, setShowThemeMenu] = useState(false);

  const getThemeIcon = (themeName) => {
    switch (themeName) {
      case 'light': return <FaSun className="text-yellow-500" />;
      case 'dark': return <FaMoon className="text-blue-400" />;
      case 'halloween': return <FaGhost className="text-orange-500" />;
      case 'christmas': return <FaTree className="text-green-500" />;
      default: return <FaCog />;
    }
  };

  if (isMobile) {
    return (
      <div className="mb-5">
        <label className="block text-cyan-400 text-sm font-bold mb-2 tracking-wide">THEME</label>
        <div className="flex gap-2 flex-wrap">
          {Object.entries(themes).map(([key, theme]) => (
            <button
              key={key}
              onClick={() => changeTheme(key)}
              className={`flex-1 min-w-[60px] p-2 text-xs rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-1 shadow-lg
                ${currentTheme === key 
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white border border-cyan-400 glow-cyan' 
                  : 'bg-gray-800 text-gray-300 border border-gray-600 hover:bg-gray-700'}`}
            >
              {getThemeIcon(key)}
              <span className="hidden sm:inline">{theme.name}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mb-5">
      <h3 className="m-0 mb-3 text-cyan-400 text-lg font-bold border-b border-cyan-600 pb-2 tracking-wider">THEME</h3>
      
      {/* Quick Dark/Light Toggle */}
      <div className="mb-3">
        <button
          onClick={toggleDarkLight}
          className={`w-full p-3 text-sm border rounded-xl transition-all duration-300 text-center font-medium flex items-center justify-center gap-2
            ${isDark 
              ? 'bg-gradient-to-r from-blue-700 to-purple-700 text-white border-blue-500 glow-cyan' 
              : 'bg-gradient-to-r from-yellow-600 to-orange-600 text-white border-yellow-500 glow-yellow'}`}
        >
          {isDark ? <FaMoon /> : <FaSun />}
          {isDark ? 'Dark Mode' : 'Light Mode'}
        </button>
      </div>

      {/* All Themes */}
      <div className="space-y-2">
        <h4 className="text-sm text-gray-400 uppercase tracking-wide">All Themes</h4>
        {Object.entries(themes).map(([key, theme]) => (
          <button
            key={key}
            onClick={() => changeTheme(key)}
            className={`w-full p-2 text-sm border rounded-lg transition-all duration-300 text-center font-medium flex items-center justify-center gap-2
              ${currentTheme === key 
                ? 'bg-gradient-to-r from-cyan-700 to-blue-700 text-white border-cyan-500 glow-cyan' 
                : 'bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700'}`}
          >
            {getThemeIcon(key)}
            {theme.name}
            {theme.seasonal && <span className="text-xs opacity-75">({theme.icon})</span>}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;
