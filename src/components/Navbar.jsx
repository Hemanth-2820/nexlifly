import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { MdKeyboardArrowDown, MdClose } from 'react-icons/md';
import { HiMenuAlt3 } from 'react-icons/hi';
import logo from '../assets/nexliflyLOGO.png';

const Navbar = () => {
  const location = useLocation();
  const isDarkNav = location.pathname === '/works' || location.pathname === '/about';
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

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
                    <li><Link to="/capabilities/aws-devops">AWS &amp; DevOps</Link></li>
                    <li><Link to="/capabilities/hosting-server">Hosting &amp; Server Management</Link></li>
                    <li><Link to="/capabilities/digital-marketing">Digital Marketing</Link></li>
                    <li><Link to="/capabilities/ai-chatbots">AI &amp; RAG Chatbots</Link></li>
                    <li><Link to="/capabilities/ivr-solutions">IVR Solutions</Link></li>
                    <li><Link to="/capabilities/api-integrations">API Integrations</Link></li>
                    <li><Link to="/capabilities/ecommerce-solutions">E-Commerce Solutions</Link></li>
                    <li><Link to="/capabilities/ai-automation">AI &amp; Automation</Link></li>
                    <li><Link to="/capabilities/security-maintenance">Security &amp; Maintenance</Link></li>
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

        {/* Hamburger Button (mobile only) */}
        <button className="hamburger-btn" onClick={() => setMobileOpen(true)} aria-label="Open menu">
          <HiMenuAlt3 />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-overlay ${mobileOpen ? 'active' : ''}`} onClick={closeMobile}></div>
      <nav className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <Link to="/" className="navbar-logo" onClick={closeMobile}>
            <img src={logo} alt="Nexlifly" className="mobile-logo-img" />
          </Link>
          <button className="mobile-close-btn" onClick={closeMobile} aria-label="Close menu">
            <MdClose />
          </button>
        </div>
        <div className="mobile-menu-links">
          <span className="mobile-section-label">Capabilities</span>
          <Link to="/capabilities/web-development" onClick={closeMobile}>Web Development</Link>
          <Link to="/capabilities/app-development" onClick={closeMobile}>App Development</Link>
          <Link to="/capabilities/software-development" onClick={closeMobile}>Software Development</Link>
          <Link to="/capabilities/aws-devops" onClick={closeMobile}>AWS &amp; DevOps</Link>
          <Link to="/capabilities/hosting-server" onClick={closeMobile}>Hosting &amp; Server</Link>
          <Link to="/capabilities/digital-marketing" onClick={closeMobile}>Digital Marketing</Link>
          <Link to="/capabilities/ai-chatbots" onClick={closeMobile}>AI &amp; RAG Chatbots</Link>
          <Link to="/capabilities/ivr-solutions" onClick={closeMobile}>IVR Solutions</Link>
          <Link to="/capabilities/api-integrations" onClick={closeMobile}>API Integrations</Link>
          <Link to="/capabilities/ecommerce-solutions" onClick={closeMobile}>E-Commerce Solutions</Link>
          <Link to="/capabilities/ai-automation" onClick={closeMobile}>AI &amp; Automation</Link>
          <Link to="/capabilities/security-maintenance" onClick={closeMobile}>Security &amp; Maintenance</Link>

          <span className="mobile-section-label">Company</span>
          <Link to="/works" onClick={closeMobile}>Works</Link>
          <Link to="/about" onClick={closeMobile}>About Us</Link>
          <Link to="/contact-us" onClick={closeMobile}>Contact Us</Link>
        </div>
        <div className="mobile-menu-cta">
          <Link to="/contact-us" className="mobile-cta-btn" onClick={closeMobile}>Get a Quote ›</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
