import { Link } from 'react-router-dom';
import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/play" className="">
        <button className="btn btn-secondary">PLAY</button>
      </Link>

      <Link to="/create">
        <button className="btn btn-primary">CREATE</button>
      </Link>
    </nav>
  );
}

export default Navbar;
