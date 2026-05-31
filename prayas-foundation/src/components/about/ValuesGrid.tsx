import { motion } from 'framer-motion';

const pillars = [
  {
    id: 'reliability',
    icon: 'shield_with_heart',
    title: 'Institutional Reliability',
    description: 'We maintain the highest standards of governance and transparency. Our stakeholders trust us because we demonstrate unwavering consistency in operations and ethical frameworks.',
    span: 'wide',
    variant: 'light',
  },
  {
    id: 'authority',
    icon: 'insights',
    title: 'Evidence-Based Action',
    description: 'Decisions driven by data and expertise. We cultivate a culture of continuous learning and evidence-based strategies.',
    span: 'narrow',
    variant: 'dark',
  },
  {
    id: 'efficiency',
    icon: 'bolt',
    title: 'Modern Efficiency',
    description: 'Eliminating waste through lean methodologies and digital transformation — maximizing every rupee of impact.',
    span: 'narrow',
    variant: 'light',
  },
  {
    id: 'reach',
    icon: 'language',
    title: 'Local Roots, National Scale',
    description: 'A network spanning 12 states while maintaining precise focus on individual community needs.',
    span: 'wide',
    variant: 'surface',
  },
];

export default function ValuesGrid() {
  return (
    <section className="bg-[#f4f3f3] py-24" aria-label="Our foundational pillars">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-semibold text-[#00132c] mb-3 tracking-tight">Our Foundational Pillars</h2>
          <p className="text-[#43474e] max-w-2xl mx-auto">
            The principles that guide every decision, from strategic planning to grassroots implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => {
            const isWide = pillar.span === 'wide';
            const isDark = pillar.variant === 'dark';
            const isSurface = pillar.variant === 'surface';

            return (
              <motion.div
                key={pillar.id}
                className={`p-10 border transition-colors duration-300 ${
                  isWide ? 'md:col-span-2' : ''
                } ${
                  isDark
                    ? 'bg-[#00132c] border-[#00132c] text-white'
                    : isSurface
                    ? 'bg-[#eeeeed] border-[#c3c6d0]'
                    : 'bg-white border-[#c3c6d0] hover:border-[#3c5e98]'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
              >
                <span
                  className={`material-symbols-outlined text-4xl mb-6 block ${
                    isDark ? 'text-[#f8bd2d]' : 'text-[#3c5e98]'
                  }`}
                  style={{ fontVariationSettings: isDark ? "'FILL' 1" : "'FILL' 0" }}
                >
                  {pillar.icon}
                </span>
                <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-[#00132c]'}`}>
                  {pillar.title}
                </h3>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-white/75' : 'text-[#43474e]'}`}>
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
