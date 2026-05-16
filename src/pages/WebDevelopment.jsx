import React, { useEffect } from 'react';
import './WebDevelopment.css';
import './ComparisonTable.css';
import { FaChevronRight, FaCheckCircle, FaRocket, FaShieldAlt, FaMobileAlt, FaCode, FaHandshake, FaFileInvoiceDollar, FaChartLine, FaRegListAlt, FaRegLightbulb, FaGlobeAmericas, FaLaptopCode, FaLayerGroup, FaSearchDollar } from 'react-icons/fa';
import { FaShieldHalved } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import heroBg from '../assets/web_dev_hero.jpg';

const WebDevelopment = () => {
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
                <Link to="/">Home</Link> • Web Development
              </nav>
              <div className="service-badge-top">Web Development</div>
              <h1 className="hero-title">
                Strategic Web Development Provider | Secure, Scalable, 24/7 Support for your Business
              </h1>
              <p className="hero-desc">
                Elevate your digital presence with custom-built web solutions. From enterprise platforms to high-converting landing pages, our team delivers pixel-perfect designs backed by robust engineering.
              </p>
              <div className="hero-cta-group">
                <button className="btn-hero-consult">
                  Start with a 15-Minute Web Consultation <span className="blue-arrow">→</span>
                </button>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="hero-form-wrapper">
              <div className="form-card-exact">
                <h3>Get Started with Web Development</h3>
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
                    <textarea placeholder="Tell us about your IT challenges or goals (e.g., downtime issues, scaling needs, compliance requirements)"></textarea>
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
          <h2 className="section-title-exact">Specialized Web Solutions We Deliver</h2>
          <div className="solutions-grid">
            {[
              "Business Websites", "Company Websites", "Portfolio Websites", 
              "Landing Pages", "E-Commerce Websites", "Custom Web Applications", 
              "Admin Dashboards", "SaaS Platforms", "Responsive Website Design", "Website Redesign"
            ].map((item, idx) => (
              <div key={idx} className="solution-card">
                <div className="solution-card-inner">
                  <div className="sol-icon">
                    {idx % 2 === 0 ? <FaRocket /> : <FaCode />}
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
              <div className="highlight-icon"><FaLaptopCode /></div>
              <h3>Strategic Architecture for Scale</h3>
              <p>We design web platforms with the future in mind. Our architectures are built to handle massive traffic spikes without compromising performance or user experience, ensuring your site grows with your business.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon"><FaLayerGroup /></div>
              <h3>Full-Stack Innovation & Modern Stacks</h3>
              <p>Leveraging React, Next.js, and high-performance Node.js backends, we build applications that are as fast as they are beautiful. Innovation is baked into every line of code to provide a competitive edge.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon"><FaSearchDollar /></div>
              <h3>Conversion-Driven User Experiences</h3>
              <p>Every pixel and interaction is optimized for conversion. We bridge the gap between stunning design and measurable business growth through user-centric web engineering and performance-focused layouts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Zazz-Inspired Info Cards Section ── */}
      <section className="info-cards-section">
        <div className="service-container">
          <div className="zazz-section-header">
            <h2>Why Business Leaders Choose Nexlifly for Web Development</h2>
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
              <p>Our approach is designed to keep pace with evolving web technologies. We help you innovate securely, maintaining user trust while implementing cutting-edge features that set you apart from competitors.</p>
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
          <h2 className="caps-title-exact">Our Web Development Capabilities:</h2>
          
          <div className="caps-row-exact">
            <div className="cap-pillar-exact">
              <h4>Custom Web Development</h4>
              <ul>
                <li>Bespoke web applications tailored to your specific business logic and workflows.</li>
                <li>Integration with third-party APIs, CRM systems, and internal databases.</li>
                <li>Cloud-native architecture for high availability and global scalability.</li>
              </ul>
            </div>
            <div className="cap-pillar-exact">
              <h4>E-Commerce Solutions</h4>
              <ul>
                <li>Scalable online stores built on Shopify, WooCommerce, or custom platforms.</li>
                <li>Secure payment gateway integrations and optimized checkout flows.</li>
                <li>Inventory management and automated order processing systems.</li>
              </ul>
            </div>
            <div className="cap-pillar-exact">
              <h4>UI/UX & Responsive Design</h4>
              <ul>
                <li>User-centric design approach focused on conversion and accessibility.</li>
                <li>Fluid layouts that provide a seamless experience from mobile to desktop.</li>
                <li>Interactive prototyping and iterative design based on user testing.</li>
              </ul>
            </div>
            <div className="cap-pillar-exact">
              <h4>Performance & Security</h4>
              <ul>
                <li>Comprehensive security audits and SSL/TLS implementation.</li>
                <li>Speed optimization, CDN setup, and advanced caching strategies.</li>
                <li>Ongoing maintenance and proactive threat monitoring for peace of mind.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Zazz-Inspired Comparison Section ── */}
      <section className="comparison-section">
        <div className="service-container">
          <h2 className="comparison-title">Nexlifly vs. Others: Delivering Unmatched Web Development Services for Your Business Needs</h2>
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
                  <td className="col-challenge">Lack of Scalability</td>
                  <td className="col-nexlifly">We build with future-proof architectures (React/Next.js) that scale seamlessly as your traffic grows.</td>
                  <td className="col-others">Often use rigid templates or legacy CMS that break under high traffic or complex requirements.</td>
                </tr>
                <tr>
                  <td className="col-challenge">Slow Performance</td>
                  <td className="col-nexlifly">Advanced image optimization, code splitting, and global CDN delivery for lightning-fast load times.</td>
                  <td className="col-others">Heavy, unoptimized themes and excessive plugins that frustrate users and hurt SEO rankings.</td>
                </tr>
                <tr>
                  <td className="col-challenge">Security Risks</td>
                  <td className="col-nexlifly">Hardened server configurations, regular audits, and enterprise-grade encryption for all data.</td>
                  <td className="col-others">Basic security measures that often leave vulnerabilities exposed to modern cyber threats.</td>
                </tr>
                <tr>
                  <td className="col-challenge">Lack of Customization</td>
                  <td className="col-nexlifly">Tailored development plans designed specifically for your unique business requirements and brand identity.</td>
                  <td className="col-others">One-size-fits-all solutions that don't address unique business logic or specific user needs.</td>
                </tr>
                <tr>
                  <td className="col-challenge">Poor SEO Structure</td>
                  <td className="col-nexlifly">Semantic HTML5 and technical SEO optimization built into the core of every project for maximum search visibility.</td>
                  <td className="col-others">Generic meta tags with little attention to site speed, mobile-first indexing, or structured data.</td>
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

export default WebDevelopment;
