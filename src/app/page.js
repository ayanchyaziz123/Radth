'use client';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white text-gray-800 p-4 shadow-lg fixed top-0 w-full z-10 transition duration-300">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <a href="/" className="text-3xl font-bold tracking-wide transition duration-300">
          InnovatePI
        </a>
        <button className="md:hidden text-2xl transition duration-300" onClick={toggleMenu}>
          {isOpen ? '✖' : '☰'}
        </button>
        <div className={`md:flex ${isOpen ? 'block' : 'hidden'} space-x-0 md:space-x-8 mt-4 md:mt-0 flex-col md:flex-row text-lg transition duration-300`}>
          <a href="#about" className="py-2 px-4 md:py-0 md:px-0 hover:text-blue-600 transition duration-200">About</a>
          <a href="#services" className="py-2 px-4 md:py-0 md:px-0 hover:text-blue-600 transition duration-200">Services</a>
          <a href="#contact" className="py-2 px-4 md:py-0 md:px-0 hover:text-blue-600 transition duration-200">Contact</a>
        </div>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <div className="relative pt-20 transition duration-300">
      <img src="/images/technical_service.jpg" alt="Hero Image" className="w-full h-72 object-cover transition duration-300"/>
      <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center transition duration-300">
        <h1 className="text-4xl font-bold text-white transition duration-300">Welcome to InnovatePI</h1>
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="bg-white py-16 transition duration-300">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-8 text-blue-900 transition duration-300">About Us</h2>
        <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto transition duration-300">
          InnovatePI specializes in assisting students with their visa applications, offering top-notch coding training, and providing professional technical services such as software engineering.
        </p>
      </div>
    </section>
  );
};

const ServiceCard = ({ title, description, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover transition duration-300" />
      <div className="p-6 transition duration-300">
        <h3 className="text-xl font-bold text-gray-900 transition duration-300">{title}</h3>
        <p className="text-gray-700 mt-4 transition duration-300">{description}</p>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: 'Student Visa Assistance',
      description: 'We help students navigate the complex process of obtaining visas for their studies abroad. We specialize in USA visas.',
      image: '/images/student_visa.jpg',
    },
    {
      title: 'Coding Training',
      description: 'Our coding bootcamps and training programs are designed to equip you with the skills needed for a successful career in tech. We train in programming languages like Python, Java, JavaScript, and frameworks like Django and more.',
      image: '/images/coding_training.jpg',
    },
    {
      title: 'Technical Services',
      description: 'We offer professional technical services including software engineering and IT support.',
      image: '/images/technical_service.jpg',
    },
  ];

  return (
    <section id="services" className="bg-gray-100 py-16 transition duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900 transition duration-300">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="bg-white py-16 transition duration-300">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-8 text-blue-900 transition duration-300">Contact Us</h2>
        <p className="text-gray-700 text-lg mb-4 transition duration-300">For more information or inquiries, please contact us at:</p>
        <p className="text-gray-900 font-semibold text-lg transition duration-300">Email: aaziz9642@gmail.com.com</p>
        <p className="text-gray-900 font-semibold text-lg transition duration-300">Whats app: +13476696071</p>
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
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
    <footer className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-6 transition duration-300">
      <div className="container mx-auto text-center">
        <p className="transition duration-300">&copy; 2024 InnovatePI. All rights reserved.</p>
      </div>
    </footer>
  );
};

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen transition duration-300">
      <Navbar />
      <HeroSection />
      <main className="flex-grow transition duration-300">
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
