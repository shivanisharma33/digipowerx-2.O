import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Cpu, 
  Activity, 
  Server, 
  Droplets, 
  ShieldCheck, 
  Target, 
  ChevronRight, 
  Radio, 
  Network,
  Database,
  BarChart3,
  Layers
} from 'lucide-react';
import { CTASection } from './Footer';
import NeuralCube3D from './NeuralCube3D';

const Terminal = () => {
  const [lines, setLines] = React.useState<string[]>([]);

  const allLines = [
    'GPU 0-7: NVIDIA B200 · 192GB HBM3e each',
    '',
    'neocloudz:~ $ nvidia-smi --query',
    '',
    'All systems nominal · PUE 1.12',
    '',
    '[INFO] Cluster: 16x B200 | InfiniBand: 400G',
    '[INFO] VRAM per node: 192 GB | Total: 3.07 TB',
    '[INFO] Provisioned in 00:00:47 — SLA: <60s ✔',
    '',
    'trainer.train()... [STEP 500] loss=1.0887',
    '',
    'neocloudz:~ $ provision b200 --count 8 --fabric ib400g',
    'Allocating node cluster [██████████] 100%',
    'InfiniBand fabric: 400Gb/s · ready',
  ];

  React.useEffect(() => {
    let currentIdx = 0;
    const interval = setInterval(() => {
      setLines(prev => {
        const nextLines = [...prev, allLines[currentIdx]];
        if (nextLines.length > 15) nextLines.shift();
        return nextLines;
      });
      currentIdx = (currentIdx + 1) % allLines.length;
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#020503] rounded-xl border border-[#00e878]/20 overflow-hidden font-mono text-[11px] md:text-[12px] h-[380px] shadow-[0_0_60px_rgba(0,232,120,0.06)] relative group w-full">
      <div className="bg-[#040806] border-b border-[#00e878]/20 px-4 py-3 flex items-center justify-between">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="text-[#00e878]/80 text-[10px] md:text-[11px] tracking-[0.25em] font-black uppercase">GPU_NODE_ENGINE_V4</div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-[#00e878] rounded-full shadow-[0_0_8px_rgba(0,232,120,0.8)] animate-pulse" />
          <span className="text-[#00e878] text-[9px] tracking-widest uppercase font-bold hidden sm:block">RUNNING</span>
        </div>
      </div>
      <div className="p-6 md:p-8 space-y-[6px] relative z-10 overflow-y-auto h-full text-left">
        {lines.map((line, idx) => (
          <div key={idx} className={`${line.startsWith('[INFO]') ? 'text-[#00e878]/50' :
              line.includes('neocloudz:~ $') ? 'text-[#00e878] font-bold drop-shadow-[0_0_5px_rgba(0,232,120,0.5)]' :
                'text-[#00e878]/70'
            } whitespace-nowrap overflow-hidden text-ellipsis tracking-wide leading-relaxed`}>
            {line}
          </div>
        ))}
        <div className="flex items-center gap-2 mt-2">
          <span className="w-2 h-4 bg-[#00e878] animate-pulse" />
        </div>
      </div>
    </div>
  );
};

const NeoCloudz = () => {
  return (
    <div className="bg-[#050505] text-white overflow-x-hidden font-sans selection:bg-[#00e878]/20">
      
      {/* ── HERO SECTION ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-10 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 opacity-20">
            <NeuralCube3D />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-[#050505]" />
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
            <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full border border-[#00e878]/20 bg-[#00e878]/5 backdrop-blur-xl mb-8 shadow-[0_0_30px_rgba(0,232,120,0.05)]">
              <span className="text-[10px] font-black tracking-[0.6em] text-[#00e878] uppercase underline underline-offset-4">NEO CLOUDZ</span>
              <span className="text-[10px] font-black tracking-[0.6em] text-white/40 uppercase">Bare-Metal GPU Compute</span>
            </div>

            <h1 className="text-[clamp(3.5rem,12vw,140px)] font-black leading-[0.9] uppercase tracking-tighter mb-6 relative">
              NEO <br />
              <span className="text-[#00e878] drop-shadow-[0_0_20px_rgba(0,232,120,0.3)]">CLOUDZ.</span>
            </h1>

            <p className="text-white/60 max-w-3xl mx-auto text-sm md:text-base font-medium leading-relaxed mb-12 tracking-tight">
              NeoCloudz is the bare-metal GPU compute layer built on DigiPowerX infrastructure — dedicated cluster access, 400G fabric, and performance-first architecture for AI training, inference, and HPC.
            </p>

            <div className="flex flex-wrap justify-center gap-8">
              <Link to="/contact" className="px-14 py-6 bg-[#00e878] text-black font-black text-[11px] uppercase tracking-[0.3em] rounded-sm hover:bg-white transition-all shadow-[0_10px_50px_rgba(0,232,120,0.3)]">
                Request Capacity
              </Link>
              <button className="px-14 py-6 border border-white/10 bg-white/5 backdrop-blur-md font-black text-[11px] uppercase tracking-[0.3em] rounded-sm hover:bg-white/10 transition-all">
                Investor Info
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── OPERATIONAL MATRIX ── */}
      <section className="bg-[#080808] py-24 px-6 relative border-y border-white/5">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
          {[
            { val: "B200", label: "Architecture", sub: "NVIDIA Blackwell cluster architecture", status: "NEXT-GEN" },
            { val: "400G", label: "Interconnect", sub: "InfiniBand NDR fabric per node", status: "FAST" },
            { val: "<60s", label: "Provisioning", sub: "Target bare-metal setup time", status: "LIVE" },
            { val: "16×", label: "Module Density", sub: "B200 nodes per cluster module", status: "DENSE" }
          ].map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-12 bg-[#080808] group hover:bg-black transition-all duration-500 relative"
            >
              <div className="flex justify-between items-start mb-10">
                <span className="text-[10px] font-black text-[#00e878] tracking-[0.4em] uppercase">{card.label}</span>
                <div className="px-3 py-1 bg-white/5 border border-white/10 text-[7px] font-black tracking-widest group-hover:bg-[#00e878] group-hover:text-black transition-colors">{card.status}</div>
              </div>
              <div className="text-5xl font-black text-white tracking-tighter mb-4">{card.val}</div>
              <p className="text-[10px] font-bold text-white/30 tracking-widest leading-relaxed uppercase">{card.sub}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── LIVE TELEMETRY SECTION ── */}
      <section className="bg-black py-32 px-6 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-32 items-center">
          <div className="lg:w-1/2 space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-[#00e878]" />
                <span className="text-[10px] font-black tracking-[0.6em] text-[#00e878] uppercase">Live Cluster Telemetry</span>
              </div>
              <h2 className="text-6xl md:text-7xl font-black text-white leading-[0.85] uppercase tracking-tighter">
                FULL CLUSTER <br />
                <span className="text-[#00e878]">VISIBILITY.</span>
              </h2>
              <p className="text-base font-medium text-white/40 tracking-tight leading-relaxed max-w-xl">
                Every NeoCloudz deployment provides real-time node utilization, temperature, memory, and fabric throughput — giving teams the operational visibility that shared cloud environments cannot offer.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { t: "Deep Metrics", d: "Per-GPU utilization, VRAM, temp, and power", icon: Activity },
                { t: "Fabric Health", d: "Node-to-node traffic across InfiniBand", icon: Network },
                { t: "Job Status", d: "Checkpoint tracking and throughput telemetry", icon: Target },
                { t: "No Overhead", d: "No noisy neighbor or virtualization interference", icon: Zap }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[#00e878] group-hover:bg-[#00e878] group-hover:text-black transition-all">
                    <item.icon size={18} />
                  </div>
                  <div className="space-y-1">
                    <div className="text-[11px] font-black tracking-widest uppercase">{item.t}</div>
                    <div className="text-[10px] font-bold text-white/30 leading-relaxed uppercase">{item.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[#00e878]/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="relative pl-6 pt-6">
              <div className="absolute top-0 left-0 w-20 h-20 border-t border-l border-[#00e878]/30 pointer-events-none" />
              <div className="absolute bottom-[-1.5rem] right-[-1.5rem] w-20 h-20 border-b border-r border-[#00e878]/30 pointer-events-none" />
              <div className="absolute -top-12 right-0 text-[9px] font-mono font-bold text-[#00e878] tracking-[0.4em] uppercase">NeoCloudz Cluster — Live Node Telemetry</div>
              <Terminal />
            </div>
          </div>
        </div>
      </section>

      {/* ── DEPLOYMENT FLOW ── */}
      <section className="bg-[#050505] py-32 px-6 relative">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
            <div className="max-w-4xl">
              <div className="flex items-center gap-6 mb-10">
                <div className="w-16 h-[1px] bg-[#00e878]" />
                <span className="text-[11px] font-black tracking-[0.6em] text-[#00e878] uppercase">01 / Deployment Flow</span>
              </div>
              <h2 className="text-6xl md:text-[100px] font-black text-white leading-[0.8] uppercase tracking-tighter">
                FROM REQUEST TO <br />
                <span className="text-[#00e878]">RUNNING.</span>
              </h2>
            </div>
            <p className="text-[11px] font-bold text-white/40 tracking-widest leading-relaxed border-l-2 border-[#00e878] pl-8 max-w-sm">
              A streamlined path from capacity request to dedicated bare-metal GPU cluster — without queuing or overhead.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-px bg-white/10 border border-white/10">
            {[
              { step: "01", t: "REQUEST", l: "Workload Profile", d: "Define cluster size, GPU type, interconnect, and storage requirements." },
              { step: "02", t: "PROVISION", l: "Allocate Hardware", d: "Dedicated bare-metal nodes allocated with InfiniBand fabric configured." },
              { step: "03", t: "DEPLOY", l: "Environment Live", d: "Direct hardware access with networking and OS image ready to run." },
              { step: "04", t: "MONITOR", l: "Full Telemetry", d: "GPU utilization, temp, and memory stream in real time to dashboard." },
              { step: "05", t: "SCALE", l: "Expand On Demand", d: "Additional nodes allocated as training jobs grow or demand increases." }
            ].map((s, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-12 bg-[#050505] group hover:bg-black transition-all relative overflow-hidden"
              >
                <span className="text-[10px] font-mono font-bold text-white/10 group-hover:text-[#00e878] transition-colors mb-12 block">{s.step}</span>
                <div className="text-[10px] font-black text-[#00e878] tracking-[0.5em] mb-4">{s.t}</div>
                <h3 className="text-xl font-black text-white mb-6 uppercase tracking-tight">{s.l}</h3>
                <p className="text-[10px] font-bold text-white/30 tracking-widest leading-relaxed uppercase">{s.d}</p>
                <div className="absolute bottom-0 left-0 h-1 bg-[#00e878] w-0 group-hover:w-full transition-all duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUPPORTED WORKLOADS ── */}
      <section className="bg-black py-32 px-6 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="text-center mb-24">
            <div className="flex items-center justify-center gap-6 mb-10">
              <div className="w-16 h-[1px] bg-[#00e878]" />
              <span className="text-[11px] font-black tracking-[0.6em] text-[#00e878] uppercase">02 / Supported Workloads</span>
              <div className="w-16 h-[1px] bg-[#00e878]" />
            </div>
            <h2 className="text-6xl md:text-9xl font-black text-white leading-[0.8] uppercase tracking-tighter mb-12">
              WHAT THIS <br />
              <span className="text-[#00e878]">RUNS.</span>
            </h2>
            <p className="text-white/40 text-sm md:text-base font-medium leading-relaxed max-w-4xl mx-auto tracking-tight">
              NeoCloudz is purpose-built for workloads that demand predictable performance, direct hardware control, and high-speed node-to-node communication.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              {
                title: "TRAINING",
                subtitle: "Large Model Training",
                icon: Cpu,
                desc: "Dedicated multi-node clusters for training foundation models where interconnect and utilization are critical.",
                items: [
                  "LLM pre-training and fine-tuning at scale",
                  "Distributed training with NCCL / MPI",
                  "Persistent NVMe checkpoint storage",
                  "Sustained 94%+ GPU utilization"
                ]
              },
              {
                title: "INFERENCE",
                subtitle: "Production Inference",
                icon: Activity,
                desc: "Bare-metal GPU capacity for predictable latency and the ability to run proprietary model weights securely.",
                items: [
                  "Real-time inference with low-latency SLA",
                  "Batch processing and offline pipelines",
                  "Private deployment with no shared surface",
                  "Multi-billion parameter model serving"
                ]
              },
              {
                title: "HPC",
                subtitle: "High-Performance Computing",
                icon: Target,
                desc: "GPU-accelerated simulation and rendering that benefits from dense capacity and power cost advantages.",
                items: [
                  "Physics simulation and molecular dynamics",
                  "3D rendering and generative media",
                  "Scientific computing and numerical analysis",
                  "Financial modeling and quantitative workloads"
                ]
              }
            ].map((w, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-[#080808] border border-white/5 p-16 rounded-2xl hover:border-[#00e878]/30 transition-all overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00e878]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#00e878]/10 transition-all" />
                <div className="flex items-center gap-6 mb-12">
                  <div className="w-14 h-14 rounded-xl bg-[#00e878]/10 flex items-center justify-center text-[#00e878]">
                    <w.icon size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-[#00e878] tracking-[0.5em] block mb-1 uppercase">{w.title}</span>
                    <span className="text-xl font-black text-white tracking-tight uppercase">{w.subtitle}</span>
                  </div>
                </div>
                <p className="text-white/40 text-[13px] font-bold tracking-tight leading-relaxed mb-12 group-hover:text-white/60 transition-colors uppercase">{w.desc}</p>
                <div className="space-y-4">
                  {w.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 py-3 border-t border-white/5">
                      <div className="w-1 h-1 rounded-full bg-[#00e878]" />
                      <span className="text-[10px] font-black text-white/60 tracking-widest uppercase">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARCHITECTURE GRID ── */}
      <section className="bg-[#050505] pt-32 pb-0 px-6 relative">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-px bg-[#00e878]" />
                  <span className="text-[11px] font-black tracking-[0.6em] text-[#00e878] uppercase">GPU Cluster Architecture</span>
                </div>
                <h2 className="text-6xl md:text-7xl font-black text-white leading-[0.85] uppercase tracking-tighter">
                  BUILT FOR <br />
                  <span className="text-[#00e878]">AI WORKLOADS.</span>
                </h2>
                <p className="text-base font-medium text-white/40 tracking-tight leading-relaxed max-w-xl">
                  NeoCloudz provides direct access to high-performance GPU clusters with no virtualization layer — dedicated hardware, 400G fabric, and full cluster telemetry designed for AI training, inference, and large-scale compute.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-12">
                {[
                  { t: "Multi-Node Clusters", d: "Dedicated multi-node clusters, not shared instances." },
                  { t: "400G InfiniBand", d: "Low-latency distributed training communication." },
                  { t: "Bare Metal Access", d: "Full stack control from OS to GPU driver." },
                  { t: "Performance Visibility", d: "Real-time telemetry visible to customer." }
                ].map((f, i) => (
                  <div key={i} className="space-y-3">
                    <div className="text-[11px] font-black text-white tracking-widest uppercase">{f.t}</div>
                    <div className="text-[10px] font-bold text-white/30 tracking-widest leading-relaxed uppercase">{f.d}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { val: "Bare Metal", label: "Dedicated hardware, no shared pools.", icon: ShieldCheck },
                { val: "GPU Clusters", label: "Multi-node B200 architecture.", icon: Server },
                { val: "<$0.05/kWh", label: "Power-cost advantage passed through.", icon: Zap },
                { val: "Scalable", label: "Design to expand to campus scale.", icon: Layers }
              ].map((m, i) => (
                <div key={i} className="p-12 bg-white/[0.02] border border-white/5 rounded-2xl group hover:border-[#00e878]/30 transition-all">
                  <m.icon className="text-[#00e878] mb-8 group-hover:scale-110 transition-transform" size={32} />
                  <div className="text-3xl font-black text-white tracking-tighter mb-4 uppercase">{m.val}</div>
                  <div className="text-[10px] font-bold text-white/30 tracking-widest uppercase">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default NeoCloudz;
