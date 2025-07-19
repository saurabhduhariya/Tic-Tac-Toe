// src/components/Sidebar/GameModeSelector.jsx
import React from 'react';
import { FaRobot, FaUserFriends, FaBrain, FaBalanceScale, FaFire } from 'react-icons/fa';

const GameModeSelector = ({ gameMode, onGameModeChange, aiDifficulty, onAIDifficultyChange, showAIDifficultySelector, onToggleAIDifficultySelector, isMobile = false }) => {
  
  // If showing AI difficulty selector, display difficulty options
  if (showAIDifficultySelector) {
    if (isMobile) {
      return (
        <div className="mb-5">
          <label className="block text-cyan-400 text-sm font-bold mb-2 tracking-wide">SELECT AI DIFFICULTY</label>
          <div className="flex gap-2">
            <button 
              onClick={() => {
                onAIDifficultyChange('easy');
                onToggleAIDifficultySelector(false);
              }}
              className={`flex-1 p-3 text-sm rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg
                ${aiDifficulty === 'easy' 
                  ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white border border-green-400 glow-green' 
                  : 'bg-gray-800 text-gray-300 border border-gray-600 hover:bg-gray-700'}`}
            >
              <FaBrain className="text-lg" /> Easy
            </button>
            <button 
              onClick={() => {
                onAIDifficultyChange('medium');
                onToggleAIDifficultySelector(false);
              }}
              className={`flex-1 p-3 text-sm rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg
                ${aiDifficulty === 'medium' 
                  ? 'bg-gradient-to-r from-yellow-600 to-orange-600 text-white border border-yellow-400 glow-yellow' 
                  : 'bg-gray-800 text-gray-300 border border-gray-600 hover:bg-gray-700'}`}
            >
              <FaBalanceScale className="text-lg" /> Medium
            </button>
            <button 
              onClick={() => {
                onAIDifficultyChange('hard');
                onToggleAIDifficultySelector(false);
              }}
              className={`flex-1 p-3 text-sm rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg
                ${aiDifficulty === 'hard' 
                  ? 'bg-gradient-to-r from-red-600 to-pink-600 text-white border border-red-400 glow-red' 
                  : 'bg-gray-800 text-gray-300 border border-gray-600 hover:bg-gray-700'}`}
            >
              <FaFire className="text-lg" /> Hard
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="mb-5">
        <h3 className="m-0 mb-3 text-cyan-400 text-lg font-bold border-b border-cyan-600 pb-2 tracking-wider">SELECT AI DIFFICULTY</h3>
        <div className="flex flex-col gap-3">
          <button 
            onClick={() => {
              onAIDifficultyChange('easy');
              onToggleAIDifficultySelector(false);
            }}
            className={`p-3 text-sm border rounded-xl transition-all duration-300 text-center font-medium
              ${aiDifficulty === 'easy' 
                ? 'bg-gradient-to-r from-green-700 to-emerald-700 text-white border-green-500 glow-green' 
                : 'bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700'}`}
          >
            <div className="flex items-center justify-center gap-2">
              <FaBrain /> Easy
            </div>
          </button>
          <button 
            onClick={() => {
              onAIDifficultyChange('medium');
              onToggleAIDifficultySelector(false);
            }}
            className={`p-3 text-sm border rounded-xl transition-all duration-300 text-center font-medium
              ${aiDifficulty === 'medium' 
                ? 'bg-gradient-to-r from-yellow-700 to-orange-700 text-white border-yellow-500 glow-yellow' 
                : 'bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700'}`}
          >
            <div className="flex items-center justify-center gap-2">
              <FaBalanceScale /> Medium
            </div>
          </button>
          <button 
            onClick={() => {
              onAIDifficultyChange('hard');
              onToggleAIDifficultySelector(false);
            }}
            className={`p-3 text-sm border rounded-xl transition-all duration-300 text-center font-medium
              ${aiDifficulty === 'hard' 
                ? 'bg-gradient-to-r from-red-700 to-pink-700 text-white border-red-500 glow-red' 
                : 'bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700'}`}
          >
            <div className="flex items-center justify-center gap-2">
              <FaFire /> Hard
            </div>
          </button>
        </div>
      </div>
    );
  }

  // Normal game mode selector
  if (isMobile) {
    return (
      <div className="mb-5">
        <label className="block text-cyan-400 text-sm font-bold mb-2 tracking-wide">GAME MODE</label>
        <div className="flex gap-3">
          <button 
            onClick={() => {
              if (gameMode === 'ai') {
                onToggleAIDifficultySelector(true);
              } else {
                onGameModeChange('ai');
              }
            }}
            className={`flex-1 p-3 text-sm rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg
              ${gameMode === 'ai' 
                ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white border border-cyan-400 glow-cyan' 
                : 'bg-gray-800 text-gray-300 border border-gray-600 hover:bg-gray-700'}`}
          >
            <FaRobot className="text-lg" /> vs AI
            {gameMode === 'ai' && (
              <span className="text-xs opacity-75">({aiDifficulty})</span>
            )}
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
          onClick={() => {
            if (gameMode === 'ai') {
              onToggleAIDifficultySelector(true);
            } else {
              onGameModeChange('ai');
            }
          }}
          className={`p-3 text-sm border rounded-xl transition-all duration-300 text-center font-medium
            ${gameMode === 'ai' 
              ? 'bg-gradient-to-r from-cyan-700 to-blue-700 text-white border-cyan-500 glow-cyan' 
              : 'bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700'}`}
        >
          <div className="flex items-center justify-center gap-2">
            <FaRobot /> vs AI
            {gameMode === 'ai' && (
              <span className="text-sm opacity-75">({aiDifficulty})</span>
            )}
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