import { useState } from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/layout/PageWrapper';
import { contentService } from '../services/contentService';

export default function Projects() {
  const projects = contentService.getProjects();
  const [filter, setFilter] = useState<string>('all');
  const categories = ['all', 'Government', 'Women Empowerment', 'Vocational', 'CSR', 'Environment'];
  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <PageWrapper
      title="Projects | Prayas Foundation"
      description="Explore Prayas Foundation's ongoing and completed development projects across India — from government skill programs to CSR initiatives."
    >
      {/* Hero */}
      <section className="py-20 bg-[#f4f3f3]" aria-label="Projects hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-xs font-bold text-[#3c5e98] uppercase tracking-[0.2em] mb-4 block">What We Build</span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#00132c] leading-tight mb-5 tracking-tight max-w-2xl">
              Projects Driving Community Change
            </h1>
            <p className="text-lg text-[#43474e] max-w-xl leading-relaxed">
              From rural literacy drives to industrial upskilling — every project is designed with precision, accountability, and long-term impact in mind.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-16 bg-white" aria-label="Projects list">
        <div className="container">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                  filter === cat
                    ? 'bg-[#00132c] text-white'
                    : 'bg-[#f4f3f3] text-[#43474e] hover:bg-[#e8e8e8]'
                }`}
              >
                {cat === 'all' ? 'All Projects' : cat}
              </button>
            ))}
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((proj, i) => (
              <motion.div
                key={proj.id}
                className="border border-[#c3c6d0] bg-white group hover:border-[#3c5e98] transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                layout
              >
                <div className="p-7">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs bg-[#f4f3f3] text-[#43474e] px-2 py-1 font-semibold">{proj.category}</span>
                    <span className={`text-xs px-2 py-1 font-bold uppercase ${
                      proj.status === 'completed' ? 'bg-green-100 text-green-700' :
                      proj.status === 'upcoming' ? 'bg-amber-100 text-amber-700' :
                      'bg-[#d5e3ff] text-[#00132c]'
                    }`}>
                      {proj.status}
                    </span>
                  </div>
                  <h3 className="font-semibold text-[#00132c] mb-2 group-hover:text-[#3c5e98] transition-colors leading-snug">{proj.title}</h3>
                  <p className="text-sm text-[#43474e] mb-5 leading-relaxed line-clamp-3">{proj.description}</p>
                  <div className="text-xs text-[#43474e] space-y-1.5">
                    <div className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-[#3c5e98]">location_on</span>{proj.location}</div>
                    <div className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-[#3c5e98]">people</span>{proj.beneficiaries}</div>
                    {proj.year && <div className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-[#3c5e98]">calendar_today</span>{proj.year}</div>}
                  </div>
                  {proj.progress !== undefined && (
                    <div className="mt-5">
                      <div className="flex justify-between text-xs text-[#43474e] mb-1.5">
                        <span>Progress</span><span className="font-semibold">{proj.progress}%</span>
                      </div>
                      <div className="w-full bg-[#e3e2e2] h-1.5">
                        <motion.div
                          className="h-1.5 bg-[#3c5e98]"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${proj.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
