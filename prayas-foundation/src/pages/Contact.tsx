import { motion } from 'framer-motion';
import PageWrapper from '../components/layout/PageWrapper';
import ContactForm from '../components/contact/ContactForm';

function ContactHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#faf9f9] to-[#f4f3f3]" aria-label="Contact page hero">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="text-xs font-bold text-[#3c5e98] uppercase tracking-[0.2em] mb-4 block">Get In Touch</span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a1c1c] leading-tight mb-6 tracking-tight">
            Connect With<br />Our Mission
          </h1>
          <p className="text-lg text-[#43474e] mb-8 max-w-xl leading-relaxed">
            Whether you're looking to partner, donate, volunteer, or simply learn more — we're here to start the conversation.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact-form" className="bg-[#00132c] text-white px-6 py-3 rounded text-sm font-bold uppercase tracking-wider hover:bg-[#002850] transition-colors">
              Send a Message
            </a>
            <a href="#careers" className="border border-[#3c5e98] text-[#3c5e98] px-6 py-3 rounded text-sm font-bold hover:bg-[#f4f3f3] transition-colors">
              View Openings
            </a>
          </div>
        </motion.div>
        <motion.div
          className="relative overflow-hidden aspect-video border border-[#c3c6d0] shadow-lg"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=80"
            alt="Prayas Foundation office and team"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default function Contact() {
  return (
    <PageWrapper
      title="Contact Us | Prayas Foundation"
      description="Get in touch with Prayas Foundation for partnerships, donations, volunteering, or general inquiries. We're based in New Delhi, India."
    >
      <ContactHero />
      <section className="py-16 bg-white" id="contact-form" aria-label="Contact form and careers">
        <div className="container">
          <ContactForm />
        </div>
      </section>
    </PageWrapper>
  );
}
