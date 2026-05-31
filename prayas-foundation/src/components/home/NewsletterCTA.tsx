import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NewsletterCTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setEmail('');
    }
  };

  return (
    <section className="py-24" aria-label="Newsletter and call to action">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Donate CTA */}
          <motion.div
            className="bg-[#00132c] text-white p-10 md:p-14 relative overflow-hidden"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none">
              <span className="material-symbols-outlined text-[160px]">volunteer_activism</span>
            </div>
            <div className="relative z-10 max-w-sm">
              <span className="text-[#f8bd2d] text-xs font-bold uppercase tracking-[0.2em]">Make a Difference</span>
              <h2 className="text-2xl md:text-3xl font-bold mt-3 mb-4 leading-tight">
                Every rupee transforms a life.
              </h2>
              <p className="text-white/75 text-sm leading-relaxed mb-8">
                Your donation directly funds skill training, education programs, and community support for India's underserved communities.
              </p>
              <Link
                to="/donate"
                className="inline-flex items-center gap-2 bg-[#f8bd2d] text-[#00132c] px-7 py-3.5 rounded text-sm font-bold uppercase tracking-wider hover:bg-[#ffdea0] transition-colors"
              >
                Donate Now
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            className="bg-[#f4f3f3] border border-[#c3c6d0] p-10 md:p-14 relative overflow-hidden"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="absolute -right-8 -bottom-8 opacity-5 pointer-events-none">
              <span className="material-symbols-outlined text-[160px]">mail</span>
            </div>
            <div className="relative z-10 max-w-sm">
              <span className="text-[#3c5e98] text-xs font-bold uppercase tracking-[0.2em]">Stay Informed</span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#00132c] mt-3 mb-4 leading-tight">
                Community updates in your inbox.
              </h2>
              <p className="text-[#43474e] text-sm leading-relaxed mb-8">
                Join our mailing list for impact stories, new skill centers, and opportunities to partner with Prayas Foundation.
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Email Address"
                  aria-label="Email address for newsletter"
                  className="flex-1 border border-[#c3c6d0] bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#3c5e98] transition-colors"
                />
                <button
                  type="submit"
                  className="bg-[#3c5e98] text-white px-6 py-3 rounded text-sm font-bold uppercase tracking-wider hover:bg-[#00132c] transition-colors whitespace-nowrap"
                >
                  {submitted ? '✓ Subscribed!' : 'Subscribe'}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
