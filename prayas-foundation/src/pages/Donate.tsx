import { useState } from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/layout/PageWrapper';
import { contentService } from '../services/contentService';

export default function Donate() {
  const tiers = contentService.getDonationTiers();
  const [selected, setSelected] = useState<number | null>(2000);
  const [custom, setCustom] = useState('');
  const [form, setForm] = useState({ name: '', email: '', pan: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'done'>('idle');

  const amount = custom ? parseInt(custom) : selected;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || !form.name || !form.email) return;
    setStatus('sending');
    setTimeout(() => setStatus('done'), 1800);
  };

  return (
    <PageWrapper
      title="Donate | Prayas Foundation"
      description="Support Prayas Foundation's mission to empower communities across India. Every donation directly funds skill training, education, and women empowerment."
    >
      {/* Hero */}
      <section className="py-20 bg-[#00132c] text-white" aria-label="Donate hero">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-[#f8bd2d] text-xs font-bold uppercase tracking-[0.25em] mb-4 block">Give Today</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight tracking-tight">Your Donation Transforms Lives</h1>
            <p className="text-lg text-[#aac8f9] max-w-2xl mx-auto leading-relaxed">
              Every contribution — large or small — directly funds skill training, digital literacy, and community empowerment for India's most underserved citizens.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-20 bg-[#f4f3f3]" aria-label="Donation tiers">
        <div className="container">
          <h2 className="text-3xl font-semibold text-[#1a1c1c] mb-3 tracking-tight text-center">Choose Your Impact Level</h2>
          <p className="text-[#43474e] text-center mb-12 max-w-xl mx-auto">See exactly what your donation achieves. All donations are eligible for 80G tax deduction.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {tiers.map((tier) => (
              <motion.button
                key={tier.id}
                onClick={() => { setSelected(tier.amount); setCustom(''); }}
                className={`text-left p-7 border-2 transition-all ${
                  selected === tier.amount && !custom
                    ? tier.featured ? 'border-[#f8bd2d] bg-[#00132c] text-white' : 'border-[#3c5e98] bg-[#3c5e98] text-white'
                    : 'border-[#c3c6d0] bg-white hover:border-[#3c5e98]'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {tier.featured && <span className="text-xs bg-[#f8bd2d] text-[#261a00] px-2 py-0.5 font-bold uppercase mb-3 inline-block">Most Popular</span>}
                <span className={`material-symbols-outlined text-3xl mb-3 block ${selected === tier.amount && !custom ? 'text-[#f8bd2d]' : 'text-[#3c5e98]'}`}
                  style={{ fontVariationSettings: "'FILL' 1" }}>{tier.icon}</span>
                <div className="text-2xl font-bold mb-1">₹{tier.amount.toLocaleString('en-IN')}</div>
                <div className="text-sm font-semibold mb-3">{tier.label}</div>
                <p className="text-xs opacity-80 leading-relaxed">{tier.impact}</p>
              </motion.button>
            ))}
          </div>

          {/* Donation Form */}
          {status === 'done' ? (
            <div className="text-center bg-white border border-[#c3c6d0] p-12 max-w-xl mx-auto">
              <span className="material-symbols-outlined text-6xl text-[#3c5e98] mb-4 block" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
              <h3 className="text-xl font-semibold text-[#00132c] mb-2">Thank You, {form.name}!</h3>
              <p className="text-[#43474e] mb-4">Your donation of ₹{(amount || 0).toLocaleString('en-IN')} is being processed. You'll receive a receipt at {form.email}.</p>
              <p className="text-sm text-[#43474e]">For UPI payments, please transfer to: <strong>prayas@upi</strong> and note your name as reference.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white border border-[#c3c6d0] p-8 max-w-xl mx-auto">
              <h3 className="text-xl font-semibold text-[#00132c] mb-6">Complete Your Donation</h3>
              <div className="mb-5">
                <label className="block text-xs font-bold text-[#43474e] uppercase tracking-wider mb-2">Custom Amount (₹)</label>
                <input type="number" placeholder="Enter custom amount" value={custom}
                  onChange={e => { setCustom(e.target.value); setSelected(null); }}
                  className="w-full px-4 py-3 border border-[#c3c6d0] text-sm focus:outline-none focus:ring-1 focus:ring-[#3c5e98]" min="100" />
              </div>
              <div className="space-y-4 mb-6">
                <div>
                  <label htmlFor="dname" className="block text-xs font-bold text-[#43474e] uppercase tracking-wider mb-2">Full Name *</label>
                  <input id="dname" required value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                    className="w-full px-4 py-3 border border-[#c3c6d0] text-sm focus:outline-none focus:ring-1 focus:ring-[#3c5e98]" placeholder="Your legal name" />
                </div>
                <div>
                  <label htmlFor="demail" className="block text-xs font-bold text-[#43474e] uppercase tracking-wider mb-2">Email Address *</label>
                  <input id="demail" type="email" required value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                    className="w-full px-4 py-3 border border-[#c3c6d0] text-sm focus:outline-none focus:ring-1 focus:ring-[#3c5e98]" placeholder="For receipt and 80G certificate" />
                </div>
                <div>
                  <label htmlFor="dpan" className="block text-xs font-bold text-[#43474e] uppercase tracking-wider mb-2">PAN Number (for 80G)</label>
                  <input id="dpan" value={form.pan} onChange={e => setForm(p => ({ ...p, pan: e.target.value }))}
                    className="w-full px-4 py-3 border border-[#c3c6d0] text-sm focus:outline-none focus:ring-1 focus:ring-[#3c5e98]" placeholder="ABCDE1234F (optional)" />
                </div>
              </div>
              {amount && <div className="bg-[#f4f3f3] border border-[#c3c6d0] p-4 mb-6 text-sm text-[#43474e]">
                Donating: <strong className="text-[#00132c]">₹{amount.toLocaleString('en-IN')}</strong> — 80G tax benefit applicable
              </div>}
              <button type="submit" className="w-full bg-[#00132c] text-white py-4 rounded text-sm font-bold uppercase tracking-wider hover:bg-[#002850] transition-colors">
                {status === 'sending' ? 'Processing…' : `Donate ₹${(amount || 0).toLocaleString('en-IN')}`}
              </button>
              <p className="text-xs text-[#74777f] mt-4 text-center">Secured donation. 80G certificate sent via email. Registered under FCRA.</p>
            </form>
          )}
        </div>
      </section>

      {/* Why Donate */}
      <section className="py-16 bg-white" aria-label="Why donate section">
        <div className="container text-center">
          <h2 className="text-2xl font-semibold text-[#1a1c1c] mb-10 tracking-tight">100% of Your Donation Reaches Communities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: 'account_balance', title: '80G Tax Benefit', desc: 'Get up to 50% tax deduction on your donation under Section 80G of Income Tax Act.' },
              { icon: 'verified', title: 'FCRA Registered', desc: 'Prayas Foundation is registered under FCRA for transparent fund utilization and reporting.' },
              { icon: 'receipt_long', title: 'Annual Reports', desc: 'We publish detailed annual impact reports showing exactly how every rupee is spent.' },
            ].map((item) => (
              <div key={item.title} className="p-7 border border-[#c3c6d0]">
                <span className="material-symbols-outlined text-4xl text-[#3c5e98] mb-4 block" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
                <h3 className="font-semibold text-[#00132c] mb-2">{item.title}</h3>
                <p className="text-sm text-[#43474e] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
