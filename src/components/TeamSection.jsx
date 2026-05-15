import React from 'react';
import './TeamSection.css';
import { FaLinkedinIn, FaQuoteRight } from 'react-icons/fa';

const teamData = [
  {
    id: 1,
    name: "Revanth Podduturi",
    role: "Software Developer",
    designation: "Software Developer",
    subheading: "From the desk of our Developer",
    bio: "A dedicated Software Developer with 5+ years of professional experience engineering robust technical foundations, refactoring legacy engines, and shipping scalable web products that empower businesses to reach the next phase of digital growth.",
    image: "/revanth_photo.jpg",
    linkedin: "https://linkedin.com"
  },
  {
    id: 2,
    name: "Hemanth Silla",
    role: "Full Stack Engineer",
    designation: "Full Stack Engineer — AI/ML & Cloud",
    subheading: "From the desk of our Full Stack Engineer",
    bio: "With 1+ year of hands-on experience, Hemanth brings a dynamic edge to full-stack development—bridging intelligent AI/ML integrations with robust cloud infrastructure. He architects end-to-end solutions that are fast, scalable, and future-ready, ensuring every product we ship is built for the demands of tomorrow's digital landscape.",
    image: "/hemanth_photo.jpg",
    linkedin: "https://linkedin.com"
  },
  {
    id: 3,
    name: "Sumanth Silla",
    role: "Data Analyst",
    designation: "Data Analyst",
    subheading: "From the desk of our Data Analyst",
    bio: "With 2+ years of experience transforming raw data into actionable intelligence, Sumanth drives strategic decisions through deep analytical insight. He specializes in uncovering trends, building dashboards, and delivering data-driven narratives that empower Nexlifly clients to optimize performance and stay ahead of the curve.",
    image: "/sumanth_photo.png",
    linkedin: "https://linkedin.com"
  }
];

const TeamSection = () => {
  return (
    <section className="team-section-wrapper">
      <div className="team-container">
        {/* Centered Title Segment */}
        <div className="team-header">
          <h2 className="team-main-title">
            Innovation with Integrity. This<br />
            Defines How We Lead.
          </h2>
        </div>

        {/* Stack of team members */}
        <div className="team-list">
          {teamData.map((member, idx) => (
            <div className="team-row" key={member.id}>
              {/* Left: Professional Image Column */}
              <div className="team-image-col">
                <div className="image-box-container">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="team-photo" 
                  />
                  
                  {/* Abstract Corner Lines Graphic (from screenshot) */}
                  <div className="abstract-corner-frame">
                    <span className="corner-line line-h-1"></span>
                    <span className="corner-line line-h-2"></span>
                    <span className="corner-line line-h-3"></span>
                    <span className="corner-line line-v-1"></span>
                    <span className="corner-line line-v-2"></span>
                    <span className="corner-line line-v-3"></span>
                  </div>
                </div>
              </div>

              {/* Right: Content Column */}
              <div className="team-info-col">
                <div className="quote-icon-box">
                  {/* Exact double quote visual mark */}
                  <span className="quote-visual-symbol">”</span>
                </div>
                
                <h4 className="team-desk-label">{member.subheading}</h4>
                
                <p className="team-bio-text">{member.bio}</p>
                
                <div className="team-footer-profile">
                  <h3 className="member-name">{member.name}</h3>
                  <span className="member-designation">{member.designation}</span>
                  
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="member-linkedin-btn"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
