import React from 'react'
import GameState from './GameState'

function GameOver({gameState, gameMode}) {
 switch (gameState) {
    case GameState.inProgress:
        return<></>;
    case GameState.playerOWins:
        return<div className="text-center border-8 border-dotted border-blue-500 p-2.5 mt-5 text-2xl">
          {gameMode === 'ai' ? 'AI Wins!' : 'O Wins'}
        </div>
    case GameState.playerXWins:
        return<div className="text-center border-8 border-dotted border-blue-500 p-2.5 mt-5 text-2xl">
          {gameMode === 'ai' ? 'You Win!' : 'X Wins'}
        </div>
    case GameState.draw:
        return<div className="text-center border-8 border-dotted border-blue-500 p-2.5 mt-5 text-2xl">Draw</div>
    default:
        return<></>
 }
}

export default GameOver