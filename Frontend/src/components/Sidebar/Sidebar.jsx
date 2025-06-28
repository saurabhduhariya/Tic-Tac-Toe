import React from 'react';
import MatchTypeSelector from './MatchTypeSelector';
import GameModeSelector from './GameModeSelector';
import MatchProgress from './MatchProgress';

const Sidebar = ({
  totalRounds,
  onRoundChange,
  showCustomInput,
  onToggleCustomInput,
  customRounds,
  onCustomRoundsChange,
  onApplyCustomRounds,
  
  gameMode,
  onGameModeChange,
  
  currentRound,
  playerXWins,
  playerOWins,
  onBackToSingleGame
}) => {
  return (
    <div className="sidebar">
      {totalRounds === 1 && (
        <MatchTypeSelector
          totalRounds={totalRounds}
          onRoundChange={onRoundChange}
          showCustomInput={showCustomInput}
          onToggleCustomInput={onToggleCustomInput}
          customRounds={customRounds}
          onCustomRoundsChange={onCustomRoundsChange}
          onApplyCustomRounds={onApplyCustomRounds}
        />
      )}

      {totalRounds > 1 && (
        <MatchProgress
          currentRound={currentRound}
          totalRounds={totalRounds}
          playerXWins={playerXWins}
          playerOWins={playerOWins}
          gameMode={gameMode}
          onBackToSingleGame={onBackToSingleGame}
        />
      )}

      <GameModeSelector
        gameMode={gameMode}
        onGameModeChange={onGameModeChange}
      />
    </div>
  );
};

export default Sidebar;
