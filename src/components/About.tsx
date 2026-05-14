import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView, useMotionValue, animate } from 'framer-motion';
import {
  Zap,
  Cpu,
  TrendingUp,
  ShieldCheck,
  ArrowUpRight,
  Database,
  Layers,
  ChevronRight,
  Target,
  BarChart4,
  Activity
} from 'lucide-react';
import aboutHeroImg from '../assets/about_us_hero_visual.png';
import NeuralCube3D from './NeuralCube3D';
import IsometricDataCenter from './IsometricDataCenter';
import IsometricGPUCompute from './IsometricGPUCompute';
import IsometricEnergyGen from './IsometricEnergyGen';
import { CTASection } from './Footer';

const Magnetic = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set(clientX - centerX);
    y.set(clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
    >
      {children}
    </motion.div>
  );
};

const StatCounter = ({ value, suffix = "", duration = 2 }: { value: number; suffix?: string; duration?: number }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration,
        onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
      });
      return () => controls.stop();
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
};

const ShimmerText = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <span className={`relative inline-block ${className}`}>
    <span className="text-white">{children}</span>
    <motion.span
      initial={{ x: "-100%" }}
      animate={{ x: "100%" }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 pointer-events-none"
    />
  </span>
);

const BentoCard = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className={`group relative overflow-hidden rounded-[2.5rem] bg-[#0a0c0f] border border-white/5 hover:border-brand-yellow/30 transition-all duration-700 ${className}`}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(245,197,24,0.06), transparent 40%)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      {children}
    </motion.div>
  );
};

const About = () => {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const gridY = useTransform(smoothProgress, [0, 1], [0, -100]);

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleGlobalMouseMove);
    return () => window.removeEventListener('mousemove', handleGlobalMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="bg-black text-white min-h-screen selection:bg-brand-yellow selection:text-black overflow-x-hidden">

      {/* Premium Hero (Matching Reference Image) */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden bg-black">
        
        {/* Background Matrix Grid & 3D Visual */}
        <div className="absolute inset-0 z-0 opacity-[0.2]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(245,197,24,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(245,197,24,0.1)_1px,transparent_1px)] bg-[size:30px_30px]" />
        </div>

        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none flex items-center justify-center">
          <div className="w-full h-full max-w-6xl">
            <NeuralCube3D />
          </div>
        </div>


        <div className="relative z-10 max-w-[1400px] mx-auto text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            {/* Top Company Badge */}
            <div className="relative mb-16">
              <div className="w-64 h-[1px] bg-white/10" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-black flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-brand-yellow" />
                <span className="text-[9px] font-black uppercase tracking-[0.6em] text-white/40">Company</span>
              </div>
            </div>

            <h1 className="text-[clamp(3rem,10vw,120px)] font-black leading-[0.85] tracking-tighter uppercase mb-12">
              <span className="block text-white mb-2">About</span>
              <span className="block text-brand-yellow">DigiPowerX</span>
            </h1>

            <p className="text-sm md:text-base text-white/50 max-w-3xl mx-auto leading-relaxed mb-16 font-medium max-w-[800px]">
              DigiPowerX Corporation is a vertically integrated AI infrastructure company — owning and operating power generation assets, data centers, and GPU compute capacity across the United States.
            </p>

            <div className="flex flex-wrap justify-center gap-8">
              <button className="bg-brand-yellow text-black px-16 py-4 font-black text-[12px] uppercase tracking-[0.2em] rounded shadow-[0_0_30px_rgba(245,197,24,0.2)] hover:bg-white transition-all">
                Contact Us
              </button>
              <button className="border border-white/10 bg-white/[0.03] text-white px-16 py-4 font-black text-[12px] uppercase tracking-[0.2em] rounded hover:bg-white/10 transition-all backdrop-blur-sm">
                Investor Relation
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom HUD Stats Bar */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-[1200px] px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 py-6 border-t border-white/10 border-b border-white/10 bg-black/40 backdrop-blur-xl"
          >
            {[
              { val: "2017", label: "Company Founded" },
              { val: "NASDAQ", label: "Public Listing - DGXX" },
              { val: "04", label: "Operating and Development Sites" },
              { val: "301MW+", label: "Total Portfolio Capacity" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-brand-yellow font-black text-xl mb-1 tracking-tighter">{stat.val}</div>
                <div className="text-[8px] font-black text-white/30 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Company Overview Section (Matching Reference Image) */}
      <section className="relative py-40 bg-black overflow-hidden">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="flex flex-col items-center text-center mb-24">
            {/* Top Overview Badge */}
            <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full border border-white/20 mb-16 backdrop-blur-sm">
              <div className="flex items-center gap-1.5">
                <div className="h-[2px] w-8 bg-brand-yellow" />
                <div className="h-[2px] w-2 bg-white/20" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/80">Company Overview</span>
            </div>

            <h2 className="text-[clamp(2.5rem,6vw,80px)] font-black leading-[1.05] tracking-tighter uppercase mb-12 max-w-5xl">
              Owned at every layer. <br />
              Built for scale.
            </h2>

            <p className="text-white/40 text-sm md:text-lg max-w-4xl mx-auto leading-relaxed font-medium tracking-wide">
              DigiPowerX is built around a simple but powerful thesis: the company that controls power controls the compute. By owning the full infrastructure stack from energy generation through GPU compute, DigiPowerX can serve AI and HPC customers faster, cheaper, and at greater scale than any pure-play competitor.
            </p>
          </div>

          {/* Three-Column Features Matrix */}
          <div className="grid md:grid-cols-3 gap-0 border border-white/10 bg-white/[0.02] rounded-2xl overflow-hidden">
            {[
              {
                tag: "Power",
                title: "Energy Infrastructure",
                desc: "Owned power generation assets and substation access create a structural cost and speed advantage that competitors building on leased utility power cannot replicate. The North Tonawanda plant produces at approximately $0.04/kWh."
              },
              {
                tag: "Data Centers",
                title: "AI-Ready Facilities",
                desc: "The company converts owned power assets into high-density, AI-ready data center capacity — targeting Tier III classification, direct liquid cooling, and 80kW+ per-rack GPU density at the Alabama facility."
              },
              {
                tag: "Compute",
                title: "GPU Compute Platform",
                desc: "NeoCloudz is the compute layer on top of the DigiPowerX infrastructure stack — providing bare-metal GPU access, 400G InfiniBand fabric, and enterprise-grade telemetry for AI training, inference, and HPC workloads."
              }
            ].map((item, i) => (
              <div 
                key={i} 
                className={`p-12 flex flex-col gap-6 ${i !== 2 ? 'md:border-r border-white/10' : ''}`}
              >
                <div className="text-brand-yellow text-[10px] font-black uppercase tracking-[0.3em]">{item.tag}</div>
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white">{item.title}</h3>
                <p className="text-white/40 text-[13px] md:text-sm leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section (Light Theme Contrast - Matching Reference Image) */}
      <section className="relative py-40 bg-white text-black overflow-hidden">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="flex flex-col items-center text-center mb-24">
            {/* Mission Badge */}
            <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full border border-black/10 mb-16">
              <div className="flex items-center gap-1.5">
                <div className="h-[2px] w-8 bg-brand-yellow" />
                <div className="h-[2px] w-2 bg-black/10" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/60">Mission</span>
            </div>

            <h2 className="text-[clamp(2.5rem,6vw,70px)] font-black leading-[1.05] tracking-tighter uppercase mb-12 max-w-6xl">
              Vertically Integrated <span className="text-brand-yellow font-black">AI</span> <br />
              <span className="text-brand-yellow font-black">Infrastructure</span> at Scale.
            </h2>

            <div className="space-y-6 max-w-5xl mx-auto">
              <p className="text-black/60 text-sm md:text-lg leading-relaxed font-medium">
                DigiPowerX is building the infrastructure layer that the next decade of AI development will run on - owned power, owned data centers, and owned compute, fully integrated and deployed across strategic U.S. locations.
              </p>
              <p className="text-black/60 text-sm md:text-lg leading-relaxed font-medium">
                The company serves AI model developers, HPC research organizations, enterprise compute customers, and digital asset operators - all monetizing the same infrastructure base at different layers of the stack.
              </p>
            </div>
          </div>

          {/* Four-Card Mission Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Power Generation",
                desc: "60MW North Tonawanda plant at ~$0.04/kWh — the cost-structure foundation for everything above it."
              },
              {
                title: "Data Centers",
                desc: "22MW Alabama base with 55MW expansion approval — Tier III conversion and GPU-density buildout in progress."
              },
              {
                title: "AI Compute",
                desc: "NeoCloudz bare-metal GPU platform — the highest-margin product built on owned infrastructure."
              },
              {
                title: "Pipeline",
                desc: "200MW North Carolina development site adjacent to major utility infrastructure — the next phase of growth."
              }
            ].map((card, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-10 rounded-2xl bg-gray-50 border border-gray-200 hover:shadow-xl hover:shadow-brand-yellow/10 transition-all duration-500 group"
              >
                <h3 className="text-lg font-black uppercase tracking-tight mb-4 group-hover:text-brand-yellow transition-colors text-black">
                  {card.title}
                </h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-medium">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Financial Metrics Matrix (Matching Reference Image) */}
      <section className="py-24 bg-black border-y border-white/10">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-0">
            {[
              {
                val: "$31M+",
                desc: "REVENUE FOR NINE MONTHS ENDED SEPTEMBER 30, 2024 — ACTIVE OPERATING REVENUE FROM MULTIPLE SITES."
              },
              {
                val: "$5M+",
                desc: "EBITDA FOR NINE MONTHS ENDED SEPTEMBER 30, 2024 — PROFITABLE OPERATING PERFORMANCE."
              },
              {
                val: "$0 LT Debt",
                desc: "NO LONG-TERM DEBT REPORTED IN COMPANY INVESTOR MATERIALS — BALANCE SHEET FLEXIBILITY."
              },
              {
                val: "~$44M",
                desc: "MARKET CAPITALIZATION AS CITED IN THE JANUARY 2025 CORPORATE OVERVIEW PRESENTATION."
              }
            ].map((stat, i) => (
              <div 
                key={i} 
                className={`flex flex-col gap-6 px-8 ${i !== 3 ? 'md:border-r border-white/5' : ''}`}
              >
                <div className="text-4xl md:text-5xl font-black text-brand-yellow tracking-tighter">
                  {stat.val}
                </div>
                <p className="text-[9px] md:text-[10px] font-black text-white/40 leading-relaxed uppercase tracking-wider max-w-[280px]">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
    
      <CTASection />
    </div>
  );
};

export default About;
