// src/components/Tic-Tac-Toe/Board.jsx
import React from "react";
import Tile from "./Tile";
import Strike from "./Strike";

function Board({ tiles, onTileClick, turn, strikeClass }) {
  return (
    <div className="grid grid-cols-3 grid-rows-3 cursor-pointer relative w-[300px] h-[300px] sm:w-[280px] sm:h-[280px] lg:w-[320px] lg:h-[320px] bg-gray-800/50 rounded-xl overflow-hidden shadow-xl">
      <Tile
        turn={turn}
        onClick={() => onTileClick(0)}
        value={tiles[0]}
        className="border-r-2 border-b-2 border-cyan-500/30"
      />
      <Tile
        turn={turn}
        onClick={() => onTileClick(1)}
        value={tiles[1]}
        className="border-r-2 border-b-2 border-cyan-500/30"
      />
      <Tile
        turn={turn}
        onClick={() => onTileClick(2)}
        value={tiles[2]}
        className="border-b-2 border-cyan-500/30"
      />
      <Tile
        turn={turn}
        onClick={() => onTileClick(3)}
        value={tiles[3]}
        className="border-r-2 border-b-2 border-cyan-500/30"
      />
      <Tile
        turn={turn}
        onClick={() => onTileClick(4)}
        value={tiles[4]}
        className="border-r-2 border-b-2 border-cyan-500/30"
      />
      <Tile
        turn={turn}
        onClick={() => onTileClick(5)}
        value={tiles[5]}
        className="border-b-2 border-cyan-500/30"
      />
      <Tile
        turn={turn}
        onClick={() => onTileClick(6)}
        value={tiles[6]}
        className="border-r-2 border-cyan-500/30"
      />
      <Tile
        turn={turn}
        onClick={() => onTileClick(7)}
        value={tiles[7]}
        className="border-r-2 border-cyan-500/30"
      />
      <Tile turn={turn} onClick={() => onTileClick(8)} value={tiles[8]} />
      <Strike strikeClass={strikeClass} />
    </div>
  );
}

export default Board;