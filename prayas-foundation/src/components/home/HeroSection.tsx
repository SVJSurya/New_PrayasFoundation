import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#faf9f9] py-20 md:py-28"
      id="hero"
      aria-label="Hero section"
    >
      {/* Background decorative blobs */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#3c5e98]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-20 w-72 h-72 bg-[#f8bd2d]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Text Content */}
        <motion.div
          className="order-2 lg:order-1"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="inline-block py-1 px-3 bg-[#ffdea0] text-[#261a00] text-xs font-bold rounded-sm tracking-[0.15em] uppercase mb-6">
            Empowering Futures
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-[3.2rem] font-bold text-[#1a1c1c] leading-[1.12] tracking-tight mb-6 max-w-xl">
            Empowering Communities.{' '}
            <span className="text-[#3c5e98]">Building Skills.</span>{' '}
            Transforming Lives.
          </h1>
          <p className="text-lg text-[#43474e] leading-relaxed mb-10 max-w-lg">
            Bridging the gap between opportunity and aspiration for youth, women, and underserved communities across 12 states of India.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/impact"
              className="bg-[#00132c] text-white px-8 py-3.5 rounded text-sm font-bold tracking-wide uppercase hover:bg-[#002850] transition-colors duration-200"
            >
              Discover Our Impact
            </Link>
            <Link
              to="/programs"
              className="border border-[#74777f] text-[#3c5e98] px-8 py-3.5 rounded text-sm font-bold tracking-wide hover:bg-[#f4f3f3] transition-colors duration-200"
            >
              View Programs
            </Link>
          </div>

          {/* Quick stats row */}
          <div className="flex flex-wrap gap-8 mt-12 pt-10 border-t border-[#c3c6d0]">
            {[
              { value: '15,000+', label: 'Beneficiaries' },
              { value: '250+', label: 'Skill Centers' },
              { value: '12', label: 'States' },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="text-2xl font-bold text-[#3c5e98]">{value}</div>
                <div className="text-xs text-[#43474e] uppercase tracking-wider mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className="relative order-1 lg:order-2"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
        >
          <div className="aspect-[4/3] rounded-sm overflow-hidden border border-[#c3c6d0] bg-[#e3e2e2] relative">
            <img
              src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&q=80"
              alt="Prayas Foundation skill development training session with youth"
              className="w-full h-full object-cover"
              loading="eager"
            />
            {/* Overlay card */}
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm border border-[#c3c6d0] p-4 max-w-[200px]">
              <div className="text-2xl font-bold text-[#3c5e98] leading-none">8,500</div>
              <div className="text-xs text-[#43474e] mt-1">Livelihoods created this year</div>
            </div>
          </div>
          {/* Decorative gold accent */}
          <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#f8bd2d]/20 border-2 border-[#f8bd2d]/40 -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
