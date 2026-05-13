import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Zap,
  Cpu,
  Activity,
  Server,
  Droplets,
  Thermometer,
  Wind,
  ShieldCheck,
  Target,
  ChevronRight,
  Radio,
} from 'lucide-react';

import { CTASection } from './Footer';
import NeuralCube3D from './NeuralCube3D';

const DataCenter = () => {
  return (
    <div className="bg-[#050505] text-white overflow-x-hidden font-sans selection:bg-[#f5c518]/20">

      {/* ========================================================= */}
      {/* HERO SECTION */}
      {/* ── HERO SECTION ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-10 px-6 overflow-hidden">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 opacity-20">
            <NeuralCube3D />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-[#06070a]" />
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]"
            style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)', backgroundSize: '40px 40px' }}
          />
        </div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full border border-[#f5c518]/20 bg-[#f5c518]/5 backdrop-blur-xl mb-8 shadow-[0_0_30px_rgba(245,197,24,0.05)]">
              <span className="text-[10px] font-black tracking-[0.6em] text-[#f5c518] uppercase">AI-Ready Facilities</span>
            </div>

            <h1 className="text-[clamp(3.5rem,12vw,160px)] font-black leading-[0.9] uppercase tracking-tighter mb-6 relative">
              DATA <br />
              <span className="text-[#f5c518]">CENTERS</span>
            </h1>

            <p className="text-white/60 max-w-3xl mx-auto text-sm md:text-base font-medium leading-relaxed mb-8 tracking-tight">
              High-density data center environments designed around power, cooling, network, and operational reliability for AI and HPC customers.
            </p>

            <div className="flex flex-wrap justify-center gap-8 mb-10">
              <Link to="/contact" className="px-14 py-6 bg-[#f5c518] text-black font-black text-[11px] uppercase tracking-[0.3em] rounded-sm hover:bg-white transition-all shadow-[0_10px_50px_rgba(245,197,24,0.3)]">
                Talk to Team
              </Link>
              <button className="px-14 py-6 border border-white/10 bg-white/5 backdrop-blur-md font-black text-[11px] uppercase tracking-[0.3em] rounded-sm hover:bg-white/10 transition-all">
                Investor Info
              </button>
            </div>
          </motion.div>

          {/* Quick Stats Grid */}

        </div>
      </section>
      {/* ========================================================= */}


      {/* ========================================================= */}
      {/* COOLING SECTION */}
      {/* ========================================================= */}

      <section className="bg-[#f7f7f5] py-36 lg:py-44 px-6 border-y border-black/5">

        <div className="max-w-[1500px] mx-auto">

          <div className="grid lg:grid-cols-12 gap-24 items-center">

            {/* LEFT */}
            <div className="lg:col-span-5">

              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-[2px] bg-[#f5c518]" />
                <span className="text-[11px] tracking-[0.4em] uppercase font-black text-black">
                  Cooling Systems
                </span>
              </div>

              <h2 className="text-5xl md:text-7xl leading-[0.85] tracking-[-0.05em] font-black text-black uppercase mb-8">
                HEAT OUT. <br />
                <span className="text-[#f5c518]">
                  PERFORMANCE
                </span>{' '}
                IN.
              </h2>

              <p className="text-black/60 leading-relaxed max-w-xl mb-12">
                A closed-loop direct liquid cooling system connects every GPU rack
                to CDU distribution — eliminating thermal throttle.
              </p>

              <div className="space-y-5">

                {[
                  {
                    icon: Thermometer,
                    title: 'Hot Coolant Return',
                    desc: 'From rack to CDU distribution',
                  },
                  {
                    icon: Droplets,
                    title: 'Cold Supply Loop',
                    desc: 'Back to compute components',
                  },
                  {
                    icon: Wind,
                    title: 'Integrated Flow',
                    desc: 'CDU, Chiller, and Tower',
                  },
                  {
                    icon: Target,
                    title: '80kW+ Envelopes',
                    desc: 'High-density GPU planning',
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -6 }}
                    className="p-8 rounded-[28px] border border-black/5 bg-white/80 backdrop-blur-xl shadow-[0_10px_50px_rgba(0,0,0,0.04)] transition-all duration-300"
                  >

                    <div className="flex items-center gap-6">

                      <div className="w-14 h-14 rounded-2xl bg-black text-[#f5c518] flex items-center justify-center">
                        <item.icon size={22} />
                      </div>

                      <div>
                        <div className="text-sm font-black text-black mb-1">
                          {item.title}
                        </div>

                        <div className="text-[11px] uppercase tracking-[0.25em] text-black/40 font-bold">
                          {item.desc}
                        </div>
                      </div>

                    </div>

                  </motion.div>
                ))}

              </div>

            </div>

            {/* RIGHT */}
            <div className="lg:col-span-7">

              <div className="relative rounded-[40px] overflow-hidden bg-[#050505] p-10 lg:p-16 shadow-[0_40px_100px_rgba(0,0,0,0.25)]">

                <div className="absolute inset-0 opacity-[0.05]"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)',
                    backgroundSize: '40px 40px',
                  }}
                />

                <div className="relative z-10">

                  <div className="flex justify-between items-start mb-20">

                    <div>
                      <div className="text-[10px] tracking-[0.5em] uppercase text-[#f5c518] font-black mb-3">
                        SYSTEM NODE
                      </div>

                      <div className="text-4xl font-black tracking-tight">
                        DLC MONITORING
                      </div>
                    </div>

                    <Activity className="text-[#f5c518]" />

                  </div>

                  <div className="space-y-12">

                    {[
                      'Primary Rack Loop',
                      'Secondary CDU Flow',
                      'External Rejection',
                    ].map((item, i) => (
                      <div key={i}>

                        <div className="flex justify-between text-[10px] uppercase tracking-[0.3em] text-white/30 font-black mb-4">
                          <span>{item}</span>
                          <span>245 GPM</span>
                        </div>

                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">

                          <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: '100%' }}
                            transition={{
                              duration: 6,
                              repeat: Infinity,
                              ease: 'linear',
                            }}
                            className="h-full w-1/3 bg-[#f5c518]"
                          />

                        </div>

                      </div>
                    ))}

                  </div>

                  <div className="grid grid-cols-3 gap-6 mt-20 pt-10 border-t border-white/10">

                    {[
                      { label: 'PUE', value: '1.18' },
                      { label: 'Delta T', value: '14.2°C' },
                      { label: 'Status', value: 'Optimal' },
                    ].map((item, i) => (
                      <div key={i}>

                        <div className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-black mb-3">
                          {item.label}
                        </div>

                        <div className="text-3xl font-black tracking-tight text-white">
                          {item.value}
                        </div>

                      </div>
                    ))}

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* FACILITY ARCHITECTURE */}
      {/* ========================================================= */}

      <section className="bg-[#050505] py-40 px-6 relative overflow-hidden">

        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-[#f5c518]/5 blur-[140px] rounded-full" />

        <div className="max-w-[1500px] mx-auto relative z-10">

          <div className="text-center mb-28">

            <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full border border-white/10 bg-white/[0.03] mb-10">

              <div className="w-2 h-2 rounded-full bg-[#f5c518]" />

              <span className="text-[10px] tracking-[0.5em] uppercase font-black text-[#f5c518]">
                SYSTEM ARCHITECTURE
              </span>

            </div>

            <h2 className="text-6xl md:text-[110px] leading-[0.82] tracking-[-0.06em] font-black uppercase mb-10">
              BUILT FOR AI, <br />
              <span className="text-[#f5c518]">
                NOT RETROFITTED.
              </span>
            </h2>

            <p className="max-w-4xl mx-auto text-white/40 leading-relaxed">
              The full facility stack — incoming power, rack density,
              cooling infrastructure, network fabric, and controlled operations.
            </p>

          </div>

          <div className="grid lg:grid-cols-3 gap-8">

            {[
              {
                icon: Server,
                title: 'GPU-Dense Row Architecture',
                desc: 'Rack layouts are planned around accelerator power draw.',
              },
              {
                icon: Droplets,
                title: 'Direct Liquid Cooling Loop',
                desc: 'DLC architecture brings coolant directly to compute.',
              },
              {
                icon: Zap,
                title: 'Redundant Infrastructure',
                desc: 'Reliable AI compute starts with electrical planning.',
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="relative rounded-[32px] overflow-hidden border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-12"
              >

                <div className="w-16 h-16 rounded-2xl bg-[#f5c518]/10 text-[#f5c518] flex items-center justify-center mb-10">
                  <card.icon size={28} />
                </div>

                <h3 className="text-3xl font-black tracking-tight mb-6">
                  {card.title}
                </h3>

                <p className="text-white/40 leading-relaxed">
                  {card.desc}
                </p>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* TECHNICAL MATRIX */}
      {/* ========================================================= */}

      <section className="bg-[#f7f7f5] py-40 px-6">

        <div className="max-w-[1500px] mx-auto">

          <div className="mb-24">

            <div className="flex items-center gap-5 mb-8">
              <div className="w-16 h-[1px] bg-black" />

              <span className="text-[11px] uppercase tracking-[0.5em] font-black text-black">
                Technical Parameters
              </span>
            </div>

            <h2 className="text-6xl md:text-[100px] leading-[0.82] tracking-[-0.06em] font-black text-black uppercase">
              OPERATIONAL <br />
              <span className="text-[#f5c518]">
                MATRIX.
              </span>
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              {
                icon: Zap,
                label: 'Power Density',
                value: '80kW+',
              },
              {
                icon: Thermometer,
                label: 'Thermal Control',
                value: '<1.18',
              },
              {
                icon: Cpu,
                label: 'Network Fabric',
                value: '400G',
              },
              {
                icon: Activity,
                label: 'Grid Interface',
                value: '22MW',
              },
              {
                icon: ShieldCheck,
                label: 'Security Layer',
                value: 'S-Tier',
              },
              {
                icon: Radio,
                label: 'Support Fabric',
                value: '24/7',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="bg-white rounded-[30px] p-10 border border-black/5 shadow-[0_10px_40px_rgba(0,0,0,0.04)]"
              >

                <div className="w-14 h-14 rounded-2xl bg-black text-[#f5c518] flex items-center justify-center mb-10">
                  <item.icon size={24} />
                </div>

                <div className="text-xl font-black text-black mb-4">
                  {item.label}
                </div>

                <div className="text-5xl font-black tracking-tight text-black">
                  {item.value}
                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* PERFORMANCE ADVANTAGE */}
      {/* ========================================================= */}

      <section className="bg-[#050505] py-40 px-6 relative overflow-hidden">

        <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-[#f5c518]/5 blur-[120px] rounded-full" />

        <div className="max-w-[1500px] mx-auto relative z-10">

          <div className="grid lg:grid-cols-2 gap-20">

            {/* LEFT */}
            <div className="lg:pr-10">

              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[1px] bg-[#f5c518]" />

                <span className="text-[10px] uppercase tracking-[0.5em] font-black text-[#f5c518]">
                  Architecture Identity
                </span>
              </div>

              <h2 className="text-6xl md:text-7xl leading-[0.85] tracking-[-0.06em] font-black uppercase mb-8">
                PERFORMANCE <br />
                <span className="text-[#f5c518]">
                  ADVANTAGE.
                </span>
              </h2>

              <p className="text-white/40 leading-relaxed max-w-xl mb-12">
                We own the full stack — from the primary power feed to the
                liquid-cooled compute floor.
              </p>

              <div className="space-y-4">

                {[
                  'Power Ownership',
                  'Deployment Speed',
                  'Economic Scale',
                  'High-Density Ready',
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group flex items-center justify-between p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white transition-all duration-300 cursor-pointer"
                  >

                    <span className="text-[11px] uppercase tracking-[0.3em] font-black text-white/60 group-hover:text-black">
                      {item}
                    </span>

                    <ChevronRight
                      size={18}
                      className="text-[#f5c518] group-hover:text-black"
                    />

                  </div>
                ))}

              </div>

            </div>

            {/* RIGHT */}
            <div className="grid md:grid-cols-2 gap-6">

              {[
                {
                  value: '22MW',
                  label: 'Alabama Facility',
                },
                {
                  value: '120MW',
                  label: 'Expansion Path',
                },
                {
                  value: '220MW',
                  label: 'Portfolio Target',
                },
                {
                  value: '<$0.05',
                  label: 'Energy Economics',
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -8 }}
                  className="rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-12 lg:p-14"
                >

                  <div className="text-[10px] uppercase tracking-[0.4em] font-black text-[#f5c518] mb-8">
                    {card.label}
                  </div>

                  <div className="text-6xl font-black tracking-tight">
                    {card.value}
                  </div>

                </motion.div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <CTASection />

    </div>
  );
};

export default DataCenter;