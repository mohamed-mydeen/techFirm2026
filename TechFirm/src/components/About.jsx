import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '10+', label: 'Events' },
  { value: '₹200', label: 'Reg. Fee' },
  { value: '100+', label: 'Expected Participants' },
  { value: '9:30 AM', label: 'Start Time' },
];

const About = () => {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      {/* bg accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/8 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-600/8 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="section-label">About the Event</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Where Innovation <br />
              <span className="gradient-text">Meets Excellence</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              <strong className="text-white">TECH FIRM 2026</strong> is the flagship national-level technical symposium
              organized by the Department of Computer Science and Business Systems at
              Francis Xavier Engineering College, Tirunelveli.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              This annual extravaganza brings together brilliant minds from colleges across the country
              to compete, collaborate, and celebrate technology. From intense coding battles to creative
              non-technical challenges — there's something for everyone.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => window.open('https://forms.gle/your-form-link', '_blank')}
                className="btn-primary">
                <span>Register Now</span>
              </button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-5">
            {stats.map(({ value, label }, i) => (
              <motion.div key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass-card p-8 text-center group cursor-default gradient-border">
                <div className="font-display text-4xl font-bold gradient-text mb-2">{value}</div>
                <div className="text-sm text-slate-400 font-medium">{label}</div>
              </motion.div>
            ))}

            {/* Feature card */}
            <motion.div
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              viewport={{ once: true }}
              className="col-span-2 glass-card p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 blur-3xl rounded-full" />
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600/20 to-pink-600/20 border border-violet-500/30 flex items-center justify-center text-2xl shrink-0">
                  🏆
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Cash Prizes Await!</h3>
                  <p className="text-sm text-slate-400">Win exciting prizes across all competitive events. Top performers receive certificates and cash rewards.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
