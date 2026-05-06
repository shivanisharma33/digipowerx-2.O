import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/Digi new color logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Services', hasDropdown: true },
    { name: 'Infrastructure', hasDropdown: false },
    { name: 'Data Centers', hasDropdown: false },
    { name: 'NeoCloudz', hasDropdown: false },
    { name: 'About', hasDropdown: false },
    { name: 'Contact', hasDropdown: false },
  ];

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${scrolled ? 'bg-brand-cream/90 backdrop-blur-md shadow-lg py-2' : 'bg-brand-cream py-3'} border-b border-gray-200`}>
      <div className="max-w-[1800px] mx-auto px-4 md:px-8 flex items-center justify-between gap-4">
        <div className="flex-shrink-0">
          <img src={logoImg} alt="DigiPowerX Logo" className="h-12 md:h-14 lg:h-16 w-auto object-contain transition-all duration-300" />
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-10 flex-shrink-0">
          {navLinks.map(link => (
            <a key={link.name} href="#" className="nav-link flex items-center gap-1 text-[13px] font-bold uppercase tracking-widest hover:text-brand-yellow transition-colors">
              {link.name} {link.hasDropdown && <ChevronDown size={12} />}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 md:gap-4 flex-shrink-0">
          <button className="hidden xl:block text-[10px] font-black tracking-[0.2em] px-5 py-2.5 hover:bg-white transition-all border border-gray-200 uppercase">
            Investor Relations
          </button>
          <button className="hidden sm:block bg-brand-dark text-white px-6 py-2.5 font-bold text-xs uppercase tracking-widest hover:bg-gray-800 transition-all active:scale-95 shadow-lg shadow-brand-dark/10 whitespace-nowrap">
            Talk to Us
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2.5 bg-brand-dark text-white rounded-full shadow-xl hover:bg-gray-900 transition-all active:scale-90 relative z-[120] flex-shrink-0 flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={20} strokeWidth={3} /> : <Menu size={20} strokeWidth={3} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-brand-dark/60 backdrop-blur-md z-[110] lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 h-full w-full sm:w-[85%] max-w-[450px] bg-brand-cream/95 backdrop-blur-2xl z-[115] flex flex-col pt-32 pb-12 px-8 sm:px-12 overflow-y-auto lg:hidden shadow-[-20px_0_50px_rgba(0,0,0,0.1)]"
            >
              {/* Technical Decorative Background */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #000 1px, transparent 0)', backgroundSize: '24px 24px' }} />
              </div>

              <div className="flex flex-col gap-6 sm:gap-8 relative z-10">
                <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] mb-4 flex items-center gap-4">
                  <div className="h-[1px] w-8 bg-gray-200" /> Navigation
                </div>
                {navLinks.map((link) => (
                  <motion.a
                    variants={itemVariants}
                    key={link.name}
                    href="#"
                    className="text-4xl sm:text-5xl font-black text-brand-dark flex items-center justify-between group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="group-hover:text-brand-yellow transition-all group-hover:translate-x-2 duration-300 uppercase tracking-tighter italic">
                      {link.name}
                    </span>
                    <ArrowRight size={32} className="text-brand-yellow opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </motion.a>
                ))}
              </div>

              <motion.div
                variants={itemVariants}
                className="mt-auto pt-12 border-t border-gray-200/50 flex flex-col gap-8 relative z-10"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] uppercase tracking-[0.3em] font-black text-gray-400">Headquarters</span>
                    <span className="text-[11px] font-bold text-brand-dark uppercase">Dallas, Texas</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] uppercase tracking-[0.3em] font-black text-gray-400">Status</span>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[11px] font-bold text-brand-dark uppercase">Operational</span>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-brand-dark text-white py-5 font-black text-sm uppercase tracking-widest hover:bg-gray-800 transition-all active:scale-[0.98]">
                  Talk to Our Team
                </button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </nav>
  );
};

export default Navbar;
