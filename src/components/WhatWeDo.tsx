import React from 'react';
import { motion } from 'framer-motion';

const WhatWeDo = () => {
  return (
    <section className="bg-brand-cream py-32 px-6 lg:px-20">
      <div className="max-w-[1800px] mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-[10px] font-black tracking-[0.3em] text-gray-400 uppercase mb-12 flex items-center gap-4"
        >
          <span className="text-gray-300">01 /</span> WHAT WE DO
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
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
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
