import PageWrapper from '../components/layout/PageWrapper';
import HeroSection from '../components/home/HeroSection';
import ImpactBentoGrid from '../components/home/ImpactBentoGrid';
import PartnersSection from '../components/home/PartnersSection';
import NewsletterCTA from '../components/home/NewsletterCTA';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Featured Programs strip
function FeaturedPrograms() {
  const programs = [
    { icon: 'school', title: 'Rural Education', desc: '15,000+ literacy program beneficiaries' },
    { icon: 'computer', title: 'Digital Literacy', desc: '3,000+ rural learners annually' },
    { icon: 'diversity_3', title: 'Women Empowerment', desc: '2,500+ women entrepreneurs' },
    { icon: 'engineering', title: 'Vocational Training', desc: '5,000+ skilled workers placed' },
  ];
  return (
    <section className="py-20 bg-white" aria-label="Featured programs">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-xs text-[#3c5e98] font-bold uppercase tracking-[0.2em] mb-2 block">What We Do</span>
            <h2 className="text-3xl font-semibold text-[#1a1c1c] tracking-tight">Our Core Programs</h2>
          </div>
          <Link to="/programs" className="text-[#00132c] text-sm font-bold flex items-center gap-1 group hover:gap-2 transition-all mt-5 md:mt-0">
            All Programs <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              className="border border-[#c3c6d0] p-7 hover:border-[#3c5e98] hover:shadow-sm transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="w-12 h-12 bg-[#f4f3f3] flex items-center justify-center mb-5 group-hover:bg-[#00132c] transition-colors duration-300">
                <span className="material-symbols-outlined text-[#3c5e98] group-hover:text-[#f8bd2d] transition-colors duration-300">{p.icon}</span>
              </div>
              <h3 className="font-semibold text-[#00132c] mb-2">{p.title}</h3>
              <p className="text-sm text-[#43474e]">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <PageWrapper
      title="Prayas Foundation | Empowering Communities Through Skill Development"
      description="Prayas Foundation empowers youth, women, and underserved communities across India through vocational training, digital literacy, and rural education programs."
    >
      <HeroSection />
      <ImpactBentoGrid />
      <FeaturedPrograms />
      <PartnersSection />
      <NewsletterCTA />
    </PageWrapper>
  );
}
