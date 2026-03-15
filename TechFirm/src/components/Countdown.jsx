import React from 'react';
import { motion } from 'framer-motion';
import { useCountdown, pad } from '../hooks/useCountdown';

const Countdown = () => {
  const time = useCountdown();

  const units = [
    { label: 'Days', value: time.days },
    { label: 'Hours', value: time.hours },
    { label: 'Minutes', value: time.minutes },
    { label: 'Seconds', value: time.seconds },
  ];

  return (
    <section id="countdown-section" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/20 to-transparent pointer-events-none" />
      <div className="max-w-5xl mx-auto px-6 text-center relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="section-label mx-auto w-fit">
            <span>⏳</span> Countdown to March 25
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
            Event Begins In
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {units.map(({ label, value }, i) => (
            <motion.div key={label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative glass-card p-6 text-center group overflow-hidden gradient-border">
              {/* Shimmer */}
              <div className="absolute inset-0 shimmer rounded-[1.25rem] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="font-display text-5xl md:text-6xl font-bold gradient-text mb-2">
                  {pad(value)}
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-slate-500 font-bold">{label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countdown;
