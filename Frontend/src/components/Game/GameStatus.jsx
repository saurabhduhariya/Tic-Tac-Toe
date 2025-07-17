import React from 'react';
import GameState from '../Tic-Tac-Toe/GameState';
import { HUMAN_PLAYER } from '../AI/aiLogic';

const GameStatus = ({ gameState, gameMode, turn, showRoundResult, matchWinner }) => {
  if (showRoundResult || matchWinner) {
    return null;
  }

  return (
    <div className="text-center my-3 lg:my-5 text-lg lg:text-xl h-7.5 flex items-center justify-center px-4">
      {gameMode === 'ai' && gameState === GameState.inProgress && (
        <p className="m-0 text-blue-500 font-bold">
          {turn === HUMAN_PLAYER ? "Your turn (X)" : "AI is thinking..."}
        </p>
      )}
      {gameMode === 'human' && gameState === GameState.inProgress && (
        <p className="m-0 text-blue-500 font-bold">Current turn: {turn}</p>
      )}
    </div>
  );
};

export default GameStatus;
