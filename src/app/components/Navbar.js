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
      scrolled ? 'backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`} style={scrolled ? { background: 'rgba(8,20,40,0.95)' } : {}}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #0ea5e9, #059669)' }}>
            {/* Brain/scan icon */}
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
            </svg>
          </div>
          <div>
            <span className="text-white font-bold text-xl tracking-tight">Radth</span>
            <span className="text-xs font-medium ml-1.5 px-1.5 py-0.5 rounded" style={{ background: 'rgba(14,165,233,0.15)', color: '#38bdf8' }}>Medical AI</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: '#94a3b8' }}
              onMouseEnter={e => e.target.style.color = '#e2e8f0'}
              onMouseLeave={e => e.target.style.color = '#94a3b8'}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-200"
            style={{ background: 'linear-gradient(135deg, #0ea5e9, #059669)', boxShadow: '0 4px 15px rgba(14,165,233,0.3)' }}
          >
            Request Demo
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={{ background: '#081428', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="block py-2 font-medium transition-colors" style={{ color: '#94a3b8' }} onClick={() => setIsOpen(false)}>
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
