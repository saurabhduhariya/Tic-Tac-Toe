import React from 'react';

const MatchTypeSelector = ({ 
  totalRounds, 
  onRoundChange, 
  showCustomInput, 
  onToggleCustomInput,
  customRounds,
  onCustomRoundsChange,
  onApplyCustomRounds
}) => {
  return (
    <div className="mb-5">
      <h3 className="m-0 mb-4 text-blue-500 text-xl border-b-2 border-cyan-600 pb-2">Match Type</h3>
      <div className="flex flex-col gap-2.5">
        <button 
          onClick={() => onRoundChange(1)}
          className={`p-3 text-base border-2 border-cyan-600 bg-transparent text-white cursor-pointer rounded-lg transition-all duration-300 text-left hover:bg-cyan-600 hover:translate-x-1 ${
            totalRounds === 1 ? 'bg-cyan-600 font-bold shadow-[0_0_10px_rgba(0,116,166,0.5)]' : ''
          }`}
        >
          Single Game
        </button>
        <button 
          onClick={() => onRoundChange(3)}
          className={`p-3 text-base border-2 border-cyan-600 bg-transparent text-white cursor-pointer rounded-lg transition-all duration-300 text-left hover:bg-cyan-600 hover:translate-x-1 ${
            totalRounds === 3 ? 'bg-cyan-600 font-bold shadow-[0_0_10px_rgba(0,116,166,0.5)]' : ''
          }`}
        >
          Best of 3
        </button>
        <button 
          onClick={() => onRoundChange(5)}
          className={`p-3 text-base border-2 border-cyan-600 bg-transparent text-white cursor-pointer rounded-lg transition-all duration-300 text-left hover:bg-cyan-600 hover:translate-x-1 ${
            totalRounds === 5 ? 'bg-cyan-600 font-bold shadow-[0_0_10px_rgba(0,116,166,0.5)]' : ''
          }`}
        >
          Best of 5
        </button>
        <button 
          onClick={() => onRoundChange(7)}
          className={`p-3 text-base border-2 border-cyan-600 bg-transparent text-white cursor-pointer rounded-lg transition-all duration-300 text-left hover:bg-cyan-600 hover:translate-x-1 ${
            totalRounds === 7 ? 'bg-cyan-600 font-bold shadow-[0_0_10px_rgba(0,116,166,0.5)]' : ''
          }`}
        >
          Best of 7
        </button>
        <button 
          onClick={onToggleCustomInput}
          className={`p-3 text-base border-2 border-cyan-600 bg-transparent text-white cursor-pointer rounded-lg transition-all duration-300 text-left hover:bg-cyan-600 hover:translate-x-1 ${
            showCustomInput ? 'bg-cyan-600 font-bold shadow-[0_0_10px_rgba(0,116,166,0.5)]' : ''
          }`}
        >
          Custom
        </button>
      </div>
      
      {showCustomInput && (
        <div className="mt-4 flex flex-col gap-2.5">
          <input 
            type="number" 
            min="1" 
            max="100" 
            value={customRounds}
            onChange={(e) => onCustomRoundsChange(parseInt(e.target.value) || 1)}
            placeholder="Enter rounds"
            className="p-2.5 border-2 border-cyan-600 bg-gray-800 text-white rounded text-base focus:outline-none focus:border-blue-500 focus:shadow-[0_0_5px_rgba(84,104,255,0.5)]"
          />
          <button onClick={onApplyCustomRounds} className="py-2 px-4 bg-blue-500 text-white border-none rounded cursor-pointer text-sm transition-colors duration-300 hover:bg-blue-600">
            Apply
          </button>
        </div>
      )}
    </div>
  );
};

export default MatchTypeSelector;
