import React from 'react';
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Doritos from './Doritos';
import Lays from './Lays'
import Mug from './Mug'

function VendingMachine() {
  return (
    <BrowserRouter>
        <Link to="/doritos">
        <button>Get some doritos</button>
      </Link>
        <Link to="/lays">
        <button>Get some lays</button>
      </Link>
        <Link to="/mug">
        <button>MUG IT UP</button>
      </Link>
    <div>
      <img src="https://cdn.tatlerasia.com/tatlerasia/i/2023/06/28154705-catrina-farrell-0ka7d6tmnk0-unsplash_cover_1599x1201.jpeg" alt="Vending Machine" />
    <Routes>
        <Route path="/doritos" element={<Doritos />} />
        <Route path="/lays" element={<Lays />} />
        <Route path="/mug" element={<Mug />} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default VendingMachine;
