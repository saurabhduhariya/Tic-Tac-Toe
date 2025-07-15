import React from "react";
import Tile from "./Tile";
import Strike from "./Strike";
import GameOver from "./GameOver";

function Board({ tiles, onTileClick, turn ,strikeClass }) {
  return (
    <div className="grid grid-cols-3 grid-rows-3 cursor-pointer relative w-[300px] h-[300px]">
      <Tile
        turn = {turn}
        onClick={() => onTileClick(0)}
        value={tiles[0]}
        className="border-r-[0.2em] border-b-[0.2em] border-cyan-600"
      />
      <Tile
        turn = {turn}
        onClick={() => onTileClick(1)}
        value={tiles[1]}
        className="border-r-[0.2em] border-b-[0.2em] border-cyan-600"
      />
      <Tile
        turn = {turn}
        onClick={() => onTileClick(2)}
        value={tiles[2]}
        className="border-b-[0.2em] border-cyan-600"
      />
      <Tile
        turn = {turn}
        onClick={() => onTileClick(3)}
        value={tiles[3]}
        className="border-r-[0.2em] border-b-[0.2em] border-cyan-600"
      />
      <Tile
        turn = {turn}
        onClick={() => onTileClick(4)}
        value={tiles[4]}
        className="border-r-[0.2em] border-b-[0.2em] border-cyan-600"
      />
      <Tile
        turn = {turn}
        onClick={() => onTileClick(5)}
        value={tiles[5]}
        className="border-b-[0.2em] border-cyan-600"
      />
      <Tile
        turn = {turn}
        onClick={() => onTileClick(6)}
        value={tiles[6]}
        className="border-r-[0.2em] border-cyan-600"
      />
      <Tile
        turn = {turn}
        onClick={() => onTileClick(7)}
        value={tiles[7]}
        className="border-r-[0.2em] border-cyan-600"
      />
      <Tile turn = {turn} onClick={() => onTileClick(8)} value={tiles[8]}/>
      <Strike strikeClass={strikeClass} />
    </div>
  );
}

export default Board;
