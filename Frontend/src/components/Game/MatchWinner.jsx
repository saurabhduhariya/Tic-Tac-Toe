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
    <div className="bg-gray-700 p-6 my-5 rounded-xl text-center border-2 border-blue-500 max-w-lg w-full">
      <h3 className="m-0 mb-4 text-blue-500">{totalRounds === 1 ? 'Game Complete!' : 'Match Complete!'}</h3>
      <p className="my-4 text-lg">{getWinnerText()}</p>
      {totalRounds > 1 && (
        <p className="my-4 text-lg">Final Score: {playerXWins} - {playerOWins}</p>
      )}
      <button onClick={onMatchReset} className="py-3 px-6 text-lg bg-blue-500 text-white border-none rounded-md cursor-pointer mt-4 transition-all duration-300 hover:bg-blue-600 hover:-translate-y-0.5">
        {totalRounds === 1 ? 'New Game' : 'New Match'}
      </button>
    </div>
  );
};

export default MatchWinner;
