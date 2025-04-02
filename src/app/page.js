'use client';
import { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FaCode, FaBullhorn, FaWordpress, FaSearch, FaMobileAlt, FaChartLine, FaLaptopCode, FaPalette, FaCloud, FaShieldAlt, FaEnvelope, FaBrain } from 'react-icons/fa'; // Import additional icons
import { motion } from 'framer-motion';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AboutSection from './components/AboutSection';
import HeroSection from './components/HeroSection';

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

// Navbar component with smooth scrolling and active link highlighting
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    let currentSection = '';

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 80; // Adjust based on your navbar height
      if (window.pageYOffset >= sectionTop) {
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

  return (
    <nav className="bg-white text-gray-900 p-3 shadow-lg fixed top-0 w-full z-20 transition-all duration-300 ease-in-out transform">
    <div className="container mx-auto flex justify-between items-center">
      <a href="/" className="flex items-center text-3xl font-extrabold tracking-tight text-blue-900">
        <img src="images/logo.png" alt="Logo" className="h-8 w-40 mr-2" />
      </a>
      <div className="hidden md:flex space-x-8 text-lg">
        <a href="#about" className={`${activeSection === 'about' ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-blue-600'} transition-all duration-300 ease-in-out`}>
          About
        </a>
        <a href="#services" className={`${activeSection === 'services' ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-blue-600'} transition-all duration-300 ease-in-out`}>
          Services
        </a>
        <a href="#contact" className={`${activeSection === 'contact' ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-blue-600'} transition-all duration-300 ease-in-out`}>
          Contact
        </a>
        
   
      </div>
      <button className="md:hidden text-3xl focus:outline-none" onClick={toggleMenu}>
        {isOpen ? '✖' : '☰'}
      </button>
    </div>
    <Transition
      show={isOpen}
      enter="transition ease-out duration-300"
      enterFrom="opacity-0 transform -translate-y-10"
      enterTo="opacity-100 transform translate-y-0"
      leave="transition ease-in duration-200"
      leaveFrom="opacity-100 transform translate-y-0"
      leaveTo="opacity-0 transform -translate-y-10"
    >
      <div className="md:hidden bg-white border-t-2 border-gray-200 space-y-4 pt-4 pb-4 text-lg">
        <a href="#about" className="block hover:text-blue-600 transition-all duration-300 ease-in-out">
          About
        </a>
        <a href="#services" className="block hover:text-blue-600 transition-all duration-300 ease-in-out">
          Services
        </a>
        <a href="#contact" className="block hover:text-blue-600 transition-all duration-300 ease-in-out">
          Contact
        </a>
      </div>
    </Transition>
  </nav>
  );
};




  


const ServiceCard = ({ title, description, icon }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center">
    <div className="mb-4 flex justify-center items-center">
      {icon}
    </div>
    <h3 className="text-lg text-gray-800 font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);


// App component
const App = () => {
  return (
    <div>
      <Navbar />
      <PageTransition><HeroSection /></PageTransition>
      <AboutSection />
      <PageTransition><ServicesSection /></PageTransition>
      <PageTransition><ContactSection /></PageTransition>
     
      <Footer />
    </div>
  );
};

export default App;
