import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='navbar'>
      <img src="assets/logo_1.png" alt="" className='logo' />

      <ul className={menuOpen ? "open" : ""}>
        <li><NavLink to="/" className="navbar_list_item">Home</NavLink></li>
        <li><NavLink to="/about" className="navbar_list_item">About</NavLink></li>
        <li><NavLink to="/contact" className="navbar_list_item">Contact</NavLink></li>
        <li><NavLink to="/reservations" className="navbar_list_item">Reservations</NavLink></li>
      </ul>

      <div className={`menu ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Navbar;
