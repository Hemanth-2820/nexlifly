import React, { useEffect } from 'react';
import './EcommerceSolutions.css';
import './ComparisonTable.css';
import { FaChevronRight, FaCheckCircle, FaRocket, FaShieldAlt, FaMobileAlt, FaCode, FaHandshake, FaFileInvoiceDollar, FaChartLine, FaShoppingBag, FaCreditCard, FaRegListAlt, FaRegLightbulb, FaGlobeAmericas, FaStore, FaBoxOpen } from 'react-icons/fa';
import { FaShieldHalved, FaTruckFast } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import heroBg from '../assets/ecommerce_hero.png';

const EcommerceSolutions = () => {
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
                <Link to="/">Home</Link> • E-Commerce Solutions
              </nav>
              <div className="service-badge-top">E-Commerce Solutions</div>
              <h1 className="hero-title">
                Strategic E-Commerce Development | Scalable Online Stores & High-Conversion Digital Retail
              </h1>
              <p className="hero-desc">
                Launch and scale your online business with Nexlifly's premium e-commerce solutions. We build secure, high-performance digital storefronts that turn visitors into loyal customers.
              </p>
              <div className="hero-cta-group">
                <button className="btn-hero-consult">
                  Start Your 15-Minute E-Commerce Consultation <span className="blue-arrow">→</span>
                </button>
              </div>
            </div>

            <div className="hero-form-wrapper">
              <div className="form-card-exact">
                <h3>Build Your Online Store</h3>
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
                    <textarea placeholder="Tell us about your e-commerce goals (e.g., new store, platform migration, conversion optimization)"></textarea>
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
          <h2 className="section-title-exact">Specialized E-Commerce Solutions</h2>
          <div className="solutions-grid">
            {[
              "Custom Shopify Stores", "WooCommerce Expert Setup", "Adobe Commerce (Magento)", 
              "Headless E-Commerce", "Multi-Vendor Marketplaces", "B2B E-Commerce Platforms", 
              "Payment Gateway Integration", "Inventory Management Systems", "Subscription Models", "Mobile Commerce Apps"
            ].map((item, idx) => (
              <div key={idx} className="solution-card">
                <div className="solution-card-inner">
                  <div className="sol-icon">
                    {idx % 2 === 0 ? <FaShoppingBag /> : <FaCreditCard />}
                  </div>
                  <h3>{item}</h3>
                  <p>High-performance {item.toLowerCase()} built with conversion-focused design and robust technology.</p>
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
              <div className="highlight-icon"><FaStore /></div>
              <h3>Tailored Stores for Your Unique Ecosystem</h3>
              <p>Every retail business has a different flow. We customize e-commerce platforms to align with your product complexity, inventory logic, and conversion goals without unnecessary overhead or system friction.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon"><FaBoxOpen /></div>
              <h3>Proven Scalability and Enterprise Trust</h3>
              <p>From holiday surges to global expansions, we help retailers maintain their online storefronts with absolute reliability. Our expertise covers secure, high-volume transaction processing and data integrity.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon"><FaTruckFast /></div>
              <h3>Seamless Integration Across Logistics and Tools</h3>
              <p>Our team works directly with your warehouse and marketing stakeholders to embed e-commerce best practices into daily workflows. We enable faster shipping sync and minimal cart friction for your shoppers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Zazz-Inspired Info Cards Section ── */}
      <section className="info-cards-section">
        <div className="service-container">
          <div className="zazz-section-header">
            <h2>Why Business Leaders Choose Nexlifly for E-Commerce</h2>
          </div>
          <div className="info-cards-grid">
            <div className="info-card">
              <div className="info-card-icon"><FaRegListAlt /></div>
              <h3>Full-Cycle Visibility & Transparent Reporting</h3>
              <p>We provide comprehensive dashboards and real-time sales tracking, ensuring your leadership team can make informed decisions based on clear, measurable conversion rates and customer behavior metrics.</p>
            </div>
            <div className="info-card">
              <div className="info-card-icon"><FaRegLightbulb /></div>
              <h3>Innovation That Drives Market Growth</h3>
              <p>Our approach is designed to keep pace with evolving retail technologies. We help you innovate securely, maintaining shopper trust while implementing cutting-edge features that set you apart from competitors.</p>
            </div>
            <div className="info-card">
              <div className="info-card-icon"><FaGlobeAmericas /></div>
              <h3>Global Engineering with Local Precision</h3>
              <p>Our delivery model offers global retail scalability with high-speed local responsiveness. You receive specialized attention tailored to your specific industry, region, and international shipping requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Detailed Capabilities ── */}
      <section className="detailed-caps-exact">
        <div className="service-container">
          <div className="eyebrow-exact">Services</div>
          <h2 className="caps-title-exact">Our E-Commerce Capabilities:</h2>
          
          <div className="caps-row-exact">
            <div className="cap-pillar-exact">
              <h4>Custom Storefront Development</h4>
              <ul>
                <li>Bespoke e-commerce applications tailored to your unique brand and product range.</li>
                <li>Integration with third-party ERPs, PIMs, and CRM systems.</li>
                <li>Cloud-native architecture for high availability during peak shopping seasons.</li>
              </ul>
            </div>
            <div className="cap-pillar-exact">
              <h4>Platform Migration & Upgrades</h4>
              <ul>
                <li>Securely migrating your data and SEO value to modern platforms like Shopify or BigCommerce.</li>
                <li>Transitioning from legacy monolithic systems to flexible, headless architectures.</li>
                <li>Improving store performance, security, and checkout experience.</li>
              </ul>
            </div>
            <div className="cap-pillar-exact">
              <h4>Conversion Rate Optimization</h4>
              <ul>
                <li>User-centric design approach focused on reducing friction and increasing average order value.</li>
                <li>Fast, mobile-first layouts that provide a seamless shopping experience on all devices.</li>
                <li>Interactive product filtering and iterative design based on data-driven testing.</li>
              </ul>
            </div>
            <div className="cap-pillar-exact">
              <h4>Payment & Security</h4>
              <ul>
                <li>PCI-compliant payment gateway integrations and SSL/TLS implementation.</li>
                <li>Speed optimization, CDN setup, and advanced server-side caching.</li>
                <li>Ongoing maintenance and proactive fraud monitoring for peace of mind.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Zazz-Inspired Comparison Section ── */}
      <section className="comparison-section">
        <div className="service-container">
          <h2 className="comparison-title">Nexlifly vs. Others: Delivering Unmatched E-Commerce Services for Your Business Needs</h2>
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
                  <td className="col-challenge">High Cart Abandonment</td>
                  <td className="col-nexlifly">Optimized, 1-click checkout flows and fast load times that keep shoppers engaged.</td>
                  <td className="col-others">Slow, multi-step checkouts that frustrate users and lead to lost sales.</td>
                </tr>
                <tr>
                  <td className="col-challenge">Security & Fraud Risks</td>
                  <td className="col-nexlifly">Hardened security protocols and automated fraud detection to protect your revenue.</td>
                  <td className="col-others">Basic security measures that often leave vulnerabilities exposed to bots and scammers.</td>
                </tr>
                <tr>
                  <td className="col-challenge">Slow Mobile Performance</td>
                  <td className="col-nexlifly">Mobile-first design and PWA technology for a native-app-like experience in the browser.</td>
                  <td className="col-others">Unoptimized desktop-first themes that are slow and difficult to use on smartphones.</td>
                </tr>
                <tr>
                  <td className="col-challenge">Difficult Scalability</td>
                  <td className="col-nexlifly">We build with scalable architectures that handle massive traffic spikes during sales events.</td>
                  <td className="col-others">Rigid templates that crash under high load or require expensive server upgrades.</td>
                </tr>
                <tr>
                  <td className="col-challenge">Poor Inventory Sync</td>
                  <td className="col-nexlifly">Real-time integration with your ERP or warehouse management system for accurate stock levels.</td>
                  <td className="col-others">Manual inventory updates that lead to overselling and customer dissatisfaction.</td>
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

export default EcommerceSolutions;
