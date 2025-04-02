const HeroSection = () => {
    return (
      <section className="bg-gray-950 text-white min-h-[90vh] flex items-center justify-center">
        <div className="container mx-auto px-6 md:px-16 text-center md:text-left py-12">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Transform Your Business with <span className="text-blue-500">Smart IT & AI</span> Solutions
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl">
            At radth.com, we help startups, small businesses, and entrepreneurs grow faster with modern websites, custom software, AI tools, and IT consultancy.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#services"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition"
            >
              View Our Services
            </a>
            <a
              href="#contact"
              className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  