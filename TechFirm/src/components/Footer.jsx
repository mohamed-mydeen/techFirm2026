import React from 'react';
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaYoutube, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-scroll';

const socials = [
  { icon: <FaInstagram />, href: '#' },
  { icon: <FaLinkedinIn />, href: '#' },
  { icon: <FaFacebookF />, href: '#' },
  { icon: <FaTwitter />, href: '#' },
  { icon: <FaYoutube />, href: '#' },
];

const Footer = () => {
  return (
    <footer className="border-t border-white/5 pt-16 pb-8 relative overflow-hidden bg-[#030308]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center font-display font-bold text-sm glow-purple">
                TF
              </div>
              <div>
                <div className="font-display font-bold text-sm tracking-widest text-white">TECH FIRM</div>
                <div className="text-[9px] font-bold tracking-[0.3em] text-violet-400">2026</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              National Level Technical Symposium organized by the Department of Computer Science and Business Systems, Francis Xavier Engineering College.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ icon, href }, i) => (
                <a key={i} href={href}
                  className="w-9 h-9 rounded-full glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-violet-500/40 hover:bg-violet-600/10 transition-all text-sm">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-slate-500 font-bold mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Events', 'Gallery', 'Contact'].map(item => (
                <li key={item}>
                  <Link to={item.toLowerCase()} smooth duration={600} offset={-80}
                    className="text-slate-400 hover:text-white text-sm transition-colors cursor-pointer flex items-center gap-2 group">
                    <span className="w-0 h-px bg-violet-500 transition-all group-hover:w-4" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Event info */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-slate-500 font-bold mb-5">Event Details</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              {[
                ['📅', 'March 25, 2026'],
                ['🕘', '9:30 AM – 4:00 PM'],
                ['📍', 'APT Auditorium'],
                ['🏛️', 'FXEC, Tirunelveli'],
                ['💰', '₹200 Registration Fee'],
              ].map(([icon, text]) => (
                <li key={text} className="flex items-center gap-2">
                  <span>{icon}</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-600 text-xs">
          <p>© 2026 Dept. of CSBS · Francis Xavier Engineering College, Tirunelveli</p>
          <p>Designed with ❤️ by CSBS Students</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
