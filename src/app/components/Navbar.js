'use client';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Solutions', href: '#services' },
    { name: 'Technology', href: '#about' },
    { name: 'Research', href: '#research' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'backdrop-blur-md shadow-sm' : ''
    }`} style={{ background: scrolled ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.7)', borderBottom: '1px solid rgba(15,23,42,0.06)' }}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3">
          <img src="/radth-icon.svg" alt="Radth Technology" className="w-9 h-9" />
          <div className="leading-tight">
            <div className="flex items-center">
              <span className="font-bold text-xl tracking-tight" style={{ color: '#0f172a' }}>Radth</span>
              <span className="text-xs font-medium ml-1.5 px-1.5 py-0.5 rounded" style={{ background: 'rgba(14,165,233,0.12)', color: '#0284c7' }}>AI & Game Dev</span>
            </div>
            <span className="text-xs" style={{ color: '#94a3b8' }}>Radth Technology</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: '#475569' }}
              onMouseEnter={e => e.target.style.color = '#0f172a'}
              onMouseLeave={e => e.target.style.color = '#475569'}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-200"
            style={{ background: 'linear-gradient(135deg, #0ea5e9, #059669)', boxShadow: '0 4px 15px rgba(14,165,233,0.25)' }}
          >
            Request Demo
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" style={{ color: '#0f172a' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={{ background: '#ffffff', borderTop: '1px solid rgba(15,23,42,0.06)' }}>
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="block py-2 font-medium transition-colors" style={{ color: '#475569' }} onClick={() => setIsOpen(false)}>
                {link.name}
              </a>
            ))}
            <a href="#contact" className="block w-full text-center px-5 py-3 text-white rounded-lg font-semibold transition-all" style={{ background: 'linear-gradient(135deg, #0ea5e9, #059669)' }} onClick={() => setIsOpen(false)}>
              Request Demo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
