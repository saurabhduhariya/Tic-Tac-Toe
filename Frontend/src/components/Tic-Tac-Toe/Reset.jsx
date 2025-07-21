// src/components/Tic-Tac-Toe/Reset.jsx
import React from 'react'
import GameState from './GameState'
import { useTheme } from '../../contexts/ThemeContext'

function Reset({gameState, onReset}) {
    const { theme } = useTheme();
    
    if(gameState == GameState.inProgress){
        return;
    }
  return (
    <button onClick={onReset} className={`mt-5 p-4 w-full ${theme.primary} text-white border-none rounded-xl cursor-pointer text-xl font-bold transition-all duration-300 hover:scale-105 ${theme.glow}`}>
        🔄 Play Again 🔄
    </button>
  )
}

export default Reset