import React, { useState } from "react";
import { 
  TrendingUp, 
  FileText, 
  Calendar, 
  Shield, 
  Mail, 
  ArrowUpRight, 
  BarChart, 
  Clock, 
  ChevronRight, 
  Download,
  Newspaper
} from "lucide-react";

// Simplified Resource Card (No Framer Motion for stability)
const ResourceCard = ({ title, desc, icon: Icon }: { title: string; desc: string; icon: any }) => (
  <div className="group relative bg-[#0a0a0a] border border-white/5 p-8 rounded-[2rem] overflow-hidden hover:border-[#ffc629]/30 transition-all duration-500">
    <div className="relative z-10">
      <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-white/40 group-hover:text-[#ffc629] group-hover:bg-[#ffc629]/10 transition-all mb-6">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-semibold text-white mb-3 uppercase tracking-tight">{title}</h3>
      <p className="text-white/40 text-sm leading-relaxed mb-8">{desc}</p>
      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#ffc629] hover:text-white transition-colors cursor-pointer">
        Learn More <ArrowUpRight size={14} />
      </div>
    </div>
  </div>
);

const InvestorRelations = () => {
  const [activeRange, setActiveRange] = useState("1D");

  const news = [
    { date: "May 15, 2026", title: "Digi Power X Reports First Quarter 2026 Financial Results" },
    { date: "May 11, 2026", title: "Digi Power X to Announce 2026 Q1 Financial Results and Provide Operations Update" },
    { date: "May 08, 2026", title: "Digi Power X Announces Upsizing of At-the-Market Offering Program" },
    { date: "Apr 25, 2026", title: "New AI Infrastructure Site Reaches Full 60MW Operational Capacity" }
  ];

  return (
    <div className="bg-black text-white min-h-screen selection:bg-[#ffc629] selection:text-black pt-20">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[50vh] flex flex-col items-center justify-center text-center px-6 py-20 border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,198,41,0.05)_0%,transparent_70%)]" />
        <div className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-4 rounded-full border border-white/5 bg-white/[0.03] px-6 py-2">
            <div className="h-1.5 w-1.5 rounded-full bg-[#ffc629] animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/50">Investor Relations</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-semibold uppercase tracking-tighter mb-8">
            Investor <span className="text-[#ffc629]">Center</span>
          </h1>
          <div className="inline-flex items-center gap-4 bg-white px-8 py-4 rounded-xl text-black text-[11px] font-black uppercase tracking-[0.2em] hover:bg-[#ffc629] transition-all cursor-pointer">
            Latest Investor Presentation <Download size={16} />
          </div>
        </div>
      </section>

      {/* DASHBOARD SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            
            {/* Stock Performance Card */}
            <div className="lg:col-span-2 bg-[#080808] border border-white/5 rounded-[2.5rem] p-10">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10">
                <div>
                  <h2 className="text-2xl font-semibold uppercase tracking-tight mb-2">Stock Information</h2>
                  <p className="text-white/40 text-xs uppercase tracking-widest font-medium">Real-time market performance</p>
                </div>
                <div className="flex flex-wrap gap-2 bg-white/5 p-1 rounded-lg">
                  {["1D", "1W", "1M", "3M", "6M", "ALL"].map(range => (
                    <button 
                      key={range}
                      onClick={() => setActiveRange(range)}
                      className={`px-4 py-1.5 text-[10px] font-bold rounded-md transition-all ${activeRange === range ? 'bg-[#ffc629] text-black' : 'text-white/40 hover:text-white'}`}
                    >
                      {range}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="h-[350px] w-full bg-white/[0.02] border border-white/5 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden">
                <BarChart size={40} className="text-white/5 mb-4" />
                <p className="text-white/20 text-xs font-bold uppercase tracking-widest">Loading performance data...</p>
                {/* Decorative grid */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <div className="absolute top-1/4 w-full h-px bg-white/10" />
                  <div className="absolute top-2/4 w-full h-px bg-white/10" />
                  <div className="absolute top-3/4 w-full h-px bg-white/10" />
                </div>
              </div>
              
              <div className="mt-8 flex items-center gap-2 text-red-500/50 text-[10px] font-bold uppercase tracking-widest">
                <Shield size={12} /> Live Stock Feed Temporarily Offline
              </div>
            </div>

            {/* Price & News Sidebar */}
            <div className="space-y-6">
              <div className="bg-[#080808] border border-white/5 rounded-[2.5rem] p-10 flex flex-col justify-between h-fit min-h-[250px]">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 mb-2">Stock Price (USD)</div>
                  <div className="text-5xl font-semibold text-white tracking-tighter mb-4">--- <span className="text-lg text-white/20">USD</span></div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10 w-fit">
                    <Clock size={12} className="text-white/30" />
                    <span className="text-[9px] font-bold text-white/30 uppercase tracking-wider">Waiting for live data...</span>
                  </div>
                </div>
                <div className="pt-8 border-t border-white/5 mt-auto">
                  <div className="text-[9px] font-black uppercase tracking-widest text-white/20 mb-1">Last Updated</div>
                  <div className="text-xs font-semibold text-white/40">---</div>
                </div>
              </div>

              <div className="bg-[#080808] border border-white/5 rounded-[2.5rem] p-8">
                <h3 className="text-xs font-black uppercase tracking-widest text-white/30 mb-6 pb-3 border-b border-white/5">Latest Press Releases</h3>
                <div className="space-y-6">
                  {news.map((item, idx) => (
                    <div key={idx} className="group cursor-pointer">
                      <div className="text-[9px] font-bold text-[#ffc629] mb-1">{item.date}</div>
                      <div className="text-sm font-semibold text-white group-hover:text-[#ffc629] transition-colors line-clamp-2 leading-snug">{item.title}</div>
                      <div className="mt-2 text-[9px] font-bold uppercase tracking-widest text-white/20 flex items-center gap-1 group-hover:text-white transition-colors">
                        Read More <ArrowUpRight size={10} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-white/5 text-center">
                   <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 hover:text-white transition-colors cursor-pointer flex items-center justify-center gap-2">
                     View All Announcements <ChevronRight size={14} />
                   </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* RESOURCES SECTION */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-semibold uppercase tracking-tighter mb-4">Investor Resources</h2>
            <div className="h-1 w-12 bg-[#ffc629]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ResourceCard title="SEC Filings" desc="Access financial statements, quarterly reports, and compliance documents." icon={FileText} />
            <ResourceCard title="Events & Presentations" desc="View upcoming earnings webcasts and past investor presentations." icon={Calendar} />
            <ResourceCard title="Stock Information" desc="Detailed historical performance and real-time market metrics." icon={TrendingUp} />
            <ResourceCard title="Press Releases" desc="Latest news and official corporate announcements from DigiPowerX." icon={Newspaper} />
            <ResourceCard title="Governance" desc="Information regarding our board of directors and corporate practices." icon={Shield} />
            <ResourceCard title="Contact IR" desc="Get in touch with our dedicated Investor Relations support team." icon={Mail} />
          </div>
        </div>
      </section>

      {/* MINIMAL FOOTER PLACEHOLDER */}
      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/20">© 2026 DigiPowerX • Industrial AI Infrastructure</p>
      </footer>

    </div>
  );
};

export default InvestorRelations;
