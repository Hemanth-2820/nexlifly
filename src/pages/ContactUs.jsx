import React, { useEffect, useState } from 'react';
import './ContactUs.css';
import { FaCheckCircle, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ContactUs = () => {
  const [clientType, setClientType] = useState('');
  const [budget, setBudget] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-page-wrapper">
      <div className="contact-container">
        {/* Close Button (Optional if using as a page, but screenshot shows an 'X') */}
        <Link to="/" className="contact-close-btn">
          <FaTimes />
        </Link>

        <div className="contact-grid">
          {/* Left Column: Form */}
          <div className="contact-form-side">
            <h1 className="contact-title">Begin Your Digital Transformation Journey</h1>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label>First Name*</label>
                  <input type="text" placeholder="" required />
                </div>
                <div className="contact-form-group">
                  <label>Last Name*</label>
                  <input type="text" placeholder="" required />
                </div>
              </div>

              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label>Email Address*</label>
                  <input type="email" placeholder="" required />
                </div>
                <div className="contact-form-group">
                  <label>Phone Number*</label>
                  <div className="phone-input-group">
                    <select className="country-select">
                      <option value="IN">IN</option>
                      <option value="US">US</option>
                      <option value="UK">UK</option>
                    </select>
                    <span className="phone-prefix">+91</span>
                    <input type="tel" placeholder="" required />
                  </div>
                </div>
              </div>

              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label>Client Type*</label>
                  <select required value={clientType} onChange={(e) => setClientType(e.target.value)}>
                    <option value=""></option>
                    <option value="Individual / Founder">Individual / Founder</option>
                    <option value="Startup / New Business">Startup / New Business</option>
                    <option value="Agency / Partner">Agency / Partner</option>
                    <option value="Established Brand">Established Brand</option>
                    <option value="Other">Other (Please specify)</option>
                  </select>
                  {clientType === 'Other' && (
                    <input 
                      type="text" 
                      placeholder="Please specify client type..." 
                      className="contact-other-input" 
                      required 
                      style={{ marginTop: '8px', width: '100%' }}
                    />
                  )}
                </div>
                <div className="contact-form-group">
                  <label>Budget*</label>
                  <select required value={budget} onChange={(e) => setBudget(e.target.value)}>
                    <option value=""></option>
                    <option value="< $100">&lt; $100</option>
                    <option value="$100 - $500">$100 - $500</option>
                    <option value="$500 - $1,000">$500 - $1,000</option>
                    <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                    <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                    <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                    <option value="$10,000+">$10,000+</option>
                    <option value="Other">Other (Please specify)</option>
                  </select>
                  {budget === 'Other' && (
                    <input 
                      type="text" 
                      placeholder="Please specify your budget..." 
                      className="contact-other-input" 
                      required 
                      style={{ marginTop: '8px', width: '100%' }}
                    />
                  )}
                </div>
              </div>

              <div className="contact-form-group">
                <label>How can we help?*</label>
                <textarea 
                  placeholder="Tell us about your IT challenges or goals (e.g., downtime issues, scaling needs, compliance requirements)."
                  required
                ></textarea>
              </div>

              <button type="submit" className="contact-submit-btn">
                Submit
              </button>

              <div className="form-disclaimer">
                <p className="confidential-text">We will treat any information you submit with us as confidential.</p>
                <p className="inquiry-notice">
                  This form is for Business inquiries only. For careers, media or other requests, please visit our <Link to="/contact-us">Contact Us Page</Link>.
                </p>
              </div>
            </form>
          </div>

          {/* Right Column: Info */}
          <div className="contact-info-side">
            <h2 className="info-heading">Powering Growth with Purpose-Built Digital Solutions</h2>
            
            <div className="info-features">
              <div className="info-feature-item">
                <FaCheckCircle className="check-icon" />
                <div className="feature-content">
                  <h3>Built Around You</h3>
                  <p>Every solution is tailored to your goals, not off-the-shelf.</p>
                </div>
              </div>
              <div className="info-feature-item">
                <FaCheckCircle className="check-icon" />
                <div className="feature-content">
                  <h3>Security at the Core</h3>
                  <p>Enterprise-grade architecture with end-to-end compliance.</p>
                </div>
              </div>
              <div className="info-feature-item">
                <FaCheckCircle className="check-icon" />
                <div className="feature-content">
                  <h3>Global Delivery, Proven Results</h3>
                  <p>500+ successful projects across 20+ industries.</p>
                </div>
              </div>
              <div className="info-feature-item">
                <FaCheckCircle className="check-icon" />
                <div className="feature-content">
                  <h3>Innovation That Delivers</h3>
                  <p>We turn complexity into growth with future-ready technology.</p>
                </div>
              </div>
            </div>

            <div className="info-partner-section">
              <div className="partner-eyebrow">Build What's Next</div>
              <h3>Partner with Nexlifly to</h3>
              <ul className="partner-list">
                <li>Solve complex business challenges with confidence</li>
                <li>Scale innovation with efficiency and speed</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
