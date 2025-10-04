'use client'
import { useState } from 'react';
import { 
  FaWordpress, 
  FaShoppingCart, 
  FaUtensils, 
  FaGavel, 
  FaHome, 
  FaHeartbeat,
  FaGraduationCap,
  FaHandsHelping,
  FaBuilding,
  FaSearch,
  FaShieldAlt,
  FaMobile,
  FaTachometerAlt,
  FaTools,
  FaCheckCircle,
  FaArrowRight,
  FaStar,
  FaQuoteLeft,
  FaEnvelope,
  FaPhone,
  FaUser,
  FaProjectDiagram
} from 'react-icons/fa';

const WordPressServicePage = () => {
  const [activeTab, setActiveTab] = useState('features');
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    message: '',
    projectType: ''
  });

  const industries = [
    {
      name: 'Restaurants & Food',
      icon: <FaUtensils className="text-orange-500" />,
      features: ['Online Menu Management', 'Table Reservations', 'Online Ordering System', 'POS Integration', 'Customer Reviews', 'Multi-location Support'],
      description: 'Complete restaurant website solutions with online ordering, reservations, and menu management systems.'
    },
    {
      name: 'E-commerce & Retail',
      icon: <FaShoppingCart className="text-green-500" />,
      features: ['WooCommerce Integration', 'Payment Gateways', 'Inventory Management', 'Product Catalogs', 'Shopping Cart', 'Order Tracking'],
      description: 'Full-featured online stores with secure payment processing and inventory management.'
    },
    {
      name: 'Legal Services',
      icon: <FaGavel className="text-blue-500" />,
      features: ['Case Management', 'Client Portal', 'Document Library', 'Appointment Booking', 'Legal Forms', 'Attorney Profiles'],
      description: 'Professional law firm websites with client management and case tracking capabilities.'
    },
    {
      name: 'Real Estate',
      icon: <FaHome className="text-purple-500" />,
      features: ['Property Listings', 'IDX Integration', 'Virtual Tours', 'Agent Profiles', 'Lead Management', 'Market Analytics'],
      description: 'Dynamic real estate portals with property search and agent management systems.'
    },
    {
      name: 'Healthcare',
      icon: <FaHeartbeat className="text-red-500" />,
      features: ['Patient Portal', 'Appointment Scheduling', 'Medical Forms', 'HIPAA Compliance', 'Doctor Profiles', 'Health Resources'],
      description: 'HIPAA-compliant medical websites with patient management and appointment systems.'
    },
    {
      name: 'Education',
      icon: <FaGraduationCap className="text-indigo-500" />,
      features: ['Course Management', 'Student Portal', 'Online Learning', 'Event Calendar', 'Resource Library', 'Faculty Directory'],
      description: 'Educational institution websites with learning management and student portal features.'
    }
  ];

  const coreFeatures = [
    {
      title: 'Custom Theme Development',
      description: 'Unique, responsive designs tailored to your brand',
      icon: <FaProjectDiagram className="text-blue-500" />
    },
    {
      title: 'SEO Optimization',
      description: 'Built-in SEO best practices for better search rankings',
      icon: <FaSearch className="text-green-500" />
    },
    {
      title: 'Security Hardening',
      description: 'Advanced security measures and regular updates',
      icon: <FaShieldAlt className="text-red-500" />
    },
    {
      title: 'Mobile Responsive',
      description: 'Perfect display across all devices and screen sizes',
      icon: <FaMobile className="text-purple-500" />
    },
    {
      title: 'Performance Optimization',
      description: 'Fast loading times and optimized user experience',
      icon: <FaTachometerAlt className="text-orange-500" />
    },
    {
      title: 'Easy Content Management',
      description: 'User-friendly admin panel for easy content updates',
      icon: <FaTools className="text-cyan-500" />
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your business requirements, target audience, and create a detailed project roadmap.',
      duration: '1-2 weeks'
    },
    {
      step: '02',
      title: 'Design & Wireframing',
      description: 'Custom design creation with user experience optimization and brand alignment.',
      duration: '2-3 weeks'
    },
    {
      step: '03',
      title: 'Development & Integration',
      description: 'WordPress development with custom features, plugins, and third-party integrations.',
      duration: '3-6 weeks'
    },
    {
      step: '04',
      title: 'Testing & Launch',
      description: 'Comprehensive testing, training, and successful website launch with ongoing support.',
      duration: '1-2 weeks'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Johnson\'s Restaurant',
      text: 'Radth IT Solutions transformed our restaurant business with an amazing WordPress site. Online orders increased by 300%!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'Chen Legal Group',
      text: 'Our new law firm website is professional and the client portal has streamlined our practice significantly.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Rodriguez Real Estate',
      text: 'The property listing system they built is exactly what we needed. Our leads have doubled since launch.',
      rating: 5
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('WordPress service inquiry:', formData);
    // Handle form submission here
    alert('Thank you! We\'ll contact you within 24 hours to discuss your WordPress project.');
    setShowContactForm(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      industry: '',
      message: '',
      projectType: ''
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
              <FaWordpress size={40} className="text-blue-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Professional WordPress Development
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Custom WordPress websites designed for your industry with powerful features, 
              stunning design, and seamless user experience that drives business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setShowContactForm(true)}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg"
              >
                Start Your Project
              </button>
              <button 
                onClick={() => document.getElementById('industries').scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                View Industries
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose WordPress?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              WordPress powers 40% of all websites worldwide. Our custom development approach 
              ensures your site stands out while leveraging WordPress's powerful ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section id="industries" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We understand that every industry has unique requirements. Our WordPress solutions 
              are tailored with specific features and functionality for your business type.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className={`bg-white rounded-xl p-8 cursor-pointer transition-all duration-300 ${
                  selectedIndustry === index 
                    ? 'ring-2 ring-blue-500 shadow-xl' 
                    : 'hover:shadow-lg'
                }`}
                onClick={() => setSelectedIndustry(selectedIndustry === index ? null : index)}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mr-4">
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {industry.name}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-4">
                  {industry.description}
                </p>

                {selectedIndustry === index && (
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {industry.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" size={12} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="mt-4 text-blue-600 font-medium flex items-center">
                  Learn More
                  <FaArrowRight className="ml-2" size={12} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure your WordPress project is delivered 
              on time, within budget, and exceeds your expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-3">
                  {step.description}
                </p>
                <div className="text-sm text-blue-600 font-medium">
                  {step.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600">
              Real results from real businesses that chose our WordPress solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <FaQuoteLeft className="text-blue-600 mb-4" size={24} />
                <p className="text-gray-600 mb-6">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your WordPress Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss your requirements and create a custom WordPress solution 
            that drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setShowContactForm(true)}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Consultation
            </button>
            <button 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              View Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-t-2xl">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white">Start Your WordPress Project</h3>
                  <p className="text-blue-100">Tell us about your requirements and we'll provide a custom quote</p>
                </div>
                <button 
                  onClick={() => setShowContactForm(false)}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  ×
                </button>
              </div>
            </div>
            
            <div className="p-8">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Industry
                  </label>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  >
                    <option value="">Select your industry</option>
                    <option value="restaurant">Restaurant & Food</option>
                    <option value="ecommerce">E-commerce & Retail</option>
                    <option value="legal">Legal Services</option>
                    <option value="realestate">Real Estate</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="education">Education</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  >
                    <option value="">Select project type</option>
                    <option value="new">New Website</option>
                    <option value="redesign">Website Redesign</option>
                    <option value="ecommerce">E-commerce Store</option>
                    <option value="maintenance">Maintenance & Updates</option>
                    <option value="migration">Site Migration</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Project Details
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Tell us about your project requirements, timeline, and any specific features you need..."
                ></textarea>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
                >
                  Submit Project Request
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WordPressServicePage;