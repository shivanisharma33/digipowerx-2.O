import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Newspaper, ArrowUpRight, Calendar, Tag } from "lucide-react";
import { CTASection } from "./Footer";

const PressReleaseCard = ({ date, title, category, summary, delay }: { date: string; title: string; category: string; summary: string; delay: number }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      viewport={{ once: true }}
      className="group relative bg-[#080808] border border-white/5 p-8 rounded-[2.5rem] overflow-hidden transition-all duration-700 hover:border-white/10"
    >
      {/* 1. MESH GRADIENT GLOW (Multi-Color) */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: `
            radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,198,41,0.08), transparent 40%),
            radial-gradient(300px circle at ${mousePos.x + 50}px ${mousePos.y - 50}px, rgba(255,255,255,0.03), transparent 30%)
          `,
        }}
      />

      {/* 2. MOVING SHIMMER (Linear Gradient) */}
      <motion.div
        animate={{
          x: ["100%", "-100%"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent skew-x-12 pointer-events-none"
      />

      {/* 3. CORNER ACCENT (Mesh Style) */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-[radial-gradient(circle_at_center,rgba(255,198,41,0.05)_0%,transparent_70%)] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-white/[0.03] border border-white/5 rounded-2xl text-white/30 group-hover:text-white group-hover:bg-[#ffc629] group-hover:border-[#ffc629] transition-all duration-500">
              <Calendar size={16} />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 group-hover:text-white/40 transition-colors">Date Published</span>
              <span className="text-[11px] font-bold text-white/40 group-hover:text-white/80 transition-colors">{date}</span>
            </div>
          </div>

          {/* TRI-COLOR GRADIENT TAG */}
          <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-[#ffc629]/20 via-[#ffc629]/5 to-transparent border border-[#ffc629]/20 rounded-xl shadow-[0_0_15px_rgba(255,198,41,0.05)]">
            <Tag size={10} className="text-[#ffc629]" />
            <span className="text-[9px] font-black uppercase tracking-widest text-[#ffc629]">{category}</span>
          </div>
        </div>
        
        <h3 className="text-xl md:text-2xl font-semibold text-white mb-5 leading-[1.2] tracking-tight group-hover:text-white transition-colors">
          {title}
        </h3>
        
        <p className="text-white/30 text-[13px] leading-relaxed mb-10 line-clamp-3 font-medium group-hover:text-white/50 transition-colors">
          {summary}
        </p>
        
        <div className="flex items-center justify-between pt-6 border-t border-white/5">
          <button className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-white/40 hover:text-[#ffc629] transition-all group/btn">
            Explore Release
            <div className="relative w-8 h-8 rounded-full border border-white/10 flex items-center justify-center overflow-hidden transition-all group-hover/btn:border-[#ffc629]">
              <motion.div
                className="absolute inset-0 bg-[#ffc629] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"
              />
              <ArrowUpRight size={14} className="relative z-10 group-hover/btn:text-black transition-colors" />
            </div>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const PressRelease = () => {
  const releases = [
    {
      date: "May 12, 2026",
      category: "Infrastructure",
      title: "DigiPowerX Announces Completion of 200MW North Carolina Development Site",
      summary: "Strategic expansion into the Southeast US infrastructure market strengthens DigiPowerX's position as a leading provider of vertically integrated AI compute capacity."
    },
    {
      date: "April 28, 2026",
      category: "Financial",
      title: "DigiPowerX Reports Record Q1 2026 Earnings, Cites High GPU Demand",
      summary: "Financial performance driven by increased utilization of the NeoCloudz bare-metal platform and operational efficiencies at the North Tonawanda energy facility."
    },
    {
      date: "March 15, 2026",
      category: "Partnership",
      title: "DigiPowerX Partners with NVIDIA for Next-Gen Blackwell Cluster Deployment",
      summary: "The collaboration will see the deployment of the world's first fully liquid-cooled Blackwell B200 clusters across DigiPowerX's Tier III data centers."
    },
    {
      date: "February 10, 2026",
      category: "Sustainability",
      title: "Alabama Facility Achieves Zero-Emission Rating with New Hydro-Cooling System",
      summary: "DigiPowerX implements closed-loop hydro-cooling technology, reducing water consumption by 98% and setting a new industry standard for sustainable AI infrastructure."
    },
    {
        date: "January 20, 2026",
        category: "Corporate",
        title: "DigiPowerX Appoints New Chief Technology Officer to Lead AI Strategy",
        summary: "Dr. Elena Vance joins the executive leadership team to spearhead the development of the next-generation NeoCloudz software stack."
    },
    {
        date: "December 15, 2025",
        category: "Operations",
        title: "North Tonawanda Facility Reaches Full 60MW Operational Capacity",
        summary: "The energy generation site now provides consistent, low-cost power to the adjacent GPU clusters, optimizing the company's full-stack efficiency."
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen selection:bg-[#ffc629] selection:text-black">
      
      {/* ===================================================== */}
      {/* CENTERED HERO SECTION */}
      {/* ===================================================== */}
      <section className="relative min-h-[70vh] overflow-hidden bg-[#050505] flex flex-col items-center justify-center pt-32 pb-20 px-6">
        
        {/* ATMOSPHERIC BACKGROUND */}
        <div className="absolute inset-0 z-0 opacity-[0.08]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `radial-gradient(rgba(255,255,255,0.15) 1.5px, transparent 1.5px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(245,198,41,0.05)_0%,transparent_70%)]" />

        <div className="relative z-10 w-full max-w-[1200px] mx-auto text-center flex flex-col items-center">
          
          {/* TECHNICAL BADGE */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-10 inline-flex items-center gap-4 rounded-full border border-white/5 bg-white/[0.03] px-6 py-2.5 backdrop-blur-xl"
          >
            <div className="h-1.5 w-1.5 rounded-full bg-[#ffc629] animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/50">
              Newsroom • Official Press Releases
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <h1 className="leading-[1.1] tracking-[-0.04em] mb-10">
              <span className="block text-[clamp(40px,7vw,100px)] font-semibold text-white">
                Official Press
              </span>
              <span className="block text-[clamp(40px,7vw,100px)] font-semibold text-[#ffc629]">
                Release Archive
              </span>
            </h1>

            <p className="max-w-[800px] text-[clamp(16px,1.1vw,19px)] leading-[1.8] text-white/40 font-medium mb-16">
              Stay updated with the latest corporate developments, infrastructure milestones, and strategic announcements from DigiPowerX.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* PRESS RELEASES GRID */}
      {/* ===================================================== */}
      <section className="py-20 px-6 bg-black relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {releases.map((release, index) => (
              <PressReleaseCard
                key={index}
                {...release}
                delay={0.1 * index}
              />
            ))}
          </div>

          {/* LOAD MORE */}
          <div className="mt-24 flex justify-center">
            <button className="group flex flex-col items-center gap-4">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 group-hover:text-white transition-colors">
                Load Older Releases
              </span>
              <div className="w-12 h-[1px] bg-white/10 group-hover:w-24 group-hover:bg-[#ffc629] transition-all duration-500" />
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <CTASection />

    </div>
  );
};

export default PressRelease;
