import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import {
  FaChevronRight,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; // Updated X (Twitter) icon
import logo from '../assets/nexliflyLOGO.png';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">

        {/* ── Left Column: Logo, Badges & Newsletter ── */}
        <div className="footer-main-col">
          <div className="footer-logo-wrap">
            <Link to="/" className="footer-logo-link">
              <img src={logo} alt="Nexlifly" className="footer-logo-img" />
            </Link>
          </div>

          {/* Clean CSS-based ISO Certificates matching the screenshot — REMOVED */}

          {/* Newsletter Box */}
          <div className="newsletter-box">
            <h4 className="newsletter-heading">Subscribe to Newsletter</h4>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-btn">
                Subscribe <FaChevronRight className="chevron-icon" />
              </button>
            </form>
          </div>
        </div>

        {/* ── Column 2: About & Insights ── */}
        <div className="footer-nav-col">
          <div className="footer-nav-group">
            <h4 className="footer-nav-heading">About Us</h4>
            <ul className="footer-links">
              <li><Link to="/about">Code of Business Ethics & Conduct</Link></li>
              <li><Link to="/about">Corporate Social Responsibility</Link></li>
              <li><Link to="/about">Global Presence</Link></li>
              <li><Link to="/about">Awards & Certifications</Link></li>
              <li><Link to="/about">Newsroom</Link></li>
            </ul>
          </div>

          <div className="footer-nav-group">
            <h4 className="footer-nav-heading">Insights</h4>
            <ul className="footer-links">
              <li><Link to="/">Blogs</Link></li>
            </ul>
          </div>
        </div>

        {/* ── Column 3: Capabilities ── */}
        <div className="footer-nav-col capabilities-col">
          <div className="footer-nav-group capabilities-group">
            <h4 className="footer-nav-heading">Capabilities</h4>
            <ul className="footer-links">
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

        {/* ── Column 4: Contact & Success Stories ── */}
        <div className="footer-nav-col">
          <div className="footer-nav-group">
            <h4 className="footer-nav-heading">Contact Us</h4>
            <ul className="footer-links">
              <li><Link to="/">Business Inquiry</Link></li>
            </ul>
          </div>

          <div className="footer-nav-group">
            <h4 className="footer-nav-heading">Success Stories</h4>
            <ul className="footer-links">
              <li><Link to="/">Works</Link></li>
            </ul>
          </div>
        </div>

      </div>

      {/* ── Footer Bottom: Socials, Copy & Cookies ── */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">

          {/* Social Icons */}
          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon-link" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon-link" aria-label="X (Twitter)">
              <FaXTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon-link" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon-link" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>

          {/* Copyright & Mini Navigation */}
          <div className="footer-copyright-row">
            <strong>Copyright © {new Date().getFullYear()} Nexlifly Inc.</strong>
            <div className="copyright-links">
              <Link to="/">Contact Us</Link> <span className="link-sep">|</span>
              <Link to="/">Disclaimer</Link> <span className="link-sep">|</span>
              <a href="/privacy-policy.html">Privacy Policy</a> <span className="link-sep">|</span>
              <Link to="/">Terms of use</Link> <span className="link-sep">|</span>
              <Link to="/">Sitemap</Link> <span className="link-sep">|</span>
              <Link to="/">Raise a Grievance</Link>
            </div>
          </div>

          {/* Cookies Information */}
          <p className="footer-cookies-text">
            We use cookies on our site. Please read more about <Link to="/" className="cookies-link">cookies policy</Link> here.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
