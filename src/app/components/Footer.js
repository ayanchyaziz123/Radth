import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faLocationDot, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white relative">
      {/* Top wave separator */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 transform -translate-y-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
        </svg>
      </div>
      
      {/* Main footer content */}
      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Section */}
          <div>
            <div className="mb-6">
              <a href="/" className="flex items-center">
                <img src="/images/logo-white.png" alt="RadTH Logo" className="h-8 w-auto" />
              </a>
            </div>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              RadTH helps businesses transform through cutting-edge technology solutions. 
              We specialize in custom software development, digital marketing, and AI-powered tools.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/radthbd" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-blue-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a 
                href="https://www.linkedin.com/company/radth" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-blue-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a 
                href="https://www.instagram.com/radthbd" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-blue-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a 
                href="https://twitter.com/radthbd" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-blue-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 relative">
              <span className="relative z-10">Quick Links</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-blue-500"></span>
            </h3>
            <ul className="space-y-3">
              {['About', 'Services', 'Portfolio', 'Testimonials', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <FontAwesomeIcon 
                      icon={faAngleRight} 
                      className="mr-2 text-blue-500 text-xs group-hover:translate-x-1 transition-transform" 
                    />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6 relative">
              <span className="relative z-10">Our Services</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-blue-500"></span>
            </h3>
            <ul className="space-y-3">
              {[
                'Custom Software Development',
                'Mobile Applications',
                'Web Development',
                'AI Solutions',
                'Digital Marketing',
                'Cloud Services'
              ].map((service) => (
                <li key={service}>
                  <a 
                    href="#services" 
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <FontAwesomeIcon 
                      icon={faAngleRight} 
                      className="mr-2 text-blue-500 text-xs group-hover:translate-x-1 transition-transform" 
                    />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-6 relative">
              <span className="relative z-10">Contact Us</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-blue-500"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FontAwesomeIcon icon={faLocationDot} className="text-blue-500 mt-1 mr-3" />
                <span className="text-gray-400">New York, NY, United States</span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faPhone} className="text-blue-500 mt-1 mr-3" />
                <a href="tel:+13476696071" className="text-gray-400 hover:text-white transition-colors">
                  +1 (347) 669-6071
                </a>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faEnvelope} className="text-blue-500 mt-1 mr-3" />
                <a href="mailto:contact@radth.com" className="text-gray-400 hover:text-white transition-colors">
                  contact@radth.com
                </a>
              </li>
            </ul>
            
            {/* Newsletter Signup */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3 text-gray-300">Subscribe to our newsletter</h4>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-gray-800 border border-gray-700 text-gray-300 px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <button 
                  type="submit" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md transition-colors"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Bottom copyright bar */}
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {currentYear} RadTH. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="/sitemap" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;