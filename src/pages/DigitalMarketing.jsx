import React, { useEffect } from 'react';
import CapabilityForm from '../components/CapabilityForm';
import { FaRegLightbulb, FaCogs, FaCode, FaShieldAlt, FaRocket, FaHandshake, FaChevronRight, FaCheckCircle, FaMobileAlt, FaFileInvoiceDollar, FaChartLine, FaSearch, FaBullhorn, FaRegListAlt, FaGlobeAmericas, FaChartPie, FaUsers } from 'react-icons/fa';
import './DigitalMarketing.css';
import './ComparisonTable.css';
import CapabilityProcess from '../components/CapabilityProcess';

import { FaShieldHalved, FaArrowTrendUp } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import heroBg from '../assets/marketing_hero.jpg';

const DigitalMarketing = () => {

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
                <Link to="/">Home</Link> • Digital Marketing
              </nav>
              <div className="service-badge-top">Digital Marketing</div>
              <h1 className="hero-title">
                Strategic Digital Marketing | Data-Driven Growth, SEO, and Performance Marketing
              </h1>
              <p className="hero-desc">
                Scale your brand with precision-targeted marketing campaigns. From search engine dominance to viral social media strategies, we help you reach the right audience at the right time.
              </p>
              <div className="hero-cta-group">
                <button className="btn-hero-consult" onClick={() => window.open('https://calendly.com/nexlifly2/30min', '_blank')}>
                  Get Your Free Digital Marketing Audit <span className="blue-arrow">→</span>
                </button>
              </div>
            </div>

            <div className="hero-form-wrapper">
              <div className="form-card-exact">
                <CapabilityForm title="Grow Your Business Online" serviceName="Digital Marketing" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Specialized Solutions Section ── */}
      <section className="specialized-solutions">
        <div className="service-container">
          <h2 className="section-title-exact">Specialized Digital Marketing Solutions</h2>
          <div className="solutions-grid">
            {[
              "Search Engine Optimization (SEO)", "PPC & Search Ads", "Social Media Marketing", 
              "Content Marketing", "Email Automation", "Influencer Marketing", 
              "Conversion Rate Optimization", "Video Marketing", "Brand Identity Design", "Marketing Analytics"
            ].map((item, idx) => (
              <div key={idx} className="solution-card">
                <div className="solution-card-inner">
                  <div className="sol-icon">
                    {idx % 2 === 0 ? <FaSearch /> : <FaBullhorn />}
                  </div>
                  <h3>{item}</h3>
                  <p>High-impact {item.toLowerCase()} built to drive traffic, engagement, and revenue for your brand.</p>
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
              <div className="highlight-icon"><FaChartPie /></div>
              <h3>Tailored Growth for Your Unique Ecosystem</h3>
              <p>Every brand has a different audience. We customize growth programs through expert performance marketing to align with your brand voice, market position, and specific ROI goals without wasting budget.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon"><FaUsers /></div>
              <h3>Proven Results and Enterprise Trust</h3>
              <p>From global brands to high-growth startups, we help organizations meet their revenue targets with clarity and precision. Our expertise covers deep analytics, data-driven scaling, and customer lifetime value optimization.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon"><FaArrowTrendUp /></div>
              <h3>Seamless Integration Across Sales and Tools</h3>
              <p>Our team works directly with your sales and operations stakeholders to embed marketing best practices into your daily CRM workflows. We enable faster lead conversion and minimal friction in the buyer journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Zazz-Inspired Info Cards Section ── */}
      <section className="info-cards-section">
        <div className="service-container">
          <div className="zazz-section-header">
            <h2>Why Business Leaders Choose Nexlifly for Digital Marketing</h2>
          </div>
          <div className="info-cards-grid">
            <div className="info-card">
              <div className="info-card-icon"><FaRegListAlt /></div>
              <h3>Full-Cycle Visibility & Transparent Reporting</h3>
              <p>We provide comprehensive dashboards and real-time campaign tracking, ensuring your leadership team can make informed decisions based on clear, measurable ROI and engagement metrics.</p>
            </div>
            <div className="info-card">
              <div className="info-card-icon"><FaRegLightbulb /></div>
              <h3>Innovation That Drives Market Growth</h3>
              <p>Our approach is designed to keep pace with evolving marketing trends. We help you innovate securely, maintaining brand trust while implementing cutting-edge creative strategies that set you apart from competitors.</p>
            </div>
            <div className="info-card">
              <div className="info-card-icon"><FaGlobeAmericas /></div>
              <h3>Global Campaign Reach with Local Precision</h3>
              <p>Our delivery model offers global audience reach with high-speed local responsiveness. You receive specialized attention tailored to your specific industry, region, and target demographics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4.5 Process Framework Section ── */}
      <CapabilityProcess 
        title="Framework That Powers Our Enterprise Digital Marketing Process"
        frameworkName="Growth & Acquisition Optimization Lifecycle"
        abbreviation="GAOL"
        steps={[
          {
            letter: 'R',
            title: 'Research & Competitors',
            Icon: FaRegLightbulb,
            description: 'We analyze market keyword density, competitor traffic channels, and search demand to locate growth opportunities.'
          },
          {
            letter: 'S',
            title: 'Strategy & Planning',
            Icon: FaCogs,
            description: 'We design custom omni-channel conversion funnels, landing page wires, and target audience definitions.'
          },
          {
            letter: 'C',
            title: 'Content Creation',
            Icon: FaCode,
            description: 'We produce SEO-optimized search copy, conversion landing pages, and interactive high-converting visual assets.'
          },
          {
            letter: 'O',
            title: 'On-Page & Tech SEO',
            Icon: FaShieldAlt,
            description: 'We optimize structured meta schemas, speed elements, page indexing, and semantic keyword distribution.'
          },
          {
            letter: 'A',
            title: 'Advertising',
            Icon: FaRocket,
            description: 'We launch hyper-targeted Google, Meta, and LinkedIn PPC campaigns managed against conversion KPIs.'
          },
          {
            letter: 'R',
            title: 'Reporting',
            Icon: FaHandshake,
            description: 'We supply transparent analytics attribution tracking, customer acquisition cost metrics, and campaign tuning.'
          }
        ]}
      />

      {/* ── 5. Detailed Capabilities ── */}
      <section className="detailed-caps-exact">
        <div className="service-container">
          <div className="eyebrow-exact">Services</div>
          <h2 className="caps-title-exact">Our Marketing Capabilities:</h2>

          <div className="caps-row-exact">
            <div className="cap-pillar-exact">
              <h4>SEO & Content Strategy</h4>
              <ul>
                <li>Comprehensive keyword research and on-page/off-page SEO optimization.</li>
                <li>Content creation that engages users and builds authority in your niche.</li>
                <li>Technical SEO audits to ensure your site is perfectly indexed by search engines.</li>
              </ul>
            </div>
            <div className="cap-pillar-exact">
              <h4>Paid Advertising (PPC)</h4>
              <ul>
                <li>Strategic Google Ads, Meta Ads, and LinkedIn campaign management.</li>
                <li>High-conversion landing page design and A/B split testing.</li>
                <li>Advanced remarketing strategies to bring back lost prospects.</li>
              </ul>
            </div>
            <div className="cap-pillar-exact">
              <h4>Social Media & Branding</h4>
              <ul>
                <li>Full-service social media management across all major platforms.</li>
                <li>Influencer outreach and community building for long-term brand loyalty.</li>
                <li>Visual identity design and consistent brand messaging across all channels.</li>
              </ul>
            </div>
            <div className="cap-pillar-exact">
              <h4>Analytics & CRO</h4>
              <ul>
                <li>Detailed performance tracking and ROI analysis for all marketing spend.</li>
                <li>Heatmap analysis and user journey optimization to increase conversion rates.</li>
                <li>Marketing automation setup to streamline lead nurturing and customer retention.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Zazz-Inspired Comparison Section ── */}
      <section className="comparison-section">
        <div className="service-container">
          <h2 className="comparison-title">Nexlifly vs. Others: Delivering Unmatched Digital Marketing Services for Your Business Needs</h2>
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
                  <td className="col-challenge">Wasted Ad Spend</td>
                  <td className="col-nexlifly">Hyper-targeted campaigns and daily budget optimization to ensure maximum ROI for every dollar.</td>
                  <td className="col-others">"Set and forget" campaigns that drain budgets on irrelevant traffic and low-quality leads.</td>
                </tr>
                <tr>
                  <td className="col-challenge">Low Organic Visibility</td>
                  <td className="col-nexlifly">White-hat SEO strategies that build long-term authority and sustainable organic growth.</td>
                  <td className="col-others">Black-hat or outdated SEO tactics that risk search engine penalties and short-lived rankings.</td>
                </tr>
                <tr>
                  <td className="col-challenge">Inconsistent Branding</td>
                  <td className="col-nexlifly">Unified brand strategy that ensures your message is consistent across every digital touchpoint.</td>
                  <td className="col-others">Fragmented marketing efforts that confuse customers and weaken your brand identity.</td>
                </tr>
                <tr>
                  <td className="col-challenge">Lack of Transparent ROI</td>
                  <td className="col-nexlifly">Real-time reporting dashboards that show exactly where your leads and sales are coming from.</td>
                  <td className="col-others">Vague monthly reports with "vanity metrics" like likes and follows that don't drive revenue.</td>
                </tr>
                <tr>
                  <td className="col-challenge">Slow Strategy Adaptation</td>
                  <td className="col-nexlifly">Agile marketing approach that adjusts to market changes and competitor moves in real-time.</td>
                  <td className="col-others">Rigid, long-term plans that fail to capitalize on emerging trends or shift with consumer behavior.</td>
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

export default DigitalMarketing;
