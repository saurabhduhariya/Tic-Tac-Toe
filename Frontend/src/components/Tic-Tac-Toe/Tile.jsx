// src/components/Tic-Tac-Toe/Tile.jsx
import React from 'react'
import { useTheme } from '../../contexts/ThemeContext';

function Tile({className, value, onClick, turn}) {
  const { theme } = useTheme();
  let hoverClass = null;
  if(value == null && turn != null){
    hoverClass = `${turn.toLowerCase()}-hover`;
  }
  
  return (
    <div 
      onClick={onClick} 
      className={`relative flex justify-center items-center ${className} ${hoverClass} ${theme.tileBg} transition-all duration-200 hover:opacity-80`}
    >
      {value && (
        <div className={`tile-content text-5xl sm:text-6xl font-bold ${value.toLowerCase()} animate-fadeIn`}>
          {value}
        </div>
      )}
    </div>
  )
}

export default Tile