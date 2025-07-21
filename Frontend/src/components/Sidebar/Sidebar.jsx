// src/components/Sidebar/Sidebar.jsx
import React from 'react';
import MatchTypeSelector from './MatchTypeSelector';
import GameModeSelector from './GameModeSelector';
import MatchProgress from './MatchProgress';
import { useTheme } from '../../contexts/ThemeContext';

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
  aiDifficulty,
  onAIDifficultyChange,
  showAIDifficultySelector,
  onToggleAIDifficultySelector,
  
  currentRound,
  playerXWins,
  playerOWins,
  onBackToSingleGame,
  isMobile = false
}) => {
  const { theme } = useTheme();
  
  return (
    <div 
      className={`w-full lg:w-72 lg:flex-shrink-0 rounded-2xl p-4 lg:p-5 h-fit lg:mt-[5%] lg:self-start backdrop-filter backdrop-blur-lg border ${theme.border} ${isMobile ? 'mb-5' : ''}`}
      style={{ 
        background: theme.cardBg,
        boxShadow: `0 8px 32px 0 rgba(0, 0, 0, 0.36), ${theme.glow}`
      }}
    >
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
        aiDifficulty={aiDifficulty}
        onAIDifficultyChange={onAIDifficultyChange}
        showAIDifficultySelector={showAIDifficultySelector}
        onToggleAIDifficultySelector={onToggleAIDifficultySelector}
        isMobile={isMobile}
      />
    </div>
  );
};

export default Sidebar;