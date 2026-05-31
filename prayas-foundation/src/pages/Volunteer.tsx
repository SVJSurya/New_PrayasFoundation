import { useState } from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/layout/PageWrapper';
import { contentService } from '../services/contentService';

function VolunteerForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', role: '', city: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => { setStatus('sent'); }, 1500);
  };

  if (status === 'sent') return (
    <div className="text-center py-16 bg-white border border-[#c3c6d0] p-8">
      <span className="material-symbols-outlined text-6xl text-[#3c5e98] mb-4 block" style={{ fontVariationSettings: "'FILL' 1" }}>volunteer_activism</span>
      <h3 className="text-xl font-semibold text-[#00132c] mb-2">Thank You for Volunteering!</h3>
      <p className="text-[#43474e]">Our team will reach out to you within 3 business days to discuss next steps.</p>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-[#c3c6d0] p-8 space-y-5">
      <h3 className="text-xl font-semibold text-[#00132c] mb-2">Register as a Volunteer</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {[['name', 'Full Name', 'text', 'Your name'], ['email', 'Email', 'email', 'you@example.com'], ['phone', 'Phone', 'tel', '+91 98765 43210'], ['city', 'City', 'text', 'Your city']].map(([id, label, type, ph]) => (
          <div key={id}>
            <label htmlFor={id} className="block text-xs font-bold text-[#43474e] uppercase tracking-wider mb-2">{label}</label>
            <input id={id} type={type} placeholder={ph} value={(form as any)[id]} onChange={e => setForm(p => ({ ...p, [id]: e.target.value }))}
              className="w-full px-4 py-3 border border-[#c3c6d0] text-sm focus:outline-none focus:ring-1 focus:ring-[#3c5e98]" required={id !== 'phone'} />
          </div>
        ))}
      </div>
      <div>
        <label htmlFor="role" className="block text-xs font-bold text-[#43474e] uppercase tracking-wider mb-2">Area of Interest</label>
        <select id="role" value={form.role} onChange={e => setForm(p => ({ ...p, role: e.target.value }))}
          className="w-full px-4 py-3 border border-[#c3c6d0] text-sm focus:outline-none focus:ring-1 focus:ring-[#3c5e98] bg-white">
          <option value="">Select a role...</option>
          {contentService.getVolunteerRoles().map(r => <option key={r.id} value={r.id}>{r.title}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="vmessage" className="block text-xs font-bold text-[#43474e] uppercase tracking-wider mb-2">Why Do You Want to Volunteer?</label>
        <textarea id="vmessage" rows={4} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
          placeholder="Tell us about your motivation and any relevant experience..."
          className="w-full px-4 py-3 border border-[#c3c6d0] text-sm focus:outline-none focus:ring-1 focus:ring-[#3c5e98] resize-none" />
      </div>
      <button type="submit" className="bg-[#3c5e98] text-white px-8 py-3.5 rounded text-sm font-bold uppercase tracking-wider hover:bg-[#00132c] transition-colors">
        {status === 'sending' ? 'Submitting…' : 'Submit Application'}
      </button>
    </form>
  );
}

export default function Volunteer() {
  const roles = contentService.getVolunteerRoles();

  return (
    <PageWrapper
      title="Volunteer | Prayas Foundation"
      description="Join Prayas Foundation as a volunteer. Share your skills to empower communities through training, mentorship, and digital literacy."
    >
      {/* Hero */}
      <section className="py-20 bg-[#00132c] text-white" aria-label="Volunteer hero">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-[#f8bd2d] text-xs font-bold uppercase tracking-[0.25em] mb-4 block">Make a Difference</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 tracking-tight leading-tight">Volunteer with Prayas</h1>
            <p className="text-lg text-[#aac8f9] max-w-2xl mx-auto leading-relaxed">
              Your skills — whether in teaching, technology, healthcare, or community organizing — can directly transform lives. Join our volunteer network today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Roles */}
      <section className="py-20 bg-[#f4f3f3]" aria-label="Volunteer roles">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-semibold text-[#1a1c1c] tracking-tight mb-3">How You Can Help</h2>
            <p className="text-[#43474e] max-w-xl mx-auto">We have diverse volunteering opportunities to match your skills and availability.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roles.map((role, i) => (
              <motion.div
                key={role.id}
                className="bg-white border border-[#c3c6d0] p-8 hover:border-[#3c5e98] hover:shadow-sm transition-all group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-[#f4f3f3] flex items-center justify-center flex-shrink-0 group-hover:bg-[#00132c] transition-colors">
                    <span className="material-symbols-outlined text-[#3c5e98] group-hover:text-[#f8bd2d] transition-colors">{role.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#00132c] mb-1">{role.title}</h3>
                    <p className="text-sm text-[#43474e] mb-3 leading-relaxed">{role.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="text-xs bg-[#d5e3ff] text-[#00132c] px-2 py-0.5 font-semibold">{role.commitment}</span>
                      <span className="text-xs bg-[#e3e2e2] text-[#43474e] px-2 py-0.5">{role.location}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {role.skills.map(s => <span key={s} className="text-xs text-[#43474e] border border-[#c3c6d0] px-2 py-0.5">{s}</span>)}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 bg-white" aria-label="Volunteer registration form">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <VolunteerForm />
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
