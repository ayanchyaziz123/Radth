'use client';
import { useState, useEffect } from 'react';

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
import Navbar from './components/Navbar';
import BlogSection from './components/BlogSection';
import TeamSection from './components/TeamSection';
import PricingSection from './components/PricingSection';

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




// App component
const App = () => {
  return (
    <div>
       {/* Always keep Navbar at the top for navigation */}
       <Navbar />
      
      {/* Hero Section comes immediately after navbar - most important for first impression */}
      <PageTransition>
        <HeroSection />
      </PageTransition>
      
      {/* Services Section promoted to second position - core offering */}
      <PageTransition>
        <ServicesSection />
      </PageTransition>
      
      {/* About Section moved to third position */}
      <AboutSection />

      
      {/* Contact Section stays toward the end - logical flow after learning about services */}
      <PageTransition>
        <ContactSection />
      </PageTransition>
      
      {/* Footer always stays at the bottom */}
      <Footer />
    </div>
  );
};

export default App;
