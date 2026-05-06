import React from 'react';
import { motion } from 'framer-motion';
import HeroBackground from './HeroBackground';
import HeroVisual3D from './HeroVisual3D';

const Hero = () => {
  return (
    <section className="home-hero">
      <HeroBackground />
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <div className="hero-text">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-tag"
          >
            NASDAQ : DGXX · AI Infrastructure Platform
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The infra<br />layer <span className="accent">AI</span><br />runs on.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-sub"
          >
            DigiPowerX integrates power infrastructure, Tier III-ready data centers, and bare-metal GPU compute platforms — engineered to support the next generation of AI training, inference, and high-performance computing workloads.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hero-actions"
          >
            <a className="btn yellow" href="#infrastructure">Explore Infrastructure</a>
            <a className="btn" href="#neocloudz">Deploy Compute</a>
            <a className="btn" href="#investors">Investor Relations</a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="hero-metrics"
          >
            <div className="hero-metric"><strong>~220MW</strong><span>Portfolio Capacity</span></div>
            <div className="hero-metric"><strong>4 Sites</strong><span>U.S. Operating Footprint</span></div>
            <div className="hero-metric"><strong>B200</strong><span>NeoCloudz GPU Class</span></div>
            <div className="hero-metric"><strong>$0.04/kWh</strong><span>BTMG Power Cost</span></div>
          </motion.div>
        </div>
        
        <div className="hero-visual">
          <HeroVisual3D />
        </div>
      </div>
      
      <div className="scroll-cue">SCROLL</div>
    </section>
  );
};

export default Hero;

