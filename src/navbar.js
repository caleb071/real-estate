import React from 'react';
import { Link } from 'react-router-dom';
import heros from './assets/heros.png';

const Navbar = () => {
  return (
    <>
      <div className="hero-section">
        <Link to="/register">
          <button>Login</button>
        </Link>
      </div>

      <div className="hero-section2">
        <img src={heros} alt="Hero Logo" />
        <i className="fa-solid fa-bars"></i>
      </div>
    </>
  );
};

export default Navbar;