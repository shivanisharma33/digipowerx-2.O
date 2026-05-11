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
import IsometricDataCenter from './IsometricDataCenter';
import IsometricGPUCompute from './IsometricGPUCompute';
import IsometricEnergyGen from './IsometricEnergyGen';

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
    <div ref={containerRef} className="bg-[#06070a] text-white min-h-screen selection:bg-brand-yellow selection:text-black overflow-x-hidden">
      {/* Global Cursor Spotlight */}
      <div 
        className="fixed inset-0 z-50 pointer-events-none opacity-40 mix-blend-screen"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(245,197,24,0.03), transparent 80%)`,
        }}
      />

      {/* Dynamic Background Grid */}
      <motion.div 
        style={{ y: gridY }}
        className="fixed inset-0 z-0 pointer-events-none opacity-20"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </motion.div>

      {/* Premium Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div 
            style={{ opacity: useTransform(smoothProgress, [0, 0.2], [0.6, 0]) }}
            className="absolute inset-0"
          >
            <img 
              src={aboutHeroImg} 
              alt="Background" 
              className="w-full h-full object-cover grayscale opacity-40 scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#06070a] via-transparent to-[#06070a]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#06070a] via-transparent to-[#06070a]" />
          </motion.div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 mb-12 backdrop-blur-xl">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow shadow-[0_0_10px_rgba(245,197,24,0.8)]" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">NASDAQ: DGXX</span>
            </div>

            <h1 className="text-[clamp(3.5rem,10vw,11rem)] font-black leading-[0.85] tracking-tighter uppercase mb-12">
              <ShimmerText>Powering</ShimmerText> <br />
              <span className="text-brand-yellow">AI Infra.</span>
            </h1>

            <p className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-16 font-medium">
              DigiPowerX is a vertically integrated powerhouse owning the full infrastructure stack—from energy generation to GPU compute.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <Magnetic>
                <button className="bg-brand-yellow text-black px-12 py-5 font-black text-sm uppercase tracking-widest hover:shadow-[0_0_40px_rgba(245,197,24,0.2)] transition-all">
                  Investor Center
                </button>
              </Magnetic>
              <Magnetic>
                <button className="border border-white/10 px-12 py-5 font-black text-sm uppercase tracking-widest transition-all hover:bg-white/5">
                  View Pipeline
                </button>
              </Magnetic>
            </div>
          </motion.div>
        </div>

        <motion.div 
          style={{ opacity: useTransform(smoothProgress, [0, 0.05], [1, 0]) }}
          className="absolute bottom-12 flex flex-col items-center gap-4"
        >
          <div className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-500">Discover More</div>
          <div className="w-[1px] h-12 bg-gradient-to-b from-brand-yellow to-transparent" />
        </motion.div>
      </section>

      {/* Cinematic Mission Section */}
      <section className="relative py-40 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-brand-yellow font-black uppercase tracking-[0.8em] mb-12 text-[11px]">The DigiPowerX Thesis</div>
            <h2 className="text-4xl md:text-7xl font-black text-white leading-[1.1] uppercase tracking-tighter mb-12">
              The company that <span className="text-brand-yellow">controls power</span> <br />
              controls the <span className="text-gray-500">compute.</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-500 max-w-4xl mx-auto leading-relaxed font-medium">
              We own the full stack—from energy generation through GPU clusters—enabling us to serve AI and HPC customers at a scale and cost-basis impossible for pure-play competitors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Split-Screen Infrastructure Pillars */}
      <section className="bg-[#0a0c0f]">
        {[
          { 
            label: "01",
            title: "Energy Generation", 
            subtitle: "The Foundation",
            desc: "Our 60MW North Tonawanda gas-fired plant provides energy at ~$0.04/kWh. This low-cost base is the ultimate competitive moat in the energy-hungry AI era.",
            stat: "60MW",
            statLabel: "Current Capacity"
          },
          { 
            label: "02",
            title: "Data Centers", 
            subtitle: "High-Density Ops",
            desc: "Operating 22MW of purpose-built data centers in Alabama with 55MW expansion approval. Designed for Blackwell-scale density (80kW+ per rack).",
            stat: "Tier III",
            statLabel: "Design Standard"
          },
          { 
            label: "03",
            title: "GPU Compute", 
            subtitle: "The Product",
            desc: "NeoCloudz provides bare-metal access to H100 and Blackwell clusters. By owning the power and the center, we maximize margin and service velocity.",
            stat: "Blackwell",
            statLabel: "NVIDIA Clusters"
          }
        ].map((pillar, i) => (
          <div key={i} className={`flex flex-col lg:flex-row border-b border-white/5 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
            <div className="lg:w-1/2 p-12 md:p-24 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-12">
                <span className="text-brand-yellow font-black text-sm">{pillar.label}</span>
                <div className="h-[1px] w-12 bg-brand-yellow/30" />
                <span className="text-gray-500 font-black text-[10px] uppercase tracking-widest">{pillar.subtitle}</span>
              </div>
              <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8">{pillar.title}</h3>
              <p className="text-lg text-gray-400 mb-12 max-w-lg leading-relaxed font-medium">{pillar.desc}</p>
              <div className="pt-12 border-t border-white/10 flex gap-12">
                <div>
                  <div className="text-4xl font-black text-white tracking-tighter">
                    <StatCounter value={pillar.title === "Energy Generation" ? 60 : pillar.title === "Data Centers" ? 3 : 200} suffix={pillar.title === "Energy Generation" ? "MW" : pillar.title === "Data Centers" ? " III" : "MW"} />
                  </div>
                  <div className="text-[10px] font-black text-gray-600 uppercase tracking-widest mt-1">{pillar.statLabel}</div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 min-h-[400px] bg-white/[0.02] relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(245,197,24,0.05)_0%,transparent_70%)]" />
              </div>
              <div className="w-full h-full">
                {pillar.title === "Energy Generation" ? (
                  <IsometricEnergyGen />
                ) : pillar.title === "Data Centers" ? (
                  <IsometricDataCenter />
                ) : pillar.title === "GPU Compute" ? (
                  <IsometricGPUCompute />
                ) : (
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="w-full h-full flex items-center justify-center"
                  >
                    <div className="text-[150px] font-black text-white/[0.02] uppercase select-none">
                      {pillar.title.split(' ')[0]}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* HUD-Style Data HUD */}
      <section className="py-32 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border border-white/10 p-12 bg-white/[0.01] backdrop-blur-3xl rounded-[2.5rem]">
            {[
              { val: 301, suffix: "MW+", label: "Total Capacity", color: "text-brand-yellow" },
              { val: 31, suffix: "M+", label: "Operating Revenue", color: "text-white" },
              { val: 4, suffix: "", label: "Active Sites", color: "text-white" },
              { val: 2017, suffix: "", label: "Founded", color: "text-gray-500" }
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <div className={`text-5xl font-black tracking-tighter mb-2 ${stat.color}`}>
                  <StatCounter value={stat.val} suffix={stat.suffix} />
                </div>
                <div className="text-[10px] font-black text-gray-600 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clean Financials Section */}
      <section className="py-32 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
            <div className="lg:w-1/2">
              <div className="text-[11px] font-black text-brand-yellow uppercase tracking-[0.5em] mb-8 text-center lg:text-left">Corporate Stability</div>
              <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-12 text-center lg:text-left">
                Lean <br /><span className="text-gray-500">Growth.</span>
              </h2>
              <div className="space-y-12 max-w-xl mx-auto lg:mx-0">
                <div className="flex gap-8 items-start">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                    <ShieldCheck className="text-brand-yellow" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-black uppercase tracking-tighter mb-2">Zero Debt</h4>
                    <p className="text-gray-500 font-medium text-sm">DigiPowerX operates with no long-term debt, providing extreme agility in volatile infrastructure markets.</p>
                  </div>
                </div>
                <div className="flex gap-8 items-start">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                    <Target className="text-brand-yellow" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-black uppercase tracking-tighter mb-2">Public Transparency</h4>
                    <p className="text-gray-500 font-medium text-sm">Listed on NASDAQ (DGXX), we maintain the highest standards of financial reporting and operational governance.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="bg-[#0a0c0f] border border-white/5 rounded-[3rem] p-12 md:p-20 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8">
                  <BarChart4 size={40} className="text-brand-yellow/20" />
                </div>
                <div className="text-[10px] font-black text-gray-600 uppercase tracking-widest mb-12">Balance Sheet Overview</div>
                <div className="space-y-12">
                  <div>
                    <div className="flex justify-between mb-4">
                      <span className="text-sm font-black uppercase tracking-widest text-gray-400">Market Cap</span>
                      <span className="text-white font-black">~$<StatCounter value={44} suffix="M" /></span>
                    </div>
                    <div className="h-[2px] w-full bg-white/5">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ duration: 1.5 }} className="h-full bg-brand-yellow" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-4">
                      <span className="text-sm font-black uppercase tracking-widest text-gray-400">Asset Valuation</span>
                      <span className="text-white font-black">$<StatCounter value={100} suffix="M+" /></span>
                    </div>
                    <div className="h-[2px] w-full bg-white/5">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: "80%" }} transition={{ duration: 1.5, delay: 0.2 }} className="h-full bg-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Immersive CTA */}
      <section className="py-40 px-6 border-t border-white/5 relative overflow-hidden bg-white/[0.01]">
        <div className="max-w-[1200px] mx-auto text-center relative z-10">
          <h2 className="text-6xl md:text-[10rem] font-black uppercase tracking-tighter leading-[0.8] mb-16">
            Future <br />
            <span className="text-brand-yellow">Now.</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Magnetic>
              <button className="border border-white text-white px-16 py-6 font-black text-sm uppercase tracking-widest transition-all hover:bg-white hover:text-black">
                Investor Relations
              </button>
            </Magnetic>
            <Magnetic>
              <button className="bg-brand-yellow text-black px-16 py-6 font-black text-sm uppercase tracking-widest transition-all hover:bg-brand-yellow/80">
                Contact Team
              </button>
            </Magnetic>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
