import React, { useEffect } from 'react';
import AboutUs from '../components/AboutUs';
import TeamSection from '../components/TeamSection';
import PartnerSection from '../components/PartnerSection';
import NexusFramework from '../components/NexusFramework';
import CoreValues from '../components/CoreValues';

const About = () => {
  // Auto-scroll to top whenever user routes to this page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div 
      className="about-page-wrapper" 
      style={{ 
        paddingTop: '80px', 
        backgroundColor: '#ebf3f9', // Keep consistent backdrop
        minHeight: 'calc(100vh - 80px)', // Make sure it fills window even if empty
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <AboutUs />
      <TeamSection />
      <PartnerSection />
      <NexusFramework />
      <CoreValues />
    </div>
  );
};

export default About;
