// src/components/Game/RoundResult.jsx
import React from 'react';
import GameState from '../Tic-Tac-Toe/GameState';
import { PLAYER_X } from '../AI/aiLogic';

const RoundResult = ({ 
  showRoundResult, 
  matchWinner, 
  currentRound, 
  totalRounds, 
  gameState, 
  gameMode,
  onNextRound 
}) => {
  if (!showRoundResult || matchWinner) {
    return null;
  }

  const getRoundResultText = () => {
    if (gameState === GameState.draw) {
      return "This round was a draw!";
    } else if (gameState === GameState.playerXWins) {
      return gameMode === 'ai' ? '🎉 You won this round! 🎉' : '🎉 Player X won this round! 🎉';
    } else {
      return gameMode === 'ai' ? '🤖 AI won this round! 🤖' : '🎉 Player O won this round! 🎉';
    }
  };

  return (
    <div className="glass-effect p-6 my-5 rounded-2xl text-center border border-cyan-500 max-w-lg w-full animate-slideUp glow-cyan">
      <h3 className="m-0 mb-4 text-cyan-400 text-2xl font-bold">
        Round {currentRound} Complete! {currentRound === totalRounds ? '🏁' : '✅'}
      </h3>
      
      <p className="my-4 text-xl font-bold">{getRoundResultText()}</p>
      
      {currentRound < totalRounds ? (
        <button 
          onClick={onNextRound} 
          className="py-3 px-6 text-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white border-none rounded-xl cursor-pointer mt-4 transition-all duration-300 hover:from-blue-600 hover:to-purple-600 hover:scale-105 animate-gradient"
        >
          Start Round {currentRound + 1} ➡️
        </button>
      ) : (
        <p className="my-4 text-lg animate-pulse">Determining match winner...</p>
      )}
    </div>
  );
};

export default RoundResult;