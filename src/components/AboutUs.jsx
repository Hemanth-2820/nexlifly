import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-section">
      {/* Background Decorative Geometry */}
      <div className="about-vector-bg">
        <svg width="550" height="550" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M250 80 L420 380 C428 395 415 410 400 410 L100 410 C85 410 72 395 80 380 L250 80 Z" 
            stroke="rgba(37, 99, 235, 0.05)" 
            strokeWidth="40" 
            strokeLinecap="round"
            strokeLinejoin="round" 
          />
          <circle 
            cx="250" 
            cy="280" 
            r="140" 
            stroke="rgba(37, 99, 235, 0.03)" 
            strokeWidth="25" 
          />
        </svg>
      </div>

      <div className="about-content-wrapper">
        <div className="about-header-block">
          <span className="about-subtitle">OUR ESSENCE</span>
          <h2 className="about-main-title">
            Empowering Modern Brands<br />
            Through Digital Innovation
          </h2>
        </div>

        <div className="innovative-grid">
          {/* Card 1: Link. Build. Fly. (Kinetic Modern) */}
          <div className="innovative-card">
            <div className="glow-orb-indigo"></div>

            <div className="kinetic-text-display">
              <div className="kinetic-row">
                <span className="k-word">Link</span>
                <span className="k-connector"></span>
              </div>
              <div className="kinetic-row indent-1">
                <span className="k-word">Build</span>
                <span className="k-connector build-connector"></span>
              </div>
              <div className="kinetic-row indent-2">
                <span className="k-word accent-gradient">Fly.</span>
                <svg className="fly-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                </svg>
              </div>
            </div>

            <div className="card-footer-content">
              <p className="card-description">
                Linking legacy structures to future technology, building lightning-fast custom code engines, and deploying solutions optimized to soar.
              </p>
              <div className="interactive-circuit">
                <svg width="100%" height="20" viewBox="0 0 200 20" fill="none">
                  <path d="M0 10 H60 L70 18 H120 L130 2 H180 L190 10 H200" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="1.5" />
                  <circle cx="70" cy="18" r="2" fill="#06b6d4" />
                  <circle cx="130" cy="2" r="2" fill="#06b6d4" />
                </svg>
              </div>
            </div>
          </div>

          {/* Card 2: Two Minds. One Vision. (Glassmorphic Concept) */}
          <div className="innovative-card">
            <div className="glow-orb-cyan"></div>

            <div className="lens-showcase-wrapper">
              <div className="minds-visual-core">
                <div className="core-ring ring-outer"></div>
                <div className="core-ring ring-inner"></div>
                <div className="overlap-lenses">
                  <div className="lens lens-a"></div>
                  <div className="lens lens-b"></div>
                  <div className="lens-focus">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
                      <path d="M12 3v3m0 12v3M4.22 4.22l2.12 2.12m11.32 11.32l2.12 2.12M21 12h-3M6 12H3m15.78-7.78l-2.12 2.12M6.34 17.66l-2.12 2.12"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-footer-content text-left">
              <h3 className="concept-heading">
                Two Minds. <br />
                <span className="concept-subheading">One Vision.</span>
              </h3>
              <p className="card-description dark-text">
                A synergistic union of technical rigor and design perfectionism working as one cohesive brain to convert ideas into premium web engines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
