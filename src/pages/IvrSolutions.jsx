import React, { useEffect, useState } from 'react';
import { FaRegLightbulb, FaCogs, FaCode, FaShieldAlt, FaRocket, FaHandshake, FaChevronRight, FaCheckCircle, FaMobileAlt, FaFileInvoiceDollar, FaChartLine, FaPhoneVolume, FaRobot, FaRegListAlt, FaGlobeAmericas, FaHeadphones } from 'react-icons/fa';
import './IvrSolutions.css';
import './ComparisonTable.css';
import CapabilityProcess from '../components/CapabilityProcess';

import { FaShieldHalved, FaMicrophoneLines, FaShuffle } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import heroBg from '../assets/ivr_hero.png';

const IvrSolutions = () => {
  const [clientType, setClientType] = useState('');
  const [budget, setBudget] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="service-page">
      {/* ── 1. Hero Section ── */}
      <section className="service-hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.15)), url(${heroBg})` }}>
        <div className="service-container">
          <div className="hero-content-grid">
            <div className="hero-main">
              <nav className="breadcrumb">
                <Link to="/">Home</Link> • IVR Solutions
              </nav>
              <div className="service-badge-top">IVR Solutions</div>
              <h1 className="hero-title">
                Intelligent IVR & Voice Solutions | Automated Customer Interaction & Smart Routing
              </h1>
              <p className="hero-desc">
                Streamline your customer communication with advanced IVR systems. From automated menus to AI-powered voice recognition, we help you deliver exceptional service while reducing operational costs.
              </p>
              <div className="hero-cta-group">
                <button className="btn-hero-consult">
                  Schedule Your Voice Strategy Consultation <span className="blue-arrow">→</span>
                </button>
              </div>
            </div>

            <div className="hero-form-wrapper">
              <div className="form-card-exact">
                <h3>Optimize Your Voice System</h3>
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
                      <label>Email Address</label>
                      <input type="email" placeholder="john@example.com" required />
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
                      <label>Client Type</label>
                      <select required value={clientType} onChange={(e) => setClientType(e.target.value)}>
                        <option value="">Select client type</option>
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
                          className="form-input-specify-exact" 
                          required 
                          style={{ marginTop: '8px', width: '100%' }}
                        />
                      )}
                    </div>
                    <div className="form-group-exact">
                      <label>Monthly Budget (in USD)</label>
                      <select required value={budget} onChange={(e) => setBudget(e.target.value)}>
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
                      {budget === 'Other' && (
                        <input 
                          type="text" 
                          placeholder="Please specify your budget..." 
                          className="form-input-specify-exact" 
                          required 
                          style={{ marginTop: '8px', width: '100%' }}
                        />
                      )}
                    </div>
                  </div>
                  <div className="form-group-exact">
                    <label>How can we help?</label>
                    <textarea placeholder="Tell us about your voice requirements (e.g., call volume, integration needs, specific features)"></textarea>
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
          <h2 className="section-title-exact">Specialized IVR & Voice Solutions</h2>
          <div className="solutions-grid">
            {[
              "Automated Call Routing", "AI Voice Assistants", "Multi-Language Menus", 
              "CRM Voice Integration", "Self-Service Portals", "Voice Biometrics", 
              "SMS/Voice Notifications", "Call Analytics", "Custom Voice Workflows", "24/7 Voice Support"
            ].map((item, idx) => (
              <div key={idx} className="solution-card">
                <div className="solution-card-inner">
                  <div className="sol-icon">
                    {idx % 2 === 0 ? <FaPhoneVolume /> : <FaRobot />}
                  </div>
                  <h3>{item}</h3>
                  <p>High-performance {item.toLowerCase()} built to enhance customer satisfaction and operational efficiency.</p>
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
              <div className="highlight-icon"><FaHeadphones /></div>
              <h3>Tailored Voice for Your Unique Ecosystem</h3>
              <p>Every customer interaction is different. We customize IVR systems to align with your specific call volume, department logic, and service goals without confusing your callers or creating menu fatigue.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon"><FaMicrophoneLines /></div>
              <h3>Proven Reliability and Enterprise Trust</h3>
              <p>With 99.9% uptime on voice channels and secure data handling, we help organizations maintain their customer support with absolute reliability. Our expertise covers smart, high-volume call routing and NLP.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon"><FaShuffle /></div>
              <h3>Seamless Integration Across Support and Tools</h3>
              <p>Our team works directly with your customer service and IT stakeholders to embed voice best practices into daily CRM workflows. We enable faster query resolution and minimal wait times for every caller.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Zazz-Inspired Info Cards Section ── */}
      <section className="info-cards-section">
        <div className="service-container">
          <div className="zazz-section-header">
            <h2>Why Business Leaders Choose Nexlifly for IVR Solutions</h2>
          </div>
          <div className="info-cards-grid">
            <div className="info-card">
              <div className="info-card-icon"><FaRegListAlt /></div>
              <h3>Full-Cycle Visibility & Transparent Reporting</h3>
              <p>We provide comprehensive dashboards and real-time call tracking, ensuring your leadership team can make informed decisions based on clear, measurable engagement and satisfaction metrics.</p>
            </div>
            <div className="info-card">
              <div className="info-card-icon"><FaRegLightbulb /></div>
              <h3>Innovation That Drives Market Growth</h3>
              <p>Our approach is designed to keep pace with evolving voice technologies. We help you innovate securely, maintaining caller trust while implementing cutting-edge features that set you apart from competitors.</p>
            </div>
            <div className="info-card">
              <div className="info-card-icon"><FaGlobeAmericas /></div>
              <h3>Global Voice Infrastructure with Local Precision</h3>
              <p>Our delivery model offers global voice reach with high-speed local responsiveness. You receive specialized attention tailored to your specific industry, region, and language requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4.5 Process Framework Section ── */}
      <CapabilityProcess 
        title="Framework That Powers Our Enterprise IVR Solutions Process"
        frameworkName="Interactive Voice Engineering Process"
        abbreviation="IVEP"
        steps={[
          {
            letter: 'P',
            title: 'Planning & Routing',
            Icon: FaRegLightbulb,
            description: 'We analyze your call volumes, operator resources, and routing hierarchies to streamline operations.'
          },
          {
            letter: 'F',
            title: 'Flow Architecture',
            Icon: FaCogs,
            description: 'We map out high-efficiency menu flows, self-service portals, and conditional routing logic trees.'
          },
          {
            letter: 'S',
            title: 'Scripting & Voice',
            Icon: FaCode,
            description: 'We draft professional prompt scripts and produce natural, studio-quality voice-over recordings.'
          },
          {
            letter: 'I',
            title: 'Integration',
            Icon: FaShieldAlt,
            description: 'We connect the telephony engine to your CRM system for real-time customer data queries.'
          },
          {
            letter: 'T',
            title: 'Testing & Load',
            Icon: FaRocket,
            description: 'We perform multi-line concurrency tests and audio clarity tests to ensure zero dropped connections.'
          },
          {
            letter: 'M',
            title: 'Maintenance',
            Icon: FaHandshake,
            description: 'We monitor call answer metrics, queue wait-times, custom updates, and route path optimizations.'
          }
        ]}
      />

      {/* ── 5. Detailed Capabilities ── */}
      <section className="detailed-caps-exact">
        <div className="service-container">
          <div className="eyebrow-exact">Services</div>
          <h2 className="caps-title-exact">Our IVR Capabilities:</h2>

          <div className="caps-row-exact">
            <div className="cap-pillar-exact">
              <h4>Smart Call Routing</h4>
              <ul>
                <li>Intelligent menu systems that direct callers to the right department instantly.</li>
                <li>Skill-based routing to ensure customers speak with the best-qualified agents.</li>
                <li>Dynamic wait-time announcements and automated callback options.</li>
              </ul>
            </div>
            <div className="cap-pillar-exact">
              <h4>AI & Natural Language Processing</h4>
              <ul>
                <li>Advanced voice recognition for intuitive, conversational customer interactions.</li>
                <li>Automated self-service options for common queries like order status or billing.</li>
                <li>AI-powered sentiment analysis to monitor and improve customer interactions.</li>
              </ul>
            </div>
            <div className="cap-pillar-exact">
              <h4>System Integration</h4>
              <ul>
                <li>Seamlessly connecting your voice system with CRM and database software.</li>
                <li>Real-time data screen pops for agents to provide personalized service.</li>
                <li>Automated data entry from voice inputs into your internal systems.</li>
              </ul>
            </div>
            <div className="cap-pillar-exact">
              <h4>Analytics & Performance</h4>
              <ul>
                <li>Detailed call logs and performance reports for every interaction.</li>
                <li>Real-time monitoring of queue lengths and abandonment rates.</li>
                <li>Ongoing optimization of voice menus based on user behavior data.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Zazz-Inspired Comparison Section ── */}
      <section className="comparison-section">
        <div className="service-container">
          <h2 className="comparison-title">Nexlifly vs. Others: Delivering Unmatched IVR Services for Your Business Needs</h2>
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
                  <td className="col-challenge">Frustrating Menu Labyrinths</td>
                  <td className="col-nexlifly">Intuitive, shallow menus and AI voice recognition that gets callers to answers faster.</td>
                  <td className="col-others">Complex, multi-level menus that frustrate callers and lead to high abandonment.</td>
                </tr>
                <tr>
                  <td className="col-challenge">Long Wait Times</td>
                  <td className="col-nexlifly">Automated self-service and smart routing that reduces the load on live agents.</td>
                  <td className="col-others">Static queues with no automated options, leading to long holds and customer anger.</td>
                </tr>
                <tr>
                  <td className="col-challenge">Lack of Personalization</td>
                  <td className="col-nexlifly">Real-time CRM integration that identifies callers and provides personalized responses.</td>
                  <td className="col-others">Generic greetings that require callers to repeat their information multiple times.</td>
                </tr>
                <tr>
                  <td className="col-challenge">Opaque Performance Data</td>
                  <td className="col-nexlifly">Detailed analytics dashboards that show exactly where your voice system can improve.</td>
                  <td className="col-others">Basic call logs with little insight into user frustration or system inefficiencies.</td>
                </tr>
                <tr>
                  <td className="col-challenge">Rigid Infrastructure</td>
                  <td className="col-nexlifly">Cloud-based systems that can be updated and scaled in minutes, not weeks.</td>
                  <td className="col-others">On-premise hardware that is difficult to maintain and expensive to scale.</td>
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

export default IvrSolutions;
