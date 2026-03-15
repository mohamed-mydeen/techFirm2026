import React from 'react';
import { motion } from 'framer-motion';

const coordinators = {
  conveners: [
    { name: 'Dr. Velmurugan V', role: 'Principal', type: 'Convener' },
    { name: 'Dr. Gomathi S', role: 'Professor & Head – CSBS', type: 'Convener' },
  ],
  staff: [
    { name: 'Mrs. Evangelin Sneha Michael', role: 'AP/CSBS', type: 'Staff Co-ordinator', phone: '+91 77083 64596' },
  ],
  students: [
    { name: 'Mr. Esakki Anand', role: 'III – CSBS', type: 'Student Co-ordinator', phone: '+91 88387 90512' },
    { name: 'Ms. Jane Vasana Rupavathy J', role: 'III – CSBS', type: 'Student Co-ordinator' },
  ],
};

const CoordinatorCard = ({ person, delay }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }} transition={{ delay }}
    className="glass-card p-5 flex items-start gap-4 group">
    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-600/30 to-pink-600/20 border border-violet-500/30 flex items-center justify-center text-lg shrink-0">
      👤
    </div>
    <div>
      <div className="text-[10px] uppercase tracking-widest text-violet-400 font-bold mb-0.5">{person.type}</div>
      <h4 className="text-white font-bold text-sm">{person.name}</h4>
      <p className="text-slate-400 text-xs mt-0.5">{person.role}</p>
      {person.phone && (
        <a href={`tel:${person.phone.replace(/\s/g, '')}`}
          className="inline-flex items-center gap-1 mt-2 text-xs text-violet-400 hover:text-violet-300 transition-colors font-semibold">
          📞 {person.phone}
        </a>
      )}
    </div>
  </motion.div>
);

const Contact = () => {
  const allCoords = [...coordinators.conveners, ...coordinators.staff, ...coordinators.students];

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="section-label mx-auto w-fit">Get in Touch</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact <span className="gradient-text">Us</span>
          </h2>
          <p className="text-slate-400 max-w-md mx-auto">
            Have questions? Our coordinators are here to help you before and on the day of the event.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — contact cards */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-5">Event Coordinators</h3>
            <div className="grid gap-4">
              {allCoords.map((p, i) => (
                <CoordinatorCard key={p.name} person={p} delay={i * 0.07} />
              ))}
            </div>
          </div>

          {/* Right — quick info + form placeholder */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="glass-card p-8 mb-6">
              <h3 className="text-lg font-bold text-white mb-6">Quick Info</h3>
              {[
                { icon: '📧', label: 'Email', value: 'csbs.techfirm@fxeng.ac.in' },
                { icon: '📞', label: 'Query Helpline', value: '+91 77083 64596' },
                { icon: '📍', label: 'Venue', value: 'APT Auditorium, FXEC' },
                { icon: '📅', label: 'Date', value: 'March 25, 2026 · 9:30 AM – 4:00 PM' },
                { icon: '💰', label: 'Registration Fee', value: '₹200 per participant' },
              ].map(({ icon, label, value }) => (
                <div key={label} className="flex items-start gap-4 py-4 border-b border-white/5 last:border-0">
                  <span className="text-xl">{icon}</span>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-0.5">{label}</div>
                    <div className="text-white font-medium text-sm">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              className="w-full btn-primary justify-center py-4 text-base"
              onClick={() => window.open('https://forms.gle/your-form-link', '_blank')}>
              <span>Register for TECH FIRM 2026</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
