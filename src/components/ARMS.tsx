import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cpu, TrendingUp, Clock, Gauge, Layers, Database, Zap, Share2 } from 'lucide-react';
import NeuralCube3D from './NeuralCube3D';
import { CTASection } from './Footer';

const ARMSSpecs = () => {
  const specs = [
    { icon: <Gauge size={28} />, label: "Critical IT Load", val: "Up To 600 KW Per Module" },
    { icon: <Shield size={28} />, label: "Redundancy", val: "Tier III (N+1)" },
    { icon: <Zap size={28} />, label: "Cooling Systems", val: "Chilled-Water Or Direct-To-Chip" },
    { icon: <Clock size={28} />, label: "Deployment Time", val: "≤ 12 Months" },
    { icon: <TrendingUp size={28} />, label: "Scalability", val: "200 KW To 50 MW+" },
    { icon: <Layers size={28} />, label: "Architecture", val: "Modular Prefabricated Pods" },
  ];

  return (
    <section className="py-16 bg-black font-sans relative overflow-hidden">
      {/* Reference Image Background - Image 2 */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen grayscale-[0.5]"
        style={{
          backgroundImage: 'url("/assets/circuitry_bg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Extra Grain/Depth Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Left Column: TECHNICAL SPECIFICATIONS */}
          <div className="flex flex-col h-full">
            <h2 className="text-[#f5c518] font-black text-xl md:text-2xl uppercase tracking-wider mb-8">
              TECHNICAL <br /> SPECIFICATIONS
            </h2>

            <div className="bg-[#050505]/80 backdrop-blur-md border border-[#f5c518]/20 rounded-[24px] p-8 md:p-10 relative overflow-hidden flex-1 flex flex-col shadow-[0_0_80px_rgba(245,197,24,0.15)]">
              {/* Reference Match Glows - Specs Card (Ultra Intensity) */}
              <div className="absolute top-0 left-0 w-96 h-96 bg-[#f5c518]/40 rounded-full blur-[140px] -translate-x-1/3 -translate-y-1/3" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f5c518]/40 rounded-full blur-[140px] translate-x-1/3 translate-y-1/3" />

              <div className="flex flex-col justify-between flex-1 relative z-10 py-6 min-h-[500px]">
                {specs.map((spec, i) => (
                  <React.Fragment key={i}>
                    <div className="grid grid-cols-[40px_1.2fr_auto_1.5fr] items-center gap-x-6 md:gap-x-10 group py-4 first:pt-0 last:pb-0">
                      <div className="text-[#f5c518] flex justify-start group-hover:scale-110 transition-transform duration-500">
                        {spec.icon}
                      </div>
                      <div className="text-white font-bold uppercase tracking-[0.15em] text-[13px] whitespace-nowrap">
                        {spec.label}
                      </div>
                      <div className="h-8 w-[1px] bg-white/20" />
                      <div className="text-[#f5c518] font-bold uppercase tracking-tight text-[14px] leading-tight text-left">
                        {spec.val}
                      </div>
                    </div>
                    {i < specs.length - 1 && (
                      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#f5c518]/30 to-transparent my-1" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: FUTURE READY PLATFORM & STRATEGIC PARTNERSHIPS */}
          <div className="flex flex-col gap-12 lg:gap-16">

            {/* Future Ready Card */}
            <div className="flex flex-col">
              <h2 className="text-[#f5c518] font-black text-xl md:text-2xl uppercase tracking-wider mb-8">
                FUTURE READY <br /> PLATFORM
              </h2>

              <div className="bg-[#050505]/80 backdrop-blur-md border border-[#f5c518]/20 rounded-[24px] p-0 flex flex-col md:flex-row items-stretch justify-between relative overflow-hidden shadow-[0_0_80px_rgba(245,197,24,0.15)] min-h-[280px]">
                {/* Reference Match Glow - Future Card (Top Right - Ultra) */}
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#f5c518]/30 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />

                <div className="flex flex-col gap-4 relative z-10 flex-1 p-8 md:p-10 justify-center">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter leading-none">ARMS 300</h3>
                    <span className="text-[#f5c518] font-bold text-xs tracking-[0.3em] uppercase">COMMING SOON</span>
                  </div>
                  <p className="text-white/40 text-[12px] md:text-[13px] leading-relaxed font-medium max-w-[280px]">
                    The next evolution of our ARMS platform, delivering even greater capacity and efficiency for next-generation AI workloads.
                  </p>
                </div>

                {/* Orange/Golden Center Line Divider */}
                <div className="hidden md:block w-[1px] bg-gradient-to-b from-transparent via-[#f5c518]/60 to-transparent self-stretch relative z-10" />

                {/* Reference Cube Visual - Right Side Full Height/Width */}
                <div className="relative w-full md:w-[45%] bg-[#080808] flex items-center justify-center p-8">
                  {/* Shadow/Glow on floor */}
                  <div className="absolute bottom-10 w-48 h-12 bg-[#f5c518]/20 rounded-full blur-[30px]" />

                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <motion.img
                      src="/assets/arms_cube.png"
                      alt="ARMS 300 Cube"
                      className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(245,197,24,0.5)] scale-125"
                      animate={{ y: [0, -12, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Strategic Partnerships Card */}
            <div className="bg-[#050505]/80 backdrop-blur-md border border-[#f5c518]/20 rounded-[24px] p-8 md:p-10 flex flex-col gap-6 relative overflow-hidden shadow-[0_0_80px_rgba(245,197,24,0.15)]">
              {/* Reference Match Glow - Partnerships Card (Top Left - Ultra) */}
              <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#f5c518]/30 rounded-full blur-[120px]" />

              <div className="flex items-center gap-4 relative z-10">
                <div className="text-[#f5c518] bg-[#f5c518]/10 p-3 rounded-xl border border-[#f5c518]/20 shadow-[0_0_20px_rgba(245,197,24,0.1)]">
                  <Zap size={24} fill="currentColor" />
                </div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">STRATEGIC PARTNERSHIPS</h3>
              </div>

              <p className="text-white/40 text-[13px] leading-relaxed font-medium relative z-10">
                DigiPowerX leverages industry-leading technology through partnerships with:
              </p>

              <div className="flex flex-col gap-4 relative z-10">
                {/* Supermicro Row */}
                <div className="border border-white/10 rounded-[12px] p-5 bg-[#080808]/50 flex items-center gap-6 group hover:border-[#f5c518]/30 transition-all duration-500 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#f5c518]/20 to-transparent" />
                  <div className="flex items-center justify-center px-4 py-2 bg-white rounded-md flex-shrink-0 group-hover:scale-105 transition-transform duration-500">
                    <span className="text-[#005da6] font-black italic tracking-tighter text-lg">SUPERMICRO</span>
                  </div>
                  <div className="h-8 w-[1px] bg-white/20" />
                  <div className="flex flex-col">
                    <span className="text-white font-bold uppercase tracking-[0.1em] text-sm md:text-base">Super Micro Computer</span>
                    <span className="text-white/40 text-[10px] uppercase font-bold tracking-[0.2em] mt-1 font-semibold">Advanced Server Solutions</span>
                  </div>
                </div>

                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#f5c518]/30 to-transparent my-1" />

                {/* NVIDIA Row */}
                <div className="border border-white/10 rounded-[12px] p-5 bg-[#080808]/50 flex items-center gap-6 group hover:border-[#f5c518]/30 transition-all duration-500 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#f5c518]/20 to-transparent" />
                  <div className="flex items-center gap-3 px-4 py-2 bg-black rounded-md flex-shrink-0 border border-white/10 group-hover:border-[#76b900]/50 transition-all duration-500 group-hover:scale-105">
                    {/* Simplified NVIDIA Logo for high-end look */}
                    <svg width="24" height="24" viewBox="0 0 100 100">
                      <path d="M50 15 C70 15 85 30 85 50 C85 70 70 85 50 85 C30 85 15 70 15 50 C15 30 30 15 50 15" fill="none" stroke="#76b900" strokeWidth="8" />
                      <path d="M50 30 C60 30 70 40 70 50 C70 60 60 70 50 70 C40 70 30 60 30 50" fill="#76b900" />
                    </svg>
                    <span className="text-white font-black tracking-tighter text-lg">NVIDIA</span>
                  </div>
                  <div className="h-8 w-[1px] bg-white/10" />
                  <div className="flex flex-col">
                    <span className="text-white font-bold uppercase tracking-[0.1em] text-sm md:text-base">NVIDIA</span>
                    <span className="text-white/40 text-[10px] uppercase font-bold tracking-[0.2em] mt-1 font-semibold">GPU Acceleration And AI Compute</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ARMS = () => {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-brand-yellow selection:text-black">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex flex-col items-center pt-32 pb-16 px-6 overflow-hidden">
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
            <div className="relative mb-10">
              <div className="w-64 h-[1px] bg-white/10" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-black flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-[#f5c518]" />
                <span className="text-[9px] font-semibold uppercase tracking-[0.6em] text-white/40">Infrastructure</span>
              </div>
            </div>
            <h1 className="text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-[0.95] tracking-tighter uppercase mb-8 text-white relative z-10">
              <span className="block text-white mb-2">ARMS</span>
              <span className="block text-[#f5c518]">MODULAR SYSTEMS</span>
            </h1>
            <p className="text-sm md:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed mb-12 font-medium">
              DigiPowerX's proprietary modular data-center platform. Deploy up to 600 kW of critical compute power with Tier III redundancy in a rapidly scalable package.
            </p>
            <div className="w-full max-w-[1000px] grid grid-cols-1 md:grid-cols-2 gap-8 py-6 border-t border-white/10 border-b border-white/10 bg-black/40 backdrop-blur-xl">
              {[
                { val: "40 MW", label: "TOTAL CAPACITY" },
                { val: "12 MONTHS", label: "DEPLOYMENT SPEED" }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-[#f5c518] font-semibold text-3xl mb-1 tracking-tighter font-mono">{stat.val}</div>
                  <div className="text-[9px] font-semibold text-white/30 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        <div className="mt-12 flex flex-col items-center gap-4 relative z-10">
          <div className="text-[9px] font-semibold uppercase tracking-[0.4em] text-white/40">Technical Specs</div>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#f5c518] to-transparent" />
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24 bg-black border-t border-white/5">
        <div className="container mx-auto px-6 max-w-[1400px] text-center">
          <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full border border-white/10 mb-12">
            <div className="h-[1px] w-12 bg-[#f5c518]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-white/60">ARMS</span>
            <div className="h-[1px] w-12 bg-white/10" />
          </div>
          <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-[0.95] tracking-tighter uppercase text-white mb-8 relative z-10">
            <span className="text-[#f5c518]">ARMS 200</span> <span className="text-white">ADVANTAGES</span>
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
                <div className="text-[10px] font-semibold text-[#f5c518] uppercase tracking-[0.3em] mb-6">{item.tag}</div>
                <h3 className="text-xl font-semibold uppercase mb-6 tracking-tight group-hover:text-[#f5c518] transition-colors">{item.title}</h3>
                <p className="text-white/30 text-sm leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Light Feature Section */}
      <section className="py-24 bg-[#f8f9fa] relative overflow-hidden">
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
          <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full border border-black/10 bg-white shadow-sm mb-16">
            <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-black/40">DX /</span>
            <div className="h-[1px] w-8 bg-[#f5c518]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-black/60">ARMS</span>
          </div>
          <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-[0.95] tracking-tighter uppercase text-black mb-8 relative z-10">
            EVERYTHING YOU NEED. <br />
            <span className="text-[#f5c518]">NOTHING</span> YOU DON'T.
          </h2>
          <p className="text-black/50 text-lg max-w-4xl mx-auto leading-relaxed mb-24 font-medium">
            DigiPowerX facilities are purpose-built for the density and reliability demands of AI infrastructure — not retrofitted from legacy enterprise data centers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="text-[#f5c518]" size={48} fill="currentColor" fillOpacity={1} />,
                title: "TIER III RATED",
                desc: "Certified under TIA-942 design standards for concurrent maintainability"
              },
              {
                icon: <Cpu className="text-[#f5c518] transform rotate-45" size={48} />,
                title: "FLEXIBLE COOLING",
                desc: "Pre-engineered for liquid or air-cooled workloads with direct-to-chip options"
              },
              {
                icon: <Layers className="text-[#f5c518]" size={48} fill="currentColor" fillOpacity={0.2} />,
                title: "FULLY INTEGRATED",
                desc: "Complete power, cooling, and network distribution in one package"
              },
              {
                icon: <TrendingUp className="text-[#f5c518]" size={48} strokeWidth={3} />,
                title: "HIGHLY SCALABLE",
                desc: "Expand from 200 kW to 50 MW+ campuses as your needs grow"
              },
              {
                icon: <Clock className="text-[#f5c518]" size={48} strokeWidth={3} />,
                title: "RAPID DEPLOYMENT",
                desc: "Deployable in ≤ 12 months with prefabricated architecture"
              },
              {
                icon: <Gauge className="text-[#f5c518]" size={48} strokeWidth={3} />,
                title: "HIGH PERFORMANCE",
                desc: "Up to 600 kW of computing power per compact module"
              }
            ].map((item, i) => (
              <div key={i} className="p-12 text-left bg-white border border-black/5 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-500 group">
                <div className="mb-8 group-hover:scale-110 transition-transform duration-500 flex justify-start">{item.icon}</div>
                <h3 className="text-2xl font-semibold text-black uppercase mb-4 tracking-tighter">{item.title}</h3>
                <p className="text-black/40 text-sm leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ARMSSpecs />
      <CTASection />
    </div>
  );
};

export default ARMS;
