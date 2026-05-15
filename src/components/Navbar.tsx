import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../assets/Digi new color logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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
    { name: 'Services', hasDropdown: false, path: '/services' },
    { name: 'Infrastructure', hasDropdown: true, sublinks: [
      { name: 'Global Network', path: '/infrastructure' },
      { name: 'ARMS Modular Systems', path: '/arms' },
      { name: 'AI Infrastructure Model', path: '/demi' },
    ]},
    { name: 'Investors', hasDropdown: true, sublinks: [
      { name: 'SEC Filings', path: '/sec-filings' },
      { name: 'Investor Center', path: '/investors' },
    ]},
    { name: 'Company', hasDropdown: true, sublinks: [
      { name: 'About Us', path: '/about' },
      { name: 'Leadership', path: '/leadership' },
      { name: 'Press Release', path: '/press-release' },
      { name: 'Careers', path: '/careers' },
    ]},
    { name: 'Data Centers', hasDropdown: false, path: '/data-centers' },
    { name: 'NeoCloudz', hasDropdown: false, path: '/neocloudz' },
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
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md shadow-lg py-1' : 'bg-black py-2'} border-b border-white/10`}>
      <div className="max-w-[1800px] mx-auto px-4 md:px-8 flex items-center justify-between gap-4">
        <Link to="/" className="flex-shrink-0">
          <img src={logoImg} alt="DigiPowerX Logo" className="h-10 md:h-12 lg:h-14 w-auto object-contain transition-all duration-300 brightness-0 invert" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-10 flex-shrink-0">
          {navLinks.map(link => {
            if (link.hasDropdown) {
              return (
                <div key={link.name} className="relative group">
                  <button className="nav-link flex items-center gap-1 text-[13px] font-semibold uppercase tracking-widest text-white/70 hover:text-brand-yellow transition-colors py-4">
                    {link.name} <ChevronDown size={12} className="group-hover:rotate-180 transition-transform duration-300" />
                  </button>
                  <div className="absolute top-full left-0 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-[110]">
                    <div className="bg-black/95 border border-white/10 backdrop-blur-xl p-4 min-w-[200px] shadow-2xl flex flex-col gap-3">
                      {link.sublinks?.map(sub => (
                        <Link 
                          key={sub.name} 
                          to={sub.path} 
                          className="text-[11px] font-semibold uppercase tracking-widest text-white/50 hover:text-brand-yellow transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                to={link.path || '#'}
                className="nav-link flex items-center gap-1 text-[13px] font-semibold uppercase tracking-widest text-white/70 hover:text-brand-yellow transition-colors"
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 md:gap-4 flex-shrink-0">
          <button className="hidden xl:block text-[10px] font-semibold tracking-[0.2em] px-5 py-2.5 text-white/60 hover:text-white transition-all border border-white/10 uppercase">
            Investor Relations
          </button>
          <Link to="/contact" className="hidden sm:block bg-brand-yellow text-black px-6 py-2.5 font-semibold text-xs uppercase tracking-widest hover:bg-white transition-all active:scale-95 shadow-lg shadow-brand-yellow/10 whitespace-nowrap">
            Talk to Us
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2.5 bg-brand-yellow text-black rounded-full shadow-xl hover:bg-white transition-all active:scale-90 relative z-[120] flex-shrink-0 flex items-center justify-center"
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
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-[110] lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 h-full w-full sm:w-[85%] max-w-[450px] bg-black z-[115] flex flex-col pt-32 pb-12 px-8 sm:px-12 overflow-y-auto lg:hidden shadow-[-20px_0_50px_rgba(0,0,0,0.5)]"
            >
              {/* Technical Decorative Background */}
              <div className="absolute inset-0 opacity-[0.05] pointer-events-none select-none overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)', backgroundSize: '24px 24px' }} />
              </div>

              <div className="flex flex-col gap-6 sm:gap-8 relative z-10">
                <div className="text-[10px] font-semibold text-white/40 uppercase tracking-[0.4em] mb-4 flex items-center gap-4">
                  <div className="h-[1px] w-8 bg-white/10" /> Navigation
                </div>
                {navLinks.map((link) => (
                  <motion.div variants={itemVariants} key={link.name}>
                    {link.hasDropdown ? (
                      <div className="flex flex-col gap-4">
                        <span className="text-4xl sm:text-5xl font-semibold text-white/30 uppercase tracking-tighter">
                          {link.name}
                        </span>
                        <div className="flex flex-col gap-2 pl-4 border-l border-brand-yellow/20">
                          {link.sublinks?.map(sub => (
                            <Link 
                              key={sub.name}
                              to={sub.path}
                              className="text-2xl sm:text-3xl font-semibold text-white hover:text-brand-yellow transition-all uppercase tracking-tighter"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={link.path || '#'}
                        className="text-4xl sm:text-5xl font-semibold text-white flex items-center justify-between group"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="group-hover:text-brand-yellow transition-all group-hover:translate-x-2 duration-300 uppercase tracking-tighter">
                          {link.name}
                        </span>
                        <ArrowRight size={32} className="text-brand-yellow opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>

              <motion.div
                variants={itemVariants}
                className="mt-auto pt-12 border-t border-white/10 flex flex-col gap-8 relative z-10"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] uppercase tracking-[0.3em] font-semibold text-white/40">Headquarters</span>
                    <span className="text-[11px] font-semibold text-white uppercase">Dallas, Texas</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] uppercase tracking-[0.3em] font-semibold text-white/40">Status</span>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[11px] font-semibold text-white uppercase">Operational</span>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-brand-yellow text-black py-5 font-semibold text-sm uppercase tracking-widest hover:bg-white transition-all active:scale-[0.98]">
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
