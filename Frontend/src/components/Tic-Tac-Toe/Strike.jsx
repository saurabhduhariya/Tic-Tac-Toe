import React from 'react'

function Strike({strikeClass}) {
  const getStrikeClasses = () => {
    const baseClasses = "absolute bg-orange-600";
    
    switch(strikeClass) {
      case 'strike-row-1':
        return `${baseClasses} w-full h-1 top-[15%]`;
      case 'strike-row-2':
        return `${baseClasses} w-full h-1 top-[48%]`;
      case 'strike-row-3':
        return `${baseClasses} w-full h-1 top-[83%]`;
      case 'strike-col-1':
        return `${baseClasses} h-full w-1 left-[15%]`;
      case 'strike-col-2':
        return `${baseClasses} h-full w-1 left-[48%]`;
      case 'strike-col-3':
        return `${baseClasses} h-full w-1 left-[83%]`;
      case 'strike-diag-1':
        return `${baseClasses} w-[90%] h-1 top-1/2 left-[5%] transform skew-y-45`;
      case 'strike-diag-2':
        return `${baseClasses} w-[90%] h-1 top-1/2 left-[5%] transform -skew-y-45`;
      default:
        return baseClasses;
    }
  };

  return (
    <div className={getStrikeClasses()}></div>
  )
}

export default Strike