import { useState } from 'react';
import { 
  FaWordpress, 
  FaReact, 
  FaServer, 
  FaDatabase, 
  FaTools, 
  FaCode,
  FaArrowRight, 
  FaTimes,
  FaCheck,
  FaPython,
  FaNodeJs,
  FaStar,
  FaLightbulb,
  FaRocket
} from 'react-icons/fa';

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeModal, setActiveModal] = useState(null);

  const pricingCategories = [
    {
      id: 'web',
      title: 'Web Development',
      subtitle: 'Frontend Solutions',
      icon: <FaCode size={24} />,
      color: 'blue',
      services: [
        {
          title: 'WordPress Development',
          icon: <FaWordpress size={20} />,
          plans: [
            {
              name: 'Starter',
              price: '$1,200',
              originalPrice: '$1,500',
              features: ['5-8 Professional Pages', 'Responsive Design', 'Basic SEO', 'Contact Forms', '30 Days Support'],
              popular: false,
              badge: 'Best for Small Business'
            },
            {
              name: 'Business',
              price: '$3,500',
              originalPrice: '$4,000',
              features: ['10-15 Custom Pages', 'WooCommerce Store', 'Advanced SEO', 'Blog Setup', '60 Days Support'],
              popular: true,
              badge: 'Most Popular'
            },
            {
              name: 'Enterprise',
              price: '$7,000',
              originalPrice: '$8,000',
              features: ['Unlimited Pages', 'Custom Functionality', 'Multi-language', 'Priority Support', '90 Days Support'],
              popular: false,
              badge: 'Advanced Features'
            }
          ]
        },
        {
          title: 'Next.js Applications',
          icon: <FaReact size={20} />,
          plans: [
            {
              name: 'Professional',
              price: '$10,000',
              originalPrice: '$12,000',
              features: ['Custom React App', 'Modern UI/UX', 'API Integration', 'Authentication', '90 Days Support'],
              popular: false,
              badge: 'Modern Stack'
            },
            {
              name: 'Enterprise',
              price: '$22,000',
              originalPrice: '$25,000',
              features: ['Complex Applications', 'Admin Dashboard', 'Real-time Features', 'Scalable Architecture', '120 Days Support'],
              popular: true,
              badge: 'Full-Featured'
            }
          ]
        }
      ]
    },
    {
      id: 'backend',
      title: 'Backend Development',
      subtitle: 'Server Solutions',
      icon: <FaServer size={24} />,
      color: 'green',
      services: [
        {
          title: 'Django Backend',
          icon: <FaPython size={20} />,
          plans: [
            {
              name: 'API Development',
              price: '$8,000',
              originalPrice: '$10,000',
              features: ['RESTful APIs', 'Admin Panel', 'User Auth', 'Database Setup', 'Documentation'],
              popular: false,
              badge: 'Python Framework'
            },
            {
              name: 'Full Backend',
              price: '$12,000',
              originalPrice: '$15,000',
              features: ['Complete Backend', 'Advanced Security', 'Custom Features', 'Testing Suite', 'Deployment'],
              popular: true,
              badge: 'Complete Solution'
            }
          ]
        },
        {
          title: 'Node.js Backend',
          icon: <FaNodeJs size={20} />,
          plans: [
            {
              name: 'Express API',
              price: '$7,000',
              originalPrice: '$9,000',
              features: ['Express.js APIs', 'Real-time Features', 'Authentication', 'Database Integration', 'API Docs'],
              popular: false,
              badge: 'JavaScript Stack'
            },
            {
              name: 'Microservices',
              price: '$15,000',
              originalPrice: '$18,000',
              features: ['Microservices Architecture', 'Container Setup', 'Load Balancing', 'Monitoring', 'DevOps'],
              popular: true,
              badge: 'Enterprise Ready'
            }
          ]
        }
      ]
    },
    {
      id: 'database',
      title: 'Database Solutions',
      subtitle: 'Data Management',
      icon: <FaDatabase size={24} />,
      color: 'purple',
      services: [
        {
          title: 'MySQL Solutions',
          icon: <FaDatabase size={20} />,
          plans: [
            {
              name: 'Basic Setup',
              price: '$2,000',
              originalPrice: '$2,500',
              features: ['Database Design', 'MySQL Setup', 'Basic Optimization', 'Backup Setup', 'Documentation'],
              popular: false,
              badge: 'Quick Start'
            },
            {
              name: 'Advanced MySQL',
              price: '$3,500',
              originalPrice: '$4,500',
              features: ['Complex Queries', 'Performance Tuning', 'Replication', 'Security Setup', 'Monitoring'],
              popular: true,
              badge: 'Optimized'
            }
          ]
        },
        {
          title: 'PostgreSQL Solutions',
          icon: <FaDatabase size={20} />,
          plans: [
            {
              name: 'Standard Setup',
              price: '$2,500',
              originalPrice: '$3,000',
              features: ['Advanced Database Design', 'PostgreSQL Setup', 'Query Optimization', 'Security Config', 'Support'],
              popular: false,
              badge: 'Advanced Features'
            },
            {
              name: 'Enterprise PostgreSQL',
              price: '$5,000',
              originalPrice: '$6,000',
              features: ['High Availability', 'Clustering', 'Advanced Security', 'Performance Monitoring', 'DBA Support'],
              popular: true,
              badge: 'Enterprise Grade'
            }
          ]
        }
      ]
    },
    {
      id: 'support',
      title: 'Support & Maintenance',
      subtitle: 'Ongoing Care',
      icon: <FaTools size={24} />,
      color: 'orange',
      services: [
        {
          title: 'Website Maintenance',
          icon: <FaTools size={20} />,
          plans: [
            {
              name: 'Basic Care',
              price: '$150',
              originalPrice: '$200',
              features: ['Monthly Updates', 'Security Monitoring', 'Basic Support', 'Backups', 'Reports'],
              popular: false,
              badge: 'Essential Care',
              isMonthly: true
            },
            {
              name: 'Premium Care',
              price: '$400',
              originalPrice: '$500',
              features: ['Weekly Updates', 'Advanced Security', 'Priority Support', 'Content Updates', 'SEO Monitoring'],
              popular: true,
              badge: 'Full Service',
              isMonthly: true
            },
            {
              name: 'Enterprise Support',
              price: '$800',
              originalPrice: '$1000',
              features: ['Daily Monitoring', 'Dedicated Support', 'Custom Development', 'SLA Guarantee', 'Emergency Response'],
              popular: false,
              badge: 'VIP Treatment',
              isMonthly: true
            }
          ]
        }
      ]
    }
  ];

  const openModal = (categoryIndex, serviceIndex) => {
    setActiveModal({ category: categoryIndex, service: serviceIndex });
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = 'auto';
  };

  const getColorClasses = (color, variant = 'primary') => {
    const colors = {
      blue: {
        primary: 'bg-blue-500 text-white',
        secondary: 'bg-blue-50 text-blue-700 border-blue-200',
        accent: 'text-blue-600',
        gradient: 'from-blue-500 to-blue-600',
        ring: 'ring-blue-200'
      },
      green: {
        primary: 'bg-green-500 text-white',
        secondary: 'bg-green-50 text-green-700 border-green-200',
        accent: 'text-green-600',
        gradient: 'from-green-500 to-green-600',
        ring: 'ring-green-200'
      },
      purple: {
        primary: 'bg-purple-500 text-white',
        secondary: 'bg-purple-50 text-purple-700 border-purple-200',
        accent: 'text-purple-600',
        gradient: 'from-purple-500 to-purple-600',
        ring: 'ring-purple-200'
      },
      orange: {
        primary: 'bg-orange-500 text-white',
        secondary: 'bg-orange-50 text-orange-700 border-orange-200',
        accent: 'text-orange-600',
        gradient: 'from-orange-500 to-orange-600',
        ring: 'ring-orange-200'
      }
    };
    return colors[color][variant];
  };

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 font-medium text-sm mb-6">
            <FaLightbulb className="mr-2" />
            Smart Pricing Solutions
          </div>
          <h2 className="text-5xl font-bold mb-6 text-gray-900 leading-tight">
            Transparent Pricing for <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Every Project Type
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of development services with clear, upfront pricing. 
            No hidden fees, no surprises—just professional solutions that fit your budget.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12 bg-white rounded-2xl p-2 shadow-lg max-w-4xl mx-auto">
          {pricingCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex items-center px-6 py-4 rounded-xl font-medium transition-all duration-300 m-1 ${
                activeTab === index
                  ? getColorClasses(category.color, 'primary') + ' shadow-lg'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              <div className="text-left">
                <div className="font-semibold">{category.title}</div>
                <div className="text-xs opacity-75">{category.subtitle}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="max-w-7xl mx-auto">
          {pricingCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`transition-all duration-500 ${activeTab === categoryIndex ? 'block' : 'hidden'}`}
            >
              {category.services.map((service, serviceIndex) => (
                <div key={serviceIndex} className="mb-16">
                  {/* Service Header */}
                  <div className="text-center mb-8">
                    <div className={`inline-flex items-center px-4 py-2 rounded-full border-2 ${getColorClasses(category.color, 'secondary')} mb-4`}>
                      {service.icon}
                      <span className="ml-2 font-semibold">{service.title}</span>
                    </div>
                  </div>

                  {/* Plans Grid */}
                  <div className={`grid gap-8 ${service.plans.length === 2 ? 'md:grid-cols-2 max-w-4xl mx-auto' : service.plans.length === 3 ? 'md:grid-cols-3 max-w-6xl mx-auto' : 'md:grid-cols-1 max-w-2xl mx-auto'}`}>
                    {service.plans.map((plan, planIndex) => (
                      <div
                        key={planIndex}
                        className={`relative bg-white rounded-3xl shadow-xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                          plan.popular
                            ? `border-${category.color}-300 ring-4 ${getColorClasses(category.color, 'ring')}`
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        {/* Popular Badge */}
                        {plan.popular && (
                          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                            <div className={`flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${getColorClasses(category.color, 'gradient')} text-white shadow-lg`}>
                              <FaStar className="mr-2 text-yellow-300" size={14} />
                              <span className="font-medium text-sm">Most Popular</span>
                            </div>
                          </div>
                        )}

                        <div className="p-8">
                          {/* Plan Header */}
                          <div className="text-center mb-6">
                            <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-3 ${getColorClasses(category.color, 'secondary')}`}>
                              {plan.badge}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                            
                            {/* Pricing */}
                            <div className="flex items-baseline justify-center mb-1">
                              <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                              {plan.isMonthly && <span className="text-gray-500 ml-1">/month</span>}
                            </div>
                            {plan.originalPrice && (
                              <div className="flex items-center justify-center">
                                <span className="text-gray-400 line-through mr-2">{plan.originalPrice}</span>
                                <span className="text-green-500 font-medium text-sm">
                                  Save ${parseInt(plan.originalPrice.replace('$', '').replace(',', '')) - parseInt(plan.price.replace('$', '').replace(',', ''))}
                                </span>
                              </div>
                            )}
                          </div>

                          {/* Features */}
                          <ul className="space-y-4 mb-8">
                            {plan.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start">
                                <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${getColorClasses(category.color, 'secondary')}`}>
                                  <FaCheck size={12} className={getColorClasses(category.color, 'accent')} />
                                </div>
                                <span className="ml-3 text-gray-700">{feature}</span>
                              </li>
                            ))}
                          </ul>

                          {/* CTA Button */}
                          <div className="space-y-3">
                            <button 
                              className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                                plan.popular
                                  ? `bg-gradient-to-r ${getColorClasses(category.color, 'gradient')} text-white hover:shadow-lg`
                                  : `border-2 ${getColorClasses(category.color, 'secondary')} hover:shadow-md`
                              }`}
                            >
                              <FaRocket className="inline mr-2" size={14} />
                              Get Started
                            </button>
                            
                            <button 
                              onClick={() => openModal(categoryIndex, serviceIndex)}
                              className="w-full py-2 px-4 text-gray-600 hover:text-gray-900 font-medium transition-colors"
                            >
                              View Details & Process
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Modal */}
        {activeModal !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className={`p-6 bg-gradient-to-r ${getColorClasses(pricingCategories[activeModal.category].color, 'gradient')} rounded-t-3xl`}>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="bg-white bg-opacity-20 p-3 rounded-xl mr-4">
                      {pricingCategories[activeModal.category].services[activeModal.service].icon}
                    </div>
                    <div className="text-white">
                      <h3 className="text-2xl font-bold">{pricingCategories[activeModal.category].services[activeModal.service].title}</h3>
                      <p className="text-white/80">Complete service details and process</p>
                    </div>
                  </div>
                  <button 
                    onClick={closeModal}
                    className="text-white hover:text-gray-200 transition-colors p-2"
                  >
                    <FaTimes size={24} />
                  </button>
                </div>
              </div>
              
              {/* Modal Content */}
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-4">What&apos;s Included</h4>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                        Complete project analysis and planning
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                        Custom development tailored to your needs
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                        Quality assurance and testing
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                        Documentation and training
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                        Post-launch support and maintenance
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-4">Our Process</h4>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 ${getColorClasses(pricingCategories[activeModal.category].color, 'primary')}`}>
                          1
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Discovery & Planning</div>
                          <div className="text-gray-600 text-sm">We analyze your requirements and create a detailed project plan</div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 ${getColorClasses(pricingCategories[activeModal.category].color, 'primary')}`}>
                          2
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Development & Testing</div>
                          <div className="text-gray-600 text-sm">We build your solution with regular updates and quality checks</div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 ${getColorClasses(pricingCategories[activeModal.category].color, 'primary')}`}>
                          3
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Launch & Support</div>
                          <div className="text-gray-600 text-sm">We deploy your solution and provide ongoing support</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                  <button 
                    className={`px-8 py-4 rounded-xl font-semibold transition-all bg-gradient-to-r ${getColorClasses(pricingCategories[activeModal.category].color, 'gradient')} text-white hover:shadow-lg`}
                  >
                    Start Your Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Need a Custom Solution?</h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                Every business is unique. Let&apos;s discuss your specific requirements and create a 
                tailored solution that perfectly fits your needs and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                  <FaLightbulb className="mr-2" />
                  Get Custom Quote
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-colors flex items-center justify-center">
                  <FaRocket className="mr-2" />
                  Schedule Strategy Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;