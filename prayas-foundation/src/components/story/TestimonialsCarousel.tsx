import { useState, useRef } from 'react';
import { contentService } from '../../services/contentService';

export default function TestimonialsCarousel() {
  const testimonials = contentService.getTestimonials();
  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    const next = Math.max(0, Math.min(testimonials.length - 1, current + dir));
    setCurrent(next);
    const el = containerRef.current;
    if (el) {
      const cardWidth = el.offsetWidth;
      el.scrollTo({ left: next * cardWidth, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-white" id="testimonials" aria-label="Success stories">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-xs text-[#3c5e98] font-bold uppercase tracking-[0.2em] mb-3 block">Impact Testimony</span>
            <h2 className="text-3xl font-semibold text-[#1a1c1c] tracking-tight">Voices of Resilience</h2>
          </div>
          <div className="flex gap-3 mt-6 md:mt-0">
            <button
              onClick={() => scroll(-1)}
              disabled={current === 0}
              aria-label="Previous testimonial"
              className="w-11 h-11 rounded-full border border-[#c3c6d0] text-[#1a1c1c] flex items-center justify-center hover:bg-[#00132c] hover:text-white hover:border-[#00132c] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <span className="material-symbols-outlined text-lg">arrow_back</span>
            </button>
            <button
              onClick={() => scroll(1)}
              disabled={current === testimonials.length - 1}
              aria-label="Next testimonial"
              className="w-11 h-11 rounded-full border border-[#c3c6d0] text-[#1a1c1c] flex items-center justify-center hover:bg-[#00132c] hover:text-white hover:border-[#00132c] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </button>
          </div>
        </div>

        <div
          ref={containerRef}
          className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory gap-6"
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="min-w-full md:min-w-[680px] snap-center bg-white border border-[#c3c6d0] p-8 md:p-12 flex flex-col md:flex-row gap-8"
            >
              <div className="w-28 h-28 flex-shrink-0 bg-[#e3e2e2] overflow-hidden border border-[#c3c6d0]">
                <img
                  src={`https://images.unsplash.com/photo-${t.id === 'testimonial-1' ? '1507003211169-0a1dd7228f2d' : t.id === 'testimonial-2' ? '1494790108377-be9c29b29330' : t.id === 'testimonial-3' ? '1472099645785-5658abf4ff4e' : '1529626455594-4ff0802cfb7e'}?w=200&q=80`}
                  alt={t.name}
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div className="flex flex-col">
                <span
                  className="material-symbols-outlined text-[#00132c] text-5xl mb-3"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  format_quote
                </span>
                <p className="text-lg font-semibold italic text-[#43474e] mb-6 leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="mt-auto">
                  <h4 className="font-bold text-[#1a1c1c] text-sm">{t.name}</h4>
                  <p className="text-[#3c5e98] text-xs mt-0.5">{t.role}, {t.organization}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="flex gap-2 justify-center mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setCurrent(i); scroll(i - current); }}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-[#3c5e98] w-6' : 'bg-[#c3c6d0]'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
