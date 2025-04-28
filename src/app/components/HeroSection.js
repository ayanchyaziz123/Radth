import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 text-white min-h-screen flex items-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 rounded-full bg-blue-600/10 blur-3xl -top-20 -left-20" />
        <div className="absolute w-96 h-96 rounded-full bg-purple-600/10 blur-3xl -bottom-20 -right-20" />
        <div className="absolute w-72 h-72 rounded-full bg-blue-400/5 blur-2xl top-1/3 left-1/3" />
      </div>
      
      {/* Content container */}
      <div className="container mx-auto px-6 md:px-16 py-16 md:py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column: Text content */}
          <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="inline-block px-4 py-1 rounded-full bg-blue-600/20 text-blue-400 font-medium text-sm mb-6 border border-blue-500/20">
              Next-Generation IT & AI Solutions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
              Transform Your Business with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Smart Technology
              </span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-xl leading-relaxed">
              At radth.com, we help startups, small businesses, and entrepreneurs 
              accelerate growth with modern websites, custom software, AI tools, 
              and strategic IT consultancy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:from-blue-700 hover:to-blue-800 transition flex items-center justify-center"
              >
                Explore Our Services
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm px-8 py-4 rounded-lg font-semibold hover:bg-blue-500/20 transition flex items-center justify-center"
              >
                Schedule a Consultation
              </a>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-12 pt-8 border-t border-gray-800">
              <p className="text-sm text-gray-400 mb-4">Trusted by innovative companies</p>
              <div className="flex flex-wrap gap-6 items-center opacity-70">
                {['Company 1', 'Company 2', 'Company 3', 'Company 4'].map((company, index) => (
                  <div key={index} className="text-sm font-bold tracking-wide text-gray-300">
                    {company}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right column: Visual element */}
          <div className={`hidden md:block transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="relative h-96 w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-sm" />
              <div className="absolute inset-4 bg-gray-900/70 backdrop-blur-xl rounded-xl border border-gray-800 shadow-2xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Intelligent Solutions</h3>
                  <p className="text-gray-400">Custom technology that adapts to your business needs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-gray-400 mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-blue-500 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;