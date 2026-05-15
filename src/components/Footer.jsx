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

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        
        {/* ── Left Column: Logo, Badges & Newsletter ── */}
        <div className="footer-main-col">
          <div className="footer-logo-wrap">
            {/* Replicating Logo: Styled Text & Nexlifly Icon */}
            <span className="footer-logo-text">
              <span className="logo-accent">n</span>exlifly<sup className="tm">™</sup>
            </span>
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

        {/* ── Column 3: Capabilities & Careers ── */}
        <div className="footer-nav-col">
          <div className="footer-nav-group">
            <h4 className="footer-nav-heading">Capabilities</h4>
            <ul className="footer-links">
              <li><Link to="/">IT Managed Services</Link></li>
              <li><Link to="/">Managed Security Services</Link></li>
              <li><Link to="/">Cybersecurity Services</Link></li>
              <li><Link to="/">IT Staff Augmentation</Link></li>
              <li><Link to="/">Mobile App Development</Link></li>
              <li><Link to="/">Software Development</Link></li>
              <li><Link to="/">Cloud Consulting</Link></li>
              <li><Link to="/">Artificial Intelligence</Link></li>
              <li><Link to="/">Data Engineering & Analytics</Link></li>
              <li><Link to="/">Automation & Emerging Technologies</Link></li>
            </ul>
          </div>

          {/* Careers nav group — REMOVED */}
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
              <li><Link to="/">Case Study</Link></li>
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
              <Link to="/">Privacy Policy</Link> <span className="link-sep">|</span>
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
