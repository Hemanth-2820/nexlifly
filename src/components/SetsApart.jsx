import React, { useState } from 'react';
import './SetsApart.css';
import { FaChevronRight } from 'react-icons/fa';

const tabsData = [
  {
    id: "01",
    menuTitle: "Strategic Delivery at Scale",
    stat: "95%",
    subtitle: "On-Time & In-Scope Execution",
    desc: "We deliver lightweight, reliable digital solutions with predictable velocity and total code control. Every sprint cycle focuses purely on launch-readiness and zero runtime disruption.",
    link: "Explore Our Custom Workflow »"
  },
  {
    id: "02",
    menuTitle: "Secure. Scalable. Lightweight.",
    stat: "100%",
    subtitle: "Custom Engineered Backend Foundations",
    desc: "No bloated pre-made plugins or insecure template files. We code absolute integrity directly into every layer, making sure your frontend loads instantly and stays completely locked down.",
    link: "See Technology Stack »"
  },
  {
    id: "03",
    menuTitle: "Faster Launch, Lower Cost",
    stat: "40%",
    subtitle: "Reduced Budget Requirements",
    desc: "By cutting out middle-management overhead and corporate commissions, we pass the direct freelance value on to you—allowing you to launch earlier and scale smarter with robust architecture.",
    link: "View Client Results »"
  }
];

const SetsApart = () => {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const currentTab = tabsData[activeTabIdx];

  return (
    <section className="setsapart-section">
      {/* Upper Banner Image Module */}
      <div className="setsapart-banner">
        <img 
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1470&auto=format&fit=crop" 
          alt="Nexlifly collaborative development team" 
        />
      </div>

      {/* Lower 3-Column Grid Content Module */}
      <div className="setsapart-grid-container">
        
        {/* Column 1: Main Heading */}
        <div className="setsapart-col col-heading">
          <h2 className="setsapart-main-title">What Sets<br />Us Apart</h2>
        </div>

        {/* Column 2: Vertical Interactive Tabs */}
        <div className="setsapart-col col-tabs">
          {tabsData.map((tab, idx) => (
            <div 
              key={tab.id} 
              className={`tab-menu-item ${activeTabIdx === idx ? 'active' : ''}`}
              onClick={() => setActiveTabIdx(idx)}
            >
              <span className="tab-menu-num">{tab.id}</span>
              <h3 className="tab-menu-text">{tab.menuTitle}</h3>
            </div>
          ))}
        </div>

        {/* Column 3: Dynamic Detail Pane */}
        <div className="setsapart-col col-details">
          <div className="detail-pane-wrapper" key={activeTabIdx}>
            <div className="detail-stat">{currentTab.stat}</div>
            <h4 className="detail-subtitle">{currentTab.subtitle}</h4>
            <p className="detail-desc">{currentTab.desc}</p>
            
            <a href="#workflow" className="detail-link">
              {currentTab.link}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SetsApart;
