import { motion } from 'framer-motion';
import PageWrapper from '../components/layout/PageWrapper';
import { useAnimatedCounter } from '../hooks/useAnimatedCounter';
import { contentService } from '../services/contentService';

function CounterStat({ value, suffix, label, description }: { value: number; suffix: string; label: string; description: string }) {
  const { count, ref } = useAnimatedCounter(value);
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="text-center p-8 border border-[#c3c6d0] bg-white">
      <div className="text-5xl font-bold text-[#3c5e98] mb-2">{count.toLocaleString('en-IN')}{suffix}</div>
      <div className="text-lg font-semibold text-[#00132c] mb-2">{label}</div>
      <p className="text-sm text-[#43474e] leading-relaxed">{description}</p>
    </div>
  );
}

export default function Impact() {
  const stats = contentService.getImpactStats();
  const projects = contentService.getProjects();
  const completedCount = projects.filter(p => p.status === 'completed').length;
  const ongoingCount = projects.filter(p => p.status === 'ongoing').length;

  return (
    <PageWrapper
      title="Our Impact | Prayas Foundation"
      description="Explore Prayas Foundation's measurable impact — 15,000+ beneficiaries, 250+ skill centers, 8,500 livelihoods created across 12 states of India."
    >
      {/* Hero */}
      <section className="py-20 bg-[#00132c] text-white" aria-label="Impact hero">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-[#f8bd2d] text-xs font-bold uppercase tracking-[0.25em] mb-4 block">Measurable Change</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 tracking-tight leading-tight">Our Institutional Impact</h1>
            <p className="text-lg text-[#aac8f9] max-w-2xl mx-auto leading-relaxed">
              We measure success in lives transformed, skills acquired, and communities empowered. Here's the data behind our mission.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Animated Stats */}
      <section className="py-20 bg-[#f4f3f3]" aria-label="Impact statistics">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
              >
                <CounterStat
                  value={stat.numericValue}
                  suffix={stat.suffix}
                  label={stat.label}
                  description={stat.description}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Progress */}
      <section className="py-20 bg-white" aria-label="Project progress overview">
        <div className="container">
          <div className="mb-14">
            <h2 className="text-3xl font-semibold text-[#1a1c1c] tracking-tight mb-3">Active Initiatives</h2>
            <p className="text-[#43474e]">Real-time progress of our ongoing programs and completed projects.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { label: 'Ongoing Programs', value: ongoingCount, color: 'bg-[#3c5e98]', icon: 'trending_up' },
              { label: 'Completed Projects', value: completedCount, color: 'bg-green-600', icon: 'check_circle' },
              { label: 'States Covered', value: 12, color: 'bg-[#f8bd2d]', icon: 'map', textColor: 'text-[#261a00]' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                className={`${item.color} p-8 text-white`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <span className={`material-symbols-outlined text-4xl mb-3 block ${item.textColor || 'text-white'}`}
                  style={{ fontVariationSettings: "'FILL' 1" }}>
                  {item.icon}
                </span>
                <div className={`text-5xl font-bold ${item.textColor || 'text-white'}`}>{item.value}</div>
                <div className={`text-sm font-semibold mt-1 uppercase tracking-wider ${item.textColor || 'text-white/80'}`}>{item.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Progress bars */}
          <div className="space-y-6">
            {contentService.getProjects().filter(p => p.progress !== undefined).slice(0, 4).map((proj, i) => (
              <motion.div
                key={proj.id}
                className="bg-[#f4f3f3] border border-[#c3c6d0] p-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-[#00132c]">{proj.title}</h3>
                    <p className="text-xs text-[#43474e] mt-0.5">{proj.location} · {proj.beneficiaries}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 font-bold uppercase ${proj.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-[#d5e3ff] text-[#00132c]'}`}>
                    {proj.status}
                  </span>
                </div>
                <div className="w-full bg-[#e3e2e2] h-2">
                  <motion.div
                    className="h-2 bg-[#3c5e98]"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${proj.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.1, ease: 'easeOut' }}
                  />
                </div>
                <div className="text-xs text-[#43474e] mt-1.5 text-right">{proj.progress}% complete</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SDG Goals alignment */}
      <section className="py-20 bg-[#f4f3f3]" aria-label="SDG alignment">
        <div className="container text-center">
          <h2 className="text-3xl font-semibold text-[#1a1c1c] mb-3 tracking-tight">Aligned with National & Global Goals</h2>
          <p className="text-[#43474e] mb-12 max-w-xl mx-auto">Our programs directly contribute to India's Skill India Mission and the UN Sustainable Development Goals.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: 'school', label: 'SDG 4: Quality Education', color: 'text-blue-600' },
              { icon: 'work', label: 'SDG 8: Decent Work & Growth', color: 'text-red-500' },
              { icon: 'reduce_capacity', label: 'SDG 10: Reduced Inequalities', color: 'text-pink-500' },
              { icon: 'handshake', label: 'SDG 17: Partnerships', color: 'text-[#3c5e98]' },
            ].map((sdg, i) => (
              <motion.div
                key={sdg.label}
                className="bg-white border border-[#c3c6d0] p-6 text-center hover:border-[#3c5e98] transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <span className={`material-symbols-outlined text-4xl ${sdg.color} mb-3 block`}
                  style={{ fontVariationSettings: "'FILL' 1" }}>
                  {sdg.icon}
                </span>
                <p className="text-sm font-semibold text-[#00132c] leading-tight">{sdg.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
