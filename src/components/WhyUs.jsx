import React, { useState } from 'react';
import './WhyUs.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const accordionData = [
  {
    title: "Fully Tailored Custom Code",
    content: "We don't use bloated pre-made templates. Every single project is custom-engineered from scratch to fit your exact design and business goals, ensuring smooth and lightweight performance."
  },
  {
    title: "Fast Delivery & Quick Launch",
    content: "We work dynamically in agile sprints without corporate red tape or bureaucratic delays, allowing us to finish features quickly and push your project to launch in record time."
  },
  {
    title: "Direct Communication, No Middlemen",
    content: "You will correspond directly with the specialized freelance developers doing the actual work. This ensures your feedback is implemented accurately and instantly without translation errors."
  },
  {
    title: "Affordable & Highly Flexible Pricing",
    content: "Get elite, agency-grade quality without the heavy corporate agency fees. We provide highly transparent, project-based pricing that respects your budget with zero hidden costs."
  }
];

const WhyUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="whyus-container">
      {/* Top Header Segment (matches user screenshot) */}
      <div className="whyus-header">
        <div className="whyus-header-left">
          <span className="whyus-subtitle">WHY NEXLIFLY</span>
          <h2 className="whyus-title">
            Why Clients<br />
            Choose to Work<br />
            With Nexlifly?
          </h2>
        </div>
        <div className="whyus-header-right">
          <p className="whyus-header-desc">
            With a strong foundation in modern engineering and innovation, <strong>Nexlifly</strong> empowers your brand to move faster, adapt smarter, and launch confidently—as a trusted freelance partner delivering flexible, custom digital solutions.
          </p>
        </div>
      </div>

      {/* Bottom Body Segment (Interactive Alternating Content) */}
      <div className="whyus-body">
        <div className="whyus-visual">
          <div className="visual-mask">
            <img src="/whyus_img.png" alt="Modern Enterprise Office" />
          </div>
        </div>
        
        <div className="whyus-accordion">
          {accordionData.map((item, idx) => (
            <div 
              key={idx} 
              className={`accordion-item ${activeIndex === idx ? 'active' : ''}`}
              onClick={() => toggleAccordion(idx)}
            >
              <div className="accordion-header">
                <span className="accordion-number">0{idx + 1}</span>
                <h3 className="accordion-item-title">{item.title}</h3>
                <div className="accordion-toggle-icon">
                  {activeIndex === idx ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>
              <div className="accordion-content-wrapper">
                <div className="accordion-content">
                  <p>{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
