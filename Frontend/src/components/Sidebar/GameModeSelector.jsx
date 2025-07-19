// src/components/Sidebar/GameModeSelector.jsx
import React from 'react';
import { FaRobot, FaUserFriends } from 'react-icons/fa';

const GameModeSelector = ({ gameMode, onGameModeChange, isMobile = false }) => {
  if (isMobile) {
    return (
      <div className="mb-5">
        <label className="block text-cyan-400 text-sm font-bold mb-2 tracking-wide">GAME MODE</label>
        <div className="flex gap-3">
          <button 
            onClick={() => onGameModeChange('ai')}
            className={`flex-1 p-3 text-sm rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg
              ${gameMode === 'ai' 
                ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white border border-cyan-400 glow-cyan' 
                : 'bg-gray-800 text-gray-300 border border-gray-600 hover:bg-gray-700'}`}
          >
            <FaRobot className="text-lg" /> vs AI
          </button>
          <button 
            onClick={() => onGameModeChange('human')}
            className={`flex-1 p-3 text-sm rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg
              ${gameMode === 'human' 
                ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white border border-cyan-400 glow-cyan' 
                : 'bg-gray-800 text-gray-300 border border-gray-600 hover:bg-gray-700'}`}
          >
            <FaUserFriends className="text-lg" /> vs Human
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-5">
      <h3 className="m-0 mb-3 text-cyan-400 text-lg font-bold border-b border-cyan-600 pb-2 tracking-wider">GAME MODE</h3>
      <div className="flex flex-col gap-3">
        <button 
          onClick={() => onGameModeChange('ai')}
          className={`p-3 text-sm border rounded-xl transition-all duration-300 text-center font-medium
            ${gameMode === 'ai' 
              ? 'bg-gradient-to-r from-cyan-700 to-blue-700 text-white border-cyan-500 glow-cyan' 
              : 'bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700'}`}
        >
          <div className="flex items-center justify-center gap-2">
            <FaRobot /> vs AI
          </div>
        </button>
        <button 
          onClick={() => onGameModeChange('human')}
          className={`p-3 text-sm border rounded-xl transition-all duration-300 text-center font-medium
            ${gameMode === 'human' 
              ? 'bg-gradient-to-r from-cyan-700 to-blue-700 text-white border-cyan-500 glow-cyan' 
              : 'bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700'}`}
        >
          <div className="flex items-center justify-center gap-2">
            <FaUserFriends /> vs Human
          </div>
        </button>
      </div>
    </div>
  );
};

export default GameModeSelector;