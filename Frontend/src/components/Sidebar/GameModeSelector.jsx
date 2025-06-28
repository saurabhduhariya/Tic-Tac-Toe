import React from 'react';

const GameModeSelector = ({ gameMode, onGameModeChange }) => {
  return (
    <div className="sidebar-section">
      <h3>Game Mode</h3>
      <div className="mode-buttons">
        <button 
          onClick={() => onGameModeChange('ai')}
          className={gameMode === 'ai' ? 'active' : ''}
        >
          vs AI
        </button>
        <button 
          onClick={() => onGameModeChange('human')}
          className={gameMode === 'human' ? 'active' : ''}
        >
          vs Human
        </button>
      </div>
    </div>
  );
};

export default GameModeSelector;
