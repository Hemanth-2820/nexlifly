import React, { useEffect, useState } from 'react';
import './ContactUs.css';
import { FaCheckCircle, FaTimes, FaSpinner, FaExclamationCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Web3Forms Access Key
const WEB3FORMS_ACCESS_KEY = "c991b453-67d4-4e14-a49b-3bcbe04b6a1a";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phonePrefix: '+91',
    phoneNumber: '',
    clientType: '',
    otherClientType: '',
    budget: '',
    otherBudget: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [apiErrorMessage, setApiErrorMessage] = useState('');
  const [isDemoMode, setIsDemoMode] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear field-specific error as user types
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const errors = {};

    // First Name
    if (!formData.firstName.trim()) {
      errors.firstName = 'First name is required';
    }

    // Last Name
    if (!formData.lastName.trim()) {
      errors.lastName = 'Last name is required';
    }

    // Email
    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        errors.email = 'Please enter a valid email address';
      }
    }

    // Phone Number
    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = 'Phone number is required';
    } else {
      const phoneRegex = /^\d{7,15}$/;
      if (!phoneRegex.test(formData.phoneNumber.replace(/[\s-()]/g, ''))) {
        errors.phoneNumber = 'Please enter a valid phone number (7-15 digits)';
      }
    }

    // Client Type
    if (!formData.clientType) {
      errors.clientType = 'Please select a client type';
    } else if (formData.clientType === 'Other' && !formData.otherClientType.trim()) {
      errors.otherClientType = 'Please specify your client type';
    }

    // Budget
    if (!formData.budget) {
      errors.budget = 'Please select a budget range';
    } else if (formData.budget === 'Other' && !formData.otherBudget.trim()) {
      errors.otherBudget = 'Please specify your budget';
    }

    // Message / How can we help
    if (!formData.message.trim()) {
      errors.message = 'Please let us know how we can help';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setSubmitStatus('submitting');
    setApiErrorMessage('');

    // ==========================================
    // HUBSPOT INTEGRATION SETTINGS
    // ==========================================
    // 1. Create a free HubSpot account.
    // 2. Go to Marketing > Forms and create a new regular form.
    // 3. Find your PORTAL ID (Hub ID) in the top right corner of HubSpot.
    // 4. Find your FORM ID from the form's URL or embed code.
    const PORTAL_ID = '246229949'; 
    const FORM_ID = 'ce36a720-8677-45fd-8ade-1dda6c8d0a60';
    
    // If IDs are not set, show demo mode success
    if (PORTAL_ID === 'YOUR_HUBSPOT_PORTAL_ID' || !PORTAL_ID) {
      setTimeout(() => {
        setIsDemoMode(true);
        setSubmitStatus('success');
      }, 1000);
      return;
    }

    // HubSpot requires data in a specific "fields" array format
    const hubspotData = {
      fields: [
        { name: 'firstname', value: formData.firstName },
        { name: 'lastname', value: formData.lastName },
        { name: 'email', value: formData.email },
        { name: 'phone', value: `${formData.phonePrefix} ${formData.phoneNumber}` },
        { name: 'client_type', value: formData.clientType === 'Other' ? formData.otherClientType : formData.clientType },
        { name: 'budget', value: formData.budget === 'Other' ? formData.otherBudget : formData.budget },
        { name: 'message', value: formData.message }
      ],
      context: {
        pageUri: window.location.href,
        pageName: document.title
      }
    };

    try {
      const response = await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(hubspotData)
      });

      if (response.ok) {
        setIsDemoMode(false);
        setSubmitStatus('success');

        // Trigger WhatsApp Notification Webhook on BigRock PHP Server
        try {
          await fetch('https://nexlifly.in/send_lead_whatsapp.php', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          });
        } catch (waError) {
          console.error("WhatsApp notification trigger failed:", waError);
          // Fail silently so the user still sees a success message even if the WhatsApp API is down or slow
        }
      } else {
        const errorData = await response.json();
        console.error("HubSpot Error:", errorData);
        setSubmitStatus('error');
        setApiErrorMessage('Something went wrong. Please check if your HubSpot Form fields match exactly.');
      }
    } catch (error) {
      console.error("Network Error:", error);
      setSubmitStatus('error');
      setApiErrorMessage('Unable to send message. Please check your connection and try again.');
    }
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phonePrefix: '+91',
      phoneNumber: '',
      clientType: '',
      otherClientType: '',
      budget: '',
      otherBudget: '',
      message: ''
    });
    setFormErrors({});
    setSubmitStatus('idle');
    setApiErrorMessage('');
    setIsDemoMode(false);
  };

  return (
    <div className="contact-page-wrapper">
      <div className="contact-container">
        {/* Close Button */}
        <Link to="/" className="contact-close-btn">
          <FaTimes />
        </Link>

        <div className="contact-grid">
          {/* Left Column: Form / Success state */}
          <div className="contact-form-side">
            {submitStatus === 'success' ? (
              <div className="contact-success-state">
                <div className="success-icon-wrapper">
                  <FaCheckCircle className="success-check-icon" />
                </div>
                <h2 className="success-title">Thank You!</h2>
                <p className="success-message">
                  Your inquiry has been successfully submitted. Our team will review your details and get back to you within 24 hours.
                </p>
                {isDemoMode && (
                  <div className="demo-notice-box">
                    <p className="demo-notice-title">💡 Developer Demo Mode</p>
                    <p>The form validation and flow are working perfectly!</p>
                    <p>To receive real emails, simply get a free access key from <a href="https://web3forms.com" target="_blank" rel="noopener noreferrer">web3forms.com</a> and paste it into the <code>ContactUs.jsx</code> file.</p>
                  </div>
                )}
                <button className="contact-reset-btn" onClick={handleReset}>
                  Submit Another Request
                </button>
              </div>
            ) : (
              <>
                <h1 className="contact-title">Begin Your Digital Transformation Journey</h1>
                
                {submitStatus === 'error' && (
                  <div className="contact-error-banner">
                    <FaExclamationCircle className="error-banner-icon" />
                    <span>{apiErrorMessage}</span>
                  </div>
                )}

                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="contact-form-row">
                    <div className="contact-form-group">
                      <label>First Name*</label>
                      <input 
                        type="text" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={formErrors.firstName ? 'has-error' : ''}
                        required 
                      />
                      {formErrors.firstName && <span className="error-text">{formErrors.firstName}</span>}
                    </div>
                    <div className="contact-form-group">
                      <label>Last Name*</label>
                      <input 
                        type="text" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={formErrors.lastName ? 'has-error' : ''}
                        required 
                      />
                      {formErrors.lastName && <span className="error-text">{formErrors.lastName}</span>}
                    </div>
                  </div>

                  <div className="contact-form-row">
                    <div className="contact-form-group">
                      <label>Email Address*</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={formErrors.email ? 'has-error' : ''}
                        required 
                      />
                      {formErrors.email && <span className="error-text">{formErrors.email}</span>}
                    </div>
                    <div className="contact-form-group">
                      <label>Phone Number*</label>
                      <div className={`phone-input-group ${formErrors.phoneNumber ? 'has-error' : ''}`}>
                        <select 
                          className="country-select"
                          value={formData.phonePrefix === '+91' ? 'IN' : formData.phonePrefix === '+1' ? 'US' : 'UK'}
                          onChange={(e) => {
                            const val = e.target.value;
                            const prefix = val === 'IN' ? '+91' : val === 'US' ? '+1' : '+44';
                            setFormData(p => ({ ...p, phonePrefix: prefix }));
                          }}
                        >
                          <option value="IN">IN</option>
                          <option value="US">US</option>
                          <option value="UK">UK</option>
                        </select>
                        <span className="phone-prefix">{formData.phonePrefix}</span>
                        <input 
                          type="tel" 
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          required 
                        />
                      </div>
                      {formErrors.phoneNumber && <span className="error-text">{formErrors.phoneNumber}</span>}
                    </div>
                  </div>

                  <div className="contact-form-row">
                    <div className="contact-form-group">
                      <label>Client Type*</label>
                      <select 
                        name="clientType"
                        required 
                        value={formData.clientType} 
                        onChange={handleChange}
                        className={formErrors.clientType ? 'has-error' : ''}
                      >
                        <option value=""></option>
                        <option value="Individual / Founder">Individual / Founder</option>
                        <option value="Startup / New Business">Startup / New Business</option>
                        <option value="Agency / Partner">Agency / Partner</option>
                        <option value="Established Brand">Established Brand</option>
                        <option value="Other">Other (Please specify)</option>
                      </select>
                      {formErrors.clientType && <span className="error-text">{formErrors.clientType}</span>}
                      
                      {formData.clientType === 'Other' && (
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                          <input 
                            type="text" 
                            name="otherClientType"
                            value={formData.otherClientType}
                            onChange={handleChange}
                            placeholder="Please specify client type..." 
                            className={`contact-other-input ${formErrors.otherClientType ? 'has-error' : ''}`} 
                            required 
                            style={{ marginTop: '8px', width: '100%' }}
                          />
                          {formErrors.otherClientType && <span className="error-text">{formErrors.otherClientType}</span>}
                        </div>
                      )}
                    </div>
                    <div className="contact-form-group">
                      <label>Budget*</label>
                      <select 
                        name="budget"
                        required 
                        value={formData.budget} 
                        onChange={handleChange}
                        className={formErrors.budget ? 'has-error' : ''}
                      >
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
                      {formErrors.budget && <span className="error-text">{formErrors.budget}</span>}
                      
                      {formData.budget === 'Other' && (
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                          <input 
                            type="text" 
                            name="otherBudget"
                            value={formData.otherBudget}
                            onChange={handleChange}
                            placeholder="Please specify your budget..." 
                            className={`contact-other-input ${formErrors.otherBudget ? 'has-error' : ''}`} 
                            required 
                            style={{ marginTop: '8px', width: '100%' }}
                          />
                          {formErrors.otherBudget && <span className="error-text">{formErrors.otherBudget}</span>}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="contact-form-group">
                    <label>How can we help?*</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your IT challenges or goals (e.g., downtime issues, scaling needs, compliance requirements)."
                      className={formErrors.message ? 'has-error' : ''}
                      required
                    ></textarea>
                    {formErrors.message && <span className="error-text">{formErrors.message}</span>}
                  </div>

                  <button 
                    type="submit" 
                    className="contact-submit-btn"
                    disabled={submitStatus === 'submitting'}
                  >
                    {submitStatus === 'submitting' ? (
                      <span className="submit-loading-content">
                        <FaSpinner className="spinner-icon" /> Sending...
                      </span>
                    ) : 'Submit'}
                  </button>

                  <div className="form-disclaimer">
                    <p className="confidential-text">We will treat any information you submit with us as confidential.</p>
                    <p className="inquiry-notice">
                      This form is for Business inquiries only. For careers, media or other requests, please visit our <Link to="/contact-us">Contact Us Page</Link>.
                    </p>
                  </div>
                </form>
              </>
            )}
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
