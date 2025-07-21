// src/components/Game/GameStatus.jsx
import React from 'react';
import GameState from '../Tic-Tac-Toe/GameState';
import { HUMAN_PLAYER } from '../AI/aiLogic';
import { useTheme } from '../../contexts/ThemeContext';

const GameStatus = ({ gameState, gameMode, turn, showRoundResult, matchWinner }) => {
  const { theme } = useTheme();
  
  if (showRoundResult || matchWinner) {
    return null;
  }

  return (
    <div className="text-center my-4 lg:my-6 text-lg lg:text-xl h-8 flex items-center justify-center px-4 animate-fadeIn">
      {gameMode === 'ai' && gameState === GameState.inProgress && (
        <p className={`m-0 font-bold transition-all`} style={{ color: turn === HUMAN_PLAYER ? theme.primaryColor : theme.secondaryColor }}>
          {turn === HUMAN_PLAYER 
            ? <span className="flex items-center gap-2">Your turn <span className="text-3xl animate-pulse">✍️</span></span>
            : <span className="flex items-center gap-2">AI is thinking <span className="text-xl">🤖</span></span>
          }
        </p>
      )}
      {gameMode === 'human' && gameState === GameState.inProgress && (
        <p className="m-0 font-bold" style={{ color: theme.primaryColor }}>
          Current turn: <span className="text-2xl">{turn}</span>
        </p>
      )}
    </div>
  );
};

export default GameStatus;