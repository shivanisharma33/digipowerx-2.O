import React from 'react';
import Hero from './Hero';
import Marquee from './Marquee';
import WhatWeDo from './WhatWeDo';
import Services from './Services';
import StatsAndInfra from './StatsAndInfra';
import NeoCloudzSection from './NeoCloudzSection';
import { CTASection } from './Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <Marquee />
      <WhatWeDo />
      <Services />
      <StatsAndInfra />
      <NeoCloudzSection />
      <CTASection />
    </>
  );
};

export default Home;
