import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { useCountdown, pad } from '../hooks/useCountdown';

const navLinks = ['Home', 'About', 'Events', 'Gallery', 'Contact'];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showNavCountdown, setShowNavCountdown] = useState(false);
  const time = useCountdown();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Show countdown in navbar once user scrolls past the countdown section
      const section = document.getElementById('countdown-section');
      if (section) {
        const rect = section.getBoundingClientRect();
        setShowNavCountdown(rect.bottom < 0);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'py-2 glass-strong' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.a href="#home" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
          className="flex items-center gap-3 cursor-pointer">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center font-display font-bold text-sm glow-purple">
              TF
            </div>
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-violet-600/30 to-pink-600/30 blur-md -z-10"></div>
          </div>
          <div>
            <div className="font-display font-700 text-sm tracking-widest text-white">TECH FIRM</div>
            <div className="text-[9px] font-semibold tracking-[0.3em] text-violet-400 -mt-0.5">2026</div>
          </div>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((item, i) => (
            <motion.div key={item} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 + 0.2 }}>
              <Link to={item.toLowerCase()} smooth duration={600} offset={-80}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer group relative">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-violet-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Right side — countdown + register */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Compact Navbar Countdown — glass-card style like main section */}
          <AnimatePresence>
            {showNavCountdown && !time.ended && (
              <motion.div
                initial={{ opacity: 0, x: 20, width: 0 }}
                animate={{ opacity: 1, x: 0, width: 'auto' }}
                exit={{ opacity: 0, x: 20, width: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="flex items-center gap-2 overflow-hidden"
              >
                {[
                  { v: time.days, l: 'Days' },
                  { v: time.hours, l: 'Hrs' },
                  { v: time.minutes, l: 'Min' },
                  { v: time.seconds, l: 'Sec' },
                ].map(({ v, l }, i) => (
                  <React.Fragment key={l}>
                    <div className="glass-card !rounded-lg !p-0 px-3 py-1.5 text-center min-w-[52px] !border-violet-500/20 hover:!transform-none">
                      <div className="font-display text-base font-bold gradient-text tabular-nums leading-tight">{pad(v)}</div>
                      <div className="text-[8px] uppercase tracking-[0.15em] text-slate-500 font-bold">{l}</div>
                    </div>
                    {i < 3 && <span className="text-violet-500/50 font-bold text-sm">:</span>}
                  </React.Fragment>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Register Btn */}
          <motion.button initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            className="btn-primary flex items-center gap-2 text-sm py-2.5 px-6">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSd_ErsEwmcJnvwMgn_fd1-NA49tWMYY0AD0eYNgo1VhooLNkA/viewform"><span>Register Now</span></a>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </motion.button>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl glass border border-white/10">
          <span className={`block w-5 h-px bg-white transition-all ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-5 h-px bg-white transition-all ${mobileOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-5 h-px bg-white transition-all ${mobileOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {/* Compact Countdown for mobile — glass-card style below navbar */}
      <AnimatePresence>
        {showNavCountdown && !time.ended && scrolled && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden border-t border-white/5"
          >
            <div className="flex items-center justify-center gap-2 py-2.5 px-4">
              {[
                { v: time.days, l: 'Days' },
                { v: time.hours, l: 'Hrs' },
                { v: time.minutes, l: 'Min' },
                { v: time.seconds, l: 'Sec' },
              ].map(({ v, l }, i) => (
                <React.Fragment key={l}>
                  <div className="glass-card !rounded-lg !p-0 px-3 py-1.5 text-center min-w-[48px] !border-violet-500/20 hover:!transform-none">
                    <div className="font-display text-sm font-bold gradient-text tabular-nums leading-tight">{pad(v)}</div>
                    <div className="text-[7px] uppercase tracking-[0.15em] text-slate-500 font-bold">{l}</div>
                  </div>
                  {i < 3 && <span className="text-violet-500/50 font-bold text-xs">:</span>}
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-strong border-t border-white/10 overflow-hidden">
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map(item => (
                <Link key={item} to={item.toLowerCase()} smooth duration={600} offset={-80}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-semibold text-slate-200 hover:text-violet-400 transition-colors cursor-pointer">
                  {item}
                </Link>
              ))}
              <button className="btn-primary mt-2"><span>Register Now</span></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
