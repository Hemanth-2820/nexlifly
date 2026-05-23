import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppFloat.css';

const WhatsAppFloat = () => {
  // Your WhatsApp Business Phone Number
  // By default, using the Meta developer test number. 
  // Update this to your real phone number (starting with country code like 91) when you go live!
  const phoneNumber = "917671031879"; 
  
  // The pre-filled message that automatically triggers your chatbot menu in whatsapp_webhook.php
  const message = encodeURIComponent("hello"); 
  
  const waLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a 
      href={waLink} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="whatsapp-floating-button"
      aria-label="Chat with Nexlifly on WhatsApp"
    >
      <FaWhatsapp />
      <span className="tooltip-text">Chat with us!</span>
    </a>
  );
};

export default WhatsAppFloat;
