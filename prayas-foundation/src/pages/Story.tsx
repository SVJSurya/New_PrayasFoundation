import { motion } from 'framer-motion';
import PageWrapper from '../components/layout/PageWrapper';
import TestimonialsCarousel from '../components/story/TestimonialsCarousel';
import NewsSection from '../components/story/NewsSection';
import { contentService } from '../services/contentService';

function StoryHero() {
  return (
    <section className="py-20 bg-[#f4f3f3]" aria-label="Our story hero">
      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-bold text-[#3c5e98] uppercase tracking-[0.2em] mb-4 block">Our Story</span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a1c1c] leading-tight mb-6 tracking-tight">
            Tracing a Legacy of <span className="text-[#00132c]">Quiet Impact</span>
          </h1>
          <p className="text-lg text-[#43474e] max-w-2xl leading-relaxed">
            Since 2010, Prayas Foundation has prioritized structural change over superficial visibility. Our story is not written in press releases, but in the enduring resilience of the communities we serve.
          </p>
        </motion.div>
        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="aspect-square bg-[#e3e2e2] overflow-hidden border border-[#c3c6d0] p-3">
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80"
              alt="Prayas Foundation team collaboration"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MasonryGallery() {
  const items = contentService.getGalleryItems();
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

  return (
    <section className="py-20 bg-[#f4f3f3]" id="gallery" aria-label="Photo gallery">
      <div className="container">
        <div className="text-center mb-14">
          <span className="text-xs text-[#3c5e98] font-bold uppercase tracking-[0.2em] mb-3 block">Visual Archive</span>
          <h2 className="text-3xl font-semibold text-[#1a1c1c] tracking-tight">Work on the Ground</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[180px]">
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              className={`relative group overflow-hidden border border-[#c3c6d0] ${item.span === 'wide' ? 'col-span-2' : ''} ${item.span === 'tall' ? 'row-span-2' : ''}`}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
            >
              <img
                src={`https://images.unsplash.com/${images[i % images.length]}?w=600&q=80`}
                alt={item.alt}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#00132c]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-xs font-semibold bg-[#00132c]/70 px-2 py-1">{item.caption}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Story() {
  return (
    <PageWrapper
      title="Our Story | Prayas Foundation"
      description="Discover the story of Prayas Foundation — success stories, testimonials from beneficiaries, visual archive, and press coverage."
    >
      <StoryHero />
      <TestimonialsCarousel />
      <MasonryGallery />
      <NewsSection />
    </PageWrapper>
  );
}
