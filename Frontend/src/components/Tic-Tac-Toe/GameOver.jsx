import React from 'react'
import GameState from './GameState'

function GameOver({gameState, gameMode}) {
 switch (gameState) {
    case GameState.inProgress:
        return<></>;
    case GameState.playerOWins:
        return<div className="game-over">
          {gameMode === 'ai' ? 'AI Wins!' : 'O Wins'}
        </div>
    case GameState.playerXWins:
        return<div className="game-over">
          {gameMode === 'ai' ? 'You Win!' : 'X Wins'}
        </div>
    case GameState.draw:
        return<div className="game-over">Draw</div>
    default:
        return<></>
 }
}

export default GameOver