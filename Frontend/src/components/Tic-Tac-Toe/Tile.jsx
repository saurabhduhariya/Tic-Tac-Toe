import React from 'react'

function Tile({className,value,onClick,turn}) {
  let hoverClass = null;
  if(value == null && turn != null){
    hoverClass = `${turn.toLowerCase()}-hover`;
  }
  return (
    <div onClick={onClick} className={`text-white text-xl sm:text-2xl lg:text-2xl flex justify-center items-center w-[100px] h-[100px] sm:w-[93px] sm:h-[93px] lg:w-[100px] lg:h-[100px] ${className} ${hoverClass}`}>
       {value}
    </div>
  )
}

export default Tile