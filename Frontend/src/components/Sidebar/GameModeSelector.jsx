import React from 'react';

const GameModeSelector = ({ gameMode, onGameModeChange, isMobile = false }) => {
  if (isMobile) {
    return (
      <div className="mb-4">
        <label className="block text-blue-500 text-sm font-semibold mb-2">Game Mode</label>
        <div className="flex gap-2">
          <button 
            onClick={() => onGameModeChange('ai')}
            className={`flex-1 p-3 text-sm border-2 border-blue-500 bg-transparent text-white cursor-pointer rounded-xl font-semibold transition-all duration-300 ${
              gameMode === 'ai' 
                ? 'bg-gradient-to-r from-blue-500 to-cyan-600 font-bold shadow-[0_4px_15px_rgba(84,104,255,0.4)] border-blue-400' 
                : 'hover:bg-blue-500 hover:shadow-[0_2px_10px_rgba(84,104,255,0.3)]'
            }`}
          >
            vs AI
          </button>
          <button 
            onClick={() => onGameModeChange('human')}
            className={`flex-1 p-3 text-sm border-2 border-blue-500 bg-transparent text-white cursor-pointer rounded-xl font-semibold transition-all duration-300 ${
              gameMode === 'human' 
                ? 'bg-gradient-to-r from-blue-500 to-cyan-600 font-bold shadow-[0_4px_15px_rgba(84,104,255,0.4)] border-blue-400' 
                : 'hover:bg-blue-500 hover:shadow-[0_2px_10px_rgba(84,104,255,0.3)]'
            }`}
          >
            vs Human
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-3 lg:mb-5">
      <h3 className="m-0 mb-3 lg:mb-4 text-blue-500 text-lg lg:text-xl border-b-2 border-cyan-600 pb-2">Game Mode</h3>
      <div className="flex flex-col gap-2 lg:gap-2.5">
        <button 
          onClick={() => onGameModeChange('ai')}
          className={`p-2.5 lg:p-3 text-sm lg:text-base border-2 border-blue-500 bg-transparent text-white cursor-pointer rounded-lg transition-all duration-300 hover:bg-blue-500 lg:hover:translate-x-1 ${
            gameMode === 'ai' ? 'bg-blue-500 font-bold shadow-[0_0_10px_rgba(84,104,255,0.5)]' : ''
          }`}
        >
          vs AI
        </button>
        <button 
          onClick={() => onGameModeChange('human')}
          className={`p-2.5 lg:p-3 text-sm lg:text-base border-2 border-blue-500 bg-transparent text-white cursor-pointer rounded-lg transition-all duration-300 hover:bg-blue-500 lg:hover:translate-x-1 ${
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
