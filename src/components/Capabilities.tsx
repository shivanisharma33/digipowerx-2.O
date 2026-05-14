import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Factory, Landmark, Wind, Globe, ShieldCheck } from 'lucide-react';

const CapabilityCard = ({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className="group relative bg-gradient-to-br from-white via-[#f5c518]/5 to-[#f5c518]/15 rounded-[28px] p-10 border border-[#f5c518]/10 shadow-[0_10px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_70px_rgba(245,197,24,0.15)] hover:border-[#f5c518]/30 transition-all duration-700 h-full flex flex-col items-start overflow-hidden"
    >
      {/* Subtle Mesh Background for texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#f5c518 1px, transparent 0)', backgroundSize: '24px 24px' }} />

      {/* Decorative corner element */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#f5c518]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-tr-[28px]" />

      {/* Icon Container with animated ring */}
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-[#f5c518] rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
        <div className="w-16 h-16 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-50 rounded-2xl flex items-center justify-center relative z-10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
          <Icon className="w-8 h-8 text-[#f5c518] group-hover:text-black transition-colors duration-500" />
        </div>
      </div>

      <h3 className="text-2xl font-semibold uppercase tracking-tight text-black mb-5 group-hover:text-[#f5c518] transition-colors duration-500">{title}</h3>
      <p className="text-gray-500 text-[15px] leading-relaxed font-medium group-hover:text-gray-600 transition-colors duration-500">
        {description}
      </p>

      {/* Bottom indicator line */}
      <div className="mt-auto pt-8 w-full">
        <div className="h-[2px] w-8 bg-gray-100 group-hover:w-full group-hover:bg-[#f5c518] transition-all duration-700 origin-left" />
      </div>
    </motion.div>
  );
};

const Capabilities = () => {
  const items = [
    {
      icon: Zap,
      title: "Owned Power Generation",
      description: "Direct ownership of the energy stack. Natural gas, solar, and utility grid interconnects provide total control over uptime and cost structure."
    },
    {
      icon: Factory,
      title: "Substation Infrastructure",
      description: "Dedicated on-site power substations capable of delivering high-voltage capacity required for the next generation of GPU cluster training."
    },
    {
      icon: Landmark,
      title: "Tier III Data Centers",
      description: "Engineered for 99.99% availability with N+1 redundancy across cooling, power, and connectivity — purpose-built for high-density compute."
    },
    {
      icon: Wind,
      title: "Precision Liquid Cooling",
      description: "Direct-to-chip liquid cooling (DLC) and advanced heat rejection systems eliminate thermal bottlenecks and maximize GPU performance."
    },
    {
      icon: Globe,
      title: "400G Network Fabric",
      description: "Low-latency InfiniBand and Ethernet fabric with sub-microsecond east-west speeds — optimized for distributed AI training at scale."
    },
    {
      icon: ShieldCheck,
      title: "Physical Security",
      description: "Multi-layered perimeter defense, 24/7 on-site security forces, biometric access, and SOC 2 Type II compliance protecting critical infrastructure."
    }
  ];

  return (
    <section className="bg-[#fcfcfc] pt-10 pb-32 md:pb-48 relative overflow-hidden">

      {/* Enhanced Technical Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)] [background-size:48px_48px] opacity-[0.03] pointer-events-none" />

      {/* Animated subtle grid pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 10 10 L 90 10 L 90 90 L 10 90 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="10" cy="10" r="1.5" fill="currentColor" />
              <circle cx="90" cy="10" r="1.5" fill="currentColor" />
              <circle cx="90" cy="90" r="1.5" fill="currentColor" />
              <circle cx="10" cy="90" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
        </svg>
      </div>

      {/* Moving decorative elements */}
      <motion.div
        animate={{ y: [0, -40, 0], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-10 w-[400px] h-[400px] bg-[#f5c518] rounded-full blur-[160px] pointer-events-none"
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 relative z-10">

        {/* Header Section with enhanced typography */}
        <div className="flex flex-col items-center text-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-4 bg-white shadow-sm border border-gray-100 rounded-full px-6 py-2.5 mb-12 hover:shadow-md transition-shadow duration-500"
          >
            <span className="text-[10px] font-semibold tracking-widest text-gray-400">04 /</span>
            <div className="h-[2px] w-12 bg-[#f5c518]" />
            <span className="text-[10px] font-semibold tracking-[0.25em] text-black uppercase">CAPABILITIES</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-[0.85] tracking-tighter uppercase text-black mb-10"
          >
            EVERYTHING <br className="hidden md:block" />
            YOU NEED. <br />
            <span className="text-[#f5c518] relative">
              NOTHING
              <div className="absolute -bottom-2 left-0 w-full h-2 bg-[#f5c518] opacity-20 blur-sm" />
            </span> YOU DON'T.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 text-[16px] md:text-[19px] max-w-4xl leading-relaxed font-medium"
          >
            DigiPowerX facilities are purpose-built for the density and reliability demands of AI infrastructure — not retrofitted from legacy enterprise data centers.
          </motion.p>
        </div>

        {/* Grid Section with more spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {items.map((item, index) => (
            <CapabilityCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              delay={index * 0.1}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Capabilities;
