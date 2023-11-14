import React from 'react';
import { Link } from 'react-router-dom';

function Lays() {
  return (
    <div>
      <img src="https://m.media-amazon.com/images/I/813axPlVxBL.jpg" alt="Lays" />
      <Link to="/">
        <button>Back to Vending Machine</button>
      </Link>
    </div>
  );
}

export default Lays;
