import React, { useEffect, useState } from "react";
import Board from "./Board";
import GameState from "./GameState";
import Sidebar from "../Sidebar/Sidebar";
import GameStatus from "../Game/GameStatus";
import RoundResult from "../Game/RoundResult";
import MatchWinner from "../Game/MatchWinner";
import LoginLink from "../Auth/LoginLink";
import Reset from "./Reset";
import { useTheme } from "../../contexts/ThemeContext";
import { 
  PLAYER_X, 
  PLAYER_O, 
  HUMAN_PLAYER, 
  AI_PLAYER, 
  winningCombinations,
  getBestMove,
  getAIMove 
} from "../AI/aiLogic";
import { FaPalette } from 'react-icons/fa';

function checkWinner(tiles, setStrikeClass,setGameState){
  for(const { combo, strikeClass } of winningCombinations){
    const tileValue1 = tiles[combo[0]];
    const tileValue2 = tiles[combo[1]];
    const tileValue3 = tiles[combo[2]];

    if(tileValue1 !== null && tileValue1 === tileValue2 && tileValue1 === tileValue3){
      setStrikeClass(strikeClass);
      if(tileValue1 === PLAYER_O) {
        setGameState(GameState.playerOWins);
      }
      else {
        setGameState(GameState.playerXWins);
      }
    }
  }

  const areAllTilesFilled = tiles.every((tile)=> tile!==null);
  if(areAllTilesFilled ){
    setGameState(GameState.draw);
  }

  
}

function TicTacToe() {
  const { theme, themes, changeTheme, currentTheme } = useTheme();
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(PLAYER_X);
  const [strikeClass, setStrikeClass] = useState();
  const [gameState, setGameState] = useState(GameState.inProgress);
  const [gameMode, setGameMode] = useState('ai'); 
  const [aiDifficulty, setAiDifficulty] = useState('hard');
  const [showAIDifficultySelector, setShowAIDifficultySelector] = useState(false);
  const [isAiTurn, setIsAiTurn] = useState(false);
  const [timeFreezeActive, setTimeFreezeActive] = useState(false);
  const [timeFreezeUsed, setTimeFreezeUsed] = useState(false);
  const [freezeCountdown, setFreezeCountdown] = useState(0);
  const [showFloatingThemes, setShowFloatingThemes] = useState(false);

  const [totalRounds, setTotalRounds] = useState(1); 
  const [currentRound, setCurrentRound] = useState(1);
  const [playerXWins, setPlayerXWins] = useState(0); 
  const [playerOWins, setPlayerOWins] = useState(0); 
  const [matchWinner, setMatchWinner] = useState(null); 
  const [showRoundResult, setShowRoundResult] = useState(false); 
  const [customRounds, setCustomRounds] = useState(3); 
  const [showCustomInput, setShowCustomInput] = useState(false); 

  const handleTileClick = (index) => {
    if(gameState !== GameState.inProgress) return;
    if (tiles[index] !== null) return;
    if (gameMode === 'ai' && turn === AI_PLAYER) return;

    const newTiles = [...tiles];
    newTiles[index] = turn;
    setTiles(newTiles);
    
    if (turn === PLAYER_X) {
      setTurn(PLAYER_O);
    } else {
      setTurn(PLAYER_X);
    }
  };

  const handleReset = () => {
    setGameState(GameState.inProgress);
    setTiles(Array(9).fill(null));
    setTurn(PLAYER_X);
    setStrikeClass();
    setIsAiTurn(false);
    setShowRoundResult(false);
    setTimeFreezeActive(false);
    setTimeFreezeUsed(false);
    setFreezeCountdown(0);
  };

  const handleMatchReset = () => {
    handleReset();
    setCurrentRound(1);
    setPlayerXWins(0);
    setPlayerOWins(0);
    setMatchWinner(null);
  };

  const handleRoundComplete = (roundGameState) => {
    let newPlayerXWins = playerXWins;
    let newPlayerOWins = playerOWins;

    if (roundGameState === GameState.playerXWins) {
      newPlayerXWins += 1;
      setPlayerXWins(newPlayerXWins);
    } else if (roundGameState === GameState.playerOWins) {
      newPlayerOWins += 1;
      setPlayerOWins(newPlayerOWins);
    }

    if (totalRounds === 1) {
      if (roundGameState === GameState.playerXWins) {
        setMatchWinner(PLAYER_X);
      } else if (roundGameState === GameState.playerOWins) {
        setMatchWinner(PLAYER_O);
      } else {
        setMatchWinner('draw');
      }
    } else {
      const roundsToWin = Math.ceil(totalRounds / 2); 
      
      if (newPlayerXWins >= roundsToWin) {
        setMatchWinner(PLAYER_X);
      } else if (newPlayerOWins >= roundsToWin) {
        setMatchWinner(PLAYER_O);
      } else if (currentRound >= totalRounds) {
        if (newPlayerXWins > newPlayerOWins) {
          setMatchWinner(PLAYER_X);
        } else if (newPlayerOWins > newPlayerXWins) {
          setMatchWinner(PLAYER_O);
        } else {
          setMatchWinner('draw');
        }
      }
    }

    setShowRoundResult(true);
  };

  const handleNextRound = () => {
    if (currentRound < totalRounds && !matchWinner) {
      setCurrentRound(currentRound + 1);
      handleReset();
    }
  };

  const handleRoundChange = (rounds) => {
    setTotalRounds(rounds);
    setShowCustomInput(false); 
    handleMatchReset(); 
  };

  const handleCustomRounds = () => {
    if (customRounds > 0 && customRounds <= 100) {
      setTotalRounds(customRounds);
      setShowCustomInput(false);
      handleMatchReset();
    }
  };

  const toggleCustomInput = () => {
    setShowCustomInput(!showCustomInput);
  };

  const handleGameModeChange = (mode) => {
    setGameMode(mode);
    handleMatchReset();
  };

  const handleAIDifficultyChange = (difficulty) => {
    setAiDifficulty(difficulty);
  };

  const handleToggleAIDifficultySelector = (show) => {
    setShowAIDifficultySelector(show);
  };

  const handleTimeFreeze = () => {
    if (!timeFreezeUsed && gameMode === 'ai' && turn === AI_PLAYER && gameState === GameState.inProgress) {
      setTimeFreezeActive(true);
      setTimeFreezeUsed(true);
      setFreezeCountdown(3);
      
      // Start countdown
      const countdownInterval = setInterval(() => {
        setFreezeCountdown(prev => {
          if (prev <= 1) {
            clearInterval(countdownInterval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
  };

  const getThemeIcon = (themeName) => {
    switch (themeName) {
      case 'light': return '☀️';
      case 'dark': return '🌙';
      case 'halloween': return '🎃';
      case 'christmas': return '🎄';
      default: return '🎨';
    }
  };

  const toggleFloatingThemes = () => {
    setShowFloatingThemes(!showFloatingThemes);
  };

  useEffect(()=> {
    checkWinner(tiles,setStrikeClass,setGameState);
  },[tiles]);

  useEffect(() => {
    if (gameState !== GameState.inProgress && !showRoundResult && !matchWinner) {
      const timer = setTimeout(() => {
        handleRoundComplete(gameState);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [gameState, showRoundResult, matchWinner]);

  useEffect(() => {
    if (gameMode === 'ai' && turn === AI_PLAYER && gameState === GameState.inProgress) {
      setIsAiTurn(true);
      
      // Calculate delay: normal 1000ms + 3000ms if time freeze is active
      const delay = timeFreezeActive ? 4000 : 1000;
      
      const timer = setTimeout(() => {
        const bestMove = getAIMove([...tiles], aiDifficulty);
        if (bestMove !== -1) {
          const newTiles = [...tiles];
          newTiles[bestMove] = AI_PLAYER;
          setTiles(newTiles);
          setTurn(HUMAN_PLAYER);
        }
        setIsAiTurn(false);
        setTimeFreezeActive(false); // Reset time freeze after AI move
      }, delay);
      
      return () => clearTimeout(timer);
    }
  }, [turn, gameMode, tiles, gameState, aiDifficulty, timeFreezeActive]);

  // Close floating themes when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showFloatingThemes && !event.target.closest('.theme-selector') && !event.target.closest('.theme-button')) {
        setShowFloatingThemes(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showFloatingThemes]);


return (
    <div 
      className="w-full text-white m-0 p-0 font-sans min-h-screen"
      style={{ background: theme.background }}
    >
      {/* Desktop Login Button - Top Right */}
      <div className="hidden lg:block fixed top-4 right-4 z-40">
        <LoginLink />
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex gap-6 min-h-[calc(100vh-140px)] items-start p-6 box-border">{" "}
        <div className="w-72 flex-shrink-0">
          <div className="text-center mb-8">
            <h1 className={`text-transparent bg-clip-text text-4xl font-bold mb-2 tracking-wider ${theme.titleGradient}`}>
              TIC TAC TOE {theme.seasonal && theme.icon}
            </h1>
          </div>
          
          <Sidebar
            totalRounds={totalRounds}
            onRoundChange={handleRoundChange}
            showCustomInput={showCustomInput}
            onToggleCustomInput={toggleCustomInput}
            customRounds={customRounds}
            onCustomRoundsChange={setCustomRounds}
            onApplyCustomRounds={handleCustomRounds}
            gameMode={gameMode}
            onGameModeChange={handleGameModeChange}
            aiDifficulty={aiDifficulty}
            onAIDifficultyChange={handleAIDifficultyChange}
            showAIDifficultySelector={showAIDifficultySelector}
            onToggleAIDifficultySelector={handleToggleAIDifficultySelector}
            currentRound={currentRound}
            playerXWins={playerXWins}
            playerOWins={playerOWins}
            onBackToSingleGame={() => handleRoundChange(1)}
          />
        </div>

        <div className="flex-1 flex flex-col items-center justify-start min-w-0 pt-8 min-h-[calc(100vh-100px)]">
          <GameStatus
            gameState={gameState}
            gameMode={gameMode}
            turn={turn}
            showRoundResult={showRoundResult}
            matchWinner={matchWinner}
          />

          <div className="relative mb-6">
            <Board
              turn={turn}
              tiles={tiles}
              onTileClick={handleTileClick}
              strikeClass={strikeClass}
            />
          </div>

          {/* Time Freeze Power-up Button */}
          {gameMode === 'ai' && gameState === GameState.inProgress && (
            <div className="mb-4 flex justify-center">
              <button
                onClick={handleTimeFreeze}
                disabled={timeFreezeUsed || turn !== AI_PLAYER || !isAiTurn}
                className={`px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 flex items-center gap-2 shadow-lg
                  ${timeFreezeUsed 
                    ? 'bg-gray-600 text-gray-400 cursor-not-allowed border border-gray-500' 
                    : timeFreezeActive
                    ? `${theme.primary} text-white border ${theme.border} animate-pulse ${theme.glow}`
                    : turn === AI_PLAYER && isAiTurn
                    ? `${theme.secondary} text-white border ${theme.accentBorder} hover:scale-105 ${theme.secondaryGlow}`
                    : 'bg-gray-700 text-gray-300 border border-gray-600 cursor-not-allowed'
                  }`}
              >
                <span className="text-xl">🧊</span>
                {timeFreezeActive ? `FROZEN! ${freezeCountdown}s` : timeFreezeUsed ? 'USED' : 'TIME FREEZE'}
              </button>
            </div>
          )}

          <RoundResult
            showRoundResult={showRoundResult}
            matchWinner={matchWinner}
            currentRound={currentRound}
            totalRounds={totalRounds}
            gameState={gameState}
            gameMode={gameMode}
            onNextRound={handleNextRound}
          />

          <MatchWinner
            matchWinner={matchWinner}
            totalRounds={totalRounds}
            gameMode={gameMode}
            playerXWins={playerXWins}
            playerOWins={playerOWins}
            onMatchReset={handleMatchReset}
          />

          {gameState !== GameState.inProgress && !showRoundResult && !matchWinner && (
            <Reset gameState={gameState} onReset={handleReset} />
          )}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col min-h-screen p-4">
        {/* Header with Login Button on Right */}
        <div className="flex justify-between items-center mb-5">
          <h1 className={`text-transparent bg-clip-text text-3xl font-bold tracking-wider ${theme.titleGradient}`}>
            TIC TAC TOE {theme.seasonal && theme.icon}
          </h1>
          <div className="ml-4">
            <LoginLink />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <Sidebar
            totalRounds={totalRounds}
            onRoundChange={handleRoundChange}
            showCustomInput={showCustomInput}
            onToggleCustomInput={toggleCustomInput}
            customRounds={customRounds}
            onCustomRoundsChange={setCustomRounds}
            onApplyCustomRounds={handleCustomRounds}
            gameMode={gameMode}
            onGameModeChange={handleGameModeChange}
            aiDifficulty={aiDifficulty}
            onAIDifficultyChange={handleAIDifficultyChange}
            showAIDifficultySelector={showAIDifficultySelector}
            onToggleAIDifficultySelector={handleToggleAIDifficultySelector}
            currentRound={currentRound}
            playerXWins={playerXWins}
            playerOWins={playerOWins}
            onBackToSingleGame={() => handleRoundChange(1)}
            isMobile={true}
          />

          <div className="flex flex-col items-center">
            <GameStatus
              gameState={gameState}
              gameMode={gameMode}
              turn={turn}
              showRoundResult={showRoundResult}
              matchWinner={matchWinner}
            />

            <div className="relative mb-5">
              <Board
                turn={turn}
                tiles={tiles}
                onTileClick={handleTileClick}
                strikeClass={strikeClass}
              />
            </div>

            {/* Time Freeze Power-up Button - Mobile */}
            {gameMode === 'ai' && gameState === GameState.inProgress && (
              <div className="mb-4 flex justify-center">
                <button
                  onClick={handleTimeFreeze}
                  disabled={timeFreezeUsed || turn !== AI_PLAYER || !isAiTurn}
                  className={`px-5 py-2 rounded-xl font-bold text-xs transition-all duration-300 flex items-center gap-2 shadow-lg
                    ${timeFreezeUsed 
                      ? 'bg-gray-600 text-gray-400 cursor-not-allowed border border-gray-500' 
                      : timeFreezeActive
                      ? `${theme.primary} text-white border ${theme.border} animate-pulse ${theme.glow}`
                      : turn === AI_PLAYER && isAiTurn
                      ? `${theme.secondary} text-white border ${theme.accentBorder} hover:scale-105 ${theme.secondaryGlow}`
                      : 'bg-gray-700 text-gray-300 border border-gray-600 cursor-not-allowed'
                    }`}
                >
                  <span className="text-sm">🧊</span>
                  {timeFreezeActive ? `FROZEN! ${freezeCountdown}s` : timeFreezeUsed ? 'USED' : 'TIME FREEZE'}
                </button>
              </div>
            )}

            <RoundResult
              showRoundResult={showRoundResult}
              matchWinner={matchWinner}
              currentRound={currentRound}
              totalRounds={totalRounds}
              gameState={gameState}
              gameMode={gameMode}
              onNextRound={handleNextRound}
            />

            <MatchWinner
              matchWinner={matchWinner}
              totalRounds={totalRounds}
              gameMode={gameMode}
              playerXWins={playerXWins}
              playerOWins={playerOWins}
              onMatchReset={handleMatchReset}
            />

            {gameState !== GameState.inProgress && !showRoundResult && !matchWinner && (
              <Reset gameState={gameState} onReset={handleReset} />
            )}
          </div>
        </div>
      </div>
      
      {/* Floating Theme Selector */}
      {showFloatingThemes && (
        <div className="fixed bottom-20 right-5 z-20 animate-slideUp theme-selector">
          <div 
            className="backdrop-filter backdrop-blur-lg rounded-2xl p-4 border shadow-xl min-w-[200px]"
            style={{ 
              background: theme.cardBg,
              borderColor: theme.primaryColor,
              boxShadow: `0 8px 32px 0 rgba(0, 0, 0, 0.36), ${theme.glow}`
            }}
          >
            <h3 className="text-lg font-bold mb-3 text-center" style={{ color: theme.primaryColor }}>
              Select Theme
            </h3>
            <div className="space-y-2">
              {Object.entries(themes).map(([key, themeOption]) => (
                <button
                  key={key}
                  onClick={() => {
                    changeTheme(key);
                    setShowFloatingThemes(false);
                  }}
                  className={`w-full p-3 text-sm border rounded-xl transition-all duration-300 text-center font-medium flex items-center justify-center gap-2 hover:scale-105
                    ${currentTheme === key 
                      ? 'text-white border-2' 
                      : 'text-gray-300 border hover:bg-gray-700/30'}`}
                  style={{ 
                    backgroundColor: currentTheme === key ? theme.primaryColor : 'transparent',
                    borderColor: currentTheme === key ? theme.primaryColor : theme.borderColor,
                    boxShadow: currentTheme === key ? theme.glow : 'none'
                  }}
                >
                  <span className="text-lg">{getThemeIcon(key)}</span>
                  {themeOption.name}
                  {themeOption.seasonal && <span className="text-xs opacity-75">({themeOption.icon})</span>}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Theme Floating Button */}
      <button 
        onClick={toggleFloatingThemes}
        className="fixed bottom-5 right-5 p-3 rounded-full shadow-lg transition-all duration-300 z-10 hover:scale-110 theme-button"
        style={{ 
          backgroundColor: theme.primaryColor,
          color: theme.text,
          boxShadow: theme.glow
        }}
      >
        <FaPalette className="text-xl" />
      </button>
    </div>
  );
}

export default TicTacToe;