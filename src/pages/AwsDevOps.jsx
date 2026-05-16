import React, { useEffect } from 'react';
import './AwsDevOps.css';
import './ComparisonTable.css';
import { FaChevronRight, FaCheckCircle, FaRocket, FaShieldAlt, FaMobileAlt, FaCode, FaHandshake, FaFileInvoiceDollar, FaChartLine, FaCloud, FaRegListAlt, FaRegLightbulb, FaGlobeAmericas, FaNetworkWired, FaUserShield, FaTools } from 'react-icons/fa';
import { FaShieldHalved, FaGear } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import heroBg from '../assets/cloud_hero.jpg';

const AwsDevOps = () => {
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
                <Link to="/">Home</Link> • AWS & DevOps
              </nav>
              <div className="service-badge-top">AWS & DevOps</div>
              <h1 className="hero-title">
                Enterprise Cloud & DevOps Solutions | Scalable, Secure, and Automated Infrastructure
              </h1>
              <p className="hero-desc">
                Optimize your cloud journey with expert AWS management and DevOps automation. We help you accelerate delivery, reduce costs, and ensure high availability for your mission-critical applications.
              </p>
              <div className="hero-cta-group">
                <button className="btn-hero-consult">
                  Book Your Free Cloud Infrastructure Audit <span className="blue-arrow">→</span>
                </button>
              </div>
            </div>

            <div className="hero-form-wrapper">
              <div className="form-card-exact">
                <h3>Get Started with Cloud Solutions</h3>
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
                    <textarea placeholder="Tell us about your cloud goals (e.g., migration, cost optimization, automation)"></textarea>
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
          <h2 className="section-title-exact">Specialized Cloud & DevOps Solutions</h2>
          <div className="solutions-grid">
            {[
              "AWS Migration", "Cloud Cost Optimization", "CI/CD Pipeline Setup", 
              "Infrastructure as Code", "Kubernetes & Docker", "Cloud Security Audits", 
              "Serverless Architecture", "Database Migration", "Disaster Recovery", "24/7 Cloud Support"
            ].map((item, idx) => (
              <div key={idx} className="solution-card">
                <div className="solution-card-inner">
                  <div className="sol-icon">
                    {idx % 2 === 0 ? <FaCloud /> : <FaGear />}
                  </div>
                  <h3>{item}</h3>
                  <p>High-performance {item.toLowerCase()} built with industry-standard tools for maximum efficiency.</p>
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
              <div className="highlight-icon"><FaNetworkWired /></div>
              <h3>Tailored Cloud for Your Unique Ecosystem</h3>
              <p>Every cloud journey is different. We customize AWS programs through expert DevOps consulting to align with your technology stack, compliance requirements, and operational goals without adding unnecessary overhead.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon"><FaUserShield /></div>
              <h3>Proven Compliance and Enterprise Trust</h3>
              <p>From SOC 2 and HIPAA to ISO 27001, we help organizations meet their regulatory obligations with clarity and precision. Our cloud expertise covers frameworks like GDPR, HIPAA, and SOC2 Type II certification.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon"><FaTools /></div>
              <h3>Seamless Integration Across Teams and Tools</h3>
              <p>Our team works directly with your engineering and IT stakeholders to embed cloud best practices into daily workflows. We enable faster execution, minimal disruption, and scalable infrastructure security.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Zazz-Inspired Info Cards Section ── */}
      <section className="info-cards-section">
        <div className="service-container">
          <div className="zazz-section-header">
            <h2>Why Business Leaders Choose Nexlifly for AWS & DevOps</h2>
          </div>
          <div className="info-cards-grid">
            <div className="info-card">
              <div className="info-card-icon"><FaRegListAlt /></div>
              <h3>Full-Cycle Visibility & Transparent Monitoring</h3>
              <p>We provide comprehensive dashboards and real-time infrastructure monitoring, ensuring your leadership team can make informed decisions based on clear, measurable performance metrics and cost reports.</p>
            </div>
            <div className="info-card">
              <div className="info-card-icon"><FaRegLightbulb /></div>
              <h3>Innovation That Drives Market Growth</h3>
              <p>Our approach is designed to keep pace with evolving cloud technologies. We help you innovate securely, maintaining user trust while implementing cutting-edge automation that sets you apart from competitors.</p>
            </div>
            <div className="info-card">
              <div className="info-card-icon"><FaGlobeAmericas /></div>
              <h3>Global Scaling with Local Precision</h3>
              <p>Our delivery model offers global cloud scalability with high-speed local responsiveness. You receive specialized attention tailored to your specific industry, region, and security requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Detailed Capabilities ── */}
      <section className="detailed-caps-exact">
        <div className="service-container">
          <div className="eyebrow-exact">Services</div>
          <h2 className="caps-title-exact">Our AWS & DevOps Capabilities:</h2>
          
          <div className="caps-row-exact">
            <div className="cap-pillar-exact">
              <h4>AWS Infrastructure Management</h4>
              <ul>
                <li>Expert setup and management of EC2, RDS, S3, and VPC environments.</li>
                <li>Cloud cost optimization and resource right-sizing to minimize monthly spend.</li>
                <li>Multi-region deployments for global availability and low latency.</li>
              </ul>
            </div>
            <div className="cap-pillar-exact">
              <h4>DevOps Automation & CI/CD</h4>
              <ul>
                <li>Automated deployment pipelines using GitHub Actions, Jenkins, or AWS CodePipeline.</li>
                <li>Infrastructure as Code (IaC) implementation with Terraform or CloudFormation.</li>
                <li>Containerization and orchestration using Docker and Kubernetes (EKS).</li>
              </ul>
            </div>
            <div className="cap-pillar-exact">
              <h4>Cloud Security & Compliance</h4>
              <ul>
                <li>Implementing IAM best practices and least-privilege access controls.</li>
                <li>Automated security scanning and threat detection for your infrastructure.</li>
                <li>Ensuring SOC2, HIPAA, or GDPR compliance within your cloud environment.</li>
              </ul>
            </div>
            <div className="cap-pillar-exact">
              <h4>Disaster Recovery & Monitoring</h4>
              <ul>
                <li>Designing high-availability architectures with automated failover and backups.</li>
                <li>Real-time alerting and performance monitoring using CloudWatch and Grafana.</li>
                <li>Proactive incident management and 24/7 technical support.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Zazz-Inspired Comparison Section ── */}
      <section className="comparison-section">
        <div className="service-container">
          <h2 className="comparison-title">Nexlifly vs. Others: Delivering Unmatched AWS & DevOps Services for Your Business Needs</h2>
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
                  <td className="col-challenge">Spiraling Cloud Costs</td>
                  <td className="col-nexlifly">Advanced cost-management strategies that typically reduce cloud spend by 20-30%.</td>
                  <td className="col-others">Often set and forget, leading to bloated monthly invoices and wasted resources.</td>
                </tr>
                <tr>
                  <td className="col-challenge">Frequent Downtime</td>
                  <td className="col-nexlifly">Auto-scaling and self-healing infrastructure that ensures 99.9% uptime for your apps.</td>
                  <td className="col-others">Manual intervention required for failovers, resulting in extended outages.</td>
                </tr>
                <tr>
                  <td className="col-challenge">Security Vulnerabilities</td>
                  <td className="col-nexlifly">Zero-trust security architecture with automated patching and real-time threat monitoring.</td>
                  <td className="col-others">Periodic security checks that often miss critical vulnerabilities in real-time.</td>
                </tr>
                <tr>
                  <td className="col-challenge">Slow Release Cycles</td>
                  <td className="col-nexlifly">Fully automated CI/CD pipelines that enable multiple deployments per day with zero friction.</td>
                  <td className="col-others">Manual, error-prone deployment processes that slow down innovation.</td>
                </tr>
                <tr>
                  <td className="col-challenge">Complexity at Scale</td>
                  <td className="col-nexlifly">Simplified cloud management through IaC, making it easy to replicate and scale environments.</td>
                  <td className="col-others">Undocumented, manual setups that become impossible to manage as the company grows.</td>
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

export default AwsDevOps;
