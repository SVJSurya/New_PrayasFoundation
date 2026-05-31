import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Programs', path: '/programs' },
  { label: 'Our Story', path: '/story' },
  { label: 'Contact Us', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 w-full h-[72px] z-50 border-t-[3px] border-secondary transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-sm'
            : 'bg-white/90 backdrop-blur-md'
        }`}
        role="banner"
      >
        <div className="flex justify-between items-center h-full container">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl font-bold text-[#00132c] tracking-tight flex items-center gap-2 flex-shrink-0"
            aria-label="Prayas Foundation — Home"
          >
            <span className="w-7 h-7 rounded-sm bg-[#00132c] flex items-center justify-center flex-shrink-0">
              <span className="text-[#f8bd2d] font-black text-sm leading-none">P</span>
            </span>
            Prayas Foundation
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `text-sm font-semibold tracking-wide transition-colors duration-200 pb-0.5 ${
                    isActive
                      ? 'text-[#00132c] border-b-2 border-[#3c5e98]'
                      : 'text-[#43474e] hover:text-[#3c5e98]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              to="/donate"
              className="hidden md:inline-flex items-center gap-2 bg-[#00132c] text-white px-5 py-2.5 rounded text-sm font-bold tracking-wider uppercase hover:bg-[#002850] transition-colors duration-200"
            >
              Donate Now
            </Link>

            {/* Hamburger */}
            <button
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] group"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <span className={`block w-6 h-[2px] bg-[#00132c] transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block w-6 h-[2px] bg-[#00132c] transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-[2px] bg-[#00132c] transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="fixed top-[72px] left-0 right-0 z-40 bg-white border-b border-[#c3c6d0] shadow-xl"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <nav className="container flex flex-col px-5 py-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `py-3 border-b border-[#f4f3f3] text-sm font-semibold tracking-wide transition-colors ${
                      isActive ? 'text-[#3c5e98]' : 'text-[#43474e]'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="flex gap-3 mt-4 pb-2">
                <Link
                  to="/donate"
                  className="flex-1 text-center bg-[#00132c] text-white px-4 py-3 rounded text-sm font-bold uppercase tracking-wider"
                >
                  Donate Now
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
