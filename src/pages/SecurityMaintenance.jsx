import React, { useEffect } from 'react';
import CapabilityForm from '../components/CapabilityForm';
import { FaRegLightbulb, FaCogs, FaCode, FaShieldAlt, FaRocket, FaHandshake, FaChevronRight, FaCheckCircle, FaMobileAlt, FaFileInvoiceDollar, FaChartLine, FaLock, FaUserShield, FaRegListAlt, FaGlobeAmericas, FaUserLock, FaConnectdevelop } from 'react-icons/fa';
import './SecurityMaintenance.css';
import './ComparisonTable.css';
import CapabilityProcess from '../components/CapabilityProcess';

import { FaShieldHalved, FaFileShield } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import heroBg from '../assets/security_hero.jpg';

const SecurityMaintenance = () => {

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
                <Link to="/">Home</Link> • Security & Maintenance
              </nav>
              <div className="service-badge-top">Security & Maintenance</div>
              <h1 className="hero-title">
                Proactive Cybersecurity & IT Maintenance | Protecting Your Digital Assets 24/7
              </h1>
              <p className="hero-desc">
                Defend your business against evolving cyber threats. Our comprehensive security and maintenance services ensure your systems stay updated, compliant, and resilient against attacks.
              </p>
              <div className="hero-cta-group">
                <button className="btn-hero-consult" onClick={() => window.open('https://calendly.com/nexlifly2/30min', '_blank')}>
                  Get a Comprehensive Security Audit Today <span className="blue-arrow">→</span>
                </button>
              </div>
            </div>

            <div className="hero-form-wrapper">
              <div className="form-card-exact">
                <CapabilityForm title="Request a Security Assessment" serviceName="Security & Maintenance" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Specialized Solutions Section ── */}
      <section className="specialized-solutions">
        <div className="service-container">
          <h2 className="section-title-exact">Specialized Security & Maintenance Solutions</h2>
          <div className="solutions-grid">
            {[
              "Threat Detection", "Managed Firewalls", "Endpoint Security", 
              "Regular Patching", "Cloud Security", "Vulnerability Audits", 
              "Compliance (GDPR/SOC2)", "Backup & Recovery", "Security Training", "24/7 Monitoring"
            ].map((item, idx) => (
              <div key={idx} className="solution-card">
                <div className="solution-card-inner">
                  <div className="sol-icon">
                    {idx % 2 === 0 ? <FaLock /> : <FaUserShield />}
                  </div>
                  <h3>{item}</h3>
                  <p>High-performance {item.toLowerCase()} built with industry-leading security frameworks.</p>
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
              <div className="highlight-icon"><FaUserLock /></div>
              <h3>Tailored Security for Your Unique Ecosystem</h3>
              <p>Every organization operates differently. Nexlifly customizes programs through expert cybersecurity consulting to align with your technology stack, compliance requirements, and operational goals without unnecessary overhead.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon"><FaFileShield /></div>
              <h3>Proven Compliance and Enterprise Trust</h3>
              <p>From SOC 2, HIPAA, ISO 27001, and PCI-DSS to NIST CSF, PIPEDA, and GDPR, we help organizations meet their regulatory obligations with clarity and precision. Our compliance expertise also covers CCPA and FedRAMP.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon"><FaConnectdevelop /></div>
              <h3>Seamless Integration Across Teams and Tools</h3>
              <p>Our team works directly with your DevOps, engineering, and IT stakeholders to embed cybersecurity into daily workflows. We enable faster execution, minimal disruption, and truly scalable security infrastructure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Zazz-Inspired Info Cards Section ── */}
      <section className="info-cards-section">
        <div className="service-container">
          <div className="zazz-section-header">
            <h2>Why Business Leaders Choose Nexlifly for Security & Maintenance</h2>
          </div>
          <div className="info-cards-grid">
            <div className="info-card">
              <div className="info-card-icon"><FaRegListAlt /></div>
              <h3>Clear Visibility & Executive Alignment</h3>
              <p>We deliver transparent reporting, KPI tracking, and actionable insights so your leadership team can make informed decisions based on risk, performance, and security posture.</p>
            </div>
            <div className="info-card">
              <div className="info-card-icon"><FaRegLightbulb /></div>
              <h3>Security That Enables Innovation</h3>
              <p>Our approach is designed to keep pace with your business. We help you innovate securely, maintaining customer trust without compromising protection or agility.</p>
            </div>
            <div className="info-card">
              <div className="info-card-icon"><FaGlobeAmericas /></div>
              <h3>Global Expertise with Local Precision</h3>
              <p>Our delivery model offers both global reach and local responsiveness. You receive specialized attention tailored to your region, industry, and security maturity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4.5 Process Framework Section ── */}
      <CapabilityProcess 
        title="Framework That Powers Our Enterprise Security & Maintenance Process"
        frameworkName="Enterprise Security & Resilience Lifecycle"
        abbreviation="ESRL"
        steps={[
          {
            letter: 'A',
            title: 'Assessment',
            Icon: FaRegLightbulb,
            description: 'We run complete perimeter port scans, server config audits, and compliance gap assessments.'
          },
          {
            letter: 'D',
            title: 'Detection',
            Icon: FaCogs,
            description: 'We configure enterprise Web Application Firewalls (WAF), integrity monitors, and intrusion alerts.'
          },
          {
            letter: 'I',
            title: 'Isolation',
            Icon: FaCode,
            description: 'We architect strict network subnets, container boundaries, and enforce zero-trust access.'
          },
          {
            letter: 'H',
            title: 'Hardening',
            Icon: FaShieldAlt,
            description: 'We install latest updates, disable redundant services, strengthen server encryptions, and passwords.'
          },
          {
            letter: 'M',
            title: 'Monitoring',
            Icon: FaRocket,
            description: 'We enable 24/7 security logging, automated cloud backups, and proactive host vulnerability scanning.'
          },
          {
            letter: 'R',
            title: 'Recovery',
            Icon: FaHandshake,
            description: 'We define disaster response playbooks, failover testing, and maintain rapid sandbox restore.'
          }
        ]}
      />

      {/* ── 5. Detailed Capabilities ── */}
      <section className="detailed-caps-exact">
        <div className="service-container">
          <div className="eyebrow-exact">Services</div>
          <h2 className="caps-title-exact">Our Security Capabilities:</h2>

          <div className="caps-row-exact">
            <div className="cap-pillar-exact">
              <h4>Managed Cybersecurity</h4>
              <ul>
                <li>Round-the-clock threat monitoring and incident response.</li>
                <li>Next-gen firewall management and intrusion prevention systems.</li>
                <li>Comprehensive endpoint protection for all business devices.</li>
              </ul>
            </div>
            <div className="cap-pillar-exact">
              <h4>Proactive Maintenance</h4>
              <ul>
                <li>Automated patching for operating systems and critical applications.</li>
                <li>Regular system health checks and performance tuning.</li>
                <li>Detailed inventory management and asset tracking.</li>
              </ul>
            </div>
            <div className="cap-pillar-exact">
              <h4>Compliance & Governance</h4>
              <ul>
                <li>Expert guidance on GDPR, HIPAA, SOC2, and ISO 27001 compliance.</li>
                <li>Regular vulnerability scanning and penetration testing.</li>
                <li>Policy development and employee security awareness training.</li>
              </ul>
            </div>
            <div className="cap-pillar-exact">
              <h4>Business Continuity</h4>
              <ul>
                <li>Managed cloud backups with regular restoration testing.</li>
                <li>Disaster recovery planning and execution for minimum downtime.</li>
                <li>High-availability architecture design and implementation.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Zazz-Inspired Comparison Section ── */}
      <section className="comparison-section">
        <div className="service-container">
          <h2 className="comparison-title">Nexlifly vs. Others: Delivering Unmatched Cybersecurity Services for Your Business Needs</h2>
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
                  <td className="col-challenge">Lack of 24/7 Support</td>
                  <td className="col-nexlifly">Provides round-the-clock monitoring and support, ensuring your business is always protected.</td>
                  <td className="col-others">Limited support hours; often only during standard business hours.</td>
                </tr>
                <tr>
                  <td className="col-challenge">Compliance Issues</td>
                  <td className="col-nexlifly">ISO 27001 & SOC 2 Type II certified practices, ensuring your business stays compliant with industry standards.</td>
                  <td className="col-others">Compliance standards are often not clearly defined, leading to potential risks and fines.</td>
                </tr>
                <tr>
                  <td className="col-challenge">Evolving Cyber Threats</td>
                  <td className="col-nexlifly">Uses the latest AI-driven tools and strategies to mitigate emerging cyber threats and safeguard your business.</td>
                  <td className="col-others">Limited focus on evolving threats; reliant on outdated security measures.</td>
                </tr>
                <tr>
                  <td className="col-challenge">Scalable Security</td>
                  <td className="col-nexlifly">Solutions tailored to scale with your business, allowing for growth without compromising security.</td>
                  <td className="col-others">Solutions often lack flexibility, leading to security gaps as businesses scale.</td>
                </tr>
                <tr>
                  <td className="col-challenge">Lack of Customization</td>
                  <td className="col-nexlifly">Tailored security plans designed specifically for your unique business needs and ecosystem.</td>
                  <td className="col-others">One-size-fits-all solutions that don't address unique business requirements.</td>
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

export default SecurityMaintenance;
