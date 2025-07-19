// src/components/Tic-Tac-Toe/GameOver.jsx
import React from 'react'
import GameState from './GameState'

function GameOver({gameState, gameMode}) {
 switch (gameState) {
    case GameState.inProgress:
        return<></>;
    case GameState.playerOWins:
        return <div className="text-center border-4 border-dashed border-red-500/50 p-4 mt-5 text-2xl rounded-xl bg-gray-800/50 animate-pulse">
          <span className="text-red-400 font-bold">{gameMode === 'ai' ? 'AI WINS! 🤖' : 'O WINS! 🎉'}</span>
        </div>
    case GameState.playerXWins:
        return <div className="text-center border-4 border-dashed border-blue-500/50 p-4 mt-5 text-2xl rounded-xl bg-gray-800/50 animate-pulse">
          <span className="text-blue-400 font-bold">{gameMode === 'ai' ? 'YOU WIN! 🏆' : 'X WINS! 🎉'}</span>
        </div>
    case GameState.draw:
        return <div className="text-center border-4 border-dashed border-yellow-500/50 p-4 mt-5 text-2xl rounded-xl bg-gray-800/50 animate-pulse">
          <span className="text-yellow-400 font-bold">DRAW! 🤝</span>
        </div>
    default:
        return<></>
 }
}

export default GameOver