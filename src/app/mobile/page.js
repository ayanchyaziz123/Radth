'use client';
import { useState } from 'react';
import { 
  FaMobile, 
  FaApple,
  FaAndroid,
  FaReact,
  FaCode,
  FaCloud,
  FaShoppingCart,
  FaGamepad,
  FaHeart,
  FaGraduationCap,
  FaUtensils,
  FaCamera,
  FaMusic,
  FaMapMarkerAlt,
  FaCheck,
  FaStar,
  FaArrowRight,
  FaEnvelope,
  FaPhone,
  FaRocket,
  FaLightbulb,
  FaUsers,
  FaShieldAlt,
  FaCog,
  FaChartLine,
  FaDownload,
  FaBolt,
  FaPalette
} from 'react-icons/fa';

const MobileAppDevelopmentPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activePlatform, setActivePlatform] = useState(0);

  const appCategories = [
    {
      title: 'E-commerce & Shopping Apps',
      icon: <FaShoppingCart size={24} className="text-green-600" />,
      description: 'Feature-rich shopping apps with payment integration, product catalogs, and user accounts',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      platforms: ['iOS', 'Android', 'React Native'],
      features: [
        'Product catalog with search & filters',
        'Shopping cart & wishlist functionality',
        'Secure payment gateway integration',
        'User accounts & order history',
        'Push notifications for offers',
        'Barcode scanning & AR try-on',
        'Social sharing & reviews',
        'Inventory management integration'
      ],
      benefits: 'Increase mobile sales by 300% and improve customer retention with intuitive shopping experiences.',
      projects: '45+ Shopping Apps',
      timeline: '8-14 weeks',
      startingPrice: '$15,000'
    },
    {
      title: 'Social & Communication Apps',
      icon: <FaUsers size={24} className="text-blue-600" />,
      description: 'Social networking, messaging, and community apps with real-time features',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      platforms: ['iOS', 'Android', 'React Native'],
      features: [
        'Real-time messaging & chat',
        'User profiles & social feeds',
        'Photo & video sharing',
        'Group creation & management',
        'Push notifications & alerts',
        'Voice & video calling',
        'Content moderation tools',
        'Analytics & user insights'
      ],
      benefits: 'Build engaged communities with 80% user retention rates through social features.',
      projects: '30+ Social Apps',
      timeline: '10-16 weeks',
      startingPrice: '$20,000'
    },
    {
      title: 'Business & Productivity Apps',
      icon: <FaChartLine size={24} className="text-purple-600" />,
      description: 'Professional apps for team collaboration, project management, and business operations',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      platforms: ['iOS', 'Android', 'Flutter'],
      features: [
        'Team collaboration tools',
        'Project & task management',
        'File sharing & document editing',
        'Calendar & scheduling integration',
        'Offline functionality',
        'Data synchronization',
        'Role-based permissions',
        'Reporting & analytics'
      ],
      benefits: 'Boost team productivity by 45% with custom business apps designed for mobile workflows.',
      projects: '60+ Business Apps',
      timeline: '6-12 weeks',
      startingPrice: '$12,000'
    },
    {
      title: 'Health & Fitness Apps',
      icon: <FaHeart size={24} className="text-red-600" />,
      description: 'Wellness apps with activity tracking, health monitoring, and personalized coaching',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      platforms: ['iOS', 'Android', 'React Native'],
      features: [
        'Activity & fitness tracking',
        'Health data integration (HealthKit/Google Fit)',
        'Workout plans & coaching',
        'Nutrition & meal tracking',
        'Progress visualization',
        'Social challenges & sharing',
        'Wearable device integration',
        'HIPAA compliance options'
      ],
      benefits: 'Engage users with 70% daily active usage through personalized health experiences.',
      projects: '25+ Health Apps',
      timeline: '8-14 weeks',
      startingPrice: '$18,000'
    },
    {
      title: 'Entertainment & Gaming Apps',
      icon: <FaGamepad size={24} className="text-orange-600" />,
      description: 'Interactive games, media streaming, and entertainment apps with engaging user experiences',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      platforms: ['iOS', 'Android', 'Unity'],
      features: [
        'Interactive gameplay mechanics',
        'Multiplayer & social features',
        'In-app purchases & monetization',
        'Leaderboards & achievements',
        'Media streaming & offline playback',
        'AR/VR integration',
        'Social sharing & communities',
        'Analytics & user engagement'
      ],
      benefits: 'Create viral entertainment apps with 60% higher user engagement than industry average.',
      projects: '35+ Entertainment Apps',
      timeline: '10-18 weeks',
      startingPrice: '$22,000'
    },
    {
      title: 'Food & Restaurant Apps',
      icon: <FaUtensils size={24} className="text-amber-600" />,
      description: 'Food delivery, restaurant management, and culinary apps with location-based services',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      platforms: ['iOS', 'Android', 'React Native'],
      features: [
        'Menu browsing & customization',
        'Online ordering & delivery tracking',
        'Payment integration & tips',
        'Location-based restaurant discovery',
        'Reviews & ratings system',
        'Loyalty programs & rewards',
        'Table reservation system',
        'Kitchen management integration'
      ],
      benefits: 'Increase restaurant orders by 250% with seamless mobile ordering experiences.',
      projects: '40+ Food Apps',
      timeline: '6-12 weeks',
      startingPrice: '$14,000'
    }
  ];

  const platforms = [
    {
      name: 'Native iOS',
      icon: <FaApple size={32} className="text-gray-800" />,
      description: 'Swift & SwiftUI development for optimal iOS performance',
      advantages: [
        'Best performance & user experience',
        'Full access to iOS features',
        'App Store optimization',
        'Native UI components',
        'Advanced iOS integrations'
      ],
      bestFor: 'Premium apps requiring top performance',
      timeline: '8-16 weeks',
      cost: 'Higher development cost'
    },
    {
      name: 'Native Android',
      icon: <FaAndroid size={32} className="text-green-600" />,
      description: 'Kotlin & Jetpack Compose for modern Android apps',
      advantages: [
        'Optimized for Android ecosystem',
        'Google Play Store features',
        'Material Design implementation',
        'Advanced Android capabilities',
        'Wide device compatibility'
      ],
      bestFor: 'Android-first or Google ecosystem apps',
      timeline: '8-16 weeks',
      cost: 'Higher development cost'
    },
    {
      name: 'Cross-Platform',
      icon: <FaReact size={32} className="text-cyan-600" />,
      description: 'React Native & Flutter for multi-platform deployment',
      advantages: [
        'Single codebase for both platforms',
        'Faster time to market',
        'Cost-effective development',
        'Consistent user experience',
        'Easier maintenance'
      ],
      bestFor: 'MVPs and budget-conscious projects',
      timeline: '6-12 weeks',
      cost: 'Lower development cost'
    }
  ];

  const developmentProcess = [
    {
      step: '01',
      title: 'Strategy & Planning',
      description: 'Market research, user persona definition, feature planning, and technical architecture design.',
      duration: '1-2 weeks',
      deliverables: ['Market Analysis', 'User Stories', 'Technical Specs', 'Project Timeline']
    },
    {
      step: '02',
      title: 'UI/UX Design',
      description: 'Wireframing, user interface design, prototyping, and user experience optimization.',
      duration: '2-4 weeks',
      deliverables: ['Wireframes', 'UI Design', 'Interactive Prototype', 'Design System']
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'App development, API integration, quality assurance testing, and performance optimization.',
      duration: '6-12 weeks',
      deliverables: ['Beta App', 'API Integration', 'Test Reports', 'Performance Metrics']
    },
    {
      step: '04',
      title: 'App Store Deployment',
      description: 'App store submission, review process management, and launch preparation.',
      duration: '1-2 weeks',
      deliverables: ['App Store Listing', 'Launch Strategy', 'Marketing Assets', 'Analytics Setup']
    },
    {
      step: '05',
      title: 'Support & Maintenance',
      description: 'Ongoing updates, bug fixes, feature enhancements, and performance monitoring.',
      duration: 'Ongoing',
      deliverables: ['Regular Updates', 'Bug Fixes', 'New Features', 'Performance Reports']
    }
  ];

  const features = [
    {
      icon: <FaPalette className="text-pink-600" />,
      title: 'Custom UI/UX Design',
      description: 'Beautiful, intuitive interfaces designed for optimal user experience and engagement.'
    },
    {
      icon: <FaBolt className="text-yellow-600" />,
      title: 'High Performance',
      description: 'Optimized apps with fast loading times, smooth animations, and efficient resource usage.'
    },
    {
      icon: <FaShieldAlt className="text-green-600" />,
      title: 'Security & Privacy',
      description: 'Enterprise-grade security with data encryption, secure APIs, and privacy compliance.'
    },
    {
      icon: <FaCloud className="text-blue-600" />,
      title: 'Cloud Integration',
      description: 'Seamless integration with cloud services, real-time sync, and scalable backend solutions.'
    },
    {
      icon: <FaCog className="text-gray-600" />,
      title: 'API Development',
      description: 'Custom APIs and third-party integrations for payments, social media, and business tools.'
    },
    {
      icon: <FaChartLine className="text-purple-600" />,
      title: 'Analytics & Insights',
      description: 'Built-in analytics to track user behavior, app performance, and business metrics.'
    }
  ];

  const pricingPlans = [
    {
      name: 'MVP App',
      price: '$8,000',
      originalPrice: '$10,000',
      description: 'Perfect for startups and proof of concept',
      features: [
        'Single platform (iOS or Android)',
        'Core functionality (5-7 screens)',
        'Basic UI/UX design',
        'API integration',
        'App store submission',
        '30 days support',
        'Basic analytics'
      ],
      popular: false,
      timeline: '4-6 weeks'
    },
    {
      name: 'Full-Featured App',
      price: '$20,000',
      originalPrice: '$25,000',
      description: 'Complete app solution for growing businesses',
      features: [
        'Cross-platform (iOS & Android)',
        'Advanced features (10-15 screens)',
        'Custom UI/UX design',
        'Backend & API development',
        'Payment integration',
        'Push notifications',
        '90 days support',
        'Advanced analytics'
      ],
      popular: true,
      timeline: '8-12 weeks'
    },
    {
      name: 'Enterprise App',
      price: '$40,000+',
      originalPrice: '$50,000+',
      description: 'Scalable solutions for large organizations',
      features: [
        'Native iOS & Android apps',
        'Complex features & integrations',
        'Advanced security & compliance',
        'Admin dashboard',
        'Multiple user roles',
        'Third-party integrations',
        '6 months support',
        'Dedicated project manager'
      ],
      popular: false,
      timeline: '12-20 weeks'
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Lee',
      company: 'FitTracker Pro',
      text: 'Our fitness app has over 100K downloads and 4.8-star rating. The team delivered exactly what we envisioned.',
      rating: 5,
      appType: 'Health & Fitness App',
      downloads: '100K+'
    },
    {
      name: 'Carlos Rodriguez',
      company: 'QuickFood Delivery',
      text: 'The food delivery app increased our orders by 300%. Customers love the smooth ordering experience.',
      rating: 5,
      appType: 'Food Delivery App',
      downloads: '50K+'
    },
    {
      name: 'Sarah Kim',
      company: 'TeamSync Business',
      text: 'Our team productivity improved dramatically with the custom business app. Worth every penny.',
      rating: 5,
      appType: 'Business Productivity App',
      downloads: '25K+'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-cyan-50 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-cyan-100 text-indigo-800 font-medium text-sm mb-6">
                  <FaMobile className="mr-2" />
                  Mobile App Development Experts
                </div>
                
                <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Build Amazing Mobile Apps
                  <span className="block bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                    That Users Love
                  </span>
                </h1>
                
                <p className="text-xl text-gray-600 mb-8">
                  We create high-quality native and cross-platform mobile apps for iOS and Android. 
                  From e-commerce to social apps, we build engaging mobile experiences that drive 
                  user engagement and business growth.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button className="bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-all inline-flex items-center justify-center">
                    <FaRocket className="mr-2" />
                    Start Your App Project
                  </button>
                  <button className="border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center">
                    <FaLightbulb className="mr-2" />
                    Free App Consultation
                  </button>
                </div>
                
                <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">250+</div>
                    <div className="text-gray-600">Apps Developed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">4.9</div>
                    <div className="text-gray-600">Average Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">2M+</div>
                    <div className="text-gray-600">App Downloads</div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative z-10">
                  <img 
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Mobile App Development"
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-indigo-100 to-cyan-100 rounded-lg opacity-70"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-lg opacity-70"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Selection */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Mobile App Development Process
            </h2>
            <p className="text-lg text-gray-600">
              From concept to app store launch, we follow a proven methodology to ensure 
              your mobile app is delivered on time and exceeds expectations.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            {developmentProcess.map((phase, index) => (
              <div key={index} className="flex items-start mb-12 last:mb-0">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-indigo-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-6">
                  {phase.step}
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{phase.title}</h3>
                    <span className="text-sm text-gray-500 bg-gray-200 px-3 py-1 rounded-full">{phase.duration}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{phase.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {phase.deliverables.map((deliverable, idx) => (
                      <span key={idx} className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium">
                        {deliverable}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Mobile App Development Pricing
            </h2>
            <p className="text-lg text-gray-600">
              Transparent pricing for mobile app development projects. Choose the package 
              that best fits your needs and budget.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-xl p-8 ${
                  plan.popular ? 'ring-2 ring-indigo-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-medium">
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
                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}>
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Success Stories from Our Clients
            </h2>
            <p className="text-lg text-gray-600">
              See how our mobile apps have helped businesses achieve their goals and 
              delight their users with exceptional mobile experiences.
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
                  <div className="text-indigo-600 text-sm font-medium">{testimonial.appType}</div>
                  <div className="flex items-center mt-2">
                    <FaDownload className="text-green-500 mr-2" size={14} />
                    <span className="text-green-600 font-medium text-sm">{testimonial.downloads} downloads</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-indigo-900 to-cyan-900">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Build Your Mobile App?
            </h2>
            <p className="text-xl text-indigo-200 mb-8">
              Transform your idea into a successful mobile app that users love. Get a free 
              consultation and detailed project proposal tailored to your specific needs 
              and budget requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all inline-flex items-center justify-center">
                <FaRocket className="mr-2" />
                Start Your App Project
              </button>
              <button className="border-2 border-indigo-300 text-indigo-200 hover:border-white hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center">
                <FaPhone className="mr-2" />
                Schedule Free Call
              </button>
            </div>
            
            {/* App Store Badges */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <div className="flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg">
                <FaApple className="mr-3" size={24} />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </div>
              <div className="flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg">
                <FaAndroid className="mr-3" size={24} />
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="pt-8 border-t border-indigo-800">
              <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                <div className="flex items-center justify-center">
                  <FaEnvelope className="text-indigo-300 mr-3" />
                  <div>
                    <div className="text-indigo-300 text-sm">Email Us</div>
                    <div className="text-white font-medium">apps@radth.com</div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <FaPhone className="text-indigo-300 mr-3" />
                  <div>
                    <div className="text-indigo-300 text-sm">Call Us</div>
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

export default MobileAppDevelopmentPage;