import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cpu, TrendingUp, Clock, Gauge, Layers } from 'lucide-react';
import NeuralCube3D from './NeuralCube3D';
import { CTASection } from './Footer';

const ARMS = () => {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-brand-yellow selection:text-black">
      {/* Hero Section - Standard Global Style */}
      <section className="relative min-h-[70vh] flex flex-col items-center pt-32 pb-16 px-6 overflow-hidden">
        
        {/* Background Matrix Grid & 3D Visual */}
        <div className="absolute inset-0 z-0 opacity-[0.15]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(245,197,24,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(245,197,24,0.1)_1px,transparent_1px)] bg-[size:30px_30px]" />
        </div>

        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none flex items-center justify-center">
          <div className="w-full h-full max-w-6xl">
            <NeuralCube3D />
          </div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto text-center flex flex-col items-center flex-1 justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            {/* Top Badge */}
            <div className="relative mb-10">
              <div className="w-64 h-[1px] bg-white/10" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-black flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-brand-yellow" />
                <span className="text-[9px] font-black uppercase tracking-[0.6em] text-white/40">Infrastructure</span>
              </div>
            </div>

            <h1 className="text-[clamp(3rem,10vw,120px)] font-black leading-[0.85] tracking-tighter uppercase mb-8">
              <span className="block text-white mb-2">ARMS</span>
              <span className="block text-brand-yellow">MODULAR SYSTEMS</span>
            </h1>

            <p className="text-sm md:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed mb-12 font-medium">
              DigiPowerX's proprietary modular data-center platform. Deploy up to 600 kW of critical compute power with Tier III redundancy in a rapidly scalable package.
            </p>

            {/* Bottom HUD Stats Bar */}
            <div className="w-full max-w-[1000px] grid grid-cols-1 md:grid-cols-2 gap-8 py-6 border-t border-white/10 border-b border-white/10 bg-black/40 backdrop-blur-xl">
              {[
                { val: "40 MW", label: "TOTAL CAPACITY" },
                { val: "12 MONTHS", label: "DEPLOYMENT SPEED" }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-brand-yellow font-black text-3xl mb-1 tracking-tighter font-mono">{stat.val}</div>
                  <div className="text-[9px] font-black text-white/30 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 relative z-10">
          <div className="text-[9px] font-black uppercase tracking-[0.4em] text-white/40">Technical Specs</div>
          <div className="w-[1px] h-12 bg-gradient-to-b from-brand-yellow to-transparent" />
        </div>
      </section>

      <section className="py-20 bg-black border-t border-white/5">
        <div className="container mx-auto px-6 max-w-[1400px] text-center">
          {/* ARMS Badge */}
          <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full border border-white/10 mb-12">
            <div className="h-[1px] w-12 bg-brand-yellow" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/60">ARMS</span>
            <div className="h-[1px] w-12 bg-white/10" />
          </div>

          <h2 className="text-[clamp(2.5rem,6vw,80px)] font-black leading-none uppercase mb-10">
            <span className="text-brand-yellow">ARMS 200</span> <span className="text-white">ADVANTAGES</span>
          </h2>
          
          <p className="text-white/40 text-lg md:text-xl max-w-5xl mx-auto leading-relaxed mb-16 font-medium">
            DigiPowerX is built around a simple but powerful thesis: the company that controls power controls the compute. By owning the full infrastructure stack from energy generation through GPU compute, DigiPowerX can serve AI and HPC customers faster, cheaper, and at greater scale than any pure-play competitor.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 border border-white/10 rounded-2xl overflow-hidden">
            {[
              { 
                tag: "POWER", 
                title: "ENERGY INFRASTRUCTURE", 
                desc: "Owned power generation assets and substation access create a structural cost and speed advantage that competitors building on leased utility power cannot replicate. The North Tonawanda plant produces at approximately $0.04/kWh." 
              },
              { 
                tag: "DATA CENTERS", 
                title: "AI-READY FACILITIES", 
                desc: "The company converts owned power assets into high-density, AI-ready data center capacity — targeting Tier III classification, direct liquid cooling, and 80kW+ per-rack GPU density at the Alabama facility." 
              },
              { 
                tag: "COMPUTE", 
                title: "GPU COMPUTE PLATFORM", 
                desc: "NeoCloudz is the compute layer on top of the DigiPowerX infrastructure stack — providing bare-metal GPU access, 400G InfiniBand fabric, and enterprise-grade telemetry for AI training, inference, and HPC workloads." 
              }
            ].map((item, i) => (
              <div key={i} className="p-12 text-left border-r border-white/10 last:border-r-0 hover:bg-white/[0.02] transition-colors group">
                <div className="text-[10px] font-black text-brand-yellow uppercase tracking-[0.3em] mb-6">{item.tag}</div>
                <h3 className="text-xl font-black uppercase mb-6 tracking-tight group-hover:text-brand-yellow transition-colors">{item.title}</h3>
                <p className="text-white/30 text-sm leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Light Feature Section */}
      <section className="py-20 bg-[#f8f9fa] relative overflow-hidden">
        {/* Technical Circuitry Background Pattern */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 100H200V300H400V100H600V500H800V300H1000" stroke="#f5c518" strokeWidth="2" />
            <path d="M100 0V200H300V400H100V600H500V800H300V1000" stroke="#f5c518" strokeWidth="2" />
            <circle cx="200" cy="100" r="4" fill="#f5c518" />
            <circle cx="400" cy="300" r="4" fill="#f5c518" />
            <circle cx="600" cy="100" r="4" fill="#f5c518" />
            <circle cx="800" cy="500" r="4" fill="#f5c518" />
          </svg>
        </div>

        <div className="container mx-auto px-6 max-w-[1400px] text-center relative z-10">
          {/* DX / ARMS Badge */}
          <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full border border-black/10 bg-white shadow-sm mb-16">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40">DX /</span>
            <div className="h-[1px] w-8 bg-brand-yellow" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/60">ARMS</span>
          </div>

          <h2 className="text-[clamp(2.5rem,5vw,70px)] font-black leading-none uppercase mb-8 text-black">
            EVERYTHING YOU NEED. <br />
            <span className="text-brand-yellow">NOTHING</span> YOU DON'T.
          </h2>
          
          <p className="text-black/50 text-lg max-w-4xl mx-auto leading-relaxed mb-24 font-medium">
            DigiPowerX facilities are purpose-built for the density and reliability demands of AI infrastructure — not retrofitted from legacy enterprise data centers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: <Shield className="text-brand-yellow" size={48} fill="currentColor" fillOpacity={1} />, 
                title: "TIER III RATED", 
                desc: "Certified under TIA-942 design standards for concurrent maintainability" 
              },
              { 
                icon: <Cpu className="text-brand-yellow transform rotate-45" size={48} />, 
                title: "FLEXIBLE COOLING", 
                desc: "Pre-engineered for liquid or air-cooled workloads with direct-to-chip options" 
              },
              { 
                icon: <Layers className="text-brand-yellow" size={48} fill="currentColor" fillOpacity={0.2} />, 
                title: "FULLY INTEGRATED", 
                desc: "Complete power, cooling, and network distribution in one package" 
              },
              { 
                icon: <TrendingUp className="text-brand-yellow" size={48} strokeWidth={3} />, 
                title: "HIGHLY SCALABLE", 
                desc: "Expand from 200 kW to 50 MW+ campuses as your needs grow" 
              },
              { 
                icon: <Clock className="text-brand-yellow" size={48} strokeWidth={3} />, 
                title: "RAPID DEPLOYMENT", 
                desc: "Deployable in ≤ 12 months with prefabricated architecture" 
              },
              { 
                icon: <Gauge className="text-brand-yellow" size={48} strokeWidth={3} />, 
                title: "HIGH PERFORMANCE", 
                desc: "Up to 600 kW of computing power per compact module" 
              }
            ].map((item, i) => (
              <div key={i} className="p-12 text-left bg-white border border-black/5 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-500 group">
                <div className="mb-8 group-hover:scale-110 transition-transform duration-500 flex justify-start">{item.icon}</div>
                <h3 className="text-2xl font-black text-black uppercase mb-4 tracking-tighter">{item.title}</h3>
                <p className="text-black/40 text-sm leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default ARMS;
