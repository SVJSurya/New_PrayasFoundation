import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageWrapper from '../components/layout/PageWrapper';
import { contentService } from '../services/contentService';

const images = [
  'photo-1529390079861-591de354faf5',
  'photo-1488521787991-ed7bbaae773c',
  'photo-1524178232363-1fb2b075b655',
  'photo-1573497019940-1c28c88b4f3e',
  'photo-1582213782179-e0d53f98f2ca',
  'photo-1556761175-b413da4baf72',
  'photo-1552664730-d307ca884978',
  'photo-1524661135-423995f22d0b',
];

export default function Gallery() {
  const items = contentService.getGalleryItems();
  const [filter, setFilter] = useState<string>('all');
  const [lightbox, setLightbox] = useState<number | null>(null);
  const categories = ['all', 'training', 'community', 'events', 'team'];

  const filtered = filter === 'all' ? items : items.filter(i => i.category === filter);

  return (
    <PageWrapper
      title="Gallery | Prayas Foundation"
      description="Visual archive of Prayas Foundation's work on the ground — training sessions, community events, and team activities across India."
    >
      {/* Hero */}
      <section className="py-20 bg-[#f4f3f3]" aria-label="Gallery hero">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-xs font-bold text-[#3c5e98] uppercase tracking-[0.2em] mb-4 block">Visual Archive</span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1a1c1c] leading-tight mb-5 tracking-tight">Work on the Ground</h1>
            <p className="text-lg text-[#43474e] max-w-xl mx-auto leading-relaxed">
              A glimpse into the lives we touch, the skills we build, and the communities we serve across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-16 bg-white" aria-label="Gallery grid">
        <div className="container">
          <div className="flex flex-wrap gap-3 mb-10 justify-center">
            {categories.map(cat => (
              <button key={cat} onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all capitalize ${
                  filter === cat ? 'bg-[#00132c] text-white' : 'bg-[#f4f3f3] text-[#43474e] hover:bg-[#e8e8e8]'
                }`}>
                {cat === 'all' ? 'All Photos' : cat}
              </button>
            ))}
          </div>

          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px]" layout>
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                className={`relative group overflow-hidden border border-[#c3c6d0] cursor-pointer ${
                  item.span === 'wide' ? 'col-span-2' : ''
                } ${item.span === 'tall' ? 'row-span-2' : ''}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                onClick={() => setLightbox(i)}
                role="button"
                aria-label={`View: ${item.caption}`}
              >
                <img
                  src={`https://images.unsplash.com/${images[i % images.length]}?w=600&q=80`}
                  alt={item.alt}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#00132c]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-xs font-semibold bg-[#00132c]/75 px-2 py-1">{item.caption}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-4 right-4 text-white w-10 h-10 flex items-center justify-center border border-white/30 hover:bg-white/10"
              aria-label="Close lightbox"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <motion.img
              src={`https://images.unsplash.com/${images[lightbox % images.length]}?w=1200&q=90`}
              alt={filtered[lightbox]?.alt || ''}
              className="max-h-[80vh] max-w-full object-contain"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            />
            <div className="absolute bottom-6 left-0 right-0 text-center">
              <span className="text-white/80 text-sm bg-black/50 px-4 py-2">{filtered[lightbox]?.caption}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageWrapper>
  );
}
