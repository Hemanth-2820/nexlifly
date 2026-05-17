import React, { useEffect, useState } from 'react';
import { FaRegLightbulb, FaCogs, FaCode, FaShieldAlt, FaRocket, FaHandshake, FaChevronRight, FaCheckCircle, FaMobileAlt, FaFileInvoiceDollar, FaChartLine, FaServer, FaDatabase, FaRegListAlt, FaGlobeAmericas, FaHdd, FaMicrochip, FaTools } from 'react-icons/fa';
import './HostingServer.css';
import './ComparisonTable.css';
import CapabilityProcess from '../components/CapabilityProcess';

import { FaShieldHalved } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import heroBg from '../assets/hosting_hero.png';

const HostingServer = () => {
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
                <Link to="/">Home</Link> • Hosting & Server Management
              </nav>
              <div className="service-badge-top">Hosting & Server Management</div>
              <h1 className="hero-title">
                Enterprise Managed Hosting & Servers | High-Performance, Secure, and 99.9% Uptime
              </h1>
              <p className="hero-desc">
                Power your business with robust hosting and expert server management. From dedicated servers to scalable cloud hosting, we ensure your infrastructure is always online and optimized for speed.
              </p>
              <div className="hero-cta-group">
                <button className="btn-hero-consult">
                  Explore Managed Hosting Plans <span className="blue-arrow">→</span>
                </button>
              </div>
            </div>

            <div className="hero-form-wrapper">
              <div className="form-card-exact">
                <h3>Get a Hosting Quote</h3>
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
                    <textarea placeholder="Tell us about your hosting needs (e.g., website traffic, server type, migration requirements)"></textarea>
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
          <h2 className="section-title-exact">Specialized Hosting & Server Solutions</h2>
          <div className="solutions-grid">
            {[
              "Dedicated Servers", "VPS Hosting", "Managed Cloud Hosting", 
              "WordPress Hosting", "Database Management", "Server Optimization", 
              "SSL Certificates", "CDN Integration", "Server Migration", "24/7 Server Support"
            ].map((item, idx) => (
              <div key={idx} className="solution-card">
                <div className="solution-card-inner">
                  <div className="sol-icon">
                    {idx % 2 === 0 ? <FaServer /> : <FaDatabase />}
                  </div>
                  <h3>{item}</h3>
                  <p>High-performance {item.toLowerCase()} built on world-class data center infrastructure.</p>
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
              <div className="highlight-icon"><FaHdd /></div>
              <h3>Tailored Infrastructure for Your Unique Ecosystem</h3>
              <p>Every application requires a different environment. We customize hosting setups to align with your traffic patterns, security needs, and operational goals without over-provisioning or unnecessary overhead.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon"><FaMicrochip /></div>
              <h3>Proven Uptime and Enterprise Trust</h3>
              <p>With 99.9% uptime SLAs and Tier-3 data center locations, we help organizations maintain their digital presence with absolute reliability. Our expertise covers high-load server architectures and secure storage.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon"><FaTools /></div>
              <h3>Seamless Integration Across Stack and Tools</h3>
              <p>Our team works directly with your developers to embed hosting best practices into your deployment pipelines. We enable faster data delivery, minimal latency, and scalable performance for your global users.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Zazz-Inspired Info Cards Section ── */}
      <section className="info-cards-section">
        <div className="service-container">
          <div className="zazz-section-header">
            <h2>Why Business Leaders Choose Nexlifly for Hosting & Server Management</h2>
          </div>
          <div className="info-cards-grid">
            <div className="info-card">
              <div className="info-card-icon"><FaRegListAlt /></div>
              <h3>Full-Cycle Visibility & Transparent Reporting</h3>
              <p>We provide comprehensive dashboards and real-time server health monitoring, ensuring your leadership team can make informed decisions based on clear, measurable uptime and performance metrics.</p>
            </div>
            <div className="info-card">
              <div className="info-card-icon"><FaRegLightbulb /></div>
              <h3>Innovation That Drives Market Growth</h3>
              <p>Our approach is designed to keep pace with evolving server technologies. We help you innovate securely, maintaining user trust while implementing cutting-edge caching and hardware that set you apart from competitors.</p>
            </div>
            <div className="info-card">
              <div className="info-card-icon"><FaGlobeAmericas /></div>
              <h3>Global Infrastructure with Local Precision</h3>
              <p>Our delivery model offers global server reach with high-speed local responsiveness. You receive specialized attention tailored to your specific region, traffic patterns, and security requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4.5 Process Framework Section ── */}
      <CapabilityProcess 
        title="Framework That Powers Our Enterprise Hosting & Server Process"
        frameworkName="Hosting Provisioning & Optimization Lifecycle"
        abbreviation="HPOL"
        steps={[
          {
            letter: 'A',
            title: 'Audit & Requirements',
            Icon: FaRegLightbulb,
            description: 'We analyze your application footprint, user traffic volumes, and storage requirements to select the perfect configuration.'
          },
          {
            letter: 'P',
            title: 'Provisioning & Setup',
            Icon: FaCogs,
            description: 'We configure elite bare-metal, VPS, or cloud servers optimized specifically for speed, memory efficiency, and caching.'
          },
          {
            letter: 'M',
            title: 'Migration & DNS',
            Icon: FaCode,
            description: 'We coordinate seamless data migrations and DNS cutovers with absolute data integrity and zero downtime.'
          },
          {
            letter: 'S',
            title: 'Security Hardening',
            Icon: FaShieldAlt,
            description: 'We configure custom firewalls, install SSL/TLS certs, close vulnerable ports, and setup intrusion protection.'
          },
          {
            letter: 'B',
            title: 'Backups & Recovery',
            Icon: FaRocket,
            description: 'We schedule encrypted, automated backups with off-site replication to ensure instant recovery options.'
          },
          {
            letter: 'O',
            title: 'Optimization',
            Icon: FaHandshake,
            description: 'We conduct ongoing server audits, resource utilization analysis, kernel updates, and guaranteed uptime tracking.'
          }
        ]}
      />

      {/* ── 5. Detailed Capabilities ── */}
      <section className="detailed-caps-exact">
        <div className="service-container">
          <div className="eyebrow-exact">Services</div>
          <h2 className="caps-title-exact">Our Hosting Capabilities:</h2>

          <div className="caps-row-exact">
            <div className="cap-pillar-exact">
              <h4>Managed Dedicated Servers</h4>
              <ul>
                <li>Exclusive server resources for maximum performance and security.</li>
                <li>Custom configurations tailored to your specific application requirements.</li>
                <li>Proactive hardware monitoring and rapid part replacement.</li>
              </ul>
            </div>
            <div className="cap-pillar-exact">
              <h4>Scalable Cloud Hosting</h4>
              <ul>
                <li>Flexible cloud environments that grow seamlessly with your traffic.</li>
                <li>High-availability clusters and automated load balancing.</li>
                <li>Pay-as-you-grow pricing models for maximum cost efficiency.</li>
              </ul>
            </div>
            <div className="cap-pillar-exact">
              <h4>Expert Server Management</h4>
              <ul>
                <li>24/7 proactive monitoring, patching, and security updates.</li>
                <li>Advanced speed optimization and global CDN delivery.</li>
                <li>Managed backups and comprehensive disaster recovery plans.</li>
              </ul>
            </div>
            <div className="cap-pillar-exact">
              <h4>Database & Application Hosting</h4>
              <ul>
                <li>Optimized environments for SQL, NoSQL, and high-load web applications.</li>
                <li>Secure data storage and automated database maintenance.</li>
                <li>Expert support for complex application deployments and migrations.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Zazz-Inspired Comparison Section ── */}
      <section className="comparison-section">
        <div className="service-container">
          <h2 className="comparison-title">Nexlifly vs. Others: Delivering Unmatched Hosting Services for Your Business Needs</h2>
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
                  <td className="col-challenge">Unexpected Downtime</td>
                  <td className="col-nexlifly">99.9% uptime guarantee with redundant power and networking in Tier-3 data centers.</td>
                  <td className="col-others">Generic hosting with frequent "maintenance" windows and unstable infrastructure.</td>
                </tr>
                <tr>
                  <td className="col-challenge">Slow Page Loads</td>
                  <td className="col-nexlifly">LiteSpeed servers, NVMe storage, and global edge caching for lightning-fast delivery.</td>
                  <td className="col-others">Shared hosting environments with oversold resources and legacy spinning disks.</td>
                </tr>
                <tr>
                  <td className="col-challenge">Lack of Expert Support</td>
                  <td className="col-nexlifly">24/7/365 access to Level-3 system administrators who solve problems in minutes.</td>
                  <td className="col-others">Entry-level support agents who rely on scripted responses and take days to escalate.</td>
                </tr>
                <tr>
                  <td className="col-challenge">Opaque Pricing</td>
                  <td className="col-nexlifly">Simple, predictable monthly pricing with no hidden bandwidth or resource fees.</td>
                  <td className="col-others">Low entry prices that skyrocket with renewal fees and unexpected usage surcharges.</td>
                </tr>
                <tr>
                  <td className="col-challenge">Security Vulnerabilities</td>
                  <td className="col-nexlifly">Imunify360 protection, enterprise-grade firewalls, and free SSL certificates for all sites.</td>
                  <td className="col-others">Basic security measures that often leave servers exposed to malware and DDoS attacks.</td>
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

export default HostingServer;
