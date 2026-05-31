import { motion } from 'framer-motion';
import { contentService } from '../../services/contentService';

export default function PartnersSection() {
  const partners = contentService.getPartners();

  return (
    <section className="py-20 bg-white" aria-label="Partners and associations">
      <div className="container text-center">
        <p className="text-xs text-[#43474e] uppercase tracking-[0.25em] font-semibold mb-12">
          Partners &amp; Government Associations
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.id}
              className="partner-logo flex flex-col items-center gap-3 cursor-default"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              aria-label={partner.name}
            >
              <span className="material-symbols-outlined text-4xl text-[#74777f]">{partner.icon}</span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#43474e]">{partner.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
