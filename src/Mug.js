import React from 'react';
import { Link } from 'react-router-dom';

function Mug() {
  return (
    <div>
      <img src="https://m.media-amazon.com/images/I/81Y1aZ0DojL.jpg" alt="Mug" />
      <Link to="/">
        <button>Back to Vending Machine</button>
      </Link>
    </div>
  );
}

export default Mug;
