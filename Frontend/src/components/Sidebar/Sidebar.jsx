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
  onBackToSingleGame,
  isMobile = false
}) => {
  return (
    <div className="w-full lg:w-70 lg:flex-shrink-0 bg-gray-700 rounded-2xl p-3 lg:p-5 border-2 border-cyan-600 h-fit lg:mt-[5%] lg:self-start">
      {totalRounds === 1 && (
        <MatchTypeSelector
          totalRounds={totalRounds}
          onRoundChange={onRoundChange}
          showCustomInput={showCustomInput}
          onToggleCustomInput={onToggleCustomInput}
          customRounds={customRounds}
          onCustomRoundsChange={onCustomRoundsChange}
          onApplyCustomRounds={onApplyCustomRounds}
          isMobile={isMobile}
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
          isMobile={isMobile}
        />
      )}

      <GameModeSelector
        gameMode={gameMode}
        onGameModeChange={onGameModeChange}
        isMobile={isMobile}
      />
    </div>
  );
};

export default Sidebar;
