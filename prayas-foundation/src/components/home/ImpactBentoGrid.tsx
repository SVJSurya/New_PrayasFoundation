import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useAnimatedCounter } from '../../hooks/useAnimatedCounter';

interface StatCardProps {
  icon: string;
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
  description: string;
  variant: 'light' | 'navy' | 'gold';
  delay?: number;
}

function StatCard({ icon, numericValue, suffix, label, description, variant, delay = 0 }: StatCardProps) {
  const { count, ref: counterRef } = useAnimatedCounter(numericValue);
  const cardRef = useRef<HTMLDivElement>(null);
  const inView = useInView(cardRef, { once: true, margin: '-60px' });

  const variants = {
    light: 'bg-white border border-[#c3c6d0] text-[#1a1c1c]',
    navy: 'bg-[#00132c] text-white',
    gold: 'bg-[#f8bd2d] text-[#261a00]',
  };

  const iconColor = {
    light: 'text-[#3c5e98]',
    navy: 'text-[#f8bd2d]',
    gold: 'text-[#261a00]',
  };

  const valueColor = {
    light: 'text-[#3c5e98]',
    navy: 'text-[#f8bd2d]',
    gold: 'text-[#261a00]',
  };

  const descColor = {
    light: 'text-[#43474e]',
    navy: 'text-white/75',
    gold: 'text-[#5c4300]',
  };

  return (
    <motion.div
      ref={cardRef}
      className={`bento-card p-8 flex flex-col justify-between min-h-[200px] ${variants[variant]}`}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      <div className="flex justify-between items-start">
        <span className={`material-symbols-outlined text-4xl ${iconColor[variant]}`}
          style={{ fontVariationSettings: "'FILL' 1" }}>
          {icon}
        </span>
        <span
          ref={counterRef as React.RefObject<HTMLSpanElement>}
          className={`text-3xl font-bold leading-none ${valueColor[variant]}`}
        >
          {count.toLocaleString('en-IN')}{suffix}
        </span>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{label}</h3>
        <p className={`text-sm leading-relaxed ${descColor[variant]}`}>{description}</p>
      </div>
    </motion.div>
  );
}

export default function ImpactBentoGrid() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-[#f4f3f3] border-y border-[#c3c6d0]/30"
      id="impact"
      aria-label="Impact statistics"
    >
      <div className="container">
        <div className="mb-14">
          <span className="text-xs text-[#43474e] uppercase tracking-[0.2em] font-semibold">Our Institutional Impact</span>
          <h2 className="text-3xl font-semibold text-[#1a1c1c] mt-2 mb-3 tracking-tight">
            Measurable Change at Scale
          </h2>
          <p className="text-[#43474e] max-w-2xl">
            Through sustained commitment and strategic community partnerships, we deliver outcomes that last a lifetime.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Large card — Education */}
          <div className="md:col-span-2">
            <StatCard
              icon="school"
              value="15,000+"
              numericValue={15000}
              suffix="+"
              label="Education & Literacy"
              description="Quality elementary education and adult literacy programs reaching the heart of rural communities across 8 states."
              variant="light"
              delay={0}
            />
          </div>

          {/* Skill Training */}
          <StatCard
            icon="engineering"
            value="250+"
            numericValue={250}
            suffix="+"
            label="Skill Training Centers"
            description="Vocational training centers equipped with modern labs for industrial and digital skills."
            variant="navy"
            delay={0.1}
          />

          {/* Livelihoods */}
          <StatCard
            icon="payments"
            value="8,500"
            numericValue={8500}
            suffix=""
            label="Livelihoods Created"
            description="Placements and micro-entrepreneurship for youth and self-help groups."
            variant="gold"
            delay={0.2}
          />

          {/* Community Resilience — Large */}
          <motion.div
            className="md:col-span-2 bento-card bg-white border border-[#c3c6d0] p-8 flex flex-col md:flex-row md:items-end justify-between gap-6 overflow-hidden relative"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="z-10">
              <div className="text-3xl font-bold text-[#3c5e98] mb-2">12 States</div>
              <h3 className="text-lg font-semibold text-[#1a1c1c] mb-2">Community Resilience</h3>
              <p className="text-sm text-[#43474e] max-w-sm">
                Driving sustainable development through grassroots initiatives and localized empowerment models across India.
              </p>
            </div>
            <Link
              to="/impact"
              className="flex-shrink-0 flex items-center gap-2 text-[#3c5e98] font-bold text-sm uppercase tracking-wider hover:gap-3 transition-all group z-10"
            >
              Explore Data
              <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
            {/* Decorative background icon */}
            <div className="absolute right-0 bottom-0 opacity-[0.04] pointer-events-none select-none">
              <span className="material-symbols-outlined text-[200px]">trending_up</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
