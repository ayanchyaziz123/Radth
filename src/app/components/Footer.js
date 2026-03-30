'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faLocationDot, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#06060F] text-white relative">
      {/* Top border glow */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-white font-bold text-xl tracking-tight">
                Radth<span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent"> AI</span>
              </span>
            </div>
            <p className="text-gray-500 mb-6 text-sm leading-relaxed">
              Radth AI builds intelligent agents that automate restaurant operations, healthcare workflows, retail, and more — 24/7, without limits.
            </p>
            <div className="flex space-x-3">
              {[
                { icon: faFacebook, href: 'https://www.facebook.com/radthbd', label: 'Facebook' },
                { icon: faLinkedin, href: 'https://www.linkedin.com/company/radth', label: 'LinkedIn' },
                { icon: faInstagram, href: 'https://www.instagram.com/radthbd', label: 'Instagram' },
                { icon: faXTwitter, href: 'https://twitter.com/radthbd', label: 'X' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 bg-white/5 hover:bg-violet-500/20 border border-white/10 hover:border-violet-500/40 rounded-lg flex items-center justify-center text-gray-400 hover:text-violet-300 transition-all text-sm"
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['About', 'AI Agents', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item === 'AI Agents' ? 'services' : item.toLowerCase()}`}
                    className="text-gray-500 hover:text-white text-sm transition-colors flex items-center group"
                  >
                    <FontAwesomeIcon icon={faAngleRight} className="mr-2 text-violet-500 text-xs group-hover:translate-x-1 transition-transform" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Agents */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">AI Agents</h3>
            <ul className="space-y-3">
              {[
                'Restaurant AI Agent',
                'Healthcare AI Agent',
                'Retail AI Agent',
                'Real Estate AI Agent',
                'Customer Support AI Agent',
                'Marketing AI Agent',
              ].map((agent) => (
                <li key={agent}>
                  <a
                    href="#services"
                    className="text-gray-500 hover:text-white text-sm transition-colors flex items-center group"
                  >
                    <FontAwesomeIcon icon={faAngleRight} className="mr-2 text-violet-500 text-xs group-hover:translate-x-1 transition-transform" />
                    {agent}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FontAwesomeIcon icon={faLocationDot} className="text-violet-500 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-500 text-sm">New York, NY, United States</span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faPhone} className="text-violet-500 mt-0.5 mr-3 flex-shrink-0" />
                <a href="tel:+13476696071" className="text-gray-500 hover:text-white text-sm transition-colors">
                  +1 (347) 669-6071
                </a>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faEnvelope} className="text-violet-500 mt-0.5 mr-3 flex-shrink-0" />
                <a href="mailto:radth.co@gmail.com" className="text-gray-500 hover:text-white text-sm transition-colors">
                  radth.co@gmail.com
                </a>
              </li>
            </ul>

            <div className="mt-8">
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Newsletter</h4>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-white/5 border border-white/10 text-gray-300 placeholder-gray-600 px-4 py-2.5 rounded-l-lg w-full text-sm focus:outline-none focus:border-violet-500 transition-colors"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white px-4 py-2.5 rounded-r-lg text-sm font-medium transition-all"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-600 text-xs">
          <p>&copy; {currentYear} Radth AI. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
