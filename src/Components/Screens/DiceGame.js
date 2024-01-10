// DiceGamePage.js
import React, { useState } from 'react';
import './DiceGamePage.css';

const DiceGamePage = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [rolledNumber, setRolledNumber] = useState(null);
  const [error, setError] = useState('');

  const handleSelectNumber = (number) => {
    setSelectedNumber(number);
  };

  const handleRollDice = () => {
    if (selectedNumber === null) {
      setError('Please select a number before rolling.');
      return;
    }

    // Simulate rolling a dice and generate a random number between 1 and 6
    const randomRoll = Math.floor(Math.random() * 6) + 1;

    // Update the rolled number state
    setRolledNumber(randomRoll);

    // Update the score based on the user's selection
    if (selectedNumber === randomRoll) {
      setScore(score + 2);
    } else {
      setScore(score - 2);
    }

    // Clear the error
    setError('');
  };

  const handleResetScore = () => {
    setScore(0);
    setSelectedNumber(null);
    setRolledNumber(null);
    setError('');
  };

  const handleShowRules = () => {
    // Add logic to show rules or navigate to rules page
  };

  return (
    <div className="dice-game-page-container">
      <div className="score-section">
        <div className={`score-box ${selectedNumber === 1 ? 'selected' : ''}`} onClick={() => handleSelectNumber(1)}>
          <p>1</p>
        </div>
        <div className={`score-box ${selectedNumber === 2 ? 'selected' : ''}`} onClick={() => handleSelectNumber(2)}>
          <p>2</p>
        </div>
        <div className={`score-box ${selectedNumber === 3 ? 'selected' : ''}`} onClick={() => handleSelectNumber(3)}>
          <p>3</p>
        </div>
        <div className={`score-box ${selectedNumber === 4 ? 'selected' : ''}`} onClick={() => handleSelectNumber(4)}>
          <p>4</p>
        </div>
        <div className={`score-box ${selectedNumber === 5 ? 'selected' : ''}`} onClick={() => handleSelectNumber(5)}>
          <p>5</p>
        </div>
        <div className={`score-box ${selectedNumber === 6 ? 'selected' : ''}`} onClick={() => handleSelectNumber(6)}>
          <p>6</p>
        </div>
        <div className="score-info">
          <p>Score: {score}</p>
          <p>Total Score</p>
        </div>
      </div>

      <div className="image-section">
        {/* Place your image here */}
        <div className="dice-container" onClick={handleRollDice}>
          <img
            src={`images/cubes${rolledNumber || 1}.jpeg`}
            alt="Dice"
          />
          {rolledNumber && <div className="rolled-number">{rolledNumber}</div>}
        </div>
        <p>Click on the Dice to roll</p>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button onClick={handleResetScore}>Reset Score</button>
        <button onClick={handleShowRules}>Show Rules</button>
      </div>
    </div>
  );
};

export default DiceGamePage;
