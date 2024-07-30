'use client';
import { useState } from 'react';
import { Transition } from '@headlessui/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white text-gray-900 p-4 shadow-lg fixed top-0 w-full z-20 transition duration-500 ease-in-out transform">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-3xl font-extrabold tracking-tight text-blue-900">
          innovatepi
        </a>
        <div className="hidden md:flex space-x-8 text-lg">
          <a href="#about" className="hover:text-blue-600 transition duration-300 ease-in-out">About</a>
          <a href="#services" className="hover:text-blue-600 transition duration-300 ease-in-out">Services</a>
          <a href="#portfolio" className="hover:text-blue-600 transition duration-300 ease-in-out">Portfolio</a>
          <a href="#contact" className="hover:text-blue-600 transition duration-300 ease-in-out">Contact</a>
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
          <a href="#about" className="block text-center hover:text-blue-600 transition duration-300 ease-in-out">About</a>
          <a href="#services" className="block text-center hover:text-blue-600 transition duration-300 ease-in-out">Services</a>
          <a href="#portfolio" className="block text-center hover:text-blue-600 transition duration-300 ease-in-out">Portfolio</a>
          <a href="#contact" className="block text-center hover:text-blue-600 transition duration-300 ease-in-out">Contact</a>
        </div>
      </Transition>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <div className="relative pt-16 md:pt-24 bg-gradient-to-r from-blue-600 to-blue-400">
      <div className="container mx-auto text-center text-white">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Empowering Restaurants with Cutting-Edge Software</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">Innovative solutions tailored for the restaurant industry. From management systems to stunning websites, we transform your digital presence.</p>
        <a href="#services" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full shadow-lg font-bold text-lg transition transform hover:scale-105 hover:shadow-xl mb-2">Explore Services</a>
      </div>
      {/* <img src="images/softdev.jpeg" alt="Hero Image" className="absolute top-0 left-0 w-full h-full object-cover opacity-30" /> */}
    </div>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="bg-gray-50 py-16">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-extrabold mb-8 text-blue-900">About innovatepi</h2>
        <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto">
          innovatepi, we specialize in delivering state-of-the-art software solutions and freelancing services specifically for the restaurant industry. Our mission is to enhance your operational efficiency and customer engagement through innovative technology.
        </p>
      </div>
    </section>
  );
};

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

const ServicesSection = () => {
  const services = [
    {
      title: 'Custom Software Development',
      description: 'Tailored software solutions to optimize your restaurant’s operations and elevate customer engagement.',
      image: 'images/softdev.jpeg',
    },
    {
      title: 'Restaurant Management Systems',
      description: 'Comprehensive systems for managing reservations, orders, and inventory, providing a seamless experience.',
      image: 'images/rest.jpeg',
    },
    {
      title: 'WordPress Website Development',
      description: 'Creating customized WordPress websites to meet your business needs, with a focus on performance and aesthetics.',
      image: 'images/word.jpeg',
    },
    {
      title: 'Freelancing Support',
      description: 'Connecting you with skilled freelancers for photography, content creation, marketing, and more.',
      image: 'images/fre.jpeg',
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
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
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

const ContactSection = () => {
  return (
    <section id="contact" className="bg-gray-50 py-16">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-extrabold mb-8 text-blue-900">Get in Touch</h2>
        <p className="text-gray-700 text-lg mb-4">Have a question or want to discuss a project? Reach out to us at:</p>
        <p className="text-gray-900 font-semibold text-lg">Email: info@techgourmet.com</p>
        <p className="text-gray-900 font-semibold text-lg">Phone: +1234567890</p>
        <div className="mt-8 max-w-md mx-auto">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Your email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                rows="4"
                placeholder="Your message"
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-transform transform hover:scale-105"
                type="button"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 TechGourmet. All rights reserved.</p>
      </div>
    </footer>
  );
};

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HeroSection />
      <main className="flex-grow">
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
