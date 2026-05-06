import React from 'react';
import { motion } from 'framer-motion';

const WhatWeDo = () => {
  return (
    <section className="bg-brand-cream py-24 md:py-32 lg:py-40 px-6 lg:px-20 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-yellow/[0.03] to-transparent pointer-events-none" />
      
      <div className="max-w-[1800px] mx-auto">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-6 mb-16"
        >
          <span className="text-[10px] font-black tracking-[0.3em] text-gray-300 uppercase">01 /</span>
          <div className="h-[1px] w-16 bg-brand-yellow" />
          <span className="text-[10px] font-black tracking-[0.3em] text-gray-400 uppercase">What We Do</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2.5rem,7vw,5.5rem)] font-black leading-[0.95] tracking-tighter uppercase mb-12"
            >
              BUILT FROM <br />
              THE GROUND UP. <br />
              <span className="text-brand-yellow">OWNED</span> AT EVERY LAYER.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-gray-500 text-lg md:text-xl max-w-3xl leading-relaxed font-medium"
            >
              From land and power to physical infrastructure and compute —
              DigiPowerX controls the entire chain, eliminating third-party
              dependencies and compressing time-to-compute.
            </motion.p>
          </div>

          {/* Right side accent - Key differentiators */}
          <div className="lg:col-span-4 flex flex-col justify-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="space-y-6"
            >
              {[
                { num: '01', text: 'Own the energy source' },
                { num: '02', text: 'Build the data centers' },
                { num: '03', text: 'Operate the GPU clusters' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 group cursor-default">
                  <span className="text-[10px] font-black text-brand-yellow tracking-wider mt-1">{item.num}</span>
                  <div>
                    <div className="text-sm font-bold text-brand-dark group-hover:text-brand-yellow transition-colors uppercase tracking-wider">
                      {item.text}
                    </div>
                    <div className="h-[1px] w-0 group-hover:w-full bg-brand-yellow transition-all duration-500 mt-2" />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
