import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';



const Terminal = () => {
  const [lines, setLines] = useState<string[]>([]);
  const allLines = [
    'neocloudz:~ $ provision b200 --count 8 --fabric ib400g',
    'Allocating node cluster [████████] 100%',
    'InfiniBand fabric: 400Gb/s · ready',
    'GPU 0-7: NVIDIA B200 · 192GB HBM3e each',
    'neocloudz:~ $ nvidia-smi --query',
    'All systems nominal · PUE 1.12',
    '[INFO]  Cluster: 16× B200 | InfiniBand: 400G',
    '[INFO]  VRAM per node: 192 GB | Total: 3.07 TB',
    '[INFO]  Provisioned in 00:00:47 — SLA: <60s ✓',
    'trainer.train()... [STEP 500] loss=1.0887',
  ];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setLines(prev => [...prev, allLines[i % allLines.length]].slice(-12));
      i++;
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black/95 rounded-lg border border-emerald-500/30 overflow-hidden font-mono text-[11px] h-[380px] shadow-2xl shadow-emerald-500/10 relative group">
      {/* Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none z-20 opacity-[0.03]"
        style={{ background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))', backgroundSize: '100% 2px, 3px 100%' }} />

      {/* Header */}
      <div className="bg-emerald-500/10 border-b border-emerald-500/20 px-5 py-4 flex items-center justify-between">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/30" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/30" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/30" />
        </div>
        <div className="text-emerald-500/60 text-[10px] tracking-[0.4em] font-black uppercase">GPU_NODE_ENGINE_v4</div>
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          <span className="text-emerald-400 text-[10px] font-black tracking-widest">RUNNING</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 md:p-8 space-y-3 relative z-10 overflow-y-auto">
        {lines.map((line, idx) => (
          <div key={idx} className={`${
            line.startsWith('[') ? 'text-emerald-500/40' :
              line.includes('$') ? 'text-emerald-400 font-bold' :
                line.includes('██') ? 'text-emerald-300' : 'text-gray-500'
          } whitespace-nowrap overflow-hidden text-ellipsis`}>
            {line}
          </div>
        ))}
        <div className="flex items-center gap-2">
          <span className="text-emerald-500 font-bold">root@b200-node-07:~$</span>
          <span className="w-2.5 h-4 bg-emerald-500/80 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

const NeoCloudzSection = () => {
  return (
    <section className="bg-brand-dark py-32 px-6 lg:px-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />

      <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <div className="text-[10px] font-black tracking-[0.3em] text-emerald-500/50 uppercase mb-8 flex items-center gap-4">
            <span className="text-emerald-900">04 /</span> WHOLLY OWNED SUBSIDIARY
          </div>
          <h2 className="text-[clamp(3rem,8vw,6rem)] font-black leading-[0.9] tracking-tighter text-white uppercase mb-8">
            MEET<br />
            <span className="text-emerald-500">NEO</span><br />
            CLOUDZ.
          </h2>
          <p className="text-white/40 text-lg leading-relaxed mb-12 max-w-md">
            NeoCloudz is DigiPowerX's GPU compute platform — delivering NVIDIA Blackwell B200 bare-metal infrastructure directly from our owned data centers.
          </p>
          <ul className="space-y-4 mb-12">
            {[
              'NVIDIA Blackwell B200 GPU clusters',
              'Bare-metal, no virtualization overhead',
              '400Gb/s InfiniBand fabric',
              'Provisioned in <60 seconds'
            ].map(item => (
              <li key={item} className="flex items-center gap-3 text-white/60 text-sm font-medium">
                <span className="text-brand-yellow font-bold text-lg">→</span> {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-emerald-500 text-black px-8 py-3.5 font-bold text-sm uppercase tracking-wider hover:bg-emerald-400 transition-all w-full sm:w-auto">
              Visit NeoCloudz
            </button>
            <button className="btn-outline border-white/10 text-white/50 hover:text-white w-full sm:w-auto">Talk to Sales</button>
          </div>
        </div>

        <div className="relative bg-black rounded-sm border border-white/5 overflow-hidden">
          <Terminal />
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-emerald-500/20 pointer-events-none" />
          <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-emerald-500/20 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default NeoCloudzSection;
