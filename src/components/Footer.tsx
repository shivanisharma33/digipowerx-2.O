import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import logoImg from '../assets/Digi new color logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#030303] border-t border-white/5 pt-16 pb-6 px-6 lg:px-20 relative overflow-hidden">
      {/* Subtle top glowing border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#f5c518]/30 to-transparent" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              {/* Added brightness-0 invert to make logo white for dark theme */}
              <img src={logoImg} alt="DigiPowerX Logo" className="h-14 w-auto brightness-0 invert opacity-90" />
            </div>
            <p className="text-gray-400 text-[14px] max-w-sm leading-relaxed mb-8">
              Vertically integrated power infrastructure, data centers, and AI compute. Owned at every layer. Built for scale.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-md text-gray-400 hover:border-[#f5c518] hover:text-[#f5c518] hover:bg-[#f5c518]/5 hover:shadow-[0_0_15px_rgba(245,197,24,0.15)] transition-all duration-300">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-md text-gray-400 hover:border-[#f5c518] hover:text-[#f5c518] hover:bg-[#f5c518]/5 hover:shadow-[0_0_15px_rgba(245,197,24,0.15)] transition-all duration-300">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-md text-gray-400 hover:border-[#f5c518] hover:text-[#f5c518] hover:bg-[#f5c518]/5 hover:shadow-[0_0_15px_rgba(245,197,24,0.15)] transition-all duration-300">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-black tracking-[0.2em] uppercase text-white/30 mb-6">Services</h4>
            <ul className="space-y-4 text-[13px] font-medium text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Power Generation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Substation Build</a></li>
              <li><a href="#" className="hover:text-white transition-colors">DC Construction</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Colocation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black tracking-[0.2em] uppercase text-white/30 mb-6">Subsidiaries</h4>
            <ul className="space-y-4 text-[13px] font-medium text-gray-400">
              <li><a href="#" className="text-[#00e878] hover:text-[#00e878] drop-shadow-[0_0_8px_rgba(0,232,120,0.3)] transition-all">NeoCloudz ↗</a></li>
              <li><a href="#" className="hover:text-white transition-colors">DigiGrid Platform</a></li>
              <li><a href="/data-centers" className="hover:text-white transition-colors">US Data Centers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black tracking-[0.2em] uppercase text-white/30 mb-6">Contact</h4>
            <ul className="space-y-4 text-[13px] font-medium text-gray-400">
              <li><a href="#" className="hover:text-[#f5c518] transition-colors">Talk to Sales</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Investor Relations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Media Inquiries</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
            © 2025 DigiPowerX, Inc. · 100% U.S. Owned & Operated
          </div>
          <div className="flex items-center gap-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            <span className="w-2 h-2 bg-[#00e878] rounded-full animate-pulse shadow-[0_0_8px_rgba(0,232,120,0.8)]" />
            All Systems Operational
          </div>
        </div>
      </div>
    </footer>
  );
};

const CTASection = () => {
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

    const waves = [
      { freq: 0.5, amp: 0.15, speed: 0.4, col: '40, 50, 10', op: 0.4 },
      { freq: 0.8, amp: 0.1, speed: 0.6, col: '30, 40, 5', op: 0.3 },
    ];

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // Topographical dark green/black background
      const grad = ctx.createLinearGradient(0, 0, 0, H);
      grad.addColorStop(0, '#050505');
      grad.addColorStop(1, '#0c1005');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);

      waves.forEach(w => {
        ctx.beginPath();
        for (let x = 0; x <= W; x++) {
          const y = H * 0.7 + Math.sin((x / W) * Math.PI * 1.5 + t * w.speed) * H * w.amp;
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.lineTo(W, H);
        ctx.lineTo(0, H);
        ctx.closePath();
        ctx.fillStyle = `rgba(${w.col}, ${w.op})`;
        ctx.fill();

        // Stroke for topographical feel
        ctx.strokeStyle = `rgba(245, 197, 24, 0.05)`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      t += 0.005;
      requestAnimationFrame(draw);
    };

    draw();
    return () => window.removeEventListener('resize', setSize);
  }, []);

  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32 bg-[#050505]">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-16 lg:gap-0">

          {/* Left Side: Large Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[58%] lg:pr-16 flex items-center"
          >
            <h2 className="text-[clamp(2.5rem,5.5vw,5rem)] font-black text-white uppercase tracking-tighter leading-[0.9] mb-0">
              READY TO OWN THE <br />
              <span className="text-[#f5c518]">INFRASTRUCTURE</span> <br />
              LAYER?
            </h2>
          </motion.div>

          {/* Right Side: Description & Buttons */}
          <div className="w-full lg:w-[42%] relative flex flex-col items-center lg:items-start justify-center gap-10 lg:pl-16 py-8">
            {/* Vertical Divider (Desktop Only) - Perfectly centered in the expanded gutter */}
            <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-64 bg-white/10" />

            <div className="flex flex-col gap-10">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-gray-400 text-[14px] md:text-[15px] leading-relaxed max-w-md font-medium"
              >
                Whether you need co-location, a turnkey data center build, or bare-metal GPU compute — DigiPowerX has the infrastructure and the team to deliver.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button className="bg-[#f5c518] text-black px-8 py-4 rounded-lg font-black text-[12px] uppercase tracking-widest hover:bg-[#ffda47] transition-all active:scale-95 text-center min-w-[200px]">
                  Talk to Our Team
                </button>
                <button className="bg-black/40 border border-white/10 text-white px-8 py-4 rounded-lg font-black text-[12px] uppercase tracking-widest hover:bg-white/5 transition-all active:scale-95 text-center backdrop-blur-md min-w-[200px]">
                  Capability Deck
                </button>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export { Footer, CTASection };
