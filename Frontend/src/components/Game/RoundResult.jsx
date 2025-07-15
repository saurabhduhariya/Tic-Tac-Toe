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
      return "This round was a draw";
    } else if (gameState === GameState.playerXWins) {
      return gameMode === 'ai' ? 'You won this round!' : 'Player X won this round!';
    } else {
      return gameMode === 'ai' ? 'AI won this round!' : 'Player O won this round!';
    }
  };

  return (
    <div className="bg-gray-700 p-6 my-5 rounded-xl text-center border-2 border-blue-500 max-w-lg w-full">
      <h3 className="m-0 mb-4 text-blue-500">Round {currentRound} Complete!</h3>
      <p className="my-4 text-lg">{getRoundResultText()}</p>
      {currentRound < totalRounds ? (
        <button onClick={onNextRound} className="py-3 px-6 text-lg bg-blue-500 text-white border-none rounded-md cursor-pointer mt-4 transition-all duration-300 hover:bg-blue-600 hover:-translate-y-0.5">
          Start Round {currentRound + 1}
        </button>
      ) : (
        <p className="my-4 text-lg">Determining match winner...</p>
      )}
    </div>
  );
};

export default RoundResult;
