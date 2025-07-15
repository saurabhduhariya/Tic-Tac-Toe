import React from 'react'
import GameState from './GameState'

function Reset({gameState,onReset}) {
    if(gameState == GameState.inProgress){
        return;
    }
  return (
    <button onClick={onReset} className='mt-5 p-5 bg-cyan-600 text-white w-full text-2xl border-none rounded-lg cursor-pointer transition-all duration-300 hover:bg-cyan-700 hover:-translate-y-0.5'>Play Again</button>
  )
}

export default Reset