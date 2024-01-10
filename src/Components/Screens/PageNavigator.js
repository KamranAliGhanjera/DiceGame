// PageNavigator.js
import React from 'react';
import { Link } from 'react-router-dom';

const PageNavigator = () => {
  return (
    <div>
      <h2>Page Navigator</h2>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          {/* Add more links as needed */}
        </ul>
      </nav>
    </div>
  );
};

export default PageNavigator;
