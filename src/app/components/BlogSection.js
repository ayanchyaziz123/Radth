import { useState, useEffect } from 'react';

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('projects');
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Check visibility on initial load
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sample completed projects data
  const completedProjects = [
    {
      id: 1,
      title: 'E-Commerce Platform for Fashion Retailer',
      excerpt: 'A fully responsive online store with inventory management, payment processing, and customer analytics.',
      category: 'Web Development',
      client: 'FashionBrand Co.',
      techStack: 'React, Node.js, MongoDB',
      image: '/images/softdev.jpeg'
    },
    {
      id: 2,
      title: 'Mobile Banking Application',
      excerpt: 'Secure and intuitive mobile banking solution with biometric authentication and real-time transaction tracking.',
      category: 'Mobile App',
      client: 'National Credit Bank',
      techStack: 'React Native, Firebase',
      image: '/images/student_visa.jpg'
    },
    {
      id: 3,
      title: 'Logistics Management System',
      excerpt: 'End-to-end solution for tracking shipments, managing fleet operations, and optimizing delivery routes.',
      category: 'Enterprise Software',
      client: 'Global Logistics Inc.',
      techStack: 'Angular, Python, PostgreSQL',
      image: '/images/rest.jpeg'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gray-950 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 rounded-full bg-blue-600/5 blur-3xl top-1/2 -right-48" />
        <div className="absolute w-96 h-96 rounded-full bg-purple-600/5 blur-3xl -bottom-48 left-1/4" />
      </div>
      
      <div className="container mx-auto px-6 md:px-16 relative z-10">
        {/* Section header */}
        <div className={`mb-16 text-center transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="inline-block px-4 py-1 rounded-full bg-blue-600/20 text-blue-400 font-medium text-sm mb-4 border border-blue-500/20">
            Portfolio
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our completed projects that showcase our expertise, technical skills, and commitment to delivering exceptional results.
          </p>
        </div>

        {/* Projects showcase grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {completedProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${150 * index}ms` }}
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-blue-600 text-xs font-medium rounded-full">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-3">
                  <span className="text-blue-400">{project.client}</span>
                  <span className="mx-2">•</span>
                  <span className="text-green-400">{project.techStack}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 hover:text-blue-400 transition-colors">
                  <a href="#">{project.title}</a>
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.excerpt}
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-blue-400 font-medium hover:text-blue-300 transition-colors"
                >
                  View Project
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* View all projects button */}
        <div className={`mt-12 text-center transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <a
            href="#"
            className="inline-flex items-center border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm px-6 py-3 rounded-lg font-semibold hover:bg-blue-500/20 transition"
          >
            View All Projects
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;