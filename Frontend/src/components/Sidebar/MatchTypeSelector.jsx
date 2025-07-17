import React, { useState, useEffect, useRef } from 'react';

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

  // Close dropdown when clicking outside
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

  if (isMobile) {
    return (
      <div className="mb-4 relative" ref={dropdownRef}>
        <label className="block text-blue-500 text-sm font-semibold mb-2">Match Type</label>
        
        {/* Custom Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full p-3 bg-gray-700 border-2 border-cyan-600 text-white rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:shadow-[0_0_10px_rgba(84,104,255,0.3)] transition-all duration-300 hover:border-blue-400 flex justify-between items-center"
          >
            <span>{getMatchTypeLabel(totalRounds)}</span>
            <svg 
              className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {/* Dropdown Options */}
          {isDropdownOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-gray-700 border-2 border-cyan-600 rounded-xl shadow-lg z-50 overflow-hidden">
              <div 
                onClick={() => handleOptionSelect(1)}
                className={`p-3 text-sm text-white cursor-pointer transition-all duration-200 hover:bg-cyan-600 ${
                  totalRounds === 1 ? 'bg-cyan-600 font-semibold' : ''
                }`}
              >
                Single Game
              </div>
              <div 
                onClick={() => handleOptionSelect(3)}
                className={`p-3 text-sm text-white cursor-pointer transition-all duration-200 hover:bg-cyan-600 ${
                  totalRounds === 3 ? 'bg-cyan-600 font-semibold' : ''
                }`}
              >
                Best of 3
              </div>
              <div 
                onClick={() => handleOptionSelect(5)}
                className={`p-3 text-sm text-white cursor-pointer transition-all duration-200 hover:bg-cyan-600 ${
                  totalRounds === 5 ? 'bg-cyan-600 font-semibold' : ''
                }`}
              >
                Best of 5
              </div>
              <div 
                onClick={() => handleOptionSelect(7)}
                className={`p-3 text-sm text-white cursor-pointer transition-all duration-200 hover:bg-cyan-600 ${
                  totalRounds === 7 ? 'bg-cyan-600 font-semibold' : ''
                }`}
              >
                Best of 7
              </div>
              <div 
                onClick={() => handleOptionSelect(-1)}
                className={`p-3 text-sm text-white cursor-pointer transition-all duration-200 hover:bg-cyan-600 ${
                  showCustomInput ? 'bg-cyan-600 font-semibold' : ''
                }`}
              >
                Custom
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
              className="flex-1 p-2.5 border-2 border-cyan-600 bg-gray-800 text-white rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:shadow-[0_0_10px_rgba(84,104,255,0.3)] transition-all duration-300"
            />
            <button 
              onClick={onApplyCustomRounds} 
              className="px-4 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-600 text-white border-none rounded-xl text-sm font-semibold transition-all duration-300 hover:from-blue-600 hover:to-cyan-700 hover:shadow-[0_4px_15px_rgba(84,104,255,0.4)] hover:-translate-y-0.5"
            >
              Apply
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="mb-3 lg:mb-5">
      <h3 className="m-0 mb-3 lg:mb-4 text-blue-500 text-lg lg:text-xl border-b-2 border-cyan-600 pb-2">Match Type</h3>
      <div className="flex flex-col gap-2 lg:gap-2.5">
        <button 
          onClick={() => onRoundChange(1)}
          className={`p-2.5 lg:p-3 text-sm lg:text-base border-2 border-cyan-600 bg-transparent text-white cursor-pointer rounded-lg transition-all duration-300 text-left hover:bg-cyan-600 lg:hover:translate-x-1 ${
            totalRounds === 1 ? 'bg-cyan-600 font-bold shadow-[0_0_10px_rgba(0,116,166,0.5)]' : ''
          }`}
        >
          Single Game
        </button>
        <button 
          onClick={() => onRoundChange(3)}
          className={`p-2.5 lg:p-3 text-sm lg:text-base border-2 border-cyan-600 bg-transparent text-white cursor-pointer rounded-lg transition-all duration-300 text-left hover:bg-cyan-600 lg:hover:translate-x-1 ${
            totalRounds === 3 ? 'bg-cyan-600 font-bold shadow-[0_0_10px_rgba(0,116,166,0.5)]' : ''
          }`}
        >
          Best of 3
        </button>
        <button 
          onClick={() => onRoundChange(5)}
          className={`p-2.5 lg:p-3 text-sm lg:text-base border-2 border-cyan-600 bg-transparent text-white cursor-pointer rounded-lg transition-all duration-300 text-left hover:bg-cyan-600 lg:hover:translate-x-1 ${
            totalRounds === 5 ? 'bg-cyan-600 font-bold shadow-[0_0_10px_rgba(0,116,166,0.5)]' : ''
          }`}
        >
          Best of 5
        </button>
        <button 
          onClick={() => onRoundChange(7)}
          className={`p-2.5 lg:p-3 text-sm lg:text-base border-2 border-cyan-600 bg-transparent text-white cursor-pointer rounded-lg transition-all duration-300 text-left hover:bg-cyan-600 lg:hover:translate-x-1 ${
            totalRounds === 7 ? 'bg-cyan-600 font-bold shadow-[0_0_10px_rgba(0,116,166,0.5)]' : ''
          }`}
        >
          Best of 7
        </button>
        <button 
          onClick={onToggleCustomInput}
          className={`p-2.5 lg:p-3 text-sm lg:text-base border-2 border-cyan-600 bg-transparent text-white cursor-pointer rounded-lg transition-all duration-300 text-left hover:bg-cyan-600 lg:hover:translate-x-1 ${
            showCustomInput ? 'bg-cyan-600 font-bold shadow-[0_0_10px_rgba(0,116,166,0.5)]' : ''
          }`}
        >
          Custom
        </button>
      </div>
      
      {showCustomInput && (
        <div className="mt-4 flex flex-col gap-2.5">
          <input 
            type="number" 
            min="1" 
            max="100" 
            value={customRounds}
            onChange={(e) => onCustomRoundsChange(parseInt(e.target.value) || 1)}
            placeholder="Enter rounds"
            className="p-2.5 border-2 border-cyan-600 bg-gray-800 text-white rounded text-base focus:outline-none focus:border-blue-500 focus:shadow-[0_0_5px_rgba(84,104,255,0.5)]"
          />
          <button onClick={onApplyCustomRounds} className="py-2 px-4 bg-blue-500 text-white border-none rounded cursor-pointer text-sm transition-colors duration-300 hover:bg-blue-600">
            Apply
          </button>
        </div>
      )}
    </div>
  );
};

export default MatchTypeSelector;
