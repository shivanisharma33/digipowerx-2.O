import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const ColocationVisual = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = 0, H = 0, t = 0;
    let animationFrameId: number;

    const setSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('resize', setSize);
    setSize();

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // Draw background (dark gray/black)
      ctx.fillStyle = '#0a0b0f';
      ctx.fillRect(0, 0, W, H);

      // Define boxes
      const cageW = W * 0.18;
      const cageH = H * 0.6;
      const cageY = H * 0.2;

      const cageAx = W * 0.08;
      const cageBx = W * 0.32;
      const patchX = W * 0.6;
      const patchW = W * 0.12;
      const carrierX = W * 0.8;
      const carrierW = W * 0.12;

      // Draw CAGE A
      ctx.strokeStyle = 'rgba(245, 197, 24, 0.4)';
      ctx.lineWidth = 1;
      ctx.strokeRect(cageAx, cageY, cageW, cageH);
      ctx.fillStyle = '#f5c518';
      ctx.font = 'bold 8px monospace';
      if (W > 600) ctx.font = 'bold 10px monospace';
      ctx.textAlign = 'center';
      ctx.fillText('CAGE A', cageAx + cageW / 2, cageY + 16);

      // Draw inner lines for CAGE A
      for (let i = 0; i < 8; i++) {
        ctx.fillStyle = `rgba(245, 197, 24, ${0.1 + Math.random() * 0.3})`;
        ctx.fillRect(cageAx + 10, cageY + 30 + i * (cageH - 40) / 8, cageW - 20, 2);
      }

      // Draw CAGE B
      ctx.strokeStyle = 'rgba(245, 197, 24, 0.4)';
      ctx.strokeRect(cageBx, cageY, cageW, cageH);
      ctx.fillStyle = '#f5c518';
      ctx.fillText('CAGE B', cageBx + cageW / 2, cageY + 16);
      // Inner lines CAGE B
      for (let i = 0; i < 8; i++) {
        ctx.fillStyle = `rgba(245, 197, 24, ${0.1 + Math.random() * 0.3})`;
        ctx.fillRect(cageBx + 10, cageY + 30 + i * (cageH - 40) / 8, cageW - 20, 2);
      }

      // Draw PATCH PANEL (Green)
      ctx.strokeStyle = 'rgba(0, 232, 120, 0.4)';
      ctx.strokeRect(patchX, cageY + cageH * 0.1, patchW, cageH * 0.8);
      ctx.fillStyle = '#00e878';
      ctx.fillText('PATCH', patchX + patchW / 2, cageY + cageH * 0.1 + 16);
      ctx.fillText('PANEL', patchX + patchW / 2, cageY + cageH * 0.1 + 28);
      // Inner dots for PATCH PANEL
      for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 3; j++) {
          ctx.fillStyle = `rgba(0, 232, 120, ${0.2 + Math.random() * 0.6})`;
          ctx.fillRect(patchX + patchW * 0.2 + j * (patchW * 0.3), cageY + cageH * 0.1 + 45 + i * (cageH * 0.8 - 60) / 6, 3, 3);
        }
      }

      // Draw CARRIER NEUTRAL (Blue)
      ctx.strokeStyle = 'rgba(0, 168, 255, 0.4)';
      ctx.strokeRect(carrierX, cageY + cageH * 0.25, carrierW, cageH * 0.5);
      ctx.fillStyle = '#00a8ff';
      ctx.fillText('CARRIER', carrierX + carrierW / 2, cageY + cageH * 0.25 + 16);
      ctx.fillText('NEUTRAL', carrierX + carrierW / 2, cageY + cageH * 0.25 + 28);
      ctx.fillText('NNI', carrierX + carrierW / 2, cageY + cageH * 0.25 + 40);

      // Draw flow particles
      const drawParticles = (startX: number, endX: number, y: number, color: string) => {
        const offset = (t * 40) % (endX - startX);
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(startX + offset, y, 2, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(startX + ((offset + (endX - startX) / 2) % (endX - startX)), y, 2, 0, Math.PI * 2);
        ctx.fill();
      };

      // connecting lines
      ctx.strokeStyle = 'rgba(255,255,255,0.05)';
      ctx.setLineDash([2, 4]);

      const y1 = cageY + cageH * 0.35;
      const y2 = cageY + cageH * 0.65;

      // CAGE A to CAGE B
      ctx.beginPath(); ctx.moveTo(cageAx + cageW, y1); ctx.lineTo(cageBx, y1); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(cageAx + cageW, y2); ctx.lineTo(cageBx, y2); ctx.stroke();

      // CAGE B to PATCH PANEL
      ctx.beginPath(); ctx.moveTo(cageBx + cageW, y1); ctx.lineTo(patchX, y1); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(cageBx + cageW, y2); ctx.lineTo(patchX, y2); ctx.stroke();

      // PATCH PANEL to CARRIER
      const py1 = cageY + cageH * 0.4;
      const py2 = cageY + cageH * 0.6;
      ctx.beginPath(); ctx.moveTo(patchX + patchW, py1); ctx.lineTo(carrierX, py1); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(patchX + patchW, py2); ctx.lineTo(carrierX, py2); ctx.stroke();
      ctx.setLineDash([]);

      drawParticles(cageBx + cageW, patchX, y1, '#f5c518');
      drawParticles(cageBx + cageW, patchX, y2, '#f5c518');
      drawParticles(cageAx + cageW, cageBx, y1, '#f5c518');
      drawParticles(cageAx + cageW, cageBx, y2, '#f5c518');
      drawParticles(patchX + patchW, carrierX, py1, '#00e878');
      drawParticles(patchX + patchW, carrierX, py2, '#00e878');

      t += 0.02;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', setSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="w-full h-full block rounded border border-white/5" />
  );
};

const Colocation = () => {
  return (
    <section className="bg-white pt-10 pb-24 md:pb-32 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20 relative z-10 flex flex-col items-center">

        {/* Top Label */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-4 bg-[#e5e5e5] rounded-full px-5 py-1.5 shadow-sm border border-black/5">
            <span className="text-[9px] font-semibold tracking-widest text-black/60">02 /</span>
            <div className="h-[1px] w-12 bg-[#f5c518]" />
            <span className="text-[9px] font-semibold tracking-[0.2em] text-black/80 uppercase">COLOCATION</span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[clamp(2.5rem,5.5vw,5rem)] font-semibold uppercase mb-6 text-black text-center leading-[0.9] tracking-tighter"
        >
          YOUR HARDWARE <br />
          OUR <span className="text-[#f5c518]">INFRASTRUCTURE</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-gray-500 text-[14px] md:text-[16px] max-w-3xl text-center mb-20 leading-relaxed font-medium"
        >
          Bring your own servers into DigiPowerX-owned Tier III facilities. Get direct access to our owned power, high-density cooling, and InfiniBand interconnects — without the hyperscaler premium.
        </motion.p>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Side: Bullet Points and Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col space-y-10 lg:pr-4"
          >
            {/* Features List */}
            <ul className="space-y-4">
              {[
                'GPU-density cabinets up to 80kW/rack',
                'Direct substation feed — no shared utility risk',
                '400G InfiniBand & cross-connect fabric',
                'Remote hands, 24/7 NOC, smart hands SLA',
                'Custom cage & suite configurations',
                'Meet-me room with carrier-neutral access'
              ].map(item => (
                <li key={item} className="flex items-start gap-4 text-gray-500 text-[14px] md:text-[15px] font-medium tracking-wide">
                  <span className="text-[#f5c518] text-[16px] font-bold mt-[-2px]">→</span> {item}
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button className="bg-[#f5c518] text-black px-6 py-3.5 rounded font-semibold text-[12px] uppercase tracking-widest hover:bg-[#ffda47] transition-all w-full sm:w-auto text-center shadow-lg shadow-[#f5c518]/20">
                REQUEST COLOCATION QUOTE
              </button>
              <button className="bg-[#cccccc] text-black px-6 py-3.5 rounded font-bold text-[12px] hover:bg-gray-400 transition-all w-full sm:w-auto text-center">
                Download Spec Sheet
              </button>
            </div>
          </motion.div>

          {/* Right Side: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="relative w-full h-[280px] md:h-[320px] bg-[#050505] rounded-xl p-2 shadow-2xl"
          >
            <ColocationVisual />
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Colocation;
