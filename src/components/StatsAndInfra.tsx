import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const StatCounter = ({ target, label, sub, isFloat = false }: { target: number, label: string, sub: string, isFloat?: boolean }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000;
      const startTime = performance.now();

      const update = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = progress * target;
        setCount(current);
        if (progress < 1) requestAnimationFrame(update);
      };
      requestAnimationFrame(update);
    }
  }, [inView, target]);

  return (
    <div ref={ref} className="p-6 md:p-10 lg:p-12 border-b md:border-b-0 md:border-r border-white/10 last:border-b-0 md:last:border-r-0">
      <div className="text-4xl md:text-5xl lg:text-7xl font-black text-brand-yellow font-technical tracking-tighter mb-2 md:mb-4">
        {isFloat ? count.toFixed(2) : Math.floor(count).toLocaleString()}
        {label === "Megawatts Capacity" && <span className="text-base md:text-xl ml-2 text-white/50">MW</span>}
      </div>
      <div className="text-white font-bold text-xs md:text-sm uppercase tracking-widest mb-1 md:mb-2">{label}</div>
      <div className="text-white/30 text-[9px] md:text-[10px] leading-relaxed uppercase tracking-wider">{sub}</div>
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
      { lx: 0.90, label: 'NEOCLOUDZ', col: '0, 232, 120' },
    ];

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = '#F2F1EC';
      ctx.fillRect(0, 0, W, H);

      const lineY = H * 0.55;

      // Main path
      ctx.strokeStyle = 'rgba(0,0,0,0.06)';
      ctx.setLineDash([5, 5]);
      ctx.beginPath(); ctx.moveTo(W * 0.1, lineY); ctx.lineTo(W * 0.9, lineY); ctx.stroke();
      ctx.setLineDash([]);

      nodes.forEach((n, i) => {
        const nx = W * n.lx, ny = lineY;

        // Glow
        const pulse = (Math.sin(t * 1.5 + i) + 1) / 2;
        ctx.shadowBlur = 10; ctx.shadowColor = `rgba(${n.col}, ${0.1 + pulse * 0.2})`;

        // Node
        ctx.fillStyle = `rgba(${n.col}, 0.08)`;
        ctx.strokeStyle = `rgba(${n.col}, ${0.2 + pulse * 0.3})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.roundRect(nx - (W < 640 ? W * .09 : W * .07), ny - 35, (W < 640 ? W * .18 : W * .14), 70, 4); ctx.fill(); ctx.stroke();
        ctx.shadowBlur = 0;

        // Label
        ctx.fillStyle = `rgba(${n.col}, 0.9)`;
        ctx.font = `900 ${W < 640 ? '8px' : '10px'} Inter`; ctx.textAlign = 'center';
        n.label.split('\n').forEach((l, j) => ctx.fillText(l, nx, ny + (j * (W < 640 ? 10 : 12)) - 5));

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

      t += 0.016;
      requestAnimationFrame(draw);
    };

    draw();
    return () => window.removeEventListener('resize', setSize);
  }, []);

  return (
    <div className="bg-brand-cream py-16 md:py-24 border-t border-gray-200">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-20 mb-8 md:mb-12">
        <div className="text-[10px] font-black tracking-[0.3em] text-gray-400 uppercase mb-4 flex items-center gap-4">
          <span className="text-gray-300">02 /</span> THE STACK
        </div>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Power In. <span className="text-brand-yellow">Intelligence</span> Out.</h2>
      </div>
      <div className="h-[200px] md:h-[250px] w-full border-y border-gray-200">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>
    </div>
  );
};

const StatsAndInfra = () => {
  return (
    <>
      <section className="bg-brand-dark overflow-hidden">
        <div className="max-w-[1800px] mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4">

          <StatCounter target={450} label="Megawatts Capacity" sub="Total contracted & owned power" />
          <StatCounter target={6} label="Data Center Campuses" sub="Tier III TIA-942 certified" />
          <StatCounter target={1.28} label="Average PUE" sub="Engineered for GPU density" isFloat={true} />
          <StatCounter target={16000} label="GPUs Online" sub="NVIDIA Blackwell B200 nodes" />
        </div>
      </section>
      <InfraFlow />
    </>
  );
};

export default StatsAndInfra;
