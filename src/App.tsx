import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import WhatWeDo from './components/WhatWeDo';
import Services from './components/Services';
import StatsAndInfra from './components/StatsAndInfra';
import NeoCloudzSection from './components/NeoCloudzSection';
import { CTASection, Footer } from './components/Footer';

function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Marquee />
      <WhatWeDo />
      <Services />
      <StatsAndInfra />
      <NeoCloudzSection />
      <CTASection />
      <Footer />
    </main>
  );
}

export default App;
