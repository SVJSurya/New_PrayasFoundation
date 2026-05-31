import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/layout/PageWrapper';
import { contentService } from '../services/contentService';

function ProgramsHero() {
  return (
    <section className="bg-[#00132c] py-20 text-white relative overflow-hidden" aria-label="Programs hero">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#f8bd2d] rounded-full blur-3xl -mr-48 -mt-48" />
      </div>
      <div className="container text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="text-[#f8bd2d] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">What We Offer</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
            Empowering Progress Through Partnership
          </h1>
          <p className="text-lg text-[#aac8f9] max-w-2xl mx-auto mb-10 leading-relaxed">
            We design and implement scalable solutions across public and private sectors to build resilient communities and a skilled workforce.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#govt" className="bg-[#f8bd2d] text-[#00132c] px-7 py-3.5 rounded text-sm font-bold uppercase tracking-wider hover:bg-[#ffdea0] transition-colors">
              Explore Public Sector
            </a>
            <a href="#csr" className="border border-[#aac8f9] text-[#aac8f9] px-7 py-3.5 rounded text-sm font-bold uppercase tracking-wider hover:bg-white/10 transition-colors">
              View CSR Works
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function GovernmentProjects() {
  const govPrograms = contentService.getProgramsByCategory('government');
  const images = [
    'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=700&q=80',
    'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80',
  ];

  return (
    <section className="py-24 bg-white" id="govt" aria-label="Government projects">
      <div className="container">
        <div className="mb-14">
          <span className="text-[#f8bd2d] text-sm font-bold uppercase tracking-[0.2em]">Public Sector Partnership</span>
          <h2 className="text-3xl font-semibold text-[#00132c] mt-2 mb-1 tracking-tight">Governmental Strategic Initiatives</h2>
          <div className="w-16 h-1 bg-[#f8bd2d] mt-4" />
        </div>
        <div className="space-y-20">
          {govPrograms.map((prog, i) => (
            <motion.div
              key={prog.id}
              className={`grid grid-cols-1 md:grid-cols-2 gap-14 items-center`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className={i % 2 !== 0 ? 'md:order-2' : ''}>
                <h3 className="text-2xl font-semibold text-[#00132c] mb-4">{prog.title}</h3>
                <p className="text-[#43474e] mb-6 leading-relaxed">{prog.description}</p>
                <div className="flex flex-wrap gap-3">
                  <span className="flex items-center gap-2 text-sm text-[#00132c] font-semibold">
                    <span className="material-symbols-outlined text-[#f8bd2d] text-base">people</span>
                    {prog.participants}
                  </span>
                  {prog.duration && (
                    <span className="flex items-center gap-2 text-sm text-[#00132c] font-semibold">
                      <span className="material-symbols-outlined text-[#f8bd2d] text-base">schedule</span>
                      {prog.duration}
                    </span>
                  )}
                </div>
              </div>
              <div className={`aspect-video bg-[#e3e2e2] overflow-hidden border border-[#c3c6d0] shadow-lg ${i % 2 !== 0 ? 'md:order-1' : ''}`}>
                <img src={images[i % images.length]} alt={prog.title} className="w-full h-full object-cover" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CSRSection() {
  const csrPrograms = contentService.getProgramsByCategory('csr');
  return (
    <section className="py-24 bg-[#f4f3f3] border-y border-[#c3c6d0]" id="csr" aria-label="CSR initiatives">
      <div className="container">
        <div className="text-center mb-14">
          <span className="text-[#f8bd2d] text-sm font-bold uppercase tracking-[0.2em]">Corporate Responsibility</span>
          <h2 className="text-3xl font-semibold text-[#00132c] mt-2 tracking-tight">CSR Strategic Partnerships</h2>
          <p className="text-[#43474e] mt-3 max-w-xl mx-auto">Connecting corporate ambition with community needs through measurable, high-impact social programs.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {csrPrograms.map((prog, i) => (
            <motion.div
              key={prog.id}
              className="bg-white p-8 border-b-4 border-[#f8bd2d] shadow-sm hover:shadow-md transition-shadow group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-12 h-12 bg-[#002850] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[#f8bd2d]">{prog.icon}</span>
              </div>
              <h4 className="text-xl font-semibold text-[#00132c] mb-3">{prog.title}</h4>
              <p className="text-sm text-[#43474e] mb-5 leading-relaxed">{prog.description}</p>
              <Link to="/contact" className="text-[#00132c] text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                Get in Touch <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillTraining() {
  const vocationalPrograms = contentService.getProgramsByCategory('vocational');
  const otherPrograms = contentService.getPrograms().filter(p => ['digital', 'women', 'education'].includes(p.category));
  const allProgs = [...vocationalPrograms.slice(0, 2), ...otherPrograms.slice(0, 2)];

  return (
    <section className="py-24 bg-white" id="skills" aria-label="Skill development programs">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6">
          <div className="max-w-2xl">
            <span className="text-[#f8bd2d] text-sm font-bold uppercase tracking-[0.2em]">Vocational Track</span>
            <h2 className="text-3xl font-semibold text-[#00132c] mt-2 tracking-tight">Professional Skill Development</h2>
          </div>
          <a href="mailto:contact@prayasfoundation.org?subject=Brochure Request" className="border-2 border-[#00132c] text-[#00132c] px-6 py-3 rounded text-sm font-bold hover:bg-[#00132c] hover:text-white transition-colors flex-shrink-0">
            Download Brochure
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {allProgs[0] && (
            <motion.div
              className="md:col-span-2 bg-white border border-[#c3c6d0] p-8 flex flex-col hover:shadow-lg transition-shadow relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#f8bd2d]/5 -mr-12 -mt-12 rounded-full group-hover:scale-150 transition-transform duration-500" />
              <div className="flex justify-between items-start mb-6">
                <span className="bg-[#00132c] text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">{allProgs[0].categoryLabel}</span>
                <span className="material-symbols-outlined text-[#f8bd2d]">workspace_premium</span>
              </div>
              <h3 className="text-xl font-semibold text-[#00132c] mb-3">{allProgs[0].title}</h3>
              <p className="text-sm text-[#43474e] leading-relaxed flex-grow">{allProgs[0].description}</p>
              <div className="mt-8 pt-6 border-t border-[#c3c6d0] flex justify-between items-center">
                <div>
                  <span className="text-xs text-[#3c5e98] uppercase tracking-wider font-semibold">Duration</span>
                  <p className="font-bold text-[#00132c]">{allProgs[0].duration}</p>
                </div>
                <Link to="/contact" className="text-[#00132c] font-bold text-sm hover:underline underline-offset-4">Enroll Now</Link>
              </div>
            </motion.div>
          )}
          {allProgs.slice(1, 4).map((prog, i) => (
            <motion.div
              key={prog.id}
              className="bg-white border border-[#c3c6d0] p-7 flex flex-col hover:shadow-lg transition-shadow group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: (i + 1) * 0.1 }}
            >
              <div className="w-10 h-10 bg-[#f4f3f3] flex items-center justify-center mb-5 group-hover:bg-[#00132c] group-hover:text-white transition-colors">
                <span className="material-symbols-outlined group-hover:text-[#f8bd2d] transition-colors">{prog.icon}</span>
              </div>
              <h3 className="font-semibold text-[#00132c] mb-2">{prog.title}</h3>
              <p className="text-sm text-[#43474e] flex-grow leading-relaxed">{prog.description}</p>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-xs bg-[#e8e8e8] text-[#00132c] px-2 py-1">{prog.duration || 'Ongoing'}</span>
              </div>
            </motion.div>
          ))}
          {/* Full-width CTA card */}
          <motion.div
            className="md:col-span-4 bg-[#00132c] p-10 text-white flex flex-col md:flex-row items-center gap-8 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.4 }}
          >
            <div className="flex-grow">
              <h3 className="text-2xl font-semibold mb-2">Custom Vocational Tracks for Organizations</h3>
              <p className="text-white/75 max-w-3xl text-sm leading-relaxed">Need a bespoke training curriculum? We design specialized programs tailored to specific departmental needs with a focus on institutional excellence and measurable outcomes.</p>
            </div>
            <Link to="/contact" className="bg-[#f8bd2d] text-[#00132c] px-8 py-4 rounded text-sm font-bold uppercase tracking-wider hover:bg-[#ffdea0] transition-colors whitespace-nowrap flex-shrink-0">
              Schedule Consultation
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function Programs() {
  return (
    <PageWrapper
      title="Programs | Prayas Foundation"
      description="Explore Prayas Foundation's vocational training, digital literacy, women empowerment, government projects, and CSR skill development programs."
    >
      <ProgramsHero />
      <GovernmentProjects />
      <CSRSection />
      <SkillTraining />
    </PageWrapper>
  );
}
