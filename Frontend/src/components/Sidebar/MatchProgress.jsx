import React from 'react';

const MatchProgress = ({ 
  currentRound, 
  totalRounds, 
  playerXWins, 
  playerOWins, 
  gameMode,
  onBackToSingleGame 
}) => {
  return (
    <div className="sidebar-section">
      <h3>Match Progress</h3>
      <div className="round-info">
        <p>Round {currentRound} of {totalRounds}</p>
      </div>
      <div className="scoreboard">
        <div className="score-row">
          <span className="player-name">
            {gameMode === 'ai' ? 'You (X)' : 'Player X'}
          </span>
          <span className="score-number">{playerXWins}</span>
        </div>
        <div className="score-row">
          <span className="player-name">
            {gameMode === 'ai' ? 'AI (O)' : 'Player O'}
          </span>
          <span className="score-number">{playerOWins}</span>
        </div>
      </div>
      
      <button 
        onClick={onBackToSingleGame}
        className="round-buttons"
        style={{marginTop: '15px', width: '100%'}}
      >
        Back to Single Game
      </button>
    </div>
  );
};

export default MatchProgress;
