import React from 'react';
import { PLAYER_X } from '../AI/aiLogic';

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
      return gameMode === 'ai' ? 'You won the match!' : 'Player X won the match!';
    } else {
      return gameMode === 'ai' ? 'AI won the match!' : 'Player O won the match!';
    }
  };

  return (
    <div className="round-result">
      <h3>{totalRounds === 1 ? 'Game Complete!' : 'Match Complete!'}</h3>
      <p>{getWinnerText()}</p>
      {totalRounds > 1 && (
        <p>Final Score: {playerXWins} - {playerOWins}</p>
      )}
      <button onClick={onMatchReset} className="next-round-button">
        {totalRounds === 1 ? 'New Game' : 'New Match'}
      </button>
    </div>
  );
};

export default MatchWinner;
