const PLAYER_X = "X";
const PLAYER_O = "O";
const HUMAN_PLAYER = PLAYER_X;
const AI_PLAYER = PLAYER_O;

const winningCombinations = [
  {combo:[0,1,2], strikeClass: "strike-row-1" },
  {combo:[3,4,5], strikeClass: "strike-row-2" },
  {combo:[6,7,8], strikeClass: "strike-row-3" },
  {combo:[0,3,6], strikeClass: "strike-col-1" },
  {combo:[1,4,7], strikeClass: "strike-col-2" },
  {combo:[2,5,8], strikeClass: "strike-col-3" },
  {combo:[0,4,8], strikeClass: "strike-diag-1"},
  {combo:[2,4,6], strikeClass: "strike-diag-2"}
];

function checkWinnerForAI(board) {
  for (const { combo } of winningCombinations) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  
  const isDraw = board.every(cell => cell !== null);
  if (isDraw) return 'draw';
  
  return null;
}

function minimax(board, depth, isMaximizing) {
  const result = checkWinnerForAI(board);
  
  if (result === AI_PLAYER) return 10 - depth;
  if (result === HUMAN_PLAYER) return depth - 10;
  if (result === 'draw') return 0;
  
  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < 9; i++) {
      if (board[i] === null) {
        board[i] = AI_PLAYER;
        const score = minimax(board, depth + 1, false);
        board[i] = null;
        bestScore = Math.max(score, bestScore);
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < 9; i++) {
      if (board[i] === null) {
        board[i] = HUMAN_PLAYER;
        const score = minimax(board, depth + 1, true);
        board[i] = null;
        bestScore = Math.min(score, bestScore);
      }
    }
    return bestScore;
  }
}

/**
 * AI Difficulty System for Tic-Tac-Toe
 * 
 * Easy Mode (80% random, 20% optimal):
 * - Primarily makes random moves to give the human player a good chance to win
 * - Occasionally makes smart moves to avoid being completely predictable
 * 
 * Medium Mode (50% random, 50% optimal):
 * - Balanced gameplay that provides a moderate challenge
 * - Equal mix of random and strategic moves
 * 
 * Hard Mode (100% optimal):
 * - Uses minimax algorithm for perfect play
 * - Will never lose, and will win whenever possible
 * - This is the original AI implementation
 */

// Get a random available move for easy difficulty
function getRandomMove(board) {
  const availableMoves = [];
  for (let i = 0; i < 9; i++) {
    if (board[i] === null) {
      availableMoves.push(i);
    }
  }
  return availableMoves.length > 0 
    ? availableMoves[Math.floor(Math.random() * availableMoves.length)]
    : -1;
}

// Check for immediate winning move or blocking move (used in medium difficulty)
function getStrategicMove(board, player) {
  // First, check if we can win
  for (let i = 0; i < 9; i++) {
    if (board[i] === null) {
      board[i] = player;
      if (checkWinnerForAI(board) === player) {
        board[i] = null;
        return i;
      }
      board[i] = null;
    }
  }
  
  // Then, check if we need to block opponent
  const opponent = player === AI_PLAYER ? HUMAN_PLAYER : AI_PLAYER;
  for (let i = 0; i < 9; i++) {
    if (board[i] === null) {
      board[i] = opponent;
      if (checkWinnerForAI(board) === opponent) {
        board[i] = null;
        return i;
      }
      board[i] = null;
    }
  }
  
  return -1; // No immediate strategic move found
}

// Get optimal move using minimax algorithm (hard difficulty)
function getBestMove(board) {
  let bestScore = -Infinity;
  let bestMove = -1;
  
  for (let i = 0; i < 9; i++) {
    if (board[i] === null) {
      board[i] = AI_PLAYER;
      const score = minimax(board, 0, false);
      board[i] = null;
      
      if (score > bestScore) {
        bestScore = score;
        bestMove = i;
      }
    }
  }
  
  return bestMove;
}

// Get move based on difficulty level
function getAIMove(board, difficulty = 'hard') {
  switch (difficulty) {
    case 'easy':
      // Easy: 80% random moves, 20% optimal moves
      return Math.random() < 0.8 ? getRandomMove(board) : getBestMove(board);
    
    case 'medium':
      // Medium: Strategic play with some randomness
      // First try strategic moves (win/block), then 50/50 between optimal and random
      const strategicMove = getStrategicMove(board, AI_PLAYER);
      if (strategicMove !== -1) {
        return strategicMove;
      }
      return Math.random() < 0.5 ? getRandomMove(board) : getBestMove(board);
    
    case 'hard':
    default:
      // Hard: Always optimal moves
      return getBestMove(board);
  }
}

export {
  PLAYER_X,
  PLAYER_O,
  HUMAN_PLAYER,
  AI_PLAYER,
  winningCombinations,
  checkWinnerForAI,
  minimax,
  getBestMove,
  getRandomMove,
  getStrategicMove,
  getAIMove
};
