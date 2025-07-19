// src/components/Sidebar/MatchProgress.jsx
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

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
      <div className="mb-5">
        <div className="mb-4 p-4 glass-effect rounded-xl border border-cyan-600">
          <div className="text-center text-cyan-400 text-sm font-bold mb-3 tracking-wider">
            ROUND {currentRound} OF {totalRounds}
          </div>
          
          <div className="flex justify-between items-center mb-4">
            <div className="text-center">
              <div className="text-xs text-gray-300 mb-1">{gameMode === 'ai' ? 'YOU (X)' : 'PLAYER X'}</div>
              <div className="text-2xl font-bold text-cyan-400">{playerXWins}</div>
            </div>
            
            <div className="text-xl font-bold text-gray-400">VS</div>
            
            <div className="text-center">
              <div className="text-xs text-gray-300 mb-1">{gameMode === 'ai' ? 'AI (O)' : 'PLAYER O'}</div>
              <div className="text-2xl font-bold text-cyan-400">{playerOWins}</div>
            </div>
          </div>
          
          <div className="w-full bg-gray-700 rounded-full h-2.5">
            <div 
              className="bg-cyan-600 h-2.5 rounded-full" 
              style={{ width: `${(currentRound / totalRounds) * 100}%` }}
            ></div>
          </div>
        </div>
        
        <button 
          onClick={onBackToSingleGame}
          className="w-full p-3 text-sm bg-gray-800 border border-gray-600 text-gray-300 cursor-pointer rounded-xl font-bold transition-all duration-300 hover:bg-gray-700 flex items-center justify-center gap-2"
        >
          <FaArrowLeft /> Back to Single Game
        </button>
      </div>
    );
  }

  return (
    <div className="mb-6">
      <h3 className="m-0 mb-4 text-cyan-400 text-xl font-bold border-b border-cyan-600 pb-2 tracking-wider">MATCH PROGRESS</h3>
      
      <div className="mb-4 p-3 glass-effect rounded-lg border border-cyan-600">
        <p className="m-0 text-center text-cyan-400 p-2 font-bold">
          Round {currentRound} of {totalRounds}
        </p>
      </div>
      
      <div className="flex flex-col gap-3 mt-5">
        <div className="flex justify-between items-center p-3 glass-effect rounded-lg border border-cyan-600">
          <span className="text-sm text-gray-300">
            {gameMode === 'ai' ? 'You (X)' : 'Player X'}
          </span>
          <span className="text-2xl font-bold text-cyan-400">{playerXWins}</span>
        </div>
        
        <div className="flex justify-between items-center p-3 glass-effect rounded-lg border border-cyan-600">
          <span className="text-sm text-gray-300">
            {gameMode === 'ai' ? 'AI (O)' : 'Player O'}
          </span>
          <span className="text-2xl font-bold text-cyan-400">{playerOWins}</span>
        </div>
      </div>
      
      <div className="mt-5 w-full bg-gray-700 rounded-full h-2.5">
        <div 
          className="bg-cyan-600 h-2.5 rounded-full" 
          style={{ width: `${(currentRound / totalRounds) * 100}%` }}
        ></div>
      </div>
      
      <button 
        onClick={onBackToSingleGame}
        className="mt-5 w-full p-3 text-base bg-gray-800 border border-gray-600 text-gray-300 cursor-pointer rounded-lg transition-all duration-300 text-center hover:bg-gray-700 flex items-center justify-center gap-2"
      >
        <FaArrowLeft /> Back to Single Game
      </button>
    </div>
  );
};

export default MatchProgress;