import React from 'react';

const MatchProgress = ({ 
  currentRound, 
  totalRounds, 
  playerXWins, 
  playerOWins, 
  gameMode,
  onBackToSingleGame 
}) => {
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
