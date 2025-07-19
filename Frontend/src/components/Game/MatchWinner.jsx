// src/components/Game/MatchWinner.jsx
import React from 'react';
import { PLAYER_X } from '../AI/aiLogic';
import Confetti from 'react-confetti';

const MatchWinner = ({ 
  matchWinner, 
  totalRounds, 
  gameMode, 
  playerXWins, 
  playerOWins,
  onMatchReset 
}) => {
  if (!matchWinner) {
    return null;
  }

  const getWinnerText = () => {
    if (matchWinner === 'draw') {
      return "The match ended in a draw!";
    } else if (matchWinner === PLAYER_X) {
      return gameMode === 'ai' ? 'You won the match! 🏆' : 'Player X won the match! 🏆';
    } else {
      return gameMode === 'ai' ? 'AI won the match! 🤖' : 'Player O won the match! 🏆';
    }
  };

  return (
    <div className="glass-effect p-6 my-5 rounded-2xl text-center border border-cyan-500 max-w-lg w-full animate-slideUp glow-cyan">
      {matchWinner !== 'draw' && <Confetti recycle={false} numberOfPieces={500} />}
      
      <h3 className="m-0 mb-4 text-cyan-400 text-2xl font-bold">
        {totalRounds === 1 ? '🎮 Game Complete! 🎮' : '🏆 Match Complete! 🏆'}
      </h3>
      
      <p className="my-4 text-xl font-bold neon-text">{getWinnerText()}</p>
      
      {totalRounds > 1 && (
        <div className="flex justify-center gap-8 my-6">
          <div className="text-center">
            <div className="text-lg">{gameMode === 'ai' ? 'You' : 'Player X'}</div>
            <div className="text-4xl font-bold text-cyan-400">{playerXWins}</div>
          </div>
          <div className="text-center">
            <div className="text-lg">VS</div>
          </div>
          <div className="text-center">
            <div className="text-lg">{gameMode === 'ai' ? 'AI' : 'Player O'}</div>
            <div className="text-4xl font-bold text-cyan-400">{playerOWins}</div>
          </div>
        </div>
      )}
      
      <button 
        onClick={onMatchReset} 
        className="py-3 px-6 text-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-none rounded-xl cursor-pointer mt-4 transition-all duration-300 hover:from-cyan-600 hover:to-blue-600 hover:scale-105 animate-gradient"
      >
        {totalRounds === 1 ? '✨ New Game ✨' : '🔥 New Match 🔥'}
      </button>
    </div>
  );
};

export default MatchWinner;