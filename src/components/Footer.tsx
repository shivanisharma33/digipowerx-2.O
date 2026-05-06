import React, { useEffect, useRef } from 'react';
import logoImg from '../assets/Digi new color logo.png';

const Footer = () => {
  return (
    <footer className="bg-brand-cream border-t border-gray-200 py-20 px-6 lg:px-20">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img src={logoImg} alt="DigiPowerX Logo" className="h-16 w-auto" />
            </div>
            <p className="text-gray-500 text-sm max-w-sm leading-relaxed mb-8">
              Vertically integrated power infrastructure, data centers, and AI compute. Owned at every layer. Built for scale.
            </p>
            <div className="flex gap-4">
              {['𝕏', 'in', 'gh'].map(s => (
                <a key={s} href="#" className="w-10 h-10 border border-gray-200 flex items-center justify-center rounded-sm hover:border-brand-yellow hover:text-brand-yellow transition-all duration-300">
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-black tracking-[0.2em] uppercase text-gray-400 mb-6">Services</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-600">
              <li><a href="#" className="hover:text-brand-dark transition-colors">Power Generation</a></li>
              <li><a href="#" className="hover:text-brand-dark transition-colors">Substation Build</a></li>
              <li><a href="#" className="hover:text-brand-dark transition-colors">DC Construction</a></li>
              <li><a href="#" className="hover:text-brand-dark transition-colors">Colocation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black tracking-[0.2em] uppercase text-gray-400 mb-6">Subsidiaries</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-600">
              <li><a href="#" className="text-emerald-600 hover:text-emerald-700 transition-colors">NeoCloudz ↗</a></li>
              <li><a href="#" className="hover:text-brand-dark transition-colors">DigiGrid Platform</a></li>
              <li><a href="#" className="hover:text-brand-dark transition-colors">US Data Centers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black tracking-[0.2em] uppercase text-gray-400 mb-6">Contact</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-600">
              <li><a href="#" className="hover:text-brand-dark transition-colors">Talk to Sales</a></li>
              <li><a href="#" className="hover:text-brand-dark transition-colors">Investor Relations</a></li>
              <li><a href="#" className="hover:text-brand-dark transition-colors">Media Inquiries</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            © 2025 DigiPowerX, Inc. · 100% U.S. Owned & Operated
          </div>
          <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
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

    // Exact parameters from user reference HTML
    const waves = [
      { freq: 0.8, amp: 0.12, speed: 0.6, col: '245, 197, 24', op: 0.08 },
      { freq: 1.3, amp: 0.08, speed: 0.9, col: '245, 197, 24', op: 0.06 },
      { freq: 1.8, amp: 0.05, speed: 1.2, col: '0, 232, 120', op: 0.04 },
    ];

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = '#0B0B0B';
      ctx.fillRect(0, 0, W, H);

      waves.forEach(w => {
        ctx.beginPath();
        for (let x = 0; x <= W; x++) {
          const y = H / 2 + Math.sin((x / W) * Math.PI * 2 * w.freq + t * w.speed) * H * w.amp;
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.lineTo(W, H);
        ctx.lineTo(0, H);
        ctx.closePath();
        ctx.fillStyle = `rgba(${w.col}, ${w.op})`;
        ctx.fill();
      });

      t += 0.013;
      requestAnimationFrame(draw);
    };

    draw();
    return () => window.removeEventListener('resize', setSize);
  }, []);

  return (
    <section className="relative overflow-hidden py-12 md:py-16 lg:py-24 bg-brand-dark">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      
      {/* Visual background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-yellow/5 to-transparent pointer-events-none" />

      <div className="max-w-[1800px] mx-auto px-4 md:px-12 lg:px-20 relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-16">
        <div className="max-w-4xl">
          <div className="flex items-center gap-6 mb-8">
            <div className="h-[1px] w-16 bg-brand-yellow" />
            <span className="text-[10px] font-black tracking-[0.4em] text-white/30 uppercase">Let's Build Together</span>
          </div>
          <h2 className="text-[clamp(2.2rem,8vw,5.5rem)] font-black text-white uppercase tracking-tighter leading-[0.95] mb-6 md:mb-8">
            Ready to own the <br />
            <span className="text-brand-yellow">Infrastructure</span> <br className="hidden sm:block" />
            layer?
          </h2>
          <p className="text-white/60 text-base md:text-lg lg:text-xl leading-relaxed max-w-xl">
            Whether you need co-location, a turnkey data center build, or bare-metal GPU compute — DigiPowerX has the team to deliver at scale.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full sm:w-auto">
          <button className="bg-brand-yellow text-brand-dark px-10 py-4 md:py-5 font-bold text-sm uppercase tracking-widest hover:bg-yellow-500 transition-all active:scale-95 text-center shadow-xl shadow-brand-yellow/10 w-full sm:w-auto hover:shadow-2xl hover:shadow-brand-yellow/20">
            Talk to Our Team
          </button>
          <button className="border border-white/20 text-white hover:bg-white/10 px-10 py-4 md:py-5 font-bold text-sm uppercase tracking-widest transition-all active:scale-95 text-center backdrop-blur-sm w-full sm:w-auto">
            Capability Deck
          </button>
        </div>
      </div>

    </section>
  );
};


export { Footer, CTASection };
