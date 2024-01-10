import React from 'react';
import './LandingPage.css'; // Make sure to create a CSS file for styling
import { Link } from 'react-router-dom';


const DiceGame = () => {
  return (
    <div className="dice-game-container">
      <div className="dice-game-content">
        <div className="dice-image-container">
          {/* Place your dice image here */}
          <img src="images/123-removebg-preview.png" alt="Dice" />
        </div>
        <div className="dice-info">
          <h2>DICE GAME</h2>
          <Link to="/play-now">
            <button>Play Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DiceGame;
