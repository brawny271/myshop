import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
<div className="navbar">
      <ul className="navbar-menu">
        <li>New</li>
        <li className="active">Pre-Owned</li>
        <li>Just In</li>
        <li>Brands</li>
        <li>Women</li>
        <li>Men</li>
        <li>Kids</li>
        <li>Watches</li>
        <li>Jewellery</li>
        <li>Home</li>
        <li>Indie Luxe</li>
        <li>Le Prestige</li>
        <li>SALE</li>
        <li>Auctions</li>
      </ul>
      <button className="sell-button">Sell with us</button>
      <div className="navbar-icons">
        {/* Icons can be added here */}
      </div>
    </div>
  );
};

export default Navbar;