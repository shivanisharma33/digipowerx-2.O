import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import LiquidCooling3D from './LiquidCooling3D';

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
  const [lines, setLines] = useState<string[]>([]);
  const allLines = [
    'provision b200 --count 8',
    'Allocating node cluster [████████] 100%',
    'InfiniBand fabric: 400Gb/s · ready',
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

    const nodes = Array.from({ length: 18 }, (_, i) => ({
      r: Math.floor(i / 6),
      col: i % 6,
      phase: Math.random() * Math.PI * 2,
      active: Math.random() > 0.2
    }));

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const cols = 6, rows = 3;
      const padX = 15, padY = 15;
      const cellW = (W - padX * 2) / cols;
      const cellH = (H * 0.7 - padY * 2) / rows;

      nodes.forEach(n => {
        const nx = padX + n.col * cellW + cellW * 0.1;
        const ny = padY + n.r * cellH + cellH * 0.1;
        const nw = cellW * 0.8, nh = cellH * 0.8;
        const pulse = (Math.sin(t * 2 + n.phase) + 1) / 2;

        ctx.fillStyle = n.active ? 'rgba(8, 24, 16, 0.95)' : 'rgba(30, 30, 30, 0.9)';
        ctx.beginPath(); ctx.roundRect(nx, ny, nw, nh, 2); ctx.fill();
        ctx.strokeStyle = n.active ? `rgba(0, 232, 120, ${0.4 + pulse * 0.4})` : 'rgba(60, 60, 60, 0.2)';
        ctx.lineWidth = 1; ctx.stroke();

        if (n.active) {
          ctx.fillStyle = 'rgba(0, 232, 120, 0.8)';
          ctx.fillRect(nx + 3, ny + nh - 5, (nw - 6) * (0.5 + pulse * 0.5), 2);
        }
      });

      t += 0.02;
      requestAnimationFrame(draw);
    };

    draw();

    let li = 0;
    const interval = setInterval(() => {
      setLines(prev => [...prev, allLines[li % allLines.length]].slice(-3));
      li++;
    }, 2000);

    return () => {
      window.removeEventListener('resize', setSize);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 bg-black p-4">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>
      <div className="bg-[#333] p-4 font-mono text-[9px] h-[70px] overflow-hidden border-t border-white/5">
        {lines.map((l, i) => (
          <div key={i} className="text-emerald-400 opacity-80 whitespace-nowrap overflow-hidden text-ellipsis">{l}</div>
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
    <section className="bg-brand-cream py-24 md:py-32 px-6 lg:px-20 border-t border-gray-200">
      <div className="max-w-[1800px] mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-6 mb-6">
          <span className="text-[10px] font-black tracking-[0.3em] text-gray-300 uppercase">02 /</span>
          <div className="h-[1px] w-16 bg-brand-yellow" />
          <span className="text-[10px] font-black tracking-[0.3em] text-gray-400 uppercase">Our Capabilities</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-16">
          Four <span className="text-brand-yellow">Pillars</span> of Infrastructure
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1px] bg-gray-200 border border-gray-200">

          {/* Card 1 - We Own the Power */}
          <div className="p-6 md:p-12 bg-brand-cream hover:bg-gray-50 transition-all duration-500 group relative">
            <div className="text-[9px] font-black tracking-[0.3em] text-gray-400 uppercase mb-6 md:mb-8">
              Vertical Integration
            </div>
            <h3 className="text-2xl md:text-3xl font-black mb-4 md:mb-6 uppercase tracking-tight text-brand-dark">We Own the Power</h3>
            <p className="text-gray-500 mb-8 md:mb-10 max-w-md leading-relaxed text-sm">
              DigiPowerX controls the full energy stack — from owned power plants and utility-connected sites to 400 MW of pipeline development across the US.
            </p>
            <ul className="space-y-3 md:space-y-4 mb-8 md:mb-12">
              {['Owned power generation assets', 'Utility-powered & substation-connected sites', '400 MW development pipeline', 'Future site acquisitions underway'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                  <span className="text-brand-yellow font-bold text-lg">→</span> {item}
                </li>
              ))}
            </ul>
            <div className="h-[300px] md:h-[400px] bg-black relative rounded-sm overflow-hidden border border-white/5">
              <MapContainer
                center={[37.5, -95]}
                zoom={4}
                scrollWheelZoom={false}
                zoomControl={false}
                dragging={false}
                className="h-full w-full grayscale contrast-125"
              >
                <TileLayer
                  url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                />
                {[
                  [34.60, -86.98], [43.02, -78.87], [35.57, -81.42],
                ].map((pos, i) => (
                  <Marker key={i} position={pos as L.LatLngExpression} icon={PulseIcon()} />
                ))}
              </MapContainer>
              <style>{`
                @keyframes map-pulse {
                  0%, 100% { box-shadow: 0 0 0 3px rgba(245, 197, 24, 0.35), 0 0 12px 4px rgba(245, 197, 24, 0.2); }
                  50% { box-shadow: 0 0 0 8px rgba(245, 197, 24, 0.15), 0 0 22px 10px rgba(245, 197, 24, 0.35); }
                }
              `}</style>
            </div>
          </div>

          {/* Card 2 - Liquid Cooling */}
          <div className="p-6 md:p-12 bg-brand-cream hover:bg-gray-50 transition-all duration-500 group relative">
            <div className="text-[9px] font-black tracking-[0.3em] text-gray-400 uppercase mb-6 md:mb-8">
              Data Center Architecture
            </div>
            <h3 className="text-2xl md:text-3xl font-black mb-4 md:mb-6 uppercase tracking-tight text-brand-dark">Direct-to-Chip Liquid Cooling</h3>
            <p className="text-gray-500 mb-8 md:mb-10 max-w-md leading-relaxed text-sm">
              Purpose-built for NVIDIA Blackwell and next-gen AI accelerators. Cold plates deliver coolant directly to the chip — no air cooling required at &gt;80kW/rack.
            </p>
            <ul className="space-y-3 md:space-y-4 mb-8 md:mb-12">
              {['Direct-to-chip cold plates per GPU', 'Rear-door heat exchanger capture', 'Chiller + cooling tower rejection loop', 'PUE <1.15 · Zero thermal throttling'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                  <span className="text-brand-yellow font-bold text-lg">→</span> {item}
                </li>
              ))}
            </ul>
            <div className="h-[300px] md:h-[400px] bg-black/90 relative rounded-sm overflow-hidden border border-white/5">
              <LiquidCooling3D />
            </div>
          </div>

          {/* Card 3 - NeoCloudz */}
          <div className="p-6 md:p-12 bg-brand-cream hover:bg-gray-50 transition-all duration-500 group relative">
            <div className="text-[9px] font-black tracking-[0.3em] text-gray-400 uppercase mb-6 md:mb-8">
              Wholly Owned Subsidiary
            </div>
            <h3 className="text-2xl md:text-3xl font-black mb-4 md:mb-6 uppercase tracking-tight text-brand-dark">Meet NeoCloudz</h3>
            <p className="text-gray-500 mb-8 md:mb-10 max-w-md leading-relaxed text-sm">
              NeoCloudz is DigiPowerX's GPU compute platform — bare-metal NVIDIA Blackwell B200 clusters delivered directly from our owned data centers.
            </p>
            <ul className="space-y-3 md:space-y-4 mb-8 md:mb-12">
              {['NVIDIA Blackwell B200 GPU clusters', 'Bare-metal · no virtualization overhead', '400Gb/s InfiniBand fabric', 'Provisioned in <60 seconds'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                  <span className="text-brand-yellow font-bold text-lg">→</span> {item}
                </li>
              ))}
            </ul>
            <div className="h-[300px] md:h-[400px] bg-black relative rounded-sm overflow-hidden border border-white/5">
              <GpuGridGraphic />
            </div>
          </div>

          {/* Card 4 - US Data Centers Inc. */}
          <div className="p-6 md:p-12 bg-brand-cream hover:bg-gray-50 transition-all duration-500 group relative">
            <div className="text-[9px] font-black tracking-[0.3em] text-gray-400 uppercase mb-6 md:mb-8">
              Strategic Partner
            </div>
            <h3 className="text-2xl md:text-3xl font-black mb-4 md:mb-6 uppercase tracking-tight text-brand-dark">US Data Centers Inc.</h3>
            <p className="text-gray-500 mb-8 md:mb-10 max-w-md leading-relaxed text-sm">
              A majority shareholder in US Data Centers Inc. — a modular data center manufacturer purpose-built for rapid AI infrastructure deployment.
            </p>
            <ul className="space-y-3 md:space-y-4 mb-8 md:mb-12">
              {['600kW – 1.8MW self-contained modules', 'Tier III design · TIA-942 compliant', 'Rapid deployment — operational in weeks', 'Factory-built & commissioned off-site'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                  <span className="text-brand-yellow font-bold text-lg">→</span> {item}
                </li>
              ))}
            </ul>
            <div className="h-[300px] md:h-[400px] bg-black relative rounded-sm overflow-hidden border border-white/5">
              <ModularDCGraphic />
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Services;
