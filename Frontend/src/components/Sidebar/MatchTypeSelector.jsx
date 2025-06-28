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
    <div className="sidebar-section">
      <h3>Match Type</h3>
      <div className="round-buttons">
        <button 
          onClick={() => onRoundChange(1)}
          className={totalRounds === 1 ? 'active' : ''}
        >
          Single Game
        </button>
        <button 
          onClick={() => onRoundChange(3)}
          className={totalRounds === 3 ? 'active' : ''}
        >
          Best of 3
        </button>
        <button 
          onClick={() => onRoundChange(5)}
          className={totalRounds === 5 ? 'active' : ''}
        >
          Best of 5
        </button>
        <button 
          onClick={() => onRoundChange(7)}
          className={totalRounds === 7 ? 'active' : ''}
        >
          Best of 7
        </button>
        <button 
          onClick={onToggleCustomInput}
          className={showCustomInput ? 'active' : ''}
        >
          Custom
        </button>
      </div>
      
      {showCustomInput && (
        <div className="custom-input">
          <input 
            type="number" 
            min="1" 
            max="100" 
            value={customRounds}
            onChange={(e) => onCustomRoundsChange(parseInt(e.target.value) || 1)}
            placeholder="Enter rounds"
          />
          <button onClick={onApplyCustomRounds} className="apply-btn">
            Apply
          </button>
        </div>
      )}
    </div>
  );
};

export default MatchTypeSelector;
