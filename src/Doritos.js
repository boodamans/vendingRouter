import React from 'react';
import { Link } from 'react-router-dom';

function Doritos() {
  return (
    <div>
      <img src="https://m.media-amazon.com/images/I/81Fef1T3GaL.jpg" alt="Doritos" />
      <Link to="/">
        <button>Back to Vending Machine</button>
      </Link>
    </div>
  );
}

export default Doritos;
