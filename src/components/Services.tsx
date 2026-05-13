import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CTASection } from './Footer';
import {
  Zap, Server, Cpu, Layers, Activity,
  ChevronRight, ArrowUpRight, CheckCircle2,
  Terminal, Database, Globe, Clock, Shield,
  ArrowRight
} from 'lucide-react';
import HeroBg from './HeroBg';
import IsometricEnergyGen from './IsometricEnergyGen';
import NeoCloudVisual from './NeoCloudVisual';
import ARMSVisual from './ARMSVisual';
import NeuralCube3D from './NeuralCube3D';

/* ─── Shared Components ─── */
const SectionLabel = ({ num, text, dark = false }: { num: string, text: string, dark?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-12 relative z-10 flex justify-center"
  >
    <div className={`inline-flex items-center gap-3 ${dark ? 'bg-white/5 border-white/10' : 'bg-white border-gray-100 shadow-sm'} border rounded-full px-6 py-2.5`}>
      <span className={`text-[10px] font-black tracking-widest ${dark ? 'text-white/40' : 'text-gray-400'}`}>{num} /</span>
      <div className="h-[2px] w-12 bg-[#f5c518]" />
      <span className={`text-[10px] font-black tracking-[0.25em] ${dark ? 'text-white' : 'text-black'} uppercase`}>{text}</span>
    </div>
  </motion.div>
);

const FeatureItem = ({ text, dark = false }: { text: string, dark?: boolean }) => (
  <li className="flex items-start gap-4 group">
    <div className="mt-1 w-5 h-5 rounded-md bg-[#f5c518]/10 border border-[#f5c518]/20 flex items-center justify-center shrink-0 group-hover:bg-[#f5c518] group-hover:text-black transition-colors">
      <CheckCircle2 size={12} />
    </div>
    <span className={`${dark ? 'text-gray-400 group-hover:text-white' : 'text-gray-500 group-hover:text-black'} transition-colors leading-tight font-medium`}>{text}</span>
  </li>
);

/* ─── ModularDCGraphic (ARMS) ─── */
const ModularDCGraphic = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext('2d')!;
    let W: number, H: number, t = 0;

    const setSize = () => {
      const dpr = window.devicePixelRatio || 1;
      W = c.offsetWidth; H = c.offsetHeight;
      c.width = W * dpr; c.height = H * dpr;
      c.style.width = W + 'px'; c.style.height = H + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    window.addEventListener('resize', setSize);
    setSize();

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const cx = W / 2, cy = H / 2;
      const mw = W * 0.7, mh = H * 0.45;

      ctx.strokeStyle = 'rgba(255,255,255,0.03)';
      ctx.lineWidth = 1;
      for (let x = 0; x < W; x += 40) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
      for (let y = 0; y < H; y += 40) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }

      ctx.fillStyle = 'rgba(20,20,20,0.95)';
      ctx.beginPath(); ctx.roundRect(cx - mw / 2, cy - mh / 2, mw, mh, 4); ctx.fill();
      ctx.strokeStyle = 'rgba(245, 197, 24, 0.2)'; ctx.lineWidth = 2; ctx.stroke();

      const fx = cx + mw / 2 - 60, fy = cy, fr = 35;
      ctx.fillStyle = 'rgba(10,10,10,1)';
      ctx.beginPath(); ctx.arc(fx, fy, fr, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = 'rgba(245, 197, 24, 0.3)'; ctx.stroke();

      ctx.save();
      ctx.translate(fx, fy);
      ctx.rotate(t * 8);
      ctx.strokeStyle = '#f5c518';
      ctx.lineWidth = 3;
      for (let i = 0; i < 4; i++) {
        ctx.rotate(Math.PI / 2);
        ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(fr - 5, 0); ctx.stroke();
      }
      ctx.restore();

      t += 0.015;
      requestAnimationFrame(draw);
    };

    draw();
    return () => window.removeEventListener('resize', setSize);
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
};

/* ─── Main Component ─── */
export default function Services() {
  return (
    <div className="services-page font-sans bg-[#050505]">

      {/* ── 00 / Premium Hero Section (Inspired by Provided Image) ── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-10">
        {/* Technical Background Grid */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'linear-gradient(rgba(245, 197, 24, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(245, 197, 24, 0.1) 1px, transparent 1px)',
              backgroundSize: '100px 100px',
              maskImage: 'radial-gradient(circle at 50% 50%, black, transparent 70%)'
            }}
          />
        </div>

        <div className="container mx-auto px-6 lg:px-20 relative z-10 flex flex-col items-center text-center pt-20">
          {/* Centered Content */}
          <div className="max-w-5xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(3.5rem,10vw,8.5rem)] font-black text-white leading-[0.85] tracking-tighter uppercase mb-12"
            >
              Services & <br />
              <span className="text-[#f5c518] relative inline-block">
                Capabilities
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-400 text-xl md:text-2xl max-w-2xl mx-auto mb-16 leading-relaxed font-medium uppercase tracking-tight"
            >
              Enterprise-grade AI infrastructure, designed for scale and high-density performance across all powered DigiPowerX sites.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-10"
            >
              <button className="px-12 py-6 bg-[#f5c518] text-black font-black uppercase tracking-[0.2em] text-[12px] rounded-full hover:bg-white transition-all shadow-[0_15px_50px_rgba(245,197,24,0.3)] flex items-center gap-4 group">
                Talk to Team <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center gap-3 text-white/60 font-bold text-[12px] uppercase tracking-[0.2em] hover:text-white transition-colors group">
                Investor Info <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>

        {/* Hero Background Visual (NeuralCube moved to background) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
        >
          <div className="w-full h-full max-w-4xl opacity-40">
            <NeuralCube3D />
          </div>
          {/* Decorative Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#f5c518] rounded-full blur-[200px] opacity-[0.08]" />
        </motion.div>

        {/* Bottom Snapshot Metrics (Full Width) */}
        <div className="w-full mt-auto relative z-20 border-t border-white/5 bg-black/40 backdrop-blur-3xl">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 py-12">
              {[
                { label: "Power Generation", val: "60MW" },
                { label: "Data Center", val: "22MW" },
                { label: "InfiniBand Fabric", val: "400G" },
                { label: "Modular Deploy", val: "ARMS" }
              ].map((item, i) => (
                <div key={i} className={`text-center px-8 ${i !== 3 ? 'md:border-r border-white/5' : ''}`}>
                  <p className="text-[#f5c518] font-black text-4xl md:text-5xl tracking-tighter mb-2 hover:scale-105 transition-transform duration-500">{item.val}</p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 01 / Power & Colocation (Light) ── */}
      <section className="bg-[#f8f9fa] py-32 md:py-15 relative overflow-hidden">
        {/* Subtle technical grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_10%,transparent_100%)] opacity-[0.03] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-20 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-32">
            <div className="max-w-2xl">
              {/* <SectionLabel num="01" text="Infrastructure Layer" /> */}
              <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-black leading-[0.9] tracking-tighter uppercase text-black mt-8">
                POWER & <br /><span className="text-[#f5c518]">COLOCATION.</span>
              </h2>
            </div>
            <div className="max-w-md lg:text-right">
              <p className="text-gray-500 text-lg font-medium leading-relaxed">
                Vertical integration at the physical layer. We own the generation, the substation, and the high-density floor space.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mt-20">
            {/* Power Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-100 p-12 relative group overflow-hidden"
            >
              {/* Card Blueprint Detail */}
              <div className="absolute top-0 right-0 p-4 opacity-10 font-mono text-[8px] text-black leading-tight pointer-events-none">
                PWR_GEN_MODULE v2.1<br />
                COORDS: 43.0292° N, 78.8783° W<br />
                STATUS: NOMINAL
              </div>

              <div className="flex flex-col h-full relative z-10">
                <div className="flex items-start justify-between mb-12">
                  <div className="w-16 h-16 bg-black text-[#f5c518] flex items-center justify-center">
                    <Zap size={32} />
                  </div>
                  <span className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.3em] vertical-rl rotate-180">GEN_CAPACITY</span>
                </div>

                <h3 className="text-3xl font-black uppercase tracking-tighter text-black mb-4">Power Infrastructure</h3>
                <p className="text-gray-400 font-medium mb-12 text-sm uppercase tracking-widest">Generation & BTMG Access</p>

                <p className="text-gray-500 font-medium mb-12 text-[15px] leading-relaxed">
                  Owned power generation at the North Tonawanda plant provides the cost foundation for all DigiPowerX services. Behind-the-meter generation reduces power cost to industry-leading levels.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 mb-16">
                  {[
                    "60MW Gas Plant",
                    "BTMG Program Access",
                    "Grid Sell Optionality",
                    "Dual-Path Redundancy"
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1 h-1 bg-[#f5c518]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-black/70">{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-8 border-t border-gray-50 flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#f5c518]">Scale to 500MW+</span>
                  <ArrowRight size={16} className="text-gray-300 group-hover:text-[#f5c518] group-hover:translate-x-2 transition-all" />
                </div>
              </div>
            </motion.div>

            {/* Colocation Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white border border-gray-100 p-12 relative group overflow-hidden"
            >
              {/* Card Blueprint Detail */}
              <div className="absolute top-0 right-0 p-4 opacity-10 font-mono text-[8px] text-black leading-tight pointer-events-none">
                DC_COLO_FLOOR v4.0<br />
                DENSITY: 80KW/RACK<br />
                COOLING: DLC_ENABLED
              </div>

              <div className="flex flex-col h-full relative z-10">
                <div className="flex items-start justify-between mb-12">
                  <div className="w-16 h-16 bg-black text-[#f5c518] flex items-center justify-center">
                    <Server size={32} />
                  </div>
                  <span className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.3em] vertical-rl rotate-180">SPACE_ALLOCATION</span>
                </div>

                <h3 className="text-3xl font-black uppercase tracking-tighter text-black mb-4">Data Center Colocation</h3>
                <p className="text-gray-400 font-medium mb-12 text-sm uppercase tracking-widest">AI-Ready High-Density Space</p>

                <p className="text-gray-500 font-medium mb-12 text-[15px] leading-relaxed">
                  Our Alabama facility provides high-density colocation designed specifically for GPU workloads, featuring advanced cooling and massive development pathways.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 mb-16">
                  {[
                    "22MW Operating Base",
                    "80kW+ Rack Density",
                    "Direct Liquid Cooling",
                    "24/7 Biometric Security"
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1 h-1 bg-[#f5c518]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-black/70">{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-8 border-t border-gray-50 flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#f5c518]">Tier III Pathway</span>
                  <ArrowRight size={16} className="text-gray-300 group-hover:text-[#f5c518] group-hover:translate-x-2 transition-all" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 02 / Advanced Tech (Dark) ── */}
      <section className="bg-[#06070a] py-32 md:py-15 relative overflow-hidden text-white border-y border-white/5">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)', backgroundSize: '48px 48px' }} />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-20 relative z-10">
          <SectionLabel num="02" text="Compute & Modular" dark />

          <div className="grid lg:grid-cols-2 gap-32 items-center mb-64">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
                NEOCLOUDZ <br /><span className="text-[#f5c518]">GPU CLUSTERS</span>
              </h3>
              <p className="text-gray-400 text-lg mb-12 leading-relaxed font-medium">
                Dedicated bare-metal GPU capacity — NVIDIA B200 clusters with 400G InfiniBand fabric, targeting AI training, inference, and HPC workloads.
              </p>
              <ul className="space-y-6 mb-12">
                <FeatureItem text="16-node B200 cluster standard modules" dark />
                <FeatureItem text="400G InfiniBand NDR fabric per cluster" dark />
                <FeatureItem text="No virtualization — dedicated hardware access" dark />
                <FeatureItem text="Real-time GPU utilization & VRAM telemetry" dark />
              </ul>
              <button className="px-10 py-5 bg-[#f5c518] text-black font-black uppercase tracking-widest text-[11px] hover:bg-white transition-all">
                NeoCloudz Platform
              </button>
            </motion.div>
            <div className="h-[600px] bg-black border border-white/10 overflow-hidden relative group shadow-2xl">
              <NeoCloudVisual />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div className="h-[600px] bg-black border border-white/10 overflow-hidden relative group order-last lg:order-first shadow-2xl">
              <ARMSVisual />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
                ARMS <br /><span className="text-[#f5c518]">MODULAR SYSTEM</span>
              </h3>
              <p className="text-gray-400 text-lg mb-12 leading-relaxed font-medium">
                The ARMS platform provides factory-built, repeatable data center blocks — compressing deployment timelines from months to weeks.
              </p>
              <ul className="space-y-6 mb-12">
                <FeatureItem text="600kW base module — repeatable factory build" dark />
                <FeatureItem text="Three-module 1.8MW standard campus block" dark />
                <FeatureItem text="Site install connects to prepared power" dark />
                <FeatureItem text="Scalable across all DigiPowerX sites" dark />
              </ul>
              <button className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-[11px] hover:bg-white/10 transition-all">
                ARMS Platform
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 03 / Integrated Advantage (Light & Sharp) ── */}
      <section className="bg-white py-32 md:py-15 relative overflow-hidden">
        {/* Subtle background architecture */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50/50 -skew-x-12 translate-x-32 pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-20 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-20 mb-32">
            <div className="max-w-2xl">
              <SectionLabel num="03" text="Synergy Layer" />
              <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-black leading-[0.9] tracking-tighter uppercase text-black mt-8">
                INTEGRATED <br /><span className="text-[#f5c518]">ADVANTAGE.</span>
              </h2>
            </div>
            <div className="lg:pt-24 max-w-sm">
              <p className="text-gray-500 text-lg font-medium leading-relaxed italic">
                "One company. Every layer. No finger-pointing."
              </p>
            </div>
          </div>
        </div>

        {/* Integration Flow Visual - Full Width */}
        <div className="mb-24 w-full bg-black text-white relative overflow-hidden py-16">
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
          <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
              {[
                { label: "01_POWER", desc: "60MW Owned Generation" },
                { label: "02_COLOCATION", desc: "AI-Ready High-Density Floor" },
                { label: "03_COMPUTE", desc: "Bare-Metal B200 Clusters" }
              ].map((step, i) => (
                <React.Fragment key={i}>
                  <div className="text-center md:text-left group/step">
                    <span className="text-[10px] font-black text-[#f5c518] tracking-[0.4em] mb-4 block group-hover/step:translate-x-2 transition-transform duration-500">{step.label}</span>
                    <p className="text-2xl md:text-3xl font-black uppercase tracking-tighter">{step.desc}</p>
                  </div>
                  {i < 2 && (
                    <div className="hidden md:block h-px flex-1 bg-white/10 mx-12 relative">
                      <motion.div
                        animate={{ left: ['0%', '100%'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute top-1/2 -translate-y-1/2 w-12 h-[2px] bg-gradient-to-r from-transparent via-[#f5c518] to-transparent"
                      />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-20 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200">
            {[
              { title: "Owned Power", desc: "Sub-$0.05/kWh cost structure flows through to every layer of colocation and compute." },
              { title: "Speed to Capacity", desc: "Existing substations and load studies eliminate the primary bottleneck for deployments." },
              { title: "Vertical Integration", desc: "One company owns every layer — no finger-pointing between utility and compute." },
              { title: "Multi-Layer", desc: "Consume power, space, and compute independently or as an integrated package." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-12 bg-white group hover:bg-black transition-all duration-500"
              >
                <span className="text-[10px] font-black text-[#f5c518] mb-8 block">0{i + 1}</span>
                <h4 className="text-2xl font-black uppercase tracking-tight text-black group-hover:text-white mb-6 transition-colors">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed font-medium group-hover:text-gray-400 transition-colors">{item.desc}</p>
                <div className="mt-12 h-1 w-8 bg-[#f5c518] group-hover:w-full transition-all duration-700 origin-left" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 04 / Final CTA (Dark) ── */}
      <CTASection />

    </div>
  );
}
