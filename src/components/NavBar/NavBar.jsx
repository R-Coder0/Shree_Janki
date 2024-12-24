import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'; // Adjust the path based on your project structure
import './NavBar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close the mobile menu on page load or refresh
  useEffect(() => {
    const closeMenuOnRefresh = () => {
      setIsOpen(false);
    };
    closeMenuOnRefresh();
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>
      </div>
      <div className={`navbar-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <ul className={`navbar-nav ${isOpen ? 'open' : ''}`}>
        <li className="nav-item">
          <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/services" className="nav-link" onClick={closeMenu}>Services</Link>
        </li>
        <li className="nav-item">
          <Link to="/gallery" className="nav-link" onClick={closeMenu}>Gallery</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link" onClick={closeMenu}>About</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link" onClick={closeMenu}>Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
