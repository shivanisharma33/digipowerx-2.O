import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, Cpu, Activity, Server, Droplets, Thermometer, Wind, Shield, Database, ChevronRight, LayoutGrid, Box, Target, Network, ZapOff } from 'lucide-react';
import { Footer, CTASection } from './Footer';
import NeuralCube3D from './NeuralCube3D';

const DataCenter = () => {
  return (
    <div className="bg-[#06070a] min-h-screen text-white font-sans selection:bg-[#f5c518]/30 overflow-x-hidden">

      {/* ── HERO SECTION ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
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
            <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full border border-[#f5c518]/20 bg-[#f5c518]/5 backdrop-blur-xl mb-12 shadow-[0_0_30px_rgba(245,197,24,0.05)]">
              <span className="text-[10px] font-black tracking-[0.6em] text-[#f5c518] uppercase">AI-Ready Facilities</span>
            </div>

            <h1 className="text-[clamp(3.5rem,12vw,160px)] font-black leading-[0.75] uppercase tracking-tighter mb-16 relative">
              DATA <br />
              <span className="text-[#f5c518]">CENTERS</span>
            </h1>

            <p className="text-white/60 max-w-3xl mx-auto text-xl md:text-2xl font-medium leading-relaxed mb-20 uppercase tracking-tight">
              High-density data center environments designed around power, cooling, network, and operational reliability for AI and HPC customers.
            </p>

            <div className="flex flex-wrap justify-center gap-8 mb-24">
              <Link to="/contact" className="px-14 py-6 bg-[#f5c518] text-black font-black text-[11px] uppercase tracking-[0.3em] rounded-sm hover:bg-white transition-all shadow-[0_10px_50px_rgba(245,197,24,0.3)]">
                Talk to Team
              </Link>
              <button className="px-14 py-6 border border-white/10 bg-white/5 backdrop-blur-md font-black text-[11px] uppercase tracking-[0.3em] rounded-sm hover:bg-white/10 transition-all">
                Investor Info
              </button>
            </div>
          </motion.div>

          {/* Quick Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 border border-white/10 bg-black/40 backdrop-blur-2xl rounded-sm overflow-hidden"
          >
            {[
              { val: "22MW", sub: "Alabama Tier III base — current capacity", icon: Activity },
              { val: "55MW", sub: "Alabama expansion potential via load study", icon: Zap },
              { val: "80kW+", sub: "Per-rack GPU density planning target", icon: LayoutGrid }
            ].map((item, i) => (
              <div key={i} className="p-12 border-x border-white/5 flex flex-col items-center group hover:bg-[#f5c518]/5 transition-colors duration-500">
                <item.icon className="w-6 h-6 text-[#f5c518] mb-6 group-hover:scale-110 transition-transform" />
                <div className="text-5xl font-black text-white mb-2 tracking-tighter">{item.val}</div>
                <div className="text-[9px] font-black text-white/30 uppercase tracking-[0.2em] max-w-[180px] leading-relaxed">{item.sub}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── METRIC RIBBON ── */}
      {/* <section className="bg-white py-24 px-6 relative z-10 border-y border-black/5">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { label: "22MW", sub: "Existing Alabama operating base" },
            { label: "55MW", sub: "Alabama expansion direction" },
            { label: "DLC", sub: "Direct liquid cooling architecture" },
            { label: "24/7", sub: "NOC monitoring & remote hands" }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="text-6xl font-black text-black mb-2 tracking-tighter group-hover:text-[#f5c518] transition-colors duration-500">{item.label}</div>
              <div className="text-[10px] font-black text-black/40 uppercase tracking-widest">{item.sub}</div>
            </motion.div>
          ))}
        </div>
      </section> */}

      {/* ── COOLING ARCHITECTURE: NEAT & CLEAN TECHNICAL ── */}
      <section className="bg-white py-40 px-6 relative overflow-hidden border-y border-black/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">

            {/* ── Text Content (Left) ── */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-[2px] bg-[#f5c518]" />
                  <span className="text-[11px] font-black tracking-[0.4em] text-black uppercase">Cooling Systems</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-black text-black leading-[0.85] uppercase tracking-tighter">
                  HEAT OUT. <br />
                  <span className="text-[#f5c518]">PERFORMANCE</span> IN.
                </h2>
                <p className="text-xl font-bold text-black/60 leading-relaxed uppercase tracking-tight max-w-xl">
                  A closed-loop direct liquid cooling system connects every GPU rack to CDU distribution — eliminating thermal throttle.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {[
                  { t: "Hot Coolant Return", d: "From rack to CDU distribution", icon: Thermometer },
                  { t: "Cold Supply Loop", d: "Back to compute components", icon: Droplets },
                  { t: "Integrated Flow", d: "CDU, Chiller, and Tower", icon: Wind },
                  { t: "80kW+ Envelopes", d: "High-density GPU planning", icon: Target }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-8 p-8 border border-black/5 bg-gray-50/50 hover:bg-white hover:shadow-xl transition-all group"
                  >
                    <div className="w-12 h-12 bg-black text-[#f5c518] flex items-center justify-center rounded group-hover:scale-110 transition-transform">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <div className="text-[13px] font-black text-black uppercase tracking-wider mb-1">{item.t}</div>
                      <div className="text-[10px] font-bold text-black/40 uppercase tracking-widest">{item.d}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ── Minimalist Technical Visual (Right) ── */}
            <div className="lg:col-span-7 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-square lg:aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl p-12 lg:p-20 flex flex-col justify-between group"
              >
                {/* Subtle Grid Background */}
                <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 0)', backgroundSize: '40px 40px' }} />

                <div className="relative z-10 flex justify-between items-start">
                  <div className="space-y-2">
                    <div className="text-[10px] font-black text-[#f5c518] uppercase tracking-[0.5em]">System_Node: DC_ALA_01</div>
                    <div className="text-3xl font-black text-white uppercase tracking-tighter">DLC MONITORING V1.0</div>
                  </div>
                  <Activity className="text-[#f5c518] animate-pulse" />
                </div>

                {/* Flow Visualization (Clean) */}
                <div className="relative z-10 flex-1 flex flex-col justify-center space-y-12">
                  {[
                    { l: "Primary_Rack_Loop", c: "bg-white/20", f: "bg-[#f5c518]", w: "w-3/4" },
                    { l: "Secondary_CDU_Flow", c: "bg-white/20", f: "bg-white", w: "w-1/2" },
                    { l: "External_Rejection", c: "bg-white/20", f: "bg-white/40", w: "w-2/3" }
                  ].map((flow, i) => (
                    <div key={i} className="space-y-4">
                      <div className="flex justify-between text-[8px] font-mono text-white/30 uppercase tracking-[0.3em]">
                        <span>{flow.l}</span>
                        <span>Flow_Rate: 245 GPM</span>
                      </div>
                      <div className={`h-1 ${flow.c} rounded-full overflow-hidden`}>
                        <motion.div
                          initial={{ x: '-100%' }}
                          animate={{ x: '100%' }}
                          transition={{ duration: 3 + i, repeat: Infinity, ease: "linear" }}
                          className={`h-full ${flow.f} w-1/3`}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="relative z-10 grid grid-cols-3 gap-12 pt-12 border-t border-white/10 font-mono">
                  {[
                    { l: "PUE", v: "1.18", c: "text-[#f5c518]" },
                    { l: "Delta_T", v: "14.2°C", c: "text-white" },
                    { l: "Status", v: "OPTIMAL", c: "text-white" }
                  ].map((stat, i) => (
                    <div key={i} className="space-y-2">
                      <span className="text-[8px] text-white/20 uppercase tracking-widest block">{stat.l}</span>
                      <span className={`text-2xl font-black ${stat.c}`}>{stat.v}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Decorative Callout */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 p-10 bg-white border border-black/5 shadow-2xl rounded-sm hidden xl:block"
              >
                <div className="text-[9px] font-black text-[#f5c518] uppercase tracking-[0.4em] mb-2">Technical Summary</div>
                <div className="text-xl font-black text-black leading-tight uppercase tracking-tighter">DLC System — Rack → CDU → Chiller → Tower</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FACILITY ARCHITECTURE (01) ── */}
      <section className="bg-black py-40 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="text-center mb-32">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-4 px-6 py-2 rounded-full border border-white/10 bg-white/5 mb-10"
            >
              <span className="text-[10px] font-black tracking-widest text-[#f5c518]">01 / FACILITY ARCHITECTURE</span>
            </motion.div>
            <h2 className="text-6xl md:text-9xl font-black text-white leading-[0.8] uppercase tracking-tighter mb-12">
              BUILT FOR AI, NOT <br />
              <span className="text-[#f5c518]">RETROFITTED.</span>
            </h2>
            <p className="text-white/40 text-xl font-medium leading-relaxed max-w-4xl mx-auto uppercase tracking-tight">
              The full facility stack — incoming power, rack density, cooling infrastructure, network fabric, and controlled operations — is engineered around accelerator workloads from the ground up.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                label: "RACKS",
                title: "GPU-Dense Row Architecture",
                desc: "Rack layouts are planned around accelerator power draw, heat removal path, and structured service access — not legacy 1U server assumptions.",
                items: [
                  "High-density GPU rack rows with cabinet PDU monitoring",
                  "Hot-aisle containment and cable tray infrastructure",
                  "Expansion-ready room layouts with conditioned floor space",
                  "Rack-level power metering and environmental sensing"
                ]
              },
              {
                label: "COOLING",
                title: "Direct Liquid Cooling Loop",
                desc: "DLC architecture brings coolant directly to compute components, avoiding the inefficiencies of air-only systems at high GPU densities.",
                items: [
                  "Direct-to-chip coolant distribution units (CDU)",
                  "Hot-return and cold-supply manifold design",
                  "Chiller plant and dry-cooler heat rejection",
                  "Redundant pumping and leak detection systems"
                ]
              },
              {
                label: "POWER",
                title: "Redundant Infrastructure",
                desc: "Reliable AI compute starts with the electrical path — utility interconnection, switchgear, and UPS architecture before the first server powers on.",
                items: [
                  "HV/MV utility feed with backup protection",
                  "Switchgear, transformers, and distribution panels",
                  "UPS and generator strategy for critical loads",
                  "Metered, monitored power delivery to every rack"
                ]
              }
            ].map((layer, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-white/[0.02] border border-white/10 rounded-2xl group-hover:bg-[#f5c518] group-hover:border-[#f5c518] transition-all duration-700" />
                <div className="relative p-14 h-full flex flex-col">
                  <span className="text-[10px] font-black text-[#f5c518] group-hover:text-black uppercase tracking-[0.4em] mb-6 transition-colors">{layer.label}</span>
                  <h3 className="text-3xl font-black text-white group-hover:text-black mb-8 uppercase tracking-tighter transition-colors leading-tight">{layer.title}</h3>
                  <p className="text-white/40 group-hover:text-black/60 text-[13px] font-bold uppercase tracking-tight leading-relaxed mb-12 transition-colors">{layer.desc}</p>

                  <div className="mt-auto space-y-5">
                    {layer.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#f5c518] group-hover:bg-black mt-1.5 transition-colors" />
                        <span className="text-[11px] font-black text-white/70 group-hover:text-black uppercase tracking-widest leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECHNICAL SPECIFICATION (02) ── */}
      {/* ── TECHNICAL SPECIFICATION (02): REFINED PERFORMANCE MATRIX ── */}
      <section className="bg-white py-48 px-6 border-y border-black/5">
        <div className="max-w-[1400px] mx-auto">
          {/* Section Header: Razor Sharp */}
          <div className="flex flex-col lg:flex-row justify-between items-end mb-32 gap-12">
            <div className="max-w-4xl">
              <div className="flex items-center gap-6 mb-10">
                <div className="w-16 h-[1px] bg-black" />
                <span className="text-[11px] font-black tracking-[0.6em] text-black uppercase">Technical Parameters</span>
              </div>
              <h2 className="text-6xl md:text-[100px] font-black text-black leading-[0.8] uppercase tracking-tighter">
                OPERATIONAL <br />
                <span className="text-[#f5c518]">MATRIX.</span>
              </h2>
            </div>
            <div className="max-w-xs pb-4 opacity-40">
               <p className="text-[11px] font-bold text-black uppercase tracking-widest leading-relaxed border-l-2 border-[#f5c518] pl-8">
                  Verified engineering benchmarks for Alabama site facilities.
               </p>
            </div>
          </div>

          {/* Refined Performance Table */}
          <div className="border-t border-black/10">
            {[
              { id: "01", label: "Power Density", desc: "Advanced rack geometry", value: "80kW+", unit: "Peak Load", icon: Zap },
              { id: "02", label: "Thermal Control", desc: "Closed-loop DLC system", value: "<1.18", unit: "Target PUE", icon: Thermometer },
              { id: "03", label: "Network Fabric", desc: "Non-blocking fabric", value: "400G", unit: "Line Rate", icon: Cpu },
              { id: "04", label: "Grid Interface", desc: "Direct utility interconnect", value: "22MW", unit: "Phase I", icon: Activity },
              { id: "05", label: "Security Layer", desc: "Multi-factor biometric", value: "S-Tier", unit: "Operational", icon: ShieldCheck },
              { id: "06", label: "Support Fabric", desc: "On-site NOC & hands", value: "24/7", unit: "Live Pulse", icon: Radio }
            ].map((row, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative flex flex-col md:flex-row items-start md:items-center justify-between py-10 border-b border-black/5 hover:bg-gray-50/80 transition-all duration-300 px-8"
              >
                {/* Left Accent Line */}
                <div className="absolute left-0 top-0 bottom-0 w-0 bg-[#f5c518] group-hover:w-1 transition-all duration-300" />

                {/* Left: ID & Label */}
                <div className="flex items-center gap-10 mb-6 md:mb-0">
                  <span className="text-[10px] font-mono font-bold text-black/20 group-hover:text-black transition-colors">{row.id}</span>
                  <div className="w-10 h-10 flex items-center justify-center text-black/10 group-hover:text-[#f5c518] transition-colors">
                     <row.icon size={18} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-black uppercase tracking-tight transition-transform duration-500">{row.label}</h3>
                    <p className="text-[9px] font-bold text-black/30 uppercase tracking-widest">{row.desc}</p>
                  </div>
                </div>

                {/* Center: Refined Wave */}
                <div className="hidden xl:block flex-1 max-w-[200px] mx-20">
                   <svg width="100%" height="20" viewBox="0 0 200 20" fill="none" className="opacity-[0.08] group-hover:opacity-20 transition-opacity text-black">
                      <motion.path 
                        d="M0 10C20 10 30 2 50 2C70 2 80 18 100 18C120 18 130 10 150 10C170 10 180 2 200 2" 
                        stroke="currentColor" 
                        strokeWidth="1.5"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 1.5, delay: 0.3 }}
                      />
                   </svg>
                </div>

                {/* Right: Metric Value */}
                <div className="flex flex-col items-end">
                  <div className="text-4xl font-black tracking-tighter font-mono group-hover:text-[#f5c518] transition-colors">{row.value}</div>
                  <div className="text-[9px] font-black text-black/20 uppercase tracking-[0.4em] mt-1">{row.unit}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Section Footer Metadata: Sharp */}
          <div className="mt-20 flex flex-wrap justify-between items-center gap-12 opacity-30">
             <div className="flex items-center gap-5">
                <div className="w-1 h-8 bg-[#f5c518]" />
                <span className="text-[9px] font-black uppercase tracking-[0.6em]">System_Data_Verified_2026</span>
             </div>
             <div className="flex gap-16">
                <span className="text-[9px] font-black uppercase tracking-[0.5em]">ALABAMA_FACILITY_SPEC</span>
                <span className="text-[9px] font-black uppercase tracking-[0.5em]">V4.2_STABLE</span>
             </div>
          </div>
        </div>
      </section>

      {/* ── ADVANTAGE SECTION: PERFORMANCE ARCHITECTURE ── */}
      <section className="bg-black pb-60 pt-10 px-6 relative overflow-hidden">
        {/* Background Subtle Patterns */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '100px 100px' }} 
        />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-24 lg:gap-40 items-center">
            
            {/* ── Left Side: Core Philosophy ── */}
            <div className="lg:w-[45%] space-y-24">
              <div className="space-y-8">
                 <div className="flex items-center gap-4">
                    <span className="text-[#f5c518] font-black text-[10px] tracking-[0.6em] uppercase">Why DigiPowerX</span>
                    <div className="h-px flex-1 bg-white/10" />
                 </div>
                 <h2 className="text-5xl md:text-6xl font-black text-white leading-[0.85] uppercase tracking-tighter">
                   PERFORMANCE <br />
                   <span className="text-[#f5c518]">ARCHITECTURE.</span>
                 </h2>
                 <p className="text-lg font-bold text-white/40 uppercase tracking-tight leading-relaxed max-w-xl">
                   Ownership at every layer: from power generation and site control to direct liquid cooling and deployment speed.
                 </p>
              </div>

              <div className="space-y-4">
                {[
                  { t: "Power + Data Center", d: "Energy access and site capacity owned at the source — not leased." },
                  { t: "Deployment Velocity", d: "Approved load studies and pre-integrated racks compress timelines." },
                  { t: "Economic Superiority", d: "Sub-$0.05/kWh power-visibility supports long-term AI economics." },
                  { t: "AI / HPC Readiness", d: "Designed for 80kW+ rack densities and liquid-cooled clusters." }
                ].map((pillar, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-8 border border-white/5 bg-white/[0.02] hover:bg-[#f5c518] hover:border-[#f5c518] transition-all group cursor-default"
                  >
                    <div className="flex justify-between items-center">
                       <h3 className="text-[11px] font-black text-white group-hover:text-black uppercase tracking-[0.2em] transition-colors">{pillar.t}</h3>
                       <ChevronRight size={14} className="text-[#f5c518] group-hover:text-black group-hover:translate-x-1 transition-all" />
                    </div>
                    <div className="max-h-0 group-hover:max-h-20 overflow-hidden transition-all duration-500">
                       <p className="text-black text-[11px] font-bold uppercase tracking-widest mt-4 leading-relaxed">{pillar.d}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ── Right Side: Scale Matrix ── */}
            <div className="lg:w-[55%]">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                  {[
                    { val: "22MW", label: "Alabama Facility", sub: "Operational Tier III conversion approved.", status: "LIVE" },
                    { val: "120MW", label: "Expansion Path", sub: "Approved load study for high-density compute.", status: "PHASE II" },
                    { val: "220MW", label: "Megawatt Portfolio", sub: "24-month roadmap across all strategic sites.", status: "TARGET" },
                    { val: "<$0.05", label: "kWh Power Cost", sub: "Market-leading visibility on energy economics.", status: "ECON" }
                  ].map((card, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="p-12 border border-white/10 bg-white/[0.03] backdrop-blur-3xl flex flex-col justify-between group hover:border-[#f5c518]/40 transition-all duration-700 relative overflow-hidden"
                    >
                       {/* Abstract Scale Indicator */}
                       <div className="absolute top-0 right-0 w-32 h-32 bg-[#f5c518]/5 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 group-hover:bg-[#f5c518]/20 transition-all duration-700" />
                       
                       <div>
                          <div className="flex justify-between items-center mb-10">
                             <span className="text-[9px] font-black text-[#f5c518] uppercase tracking-[0.4em]">{card.label}</span>
                             <div className="px-3 py-1 bg-white/5 border border-white/10 text-[7px] font-black tracking-widest group-hover:bg-[#f5c518] group-hover:text-black transition-colors">{card.status}</div>
                          </div>
                          <div className="text-5xl font-black text-white tracking-tighter mb-6 group-hover:translate-x-2 transition-transform duration-500">{card.val}</div>
                       </div>

                       <div className="space-y-4">
                          <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest leading-relaxed group-hover:text-white/60 transition-colors">{card.sub}</p>
                          <div className="h-[2px] w-full bg-white/5 relative overflow-hidden">
                             <motion.div 
                               initial={{ x: '-100%' }}
                               whileInView={{ x: '0%' }}
                               viewport={{ once: true }}
                               transition={{ duration: 1.5, delay: 0.5 + i * 0.1 }}
                               className="absolute inset-0 bg-[#f5c518]" 
                             />
                          </div>
                       </div>
                    </motion.div>
                  ))}
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <CTASection />
    </div>
  );
};

export default DataCenter;
