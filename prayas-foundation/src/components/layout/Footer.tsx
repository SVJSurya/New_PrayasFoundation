import { Link } from 'react-router-dom';

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Programs', path: '/programs' },
  { label: 'Projects', path: '/projects' },
  { label: 'Our Story', path: '/story' },
  { label: 'Impact', path: '/impact' },
];

const programLinks = [
  { label: 'Vocational Training', path: '/programs' },
  { label: 'Digital Literacy', path: '/programs' },
  { label: 'Women Empowerment', path: '/programs' },
  { label: 'Rural Education', path: '/programs' },
  { label: 'CSR Initiatives', path: '/programs' },
];

const supportLinks = [
  { label: 'Donate', path: '/donate' },
  { label: 'Volunteer', path: '/volunteer' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact Us', path: '/contact' },
  { label: 'Privacy Policy', path: '#' },
];

export default function Footer() {
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    if (email) {
      alert(`Thank you for subscribing with ${email}!`);
      form.reset();
    }
  };

  return (
    <footer className="bg-[#2f3131] text-white" role="contentinfo">
      {/* Main Footer Grid */}
      <div className="container py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-8 h-8 rounded-sm bg-[#f8bd2d] flex items-center justify-center flex-shrink-0">
              <span className="text-[#00132c] font-black text-base leading-none">P</span>
            </span>
            <span className="text-lg font-bold text-white">Prayas Foundation</span>
          </div>
          <p className="text-sm text-[#e3e2e2]/70 leading-relaxed mb-6">
            Bridging aspiration and opportunity through dedicated skill development, community support, and institutional empowerment since 2010.
          </p>
          {/* Social Links */}
          <div className="flex gap-3">
            {[
              { icon: 'language', label: 'Website' },
              { icon: 'share', label: 'Social' },
              { icon: 'diversity_1', label: 'Community' },
            ].map(({ icon, label }) => (
              <button
                key={label}
                aria-label={label}
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-[#f8bd2d] hover:border-[#f8bd2d] transition-all duration-200"
              >
                <span className="material-symbols-outlined text-lg">{icon}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-[#f8bd2d] font-bold text-xs uppercase tracking-[0.15em] mb-5">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {quickLinks.map(({ label, path }) => (
              <li key={label}>
                <Link
                  to={path}
                  className="text-[#e3e2e2]/70 text-sm hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h3 className="text-[#f8bd2d] font-bold text-xs uppercase tracking-[0.15em] mb-5">
            Programs
          </h3>
          <ul className="space-y-3 mb-6">
            {programLinks.map(({ label, path }) => (
              <li key={label}>
                <Link
                  to={path}
                  className="text-[#e3e2e2]/70 text-sm hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <h3 className="text-[#f8bd2d] font-bold text-xs uppercase tracking-[0.15em] mb-5 mt-8">
            Get Involved
          </h3>
          <ul className="space-y-3">
            {supportLinks.map(({ label, path }) => (
              <li key={label}>
                <Link
                  to={path}
                  className="text-[#e3e2e2]/70 text-sm hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + Newsletter */}
        <div>
          <h3 className="text-[#f8bd2d] font-bold text-xs uppercase tracking-[0.15em] mb-5">
            Contact
          </h3>
          <address className="not-italic text-sm text-[#e3e2e2]/70 space-y-1 mb-6">
            <p>7th Floor, Prayas Bhavan</p>
            <p>Sector 8, Dwarka</p>
            <p>New Delhi — 110077</p>
            <p className="mt-3 text-[#abc7ff]">contact@prayasfoundation.org</p>
            <p>+91 11 2345 6789</p>
          </address>

          <h3 className="text-[#f8bd2d] font-bold text-xs uppercase tracking-[0.15em] mb-4">
            Stay Updated
          </h3>
          <form onSubmit={handleSubscribe} className="flex gap-2">
            <input
              type="email"
              name="email"
              required
              placeholder="Your email address"
              aria-label="Email address for newsletter"
              className="flex-1 min-w-0 bg-white/10 border border-white/20 text-white placeholder:text-white/40 px-3 py-2.5 text-sm focus:outline-none focus:border-[#f8bd2d] transition-colors"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="bg-[#f8bd2d] text-[#00132c] px-3 py-2.5 hover:bg-[#ffdea0] transition-colors flex-shrink-0"
            >
              <span className="material-symbols-outlined text-lg">send</span>
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 container py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} Prayas Foundation. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-xs text-white/40 hover:text-white/70 transition-colors">Privacy Policy</a>
          <a href="#" className="text-xs text-white/40 hover:text-white/70 transition-colors">Terms of Use</a>
          <Link to="/contact" className="text-xs text-white/40 hover:text-white/70 transition-colors">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
