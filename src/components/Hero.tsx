import React from 'react';
import HeroBg from './HeroBg';
import HeroVisual3D from './HeroVisual3D';

const Hero = () => {
  return (
    <section className="home-hero">
      <HeroBg />
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-tag">NASDAQ : DGXX · AI Infrastructure Platform</div>
          <h1>The infra<br />layer <span className="accent">AI</span><br />runs on.</h1>
          <p className="hero-sub">
            DigiPowerX integrates power infrastructure, Tier III-ready data centers, and bare-metal GPU compute platforms — engineered to support the next generation of AI training, inference, and high-performance computing workloads.
          </p>
          <div className="hero-actions">
            <a className="btn yellow" href="infrastructure.html">Explore Infrastructure</a>
            <a className="btn" href="neocloudz.html">Deploy Compute</a>
            <a className="btn" href="investors.html">Investor Relations</a>
          </div>
        </div>
        <div className="hero-visual">
          <HeroVisual3D />
        </div>
      </div>
      <div className="hero-metrics">
        <div className="hero-metric"><strong>~220MW</strong><span>Portfolio Capacity</span></div>
        <div className="hero-metric"><strong>4 Sites</strong><span>U.S. Operating Footprint</span></div>
        <div className="hero-metric"><strong>B200</strong><span>NeoCloudz GPU Class</span></div>
        <div className="hero-metric"><strong>$0.04/kWh</strong><span>BTMG Power Cost</span></div>
      </div>
      <div className="scroll-cue">SCROLL</div>
    </section>
  );
};

export default Hero;
