import React, { useEffect } from 'react';
import './AppDevelopment.css';
import './ComparisonTable.css';
import { FaChevronRight, FaCheckCircle, FaRocket, FaShieldAlt, FaMobileAlt, FaCode, FaHandshake, FaFileInvoiceDollar, FaChartLine, FaRegListAlt, FaRegLightbulb, FaGlobeAmericas, FaAppStoreIos, FaGooglePlay, FaSyncAlt } from 'react-icons/fa';
import { FaShieldHalved } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import heroBg from '../assets/app_dev_hero_new.jpg';

const AppDevelopment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="service-page">
      {/* ── 1. Hero Section ── */}
      <section className="service-hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.15)), url(${heroBg})` }}>
        <div className="service-container">
          <div className="hero-content-grid">
            {/* Left Side: Content */}
            <div className="hero-main">
              <nav className="breadcrumb">
                <Link to="/">Home</Link> • App Development
              </nav>
              <div className="service-badge-top">App Development</div>
              <h1 className="hero-title">
                Premium Mobile App Development | Native & Hybrid Solutions for Modern Enterprise
              </h1>
              <p className="hero-desc">
                Transform your business with high-performance mobile applications. We build seamless iOS and Android experiences that engage users and drive digital transformation.
              </p>
              <div className="hero-cta-group">
                <button className="btn-hero-consult">
                  Get Your Free Mobile App Strategy <span className="blue-arrow">→</span>
                </button>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="hero-form-wrapper">
              <div className="form-card-exact">
                <h3>Get Started with App Development</h3>
                <form className="service-form-exact" onSubmit={(e) => e.preventDefault()}>
                  <div className="form-row-exact">
                    <div className="form-group-exact">
                      <label>First Name</label>
                      <input type="text" placeholder="John" required />
                    </div>
                    <div className="form-group-exact">
                      <label>Last Name</label>
                      <input type="text" placeholder="Smith" required />
                    </div>
                  </div>
                  <div className="form-row-exact">
                    <div className="form-group-exact">
                      <label>Work Email</label>
                      <input type="email" placeholder="John@company.com" required />
                    </div>
                    <div className="form-group-exact">
                      <label>Phone Number</label>
                      <div className="phone-input-exact">
                        <select><option>IN</option></select>
                        <input type="tel" placeholder="+91" />
                      </div>
                    </div>
                  </div>
                  <div className="form-row-exact">
                    <div className="form-group-exact">
                      <label>Company Size</label>
                      <select required>
                        <option value="">(# of Employees)</option>
                        <option>1-10</option>
                      </select>
                    </div>
                    <div className="form-group-exact">
                      <label>Monthly Budget (in USD)</label>
                      <select required>
                        <option value="">Select budget range</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group-exact">
                    <label>How can we help?</label>
                    <textarea placeholder="Tell us about your App goals (e.g., target platform, key features, deadline)"></textarea>
                  </div>
                  <button type="submit" className="form-submit-blue">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Specialized Solutions Section ── */}
      <section className="specialized-solutions">
        <div className="service-container">
          <h2 className="section-title-exact">Specialized App Solutions We Deliver</h2>
          <div className="solutions-grid">
            {[
              "Native iOS Apps", "Native Android Apps", "Hybrid App Development", 
              "Progressive Web Apps (PWA)", "Enterprise Mobile Solutions", "App UI/UX Design", 
              "Mobile Backend Development", "App Maintenance & Support", "Cross-Platform Development", "App Performance Optimization"
            ].map((item, idx) => (
              <div key={idx} className="solution-card">
                <div className="solution-card-inner">
                  <div className="sol-icon">
                    {idx % 2 === 0 ? <FaMobileAlt /> : <FaRocket />}
                  </div>
                  <h3>{item}</h3>
                  <p>High-performance {item.toLowerCase()} built with modern tech stacks for maximum impact.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Zazz-Inspired Service Highlights ── */}
      <section className="service-highlights-section">
        <div className="service-container">
          <div className="highlights-grid">
            <div className="highlight-card">
              <div className="highlight-icon"><FaAppStoreIos /></div>
              <h3>Tailored Apps for Your Unique Ecosystem</h3>
              <p>Every business mobile strategy is unique. We customize app experiences to align with your brand, user expectations, and operational goals without adding unnecessary complexity or overhead.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon"><FaGooglePlay /></div>
              <h3>Native Performance & Enterprise Trust</h3>
              <p>From Swift to Kotlin and Flutter, we ensure your apps meet the highest performance standards. Our expertise covers deep integration with mobile hardware for a truly premium, responsive feel.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon"><FaSyncAlt /></div>
              <h3>Seamless Integration Across Platforms</h3>
              <p>Our team works directly with your stakeholders to embed your mobile app into your daily business workflows. We enable faster execution, minimal disruption, and scalable mobile-first security.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Zazz-Inspired Info Cards Section ── */}
      <section className="info-cards-section">
        <div className="service-container">
          <div className="zazz-section-header">
            <h2>Why Business Leaders Choose Nexlifly for App Development</h2>
          </div>
          <div className="info-cards-grid">
            <div className="info-card">
              <div className="info-card-icon"><FaRegListAlt /></div>
              <h3>Full-Cycle Visibility & Transparent Reporting</h3>
              <p>We provide comprehensive dashboards and real-time project tracking, ensuring your leadership team can make informed decisions based on clear, measurable development progress and performance metrics.</p>
            </div>
            <div className="info-card">
              <div className="info-card-icon"><FaRegLightbulb /></div>
              <h3>Innovation That Drives Market Growth</h3>
              <p>Our approach is designed to keep pace with evolving mobile technologies. We help you innovate securely, maintaining user trust while implementing cutting-edge features that set you apart from competitors.</p>
            </div>
            <div className="info-card">
              <div className="info-card-icon"><FaGlobeAmericas /></div>
              <h3>Global Engineering with Local Precision</h3>
              <p>Our delivery model offers global scalability with high-speed local responsiveness. You receive specialized attention tailored to your specific industry, region, and security requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Detailed Capabilities ── */}
      <section className="detailed-caps-exact">
        <div className="service-container">
          <div className="eyebrow-exact">Services</div>
          <h2 className="caps-title-exact">Our App Development Capabilities:</h2>
          
          <div className="caps-row-exact">
            <div className="cap-pillar-exact">
              <h4>iOS & Android Development</h4>
              <ul>
                <li>Native and cross-platform mobile apps built for performance and high engagement.</li>
                <li>Swift, Kotlin, and React Native expert development for seamless user experiences.</li>
                <li>App Store and Google Play optimization for maximum visibility.</li>
              </ul>
            </div>
            <div className="cap-pillar-exact">
              <h4>Enterprise App Solutions</h4>
              <ul>
                <li>Secure, scalable internal tools designed to streamline corporate workflows.</li>
                <li>Robust backend architectures and real-time data synchronization.</li>
                <li>Enterprise-grade security and user access management.</li>
              </ul>
            </div>
            <div className="cap-pillar-exact">
              <h4>UX/UI for Mobile</h4>
              <ul>
                <li>Intuitive, mobile-first design focused on conversion and user retention.</li>
                <li>Interactive prototyping and iterative testing for the best user journeys.</li>
                <li>Accessibility-compliant designs that work for all users.</li>
              </ul>
            </div>
            <div className="cap-pillar-exact">
              <h4>App Security & Compliance</h4>
              <ul>
                <li>Regular security audits, data encryption, and HIPAA/GDPR compliance.</li>
                <li>Continuous performance monitoring and proactive threat prevention.</li>
                <li>Ongoing maintenance and rapid bug fixing for long-term reliability.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Zazz-Inspired Comparison Section ── */}
      <section className="comparison-section">
        <div className="service-container">
          <h2 className="comparison-title">Nexlifly vs. Others: Delivering Unmatched App Development Services for Your Business Needs</h2>
          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th className="col-challenge">Key Challenges</th>
                  <th className="col-nexlifly">How Nexlifly Solves Them</th>
                  <th className="col-others">Other Providers</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="col-challenge">High Battery Consumption</td>
                  <td className="col-nexlifly">We optimize code and background processes to ensure your app is high-performing without draining battery.</td>
                  <td className="col-others">Often use heavy libraries and unoptimized code that degrades device performance and battery life.</td>
                </tr>
                <tr>
                  <td className="col-challenge">Complex User Journeys</td>
                  <td className="col-nexlifly">User-centric design that simplifies complex tasks into intuitive, 1-click actions.</td>
                  <td className="col-others">Cluttered interfaces that frustrate users and lead to high abandonment rates.</td>
                </tr>
                <tr>
                  <td className="col-challenge">Security Vulnerabilities</td>
                  <td className="col-nexlifly">Biometric authentication and multi-layered encryption to protect sensitive user data.</td>
                  <td className="col-others">Standard security protocols that are often insufficient against modern mobile cyber attacks.</td>
                </tr>
                <tr>
                  <td className="col-challenge">Slow Update Cycles</td>
                  <td className="col-nexlifly">Agile development and CI/CD pipelines for rapid, reliable feature updates and security patches.</td>
                  <td className="col-others">Long release cycles that leave users waiting for improvements and critical bug fixes.</td>
                </tr>
                <tr>
                  <td className="col-challenge">Lack of Multi-OS Support</td>
                  <td className="col-nexlifly">Expertise in both native and cross-platform frameworks ensures a consistent experience on all devices.</td>
                  <td className="col-others">Often struggle to maintain feature parity between iOS and Android versions.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Floating Cookie Badge */}
      <div className="floating-cookie-badge">
        <div className="cookie-circle">
          🍪
        </div>
      </div>
    </div>
  );
};

export default AppDevelopment;
