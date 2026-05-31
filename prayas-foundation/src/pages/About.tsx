import { motion } from 'framer-motion';
import PageWrapper from '../components/layout/PageWrapper';
import FounderMessage from '../components/about/FounderMessage';
import ValuesGrid from '../components/about/ValuesGrid';

function AboutHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-[#f4f3f3]" aria-label="About page hero">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="text-xs font-bold text-[#3c5e98] uppercase tracking-[0.2em] mb-4 block">Who We Are</span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#00132c] leading-tight mb-6 tracking-tight">
            Built on Integrity,<br />Driven by Impact
          </h1>
          <p className="text-lg text-[#43474e] leading-relaxed max-w-xl">
            We are a collective of professionals and change-makers committed to fostering institutional reliability and building resilient communities across India.
          </p>
        </motion.div>
        <motion.div
          className="relative h-[380px] overflow-hidden border border-[#c3c6d0]"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&q=80"
            alt="Prayas Foundation team collaborating"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm border border-[#c3c6d0] p-4">
            <div className="text-sm font-semibold text-[#00132c]">Est. 2010</div>
            <div className="text-xs text-[#43474e]">15+ years of community empowerment</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Timeline section
function Timeline() {
  const milestones = [
    { year: '2010', event: 'Prayas Foundation established in New Delhi with a focus on vocational training.' },
    { year: '2013', event: 'Reached 1,000 beneficiaries. First government MoU signed with UP Skill Mission.' },
    { year: '2016', event: 'PMKVY empanelled. Operations expanded to 5 states.' },
    { year: '2019', event: 'Crossed 8,500 livelihoods milestone. Women empowerment vertical launched.' },
    { year: '2022', event: 'PM Vishwakarma implementation partner across 8 districts. Digital literacy drive launched.' },
    { year: '2025', event: '15,000+ beneficiaries annually. 250+ centers. Present in 12 states.' },
  ];
  return (
    <section className="py-20 bg-white" aria-label="Our journey timeline">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-semibold text-[#1a1c1c] tracking-tight mb-3">Our Journey</h2>
          <p className="text-[#43474e] max-w-xl mx-auto">15 years of disciplined growth — from a small initiative to a national movement.</p>
        </div>
        <div className="relative">
          <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-[2px] bg-[#c3c6d0] md:-translate-x-1/2" />
          <div className="space-y-10">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                className={`flex gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
              >
                <div className={`hidden md:block md:flex-1 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`} />
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#00132c] text-white flex items-center justify-center text-xs font-bold z-10 flex-shrink-0">
                    {i + 1}
                  </div>
                </div>
                <div className={`flex-1 pb-2 ${i % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                  <div className="bg-[#f4f3f3] border border-[#c3c6d0] p-5 rounded">
                    <span className="text-[#f8bd2d] font-black text-2xl">{m.year}</span>
                    <p className="text-sm text-[#43474e] mt-2 leading-relaxed">{m.event}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <PageWrapper
      title="About Us | Prayas Foundation"
      description="Learn about Prayas Foundation's mission, leadership, values, and 15-year journey of empowering communities across India."
    >
      <AboutHero />
      <FounderMessage />
      <Timeline />
      <ValuesGrid />
    </PageWrapper>
  );
}
