import React from 'react';

const GameModeSelector = ({ gameMode, onGameModeChange }) => {
  return (
    <div className="mb-5">
      <h3 className="m-0 mb-4 text-blue-500 text-xl border-b-2 border-cyan-600 pb-2">Game Mode</h3>
      <div className="flex flex-col gap-2.5">
        <button 
          onClick={() => onGameModeChange('ai')}
          className={`p-3 text-base border-2 border-blue-500 bg-transparent text-white cursor-pointer rounded-lg transition-all duration-300 hover:bg-blue-500 hover:translate-x-1 ${
            gameMode === 'ai' ? 'bg-blue-500 font-bold shadow-[0_0_10px_rgba(84,104,255,0.5)]' : ''
          }`}
        >
          vs AI
        </button>
        <button 
          onClick={() => onGameModeChange('human')}
          className={`p-3 text-base border-2 border-blue-500 bg-transparent text-white cursor-pointer rounded-lg transition-all duration-300 hover:bg-blue-500 hover:translate-x-1 ${
            gameMode === 'human' ? 'bg-blue-500 font-bold shadow-[0_0_10px_rgba(84,104,255,0.5)]' : ''
          }`}
        >
          vs Human
        </button>
      </div>
    </div>
  );
};

export default GameModeSelector;
