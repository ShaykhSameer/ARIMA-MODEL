import React from 'react';
import '../Styles/nav.css';
import logo from'../logo.png';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo}></img> Arima Algorithm</div>
      <ul className="nav-list">
        <li className="nav-item">
          <a href="/" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
          <a href="/about" className="nav-link">About</a>
        </li>
        <li className="nav-item">
          <a href="/services" className="nav-link">Services</a>
        </li>
        <li className="nav-item">
          <a href="/contact" className="nav-link">Contact</a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link">Log Out</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
