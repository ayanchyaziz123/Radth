import { useState } from 'react';
import { FaCode, FaBullhorn, FaRobot, FaSearch, FaMobileAlt, FaCloud, FaArrowRight, FaTimes } from 'react-icons/fa';

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeModal, setActiveModal] = useState(null);

  const services = [
    {
      title: 'Custom Software Development',
      description: 'Building tailored software solutions to streamline business operations and improve efficiency.',
      icon: <FaCode size={28} className="text-blue-600" />,
      color: 'from-blue-500 to-blue-700',
      bgLight: 'bg-blue-50',
      details: {
        fullDescription: 'Our development team creates custom software applications designed specifically for your business needs. We utilize the latest technologies and methodologies to deliver robust, scalable, and maintainable solutions.',
        features: [
          'Web & desktop applications',
          'API development & integration',
          'Enterprise solutions',
          'Database design & optimization',
          'Legacy system modernization',
          'DevOps & CI/CD implementation'
        ],
        benefits: 'Our custom software gives you a competitive edge by automating manual processes, reducing operational costs, and providing data-driven insights for better decision making.',
        process: 'We follow an agile development methodology with regular check-ins, allowing you to provide feedback throughout the development lifecycle. This ensures the final product aligns perfectly with your business requirements.'
      }
    },
    {
      title: 'Digital Marketing',
      description: 'Strategic digital marketing and branding services to grow your visibility and reach.',
      icon: <FaBullhorn size={28} className="text-purple-600" />,
      color: 'from-purple-500 to-purple-700',
      bgLight: 'bg-purple-50',
      details: {
        fullDescription: 'Drive growth with our comprehensive digital marketing strategies. We help businesses establish their online presence, reach their target audience, and convert prospects into loyal customers.',
        features: [
          'Social media management & advertising',
          'Content marketing & creation',
          'Email marketing campaigns',
          'PPC advertising (Google Ads, Meta)',
          'Marketing automation',
          'Performance analytics & reporting'
        ],
        benefits: 'Our digital marketing solutions increase your brand visibility, generate quality leads, and improve conversion rates, all while providing measurable ROI on your marketing investment.',
        process: 'We begin with a thorough market analysis and competitor research, then develop a customized strategy that aligns with your business goals. Our team continuously monitors campaign performance and makes data-driven adjustments.'
      }
    },
    {
      title: 'AI-Powered Solutions',
      description: 'Implementing smart AI solutions to automate tasks and enhance business decision-making.',
      icon: <FaRobot size={28} className="text-emerald-600" />,
      color: 'from-emerald-500 to-emerald-700',
      bgLight: 'bg-emerald-50',
      details: {
        fullDescription: 'Leverage the power of artificial intelligence for your business. Our AI solutions help you automate complex tasks, gain valuable insights from your data, and create more personalized user experiences.',
        features: [
          'Machine learning models',
          'Natural language processing',
          'Computer vision applications',
          'Predictive analytics',
          'Chatbots & virtual assistants',
          'Business intelligence automation'
        ],
        benefits: 'AI integration can dramatically improve operational efficiency, reduce human error, uncover hidden patterns in your data, and enable more personalized customer experiences.',
        process: 'We assess your business challenges, identify AI opportunities, develop proof-of-concepts, and then scale successful solutions. Our team ensures that AI implementations align with your strategic objectives.'
      }
    },
    {
      title: 'Mobile & Web Applications',
      description: 'Creating scalable and responsive mobile and web applications tailored for your business needs.',
      icon: <FaMobileAlt size={28} className="text-red-600" />,
      color: 'from-red-500 to-red-700',
      bgLight: 'bg-red-50',
      details: {
        fullDescription: 'End-to-end mobile and web application development services that deliver exceptional user experiences across all devices. We build solutions that are both visually appealing and highly functional.',
        features: [
          'Responsive web applications',
          'Native iOS & Android apps',
          'Cross-platform mobile solutions',
          'Progressive Web Apps (PWAs)',
          'E-commerce platforms',
          'UX/UI design & prototyping'
        ],
        benefits: 'Our mobile and web applications help you engage with customers wherever they are, streamline business processes, and create new revenue channels through digital transformation.',
        process: 'We employ a user-centered design approach, starting with research and prototyping before moving to development. Our QA process ensures applications are thoroughly tested across all target platforms and devices.'
      }
    },
    {
      title: 'Cloud & IT Consultancy',
      description: 'Providing expert IT consulting and cloud solutions for startups, small businesses, and entrepreneurs.',
      icon: <FaCloud size={28} className="text-sky-600" />,
      color: 'from-sky-500 to-sky-700',
      bgLight: 'bg-sky-50',
      details: {
        fullDescription: 'Our IT consultants help you navigate the complexities of modern technology infrastructure. We provide strategic guidance and practical solutions to optimize your IT operations.',
        features: [
          'Cloud migration & management',
          'IT infrastructure planning',
          'Cybersecurity assessments',
          'System integration',
          'Technology roadmapping',
          'Disaster recovery planning'
        ],
        benefits: 'Our consultancy services help reduce IT costs, improve system reliability, enhance security posture, and align technology investments with business objectives.',
        process: 'We conduct a comprehensive assessment of your current IT environment, identify areas for improvement, and develop a strategic plan that addresses both immediate needs and long-term goals.'
      }
    },
    {
      title: 'Search Engine Optimization',
      description: 'Helping your website rank higher in search engines and attract more targeted organic traffic.',
      icon: <FaSearch size={28} className="text-amber-600" />,
      color: 'from-amber-500 to-amber-700',
      bgLight: 'bg-amber-50',
      details: {
        fullDescription: 'Improve your online visibility with our SEO expertise. We help businesses rank higher in search engine results pages (SERPs) and drive qualified organic traffic to their websites.',
        features: [
          'Keyword research & analysis',
          'On-page optimization',
          'Technical SEO audits',
          'Content strategy & creation',
          'Link building campaigns',
          'Local SEO optimization'
        ],
        benefits: 'Effective SEO delivers sustainable, long-term traffic growth, increases brand credibility, and provides higher ROI compared to paid advertising over time.',
        process: 'Our approach begins with a comprehensive website audit, competitor analysis, and keyword research. We then implement a customized strategy focused on both technical optimizations and content improvements.'
      }
    },
  ];

  const openModal = (index) => {
    setActiveModal(index);
    // Add class to body to prevent scrolling
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveModal(null);
    // Remove class from body to allow scrolling
    document.body.style.overflow = 'auto';
  };

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
            grow and succeed in today's digital landscape.
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
                  
                  <button 
                    onClick={() => openModal(index)}
                    className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 transition-colors mt-auto group-hover:underline"
                  >
                    Learn more
                    <FaArrowRight size={14} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Modal Overlay */}
        {activeModal !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className={`p-6 bg-gradient-to-r ${services[activeModal].color} rounded-t-2xl flex justify-between items-center`}>
                <div className="flex items-center">
                  <div className="bg-white bg-opacity-20 p-3 rounded-lg mr-4">
                    <div className="text-white">
                      {services[activeModal].icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white">{services[activeModal].title}</h3>
                </div>
                <button 
                  onClick={closeModal}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <FaTimes size={24} />
                </button>
              </div>
              
              {/* Modal Content */}
              <div className="p-8">
                <p className="text-lg text-gray-700 mb-6">
                  {services[activeModal].details.fullDescription}
                </p>
                
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">What We Offer</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {services[activeModal].details.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className={`mt-1 mr-2 text-xs ${services[activeModal].bgLight} p-1 rounded-full`}>
                          {activeModal === 0 && <FaArrowRight size={10} className="text-blue-600" />}
                          {activeModal === 1 && <FaArrowRight size={10} className="text-purple-600" />}
                          {activeModal === 2 && <FaArrowRight size={10} className="text-emerald-600" />}
                          {activeModal === 3 && <FaArrowRight size={10} className="text-red-600" />}
                          {activeModal === 4 && <FaArrowRight size={10} className="text-sky-600" />}
                          {activeModal === 5 && <FaArrowRight size={10} className="text-amber-600" />}
                        </span>
                        <span className='text-gray-800'>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Benefits</h4>
                  <p className="text-gray-700">
                    {services[activeModal].details.benefits}
                  </p>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Our Approach</h4>
                  <p className="text-gray-700">
                    {services[activeModal].details.process}
                  </p>
                </div>
                
                <div className="mt-8 flex justify-end">
                  <button 
                    className={`px-6 py-3 rounded-lg bg-gradient-to-r ${services[activeModal].color} text-white font-medium hover:opacity-90 transition-opacity`}
                  >
                    Request Service
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        
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