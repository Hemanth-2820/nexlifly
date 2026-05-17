import React, { useEffect, useRef, useState } from 'react';
import './ProcessSections.css';
import { FaChevronRight } from 'react-icons/fa';

const processData = [
  {
    num: "01",
    tag: "DELIVERY",
    title: "Outcome-Focused Delivery",
    desc: "We measure success by impact, not effort. Every solution is built to drive measurable business outcomes, whether that’s increased efficiency, faster time-to-market, or new revenue streams.",
    bullets: [
      "Business-aligned delivery focused on measurable outcomes",
      "Agile frameworks accelerate time-to-value and reduce risk",
      "Streamlined execution ensures consistent, scalable impact",
      "Designed to unlock operational efficiency and revenue growth"
    ],
    image: "/delivery_img.png"
  },
  {
    num: "02",
    tag: "EXPERTISE",
    title: "Full-Stack Custom Expertise",
    desc: "From visual user-experience strategy to robust secure cloud implementation, we cover the full technology stack using modern lightweight frameworks. Our integrated workflow eliminates bottlenecks.",
    bullets: [
      "Full-spectrum custom architecture across modern stacks",
      "Tailored responsive interfaces using React & Next.js",
      "Bulletproof, lightweight backend speed optimization",
      "Continuous integration & proactive performance auditing"
    ],
    image: "/expertise_img.png"
  },
  {
    num: "03",
    tag: "MINDSET",
    title: "Partnership Mindset",
    desc: "We don't work for you; we work with you. We invest in long-term freelance partnerships, acting as a strategic extension of your own project team with shared milestones and ultimate accountability.",
    bullets: [
      "Collaborative sprint workflow built for daily cooperation",
      "Complete engineering alignment with your design vision",
      "Deep scaling roadmaps & long-term advice included",
      "Highly responsive support dedicated entirely to you"
    ],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop"
  },
  {
    num: "04",
    tag: "INTEGRITY",
    title: "Honest, Direct Transparency",
    desc: "No hidden corporate margins, no slow bureaucratic delays, and absolutely zero generic template reselling. We value your confidence and safeguard it by providing completely open-book communications.",
    bullets: [
      "Direct, daily correspondence with the actual developers",
      "Frequent staging deployments to witness live milestones",
      "100% transparent budget breakouts with zero hidden surprises",
      "Clean, documented custom source code handover"
    ],
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1397&auto=format&fit=crop"
  }
];

// Simplified Card component to rely entirely on hardware-accelerated CSS Sticky Stacking
const ProcessCard = ({ item, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`process-card ${isEven ? 'layout-normal' : 'layout-reverse'}`}>
      <div className="process-left">
        <div className="process-content-box">
          <span className="process-subtitle">{item.num} — {item.tag}</span>
          <h2 className="process-title">{item.title}</h2>
          
          <p className="process-desc">{item.desc}</p>
          
          <ul className="process-bullets">
            {item.bullets.map((bullet, idx) => (
              <li key={idx}>{bullet}</li>
            ))}
          </ul>
          
          <button className="process-cta-btn" onClick={() => window.open('https://calendly.com/nexlifly2/30min', '_blank')}>
            Schedule a Consultation <FaChevronRight className="btn-arrow-icon" />
          </button>
        </div>
      </div>
      
      <div className="process-right">
        <div className="process-image-wrapper">
          <img src={item.image} alt={`${item.title} Visual`} loading="lazy" />
        </div>
      </div>
    </div>
  );
};

const ProcessSections = () => {
  return (
    <section className="process-sections-container">
      {processData.map((item, idx) => (
        <ProcessCard key={idx} item={item} index={idx} />
      ))}
    </section>
  );
};

export default ProcessSections;
