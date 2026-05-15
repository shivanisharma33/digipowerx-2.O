import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  Search,
  ArrowUpRight,
  Clock,
  Download,
  ChevronRight
} from 'lucide-react';
import NeuralCube3D from './NeuralCube3D';
import { CTASection } from './Footer';
import matrixBg from '../assets/matrix-bg.png';
import gridBg from '../assets/ChatGPT Image May 11, 2026, 03_45_38 PM (1).png';

const SECFilings = () => {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-brand-yellow selection:text-black">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex flex-col items-center pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Matrix Grid */}
        <div className="absolute inset-0 z-0 opacity-[0.15]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(245,197,24,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(245,197,24,0.1)_1px,transparent_1px)] bg-[size:30px_30px]" />
        </div>

        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none flex items-center justify-center">
          <div className="w-full h-full max-w-6xl">
            <NeuralCube3D />
          </div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto text-center flex flex-col items-center flex-1 justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            {/* Top Badge */}
            <div className="relative mb-16">
              <div className="w-64 h-[1px] bg-white/10" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-black flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-brand-yellow" />
                <span className="text-[9px] font-semibold uppercase tracking-[0.6em] text-white/40">Investors</span>
              </div>
            </div>

            <h1 className="text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-[0.95] tracking-tighter uppercase mb-8 text-white relative z-10">
              <span className="block text-white mb-2">SEC</span>
              <span className="block text-brand-yellow">Filings</span>
            </h1>

            <p className="text-sm md:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed mb-16 font-medium">
              Access all regulatory filings, annual reports, and quarterly disclosures for DigiPowerX Corporation (NASDAQ: DGXX).
            </p>

            {/* Bottom HUD Stats Bar */}
            <div className="w-full max-w-[1000px] grid grid-cols-2 md:grid-cols-4 gap-8 py-6 border-t border-white/10 border-b border-white/10 bg-black/40 backdrop-blur-xl">
              {[
                { val: "DGXX", label: "NASDAQ TICKER" },
                { val: "10-K", label: "ANNUAL FILING" },
                { val: "10-Q", label: "QUARTERLY FILING" },
                { val: "8-K", label: "CURRENT EVENTS" }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-brand-yellow font-semibold text-xl mb-1 tracking-tighter">{stat.val}</div>
                  <div className="text-[8px] font-semibold text-white/30 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-20 flex flex-col items-center gap-4 relative z-10">
          <div className="text-[9px] font-semibold uppercase tracking-[0.4em] text-white/40">View Recent Filings</div>
          <div className="w-[1px] h-12 bg-gradient-to-b from-brand-yellow to-transparent" />
        </div>
      </section>

      {/* Recent Filings Header (Light Contrast) */}
      <section className="bg-white text-black py-20">
        <div className="container mx-auto px-6 max-w-[1400px] text-center">
          <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full border border-black/10 mb-10">
            <div className="flex items-center gap-1.5">
              <div className="h-[2px] w-8 bg-brand-yellow" />
              <div className="h-[2px] w-2 bg-black/10" />
            </div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-black/60">Market Disclosures</span>
          </div>

          <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-[0.95] tracking-tighter uppercase text-black mb-8 relative z-10">
            RECENT <span className="text-brand-yellow">FILINGS</span>
          </h2>
          <p className="text-black/40 text-lg font-medium">View and download our latest filings.</p>
        </div>
      </section>

      {/* Filings Grid Section */}
      <section className="bg-black py-24 relative overflow-hidden">
        {/* Custom Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={gridBg} 
            alt="Custom Background" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {[1, 2, 3, 4, 5, 6].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="bg-white/[0.02] backdrop-blur-3xl border border-brand-yellow/30 p-10 rounded-2xl relative group hover:bg-white/[0.05] transition-all duration-300"
              >
                <div className="flex flex-col gap-6">
                  {/* Date Header */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-brand-yellow">
                      <FileText size={14} />
                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">Filing Date</span>
                    </div>
                    <div className="text-3xl font-semibold uppercase tracking-tighter text-white">May 12, 2026</div>
                  </div>

                  <div className="h-[1px] w-full bg-brand-yellow/30" />

                  {/* Form Type */}
                  <div className="space-y-3">
                    <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest">Form Type</div>
                    <div className="text-5xl font-semibold text-brand-yellow uppercase tracking-tighter leading-none">Schedule 13G</div>
                  </div>

                  <div className="h-[1px] w-full bg-brand-yellow/30" />

                  {/* Description */}
                  <div className="space-y-3">
                    <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest">Description</div>
                    <div className="text-[11px] font-semibold text-white uppercase leading-relaxed max-w-[320px]">
                      SECURITIES AND EXCHANGE COMMISSION <br />
                      Washington, D.C. 20549
                    </div>
                  </div>

                  {/* Download Button */}
                  <div className="pt-4">
                    <button className="flex items-center gap-3 bg-brand-yellow text-black px-10 py-4 rounded-lg font-semibold text-[10px] uppercase tracking-[0.2em] hover:bg-white transition-all active:scale-[0.98]">
                      <Download size={14} strokeWidth={3} />
                      Download PDF
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="mt-20 flex items-center justify-center gap-8">
            <button className="text-white/40 hover:text-brand-yellow transition-colors cursor-pointer">
              <ChevronRight size={20} className="rotate-180" />
            </button>
            <div className="flex items-center gap-6 text-sm font-semibold uppercase tracking-widest">
              <span className="text-brand-yellow border-b border-brand-yellow">1</span>
              <span className="text-white/40 hover:text-white cursor-pointer transition-colors">2</span>
              <span className="text-white/40 hover:text-white cursor-pointer transition-colors">3</span>
              <span className="text-white/20">....</span>
              <span className="text-white/40 hover:text-white cursor-pointer transition-colors">10</span>
            </div>
            <button className="text-white/40 hover:text-brand-yellow transition-colors cursor-pointer">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default SECFilings;
