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
    <div className="w-70 flex-shrink-0 bg-gray-700 rounded-2xl p-5 border-2 border-cyan-600 h-fit mt-[5%] self-start">
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
