// src/components/Tic-Tac-Toe/Strike.jsx
import React from 'react'

function Strike({strikeClass}) {
  const getStrikeClasses = () => {
    const baseClasses = "absolute bg-gradient-to-r from-amber-400 to-orange-500 h-1.5 rounded-full z-10";
    
    switch(strikeClass) {
      case 'strike-row-1':
        return `${baseClasses} w-[90%] top-[16%] left-[5%]`;
      case 'strike-row-2':
        return `${baseClasses} w-[90%] top-[49%] left-[5%]`;
      case 'strike-row-3':
        return `${baseClasses} w-[90%] top-[82%] left-[5%]`;
      case 'strike-col-1':
        return `${baseClasses} h-[90%] w-1.5 left-[16%] top-[5%]`;
      case 'strike-col-2':
        return `${baseClasses} h-[90%] w-1.5 left-[49%] top-[5%]`;
      case 'strike-col-3':
        return `${baseClasses} h-[90%] w-1.5 left-[82%] top-[5%]`;
      case 'strike-diag-1':
        return `${baseClasses} w-[120%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45`;
      case 'strike-diag-2':
        return `${baseClasses} w-[120%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45`;
      default:
        return baseClasses;
    }
  };

  return (
    <div className={getStrikeClasses()}></div>
  )
}

export default Strike