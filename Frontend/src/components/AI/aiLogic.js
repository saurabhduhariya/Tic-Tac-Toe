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

export {
  PLAYER_X,
  PLAYER_O,
  HUMAN_PLAYER,
  AI_PLAYER,
  winningCombinations,
  checkWinnerForAI,
  minimax,
  getBestMove
};
