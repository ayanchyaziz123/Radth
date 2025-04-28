import { useState } from 'react';
import { FaCode, FaBullhorn, FaRobot, FaSearch, FaMobileAlt, FaCloud, FaArrowRight } from 'react-icons/fa';

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      title: 'Custom Software Development',
      description: 'Building tailored software solutions to streamline business operations and improve efficiency.',
      icon: <FaCode size={28} className="text-blue-600" />,
      color: 'from-blue-500 to-blue-700',
      bgLight: 'bg-blue-50'
    },
    {
      title: 'Digital Marketing',
      description: 'Strategic digital marketing and branding services to grow your visibility and reach.',
      icon: <FaBullhorn size={28} className="text-purple-600" />,
      color: 'from-purple-500 to-purple-700',
      bgLight: 'bg-purple-50'
    },
    {
      title: 'AI-Powered Solutions',
      description: 'Implementing smart AI solutions to automate tasks and enhance business decision-making.',
      icon: <FaRobot size={28} className="text-emerald-600" />,
      color: 'from-emerald-500 to-emerald-700',
      bgLight: 'bg-emerald-50'
    },
    {
      title: 'Mobile & Web Applications',
      description: 'Creating scalable and responsive mobile and web applications tailored for your business needs.',
      icon: <FaMobileAlt size={28} className="text-red-600" />,
      color: 'from-red-500 to-red-700',
      bgLight: 'bg-red-50'
    },
    {
      title: 'Cloud & IT Consultancy',
      description: 'Providing expert IT consulting and cloud solutions for startups, small businesses, and entrepreneurs.',
      icon: <FaCloud size={28} className="text-sky-600" />,
      color: 'from-sky-500 to-sky-700',
      bgLight: 'bg-sky-50'
    },
    {
      title: 'Search Engine Optimization',
      description: 'Helping your website rank higher in search engines and attract more targeted organic traffic.',
      icon: <FaSearch size={28} className="text-amber-600" />,
      color: 'from-amber-500 to-amber-700',
      bgLight: 'bg-amber-50'
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mb-4">
            Our Expertise
          </span>
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Comprehensive IT & Digital Services
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We offer end-to-end technology solutions designed to help your business 
            grow and succeed in today&#39;s digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl shadow-lg transition-all duration-300 group"
              style={{
                transform: hoveredIndex === index ? 'translateY(-10px)' : 'translateY(0)',
                boxShadow: hoveredIndex === index ? '0 20px 30px -10px rgba(0, 0, 0, 0.1)' : '0 10px 20px -5px rgba(0, 0, 0, 0.05)'
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="h-full flex flex-col">
                {/* Colored top bar */}
                <div className={`h-2 w-full bg-gradient-to-r ${service.color} rounded-t-2xl`}></div>
              
                <div className="p-8 flex-grow">
                  {/* Icon with gradient background */}
                  <div className={`w-16 h-16 ${service.bgLight} rounded-lg flex items-center justify-center mb-6`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  <a 
                    href="#" 
                    className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 transition-colors mt-auto group-hover:underline"
                  >
                    Learn more
                    <FaArrowRight size={14} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center p-1 rounded-full bg-gradient-to-r from-blue-600 to-blue-800">
            <a href="#contact" className="px-6 py-3 rounded-full bg-white hover:bg-opacity-90 text-blue-700 font-medium transition-all">
              Get a free consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;