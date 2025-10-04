'use client';
import { useState } from 'react';
import { 
  FaReact, 
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaCloud,
  FaMobile,
  FaRocket,
  FaShieldAlt,
  FaCode,
  FaCog,
  FaUsers,
  FaChartLine,
  FaCheck,
  FaStar,
  FaArrowRight,
  FaEnvelope,
  FaPhone,
  FaLaptopCode,
  FaServer,
  FaGlobe,
  FaLightbulb
} from 'react-icons/fa';

const CustomWebDevelopmentPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const customSolutions = [
    {
      title: 'SaaS Applications',
      icon: <FaCloud size={24} className="text-blue-600" />,
      description: 'Scalable Software-as-a-Service platforms with subscription management and multi-tenancy',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      features: [
        'Multi-tenant architecture',
        'Subscription & billing management',
        'User dashboard & analytics',
        'API development & documentation',
        'Real-time notifications',
        'Advanced user permissions',
        'Data export & reporting',
        'Third-party integrations'
      ],
      benefits: 'Custom SaaS solutions that scale with your business and provide recurring revenue streams.',
      projects: '25+ SaaS Platforms Built',
      timeline: '8-16 weeks',
      startingPrice: '$15,000'
    },
    {
      title: 'E-commerce Platforms',
      icon: <FaChartLine size={24} className="text-green-600" />,
      description: 'Advanced e-commerce solutions with custom features, payment processing, and inventory management',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['Next.js', 'Stripe API', 'MongoDB', 'Vercel'],
      features: [
        'Custom shopping cart & checkout',
        'Payment gateway integration',
        'Inventory management system',
        'Order tracking & fulfillment',
        'Customer account portals',
        'Advanced product filtering',
        'Discount & coupon systems',
        'Multi-currency support'
      ],
      benefits: 'High-converting e-commerce platforms that increase sales by 40% compared to template solutions.',
      projects: '40+ E-commerce Sites',
      timeline: '6-12 weeks',
      startingPrice: '$12,000'
    },
    {
      title: 'Business Management Systems',
      icon: <FaUsers size={24} className="text-purple-600" />,
      description: 'Custom CRM, ERP, and business process management applications tailored to your workflow',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Django', 'PostgreSQL', 'Redis'],
      features: [
        'Customer relationship management',
        'Lead tracking & conversion',
        'Project management tools',
        'Team collaboration features',
        'Document management',
        'Reporting & analytics',
        'Workflow automation',
        'Integration with existing tools'
      ],
      benefits: 'Streamline operations and increase productivity by 50% with custom business management solutions.',
      projects: '60+ Business Systems',
      timeline: '10-20 weeks',
      startingPrice: '$18,000'
    },
    {
      title: 'Learning Management Systems',
      icon: <FaLaptopCode size={24} className="text-orange-600" />,
      description: 'Custom educational platforms with course management, assessments, and student tracking',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Socket.io'],
      features: [
        'Course creation & management',
        'Video streaming & hosting',
        'Interactive quizzes & assessments',
        'Student progress tracking',
        'Discussion forums & chat',
        'Certificate generation',
        'Payment & subscription handling',
        'Mobile-responsive design'
      ],
      benefits: 'Engage students and increase course completion rates by 60% with interactive learning platforms.',
      projects: '20+ LMS Platforms',
      timeline: '8-14 weeks',
      startingPrice: '$14,000'
    },
    {
      title: 'Real Estate Platforms',
      icon: <FaGlobe size={24} className="text-cyan-600" />,
      description: 'Advanced property management and real estate marketplace applications with MLS integration',
      image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Python', 'PostgreSQL', 'MapBox'],
      features: [
        'Property listing management',
        'Advanced search & filtering',
        'Interactive maps & locations',
        'Virtual tour integration',
        'Lead capture & CRM',
        'Mortgage calculator tools',
        'Agent management system',
        'MLS data integration'
      ],
      benefits: 'Generate 3x more qualified leads with custom real estate platforms designed for conversion.',
      projects: '15+ Real Estate Platforms',
      timeline: '10-16 weeks',
      startingPrice: '$16,000'
    },
    {
      title: 'Healthcare Applications',
      icon: <FaShieldAlt size={24} className="text-red-600" />,
      description: 'HIPAA-compliant healthcare systems with patient management and telemedicine features',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS HIPAA'],
      features: [
        'Patient portal & records',
        'Appointment scheduling',
        'Telemedicine integration',
        'HIPAA-compliant infrastructure',
        'Electronic health records',
        'Prescription management',
        'Insurance claim processing',
        'Medical billing integration'
      ],
      benefits: 'Improve patient care and reduce administrative costs by 35% with custom healthcare solutions.',
      projects: '12+ Healthcare Apps',
      timeline: '12-20 weeks',
      startingPrice: '$20,000'
    }
  ];

  const technologies = [
    {
      category: 'Frontend',
      icon: <FaReact className="text-cyan-500" />,
      tools: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'],
      description: 'Modern, responsive user interfaces with excellent performance'
    },
    {
      category: 'Backend',
      icon: <FaServer className="text-green-500" />,
      tools: ['Node.js', 'Python', 'Django', 'Express.js', 'FastAPI'],
      description: 'Scalable server-side solutions with robust APIs'
    },
    {
      category: 'Database',
      icon: <FaDatabase className="text-blue-500" />,
      tools: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Firebase'],
      description: 'Efficient data storage and management systems'
    },
    {
      category: 'Cloud & DevOps',
      icon: <FaCloud className="text-purple-500" />,
      tools: ['AWS', 'Vercel', 'Docker', 'GitHub Actions', 'Nginx'],
      description: 'Reliable hosting and deployment infrastructure'
    }
  ];

  const developmentProcess = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements, research your market, and create detailed project specifications.',
      duration: '1-2 weeks'
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Create wireframes, UI/UX designs, and interactive prototypes for user testing.',
      duration: '2-3 weeks'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Build your application with regular updates, code reviews, and comprehensive testing.',
      duration: '6-12 weeks'
    },
    {
      step: '04',
      title: 'Deployment & Launch',
      description: 'Deploy to production, configure monitoring, and provide training and documentation.',
      duration: '1-2 weeks'
    },
    {
      step: '05',
      title: 'Support & Maintenance',
      description: 'Ongoing support, updates, security patches, and feature enhancements.',
      duration: 'Ongoing'
    }
  ];

  const pricingPlans = [
    {
      name: 'MVP Development',
      price: '$10,000',
      originalPrice: '$12,000',
      description: 'Perfect for startups and proof of concept',
      features: [
        'Core functionality development',
        'Basic UI/UX design',
        'Database setup',
        'API development',
        'Basic testing',
        '30 days support',
        'Documentation'
      ],
      popular: false,
      timeline: '4-6 weeks'
    },
    {
      name: 'Full Application',
      price: '$25,000',
      originalPrice: '$30,000',
      description: 'Complete solution for growing businesses',
      features: [
        'Full-featured application',
        'Advanced UI/UX design',
        'Database optimization',
        'Third-party integrations',
        'Comprehensive testing',
        '90 days support',
        'Admin dashboard',
        'Performance optimization'
      ],
      popular: true,
      timeline: '8-12 weeks'
    },
    {
      name: 'Enterprise Solution',
      price: '$50,000+',
      originalPrice: '$60,000+',
      description: 'Scalable solutions for large organizations',
      features: [
        'Complex enterprise features',
        'Multi-user permissions',
        'Advanced integrations',
        'High availability setup',
        'Security auditing',
        '6 months support',
        'Team training',
        'Ongoing maintenance'
      ],
      popular: false,
      timeline: '12-20 weeks'
    }
  ];

  const testimonials = [
    {
      name: 'Alex Rivera',
      company: 'TechFlow SaaS',
      text: 'The custom SaaS platform they built exceeded our expectations. We&apos;ve scaled to 1000+ users with zero downtime.',
      rating: 5,
      project: 'SaaS Platform'
    },
    {
      name: 'Maria González',
      company: 'GreenLeaf E-commerce',
      text: 'Our custom e-commerce platform increased conversions by 40%. The team understood exactly what we needed.',
      rating: 5,
      project: 'E-commerce Platform'
    },
    {
      name: 'Dr. James Wilson',
      company: 'MedCare Solutions',
      text: 'The HIPAA-compliant patient management system streamlined our entire practice. Highly professional team.',
      rating: 5,
      project: 'Healthcare Application'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 font-medium text-sm mb-6">
                  <FaCode className="mr-2" />
                  Custom Web Development Experts
                </div>
                
                <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Build Powerful Custom
                  <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Web Applications
                  </span>
                </h1>
                
                <p className="text-xl text-gray-600 mb-8">
                  We create bespoke web applications using cutting-edge technologies like React, Node.js, 
                  and Python. From SaaS platforms to e-commerce solutions, we build scalable applications 
                  that grow with your business.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all inline-flex items-center justify-center">
                    <FaRocket className="mr-2" />
                    Start Your Project
                  </button>
                  <button className="border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center">
                    <FaLightbulb className="mr-2" />
                    Free Consultation
                  </button>
                </div>
                
                <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">200+</div>
                    <div className="text-gray-600">Custom Apps Built</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">99%</div>
                    <div className="text-gray-600">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">24/7</div>
                    <div className="text-gray-600">Support Available</div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative z-10">
                  <img 
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Custom Web Development"
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg opacity-70"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg opacity-70"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Cutting-Edge Technologies We Use
            </h2>
            <p className="text-lg text-gray-600">
              We leverage the latest and most reliable technologies to build fast, secure, 
              and scalable web applications that stand the test of time.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{tech.category}</h3>
                <p className="text-gray-600 mb-6 text-sm">{tech.description}</p>
                <div className="flex flex-wrap gap-2">
                  {tech.tools.map((tool, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Custom Solutions We Build
            </h2>
            <p className="text-lg text-gray-600">
              From SaaS platforms to enterprise applications, we create custom web solutions 
              tailored to your specific business needs and industry requirements.
            </p>
          </div>
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12 bg-white rounded-2xl p-2 shadow-lg max-w-5xl mx-auto">
            {customSolutions.map((solution, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center px-4 py-3 rounded-xl font-medium transition-all duration-300 m-1 ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <span className="mr-2">{solution.icon}</span>
                <span className="hidden sm:inline text-sm">{solution.title}</span>
              </button>
            ))}
          </div>
          
          {/* Tab Content */}
          <div className="max-w-6xl mx-auto">
            {customSolutions.map((solution, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${activeTab === index ? 'block' : 'hidden'}`}
              >
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="p-12">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mr-4">
                          {solution.icon}
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900">{solution.title}</h3>
                      </div>
                      
                      <p className="text-lg text-gray-600 mb-6">{solution.description}</p>
                      
                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {solution.technologies.map((tech, idx) => (
                            <span key={idx} className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mb-8">
                        <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h4>
                        <ul className="grid grid-cols-1 gap-3">
                          {solution.features.slice(0, 6).map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" size={14} />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8">
                        <p className="text-gray-800 font-medium">{solution.benefits}</p>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 mb-8 text-center">
                        <div>
                          <div className="text-sm text-gray-500">Starting Price</div>
                          <div className="font-bold text-gray-900">{solution.startingPrice}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Timeline</div>
                          <div className="font-bold text-gray-900">{solution.timeline}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Experience</div>
                          <div className="font-bold text-gray-900">{solution.projects}</div>
                        </div>
                      </div>
                      
                      <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all inline-flex items-center">
                        Get Quote for This Solution
                        <FaArrowRight className="ml-2" size={14} />
                      </button>
                    </div>
                    
                    <div className="relative">
                      <img 
                        src={solution.image}
                        alt={solution.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Development Process
            </h2>
            <p className="text-lg text-gray-600">
              We follow a proven methodology to ensure your project is delivered on time, 
              within budget, and exceeds your expectations.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {developmentProcess.map((phase, index) => (
              <div key={index} className="flex items-start mb-12 last:mb-0">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-6">
                  {phase.step}
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{phase.title}</h3>
                    <span className="text-sm text-gray-500 bg-gray-200 px-3 py-1 rounded-full">{phase.duration}</span>
                  </div>
                  <p className="text-gray-600">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Custom Development Pricing
            </h2>
            <p className="text-lg text-gray-600">
              Transparent pricing for custom web development projects. Each solution is tailored 
              to your specific requirements with clear milestones and deliverables.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-xl p-8 ${
                  plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  </div>
                  {plan.originalPrice && (
                    <div className="flex items-center justify-center mb-4">
                      <span className="text-gray-400 line-through mr-2">{plan.originalPrice}</span>
                      <span className="text-green-500 font-medium text-sm">Save 20%</span>
                    </div>
                  )}
                  
                  <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full inline-block">
                    {plan.timeline}
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" size={14} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-4 px-6 rounded-lg font-semibold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600">
              Hear from businesses that have transformed their operations with our custom web applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" size={16} />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.company}</div>
                  <div className="text-blue-600 text-sm font-medium">{testimonial.project}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Build Your Custom Application?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let&apos;s turn your vision into reality. Get a free consultation and detailed project 
              proposal for your custom web application. We&apos;ll discuss your requirements, 
              technology stack, timeline, and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all inline-flex items-center justify-center">
                <FaRocket className="mr-2" />
                Start Your Project
              </button>
              <button className="border-2 border-gray-400 text-gray-300 hover:border-white hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center">
                <FaPhone className="mr-2" />
                Schedule Free Call
              </button>
            </div>
            
            {/* Contact Info */}
            <div className="mt-12 pt-8 border-t border-gray-700">
              <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                <div className="flex items-center justify-center">
                  <FaEnvelope className="text-gray-400 mr-3" />
                  <div>
                    <div className="text-gray-400 text-sm">Email Us</div>
                    <div className="text-white font-medium">hello@radth.com</div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <FaPhone className="text-gray-400 mr-3" />
                  <div>
                    <div className="text-gray-400 text-sm">Call Us</div>
                    <div className="text-white font-medium">(555) 123-4567</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomWebDevelopmentPage;