import { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    // Add shadow and background change on scroll
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    // Active section tracking
    const sections = document.querySelectorAll('section');
    let currentSection = '';

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        currentSection = section.getAttribute('id');
      }
    });

    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled 
          ? 'bg-white text-gray-900 shadow-lg py-2' 
          : 'bg-transparent text-white py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="flex items-center space-x-2">
          {/* Show the appropriate logo based on scroll state */}
          {scrolled ? (
            <img src="/images/logo-light.png" alt="Logo" className="h-8 w-auto rounded-sm" />
          ) : (
            <img src="/images/logo-dark.png" alt="Logo" className="h-8 w-auto rounded-sm" />
          )}
          {/* <span className={`text-xl font-bold tracking-tight ${scrolled ? 'text-blue-900' : 'text-white'}`}>
            RadTH
          </span> */}
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className={`
                relative text-base font-medium transition-all duration-300 
                ${activeSection === link.href.substring(1) 
                  ? scrolled ? 'text-blue-600' : 'text-blue-300' 
                  : scrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-200'
                }
              `}
            >
              {link.name}
              <span 
                className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 transition-transform duration-300 
                ${activeSection === link.href.substring(1) ? 'bg-blue-600 scale-x-100' : 'bg-blue-600'}`}
              />
            </a>
          ))}
          
          <button 
            className={`
              px-5 py-2 rounded-md text-sm font-medium transition-all duration-300
              ${scrolled 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-white text-blue-900 hover:bg-blue-50'
              }
            `}
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg 
            className={`w-6 h-6 ${scrolled ? 'text-gray-900' : 'text-white'}`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 transform -translate-y-4"
        enterTo="opacity-100 transform translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 transform translate-y-0"
        leaveTo="opacity-0 transform -translate-y-4"
      >
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-4 pb-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`
                  block py-2 px-2 text-base font-medium border-l-4 transition-all duration-300
                  ${activeSection === link.href.substring(1)
                    ? 'border-blue-600 text-blue-600 bg-blue-50'
                    : 'border-transparent text-gray-800 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-300'
                  }
                `}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <button className="w-full px-5 py-3 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </nav>
  );
};

export default Navbar;