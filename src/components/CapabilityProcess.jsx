import React, { useState } from 'react';
import './CapabilityProcess.css';

const CapabilityProcess = ({ 
  title, 
  frameworkName, 
  abbreviation, 
  steps 
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="cap-process-section">
      <div className="cap-process-container">
        
        {/* Header Block */}
        <div className="cap-process-header">
          <h2 className="cap-process-title">{title}</h2>
          <p className="cap-process-subtitle">
            At Nexlifly, our enterprise process is governed by the <strong>{frameworkName} ({abbreviation})</strong>, a 
            globally recognized framework that ensures every product we deliver is reliable, secure, and aligned with business 
            objectives. This structured model allows us to manage complexity, maintain transparency, and ensure quality at every 
            stage of development.
          </p>
        </div>

        {/* Dynamic Card Slider */}
        <div className="cap-process-slider">
          {steps.map((step, idx) => {
            const isActive = activeIndex === idx;
            const { Icon, letter, title: stepTitle, description } = step;

            return (
              <div
                key={idx}
                className={`cap-process-card ${isActive ? 'cap-process-card--active' : ''}`}
                onMouseEnter={() => setActiveIndex(idx)}
                onClick={() => setActiveIndex(idx)}
                role="button"
                tabIndex={0}
                aria-expanded={isActive}
              >
                {/* Blue Gradient Column (Only active on current tab) */}
                <div className="cap-process-blue-col">
                  <div className="cap-process-icon-circle">
                    <Icon className="cap-process-icon" />
                  </div>
                  <span className="cap-process-letter">{letter}</span>
                </div>

                {/* White Content Panel */}
                <div className="cap-process-content-panel">
                  <h3 className="cap-process-card-title">{stepTitle}</h3>
                  <p className="cap-process-card-desc">{description}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CapabilityProcess;
