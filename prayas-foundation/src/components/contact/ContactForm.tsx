import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { contentService } from '../../services/contentService';

export default function ContactForm() {
  const careers = contentService.getCareerOpenings();
  const [openId, setOpenId] = useState<string | null>(null);
  const [formState, setFormState] = useState({
    name: '', email: '', phone: '', subject: 'General Inquiry', message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formState.name.trim()) e.name = 'Name is required';
    if (!formState.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) e.email = 'Valid email required';
    if (!formState.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setFormState({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  const field = (id: keyof typeof formState, label: string, type = 'text', placeholder = '') => (
    <div>
      <label htmlFor={id} className="block text-xs font-bold text-[#43474e] uppercase tracking-wider mb-2">{label}</label>
      <input
        id={id}
        type={type}
        value={formState[id]}
        onChange={e => setFormState(p => ({ ...p, [id]: e.target.value }))}
        placeholder={placeholder}
        className={`w-full px-4 py-3 border text-sm focus:outline-none focus:ring-1 focus:ring-[#3c5e98] focus:border-[#3c5e98] transition-all ${errors[id] ? 'border-red-400' : 'border-[#c3c6d0]'}`}
      />
      {errors[id] && <p className="text-red-500 text-xs mt-1">{errors[id]}</p>}
    </div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Form */}
      <div className="lg:col-span-7 bg-white p-8 md:p-10 border border-[#c3c6d0]">
        <h2 className="text-2xl font-semibold text-[#00132c] mb-8">Send an Inquiry</h2>
        {status === 'sent' ? (
          <div className="text-center py-16">
            <span className="material-symbols-outlined text-6xl text-green-500 mb-4 block">check_circle</span>
            <h3 className="text-xl font-semibold text-[#00132c] mb-2">Message Sent!</h3>
            <p className="text-[#43474e]">We'll get back to you within 2 business days.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {field('name', 'Full Name', 'text', 'Your full name')}
              {field('email', 'Email Address', 'email', 'you@example.com')}
            </div>
            {field('phone', 'Phone (Optional)', 'tel', '+91 98765 43210')}
            <div>
              <label htmlFor="subject" className="block text-xs font-bold text-[#43474e] uppercase tracking-wider mb-2">Subject</label>
              <select
                id="subject"
                value={formState.subject}
                onChange={e => setFormState(p => ({ ...p, subject: e.target.value }))}
                className="w-full px-4 py-3 border border-[#c3c6d0] text-sm focus:outline-none focus:ring-1 focus:ring-[#3c5e98] bg-white appearance-none"
              >
                {['General Inquiry', 'Program Partnership', 'Volunteer', 'Donation Support', 'Media & Press', 'CSR Collaboration'].map(o => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-bold text-[#43474e] uppercase tracking-wider mb-2">Message</label>
              <textarea
                id="message"
                rows={5}
                value={formState.message}
                onChange={e => setFormState(p => ({ ...p, message: e.target.value }))}
                placeholder="How can we assist you today?"
                className={`w-full px-4 py-3 border text-sm focus:outline-none focus:ring-1 focus:ring-[#3c5e98] focus:border-[#3c5e98] resize-none transition-all ${errors.message ? 'border-red-400' : 'border-[#c3c6d0]'}`}
              />
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full md:w-auto bg-[#00132c] text-white px-10 py-4 rounded text-sm font-bold uppercase tracking-wider hover:bg-[#002850] transition-colors disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        )}
      </div>

      {/* Info Side */}
      <div className="lg:col-span-5 space-y-6">
        <div className="bg-[#f4f3f3] p-8 border border-[#c3c6d0]">
          <h3 className="text-lg font-semibold text-[#00132c] mb-6">Headquarters</h3>
          <div className="space-y-4">
            {[
              { icon: 'location_on', text: '7th Floor, Prayas Bhavan\nSector 8, Dwarka\nNew Delhi — 110077' },
              { icon: 'call', text: '+91 11 2345 6789' },
              { icon: 'mail', text: 'contact@prayasfoundation.org' },
              { icon: 'schedule', text: 'Mon–Sat: 9:00 AM – 6:00 PM IST' },
            ].map(({ icon, text }) => (
              <div key={icon} className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-[#3c5e98] flex-shrink-0 mt-0.5">{icon}</span>
                <p className="text-sm text-[#43474e] whitespace-pre-line">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Map placeholder */}
        <div className="h-48 bg-[#e3e2e2] border border-[#c3c6d0] relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&q=80"
            alt="Location map"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="w-12 h-12 bg-[#00132c] rounded-full flex items-center justify-center text-white shadow-lg ring-4 ring-white/30">
              <span className="material-symbols-outlined">location_on</span>
            </div>
            <span className="bg-white px-3 py-1 text-xs font-bold mt-2 shadow-sm">Visit Us in New Delhi</span>
          </div>
        </div>
      </div>

      {/* Careers Accordion */}
      <div className="lg:col-span-12 mt-8">
        <div className="text-center mb-10">
          <span className="text-[#f8bd2d] bg-[#352500] px-3 py-1 text-xs font-bold uppercase tracking-widest">Join Our Team</span>
          <h2 className="text-3xl font-bold text-[#1a1c1c] mt-4 mb-3 tracking-tight">Current Openings</h2>
          <p className="text-[#43474e]">Lead with empathy, precision, and purpose. Explore our opportunities.</p>
        </div>
        <div className="space-y-4 max-w-4xl mx-auto" id="careers">
          {careers.map((career) => (
            <div key={career.id} className="bg-white border border-[#c3c6d0] overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-6 text-left hover:bg-[#f4f3f3] transition-colors"
                onClick={() => setOpenId(openId === career.id ? null : career.id)}
                aria-expanded={openId === career.id}
              >
                <div className="flex items-center gap-5">
                  <div className="w-11 h-11 bg-[#002850] flex items-center justify-center text-[#7390be] flex-shrink-0">
                    <span className="material-symbols-outlined">{career.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a1c1c]">{career.title}</h4>
                    <span className="text-xs bg-[#ffdea0] text-[#5c4300] px-2 py-0.5">{career.type}</span>
                  </div>
                </div>
                <span
                  className="material-symbols-outlined text-[#43474e] transition-transform duration-300"
                  style={{ transform: openId === career.id ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  expand_more
                </span>
              </button>
              <AnimatePresence initial={false}>
                {openId === career.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-8 pl-[84px]">
                      <p className="text-sm text-[#43474e] mb-4 leading-relaxed">{career.description}</p>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-[#43474e] mb-6">
                        {career.requirements.map((r) => <li key={r}>{r}</li>)}
                      </ul>
                      <a
                        href={`mailto:careers@prayasfoundation.org?subject=Application: ${career.title}`}
                        className="inline-block bg-[#00132c] text-white px-6 py-3 rounded text-sm font-bold uppercase tracking-wider hover:bg-[#002850] transition-colors"
                      >
                        Apply for this Position
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
