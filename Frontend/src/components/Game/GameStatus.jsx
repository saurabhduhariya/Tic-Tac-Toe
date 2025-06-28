import React from 'react';
import GameState from '../Tic-Tac-Toe/GameState';
import { HUMAN_PLAYER } from '../AI/aiLogic';

const GameStatus = ({ gameState, gameMode, turn, showRoundResult, matchWinner }) => {
  if (showRoundResult || matchWinner) {
    return null;
  }

  return (
    <div className="game-status">
      {gameMode === 'ai' && gameState === GameState.inProgress && (
        <p>
          {turn === HUMAN_PLAYER ? "Your turn (X)" : "AI is thinking..."}
        </p>
      )}
      {gameMode === 'human' && gameState === GameState.inProgress && (
        <p>Current turn: {turn}</p>
      )}
    </div>
  );
};

export default GameStatus;
