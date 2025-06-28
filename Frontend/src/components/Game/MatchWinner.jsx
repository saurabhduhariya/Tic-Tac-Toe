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
      return "It's a Draw!";
    } else if (matchWinner === PLAYER_X) {
      return gameMode === 'ai' ? 'You Win!' : 'Player X Wins!';
    } else {
      return gameMode === 'ai' ? 'AI Wins!' : 'Player O Wins!';
    }
  };

  return (
    <div className="match-winner">
      <h2>🎉 {totalRounds === 1 ? 'GAME OVER' : 'MATCH WINNER'} 🎉</h2>
      <p>{getWinnerText()}</p>
      {totalRounds > 1 && (
        <div className="final-score">
          <p>Final Score: {playerXWins} - {playerOWins}</p>
        </div>
      )}
      <button onClick={onMatchReset} className="new-match-button">
        {totalRounds === 1 ? 'New Game' : 'New Match'}
      </button>
    </div>
  );
};

export default MatchWinner;
