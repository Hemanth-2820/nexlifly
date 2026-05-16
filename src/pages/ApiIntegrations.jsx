import React, { useEffect } from 'react';
import './ApiIntegrations.css';
import './ComparisonTable.css';
import { FaChevronRight, FaCheckCircle, FaRocket, FaShieldAlt, FaMobileAlt, FaCode, FaHandshake, FaFileInvoiceDollar, FaChartLine, FaLink, FaPlug, FaRegListAlt, FaRegLightbulb, FaGlobeAmericas } from 'react-icons/fa';
import { FaShieldHalved, FaConnectdevelop, FaSitemap } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import heroBg from '../assets/api_hero.png';

const ApiIntegrations = () => {
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
                <Link to="/">Home</Link> • API Integrations
              </nav>
              <div className="service-badge-top">API Integrations</div>
              <h1 className="hero-title">
                Strategic API Integrations | Seamless Data Flow & Unified Business Ecosystems
              </h1>
              <p className="hero-desc">
                Connect your software stack and eliminate data silos. Our expert API integration services ensure your applications talk to each other, automating workflows and maximizing operational efficiency.
              </p>
              <div className="hero-cta-group">
                <button className="btn-hero-consult">
                  Schedule Your API Integration Audit <span className="blue-arrow">→</span>
                </button>
              </div>
            </div>

            <div className="hero-form-wrapper">
              <div className="form-card-exact">
                <h3>Request an Integration Plan</h3>
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
                    <textarea placeholder="Tell us about your integration needs (e.g., specific platforms, automation goals, current bottlenecks)"></textarea>
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
          <h2 className="section-title-exact">Specialized API Integration Solutions</h2>
          <div className="solutions-grid">
            {[
              "Payment Gateway APIs", "CRM & ERP Sync", "Shipping & Logistics APIs", 
              "Social Media Integrations", "Custom API Development", "SaaS Ecosystem Connectivity", 
              "Data Warehouse Integration", "Cloud Service APIs", "Auth & Security APIs", "Real-time Webhooks"
            ].map((item, idx) => (
              <div key={idx} className="solution-card">
                <div className="solution-card-inner">
                  <div className="sol-icon">
                    {idx % 2 === 0 ? <FaLink /> : <FaPlug />}
                  </div>
                  <h3>{item}</h3>
                  <p>High-performance {item.toLowerCase()} built to ensure seamless data flow and system stability.</p>
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
              <div className="highlight-icon"><FaConnectdevelop /></div>
              <h3>Tailored Connectivity for Your Unique Ecosystem</h3>
              <p>Every software stack is different. We customize API programs through expert systems integration to align with your data flow, security requirements, and operational goals without adding unnecessary complexity.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon"><FaShieldHalved /></div>
              <h3>Proven Reliability and Enterprise Trust</h3>
              <p>With robust error-handling and secure data processing, we help organizations maintain their digital ecosystems with absolute reliability. Our expertise covers secure, high-scale API deployments and data integrity.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon"><FaSitemap /></div>
              <h3>Seamless Integration Across Teams and Tools</h3>
              <p>Our team works directly with your engineering and IT stakeholders to embed API best practices into daily workflows. We enable faster data exchange, minimal disruption, and scalable connectivity for your business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Zazz-Inspired Info Cards Section ── */}
      <section className="info-cards-section">
        <div className="service-container">
          <div className="zazz-section-header">
            <h2>Why Business Leaders Choose Nexlifly for API Integrations</h2>
          </div>
          <div className="info-cards-grid">
            <div className="info-card">
              <div className="info-card-icon"><FaRegListAlt /></div>
              <h3>Full-Cycle Visibility & Transparent Monitoring</h3>
              <p>We provide comprehensive dashboards and real-time integration tracking, ensuring your leadership team can make informed decisions based on clear, measurable data flow and system performance metrics.</p>
            </div>
            <div className="info-card">
              <div className="info-card-icon"><FaRegLightbulb /></div>
              <h3>Innovation That Drives Market Growth</h3>
              <p>Our approach is designed to keep pace with evolving API standards. We help you innovate securely, maintaining data trust while implementing cutting-edge connectivity that sets you apart from competitors.</p>
            </div>
            <div className="info-card">
              <div className="info-card-icon"><FaGlobeAmericas /></div>
              <h3>Global Scaling with Local Precision</h3>
              <p>Our delivery model offers global ecosystem reach with high-speed local responsiveness. You receive specialized attention tailored to your specific industry, region, and security requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Detailed Capabilities ── */}
      <section className="detailed-caps-exact">
        <div className="service-container">
          <div className="eyebrow-exact">Services</div>
          <h2 className="caps-title-exact">Our API Capabilities:</h2>
          
          <div className="caps-row-exact">
            <div className="cap-pillar-exact">
              <h4>Custom API Development</h4>
              <ul>
                <li>Building secure, scalable RESTful and GraphQL APIs tailored to your business.</li>
                <li>Comprehensive documentation and developer-friendly integration guides.</li>
                <li>High-performance endpoints designed for maximum data throughput.</li>
              </ul>
            </div>
            <div className="cap-pillar-exact">
              <h4>Third-Party Integrations</h4>
              <ul>
                <li>Expert connectivity with tools like Salesforce, Shopify, Stripe, and more.</li>
                <li>Automating data synchronization between disparate software systems.</li>
                <li>Implementing robust error handling and retry logic for maximum reliability.</li>
              </ul>
            </div>
            <div className="cap-pillar-exact">
              <h4>API Security & Management</h4>
              <ul>
                <li>Implementing OAuth, API Keys, and enterprise-grade authentication.</li>
                <li>Rate limiting, request validation, and proactive threat monitoring.</li>
                <li>Regular security audits and compliance checks for all your integrations.</li>
              </ul>
            </div>
            <div className="cap-pillar-exact">
              <h4>Legacy Modernization</h4>
              <ul>
                <li>Wrapping legacy systems with modern API layers for easy connectivity.</li>
                <li>Transitioning from file-based transfers to real-time API data flows.</li>
                <li>Improving system performance and reliability through modern integration patterns.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Zazz-Inspired Comparison Section ── */}
      <section className="comparison-section">
        <div className="service-container">
          <h2 className="comparison-title">Nexlifly vs. Others: Delivering Unmatched API Integration Services for Your Business Needs</h2>
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
                  <td className="col-challenge">Fragmented Data Silos</td>
                  <td className="col-nexlifly">Seamlessly unified ecosystems where data flows securely and instantly between all your tools.</td>
                  <td className="col-others">Siloed applications that require manual data entry and create operational bottlenecks.</td>
                </tr>
                <tr>
                  <td className="col-challenge">Frequent Integration Breaks</td>
                  <td className="col-nexlifly">Robust error-handling and automated monitoring that detects and fixes issues in real-time.</td>
                  <td className="col-others">Fragile connections that break with every software update, requiring manual repairs.</td>
                </tr>
                <tr>
                  <td className="col-challenge">Security Vulnerabilities</td>
                  <td className="col-nexlifly">Zero-trust API security with enterprise-grade encryption and authentication protocols.</td>
                  <td className="col-others">Basic API setups that often leave sensitive business data exposed to unauthorized access.</td>
                </tr>
                <tr>
                  <td className="col-challenge">Slow Data Throughput</td>
                  <td className="col-nexlifly">Optimized, high-speed API endpoints that handle massive data loads with minimal latency.</td>
                  <td className="col-others">Legacy integration patterns that are slow and create performance lags across your systems.</td>
                </tr>
                <tr>
                  <td className="col-challenge">Opaque System Logic</td>
                  <td className="col-nexlifly">Clear, documented integration architectures that are easy to manage and scale as you grow.</td>
                  <td className="col-others">Documented-less, "black box" integrations that become impossible to maintain over time.</td>
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

export default ApiIntegrations;
