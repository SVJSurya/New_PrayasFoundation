import { motion } from 'framer-motion';

export default function FounderMessage() {
  return (
    <section className="bg-white py-24 overflow-hidden" id="founder" aria-label="Founder's message">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-16 items-start">

          {/* Portrait */}
          <motion.div
            className="w-full md:w-5/12 md:sticky md:top-24"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="aspect-[4/5] bg-[#eeeeed] overflow-hidden border border-[#c3c6d0] relative">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80"
                alt="Founder of Prayas Foundation"
                className="w-full h-full object-cover grayscale"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[#00132c]/85 to-transparent">
                <p className="text-white font-semibold text-lg">Founder's Message</p>
                <p className="text-white/75 text-sm">Prayas Foundation, Est. 2010</p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="w-full md:w-7/12"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="mb-10">
              <span className="inline-block px-3 py-1 bg-[#f8bd2d] text-[#261a00] text-xs font-bold uppercase tracking-[0.15em] mb-5">
                A Letter from Leadership
              </span>
              <blockquote className="text-2xl font-semibold text-[#00132c] border-l-4 border-[#f8bd2d] pl-7 italic leading-relaxed mb-10">
                "True empowerment is not a transaction — it is a transformation. We build skills that build futures."
              </blockquote>
            </div>

            <div className="space-y-6 text-[#43474e] text-base leading-relaxed">
              <p>
                At Prayas Foundation, our philosophy is rooted in the belief that sustainable change comes from within communities. When we founded this organization in 2010, the goal was clear: to create institutional frameworks that empower individuals at scale — without leaving anyone behind.
              </p>
              <p>
                We have always believed that skill development is not merely a workforce intervention — it is a statement of dignity. Every young person who completes a vocational course, every woman who starts her own enterprise, every rural family that gains digital access — these are not statistics. They are the measure of a movement.
              </p>
              <p>
                As we grow across 12 states and reach over 15,000 lives annually, our commitment remains fixed: to work with precision, integrity, and deep respect for the communities we serve. We invite you to join this mission — not through grand gestures, but through the consistent, purposeful work of building a better tomorrow.
              </p>
            </div>

            <div className="pt-10 mt-10 border-t border-[#c3c6d0] flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-[#3c5e98]/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-[#3c5e98] text-2xl">verified</span>
              </div>
              <div>
                <p className="text-xs text-[#3c5e98] font-bold uppercase tracking-wider mb-1">Vision Statement</p>
                <p className="text-lg font-semibold text-[#00132c]">Defined by Integrity. Measured by Impact.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
