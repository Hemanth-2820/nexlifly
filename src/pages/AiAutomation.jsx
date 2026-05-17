import React, { useEffect, useState } from 'react';
import { FaRegLightbulb, FaCogs, FaCode, FaShieldAlt, FaRocket, FaHandshake, FaChevronRight, FaCheckCircle, FaMobileAlt, FaFileInvoiceDollar, FaChartLine, FaRobot, FaMicrochip, FaRegListAlt, FaGlobeAmericas, FaBrain } from 'react-icons/fa';
import './AiAutomation.css';
import './ComparisonTable.css';
import CapabilityProcess from '../components/CapabilityProcess';

import { FaShieldHalved, FaWandMagicSparkles, FaArrowTrendUp } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import heroBg from '../assets/ai_automation_hero.png';

const AiAutomation = () => {
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
                <Link to="/">Home</Link> • AI & Automation
              </nav>
              <div className="service-badge-top">AI & Automation</div>
              <h1 className="hero-title">
                Intelligent AI & Workflow Automation | Scale Your Business with Smart Digital Systems
              </h1>
              <p className="hero-desc">
                Transform your operations with cutting-edge AI and automated workflows. We help you eliminate manual tasks, reduce errors, and unlock new levels of productivity with custom-built intelligent solutions.
              </p>
              <div className="hero-cta-group">
                <button className="btn-hero-consult">
                  Schedule Your Free AI Strategy Session <span className="blue-arrow">→</span>
                </button>
              </div>
            </div>

            <div className="hero-form-wrapper">
              <div className="form-card-exact">
                <h3>Optimize Your Workflow</h3>
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
                    <textarea placeholder="Tell us about your automation goals (e.g., manual task reduction, AI integration, data processing)"></textarea>
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
          <h2 className="section-title-exact">Specialized AI & Automation Solutions</h2>
          <div className="solutions-grid">
            {[
              "Custom AI Models", "Business Process Automation", "Data Analysis AI", 
              "Automated Reporting", "AI-Powered Customer Support", "Predictive Maintenance", 
              "Natural Language Processing", "Robotic Process Automation (RPA)", "Automated Lead Gen", "AI Strategy Consulting"
            ].map((item, idx) => (
              <div key={idx} className="solution-card">
                <div className="solution-card-inner">
                  <div className="sol-icon">
                    {idx % 2 === 0 ? <FaRobot /> : <FaMicrochip />}
                  </div>
                  <h3>{item}</h3>
                  <p>High-performance {item.toLowerCase()} built to drive efficiency and innovation in your business.</p>
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
              <div className="highlight-icon"><FaBrain /></div>
              <h3>Tailored Workflows for Your Unique Ecosystem</h3>
              <p>No two businesses operate the same way. We customize automation programs through expert AI consulting to align with your specific workflows, data structures, and operational goals without unnecessary overhead.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon"><FaWandMagicSparkles /></div>
              <h3>Proven Efficiency and Enterprise Trust</h3>
              <p>From automated reporting to intelligent data processing, we help organizations reduce manual overhead with absolute precision. Our expertise covers secure, high-scale AI deployments and data integrity.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon"><FaArrowTrendUp /></div>
              <h3>Seamless Integration Across Depts and Tools</h3>
              <p>Our team works directly with your operations and IT stakeholders to embed AI best practices into daily workflows. We enable faster execution, minimal human error, and scalable productivity for your team.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Zazz-Inspired Info Cards Section ── */}
      <section className="info-cards-section">
        <div className="service-container">
          <div className="zazz-section-header">
            <h2>Why Business Leaders Choose Nexlifly for AI & Automation</h2>
          </div>
          <div className="info-cards-grid">
            <div className="info-card">
              <div className="info-card-icon"><FaRegListAlt /></div>
              <h3>Full-Cycle Visibility & Transparent Reporting</h3>
              <p>We provide comprehensive dashboards and real-time automation tracking, ensuring your leadership team can make informed decisions based on clear, measurable efficiency and cost-saving metrics.</p>
            </div>
            <div className="info-card">
              <div className="info-card-icon"><FaRegLightbulb /></div>
              <h3>Innovation That Drives Market Growth</h3>
              <p>Our approach is designed to keep pace with evolving AI technologies. We help you innovate securely, maintaining user trust while implementing cutting-edge features that set you apart from competitors.</p>
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
        title="Framework That Powers Our Enterprise AI & Automation Process"
        frameworkName="Enterprise Automation Blueprint Lifecycle"
        abbreviation="EABL"
        steps={[
          {
            letter: 'D',
            title: 'Discovery',
            Icon: FaRegLightbulb,
            description: 'We shadow employees and map high-frequency, manual tasks that present optimal targets for automation.'
          },
          {
            letter: 'M',
            title: 'Mapping',
            Icon: FaCogs,
            description: 'We model workflow logic gates, data inputs, decision frameworks, and output structures.'
          },
          {
            letter: 'A',
            title: 'Architecture',
            Icon: FaCode,
            description: 'We build robust robotic processes, RPA bots, and AI automated connectors to execute tasks.'
          },
          {
            letter: 'I',
            title: 'Integration',
            Icon: FaShieldAlt,
            description: 'We connect the bots to legacy software, internal sheets, databases, and secure message boards.'
          },
          {
            letter: 'T',
            title: 'Testing',
            Icon: FaRocket,
            description: 'We run multi-variant load tests to verify data accuracy, speed, and exception-handling routines.'
          },
          {
            letter: 'S',
            title: 'Support',
            Icon: FaHandshake,
            description: 'We monitor run logs, optimize exception routes, update target bindings, and scale infrastructure.'
          }
        ]}
      />

      {/* ── 5. Detailed Capabilities ── */}
      <section className="detailed-caps-exact">
        <div className="service-container">
          <div className="eyebrow-exact">Services</div>
          <h2 className="caps-title-exact">Our AI Capabilities:</h2>

          <div className="caps-row-exact">
            <div className="cap-pillar-exact">
              <h4>Business Process Automation</h4>
              <ul>
                <li>Streamlining repetitive manual tasks with custom software and RPA tools.</li>
                <li>Integrating automated workflows across your existing software stack.</li>
                <li>Reducing operational costs and human error through smart digital systems.</li>
              </ul>
            </div>
            <div className="cap-pillar-exact">
              <h4>Custom AI Development</h4>
              <ul>
                <li>Developing bespoke AI models tailored to your specific data and business logic.</li>
                <li>Implementing Natural Language Processing (NLP) for advanced text and voice analysis.</li>
                <li>Building predictive analytics tools to help you forecast trends and customer behavior.</li>
              </ul>
            </div>
            <div className="cap-pillar-exact">
              <h4>AI-Enhanced Data Processing</h4>
              <ul>
                <li>Automated data extraction, cleaning, and analysis using intelligent algorithms.</li>
                <li>Real-time insight generation from complex business data sets.</li>
                <li>Scaling your data processing capabilities without increasing headcount.</li>
              </ul>
            </div>
            <div className="cap-pillar-exact">
              <h4>Strategy & Implementation</h4>
              <ul>
                <li>Expert consulting to identify the highest-impact AI opportunities in your business.</li>
                <li>Step-by-step implementation roadmaps and post-launch optimization.</li>
                <li>Ongoing maintenance and monitoring to ensure your AI systems remain accurate and secure.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Zazz-Inspired Comparison Section ── */}
      <section className="comparison-section">
        <div className="service-container">
          <h2 className="comparison-title">Nexlifly vs. Others: Delivering Unmatched AI & Automation Services for Your Business Needs</h2>
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
                  <td className="col-challenge">High Operational Costs</td>
                  <td className="col-nexlifly">Automated workflows that typically reduce manual labor costs by 40-60%.</td>
                  <td className="col-others">Reliance on manual processes that increase costs as the business scales.</td>
                </tr>
                <tr>
                  <td className="col-challenge">Inconsistent Data Quality</td>
                  <td className="col-nexlifly">AI-driven data cleaning and processing that ensures 99.9% accuracy in your reports.</td>
                  <td className="col-others">Manual data entry and analysis that lead to frequent errors and poor decisions.</td>
                </tr>
                <tr>
                  <td className="col-challenge">Slow Decision Making</td>
                  <td className="col-nexlifly">Real-time AI insights that allow you to react to market changes in minutes, not days.</td>
                  <td className="col-others">Static reporting that takes days or weeks to compile and analyze.</td>
                </tr>
                <tr>
                  <td className="col-challenge">Lack of AI Expertise</td>
                  <td className="col-nexlifly">Full-service AI consulting and development from senior data scientists and engineers.</td>
                  <td className="col-others">Basic automation tools with little attention to complex business logic or AI strategy.</td>
                </tr>
                <tr>
                  <td className="col-challenge">Security Concerns</td>
                  <td className="col-nexlifly">Privacy-first AI implementation that protects your sensitive business and customer data.</td>
                  <td className="col-others">Generic AI tools that often compromise data privacy and security.</td>
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

export default AiAutomation;
