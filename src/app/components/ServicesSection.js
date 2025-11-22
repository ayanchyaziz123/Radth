import { useState } from 'react';
import { 
  UtensilsCrossed,
  ShoppingCart,
  Hospital,
  GraduationCap,
  Home,
  Briefcase,
  ArrowRight,
  X,
  Check
} from 'lucide-react';

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: 'Restaurant Management',
      description: 'Real-time order tracking, live table management, kitchen display systems, inventory monitoring, and staff coordination for seamless restaurant operations.',
      icon: <UtensilsCrossed size={28} />,
      color: 'from-orange-500 to-orange-700',
      bgLight: 'bg-orange-50',
      iconColor: 'text-orange-600',
      link: '/restaurant-management',
      fullDetails: {
        overview: 'Transform your restaurant operations with our comprehensive management system. Built for restaurants of all sizes, from cafes to fine dining establishments.',
        features: [
          'Real-time order tracking from kitchen to table',
          'Live table management with reservation system',
          'Kitchen Display System (KDS) for efficient cooking',
          'Inventory monitoring with low-stock alerts',
          'Staff scheduling and performance tracking',
          'Customer feedback and review management',
          'Multi-location support for restaurant chains',
          'Integration with popular POS systems'
        ],
        benefits: [
          'Reduce wait times by 40% with optimized workflows',
          'Minimize food waste through smart inventory management',
          'Increase table turnover with efficient operations',
          'Improve customer satisfaction scores'
        ]
      }
    },
    {
      title: 'Real Estate Platform',
      description: 'Live property listings, real-time price updates, instant inquiry notifications, virtual tour scheduling, and automated lead management system.',
      icon: <Home size={28} />,
      color: 'from-emerald-500 to-emerald-700',
      bgLight: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
      link: '/real-estate',
      fullDetails: {
        overview: 'A complete real estate platform that connects buyers, sellers, and agents with powerful tools for property management and sales.',
        features: [
          'Live property listings with instant updates',
          'Advanced search with filters and map integration',
          'Virtual tour scheduling and video walkthroughs',
          'Automated lead capture and distribution',
          'Document management and e-signature integration',
          'CRM for agent-client relationship management',
          'Market analytics and pricing insights',
          'Mobile app for on-the-go property viewing'
        ],
        benefits: [
          'Close deals 30% faster with streamlined processes',
          'Generate more qualified leads automatically',
          'Reduce administrative work by 50%',
          'Provide better customer experience with virtual tours'
        ]
      }
    },
    {
      title: 'Medical Services',
      description: 'Real-time appointment booking, live queue management, instant patient notifications, telemedicine consultations, and emergency alert systems.',
      icon: <Hospital size={28} />,
      color: 'from-red-500 to-red-700',
      bgLight: 'bg-red-50',
      iconColor: 'text-red-600',
      link: '/medical-services',
      fullDetails: {
        overview: 'HIPAA-compliant healthcare management system designed to improve patient care and streamline medical practice operations.',
        features: [
          'Online appointment booking with calendar sync',
          'Live queue management and wait time estimates',
          'Telemedicine platform with video consultations',
          'Electronic Health Records (EHR) integration',
          'Prescription management and pharmacy integration',
          'Patient portal for test results and records',
          'Emergency alert system for critical situations',
          'Automated appointment reminders via SMS/email'
        ],
        benefits: [
          'Reduce no-shows by 60% with automated reminders',
          'Improve patient satisfaction with shorter wait times',
          'Expand reach with telemedicine capabilities',
          'Ensure compliance with healthcare regulations'
        ]
      }
    },
    {
      title: 'E-Commerce Solutions',
      description: 'Live inventory tracking, real-time order status, instant payment processing, automated shipping updates, and customer support chat.',
      icon: <ShoppingCart size={28} />,
      color: 'from-blue-500 to-blue-700',
      bgLight: 'bg-blue-50',
      iconColor: 'text-blue-600',
      link: '/ecommerce',
      fullDetails: {
        overview: 'Complete e-commerce platform with everything you need to sell online, from product management to order fulfillment.',
        features: [
          'Real-time inventory synchronization across channels',
          'Multi-payment gateway integration',
          'Automated shipping and tracking notifications',
          'Customer support chat with AI assistance',
          'Product recommendation engine',
          'Abandoned cart recovery system',
          'Analytics dashboard with sales insights',
          'Mobile-responsive storefront design'
        ],
        benefits: [
          'Increase conversion rates by 25% with optimized checkout',
          'Reduce cart abandonment with automated recovery',
          'Scale effortlessly during peak shopping seasons',
          'Improve customer retention with personalized experiences'
        ]
      }
    },
    {
      title: 'Education Platform',
      description: 'Live virtual classrooms, real-time attendance tracking, instant grading systems, interactive student dashboards, and parent notification portals.',
      icon: <GraduationCap size={28} />,
      color: 'from-purple-500 to-purple-700',
      bgLight: 'bg-purple-50',
      iconColor: 'text-purple-600',
      link: '/education',
      fullDetails: {
        overview: 'Modern learning management system that brings education into the digital age with interactive tools for students, teachers, and parents.',
        features: [
          'Live virtual classrooms with video conferencing',
          'Real-time attendance tracking and reporting',
          'Automated grading and assignment management',
          'Interactive student progress dashboards',
          'Parent portal with instant notifications',
          'Course content library and resource sharing',
          'Quiz and assessment creation tools',
          'Student collaboration and discussion forums'
        ],
        benefits: [
          'Enhance student engagement with interactive tools',
          'Save teachers 10+ hours per week on admin tasks',
          'Improve parent-teacher communication',
          'Support hybrid and remote learning models'
        ]
      }
    },
    {
      title: 'Business Services',
      description: 'Real-time project tracking, live collaboration tools, instant client communications, automated workflow management, and performance analytics.',
      icon: <Briefcase size={28} />,
      color: 'from-cyan-500 to-cyan-700',
      bgLight: 'bg-cyan-50',
      iconColor: 'text-cyan-600',
      link: '/business-services',
      fullDetails: {
        overview: 'Enterprise-grade business management platform that unifies project management, team collaboration, and client communication.',
        features: [
          'Real-time project tracking with Gantt charts',
          'Team collaboration with file sharing',
          'Client portal for project updates',
          'Automated workflow and task assignment',
          'Time tracking and resource allocation',
          'Invoice generation and payment tracking',
          'Performance analytics and reporting',
          'Integration with popular business tools'
        ],
        benefits: [
          'Increase productivity by 35% with streamlined workflows',
          'Improve project delivery times',
          'Enhance client satisfaction with transparency',
          'Make data-driven decisions with analytics'
        ]
      }
    },
  ];

  return (
    <>
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-600 font-medium text-sm mb-4 border border-blue-100">
              Industry Solutions
            </span>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Tailored Solutions for Your Industry
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We deliver specialized technology solutions designed specifically for your industry's 
              unique challenges and opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl border-2 border-gray-100 hover:border-blue-200 transition-all duration-300 group overflow-hidden"
                style={{
                  transform: hoveredIndex === index ? 'translateY(-8px)' : 'translateY(0)',
                  boxShadow: hoveredIndex === index ? '0 20px 40px -10px rgba(59, 130, 246, 0.1)' : '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="h-full flex flex-col">
                  <div className={`h-1 w-full bg-gradient-to-r ${service.color}`}></div>
                
                  <div className="p-8 flex-grow">
                    <div className={`w-16 h-16 ${service.bgLight} rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 ${hoveredIndex === index ? 'scale-110' : 'scale-100'}`}>
                      <div className={service.iconColor}>
                        {service.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6">
                      {service.description}
                    </p>
                    
                    <button 
                      onClick={() => setSelectedService(service)}
                      className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-700 transition-colors mt-auto group"
                    >
                      Learn more
                      <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <a 
              href="#contact" 
              className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl transition-all hover:bg-blue-700 shadow-lg shadow-blue-600/20"
            >
              Discuss your industry needs
            </a>
          </div>
        </div>
      </section>

      {/* Modal/Popover */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Header */}
            <div className={`bg-gradient-to-r ${selectedService.color} p-8 text-white relative`}>
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
                  {selectedService.icon}
                </div>
                <h2 className="text-3xl font-bold">{selectedService.title}</h2>
              </div>
              
              <p className="text-white text-opacity-90 text-lg">
                {selectedService.description}
              </p>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Overview */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Overview</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {selectedService.fullDetails.overview}
                </p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedService.fullDetails.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className={`mt-1 ${selectedService.iconColor}`}>
                        <Check size={20} />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedService.fullDetails.benefits.map((benefit, idx) => (
                    <div key={idx} className={`p-4 ${selectedService.bgLight} rounded-xl border-2 border-opacity-20`}>
                      <p className="text-gray-800 font-medium">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                <button
                  onClick={() => {
                    setSelectedService(null);
                    window.location.href = '#contact';
                  }}
                  className={`flex-1 px-6 py-3 bg-gradient-to-r ${selectedService.color} text-white font-semibold rounded-xl hover:opacity-90 transition-opacity`}
                >
                  Get Started
                </button>
                <button
                  onClick={() => setSelectedService(null)}
                  className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ServicesSection;