// src/components/Sidebar/MatchTypeSelector.jsx
import React, { useState, useEffect, useRef } from 'react';
import { FaCrown, FaTrophy, FaMedal, FaStar, FaCog } from 'react-icons/fa';

const MatchTypeSelector = ({ 
  totalRounds, 
  onRoundChange, 
  showCustomInput, 
  onToggleCustomInput,
  customRounds,
  onCustomRoundsChange,
  onApplyCustomRounds,
  isMobile = false
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const getMatchTypeLabel = (rounds) => {
    switch (rounds) {
      case 1: return 'Single Game';
      case 3: return 'Best of 3';
      case 5: return 'Best of 5';
      case 7: return 'Best of 7';
      default: return `Custom (${rounds})`;
    }
  };

  const handleOptionSelect = (value) => {
    if (value === -1) {
      onToggleCustomInput();
    } else {
      onRoundChange(value);
    }
    setIsDropdownOpen(false);
  };

  const getIcon = (type) => {
    switch(type) {
      case 1: return <FaStar className="text-yellow-400" />;
      case 3: return <FaMedal className="text-amber-400" />;
      case 5: return <FaTrophy className="text-amber-500" />;
      case 7: return <FaCrown className="text-purple-400" />;
      default: return <FaCog className="text-cyan-400" />;
    }
  };

  if (isMobile) {
    return (
      <div className="mb-5 relative" ref={dropdownRef}>
        <label className="block text-cyan-400 text-sm font-bold mb-2 tracking-wide">MATCH TYPE</label>
        
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full p-3 bg-gray-800 border border-gray-600 text-gray-300 rounded-xl text-sm focus:outline-none transition-all duration-300 hover:bg-gray-700 flex justify-between items-center"
          >
            <span className="flex items-center gap-2">
              {getIcon(totalRounds)} {getMatchTypeLabel(totalRounds)}
            </span>
            <svg 
              className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {isDropdownOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-gray-800 border border-gray-600 rounded-xl shadow-lg z-50 overflow-hidden">
              {[1, 3, 5, 7].map(rounds => (
                <div 
                  key={rounds}
                  onClick={() => handleOptionSelect(rounds)}
                  className={`p-3 text-sm cursor-pointer transition-all duration-200 flex items-center gap-2
                    ${totalRounds === rounds 
                      ? 'bg-cyan-900 text-cyan-400' 
                      : 'text-gray-300 hover:bg-gray-700'}`}
                >
                  {getIcon(rounds)} {getMatchTypeLabel(rounds)}
                </div>
              ))}
              <div 
                onClick={() => handleOptionSelect(-1)}
                className={`p-3 text-sm cursor-pointer transition-all duration-200 flex items-center gap-2
                  ${showCustomInput 
                    ? 'bg-cyan-900 text-cyan-400' 
                    : 'text-gray-300 hover:bg-gray-700'}`}
              >
                <FaCog className="text-cyan-400" /> Custom
              </div>
            </div>
          )}
        </div>
        
        {showCustomInput && (
          <div className="mt-3 flex gap-2">
            <input 
              type="number" 
              min="1" 
              max="100" 
              value={customRounds}
              onChange={(e) => onCustomRoundsChange(parseInt(e.target.value) || 1)}
              placeholder="Rounds"
              className="flex-1 p-3 border border-gray-600 bg-gray-800 text-white rounded-xl text-sm focus:outline-none focus:border-cyan-500"
            />
            <button 
              onClick={onApplyCustomRounds} 
              className="px-4 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white border-none rounded-xl text-sm font-bold transition-all duration-300 hover:from-cyan-700 hover:to-blue-700"
            >
              Apply
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="mb-6">
      <h3 className="m-0 mb-4 text-cyan-400 text-lg font-bold border-b border-cyan-600 pb-2 tracking-wider">MATCH TYPE</h3>
      <div className="flex flex-col gap-3">
        {[1, 3, 5, 7].map(rounds => (
          <button 
            key={rounds}
            onClick={() => onRoundChange(rounds)}
            className={`p-3 text-sm border rounded-xl transition-all duration-300 text-left flex items-center gap-3
              ${totalRounds === rounds 
                ? 'bg-gradient-to-r from-cyan-800 to-blue-800 text-white border-cyan-500 glow-cyan' 
                : 'bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700'}`}
          >
            <span className="text-xl">{getIcon(rounds)}</span>
            <span>{getMatchTypeLabel(rounds)}</span>
          </button>
        ))}
        <button 
          onClick={onToggleCustomInput}
          className={`p-3 text-sm border rounded-xl transition-all duration-300 text-left flex items-center gap-3
            ${showCustomInput 
              ? 'bg-gradient-to-r from-cyan-800 to-blue-800 text-white border-cyan-500 glow-cyan' 
              : 'bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700'}`}
        >
          <FaCog className="text-cyan-400 text-xl" /> Custom
        </button>
      </div>
      
      {showCustomInput && (
        <div className="mt-4 flex flex-col gap-3">
          <input 
            type="number" 
            min="1" 
            max="100" 
            value={customRounds}
            onChange={(e) => onCustomRoundsChange(parseInt(e.target.value) || 1)}
            placeholder="Enter rounds"
            className="p-3 border border-gray-600 bg-gray-800 text-white rounded text-sm focus:outline-none focus:border-cyan-500"
          />
          <button 
            onClick={onApplyCustomRounds} 
            className="py-2 px-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white border-none rounded cursor-pointer text-sm font-bold transition-colors duration-300 hover:from-cyan-700 hover:to-blue-700"
          >
            Apply Custom Rounds
          </button>
        </div>
      )}
    </div>
  );
};

export default MatchTypeSelector;