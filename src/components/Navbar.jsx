import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { MdKeyboardArrowDown } from 'react-icons/md';
import logo from '../assets/nexliflyLOGO.png';

const Navbar = () => {
  const location = useLocation();
  const isDarkNav = location.pathname === '/works' || location.pathname === '/about';

  return (
    <header className={`navbar-container ${isDarkNav ? 'dark-navbar' : ''}`}>
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Nexlifly" className="main-logo-img" />
        </Link>

        <nav className="navbar-links">
          <div className="nav-item capabilities-dropdown">
            <Link to="/" className="nav-link">
              Capabilities <MdKeyboardArrowDown className="nav-arrow" />
            </Link>

            {/* Mega Menu Dropdown */}
            <div className="mega-menu">
              <div className="mega-menu-inner">
                {/* Left Side: Intro */}
                <div className="mega-left">
                  <div className="capabilities-badge">
                    <span className="dot"></span> Capabilities
                  </div>
                  <h2 className="mega-heading">
                    Empowering digital growth with smart, scalable, and secure solutions.
                  </h2>
                  <a href="https://calendly.com/nexlifly2/30min" target="_blank" rel="noopener noreferrer" className="mega-cta">
                    Schedule a Consultation <span className="arrow">›</span>
                  </a>
                </div>

                {/* Right Side: List */}
                <div className="mega-right">
                  <ul className="mega-service-list">
                    <li><Link to="/capabilities/web-development">Web Development</Link></li>
                    <li><Link to="/capabilities/app-development">App Development</Link></li>
                    <li><Link to="/capabilities/software-development">Software Development</Link></li>
                    <li><Link to="/capabilities/aws-devops">AWS & DevOps</Link></li>
                    <li><Link to="/capabilities/hosting-server">Hosting & Server Management</Link></li>
                    <li><Link to="/capabilities/digital-marketing">Digital Marketing</Link></li>
                    <li><Link to="/capabilities/ai-chatbots">AI & RAG Chatbots</Link></li>
                    <li><Link to="/capabilities/ivr-solutions">IVR Solutions</Link></li>
                    <li><Link to="/capabilities/api-integrations">API Integrations</Link></li>
                    <li><Link to="/capabilities/ecommerce-solutions">E-Commerce Solutions</Link></li>
                    <li><Link to="/capabilities/ai-automation">AI & Automation</Link></li>
                    <li><Link to="/capabilities/security-maintenance">Security & Maintenance</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <Link to="/works" className="nav-link">Works</Link>
          <Link to="/about" className="nav-link">About Us <MdKeyboardArrowDown className="nav-arrow" /></Link>
        </nav>

        <div className="navbar-cta">
          <Link to="/contact-us" className="btn-quote">Get a Quote <span className="btn-arrow">›</span></Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
