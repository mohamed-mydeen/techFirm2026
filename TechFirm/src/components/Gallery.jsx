import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  { url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&auto=format&fit=crop&q=80', title: 'Coding Marathon', span: 'col-span-2 row-span-2' },
  { url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop&q=80', title: 'Tech Talk' },
  { url: 'https://images.unsplash.com/photo-1540575861501-7cf05a4b175a?w=600&auto=format&fit=crop&q=80', title: 'Presentations' },
  { url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80', title: 'Innovation Lab' },
  { url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&auto=format&fit=crop&q=80', title: 'Cyber Security' },
  { url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop&q=80', title: 'Music & Tech' },
  { url: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&auto=format&fit=crop&q=80', title: 'AI & Robotics', span: 'col-span-2' },
];

const Gallery = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="gallery" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="section-label mx-auto w-fit">Gallery</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Captured <span className="gradient-text">Moments</span>
          </h2>
          <p className="text-slate-400">A glimpse into the energy and excitement of TECH FIRM events.</p>
        </div>

        {/* Masonry-like grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[160px] md:auto-rows-[200px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className={`relative overflow-hidden rounded-xl md:rounded-2xl glass border border-white/10 group cursor-pointer ${img.span ? `md:${img.span}` : ''}`}
              onClick={() => setSelected(img)}
            >
              <img src={img.url} alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                <h4 className="text-white font-bold text-xs md:text-sm">{img.title}</h4>
              </div>
              {/* Expand icon */}
              <div className="absolute top-2 right-2 md:top-3 md:right-3 w-7 h-7 md:w-8 md:h-8 rounded-full glass border border-white/20 flex items-center justify-center text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                ⤡
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setSelected(null)}>
            <motion.div initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.85, opacity: 0 }}
              className="relative max-w-4xl w-full" onClick={e => e.stopPropagation()}>
              <img src={selected.url} alt={selected.title} className="w-full rounded-2xl object-cover max-h-[80vh]" />
              <div className="absolute bottom-4 left-4">
                <h4 className="text-white font-bold">{selected.title}</h4>
              </div>
              <button onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-xl glass border border-white/20 flex items-center justify-center text-white">
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
