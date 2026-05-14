import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Users, 
  Target, 
  TrendingUp, 
  ChevronRight, 
  X,
  Mail
} from 'lucide-react';
import NeuralCube3D from './NeuralCube3D';
import { CTASection } from './Footer';

// Leadership Portraits
import CEO_IMG from '../assets/leadership/ceo.png';
import PRESIDENT_IMG from '../assets/leadership/president.png';
import CTO_IMG from '../assets/leadership/cto.png';

const Leadership = () => {
  const [selectedLeader, setSelectedLeader] = useState(null);

  const executives = [
    { name: "Michel Amar", role: "Chief Executive Officer", img: CEO_IMG, bio: "Michel Amar is a French-American businessman and entrepreneur known for his success in innovative technology, such as blockchain and electronics, as well as developing branded fashion. With a Bachelor's degree in accounting and business management, Michel has worked and consulted with some of the most famous international brands, playing a vital role in their profitability and continued relevance." },
    { name: "Alec Amar", role: "President", img: PRESIDENT_IMG, bio: "Mr. Amar is an entrepreneur and infrastructure executive with deep experience in energy, high-density data-center development, and advanced digital infrastructure. Under Mr. Amar's leadership, DigiPowerX has expanded into multiple U.S. markets with a growing portfolio of high-power data-center properties." },
    { name: "Jagan Jeyapal", role: "Chief Technology Officer", img: CTO_IMG, bio: "Technical visionary driving the architecture of DigiPowerX's high-performance computing platforms and sustainable infrastructure solutions." },
    { name: "Paul Ciullo", role: "Chief Financial Officer", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400", bio: "Financial strategist overseeing the company's fiscal health and capital allocation for massive infrastructure scaling." },
    { name: "Daniel Rotunno", role: "VP of Operations", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400", bio: "Operations expert managing the complex logistics and site deployments for modular data centers." },
    { name: "Luke Marchiori", role: "Chief Renewable Energy Officer", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400", bio: "Leading the integration of clean power sources with high-density compute facilities." }
  ];

  const boardMembers = [
    { name: "Michel Amar", role: "Chairman of the Board" },
    { name: "Alec Amar", role: "Board Member" },
    { name: "Gerard Rotonda", role: "Board Member", bio: "Mr. Rotonda was the Chief Financial Officer for Deutsche Bank Wealth Management Americas. He has over 30 years of experience in business development and financial analysis." },
    { name: "Adam S. Rossman", role: "Board Member", bio: "Mr. Rossman is a business and real estate attorney with extensive experience in commercial real estate and trademark licensing." },
    { name: "Ajay Gupta", role: "Board Member", bio: "Seasoned wealth management executive and Principal of Robbins Gupta Holdings. Advisor to global financial organizations." }
  ];

  const committees = [
    { name: "Audit Committee", description: "Overseeing financial reporting, internal controls, and compliance.", members: ["Gerard Rotonda", "Adam S. Rossman", "Ajay Gupta"] },
    { name: "Compensation Committee", description: "Ensuring executive compensation aligns with long-term shareholder value.", members: ["Adam S. Rossman", "Gerard Rotonda"] },
    { name: "Governance & Nominating", description: "Identifying board candidates and overseeing corporate governance.", members: ["Adam S. Rossman", "Alec Amar", "Ajay Gupta"] },
    { name: "Disclosure Committee", description: "Ensuring public disclosures are accurate, complete, and timely.", members: ["Michel Amar", "Gerard Rotonda", "Adam S. Rossman"] }
  ];

  return (
    <div className="bg-black min-h-screen text-white selection:bg-brand-yellow selection:text-black">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex flex-col items-center pt-48 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.15]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(245,197,24,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(245,197,24,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none flex items-center justify-center">
          <div className="w-full h-full max-w-6xl">
            <NeuralCube3D />
          </div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-12">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
              <span className="text-[10px] uppercase tracking-[0.5em] font-black text-white/60">Governance</span>
            </div>

            <h1 className="text-[clamp(3.5rem,10vw,120px)] font-black leading-[0.85] tracking-tighter uppercase mb-12">
              LEADERSHIP <br /> <span className="text-brand-yellow">& COMMITTEES</span>
            </h1>

            <p className="text-xl text-white/50 max-w-3xl mx-auto leading-relaxed font-medium italic">
              "Meet the experienced executives driving DigiPowerX's vision of revolutionizing AI infrastructure and sustainable data center operations."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Executive Team Grid */}
      <section className="py-32 bg-black relative border-t border-white/5">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="mb-24">
            <div className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-yellow mb-6">Executive Council</div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">THE <span className="text-white/40">TEAM</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {executives.map((exec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedLeader(exec)}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-8 border border-white/10">
                  <img 
                    src={exec.img} 
                    alt={exec.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  <div className="absolute bottom-8 left-8">
                    <div className="h-0.5 w-12 bg-brand-yellow mb-4 group-hover:w-20 transition-all duration-500" />
                    <h3 className="text-3xl font-black uppercase tracking-tighter mb-1">{exec.name}</h3>
                    <div className="text-[10px] font-black text-brand-yellow uppercase tracking-widest">{exec.role}</div>
                  </div>

                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-brand-yellow text-black flex items-center justify-center">
                      <ChevronRight size={20} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors Section */}
      <section className="py-32 bg-white text-black relative overflow-hidden">
        <div className="absolute top-0 right-0 p-24 opacity-[0.03] rotate-12">
          <Users size={600} />
        </div>

        <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div>
              <div className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-yellow mb-8">Governance Body</div>
              <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-12">BOARD OF <br /> DIRECTORS</h2>
              <p className="text-black/60 text-lg font-medium leading-relaxed max-w-md">
                A distinguished board providing strategic guidance, corporate governance, and long-term stewardship for DigiPowerX's global expansion.
              </p>
            </div>

            <div className="space-y-4">
              {boardMembers.map((member, i) => (
                <div key={i} className="group border-b border-black/10 py-8 hover:bg-black/[0.02] transition-colors px-6 rounded-lg cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-2xl font-black uppercase tracking-tighter group-hover:text-brand-yellow transition-colors">{member.name}</h4>
                      <div className="text-[10px] font-black text-black/30 uppercase tracking-widest mt-1">{member.role}</div>
                    </div>
                    <ChevronRight size={20} className="text-black/20 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Committees Section */}
      <section className="py-32 bg-black border-t border-white/10">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div className="max-w-2xl">
              <div className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-yellow mb-6">Structural Governance</div>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">COMMITTEES</h2>
            </div>
            <div className="text-[11px] font-black text-white/30 uppercase tracking-[0.3em] border-l border-white/20 pl-8">
              Regulatory compliance & <br /> strategic oversight
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {committees.map((committee, i) => (
              <div key={i} className="p-12 bg-white/[0.02] border border-white/5 rounded-3xl hover:border-brand-yellow/30 transition-all group">
                <h4 className="text-3xl font-black uppercase tracking-tighter mb-4 text-brand-yellow">{committee.name}</h4>
                <p className="text-white/40 text-sm font-medium leading-relaxed mb-8">{committee.description}</p>
                <div className="flex flex-wrap gap-2">
                  {committee.members.map((member, m) => (
                    <span key={m} className="px-3 py-1 rounded-md bg-white/5 text-[9px] font-black uppercase tracking-widest text-white/60">
                      {member}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leader Bio Modal */}
      <AnimatePresence>
        {selectedLeader && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-6 md:p-12 bg-black/95 backdrop-blur-2xl"
          >
            <button 
              onClick={() => setSelectedLeader(null)}
              className="absolute top-12 right-12 text-white/50 hover:text-white transition-colors"
            >
              <X size={40} />
            </button>

            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img src={selectedLeader.img} alt={selectedLeader.name} className="w-full h-full object-cover" />
              </div>
              <div className="space-y-8">
                <div>
                  <div className="h-1 w-24 bg-brand-yellow mb-8" />
                  <h3 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-4">{selectedLeader.name}</h3>
                  <div className="text-xl font-bold text-brand-yellow uppercase tracking-[0.2em]">{selectedLeader.role}</div>
                </div>
                <p className="text-lg md:text-xl text-white/60 font-medium leading-relaxed italic">
                  "{selectedLeader.bio}"
                </p>
                <div className="flex gap-6 pt-8">
                  <button className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-brand-yellow transition-all">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </button>
                  <button className="flex items-center gap-3 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all">
                    <Mail size={18} />
                    Contact
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTASection />
    </div>
  );
};

export default Leadership;
