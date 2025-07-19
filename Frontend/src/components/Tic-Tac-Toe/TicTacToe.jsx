import React, { useEffect, useState } from "react";
import Board from "./Board";
import GameState from "./GameState";
import Sidebar from "../Sidebar/Sidebar";
import GameStatus from "../Game/GameStatus";
import RoundResult from "../Game/RoundResult";
import MatchWinner from "../Game/MatchWinner";
import LoginLink from "../Auth/LoginLink";
import Reset from "./Reset";
import { 
  PLAYER_X, 
  PLAYER_O, 
  HUMAN_PLAYER, 
  AI_PLAYER, 
  winningCombinations,
  getBestMove 
} from "../AI/aiLogic";
import { FaCog } from 'react-icons/fa';

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
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(PLAYER_X);
  const [strikeClass, setStrikeClass] = useState();
  const [gameState, setGameState] = useState(GameState.inProgress);
  const [gameMode, setGameMode] = useState('ai'); 
  const [isAiTurn, setIsAiTurn] = useState(false);

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
      const timer = setTimeout(() => {
        const bestMove = getBestMove([...tiles]);
        if (bestMove !== -1) {
          const newTiles = [...tiles];
          newTiles[bestMove] = AI_PLAYER;
          setTiles(newTiles);
          setTurn(HUMAN_PLAYER);
        }
        setIsAiTurn(false);
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [turn, gameMode, tiles, gameState]);


return (
    <div className="w-full text-white m-0 p-0 font-sans min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Desktop Login Button - Top Right */}
      <div className="hidden lg:block fixed top-4 right-4 z-40">
        <LoginLink />
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex gap-6 min-h-[calc(100vh-140px)] items-start p-6 box-border">  
        <div className="w-72 flex-shrink-0">
          <div className="text-center mb-8">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-4xl font-bold mb-2 tracking-wider">
              TIC TAC TOE
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
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-3xl font-bold tracking-wider">
            TIC TAC TOE
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
      
      {/* Settings Floating Button */}
      <button 
        onClick={() => setShowCustomInput(!showCustomInput)}
        className="fixed bottom-5 right-5 p-3 bg-cyan-700 text-white rounded-full shadow-lg hover:bg-cyan-600 transition-all duration-300 z-10"
      >
        <FaCog className="text-xl" />
      </button>
    </div>
  );
}

export default TicTacToe;