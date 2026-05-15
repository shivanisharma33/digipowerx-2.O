import React from 'react';
import InfraHero from './InfraHero';
import Hero from './Hero';
import Marquee from './Marquee';
import WhatWeDo from './WhatWeDo';
import FourPillars from './FourPillars';
import Services from './Services';
import StatsAndInfra from './StatsAndInfra';
import NeoCloudzSection from './NeoCloudzSection';
import Colocation from './Colocation';
import Capabilities from './Capabilities';
import HowWeWork from './HowWeWork';
import { CTASection } from './Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <Marquee />
      <WhatWeDo />
      <FourPillars />

      <Colocation />
      <StatsAndInfra />
      <Capabilities />
      <NeoCloudzSection />
      <HowWeWork />
      <CTASection />
    </>
  );
};

export default Home;
