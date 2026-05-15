import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { MdKeyboardArrowDown } from 'react-icons/md';

const Navbar = () => {
  return (
    <header className="navbar-container">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo" style={{ textDecoration: 'none' }}>
          <div className="logo-icon">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 22H22L12 2Z" fill="#007aff"/>
              <path d="M12 2L2 22H12V2Z" fill="#0056b3"/>
            </svg>
          </div>
          <span className="logo-text">nexlifly</span>
        </Link>
        
        <nav className="navbar-links">
          <Link to="/" className="nav-link">Capabilities <MdKeyboardArrowDown className="nav-arrow" /></Link>
          <Link to="/" className="nav-link">Case Studies</Link>
          <Link to="/about" className="nav-link">About Us <MdKeyboardArrowDown className="nav-arrow" /></Link>
          <Link to="/" className="nav-link">Insights</Link>
          <Link to="/" className="nav-link">Careers <MdKeyboardArrowDown className="nav-arrow" /></Link>
        </nav>

        <div className="navbar-cta">
          <a href="#" className="btn-quote">Get a Quote <span className="btn-arrow">›</span></a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
