import React, { useEffect, useState } from 'react';
import { FaRegLightbulb, FaCogs, FaCode, FaShieldAlt, FaRocket, FaHandshake, FaChevronRight, FaCheckCircle, FaMobileAlt, FaFileInvoiceDollar, FaChartLine, FaRobot, FaRegListAlt, FaGlobeAmericas } from 'react-icons/fa';
import './AiChatbots.css';
import './ComparisonTable.css';
import CapabilityProcess from '../components/CapabilityProcess';

import { FaShieldHalved, FaMessage, FaComments, FaUserCheck, FaShareNodes } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import heroBg from '../assets/ai_hero.png';

const AiChatbots = () => {
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
                <Link to="/">Home</Link> • AI Chatbots
              </nav>
              <div className="service-badge-top">AI Chatbots</div>
              <h1 className="hero-title">
                Intelligent AI Chatbots | Automated Customer Support & High-Engagement Conversational AI
              </h1>
              <p className="hero-desc">
                Enhance your customer experience with smart AI chatbots. From 24/7 support to automated lead generation, we build conversational agents that understand your brand and delight your users.
              </p>
              <div className="hero-cta-group">
                <button className="btn-hero-consult">
                  Build Your Custom AI Chatbot Today <span className="blue-arrow">→</span>
                </button>
              </div>
            </div>

            <div className="hero-form-wrapper">
              <div className="form-card-exact">
                <h3>Request a Chatbot Demo</h3>
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
                    <textarea placeholder="Tell us about your chatbot goals (e.g., support automation, lead gen, platform integration)"></textarea>
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
          <h2 className="section-title-exact">Specialized AI Chatbot Solutions</h2>
          <div className="solutions-grid">
            {[
              "Customer Support Bots", "Lead Generation Bots", "Appointment Scheduling Bots", 
              "E-Commerce Shopping Assistants", "Internal Knowledge Base Bots", "Multi-Language Chatbots", 
              "WhatsApp & Social Media Bots", "Custom NLP Models", "Voice-Enabled Chatbots", "24/7 Automated Support"
            ].map((item, idx) => (
              <div key={idx} className="solution-card">
                <div className="solution-card-inner">
                  <div className="sol-icon">
                    {idx % 2 === 0 ? <FaRobot /> : <FaMessage />}
                  </div>
                  <h3>{item}</h3>
                  <p>High-performance {item.toLowerCase()} built to engage users and streamline your communication.</p>
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
              <div className="highlight-icon"><FaComments /></div>
              <h3>Tailored Conversations for Your Unique Ecosystem</h3>
              <p>Every brand has a different voice. We customize AI chatbots to align with your brand persona, customer FAQs, and engagement goals without sounding robotic or impersonal to your users.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon"><FaUserCheck /></div>
              <h3>Proven Resolution and Enterprise Trust</h3>
              <p>With 24/7 availability and secure handling of user data, we help organizations resolve up to 80% of common queries instantly. Our expertise covers smart, conversational AI and data privacy.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon"><FaShareNodes /></div>
              <h3>Seamless Integration Across Channels and Tools</h3>
              <p>Our team works directly with your support and marketing stakeholders to embed chatbots into your daily CRM and social workflows. We enable faster response times and minimal human intervention.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Zazz-Inspired Info Cards Section ── */}
      <section className="info-cards-section">
        <div className="service-container">
          <div className="zazz-section-header">
            <h2>Why Business Leaders Choose Nexlifly for AI Chatbots</h2>
          </div>
          <div className="info-cards-grid">
            <div className="info-card">
              <div className="info-card-icon"><FaRegListAlt /></div>
              <h3>Full-Cycle Visibility & Transparent Reporting</h3>
              <p>We provide comprehensive dashboards and real-time conversation tracking, ensuring your leadership team can make informed decisions based on clear, measurable engagement and resolution metrics.</p>
            </div>
            <div className="info-card">
              <div className="info-card-icon"><FaRegLightbulb /></div>
              <h3>Innovation That Drives Market Growth</h3>
              <p>Our approach is designed to keep pace with evolving conversational AI technologies. We help you innovate securely, maintaining user trust while implementing cutting-edge features that set you apart from competitors.</p>
            </div>
            <div className="info-card">
              <div className="info-card-icon"><FaGlobeAmericas /></div>
              <h3>Global Scaling with Local Precision</h3>
              <p>Our delivery model offers global chatbot reach with high-speed local responsiveness. You receive specialized attention tailored to your specific industry, region, and language requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4.5 Process Framework Section ── */}
      <CapabilityProcess 
        title="Framework That Powers Our Enterprise AI Chatbots Process"
        frameworkName="Conversational Intelligence Engineering Process"
        abbreviation="CIEP"
        steps={[
          {
            letter: 'D',
            title: 'Discovery & Persona',
            Icon: FaRegLightbulb,
            description: 'We define the chatbot persona, customer engagement goals, conversational tone, and primary FAQ sets.'
          },
          {
            letter: 'D',
            title: 'Data Prep & RAG',
            Icon: FaCogs,
            description: 'We prepare context vectors, structure corporate training data, and connect secure RAG memory databases.'
          },
          {
            letter: 'T',
            title: 'Training & NLP',
            Icon: FaCode,
            description: 'We fine-tune the LLM and test natural language understanding paths to prevent off-topic or hallucinating responses.'
          },
          {
            letter: 'I',
            title: 'Integration',
            Icon: FaShieldAlt,
            description: 'We embed the chatbot widget onto your site and wire API webhooks to your internal CRM and databases.'
          },
          {
            letter: 'E',
            title: 'Evaluation',
            Icon: FaRocket,
            description: 'We conduct shadow testing and measure customer satisfaction scores to ensure high resolution rates.'
          },
          {
            letter: 'M',
            title: 'Monitoring',
            Icon: FaHandshake,
            description: 'We review conversation logs regularly, update semantic intents, and continuously tune the model.'
          }
        ]}
      />

      {/* ── 5. Detailed Capabilities ── */}
      <section className="detailed-caps-exact">
        <div className="service-container">
          <div className="eyebrow-exact">Services</div>
          <h2 className="caps-title-exact">Our Chatbot Capabilities:</h2>

          <div className="caps-row-exact">
            <div className="cap-pillar-exact">
              <h4>Advanced NLP & Understanding</h4>
              <ul>
                <li>Chatbots that understand intent and context for human-like conversations.</li>
                <li>Support for multiple languages to serve a global customer base.</li>
                <li>Continuous learning from user interactions to improve accuracy over time.</li>
              </ul>
            </div>
            <div className="cap-pillar-exact">
              <h4>Seamless Integrations</h4>
              <ul>
                <li>Connecting chatbots with your CRM, helpdesk, and internal databases.</li>
                <li>Omnichannel support across Website, WhatsApp, Facebook, and more.</li>
                <li>Automated data entry and ticket creation from chat interactions.</li>
              </ul>
            </div>
            <div className="cap-pillar-exact">
              <h4>Lead Gen & Sales Automation</h4>
              <ul>
                <li>Qualifying leads in real-time and booking meetings for your sales team.</li>
                <li>Personalized product recommendations for e-commerce customers.</li>
                <li>Reducing friction in the user journey to increase conversion rates.</li>
              </ul>
            </div>
            <div className="cap-pillar-exact">
              <h4>Analytics & Optimization</h4>
              <ul>
                <li>Detailed insights into user queries, satisfaction scores, and bot performance.</li>
                <li>A/B testing of conversation flows to maximize engagement.</li>
                <li>Ongoing maintenance and updates to reflect your evolving brand voice.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Zazz-Inspired Comparison Section ── */}
      <section className="comparison-section">
        <div className="service-container">
          <h2 className="comparison-title">Nexlifly vs. Others: Delivering Unmatched AI Chatbot Services for Your Business Needs</h2>
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
                  <td className="col-challenge">Frustrating Rule-Based Bots</td>
                  <td className="col-nexlifly">AI chatbots that use Natural Language Processing to understand and solve complex queries.</td>
                  <td className="col-others">Generic bots that rely on rigid scripts and often fail to understand simple variations.</td>
                </tr>
                <tr>
                  <td className="col-challenge">Low Resolution Rates</td>
                  <td className="col-nexlifly">Smart bots that can resolve up to 80% of common support queries without human intervention.</td>
                  <td className="col-others">Basic bots that quickly frustrate users and require frequent human escalation.</td>
                </tr>
                <tr>
                  <td className="col-challenge">Disconnected User Data</td>
                  <td className="col-nexlifly">Real-time integration with your CRM for personalized, context-aware conversations.</td>
                  <td className="col-others">Siloed chat tools that don't share data with your other business applications.</td>
                </tr>
                <tr>
                  <td className="col-challenge">Lack of Multi-Platform Support</td>
                  <td className="col-nexlifly">Unified chatbot strategy across your Website, Social Media, and Messaging Apps.</td>
                  <td className="col-others">Fragmented bot experiences that vary wildly between different platforms.</td>
                </tr>
                <tr>
                  <td className="col-challenge">High Setup Complexity</td>
                  <td className="col-nexlifly">Full-service implementation from design to deployment and ongoing management.</td>
                  <td className="col-others">DIY platforms that require significant time and expertise to build anything useful.</td>
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

export default AiChatbots;
