import React, { useState } from 'react';
import { FaSpinner, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import './CapabilityForm.css';

// TODO: Replace this with your actual Web3Forms Access Key from https://web3forms.com
const WEB3FORMS_ACCESS_KEY = "c991b453-67d4-4e14-a49b-3bcbe04b6a1a";

const CapabilityForm = ({ title, serviceName }) => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.firstName.trim()) {
      errors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      errors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        errors.email = 'Please enter a valid email';
      }
    }

    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = 'Phone number is required';
    } else {
      const phoneRegex = /^\d{7,15}$/;
      if (!phoneRegex.test(formData.phoneNumber.replace(/[\s-()]/g, ''))) {
        errors.phoneNumber = 'Enter valid phone (7-15 digits)';
      }
    }

    if (!formData.clientType) {
      errors.clientType = 'Select client type';
    } else if (formData.clientType === 'Other' && !formData.otherClientType.trim()) {
      errors.otherClientType = 'Please specify';
    }

    if (!formData.budget) {
      errors.budget = 'Select budget range';
    } else if (formData.budget === 'Other' && !formData.otherBudget.trim()) {
      errors.otherBudget = 'Please specify';
    }

    if (!formData.message.trim()) {
      errors.message = 'Please let us know how we can help';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Must be at least 10 characters';
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

    if (WEB3FORMS_ACCESS_KEY === 'YOUR_ACCESS_KEY_HERE' || !WEB3FORMS_ACCESS_KEY) {
      setTimeout(() => {
        setIsDemoMode(true);
        setSubmitStatus('success');
      }, 1000);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Capability Inquiry - ${serviceName} from ${formData.firstName} ${formData.lastName}`,
          from_name: `Nexlifly ${serviceName}`,
          service: serviceName,
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: `${formData.phonePrefix} ${formData.phoneNumber}`,
          client_type: formData.clientType === 'Other' ? formData.otherClientType : formData.clientType,
          budget: formData.budget === 'Other' ? formData.otherBudget : formData.budget,
          message: formData.message
        })
      });

      const result = await response.json();
      
      if (result.success) {
        setIsDemoMode(false);
        setSubmitStatus('success');
      } else {
        setSubmitStatus('error');
        setApiErrorMessage(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setApiErrorMessage('Unable to send. Please check your connection.');
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

  if (submitStatus === 'success') {
    return (
      <div className="capability-success-state">
        <div className="cap-success-icon-wrapper">
          <FaCheckCircle className="cap-success-check-icon" />
        </div>
        <h3 className="cap-success-title">Thank You!</h3>
        <p className="cap-success-message">
          Your details for <strong>{serviceName}</strong> have been received. We'll be in touch shortly!
        </p>
        {isDemoMode && (
          <div className="cap-demo-box">
            <p className="cap-demo-title">💡 Developer Demo Mode</p>
            <p>Form is validated. To receive real emails, add your access key from web3forms.com in <code>CapabilityForm.jsx</code>.</p>
          </div>
        )}
        <button className="cap-reset-btn" onClick={handleReset}>
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="capability-form-container">
      <h3>{title}</h3>
      
      {submitStatus === 'error' && (
        <div className="cap-error-banner">
          <FaExclamationCircle className="cap-error-icon" />
          <span>{apiErrorMessage}</span>
        </div>
      )}

      <form className="service-form-exact" onSubmit={handleSubmit} noValidate>
        <div className="form-row-exact">
          <div className="form-group-exact">
            <label>First Name</label>
            <input 
              type="text" 
              name="firstName"
              placeholder="John" 
              value={formData.firstName}
              onChange={handleChange}
              className={formErrors.firstName ? 'has-error' : ''}
              required 
            />
            {formErrors.firstName && <span className="cap-error-text">{formErrors.firstName}</span>}
          </div>
          <div className="form-group-exact">
            <label>Last Name</label>
            <input 
              type="text" 
              name="lastName"
              placeholder="Smith" 
              value={formData.lastName}
              onChange={handleChange}
              className={formErrors.lastName ? 'has-error' : ''}
              required 
            />
            {formErrors.lastName && <span className="cap-error-text">{formErrors.lastName}</span>}
          </div>
        </div>

        <div className="form-row-exact">
          <div className="form-group-exact">
            <label>Email Address</label>
            <input 
              type="email" 
              name="email"
              placeholder="john@example.com" 
              value={formData.email}
              onChange={handleChange}
              className={formErrors.email ? 'has-error' : ''}
              required 
            />
            {formErrors.email && <span className="cap-error-text">{formErrors.email}</span>}
          </div>
          <div className="form-group-exact">
            <label>Phone Number</label>
            <div className={`phone-input-exact ${formErrors.phoneNumber ? 'has-error' : ''}`}>
              <select
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
              <input 
                type="tel" 
                name="phoneNumber"
                placeholder="+91 98765 43210" 
                value={formData.phoneNumber}
                onChange={handleChange}
                required 
              />
            </div>
            {formErrors.phoneNumber && <span className="cap-error-text">{formErrors.phoneNumber}</span>}
          </div>
        </div>

        <div className="form-row-exact">
          <div className="form-group-exact">
            <label>Client Type</label>
            <select 
              name="clientType"
              value={formData.clientType} 
              onChange={handleChange}
              className={formErrors.clientType ? 'has-error' : ''}
              required
            >
              <option value="">Select client type</option>
              <option value="Individual / Founder">Individual / Founder</option>
              <option value="Startup / New Business">Startup / New Business</option>
              <option value="Agency / Partner">Agency / Partner</option>
              <option value="Established Brand">Established Brand</option>
              <option value="Other">Other (Please specify)</option>
            </select>
            {formErrors.clientType && <span className="cap-error-text">{formErrors.clientType}</span>}

            {formData.clientType === 'Other' && (
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <input 
                  type="text" 
                  name="otherClientType"
                  value={formData.otherClientType}
                  onChange={handleChange}
                  placeholder="Specify client type..." 
                  className={`form-input-specify-exact ${formErrors.otherClientType ? 'has-error' : ''}`}
                  required 
                  style={{ marginTop: '8px', width: '100%' }}
                />
                {formErrors.otherClientType && <span className="cap-error-text">{formErrors.otherClientType}</span>}
              </div>
            )}
          </div>
          
          <div className="form-group-exact">
            <label>Monthly Budget (in USD)</label>
            <select 
              name="budget"
              value={formData.budget} 
              onChange={handleChange}
              className={formErrors.budget ? 'has-error' : ''}
              required
            >
              <option value="">Select budget range</option>
              <option value="< $100">&lt; $100</option>
              <option value="$100 - $500">$100 - $500</option>
              <option value="$500 - $1,000">$500 - $1,000</option>
              <option value="$1,000 - $3,000">$1,000 - $3,000</option>
              <option value="$3,000 - $5,000">$3,000 - $5,000</option>
              <option value="$5,000 - $10,000">$5,000 - $10,000</option>
              <option value="$10,000+">$10,000+</option>
              <option value="Other">Other (Please specify)</option>
            </select>
            {formErrors.budget && <span className="cap-error-text">{formErrors.budget}</span>}

            {formData.budget === 'Other' && (
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <input 
                  type="text" 
                  name="otherBudget"
                  value={formData.otherBudget}
                  onChange={handleChange}
                  placeholder="Specify your budget..." 
                  className={`form-input-specify-exact ${formErrors.otherBudget ? 'has-error' : ''}`}
                  required 
                  style={{ marginTop: '8px', width: '100%' }}
                />
                {formErrors.otherBudget && <span className="cap-error-text">{formErrors.otherBudget}</span>}
              </div>
            )}
          </div>
        </div>

        <div className="form-group-exact">
          <label>How can we help?</label>
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your IT challenges or goals..."
            className={formErrors.message ? 'has-error' : ''}
            required
          ></textarea>
          {formErrors.message && <span className="cap-error-text">{formErrors.message}</span>}
        </div>

        <button 
          type="submit" 
          className="form-submit-blue"
          disabled={submitStatus === 'submitting'}
        >
          {submitStatus === 'submitting' ? (
            <span className="submit-loading-content">
              <FaSpinner className="spinner-icon" /> Sending...
            </span>
          ) : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default CapabilityForm;
