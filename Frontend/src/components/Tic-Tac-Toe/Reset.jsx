// src/components/Tic-Tac-Toe/Reset.jsx
import React from 'react'
import GameState from './GameState'

function Reset({gameState, onReset}) {
    if(gameState == GameState.inProgress){
        return;
    }
  return (
    <button onClick={onReset} className='mt-5 p-4 w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white border-none rounded-xl cursor-pointer text-xl font-bold transition-all duration-300 hover:from-cyan-700 hover:to-blue-700 hover:scale-105'>
        🔄 Play Again 🔄
    </button>
  )
}

export default Reset