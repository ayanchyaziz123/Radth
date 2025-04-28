import { useState, useEffect } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    
    const section = document.querySelector('#about');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '200+', label: 'Projects Completed' },
    { value: '50+', label: 'Happy Clients' },
    { value: '24/7', label: 'Support' },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mb-4">
            Our Story
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">About RadTH</h2>
          <p className="text-lg text-gray-600">
            Discover who we are and why businesses trust us with their technology needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className={`relative transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-lg z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-500 rounded-lg z-0"></div>
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/images/fre.jpeg" 
                  alt="Our team at work" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Content Column */}
          <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Empowering Businesses Through Technology</h3>
            <p className="text-gray-600 mb-6">
              At <span className="font-bold text-blue-600">RadTH</span>, we are committed to empowering small businesses, 
              startups, and entrepreneurs by providing smart, affordable, and reliable IT & AI solutions. 
              Our mission is to make cutting-edge technology accessible to businesses of all sizes.
            </p>
            
            <p className="text-gray-600 mb-8">
              Founded in 2018, we&#39;ve grown from a small team of passionate developers to a full-service 
              technology company serving clients across multiple industries. We combine technical expertise 
              with business acumen to deliver solutions that drive real growth and efficiency.
            </p>
            
            <div className="space-y-4">
              {[
                'Custom software tailored to your unique business needs',
                'AI-powered tools that automate repetitive tasks',
                'Mobile apps that keep you connected with customers',
                'Digital marketing strategies that drive measurable results'
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                    <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-600">{item}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <a 
                href="#services" 
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
              >
                Learn more about our services
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center transform transition-all duration-700 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;