import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const StatCounter = ({ target, label, sub, isFloat = false }: { target: number, label: string, sub: string, isFloat?: boolean }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2500;
      const startTime = performance.now();

      const update = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = easeOutQuart * target;
        setCount(current);
        if (progress < 1) requestAnimationFrame(update);
      };
      requestAnimationFrame(update);
    }
  }, [inView, target]);

  return (
    <div ref={ref} className="p-4 md:p-6 lg:p-8 border-b md:border-b-0 md:border-r border-white/10 last:border-b-0 md:last:border-r-0 relative group overflow-hidden bg-gradient-to-br from-transparent via-[#f5c518]/2 to-[#f5c518]/8 transition-all duration-700 hover:via-[#f5c518]/5 hover:to-[#f5c518]/15">
      {/* Ambient hover glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#f5c518]/10 via-[#f5c518]/2 to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      {/* Hover animated bottom border */}
      <div className="absolute bottom-0 left-0 h-[3px] w-full bg-[#f5c518] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700 ease-out" />

      <div className="text-[clamp(2.5rem,4vw,4.5rem)] font-semibold text-white font-mono tracking-tighter mb-3 drop-shadow-[0_0_12px_rgba(255,255,255,0.1)] relative z-10">
        {isFloat ? count.toFixed(2) : Math.floor(count).toLocaleString()}
        {label === "Megawatts Capacity" && <span className="text-xl md:text-2xl ml-2 text-[#f5c518]">MW</span>}
      </div>
      <div className="text-[#f5c518] font-bold text-[11px] md:text-[13px] uppercase tracking-[0.15em] mb-2 relative z-10">{label}</div>
      <div className="text-white/40 text-[10px] md:text-[11px] font-medium leading-relaxed uppercase tracking-wider relative z-10">{sub}</div>
    </div>
  );
};

const InfraFlow = () => {
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

    const nodes = [
      { lx: 0.12, label: 'POWER\nGENERATION', col: '245, 197, 24' },
      { lx: 0.32, label: 'HV\nSUBSTATION', col: '245, 197, 24' },
      { lx: 0.52, label: 'DATA\nCENTER', col: '245, 197, 24' },
      { lx: 0.72, label: 'GPU\nCLUSTER', col: '245, 197, 24' },
      { lx: 0.90, label: 'NEOCLOUDZ', col: '0, 200, 100' },
    ];

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      // Premium dark theme canvas background
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, W, H);

      const lineY = H * 0.55;

      // Main path
      ctx.strokeStyle = 'rgba(255,255,255,0.06)';
      ctx.setLineDash([4, 6]);
      ctx.beginPath(); ctx.moveTo(W * 0.1, lineY); ctx.lineTo(W * 0.9, lineY); ctx.stroke();
      ctx.setLineDash([]);

      nodes.forEach((n, i) => {
        const nx = W * n.lx, ny = lineY;

        // Glow
        const pulse = (Math.sin(t * 1.5 + i) + 1) / 2;
        ctx.shadowBlur = 15; ctx.shadowColor = `rgba(${n.col}, ${0.1 + pulse * 0.25})`;

        // Node
        ctx.fillStyle = `rgba(${n.col}, 0.08)`;
        const strokeCol = n.col === '245, 197, 24' ? '230, 140, 10' : n.col;
        ctx.strokeStyle = `rgba(${strokeCol}, ${0.8 + pulse * 0.2})`;
        ctx.lineWidth = 2.5;
        ctx.beginPath(); ctx.roundRect(nx - (W < 640 ? W * .09 : W * .07), ny - 35, (W < 640 ? W * .18 : W * .14), 70, 6); ctx.fill(); ctx.stroke();
        ctx.shadowBlur = 0;

        // Label
        ctx.fillStyle = `rgba(255, 255, 255, 0.9)`;
        ctx.font = `900 ${W < 640 ? '8px' : '10px'} sans-serif`;
        ctx.textAlign = 'center';
        n.label.split('\n').forEach((l, j) => ctx.fillText(l, nx, ny + (j * (W < 640 ? 11 : 13)) - 6));

        // Packets
        if (i < nodes.length - 1) {
          const nextX = W * nodes[i + 1].lx;
          for (let p = 0; p < 3; p++) {
            const off = (t * 0.22 + i * 0.4 + p * 0.33) % 1;
            const px = nx + (W < 640 ? W * .09 : W * .07) + off * (nextX - nx - (W < 640 ? W * .18 : W * .14));
            ctx.fillStyle = `rgba(${n.col}, ${1 - off})`;
            ctx.beginPath(); ctx.arc(px, ny, 2.5, 0, Math.PI * 2); ctx.fill();
          }
        }
      });

      t += 0.012;
      requestAnimationFrame(draw);
    };

    draw();
    return () => window.removeEventListener('resize', setSize);
  }, []);

  return (
    <div className="bg-[#000000] py-12 md:py-20 relative">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#fff_1px,transparent_0)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 mb-8 relative z-10 flex flex-col items-center">

        {/* Main Title */}
        <h2 className="text-[clamp(2.5rem,5.5vw,5rem)] font-semibold leading-[0.95] tracking-tighter uppercase text-white text-center max-w-4xl mx-auto">
          POWER IN. <br />
          <span className="text-[#f5c518] relative inline-block">
            INTELLIGENCE
          </span> OUT.
        </h2>

      </div>

      {/* Canvas Wrapper */}
      <div className="h-[250px] md:h-[300px] w-full border-y border-white/5 bg-[#000000] relative z-10 shadow-[0_4px_40px_rgba(0,0,0,0.5)]">
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>
    </div>
  );
};

const StatsAndInfra = () => {
  return (
    <div className="bg-[#000000] relative">
      {/* Floating Premium Stats Bar */}
      <section id="infrastructure" className="relative z-20 pt-4 pb-8 px-0 -mt-16">
        <div className="w-full bg-[#0a0b0f] rounded-none shadow-[0_30px_80px_rgba(0,0,0,0.2)] overflow-hidden grid grid-cols-2 lg:grid-cols-4 border-y border-white/10 relative">

          {/* Subtle Ambient Glow inside the dark container */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#f5c518] rounded-full blur-[150px] opacity-[0.07] pointer-events-none" />

          <StatCounter target={450} label="Megawatts Capacity" sub="Total contracted & owned power" />
          <StatCounter target={6} label="Data Center Campuses" sub="Tier III TIA-942 certified" />
          <StatCounter target={1.28} label="Average PUE" sub="Engineered for GPU density" isFloat={true} />
          <StatCounter target={16000} label="GPUs Online" sub="NVIDIA Blackwell B200 nodes" />
        </div>
      </section>

      <InfraFlow />
    </div>
  );
};

export default StatsAndInfra;
