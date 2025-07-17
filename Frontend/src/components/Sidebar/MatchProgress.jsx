import React from 'react';

const MatchProgress = ({ 
  currentRound, 
  totalRounds, 
  playerXWins, 
  playerOWins, 
  gameMode,
  onBackToSingleGame,
  isMobile = false
}) => {
  if (isMobile) {
    return (
      <div className="mb-4">
        <div className="mb-3 p-3 bg-gray-700 rounded-xl border-2 border-cyan-600">
          <div className="text-center text-blue-500 text-sm font-semibold mb-3">Round {currentRound} of {totalRounds}</div>
          <div className="flex gap-6 justify-center">
            <div className="text-center">
              <div className="text-xs text-gray-300 mb-1">{gameMode === 'ai' ? 'You (X)' : 'Player X'}</div>
              <div className="text-xl font-bold text-cyan-600">{playerXWins}</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-300 mb-1">{gameMode === 'ai' ? 'AI (O)' : 'Player O'}</div>
              <div className="text-xl font-bold text-cyan-600">{playerOWins}</div>
            </div>
          </div>
        </div>
        
        <button 
          onClick={onBackToSingleGame}
          className="w-full p-2.5 text-sm border-2 border-cyan-600 bg-transparent text-white cursor-pointer rounded-xl font-semibold transition-all duration-300 hover:bg-cyan-600 hover:shadow-[0_2px_10px_rgba(6,182,212,0.3)]"
        >
          Back to Single Game
        </button>
      </div>
    );
  }

  return (
    <div className="mb-5">
      <h3 className="m-0 mb-4 text-blue-500 text-xl border-b-2 border-cyan-600 pb-2">Match Progress</h3>
      <div className="mb-4">
        <p className="m-0 text-center text-lg text-gray-300 p-2.5 bg-gray-800 rounded">Round {currentRound} of {totalRounds}</p>
      </div>
      <div className="flex flex-col gap-2.5 mt-4">
        <div className="flex justify-between items-center p-2.5 bg-gray-800 rounded border border-cyan-600">
          <span className="text-sm text-gray-300">
            {gameMode === 'ai' ? 'You (X)' : 'Player X'}
          </span>
          <span className="text-2xl font-bold text-cyan-600">{playerXWins}</span>
        </div>
        <div className="flex justify-between items-center p-2.5 bg-gray-800 rounded border border-cyan-600">
          <span className="text-sm text-gray-300">
            {gameMode === 'ai' ? 'AI (O)' : 'Player O'}
          </span>
          <span className="text-2xl font-bold text-cyan-600">{playerOWins}</span>
        </div>
      </div>
      
      <button 
        onClick={onBackToSingleGame}
        className="mt-4 w-full p-3 text-base border-2 border-cyan-600 bg-transparent text-white cursor-pointer rounded-lg transition-all duration-300 text-left hover:bg-cyan-600 hover:translate-x-1"
      >
        Back to Single Game
      </button>
    </div>
  );
};

export default MatchProgress;
