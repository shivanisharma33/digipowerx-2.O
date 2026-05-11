import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { motion } from 'framer-motion';
import LiquidCooling3D from './LiquidCooling3D';
import bgImage from '../assets/ChatGPT Image May 11, 2026, 03_45_38 PM.png';

// Leaflet setup
// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const PulseIcon = () => {
  return L.divIcon({
    className: '',
    html: `<span style="
      display:block;width:14px;height:14px;border-radius:50%;
      background:rgba(245,197,24,0.9);
      box-shadow:0 0 0 4px rgba(245,197,24,0.3),0 0 14px 6px rgba(245,197,24,0.25);
      animation:map-pulse 2s ease-in-out infinite;
    "></span>`,
    iconSize: [14, 14],
    iconAnchor: [7, 7]
  });
};

const LiquidCoolingDiagram = () => {
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

    const hotPkts = Array.from({ length: 9 }, (_, i) => ({ p: i / 9 }));
    const coldPkts = Array.from({ length: 9 }, (_, i) => ({ p: i / 9 }));

    const buildPoly = (pts: number[][]) => {
      let segs = [], total = 0;
      for (let i = 0; i < pts.length - 1; i++) {
        const dx = pts[i + 1][0] - pts[i][0], dy = pts[i + 1][1] - pts[i][1], d = Math.sqrt(dx * dx + dy * dy);
        segs.push({ x0: pts[i][0], y0: pts[i][1], x1: pts[i + 1][0], y1: pts[i + 1][1], d, start: total });
        total += d;
      }
      return { segs, total };
    };

    const lerpPoly = (pl: any, f: number) => {
      const dist = f * pl.total;
      for (const s of pl.segs) if (dist <= s.start + s.d) { const u = (dist - s.start) / s.d; return { x: s.x0 + u * (s.x1 - s.x0), y: s.y0 + u * (s.y1 - s.y0) }; }
      const last = pl.segs[pl.segs.length - 1]; return { x: last.x1, y: last.y1 };
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      const RX = W * .55, RY = H * .18, RW = W * .38, RH = H * .68;
      const CTX = W * .52, CTY = H * .04, CTW = W * .28, CTH = H * .34;

      for (let r = 0; r < 3; r++) {
        const rx = W * .54 + r * (W * .125 + W * .014);
        ctx.fillStyle = 'rgba(8,22,12,0.97)';
        ctx.fillRect(rx, H * .14, W * .125, RH);
        ctx.strokeStyle = 'rgba(0,200,80,0.35)'; ctx.lineWidth = 1; ctx.strokeRect(rx, H * .14, W * .125, RH);
        for (let b = 0; b < 12; b++) {
          const act = Math.sin(t * 2.4 + r * 2.1 + b * 0.85) > 0;
          ctx.fillStyle = act ? 'rgba(0,255,100,0.9)' : 'rgba(0,80,30,0.5)';
          ctx.beginPath(); ctx.arc(rx + W * .125 * 0.14, H * .14 + H * .68 * 0.07 + b * (H * .68 * 0.88 / 12) + H * .68 * 0.88 / 24, 1.3, 0, Math.PI * 2); ctx.fill();
        }
      }

      const hxCX = W * .415, hxY = H * .22, hxW = W * .08, hxH = H * .52;
      ctx.fillStyle = 'rgba(18,30,28,0.92)'; ctx.beginPath(); ctx.roundRect(hxCX - hxW / 2, hxY, hxW, hxH, 3); ctx.fill();
      ctx.strokeStyle = 'rgba(77,200,255,0.6)'; ctx.lineWidth = 1.5; ctx.stroke();

      const hPts = [[RX, RY + RH * .35], [RX + W * .02, RY + RH * .35], [RX + W * .02, H * .08], [CTX + CTW * .35, H * .08], [CTX + CTW * .35, CTY + CTH * .85]];
      const cPts = [[CTX - CTW * .35, CTY + CTH * .9], [CTX - CTW * .35, H * .6], [W * .03, H * .6], [W * .03, RY + RH * .65], [RX - RW, RY + RH * .45]];

      const hp = buildPoly(hPts);
      const cp = buildPoly(cPts);

      hotPkts.forEach(pk => {
        pk.p += 0.0028; if (pk.p > 1) pk.p = 0;
        const pos = lerpPoly(hp, pk.p);
        ctx.fillStyle = 'rgba(255,80,50,1)'; ctx.beginPath(); ctx.arc(pos.x, pos.y, 3, 0, Math.PI * 2); ctx.fill();
      });

      coldPkts.forEach(pk => {
        pk.p += 0.0025; if (pk.p > 1) pk.p = 0;
        const pos = lerpPoly(cp, pk.p);
        ctx.fillStyle = 'rgba(60,190,255,1)'; ctx.beginPath(); ctx.arc(pos.x, pos.y, 3, 0, Math.PI * 2); ctx.fill();
      });

      t += 0.016;
      requestAnimationFrame(draw);
    };

    draw();
    return () => window.removeEventListener('resize', setSize);
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
};

const GpuGridGraphic = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [typedLines, setTypedLines] = useState<string[]>([]);
  
  const allLines = [
    'neo provision b200 --count 8',
    'Allocating node cluster [██████████] 100%',
    'InfiniBand fabric: 400Gb/s · ready',
    'SSH: ssh root@10.0.0.1 -i ~/.ssh/nc_key',
    'GPU 0-7: NVIDIA B200 · 192GB HBM3e',
    'All systems nominal · PUE 1.12',
    'trainer.train()... [STEP 500] loss=1.08',
  ];

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

    // 8 columns, 2 rows for a wider bento card
    const cols = 8;
    const rows = 2;
    const nodes = Array.from({ length: cols * rows }, (_, i) => ({
      r: Math.floor(i / cols),
      col: i % cols,
      phase: Math.random() * Math.PI * 2,
      active: true // make all active but pulsing differently
    }));

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const padX = 20, padY = 20;
      const cellW = (W - padX * 2) / cols;
      const cellH = (H - padY * 2 - 20) / rows; // -20 for label space

      nodes.forEach(n => {
        const nx = padX + n.col * cellW + cellW * 0.15;
        const ny = padY + n.r * cellH + cellH * 0.1;
        const nw = cellW * 0.7, nh = cellH * 0.65;
        const pulse = (Math.sin(t * 3 + n.phase) + 1) / 2;

        // Outer chassis
        ctx.fillStyle = 'rgba(4, 18, 10, 0.9)';
        ctx.beginPath(); ctx.roundRect(nx, ny, nw, nh, 3); ctx.fill();
        
        // Neon green border
        ctx.strokeStyle = `rgba(0, 232, 120, ${0.3 + pulse * 0.5})`;
        ctx.lineWidth = 1.5; ctx.stroke();

        // Inner processing unit (die)
        ctx.fillStyle = `rgba(0, 232, 120, ${0.1 + pulse * 0.3})`;
        ctx.fillRect(nx + nw * 0.2, ny + nh * 0.2, nw * 0.6, nh * 0.6);

        // Active status light
        ctx.fillStyle = 'rgba(0, 255, 120, 0.9)';
        ctx.shadowBlur = 8; ctx.shadowColor = 'rgba(0, 255, 120, 0.8)';
        ctx.fillRect(nx + nw - 6, ny + 4, 2, 2);
        ctx.shadowBlur = 0;

        // Label below each GPU in the bottom row
        if (n.r === rows - 1) {
          ctx.fillStyle = 'rgba(0, 232, 120, 0.5)';
          ctx.font = 'bold 9px monospace';
          ctx.textAlign = 'center';
          ctx.fillText(`GPU${n.col}`, nx + nw / 2, ny + nh + 14);
        }
      });

      t += 0.02;
      requestAnimationFrame(draw);
    };

    draw();

    // Terminal typing effect logic
    let currentLineIdx = 0;
    const interval = setInterval(() => {
      setTypedLines(prev => {
        const newLines = [...prev, allLines[currentLineIdx]];
        if (newLines.length > 4) newLines.shift(); // Keep only last 4 lines
        return newLines;
      });
      currentLineIdx = (currentLineIdx + 1) % allLines.length;
    }, 1500);

    return () => {
      window.removeEventListener('resize', setSize);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex flex-col h-full bg-[#030504]">
      {/* Visual GPU Grid */}
      <div className="flex-1 relative p-2">
        <canvas ref={canvasRef} className="w-full h-full block" />
        {/* Subtle top glare */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
      </div>
      
      {/* Terminal Section */}
      <div className="h-[85px] bg-[#000000] p-4 font-mono text-[10px] leading-[1.4] overflow-hidden border-t border-[#00e878]/20 relative shadow-[inset_0_5px_20px_rgba(0,0,0,0.5)]">
        <div className="absolute left-0 top-0 w-[2px] h-full bg-gradient-to-b from-[#00e878] to-transparent opacity-50" />
        {typedLines.map((l, i) => (
          <div key={i} className="text-[#00e878] opacity-90 drop-shadow-[0_0_5px_rgba(0,232,120,0.4)] whitespace-nowrap overflow-hidden text-ellipsis">
            {i === typedLines.length - 1 ? (
              <span className="flex items-center gap-2">
                <span className="text-white/40">{'>'}</span> {l}
                <span className="w-[6px] h-[10px] bg-[#00e878] inline-block animate-pulse ml-1" />
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <span className="text-white/40">{'>'}</span> {l}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

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

      // Background grid
      ctx.strokeStyle = 'rgba(255,255,255,0.03)';
      ctx.lineWidth = 1;
      for (let x = 0; x < W; x += 40) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
      for (let y = 0; y < H; y += 40) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }

      // Sleek Container Base
      ctx.fillStyle = 'rgba(20,20,20,0.95)';
      ctx.beginPath(); ctx.roundRect(cx - mw / 2, cy - mh / 2, mw, mh, 4); ctx.fill();
      ctx.strokeStyle = 'rgba(100,100,100,0.4)'; ctx.lineWidth = 2; ctx.stroke();

      // Horizontal slats (Industrial feel)
      ctx.strokeStyle = 'rgba(255,255,255,0.05)';
      ctx.lineWidth = 1;
      for (let i = 0; i < 10; i++) {
        const y = cy - mh / 2 + (i + 1) * (mh / 11);
        ctx.beginPath(); ctx.moveTo(cx - mw / 2 + 5, y); ctx.lineTo(cx + mw / 2 - 5, y); ctx.stroke();
      }

      // Cooling Fans Area (Right Side)
      const fx = cx + mw / 2 - 60, fy = cy, fr = 35;
      ctx.fillStyle = 'rgba(10,10,10,1)';
      ctx.beginPath(); ctx.arc(fx, fy, fr, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = 'rgba(0, 232, 120, 0.3)'; ctx.stroke();

      // Rotating Fan Blades
      ctx.save();
      ctx.translate(fx, fy);
      ctx.rotate(t * 8);
      ctx.strokeStyle = 'rgba(0, 232, 120, 0.8)';
      ctx.lineWidth = 3;
      for (let i = 0; i < 4; i++) {
        ctx.rotate(Math.PI / 2);
        ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(fr - 5, 0); ctx.stroke();
      }
      ctx.restore();

      // Digital Status Display (Left Side)
      const dx = cx - mw / 2 + 20, dy = cy - mh / 4, dw = 120, dh = 60;
      ctx.fillStyle = 'rgba(0,0,0,0.8)';
      ctx.fillRect(dx, dy, dw, dh);
      ctx.strokeStyle = 'rgba(255,215,0,0.4)'; ctx.strokeRect(dx, dy, dw, dh);

      // Animated text simulation
      ctx.fillStyle = 'rgba(255,215,0,0.9)';
      ctx.font = 'bold 10px monospace';
      ctx.fillText('CORE_STATUS: OK', dx + 10, dy + 20);
      ctx.fillText(`POWER: ${(1.8 * ((Math.sin(t * 0.5) + 1.2) / 2.2)).toFixed(2)}MW`, dx + 10, dy + 35);
      ctx.fillText(`PUE: ${(1.12 + Math.random() * 0.02).toFixed(3)}`, dx + 10, dy + 50);

      // Scanning pulse line
      const scanX = cx - mw / 2 + ((Math.sin(t * 1.5) + 1) / 2) * mw;
      const grad = ctx.createLinearGradient(scanX - 20, 0, scanX + 20, 0);
      grad.addColorStop(0, 'transparent'); grad.addColorStop(0.5, 'rgba(0, 232, 120, 0.6)'); grad.addColorStop(1, 'transparent');
      ctx.fillStyle = grad;
      ctx.fillRect(scanX - 20, cy - mh / 2, 40, mh);

      t += 0.015;
      requestAnimationFrame(draw);
    };

    draw();
    return () => window.removeEventListener('resize', setSize);
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
};

const Services = () => {
  return (
    <section id="services" className="bg-[#050505] py-24 md:py-32 px-6 lg:px-20 relative overflow-hidden">
      
      {/* Background Decor - Uploaded Matrix Image */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-15 mix-blend-screen"
        style={{
          backgroundImage: `url('${bgImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      {/* Gradient overlay to ensure text readability and blend edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/40 to-[#050505] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-5 bg-transparent border border-white/20 rounded-full px-6 py-2 cursor-default hover:border-[#f5c518]/50 transition-colors duration-500">
            <span className="text-[10px] font-bold tracking-widest text-white/80">02 /</span>
            <div className="h-[1px] w-16 bg-[#f5c518]" />
            <span className="text-[10px] font-bold tracking-[0.2em] text-white uppercase">OUR CAPABILITIES</span>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl md:text-5xl lg:text-[54px] font-black uppercase mb-20 text-white text-center tracking-tight"
        >
          FOUR <span className="text-[#f5c518]">PILLARS</span> OF INFRASTRUCTURE
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-8">

          {/* Card 1 - We Own the Power (Wide) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7 group relative rounded-[20px] overflow-hidden p-[1px] hover:shadow-[0_0_50px_rgba(245,197,24,0.15)] hover:-translate-y-1 transition-all duration-500"
          >
            {/* Animated Spinning Border */}
            <div className="absolute inset-[-150%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,rgba(245,197,24,1)_0%,transparent_25%)] opacity-30 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="absolute inset-0 rounded-[20px] border border-[#f5c518]/20 z-10 pointer-events-none transition-colors duration-500 group-hover:border-transparent" />

            {/* Inner Content */}
            <div className="relative z-20 flex flex-col h-full bg-[#080808]/95 backdrop-blur-xl rounded-[19px] p-8 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-[#f5c518]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10 flex-1">
                <div className="text-[9px] font-black tracking-[0.25em] text-[#f5c518] uppercase mb-3 drop-shadow-[0_0_8px_rgba(245,197,24,0.3)]">VERTICAL INTEGRATION</div>
                <h3 className="text-2xl md:text-[28px] font-bold mb-4 uppercase text-white tracking-tight">WE OWN THE POWER</h3>
                <p className="text-gray-400 mb-8 max-w-xl leading-relaxed text-[13px] md:text-[14px]">
                  DigiPowerX controls the full energy stack — from owned power plants and utility-connected sites to 400 MW of pipeline development across the US.
                </p>
              </div>
              <div className="h-[250px] md:h-[320px] w-full bg-white relative border border-[#f5c518]/30 rounded-lg overflow-hidden mt-auto group-hover:border-[#f5c518]/60 transition-colors duration-500">
                <MapContainer center={[37.5, -95]} zoom={4} scrollWheelZoom={false} zoomControl={false} dragging={false} className="h-full w-full">
                  <TileLayer url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png" />
                  {[[34.60, -86.98], [43.02, -78.87], [35.57, -81.42]].map((pos, i) => (
                    <Marker key={i} position={pos as L.LatLngExpression} icon={PulseIcon()} />
                  ))}
                </MapContainer>
              </div>
            </div>
          </motion.div>

          {/* Card 2 - Liquid Cooling (Narrow) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 group relative rounded-[20px] overflow-hidden p-[1px] hover:shadow-[0_0_50px_rgba(245,197,24,0.15)] hover:-translate-y-1 transition-all duration-500"
          >
            <div className="absolute inset-[-200%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(245,197,24,1)_0%,transparent_30%)] opacity-30 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="absolute inset-0 rounded-[20px] border border-[#f5c518]/20 z-10 pointer-events-none transition-colors duration-500 group-hover:border-transparent" />

            <div className="relative z-20 flex flex-col h-full bg-[#080808]/95 backdrop-blur-xl rounded-[19px] p-8 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-[#f5c518]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10 flex-1">
                <div className="text-[9px] font-black tracking-[0.25em] text-[#f5c518] uppercase mb-3 drop-shadow-[0_0_8px_rgba(245,197,24,0.3)]">DATA CENTER ARCHITECTURE</div>
                <h3 className="text-2xl md:text-[28px] font-bold mb-4 uppercase text-white tracking-tight">DIRECT-TO-CHIP LIQUID COOLING</h3>
                <p className="text-gray-400 mb-8 max-w-xl leading-relaxed text-[13px] md:text-[14px]">
                  Purpose-built for NVIDIA Blackwell and next-gen AI accelerators. Cold plates deliver coolant directly to the chip — no air cooling required at &gt;80kW/rack.
                </p>
              </div>
              <div className="h-[250px] md:h-[320px] bg-[#0a0a0a] relative border border-[#f5c518]/30 rounded-lg overflow-hidden mt-auto group-hover:border-[#f5c518]/60 transition-colors duration-500">
                <LiquidCooling3D />
              </div>
            </div>
          </motion.div>

          {/* Card 3 - US Data Centers Inc. (Narrow) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5 group relative rounded-[20px] overflow-hidden p-[1px] hover:shadow-[0_0_50px_rgba(245,197,24,0.15)] hover:-translate-y-1 transition-all duration-500"
          >
            <div className="absolute inset-[-200%] animate-[spin_4.5s_linear_infinite] bg-[conic-gradient(from_0deg_at_50%_50%,rgba(245,197,24,1)_0%,transparent_30%)] opacity-30 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="absolute inset-0 rounded-[20px] border border-[#f5c518]/20 z-10 pointer-events-none transition-colors duration-500 group-hover:border-transparent" />

            <div className="relative z-20 flex flex-col h-full bg-[#080808]/95 backdrop-blur-xl rounded-[19px] p-8 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-[#f5c518]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10 flex-1">
                <div className="text-[9px] font-black tracking-[0.25em] text-[#f5c518] uppercase mb-3 drop-shadow-[0_0_8px_rgba(245,197,24,0.3)]">STRATEGIC PARTNER</div>
                <h3 className="text-2xl md:text-[28px] font-bold mb-4 uppercase text-white tracking-tight">US DATA CENTERS INC.</h3>
                <p className="text-gray-400 mb-8 max-w-xl leading-relaxed text-[13px] md:text-[14px]">
                  A majority shareholder in US Data Centers Inc. — a modular data center manufacturer purpose-built for rapid AI infrastructure deployment.
                </p>
              </div>
              <div className="h-[250px] md:h-[320px] bg-[#0a0a0a] relative border border-[#f5c518]/30 rounded-lg overflow-hidden mt-auto group-hover:border-[#f5c518]/60 transition-colors duration-500">
                <ModularDCGraphic />
              </div>
            </div>
          </motion.div>

          {/* Card 4 - Meet NeoCloudz (Wide) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-7 group relative rounded-[20px] overflow-hidden p-[1px] hover:shadow-[0_0_50px_rgba(245,197,24,0.15)] hover:-translate-y-1 transition-all duration-500"
          >
            <div className="absolute inset-[-150%] animate-[spin_5.5s_linear_infinite] bg-[conic-gradient(from_270deg_at_50%_50%,rgba(245,197,24,1)_0%,transparent_25%)] opacity-30 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="absolute inset-0 rounded-[20px] border border-[#f5c518]/20 z-10 pointer-events-none transition-colors duration-500 group-hover:border-transparent" />

            <div className="relative z-20 flex flex-col h-full bg-[#080808]/95 backdrop-blur-xl rounded-[19px] p-8 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-[#f5c518]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10 flex-1">
                <div className="text-[9px] font-black tracking-[0.25em] text-[#f5c518] uppercase mb-3 drop-shadow-[0_0_8px_rgba(245,197,24,0.3)]">WHOLLY OWNED SUBSIDIARY</div>
                <h3 className="text-2xl md:text-[28px] font-bold mb-4 uppercase text-white tracking-tight">MEET NEOCLOUDZ</h3>
                <p className="text-gray-400 mb-8 max-w-xl leading-relaxed text-[13px] md:text-[14px]">
                  NeoCloudz is DigiPowerX's GPU compute platform — bare-metal NVIDIA Blackwell B200 clusters delivered directly from our owned data centers.
                </p>
              </div>
              <div className="h-[250px] md:h-[320px] bg-[#0a0a0a] relative border border-[#f5c518]/30 rounded-lg overflow-hidden mt-auto group-hover:border-[#f5c518]/60 transition-colors duration-500">
                <GpuGridGraphic />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Services;
