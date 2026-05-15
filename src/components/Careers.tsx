import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  MapPin, 
  Briefcase, 
  Cpu, 
  ShieldCheck, 
  Settings, 
  Users, 
  ArrowUpRight,
  MapPin as MapPinIcon
} from 'lucide-react';
import { CTASection } from './Footer';
import NeuralCube3D from './NeuralCube3D';


const GlassCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`relative group ${className}`}>
    <div className="absolute -inset-[1px] bg-gradient-to-r from-brand-yellow/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative h-full bg-black/80 backdrop-blur-xl border border-brand-rule rounded-2xl overflow-hidden">
      {children}
    </div>
  </div>
);

const CareerPathRow = ({ num, icon: Icon, title, description, linkText }: { num: string, icon: any, title: string, description: string, linkText: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group relative border-b border-brand-rule last:border-b-0 py-12 px-8 hover:bg-white/[0.02] transition-all duration-500 cursor-pointer overflow-hidden"
  >
    {/* Animated background glow */}
    <div className="absolute inset-0 bg-gradient-to-r from-brand-yellow/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    
    <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8 md:gap-20">
      {/* Number and Icon */}
      <div className="flex items-center gap-8 min-w-[200px]">
        <span className="text-4xl md:text-6xl font-semibold text-brand-rule group-hover:text-brand-yellow/20 transition-colors duration-500 font-mono">
          {num}
        </span>
        <div className="w-16 h-16 rounded-2xl bg-brand-yellow/5 border border-brand-yellow/10 flex items-center justify-center text-brand-yellow group-hover:bg-brand-yellow group-hover:text-black transition-all duration-500">
          <Icon size={28} />
        </div>
      </div>

      {/* Text Content */}
      <div className="flex-1">
        <h3 className="text-3xl md:text-4xl font-semibold uppercase tracking-tighter mb-4 group-hover:text-brand-yellow transition-colors duration-500">
          {title}
        </h3>
        <p className="text-brand-muted text-sm md:text-base max-w-2xl leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity duration-500">
          {description}
        </p>
      </div>

      {/* Action Button */}
      <div className="md:opacity-0 group-hover:opacity-100 translate-x-10 group-hover:translate-x-0 transition-all duration-500">
        <button className="flex items-center gap-3 px-8 py-4 rounded-full border border-brand-yellow/30 text-brand-yellow text-xs font-mono font-semibold uppercase tracking-widest hover:bg-brand-yellow hover:text-black transition-all">
          {linkText} <ArrowUpRight size={16} />
        </button>
      </div>
    </div>

    {/* Technical Decorative Elements */}
    <div className="absolute top-0 right-0 h-full w-[1px] bg-brand-yellow/10 group-hover:bg-brand-yellow/50 transition-all duration-700" />
  </motion.div>
);

const CareerPathMatrix = () => (
  <div className="border border-brand-rule rounded-3xl overflow-hidden bg-black/40 backdrop-blur-sm shadow-2xl">
    <CareerPathRow 
      num="01"
      icon={Cpu}
      title="Engineering"
      description="Architect the backbone of global compute. From high-density power distribution to massively parallel AI training clusters."
      linkText="View Roles"
    />
    <CareerPathRow 
      num="02"
      icon={ShieldCheck}
      title="Security"
      description="Implement zero-trust protocols for critical AI infrastructure. Protect the world's most valuable compute assets from edge to core."
      linkText="View Roles"
    />
    <CareerPathRow 
      num="03"
      icon={Settings}
      title="Operations"
      description="Manage hyper-scale data center ecosystems. Ensure mission-critical reliability for enterprise-grade AI workloads 24/7/365."
      linkText="View Roles"
    />
    <CareerPathRow 
      num="04"
      icon={Users}
      title="Corporate"
      description="Scale the future of energy-integrated compute. Lead global strategy, capital allocation, and sustainable growth initiatives."
      linkText="View Roles"
    />
  </div>
);

const ModernJobCard = ({ title, location, type, index }: { title: string, location: string, type: string, index: number }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group relative"
  >
    <div className="flex items-center gap-6 py-8 border-b border-brand-rule group-hover:border-brand-yellow/30 transition-colors">
      <div className="hidden md:flex flex-col items-center gap-1 opacity-20 group-hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-mono font-semibold text-brand-yellow">0{index + 1}</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-yellow to-transparent" />
      </div>
      
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-brand-yellow bg-brand-yellow/5 px-2 py-0.5 rounded border border-brand-yellow/20">
            {type}
          </span>
          <span className="flex items-center gap-1.5 text-[10px] text-brand-muted uppercase tracking-wider font-semibold">
            <MapPinIcon size={12} /> {location}
          </span>
        </div>
        <h3 className="text-xl md:text-2xl font-semibold tracking-tight group-hover:translate-x-2 transition-transform duration-300">
          {title}
        </h3>
      </div>
      
      <button className="h-12 w-12 rounded-full border border-brand-rule flex items-center justify-center group-hover:bg-brand-yellow group-hover:border-brand-yellow group-hover:text-black transition-all duration-300">
        <ArrowUpRight size={20} />
      </button>
    </div>
  </motion.div>
);

const Careers = () => {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-brand-yellow selection:text-black">
      {/* Centered Hero Section with Infrastructure Background */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
        
        {/* Background 3D Element (Infrastructure Style) */}
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none flex items-center justify-center">
          <div className="w-full h-full max-w-6xl">
            <NeuralCube3D />
          </div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow shadow-[0_0_8px_#f5c518]"></span>
              <span className="text-[9px] uppercase tracking-[0.4em] font-mono text-white/60">
                Now Recruiting Globally
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-[0.95] tracking-tighter uppercase mb-8 text-white relative z-10"
            >
              <span className="block text-white">BUILDING THE</span>
              <span className="block text-brand-yellow">FUTURE OF COMPUTE</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/60 text-sm md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed font-medium tracking-wide"
            >
              Join DigiPowerX in our mission to power the world’s data, AI workloads, and next-generation sustainable infrastructure.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex justify-center gap-6"
            >
              <button className="px-12 py-5 bg-brand-yellow text-black font-semibold uppercase tracking-[0.2em] text-[11px] rounded-md transition-all hover:brightness-110 active:scale-95 shadow-[0_10px_40px_rgba(245,197,24,0.2)]">
                Explore Opportunities
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Career Pathways */}
      <section className="py-32 bg-black border-y border-brand-rule">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div>
              <div className="text-[10px] font-mono font-semibold text-brand-yellow uppercase tracking-[0.3em] mb-4">Domain Expertise</div>
              <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-[0.95] tracking-tighter uppercase text-white mb-8 relative z-10">Career Pathways</h2>
            </div>
            <p className="text-brand-muted max-w-md text-sm leading-relaxed pb-2">
              Our workforce is decentralized but unified. Choose your path and help us architect the backbone of the AI era.
            </p>
          </div>

          <CareerPathMatrix />
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <GlassCard className="p-1">
              <div className="grid grid-cols-1 md:grid-cols-4 items-center">
                <div className="p-8 border-b md:border-b-0 md:border-r border-brand-rule">
                  <h3 className="text-sm font-mono font-semibold uppercase tracking-widest text-brand-yellow mb-2">Search Roles</h3>
                  <div className="flex items-center gap-3">
                    <Search size={20} className="text-brand-muted" />
                    <input 
                      type="text" 
                      placeholder="Title or keyword" 
                      className="bg-transparent border-none outline-none text-white text-lg font-semibold w-full placeholder:text-brand-muted/30"
                    />
                  </div>
                </div>
                <div className="p-8 border-b md:border-b-0 md:border-r border-brand-rule">
                  <h3 className="text-sm font-mono font-semibold uppercase tracking-widest text-brand-yellow mb-2">Location</h3>
                  <div className="flex items-center gap-3">
                    <MapPinIcon size={20} className="text-brand-muted" />
                    <input 
                      type="text" 
                      placeholder="Remote or City" 
                      className="bg-transparent border-none outline-none text-white text-lg font-semibold w-full placeholder:text-brand-muted/30"
                    />
                  </div>
                </div>
                <div className="p-8 border-b md:border-b-0 md:border-r border-brand-rule">
                  <h3 className="text-sm font-mono font-semibold uppercase tracking-widest text-brand-yellow mb-2">Department</h3>
                  <div className="flex items-center gap-3">
                    <Briefcase size={20} className="text-brand-muted" />
                    <select className="bg-transparent border-none outline-none text-white text-lg font-semibold w-full appearance-none cursor-pointer">
                      <option className="bg-black">All Domains</option>
                      <option className="bg-black">Engineering</option>
                      <option className="bg-black">Security</option>
                    </select>
                  </div>
                </div>
                <div className="p-8">
                  <button className="w-full h-full bg-brand-yellow text-black font-semibold uppercase tracking-[0.2em] text-xs py-4 rounded-lg hover:scale-[1.02] active:scale-95 transition-all">
                    Find Jobs
                  </button>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="pb-40">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-6 mb-16">
            <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-[0.95] tracking-tighter uppercase text-white mb-8 relative z-10">Open Positions</h2>
            <div className="flex-1 h-px bg-brand-rule" />
            <div className="text-[10px] font-mono text-brand-muted uppercase">Displaying 3 active nodes</div>
          </div>

          <div className="max-w-6xl mx-auto space-y-0">
            <ModernJobCard 
              index={0}
              title="Network Architect and Engineer (consultant) - AI Factory & HPC"
              location="Hybrid (AL, NY, NC)"
              type="Consultant"
            />
            <ModernJobCard 
              index={1}
              title="Technical Program Manager (consultant) - AI Factory and Data Center Operations"
              location="Remote"
              type="Consultant"
            />
            <ModernJobCard 
              index={2}
              title="Data Center Operations Lead - AI Factory (Consultant)"
              location="Columbiana, Alabama (Onsite)"
              type="Consultant"
            />
          </div>
          
          <div className="mt-20 flex justify-center">
            <motion.button 
              whileHover={{ gap: '2rem' }}
              className="group flex items-center gap-4 text-xs font-mono font-semibold uppercase tracking-[0.3em] text-brand-muted hover:text-brand-yellow transition-all"
            >
              View Full Directory <ArrowUpRight size={18} />
            </motion.button>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default Careers;
