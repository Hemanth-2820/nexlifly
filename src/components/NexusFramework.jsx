import React, { useState } from 'react';
import './NexusFramework.css';
import {
  FaCompass,
  FaCogs,
  FaShieldAlt,
  FaUsers,
  FaChartLine,
} from 'react-icons/fa';

const nexusCards = [
  {
    letter: 'N',
    title: 'Navigate Strategy',
    Icon: FaCompass,
    description:
      'We map your business goals, technology landscape, and competitive context to architect a clear, actionable digital roadmap that drives measurable outcomes from day one.',
  },
  {
    letter: 'E',
    title: 'Engineer the Platform',
    Icon: FaCogs,
    description:
      'We engineer full-stack platforms built for performance and reliability — using modern frameworks, clean code practices, and CI/CD pipelines that never slow you down.',
  },
  {
    letter: 'X',
    title: 'X-Factor Security & QA',
    Icon: FaShieldAlt,
    description:
      'We embed rigorous testing, vulnerability assessments, and compliance checks at every layer so your platform launches hardened, resilient, and enterprise-ready.',
  },
  {
    letter: 'U',
    title: 'Unite Teams & Users',
    Icon: FaUsers,
    description:
      'We bridge the gap between your teams and users through intuitive onboarding, change management, and continuous feedback loops that drive real-world engagement.',
  },
  {
    letter: 'S',
    title: 'Scale & Support',
    Icon: FaChartLine,
    description:
      'We provide proactive post-launch support, continuous optimization, and infrastructure scaling strategies that ensure your platform grows with your business.',
  },
];

const NexusFramework = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <section className="nexus-section">
      <div className="nexus-inner">

        {/* Header */}
        <div className="nexus-header">
          <h2 className="nexus-title">
            Our Framework for Scalable, Secure,<br />
            and Sustainable Transformation
          </h2>
          <p className="nexus-subtitle">
            Nexlifly's <strong>NEXUS</strong> framework ensures enterprise transformation is not
            only delivered — but governed, secured, adopted, and evolved. NEXUS helps you scale
            faster, reduce risk, and stay future-ready.
          </p>
        </div>

        {/* Card Slider */}
        <div className="nexus-slider">
          {nexusCards.map((card, idx) => {
            const isActive = activeIndex === idx;
            const { Icon } = card;
            return (
              <div
                key={card.letter}
                className={`nexus-card${isActive ? ' nexus-card--active' : ''}`}
                onMouseEnter={() => setActiveIndex(idx)}
                id={`nexus-card-${card.letter}`}
                role="button"
                tabIndex={0}
                aria-expanded={isActive}
              >
                {/* Blue left column */}
                <div className="nexus-blue-col">
                  <div className="nexus-icon-circle">
                    <Icon className="nexus-icon" />
                  </div>
                  <span className="nexus-letter">{card.letter}</span>
                </div>

                {/* White content panel */}
                <div className="nexus-content-panel">
                  <h3 className="nexus-card-title">{card.title}</h3>
                  <p className="nexus-card-desc">{card.description}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default NexusFramework;
