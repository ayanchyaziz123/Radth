import { useState, useEffect } from 'react';

const PricingSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnnual, setIsAnnual] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.querySelector('#pricing');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const wordpressPlans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and personal brands',
      monthlyPrice: 1500,
      annualPrice: 1200,
      features: [
        '5-8 Professional Pages',
        'Responsive Mobile Design',
        'Basic SEO Setup',
        'Contact Forms',
        'Social Media Integration',
        '3 Rounds of Revisions',
        '30 Days Free Support',
        'SSL Certificate Setup'
      ],
      popular: false,
      color: 'blue'
    },
    {
      name: 'Business',
      description: 'Ideal for growing businesses and e-commerce',
      monthlyPrice: 4000,
      annualPrice: 3500,
      features: [
        '10-15 Custom Pages',
        'WooCommerce E-commerce',
        'Advanced SEO Optimization',
        'Blog Setup & Management',
        'Google Analytics Integration',
        'Performance Optimization',
        'Security Setup',
        '60 Days Free Support',
        'Training Session Included'
      ],
      popular: true,
      color: 'blue'
    },
    {
      name: 'Enterprise',
      description: 'Complete solution for established businesses',
      monthlyPrice: 8000,
      annualPrice: 7000,
      features: [
        'Unlimited Pages',
        'Custom Functionality',
        'Multi-language Support',
        'Advanced E-commerce Features',
        'Custom Plugin Development',
        'Third-party Integrations',
        'Priority Support',
        '90 Days Free Support',
        'Monthly Maintenance Included'
      ],
      popular: false,
      color: 'blue'
    }
  ];

  const nextjsPlans = [
    {
      name: 'Professional',
      description: 'Modern web applications for tech-savvy businesses',
      monthlyPrice: 12000,
      annualPrice: 10000,
      features: [
        'Custom React Application',
        'Modern UI/UX Design',
        'API Integrations',
        'Authentication System',
        'Database Setup',
        'SEO Optimization',
        'Performance Monitoring',
        '90 Days Free Support'
      ],
      popular: false,
      color: 'purple'
    },
    {
      name: 'Enterprise',
      description: 'Scalable solutions for large businesses',
      monthlyPrice: 25000,
      annualPrice: 22000,
      features: [
        'Complex Web Applications',
        'Custom Admin Dashboards',
        'Advanced Integrations',
        'Real-time Features',
        'Advanced Security',
        'Scalable Architecture',
        'Dedicated Support',
        '120 Days Free Support',
        'Monthly Health Checks'
      ],
      popular: true,
      color: 'purple'
    }
  ];

  const maintenancePlans = [
    {
      name: 'Basic Care',
      monthlyPrice: 150,
      features: [
        'Monthly Updates',
        'Security Monitoring',
        'Basic Support',
        'Performance Checks'
      ]
    },
    {
      name: 'Premium Care',
      monthlyPrice: 400,
      features: [
        'Weekly Updates',
        'Advanced Security',
        'Priority Support',
        'Content Updates',
        'SEO Monitoring'
      ]
    }
  ];

  const PricingCard = ({ plan, index, planType }) => (
    <div 
      className={`relative bg-white rounded-2xl shadow-xl border-2 transform transition-all duration-700 delay-${index * 100} hover:scale-105 ${
        plan.popular 
          ? `border-${plan.color}-500 ring-4 ring-${plan.color}-100` 
          : 'border-gray-200 hover:border-gray-300'
      } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      {plan.popular && (
        <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-${plan.color}-500 to-${plan.color}-600 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg`}>
          Most Popular
        </div>
      )}
      
      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
        <p className="text-gray-600 mb-6 min-h-[48px]">{plan.description}</p>
        
        <div className="mb-8">
          <div className="flex items-baseline">
            <span className="text-4xl font-bold text-gray-900">
              ${planType === 'maintenance' ? plan.monthlyPrice : (isAnnual ? plan.annualPrice : plan.monthlyPrice).toLocaleString()}
            </span>
            <span className="text-gray-600 ml-2">
              {planType === 'maintenance' ? '/month' : (planType === 'wordpress' ? '' : '')}
            </span>
          </div>
          {planType !== 'maintenance' && isAnnual && (
            <div className="text-sm text-green-600 font-medium mt-1">
              Save ${((plan.monthlyPrice - plan.annualPrice) * 12).toLocaleString()} annually
            </div>
          )}
        </div>
        
        <ul className="space-y-4 mb-8">
          {plan.features.map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-start">
              <div className={`flex-shrink-0 h-5 w-5 rounded-full bg-${plan.color}-100 flex items-center justify-center mt-0.5`}>
                <svg className={`h-3 w-3 text-${plan.color}-600`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="ml-3 text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        
        <button className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
          plan.popular
            ? `bg-gradient-to-r from-${plan.color}-500 to-${plan.color}-600 text-white hover:from-${plan.color}-600 hover:to-${plan.color}-700 shadow-lg hover:shadow-xl`
            : `bg-${plan.color}-50 text-${plan.color}-600 hover:bg-${plan.color}-100 border-2 border-${plan.color}-200 hover:border-${plan.color}-300`
        }`}>
          Get Started
        </button>
      </div>
    </div>
  );

  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mb-4">
            Transparent Pricing
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Choose Your Perfect Plan</h2>
          <p className="text-lg text-gray-600">
            Professional web solutions designed to fit your business needs and budget
          </p>
        </div>

        {/* WordPress Plans */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">WordPress Websites</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional WordPress solutions for businesses of all sizes. Perfect for content management and e-commerce.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center mt-8 bg-white rounded-xl p-1 shadow-sm w-fit mx-auto">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  !isAnnual ? 'bg-blue-500 text-white shadow-sm' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                One-time Payment
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  isAnnual ? 'bg-blue-500 text-white shadow-sm' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Save 20% Bundle
              </button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {wordpressPlans.map((plan, index) => (
              <PricingCard key={index} plan={plan} index={index} planType="wordpress" />
            ))}
          </div>
        </div>

        {/* Next.js Plans */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Next.js Applications</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              High-performance web applications built with modern React technology for scalable business solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {nextjsPlans.map((plan, index) => (
              <PricingCard key={index} plan={plan} index={index} planType="nextjs" />
            ))}
          </div>
        </div>

        {/* Maintenance Plans */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Maintenance & Support</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Keep your website secure, updated, and performing at its best with our ongoing maintenance services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {maintenancePlans.map((plan, index) => (
              <PricingCard key={index} plan={plan} index={index} planType="maintenance" />
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">What's included in the initial payment?</h4>
                <p className="text-gray-600">Complete website development, design, setup, testing, and launch. No hidden fees.</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Do you provide hosting?</h4>
                <p className="text-gray-600">Yes, we can recommend and set up premium hosting solutions, or work with your existing provider.</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">How long does development take?</h4>
                <p className="text-gray-600">WordPress sites: 1-3 weeks. Next.js applications: 4-8 weeks depending on complexity.</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Can I update the website myself?</h4>
                <p className="text-gray-600">Absolutely! We provide training and documentation so you can manage content independently.</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">What if I need custom features?</h4>
                <p className="text-gray-600">We specialize in custom development. Contact us for a personalized quote for unique requirements.</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Is maintenance really necessary?</h4>
                <p className="text-gray-600">Regular updates and security monitoring are crucial for performance, security, and SEO rankings.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's discuss your project and find the perfect solution for your business needs. 
              Free consultation and project estimate included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Get Free Quote
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;