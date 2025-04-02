const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            {/* Contact Information */}
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
              <p className="text-gray-400 mb-1">
                Email: <a href="mailto:contact@radth.com" className="text-blue-400 hover:underline">contact@radth.com</a>
              </p>
              <p className="text-gray-400">
                Phone: <a href="tel:+13476696071" className="text-blue-400 hover:underline">+1 (347) 669-6071</a>
              </p>
            </div>
  
            {/* Social Media Links */}
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/radthbd" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                  <i className="fab fa-facebook-f"></i>
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="https://www.linkedin.com/company/radth" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                  <i className="fab fa-linkedin-in"></i>
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href="https://www.instagram.com/radthbd" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                  <i className="fab fa-instagram"></i>
                  <span className="sr-only">Instagram</span>
                </a>
              </div>
            </div>
  
            {/* Navigation Links */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              <ul>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white transition">About</a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-white transition">Services</a>
                </li>
                <li>
                  <a href="#portfolio" className="text-gray-400 hover:text-white transition">Portfolio</a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a>
                </li>
              </ul>
            </div>
          </div>
  
          <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} radth.com. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  