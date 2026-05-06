import React from 'react';
import { ArrowDownRight } from 'lucide-react';
import { motion } from 'framer-motion';
import DataCenter3D from './DataCenter3D';

const Hero = () => {
  return (
    <div className="relative min-h-[100vh] split-bg overflow-hidden">
      {/* Background for Mobile - Absolute Visual */}
      <div className="lg:hidden absolute inset-0 z-0">
        <div className="absolute inset-0 bg-brand-dark/70 z-10" /> {/* Dark Overlay */}
        <DataCenter3D />
      </div>

      {/* Left side - Content */}
      <div className="relative z-10 pt-32 md:pt-40 lg:pt-40 px-6 md:px-12 lg:px-20 flex flex-col items-center lg:items-start justify-between pb-12 md:pb-20 bg-transparent lg:bg-brand-cream text-center lg:text-left">
        <div className="max-w-2xl flex flex-col items-center lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 mb-6 md:mb-8"
          >
            <div className="w-2 h-2 bg-brand-yellow rounded-full animate-pulse" />
            <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-white/60 lg:text-gray-500 uppercase">
              Vertically Integrated • Power to Compute
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[clamp(2.5rem,8vw,6rem)] font-black leading-[0.9] tracking-tighter mb-6 md:mb-8 text-white lg:text-brand-dark"
          >
            THE INFRA <br />
            <span className="text-brand-yellow">LAYER</span> <br />
            AI RUNS <br />
            ON.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white/60 lg:text-gray-500 text-base md:text-lg mb-8 md:mb-10 max-w-md leading-relaxed"
          >
            DigiPowerX owns and operates the full stack — from power generation and substations to Tier III data centers and bare-metal GPU compute. One company, every layer.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4"
          >
            <button className="btn-primary w-full sm:w-auto justify-center">
              Explore Our Stack <ArrowDownRight size={20} />
            </button>
            <button className="btn-outline w-full sm:w-auto justify-center border-white/20 text-white lg:border-gray-300 lg:text-brand-dark">
              Talk to Our Team
            </button>
          </motion.div>
        </div>


        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 pt-12 md:pt-20 border-t border-white/10 lg:border-gray-200 mt-12 md:mt-20">
          <div>
            <div className="text-2xl md:text-3xl font-black text-white lg:text-brand-dark">450<span className="text-sm font-normal">MW</span></div>
            <div className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-white/40 lg:text-gray-400 mt-1">Capacity</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-black text-white lg:text-brand-dark">6</div>
            <div className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-white/40 lg:text-gray-400 mt-1">Data Centers</div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="text-2xl md:text-3xl font-black text-white lg:text-brand-dark">&lt;1.3</div>
            <div className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-white/40 lg:text-gray-400 mt-1">PUE Ratio</div>
          </div>
        </div>
      </div>

      {/* Right side - Visual (Desktop Only) */}
      <div className="hidden lg:block relative overflow-hidden bg-black">
        <div className="hero-right-num uppercase">DP-X / 0014 / AP</div>
        <DataCenter3D />
      </div>
    </div>

  );
};

export default Hero;
