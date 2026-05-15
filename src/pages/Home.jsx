import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import ProcessSections from '../components/ProcessSections';

import SetsApart from '../components/SetsApart';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <ProcessSections />

      <SetsApart />
    </>
  );
};

export default Home;
