import React, { useEffect, useState } from 'react';
import { FaRegLightbulb, FaCogs, FaCode, FaShieldAlt, FaRocket, FaHandshake, FaChevronRight, FaCheckCircle, FaMobileAlt, FaFileInvoiceDollar, FaChartLine, FaDesktop, FaRegListAlt, FaGlobeAmericas, FaProjectDiagram, FaUserTie } from 'react-icons/fa';
import './SoftwareDevelopment.css';
import './ComparisonTable.css';
import CapabilityProcess from '../components/CapabilityProcess';

import { FaShieldHalved } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import heroBg from '../assets/software_hero.jpg';

const SoftwareDevelopment = () => {
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
            {/* Left Side: Content */}
            <div className="hero-main">
              <nav className="breadcrumb">
                <Link to="/">Home</Link> • Software Development
              </nav>
              <div className="service-badge-top">Software Development</div>
              <h1 className="hero-title">
                Custom Enterprise Software Solutions | Scalable, Secure, and Built for Growth
              </h1>
              <p className="hero-desc">
                Solve your most complex business challenges with tailor-made software. From legacy modernization to cloud-native platforms, we deliver engineering excellence that empowers your organization.
              </p>
              <div className="hero-cta-group">
                <button className="btn-hero-consult">
                  Book a 15-Minute Software Strategy Session <span className="blue-arrow">→</span>
                </button>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="hero-form-wrapper">
              <div className="form-card-exact">
                <h3>Get Started with Software Solutions</h3>
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
                    <textarea placeholder="Tell us about your software project (e.g., custom tool, legacy migration, API integration)"></textarea>
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
          <h2 className="section-title-exact">Specialized Software Solutions We Deliver</h2>
          <div className="solutions-grid">
            {[
              "Enterprise Software", "Custom ERP Solutions", "CRM Development", 
              "Cloud-Native Apps", "Legacy Modernization", "SaaS Development", 
              "Microservices Architecture", "System Integration", "FinTech Software", "HealthTech Solutions"
            ].map((item, idx) => (
              <div key={idx} className="solution-card">
                <div className="solution-card-inner">
                  <div className="sol-icon">
                    {idx % 2 === 0 ? <FaDesktop /> : <FaRocket />}
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
              <div className="highlight-icon"><FaCogs /></div>
              <h3>Bespoke Enterprise Architecture</h3>
              <p>We build software that solves your specific business friction. Our custom enterprise solutions are engineered for high-availability, enterprise-grade security, and long-term scalability.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon"><FaProjectDiagram /></div>
              <h3>Legacy Modernization & Cloud Ready</h3>
              <p>Transform outdated systems into modern, cloud-native platforms. We bridge the gap between legacy reliability and modern speed without risking data loss or critical business downtime.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon"><FaUserTie /></div>
              <h3>Full-Cycle Engineering Excellence</h3>
              <p>From initial discovery to post-launch support, our team ensures your software ecosystem remains high-performing. We deliver engineering excellence that empowers your workforce and drives ROI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Zazz-Inspired Info Cards Section ── */}
      <section className="info-cards-section">
        <div className="service-container">
          <div className="zazz-section-header">
            <h2>Why Business Leaders Choose Nexlifly for Software Development</h2>
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
              <p>Our approach is designed to keep pace with evolving software technologies. We help you innovate securely, maintaining user trust while implementing cutting-edge features that set you apart from competitors.</p>
            </div>
            <div className="info-card">
              <div className="info-card-icon"><FaGlobeAmericas /></div>
              <h3>Global Engineering with Local Precision</h3>
              <p>Our delivery model offers global scalability with high-speed local responsiveness. You receive specialized attention tailored to your specific industry, region, and security requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4.5 Process Framework Section ── */}
      <CapabilityProcess 
        title="Framework That Powers Our Enterprise Software Development Process"
        frameworkName="Software Development Life Cycle"
        abbreviation="SDLC"
        steps={[
          {
            letter: 'R',
            title: 'Requirements Analysis',
            Icon: FaRegLightbulb,
            description: 'We conduct deep discovery to define system constraints, functional parameters, and core business objectives.'
          },
          {
            letter: 'S',
            title: 'System Design',
            Icon: FaCogs,
            description: 'Our architects design highly scalable databases, API specifications, and modular service-oriented architectures.'
          },
          {
            letter: 'D',
            title: 'Development',
            Icon: FaCode,
            description: 'We write secure, clean, and well-documented enterprise source code using modern automated CI/CD pipelines.'
          },
          {
            letter: 'T',
            title: 'Testing',
            Icon: FaShieldAlt,
            description: 'We run automated unit tests, integration suites, load tests, and security penetration assessments.'
          },
          {
            letter: 'D',
            title: 'Deployment',
            Icon: FaRocket,
            description: 'We deploy the platform to redundant cloud environments with Blue-Green strategies for zero-downtime releases.'
          },
          {
            letter: 'M',
            title: 'Maintenance',
            Icon: FaHandshake,
            description: 'We provide proactive security patching, 24/7 infrastructure monitoring, database backups, and scaling advice.'
          }
        ]}
      />

      {/* ── 5. Detailed Capabilities ── */}
      <section className="detailed-caps-exact">
        <div className="service-container">
          <div className="eyebrow-exact">Services</div>
          <h2 className="caps-title-exact">Our Software Development Capabilities:</h2>

          <div className="caps-row-exact">
            <div className="cap-pillar-exact">
              <h4>Custom Enterprise Software</h4>
              <ul>
                <li>Tailor-made software solutions designed to solve your specific business challenges and inefficiencies.</li>
                <li>Scalable architecture built for long-term growth and seamless system integration.</li>
                <li>Bespoke logic and automated workflows that save time and reduce human error.</li>
              </ul>
            </div>
            <div className="cap-pillar-exact">
              <h4>Legacy System Modernization</h4>
              <ul>
                <li>Updating outdated software with modern tech stacks without losing critical data or functionality.</li>
                <li>Transitioning monolithic systems to cloud-native or microservices architectures.</li>
                <li>Improving system performance, security, and user experience.</li>
              </ul>
            </div>
            <div className="cap-pillar-exact">
              <h4>Software Consulting & Strategy</h4>
              <ul>
                <li>Expert advice on technology selection, architecture design, and project roadmapping.</li>
                <li>Detailed analysis of existing systems to identify areas for improvement and cost savings.</li>
                <li>Agile development methodology that ensures your software evolves with your business.</li>
              </ul>
            </div>
            <div className="cap-pillar-exact">
              <h4>System Integration & APIs</h4>
              <ul>
                <li>Connecting disparate software systems into a unified, high-performance ecosystem.</li>
                <li>Developing secure, scalable APIs for internal use or third-party integrations.</li>
                <li>Ensuring data flows smoothly and securely across all your business applications.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Zazz-Inspired Comparison Section ── */}
      <section className="comparison-section">
        <div className="service-container">
          <h2 className="comparison-title">Nexlifly vs. Others: Delivering Unmatched Software Development Services for Your Business Needs</h2>
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
                  <td className="col-challenge">Outdated Technology</td>
                  <td className="col-nexlifly">We use modern, scalable tech stacks that future-proof your investment and ensure long-term stability.</td>
                  <td className="col-others">Often rely on legacy systems that are difficult to maintain and vulnerable to security threats.</td>
                </tr>
                <tr>
                  <td className="col-challenge">Integration Headaches</td>
                  <td className="col-nexlifly">Our software is built to integrate seamlessly with your existing tools, creating a unified workflow.</td>
                  <td className="col-others">Siloed applications that require manual data entry and create operational bottlenecks.</td>
                </tr>
                <tr>
                  <td className="col-challenge">Unclear Development Timelines</td>
                  <td className="col-nexlifly">Agile methodology with clear milestones and transparent project tracking for on-time delivery.</td>
                  <td className="col-others">Opaque processes that often lead to missed deadlines and unexpected budget overruns.</td>
                </tr>
                <tr>
                  <td className="col-challenge">Poor Scalability</td>
                  <td className="col-nexlifly">We design for growth from day one, ensuring your software can handle increasing user loads.</td>
                  <td className="col-others">Rigid architectures that require expensive re-writes as your business expands.</td>
                </tr>
                <tr>
                  <td className="col-challenge">Maintenance Bottlenecks</td>
                  <td className="col-nexlifly">Ongoing support and maintenance plans that keep your software running smoothly and securely 24/7.</td>
                  <td className="col-others">Often lack post-launch support, leaving you to manage complex bugs and updates alone.</td>
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

export default SoftwareDevelopment;
