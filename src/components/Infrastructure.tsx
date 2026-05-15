import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Footer, CTASection } from './Footer';
import { Zap, Shield, Cpu, Activity, Database, Server, ChevronRight } from 'lucide-react';
import NeuralCube3D from './NeuralCube3D';
import PowerFlowVisual from './PowerFlowVisual';

const Infrastructure = () => {
  return (
    <div className="bg-[#06070a] min-h-screen text-white font-sans selection:bg-[#f5c518]/30 overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">

        {/* Background 3D Element */}
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none flex items-center justify-center">
          <div className="w-full h-full max-w-6xl">
            <NeuralCube3D />
          </div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto text-center flex flex-col items-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f5c518] shadow-[0_0_8px_#f5c518]"></span>
              <span className="text-[9px] uppercase tracking-[0.4em] font-mono text-white/60">
                Power to Compute
              </span>
            </div>

            {/* Title */}
            <h1 className="text-[clamp(2.5rem,6vw,5.5rem)] font-semibold tracking-tighter leading-[0.95] text-center mb-10 uppercase relative z-10">
              <span className="block text-white">POWER</span>
              <span className="block text-[#f5c518]">INFRASTRUCTURE</span>
            </h1>

            {/* Subheading */}
            <p className="text-white/60 text-sm md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed font-medium tracking-wide">
              DigiPowerX controls the full energy-to-compute value chain — integrated at every layer.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24">
              <Link
                to="/contact"
                className="px-12 py-5 bg-[#f5c518] text-black font-semibold uppercase tracking-[0.2em] text-[11px] rounded-md transition-all hover:brightness-110 active:scale-95 shadow-[0_10px_40px_rgba(245,197,24,0.2)]"
              >
                Talk to Team
              </Link>
              <Link
                to="/about"
                className="px-12 py-5 border border-white/20 text-white font-semibold uppercase tracking-[0.2em] text-[11px] rounded-md bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-4 bg-[#0a0b0f]/80 border border-white/10 rounded-xl overflow-hidden backdrop-blur-xl shadow-2xl"
          >
            {[
              { val: "60MW", label: "North Texarkana Plant — Existing Base" },
              { val: "128MW", label: "Additional Capacity Generated" },
              { val: "BTMG", label: "Behind-the-meter generation program" },
              { val: "GRID", label: "Full redundancy & grid interconnection" }
            ].map((stat, i) => (
              <div key={i} className="p-10 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/5 last:border-0 group hover:bg-white/5 transition-colors">
                <span className="text-[#f5c518] font-mono text-3xl font-semibold mb-2 tracking-tighter">{stat.val}</span>
                <span className="text-[9px] text-white/40 uppercase tracking-[0.2em] font-medium text-center leading-tight">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>





      {/* Power Flow Section: From Generation to GPU Load */}
      <section className="bg-white py-24 px-6 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto">

          {/* Top Badge */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center px-6 py-2.5 rounded-full border border-black/10 bg-black/5 backdrop-blur-sm">
              <div className="w-10 h-[1.5px] bg-[#f5c518] mr-4"></div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-black/80">
                Power Flow
              </span>
            </div>
          </div>

          {/* Heading */}
          <div className="text-center mb-8">
            <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-[0.95] tracking-tighter uppercase text-black mb-8 relative z-10">
              From Generation<br />
              to <span className="text-[#f5c518]">GPU Load.</span>
            </h2>
          </div>

          {/* Subtext */}
          <div className="max-w-4xl mx-auto text-center mb-24">
            <p className="text-black/50 text-base md:text-[19px] leading-[1.6] font-medium tracking-tight">
              The DigiPowerX infrastructure story starts before the data center. Owned generation assets, substation access, and controlled distribution paths give the company speed, cost, and optionality that no leased-power competitor can match.
            </p>
          </div>

          {/* Main Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

            {/* Left Column: Feature Cards (2x2) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                "Owned generation & grid-connected assets at multiple sites",
                "Behind-the-meter program reduces transmission costs",
                "Substation and distribution path shown from source to rack",
                "Compute demand monetizes every megawatt of capacity"
              ].map((text, i) => (
                <div key={i} className="bg-[#f5f5f5] p-10 rounded-xl flex items-start gap-5 border border-black/[0.03] shadow-sm hover:shadow-md transition-all group">
                  <div className="mt-1 flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:translate-x-1 transition-transform">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#f5c518" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="text-black/80 font-semibold text-sm md:text-base leading-[1.4] tracking-tight">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Column: New Animated Visual */}
            <div className="relative h-full min-h-[300px] md:min-h-[400px] lg:min-h-[450px]">
              <PowerFlowVisual />
            </div>

          </div>
        </div>
      </section>
      {/* Infrastructure Layers Section */}
      <section className="bg-[#06070a] py-24 px-6 border-y border-white/5">
        <div className="max-w-[1400px] mx-auto">

          {/* Top Badge */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex items-center px-6 py-2 rounded-full border border-white/10 bg-white/5">
              <span className="text-[10px] font-mono text-white/40 uppercase tracking-[0.4em] mr-4">01 /</span>
              <div className="w-12 h-[1px] bg-[#f5c518] mr-4"></div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/80">
                Infrastructure Layers
              </span>
            </div>
          </div>

          {/* Heading */}
          <div className="text-center mb-8">
            <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-[0.95] tracking-tighter uppercase text-white mb-8 relative z-10">
              The Value is Built Before<br />
              the <span className="text-[#f5c518]">Server Rack..</span>
            </h2>
          </div>

          {/* Subtext */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <p className="text-white/40 text-sm md:text-lg leading-relaxed font-medium">
              In AI infrastructure, power availability is a strategic bottleneck. DigiPowerX's vertically integrated model connects generation assets through substation control to compute-ready data center capacity — compressing deployment timelines and operating costs.
            </p>
          </div>

          {/* 3-Column Layers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 border border-white/10 rounded-2xl overflow-hidden bg-white/[0.02]">

            {/* Column 1: Generation */}
            <div className="p-10 md:p-14 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/[0.02] transition-colors group">
              <div className="text-[#f5c518] text-[10px] font-semibold uppercase tracking-[0.2em] mb-4">Generation</div>
              <h3 className="text-white text-xl md:text-2xl font-semibold uppercase mb-6 tracking-tight">Energy Asset Base</h3>
              <p className="text-white/40 text-sm leading-relaxed mb-10 font-medium">
                Owned generation eliminates generation bottlenecks in the roadmap for compute-ready data center capacity.
              </p>
              <ul className="space-y-4">
                {[
                  "Strategic site selection near power sources",
                  "Redundant local power infrastructure",
                  "Energy security via utility partnership",
                  "Scale effectively through modular deployment"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 group/item">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1 flex-shrink-0 transform group-hover/item:translate-x-1 transition-transform">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#f5c518" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-white/60 text-[13px] font-semibold leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Substation */}
            <div className="p-10 md:p-14 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/[0.02] transition-colors group">
              <div className="text-[#f5c518] text-[10px] font-semibold uppercase tracking-[0.2em] mb-4">Substation</div>
              <h3 className="text-white text-xl md:text-2xl font-semibold uppercase mb-6 tracking-tight">Electrical Control Point</h3>
              <p className="text-white/40 text-sm leading-relaxed mb-10 font-medium">
                Substation control eliminates technical bottlenecks in data center development — scaling faster than competitors.
              </p>
              <ul className="space-y-4">
                {[
                  "Fast-track utility grid access & interconnection",
                  "Low-latency power transmission systems",
                  "Resiliency via multi-redundant power",
                  "Expanded electrical capacity for growth"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 group/item">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1 flex-shrink-0 transform group-hover/item:translate-x-1 transition-transform">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#f5c518" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-white/60 text-[13px] font-bold leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Compute */}
            <div className="p-10 md:p-14 hover:bg-white/[0.02] transition-colors group">
              <div className="text-[#f5c518] text-[10px] font-semibold uppercase tracking-[0.2em] mb-4">Compute</div>
              <h3 className="text-white text-xl md:text-2xl font-semibold uppercase mb-6 tracking-tight">Demand Layer</h3>
              <p className="text-white/40 text-sm leading-relaxed mb-10 font-medium">
                The compute layer converts site capacity into high-value inference, HPC, and AI workloads — the highest margin use of a megawatt.
              </p>
              <ul className="space-y-4">
                {[
                  "Optimized power distribution architecture",
                  "Dense server architecture (GPU, CPU systems)",
                  "Efficiency metrics tailored for compute capacity",
                  "Low-Latency high speed data center layer"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 group/item">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1 flex-shrink-0 transform group-hover/item:translate-x-1 transition-transform">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#f5c518" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-white/60 text-[13px] font-bold leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>
      {/* Value Chain Section: Pipeline Overview */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-[1400px] mx-auto">

          {/* Top Badge */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex items-center px-6 py-2 rounded-full border border-black/10 bg-black/5">
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-black/60">
                Power-to-Compute Pipeline
              </span>
            </div>
          </div>

          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-[0.95] tracking-tighter uppercase text-black mb-8 relative z-10">
              The Value Chain Starts<br />
              Before the <span className="text-[#f5c518]">Data Center.</span>
            </h2>
          </div>

          {/* Subtext */}
          <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
            <p className="text-black/50 text-sm md:text-lg leading-relaxed font-medium">
              DigiPowerX operates across the full energy-to-compute value chain: power generation, substation access, data center deployment, and GPU infrastructure — integrated at every layer for speed, cost advantage, and long-term scalability.
            </p>
            <p className="text-black/50 text-sm md:text-lg leading-relaxed font-medium">
              Owning the infrastructure from generation through compute enables capabilities that co-location-only or lease-only models cannot replicate.
            </p>
          </div>

          {/* 4-Column Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              { title: "Generation", desc: "Vertically-integrated energy assets support flexible models — power sales, mining, collocation, and AI compute." },
              { title: "Substation", desc: "Controlled (not leased) and electrical interconnection remains the primary development bottleneck for competitors." },
              { title: "Facility", desc: "Data center conversion turns energy access into compute-ready capacity at the highest revenue-per-megawatt tier." },
              { title: "Compute", desc: "AI, HPC, collocation, and mining demand monetizes every layer of the infrastructure stack." }
            ].map((card, i) => (
              <div key={i} className="bg-[#f2f2f2] p-10 rounded-xl flex flex-col items-center text-center group hover:bg-[#f5c518]/5 transition-colors border border-black/[0.03]">
                <h3 className="text-black text-xl font-semibold uppercase mb-6 tracking-tight">{card.title}</h3>
                <p className="text-black/60 text-[13px] leading-relaxed font-medium">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Black Stats Bar */}
        <div className="bg-[#06070a] py-16 px-6 -mx-6 md:-mx-12 lg:-mx-24 mt-12 border-y border-white/5">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
            {[
              { val: "~$0.04/kWh", label: "POWER PRODUCTION COST CITED FOR NORTH TEXARKANA — A STRUCTURAL ADVANTAGE OVER MARKET ELECTRICITY RATES." },
              { val: "Grid + Site", label: "BEHIND-THE-METER GENERATING PROGRAM REDUCES TRANSMISSION COSTS AND IMPROVES ENERGY ECONOMICS." },
              { val: "Tier III Path", label: "ON-SITE GENERATION AND GRID INTERCONNECTION PROVIDE DUAL-PATH REDUNDANCY AND REVENUE OPTIONALITY." },
              { val: "~$0.04/kWh", label: "ALABAMA CONVERSION STRATEGY TARGETS HIGHER-VALUE DATA CENTER CLASSIFICATION FOR ENTERPRISE AND AI CUSTOMERS." }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-4 border-l border-white/10 pl-8 first:border-0">
                <span className="text-[#f5c518] text-3xl font-semibold tracking-tight">{stat.val}</span>
                <span className="text-white/40 text-[9px] font-medium uppercase tracking-widest leading-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  );
};

export default Infrastructure;
