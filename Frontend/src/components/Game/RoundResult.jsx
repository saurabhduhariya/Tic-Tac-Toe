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
    <div className="round-result">
      <h3>Round {currentRound} Complete!</h3>
      <p>{getRoundResultText()}</p>
      {currentRound < totalRounds ? (
        <button onClick={onNextRound} className="next-round-button">
          Start Round {currentRound + 1}
        </button>
      ) : (
        <p>Determining match winner...</p>
      )}
    </div>
  );
};

export default RoundResult;
