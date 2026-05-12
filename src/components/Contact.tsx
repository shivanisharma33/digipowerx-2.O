import { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  Mail, Phone, Send, CheckCircle, MapPin,
  Server, Shield, Zap, ChevronRight, Clock,
  Globe, MessageSquare, Headphones, ExternalLink,
  Cpu, Activity, Lock
} from 'lucide-react';
import contactHeroBg from '../assets/futuristic-contact-bg.png';

/* ─── Constants ─── */
const BRAND_YELLOW = '#f5c518';

/* ─── Animations ─── */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
  visible: {
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

/* ─── Main Component ─── */
export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  const [form, setForm] = useState({
    firstName: '', lastName: '', company: '',
    email: '', title: '', phone: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 2000));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative min-h-screen bg-[#06070a] overflow-hidden flex flex-col justify-center py-24"
    >
      {/* ── Background Layer ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${contactHeroBg})`,
            backgroundAttachment: 'fixed' // Optional: for a parallax-like feel without animation, or just keep it simple
          }}
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>


      {/* ── Technical Grid Overlay ── */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{ 
          backgroundImage: `linear-gradient(${BRAND_YELLOW} 1px, transparent 1px), linear-gradient(90deg, ${BRAND_YELLOW} 1px, transparent 1px)`,
          backgroundSize: '60px 60px' 
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* ── Header ── */}
          <div className="text-center mb-20">
            <motion.div 
              variants={itemVariants} 
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-brand-yellow/30 bg-brand-yellow/5 backdrop-blur-md text-brand-yellow text-[11px] uppercase tracking-[0.4em] font-bold mb-8 shadow-[0_0_20px_rgba(245,197,24,0.1)]"
            >
              <div className="relative flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-brand-yellow animate-ping absolute" />
                <span className="w-2 h-2 rounded-full bg-brand-yellow relative" />
              </div>
              High-Priority Transmission Channel
            </motion.div>
            
            <motion.h1 
              variants={itemVariants} 
              className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter mb-8 leading-[0.9] drop-shadow-2xl"
            >
              Scale <span className="text-brand-yellow">Beyond</span> Limits
            </motion.h1>
            
            <motion.p 
              variants={itemVariants} 
              className="text-gray-400 max-w-2xl mx-auto text-xl leading-relaxed font-light"
            >
              Connect with our specialist infrastructure architects to build your next-generation compute environment.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-24">
            <ContactCard 
              icon={Mail} 
              label="Investor Relations" 
              value="ir@digipowerx.com" 
              href="mailto:ir@digipowerx.com" 
            />
            <ContactCard 
              icon={Phone} 
              label="Support Hotline" 
              value="888-474-9222" 
              href="tel:8884749222" 
            />
            <ContactCard 
              icon={MapPin} 
              label="Global HQ" 
              value="Dallas, Texas, USA" 
            />
          </div>

          {/* ── The Form Section (Unique Centerpiece) ── */}
          <div className="max-w-4xl mx-auto">

              <motion.div 
                variants={itemVariants}
                className="relative p-12 md:p-16 rounded-[3rem] bg-black/60 border border-white/10 backdrop-blur-3xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden"
              >
                {/* Dynamic Glows */}
                <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-yellow/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
                <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-brand-yellow/5 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />

                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.form 
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      onSubmit={handleSubmit} 
                      className="space-y-10 relative z-10"
                    >
                      <div className="flex items-center gap-6 mb-12">
                        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/20" />
                        <span className="text-[11px] font-bold text-brand-yellow/80 uppercase tracking-[0.5em] whitespace-nowrap">Authentication & Access</span>
                        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/20" />
                      </div>

                      <div className="grid md:grid-cols-2 gap-10">
                        <Field id="firstName" name="firstName" label="Given Name" placeholder="First Name" required value={form.firstName} onChange={handleChange} />
                        <Field id="lastName" name="lastName" label="Surname" placeholder="Last Name" required value={form.lastName} onChange={handleChange} />
                      </div>

                      <div className="grid md:grid-cols-2 gap-10">
                        <Field id="company" name="company" label="Entity / Organization" placeholder="Corporation Name" required value={form.company} onChange={handleChange} />
                        <Field id="title" name="title" label="Operational Role" placeholder="Job Title" required value={form.title} onChange={handleChange} />
                      </div>

                      <div className="grid md:grid-cols-2 gap-10">
                        <Field id="email" name="email" type="email" label="Secure Email" placeholder="professional@email.com" required value={form.email} onChange={handleChange} />
                        <Field id="phone" name="phone" label="Direct Frequency" placeholder="+1 (000) 000-0000" value={form.phone} onChange={handleChange} />
                      </div>

                      <div className="space-y-4">
                        <label htmlFor="message" className="block text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">Transmission Payload</label>
                        <div className="relative group">
                          <textarea
                            id="message"
                            name="message"
                            required
                            rows={5}
                            placeholder="Detail your infrastructure requirements or inquiry..."
                            value={form.message}
                            onChange={handleChange}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-yellow/50 focus:bg-white/[0.08] transition-all resize-none shadow-inner"
                          />
                          <div className="absolute bottom-4 right-4 opacity-0 group-focus-within:opacity-30 transition-opacity">
                            <Send size={14} className="text-brand-yellow" />
                          </div>
                        </div>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.01, backgroundColor: '#ffffff' }}
                        whileTap={{ scale: 0.98 }}
                        disabled={submitting}
                        className="group w-full bg-brand-yellow text-black font-black py-6 rounded-2xl uppercase tracking-[0.3em] text-[13px] flex items-center justify-center gap-4 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_20px_60px_-15px_rgba(245,197,24,0.4)]"
                      >
                        {submitting ? (
                          <>
                            <div className="w-5 h-5 border-[3px] border-black/20 border-t-black rounded-full animate-spin" />
                            Processing Signal...
                          </>
                        ) : (
                          <>
                            <span className="group-hover:translate-x-1 transition-transform">Transmit Data Stream</span>
                            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </motion.button>
                    </motion.form>
                  ) : (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-20"
                    >
                      <div className="w-28 h-28 bg-brand-yellow/10 border border-brand-yellow/30 rounded-full flex items-center justify-center mx-auto mb-10 shadow-[0_0_50px_rgba(245,197,24,0.2)]">
                        <CheckCircle size={56} className="text-brand-yellow" />
                      </div>
                      <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-6">Handshake Complete</h2>
                      <p className="text-gray-400 max-w-sm mx-auto mb-12 text-lg font-light leading-relaxed">
                        Your transmission has been encrypted and received. An infrastructure specialist will respond shortly.
                      </p>
                      <button 
                        onClick={() => setSubmitted(false)}
                        className="text-brand-yellow font-bold uppercase tracking-[0.3em] text-[10px] hover:text-white transition-colors border-b border-brand-yellow/30 pb-1"
                      >
                        New Transmission
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
        </motion.div>
      </div>

      {/* ── Metrics Bar ── */}
      <div className="container mx-auto px-6 relative z-10 mt-24">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Activity, label: "Real-time Uptime", val: "99.999%" },
            { icon: Lock, label: "Security Level", val: "Tier IV+" },
            { icon: Zap, label: "Response Time", val: "< 2ms" },
            { icon: Server, label: "Global Nodes", val: "24" }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl text-center group hover:bg-brand-yellow/5 transition-all duration-500"
            >
              <item.icon size={20} className="mx-auto mb-3 text-brand-yellow/60 group-hover:text-brand-yellow transition-colors" />
              <p className="text-white font-black text-xl tracking-tighter mb-1">{item.val}</p>
              <p className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* ── Footer Branding ── */}
      <div className="mt-32 border-t border-white/5 pt-16 relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex items-center gap-8">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.4em] mb-2">Protocol</span>
                <span className="text-[11px] font-mono text-brand-yellow font-bold">DPX-SECURE-v3.0</span>
              </div>
              <div className="w-[1px] h-10 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.4em] mb-2">Node</span>
                <span className="text-[11px] font-mono text-white font-bold">DAL-CLUSTER-01</span>
              </div>
            </div>
            
            <p className="text-[11px] font-bold text-white/30 uppercase tracking-[0.5em] text-center md:text-right">
              &copy; 2026 DIGIPOWERX INFRASTRUCTURE // ALL SYSTEMS NOMINAL
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon: Icon, label, value, href }: any) {
  const content = (
    <motion.div 
      variants={itemVariants}
      className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-2xl relative group overflow-hidden hover:bg-white/[0.08] transition-all duration-500"
    >
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-2xl bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center mb-6 group-hover:bg-brand-yellow group-hover:text-black transition-all duration-500 shadow-xl">
          <Icon size={28} />
        </div>
        <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-black mb-2">{label}</p>
        <p className="text-white font-bold text-xl tracking-tight">
          {value}
        </p>
        {href && (
          <div className="mt-4 flex items-center gap-2 text-brand-yellow text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
            Establish Link <ExternalLink size={12} />
          </div>
        )}
      </div>
    </motion.div>
  );

  return href ? <a href={href} className="block">{content}</a> : content;
}

function Field({ id, name, label, placeholder, type = 'text', required, value, onChange }: any) {
  return (
    <div className="space-y-4">
      <label htmlFor={id} className="block text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">
        {label} {required && <span className="text-brand-yellow">*</span>}
      </label>
      <div className="relative">
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 text-white placeholder:text-gray-700 focus:outline-none focus:border-brand-yellow/50 focus:bg-white/[0.08] transition-all shadow-inner"
        />
        <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-brand-yellow/0 to-transparent focus-within:via-brand-yellow/50 transition-all duration-500" />
      </div>
    </div>
  );
}
