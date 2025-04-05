import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  // Apply the theme on component mount and when darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [darkMode]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    // Save theme preference to localStorage
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Bhagirath Devani
        </Link>
        <div className="nav-controls">
          <button 
            className="theme-toggle-btn" 
            onClick={toggleTheme} 
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            <i className={darkMode ? 'fas fa-sun' : 'fas fa-moon'} />
          </button>
          <div className="menu-icon" onClick={toggleMenu}>
            <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-links" onClick={toggleMenu}>
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
