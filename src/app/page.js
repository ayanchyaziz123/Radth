'use client';
import { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';

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
    <nav className="bg-white text-gray-900 p-4 shadow-lg fixed top-0 w-full z-20 transition duration-500 ease-in-out transform">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center text-3xl font-extrabold tracking-tight text-blue-900">

          innovatepi
        </a>
        <div className="hidden md:flex space-x-8 text-lg">
          <a
            href="#about"
            className={`${activeSection === 'about' ? 'text-blue-600' : 'hover:text-blue-600'} transition duration-300 ease-in-out`}
          >
            About
          </a>
          <a
            href="#services"
            className={`${activeSection === 'services' ? 'text-blue-600' : 'hover:text-blue-600'} transition duration-300 ease-in-out`}
          >
            Services
          </a>
          <a
            href="#portfolio"
            className={`${activeSection === 'portfolio' ? 'text-blue-600' : 'hover:text-blue-600'} transition duration-300 ease-in-out`}
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className={`${activeSection === 'contact' ? 'text-blue-600' : 'hover:text-blue-600'} transition duration-300 ease-in-out`}
          >
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
          <a href="#about" className="block hover:text-blue-600 transition duration-300 ease-in-out ml-1">
            About
          </a>
          <a href="#services" className="block hover:text-blue-600 transition duration-300 ease-in-out ml-1">
            Services
          </a>
          <a href="#portfolio" className="block hover:text-blue-600 transition duration-300 ease-in-out ml-1">
            Portfolio
          </a>
          <a href="#contact" className="block hover:text-blue-600 transition duration-300 ease-in-out ml-1">
            Contact
          </a>
        </div>
      </Transition>
    </nav>
  );
};

// HeroSection component
const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-blue-600 to-blue-400 flex items-center">
      
      <div className="relative w-full lg:w-1/2 h-96 lg:h-full">
        <img
          src="images/cover.jpeg"
          alt="Hero Image"
          className="inset-0 w-full h-full object-cover"
        />
      </div>
      
      <div className="flex-1 bg-blue-600 lg:bg-transparent flex items-center justify-center lg:justify-start text-center lg:text-left py-16 px-6 lg:px-16">
        <div className="relative z-10 text-white max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
            Empowering Restaurants with Cutting-Edge Software
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Innovative solutions tailored for the restaurant industry. From management systems to stunning websites, we
            transform your digital presence.
          </p>
          <a
            href="#services"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full shadow-lg font-bold text-lg transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            Explore Services
          </a>
        </div>
      </div>
    </div>
  );
};



// AboutSection component
const AboutSection = () => {
  return (
    <section id="about" className="bg-gray-50 py-16">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-extrabold mb-8 text-blue-900">About innovatepi</h2>
        <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto">
          At innovatepi, we specialize in delivering state-of-the-art software solutions and freelancing services
          specifically for the restaurant industry. Our mission is to enhance your operational efficiency and customer
          engagement through innovative technology.
        </p>
      </div>
    </section>
  );
};

// ServiceCard component
const ServiceCard = ({ title, description, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-700 mt-4">{description}</p>
      </div>
    </div>
  );
};

// ServicesSection component
const ServicesSection = () => {
  const services = [
    {
      title: 'Custom Software Development',
      description: 'Tailored software solutions to optimize your restaurant’s operations and elevate customer engagement.',
      image: 'images/softdev.jpeg',
    },
    {
      title: 'Digital Marketing',
      description: 'Effective digital marketing strategies to boost your restaurant’s online presence, attract more customers, and increase sales.',
      image: 'images/digital_marketing.jpeg', // Update the image path as needed
    },
    {
      title: 'WordPress Website Development',
      description: 'Creating customized WordPress websites to meet your business needs, with a focus on performance and aesthetics.',
      image: 'images/word.jpeg',
    },
    {
      title: 'Freelancing Support',
      description: 'Connecting you with skilled freelancers for photography, content creation, marketing, and more.',
      image: 'images/freelancing_support.jpeg',
    },
  ];

  return (
    <section id="services" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-blue-900">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};


// PortfolioSection component
const PortfolioSection = () => {
  const projects = [
    {
      title: 'Gourmet Dine',
      description: 'A bespoke reservation and order management system for a premium dining restaurant.',
      image: 'images/dine.jpeg',
    },
    {
      title: 'QuickBites App',
      description: 'A mobile app for a fast-food chain, facilitating online ordering and loyalty programs.',
      image: 'images/quickbits.jpeg',
    },
    {
      title: 'The Culinary Blog',
      description: 'A rich blog platform for sharing recipes, cooking tips, and restaurant reviews.',
      image: 'images/blog.jpeg',
    },
  ];

  return (
    <section id="portfolio" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-blue-900">Our Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                <p className="text-gray-700 mt-4">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ContactSection component
const ContactSection = () => {
  return (
    <section id="contact" className="bg-gray-50 py-16">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-extrabold mb-8 text-blue-900">Contact Us</h2>
        <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
          We’d love to hear from you! Whether you’re interested in our services or just want to say hello, get in touch with us.
        </p>
        <div className="mb-8">
          <a
            href="mailto:contact@innovatepi.com"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full shadow-lg font-bold text-lg transition transform hover:scale-105 hover:shadow-xl mr-4"
          >
            Email Us
          </a>
          <a
            href="tel:+1234567890"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full shadow-lg font-bold text-lg transition transform hover:scale-105 hover:shadow-xl"
          >
            Call Us
          </a>
        </div>
        <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto">
          <span className="block mb-2">Email: <a href="mailto:contact@innovatepi.com" className="text-blue-600 hover:underline">contact@innovatepi.com</a></span>
          <span>Phone: <a href="tel:+1234567890" className="text-blue-600 hover:underline">+1 (234) 567-890</a></span>
        </p>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Contact Information */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p className="text-gray-400 mb-1">
              Email: <a href="mailto:contact@innovatepi.com" className="text-blue-400 hover:underline">contact@innovatepi.com</a>
            </p>
            <p className="text-gray-400">
              Phone: <a href="tel:+1234567890" className="text-blue-400 hover:underline">+1 (234) 567-890</a>
            </p>
          </div>
          {/* Social Media Links */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-facebook-f"></i>
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-twitter"></i>
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-linkedin-in"></i>
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
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
          <p>&copy; {new Date().getFullYear()} innovatepi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};


// App component
const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
