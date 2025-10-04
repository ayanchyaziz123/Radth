import { useState } from 'react';
import { 
  FaCode, 
  FaBullhorn, 
  FaRobot, 
  FaSearch, 
  FaMobileAlt, 
  FaCloud, 
  FaArrowRight, 
  FaTimes,
  FaWordpress,
  FaReact,
  FaEnvelope,
  FaUser,
  FaPhone,
  FaBuilding,
  FaCheckCircle
} from 'react-icons/fa';

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeModal, setActiveModal] = useState(null);
  const [showDemoForm, setShowDemoForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    services: [],
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const services = [
    {
      title: 'WordPress Development',
      description: 'Professional WordPress websites with custom themes, plugins, and e-commerce functionality for businesses of all sizes.',
      icon: <FaWordpress size={28} className="text-blue-600" />,
      color: 'from-blue-500 to-blue-700',
      bgLight: 'bg-blue-50',
      details: {
        fullDescription: 'Our WordPress development services provide you with powerful, scalable websites that are easy to manage and optimized for performance. We specialize in creating industry-specific solutions including restaurant websites, e-commerce stores, professional services, and more.',
        features: [
          'Restaurant websites with online menus & reservations',
          'Restaurant management systems & POS integration',
          'WooCommerce e-commerce stores & marketplaces',
          'Law firm websites with case management',
          'Real estate portals with property listings',
          'Healthcare & medical practice websites',
          'Corporate & business portfolio sites',
          'Educational institutions & course platforms',
          'Non-profit & charity organization sites',
          'Custom plugin development & integrations',
          'Performance optimization & security hardening',
          'SEO-friendly architecture & content migration'
        ],
        benefits: 'WordPress websites are cost-effective, SEO-friendly, and give you complete control over your content. Our industry-specific solutions help you establish a strong online presence with features tailored to your business type, keeping long-term maintenance simple and affordable.',
        process: 'We start by understanding your industry requirements and business goals, then design and develop a custom WordPress solution with industry-specific features. Our process includes competitor analysis, custom design, specialized plugin integration, testing, and comprehensive training to ensure you can manage your site effectively.'
      }
    },
    {
      title: 'Custom Web Development',
      description: 'High-performance React applications with server-side rendering, modern UI/UX, and advanced functionality for scalable businesses.',
      icon: <FaReact size={28} className="text-cyan-600" />,
      color: 'from-cyan-500 to-cyan-700',
      bgLight: 'bg-cyan-50',
      details: {
        fullDescription: 'Build lightning-fast, SEO-optimized web applications with Next.js. Our development team creates modern, scalable applications that provide exceptional user experiences and superior performance compared to traditional web solutions.',
        features: [
          'Server-side rendering (SSR) & static generation',
          'Modern React component architecture',
          'API routes & backend integration',
          'Advanced SEO optimization',
          'Progressive Web App (PWA) features',
          'Real-time data synchronization',
          'Authentication & user management',
          'Performance monitoring & analytics'
        ],
        benefits: 'Next.js applications offer superior performance, better SEO capabilities, enhanced user experience, and scalable architecture that grows with your business. Perfect for businesses that need competitive advantages through technology.',
        process: 'We follow modern development practices starting with user research and technical planning, then implement with React best practices, server-side optimization, and comprehensive testing. Our approach ensures your application is future-ready and maintainable.'
      }
    },
    {
      title: 'Custom Mobile App Development',
      description: 'Building tailored software solutions to streamline business operations and improve efficiency.',
      icon: <FaCode size={28} className="text-purple-600" />,
      color: 'from-purple-500 to-purple-700',
      bgLight: 'bg-purple-50',
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
      icon: <FaBullhorn size={28} className="text-emerald-600" />,
      color: 'from-emerald-500 to-emerald-700',
      bgLight: 'bg-emerald-50',
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
      icon: <FaRobot size={28} className="text-red-600" />,
      color: 'from-red-500 to-red-700',
      bgLight: 'bg-red-50',
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
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = 'auto';
  };

  const openDemoForm = () => {
    setShowDemoForm(true);
    document.body.style.overflow = 'hidden';
  };

  const closeDemoForm = () => {
    setShowDemoForm(false);
    setFormSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      services: [],
      message: ''
    });
    document.body.style.overflow = 'auto';
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceToggle = (serviceName) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceName)
        ? prev.services.filter(s => s !== serviceName)
        : [...prev.services, serviceName]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Demo request submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      closeDemoForm();
    }, 3000);
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
            grow and succeed in today&rsquo;s digital landscape.
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
            <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
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
                          {activeModal === 1 && <FaArrowRight size={10} className="text-cyan-600" />}
                          {activeModal === 2 && <FaArrowRight size={10} className="text-purple-600" />}
                          {activeModal === 3 && <FaArrowRight size={10} className="text-emerald-600" />}
                          {activeModal === 4 && <FaArrowRight size={10} className="text-red-600" />}
                          {activeModal === 5 && <FaArrowRight size={10} className="text-sky-600" />}
                          {activeModal === 6 && <FaArrowRight size={10} className="text-amber-600" />}
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
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white mb-8">
            <h3 className="text-2xl font-bold mb-4">Ready to See Our Work in Action?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Request a personalized demo of our services. We&apos;ll show you exactly how our solutions 
              can benefit your business with real examples and case studies.
            </p>
            <button 
              onClick={openDemoForm}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <FaEnvelope className="mr-2" />
              Request Free Demo
            </button>
          </div>
          
          <div className="inline-flex items-center justify-center p-1 rounded-full bg-gradient-to-r from-blue-600 to-blue-800">
            <a href="#contact" className="px-6 py-3 rounded-full bg-white hover:bg-opacity-90 text-blue-700 font-medium transition-all">
              Get a free consultation
            </a>
          </div>
        </div>

        {/* Demo Request Form Modal */}
        {showDemoForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              {!formSubmitted ? (
                <>
                  {/* Form Header */}
                  <div className="p-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-t-2xl flex justify-between items-center">
                    <div>
                      <h3 className="text-2xl font-bold text-white">Request a Demo</h3>
                      <p className="text-blue-100">Tell us about your project and we&apos;ll prepare a personalized demo</p>
                    </div>
                    <button 
                      onClick={closeDemoForm}
                      className="text-white hover:text-gray-200 transition-colors"
                    >
                      <FaTimes size={24} />
                    </button>
                  </div>
                  
                  {/* Form Content */}
                  <form onSubmit={handleSubmit} className="p-8">
                    {/* Personal Information */}
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          <FaUser className="inline mr-2 text-blue-500" />
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                          placeholder="Your full name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          <FaEnvelope className="inline mr-2 text-blue-500" />
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          <FaPhone className="inline mr-2 text-blue-500" />
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          <FaBuilding className="inline mr-2 text-blue-500" />
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    {/* Services Selection */}
                    <div className="mb-6">
                      <label className="block text-gray-700 font-medium mb-4">
                        Services You&apos;re Interested In *
                      </label>
                      <div className="grid md:grid-cols-2 gap-3">
                        {services.map((service, index) => (
                          <label key={index} className="flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={formData.services.includes(service.title)}
                              onChange={() => handleServiceToggle(service.title)}
                              className="sr-only"
                            />
                            <div className={`flex items-center p-3 border-2 rounded-lg transition-all ${
                              formData.services.includes(service.title)
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}>
                              <div className={`w-8 h-8 ${service.bgLight} rounded-lg flex items-center justify-center mr-3 flex-shrink-0`}>
                                <div className="text-blue-600">
                                  {service.title === 'WordPress Development' && <FaWordpress size={16} />}
                                  {service.title === 'Next.js Applications' && <FaReact size={16} />}
                                  {service.title === 'Custom Software Development' && <FaCode size={16} />}
                                  {service.title === 'Digital Marketing' && <FaBullhorn size={16} />}
                                  {service.title === 'AI-Powered Solutions' && <FaRobot size={16} />}
                                  {service.title === 'Search Engine Optimization' && <FaSearch size={16} />}
                                </div>
                              </div>
                              <span className="text-sm font-medium text-gray-800">{service.title}</span>
                              {formData.services.includes(service.title) && (
                                <FaCheckCircle className="ml-auto text-blue-500" size={16} />
                              )}
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="mb-6">
                      <label className="block text-gray-700 font-medium mb-2">
                        Project Details & Requirements
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="4"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="Tell us about your project, timeline, budget, and any specific requirements..."
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        disabled={formData.services.length === 0}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Submit Demo Request
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                /* Success Message */
                <div className="p-12 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaCheckCircle className="text-green-500" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Demo Request Submitted!</h3>
                  <p className="text-gray-600 mb-4">
                    Thank you for your interest! We&apos;ll review your requirements and send you a 
                    personalized demo within 24 hours.
                  </p>
                  <p className="text-sm text-gray-500">
                    This window will close automatically in a few seconds...
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;