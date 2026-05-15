import React from 'react';
import { motion } from 'framer-motion';

const FourPillars = () => {
  return (
    <section className="bg-[#f2f4f7] py-32 px-6">
      <div className="max-w-[1400px] mx-auto">

        {/* Top Badge & Title */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[10px] font-semibold tracking-[0.5em] text-black/30 uppercase">02 /</span>
            <div className="w-12 h-[1px] bg-black/10" />
            <span className="text-[10px] font-semibold tracking-[0.5em] text-black/60 uppercase">OUR CAPABILITIES</span>
          </div>

          <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-[0.95] tracking-tighter uppercase mb-8 text-black relative z-10">
            FOUR <span className="text-[#f5c518]">PILLARS</span> OF INFRASTRUCTURE
          </h2>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">

          {/* Pillar 1: WE OWN THE POWER */}
          <div className="flex flex-col">
            <div className="text-[10px] font-semibold tracking-[0.3em] text-black/30 uppercase mb-8">VERTICAL INTEGRATION</div>
            <h3 className="text-3xl font-semibold uppercase tracking-tighter text-black mb-6">WE OWN THE POWER</h3>
            <p className="text-black/50 text-sm leading-relaxed mb-10 max-w-lg">
              DigiPowerX controls the full energy stack — from owned power plants and utility-connected sites to 450 MW of pipeline development across the U.S.
            </p>
            <ul className="space-y-4 mb-12">
              {[
                "Owned power generation assets",
                "Utility-powered & substation-connected sites",
                "450 MW development pipeline",
                "Future-site acquisitions underway"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-wider text-black/60">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#f5c518]" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="aspect-[16/10] bg-[#0d0d0d] rounded-lg overflow-hidden border border-white/5 shadow-2xl relative group/map">
              {/* Realistic Map Background */}
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2066&auto=format&fit=crop"
                  alt="Satellite Data Map"
                  className="w-full h-full object-cover grayscale opacity-40 brightness-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0d0d0d_100%)] opacity-60" />
              </div>

              {/* Grid Overlay */}
              <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
                <svg className="w-full h-full">
                  {[...Array(20)].map((_, i) => (
                    <line key={`v-${i}`} x1={i * 40} y1="0" x2={i * 40} y2="500" stroke="white" strokeWidth="0.5" />
                  ))}
                  {[...Array(12)].map((_, i) => (
                    <line key={`h-${i}`} x1="0" y1={i * 40} x2="800" y2={i * 40} stroke="white" strokeWidth="0.5" />
                  ))}
                </svg>
              </div>

              {/* City Labels */}
              <div className="absolute top-[12%] right-[22%] text-[8px] font-mono text-white/20 uppercase tracking-widest">Buffalo</div>
              <div className="absolute top-[62%] right-[32%] text-[8px] font-mono text-white/20 uppercase tracking-widest">Raleigh</div>
              <div className="absolute top-[75%] right-[52%] text-[8px] font-mono text-white/20 uppercase tracking-widest">Atlanta</div>

              {/* Location Nodes */}
              {[
                { top: '15%', left: '75%', label: 'Buffalo, NY', capacity: '50MW' },
                { top: '65%', left: '65%', label: 'Raleigh, NC', capacity: '150MW' },
                { top: '78%', left: '45%', label: 'Atlanta, GA', capacity: '250MW' },
              ].map((node, i) => (
                <div key={i} className="absolute" style={{ top: node.top, left: node.left }}>
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                    className="absolute -inset-4 bg-[#f5c518] rounded-full blur-xl"
                  />
                  <div className="relative w-3 h-3 bg-[#f5c518] rounded-full shadow-[0_0_15px_#f5c518] cursor-pointer peer" />

                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 opacity-0 peer-hover:opacity-100 transition-opacity pointer-events-none z-20">
                    <div className="bg-black/90 border border-white/10 backdrop-blur-md px-4 py-2 rounded-lg whitespace-nowrap">
                      <div className="text-[9px] font-black text-[#f5c518] uppercase tracking-widest mb-1">{node.label}</div>
                      <div className="text-[10px] font-semibold text-white/60 uppercase tracking-tighter">Status: Active | {node.capacity}</div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Learn More Overlay */}
              <div className="absolute bottom-6 left-6">
                <button className="flex items-center gap-3 text-[10px] font-semibold text-white/40 uppercase tracking-[0.3em] hover:text-[#f5c518] transition-colors group/btn">
                  Learn More
                  <div className="w-8 h-[1px] bg-white/20 group-hover/btn:w-12 group-hover/btn:bg-[#f5c518] transition-all" />
                </button>
              </div>
            </div>
          </div>

          {/* Pillar 2: DIRECT-TO-CHIP LIQUID COOLING */}
          <div className="flex flex-col">
            <div className="text-[10px] font-semibold tracking-[0.3em] text-black/30 uppercase mb-8">DATA CENTER ARCHITECTURE</div>
            <h3 className="text-3xl font-semibold uppercase tracking-tighter text-black mb-6">DIRECT-TO-CHIP LIQUID COOLING</h3>
            <p className="text-black/50 text-sm leading-relaxed mb-10 max-w-lg">
              Purpose-built for NVIDIA Blackwell and next-gen AI accelerators. Cold plates deliver coolant directly to the chip — no air cooling required at rack-level.
            </p>
            <ul className="space-y-4 mb-12">
              {[
                "Direct-to-chip cold plates per GPU",
                "Rear-door heat exchanger capture",
                "Chiller + cooling tower rejection loop",
                "PUE <1.15 · Zero thermal throttling"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-wider text-black/60">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#f5c518]" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="aspect-[16/10]  flex items-center justify-center p-8">
              {/* Animated Cooling Schematic */}
              <div className="w-full h-full relative flex items-center justify-between gap-4">

                {/* Left: Cooling Tower */}
                <div className="w-[30%] h-full flex flex-col justify-end items-center pb-4 relative">
                  <div className="absolute top-[10%] w-[80%] aspect-[4/3] bg-[#2d3a33] rounded-t-xl flex flex-col items-center justify-center border-x-4 border-t-4 border-[#3a4a42] relative overflow-hidden">
                    <div className="flex gap-4 mb-2">
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="w-8 h-8 border-4 border-dashed border-[#f5c518] rounded-full" />
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="w-8 h-8 border-4 border-dashed border-[#f5c518] rounded-full" />
                    </div>
                    <div className="text-[8px] font-mono text-[#f5c518] opacity-60">COOLING TOWER</div>
                    <div className="absolute top-2 right-2 flex items-center gap-1">
                      <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-[6px] font-mono text-white/40">PUE: 1.15</span>
                    </div>
                  </div>
                  <div className="w-[90%] h-[50%] bg-[#42524a] rounded-b-lg border-x-4 border-b-4 border-[#3a4a42]" />
                  {/* Tanks */}
                  <div className="absolute bottom-4 left-0 w-full flex flex-col gap-2 px-2">
                    <div className="h-6 bg-[#4a6d8c] rounded-full border border-white/10" />
                    <div className="h-6 bg-[#4a6d8c] rounded-full border border-white/10" />
                  </div>
                </div>

                {/* Middle: CDU */}
                <div className="w-[15%] h-[80%] bg-[#1a1f1d] rounded-lg border-2 border-[#2d3a33] flex flex-col items-center py-4 gap-4 relative">
                  <div className="w-10 h-10 rounded-full border-2 border-[#f5c518]/40 flex items-center justify-center">
                    <motion.div animate={{ rotate: -360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="w-6 h-6 border-2 border-t-[#f5c518] border-transparent rounded-full" />
                  </div>
                  <div className="flex flex-col gap-1 w-[70%]">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="h-3 bg-gradient-to-r from-[#f5c518]/20 to-transparent rounded-sm" />
                    ))}
                  </div>
                  <div className="absolute -top-6 text-[8px] font-mono text-[#4a6d8c] font-black tracking-widest">CDU</div>
                </div>

                {/* Right: GPU Racks */}
                <div className="w-[45%] h-full flex gap-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex-1 bg-[#0d0f0e] rounded border border-white/5 p-2 flex flex-col gap-1">
                      {[...Array(12)].map((_, j) => (
                        <div key={j} className="flex-1 flex gap-1">
                          <div className="w-1 h-full bg-green-500/10 rounded-full overflow-hidden">
                            <motion.div animate={{ y: [-10, 10] }} transition={{ duration: 1, repeat: Infinity, delay: j * 0.1 }} className="w-full h-2 bg-green-500" />
                          </div>
                          <div className="flex-1 flex gap-0.5">
                            {[...Array(4)].map((_, k) => (
                              <div key={k} className="flex-1 bg-white/5 rounded-sm" />
                            ))}
                          </div>
                          {j % 4 === 0 && <div className="w-2 h-full bg-green-500/40 rounded-sm" />}
                        </div>
                      ))}
                    </div>
                  ))}
                  <div className="absolute -bottom-6 right-0 text-[8px] font-mono text-green-500 font-black tracking-widest">GPU SERVER RACKS</div>
                </div>

                {/* Flow Lines (SVG) */}
                <div className="absolute inset-0 pointer-events-none">
                  <svg className="w-full h-full" viewBox="0 0 400 250">
                    {/* Red Lines (Hot) */}
                    <path id="hot-return" d="M300,50 L200,50 L200,100 L50,100 L50,150" stroke="#ff4d4d" strokeWidth="1.5" fill="none" strokeOpacity="0.4" />
                    {/* Blue Lines (Cold) */}
                    <path id="cold-supply" d="M50,180 L200,180 L200,150 L300,150" stroke="#4a6d8c" strokeWidth="1.5" fill="none" strokeOpacity="0.4" />

                    {/* Animated Dots */}
                    {[...Array(3)].map((_, i) => (
                      <circle key={`hot-${i}`} r="2" fill="#ff4d4d">
                        <animateMotion dur="3s" repeatCount="indefinite" begin={`${i * 1}s`}>
                          <mpath href="#hot-return" />
                        </animateMotion>
                      </circle>
                    ))}
                    {[...Array(3)].map((_, i) => (
                      <circle key={`cold-${i}`} r="2" fill="#4a6d8c">
                        <animateMotion dur="3s" repeatCount="indefinite" begin={`${i * 1}s`}>
                          <mpath href="#cold-supply" />
                        </animateMotion>
                      </circle>
                    ))}
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 3: MEET NEOCLOUDZ */}
          <div className="flex flex-col">
            <div className="text-[10px] font-semibold tracking-[0.3em] text-black/30 uppercase mb-8">FULLY OWNED SUBSIDIARY</div>
            <h3 className="text-3xl font-semibold uppercase tracking-tighter text-black mb-6">MEET NEOCLOUDZ</h3>
            <p className="text-black/50 text-sm leading-relaxed mb-10 max-w-lg">
              NeoCloudz is DigiPowerX's GPU compute platform — bare-metal NVIDIA Blackwell B200 clusters delivered directly from our owned data centers.
            </p>
            <ul className="space-y-4 mb-12">
              {[
                "NVIDIA Blackwell B200 GPU clusters",
                "Bare-metal · no virtualization overhead",
                "400Gb/s InfiniBand fabric",
                "Provisioned in <58 seconds"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-wider text-black/60">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#f5c518]" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="aspect-[16/10] bg-[#0a0a0a] rounded-lg overflow-hidden border border-white/5 shadow-2xl p-10 flex items-center justify-center relative">
              <div className="grid grid-cols-4 gap-4 w-full h-full">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="bg-[#151515] border border-white/10 rounded-md relative group overflow-hidden flex flex-col justify-end p-2">
                    <div className="absolute top-1 right-1 flex flex-col items-end">
                      <div className="text-[5px] font-mono text-green-500 opacity-60">B200_GPU</div>
                      <div className="text-[5px] font-mono text-[#f5c518] opacity-40">400Gbps</div>
                    </div>
                    <div className="text-[6px] font-mono text-white/20 mb-1 uppercase">NODE_{i + 102}</div>
                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        animate={{ width: [`${30 + Math.random() * 40}%`, `${50 + Math.random() * 40}%`, `${30 + Math.random() * 40}%`] }}
                        transition={{ duration: 2 + Math.random() * 2, repeat: Infinity }}
                        className="h-full bg-green-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0a_100%)] opacity-40 pointer-events-none" />
            </div>
          </div>

          {/* Pillar 4: US DATA CENTERS INC. */}
          <div className="flex flex-col">
            <div className="text-[10px] font-semibold tracking-[0.3em] text-black/30 uppercase mb-8">STRATEGIC PARTNER</div>
            <h3 className="text-3xl font-semibold uppercase tracking-tighter text-black mb-6">US DATA CENTERS INC.</h3>
            <p className="text-black/50 text-sm leading-relaxed mb-10 max-w-lg">
              A majority shareholder in US Data Centers Inc. — a modular data center manufacturer purpose-built for rapid & scalable infrastructure deployment.
            </p>
            <ul className="space-y-4 mb-12">
              {[
                "800kW – 1.5MW self-contained modules",
                "Tier III design · TIA-942 compliant",
                "Rapid deployment — operational in weeks",
                "Factory-built & commissioned off-site"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-wider text-black/60">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#f5c518]" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="aspect-[16/10] bg-[#050505] rounded-lg overflow-hidden border border-white/5 shadow-2xl relative flex items-center justify-center">
              {/* Advanced Energy Core Visual */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,197,24,0.15)_0%,transparent_70%)]" />

              <div className="relative w-full h-full flex items-center justify-center">
                {/* Rotating Orbital Rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute w-48 h-48 border border-[#f5c518]/20 rounded-full"
                >
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#f5c518] rounded-full shadow-[0_0_15px_#f5c518]" />
                </motion.div>

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute w-64 h-64 border border-[#f5c518]/10 rounded-full"
                >
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#f5c518]/60 rounded-full" />
                </motion.div>

                {/* Central Power Core */}
                <div className="relative">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-20 h-20 bg-[#f5c518] rounded-full blur-2xl opacity-50"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 bg-[#f5c518] rounded-full shadow-[0_0_30px_#f5c518] border-2 border-white/20" />
                  </div>
                  {/* Core Internal HUD */}
                  <svg className="absolute -inset-10 w-40 h-40" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="48" stroke="#f5c518" strokeWidth="0.5" strokeDasharray="4 8" strokeOpacity="0.3" />
                    <motion.circle
                      cx="50" cy="50" r="48"
                      stroke="#f5c518" strokeWidth="1"
                      strokeDasharray="20 180"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />
                  </svg>
                </div>

                {/* Data Particles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [-20, 20],
                      x: [-10, 10],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: i * 0.5
                    }}
                    className="absolute w-1 h-1 bg-[#f5c518] rounded-full"
                    style={{
                      top: `${20 + Math.random() * 60}%`,
                      left: `${20 + Math.random() * 60}%`
                    }}
                  />
                ))}

                {/* Sidebar HUD Stats */}
                <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4">
                  {[
                    { label: 'OUTPUT', val: '1.25MW' },
                    { label: 'EFFICIENCY', val: '98.4%' },
                    { label: 'THERMAL', val: '24°C' }
                  ].map((stat, i) => (
                    <div key={i} className="text-right">
                      <div className="text-[7px] font-mono text-white/20 uppercase tracking-widest">{stat.label}</div>
                      <div className="text-[10px] font-mono text-[#f5c518] font-black">{stat.val}</div>
                    </div>
                  ))}
                </div>

                {/* Deployment Tag */}
                <div className="absolute bottom-8 left-8 border-l-2 border-[#f5c518] pl-4">
                  <div className="text-[8px] font-mono text-white/40 uppercase tracking-widest mb-1">UNIT_DEPLOYMENT</div>
                  <div className="text-[12px] font-black text-white uppercase tracking-tighter">USDC_MODULAR_01</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FourPillars;
