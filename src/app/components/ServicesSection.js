import { FaCode, FaBullhorn, FaRobot, FaSearch, FaMobileAlt, FaCloud } from 'react-icons/fa';

const ServicesSection = () => {
  const services = [
    {
      title: 'Custom Software Development',
      description: 'Building tailored software solutions to streamline business operations and improve efficiency.',
      icon: <FaCode size={40} className="text-blue-600" />,
    },
    {
      title: 'Digital Marketing & SEO',
      description: 'Strategic digital marketing and SEO services to grow your brand visibility and reach.',
      icon: <FaBullhorn size={40} className="text-blue-600" />,
    },
    {
      title: 'AI-Powered Tools & Automation',
      description: 'Implementing smart AI solutions to automate tasks and enhance business decision-making.',
      icon: <FaRobot size={40} className="text-blue-600" />,
    },
    {
      title: 'Mobile & Web App Development',
      description: 'Creating scalable and responsive mobile and web applications tailored for your business needs.',
      icon: <FaMobileAlt size={40} className="text-blue-600" />,
    },
    {
      title: 'Cloud & IT Consultancy',
      description: 'Providing IT consulting services and cloud solutions for startups, small businesses, and individuals.',
      icon: <FaCloud size={40} className="text-blue-600" />,
    },
    {
      title: 'Search Engine Optimization (SEO)',
      description: 'Helping your website rank higher in search engines and attract more organic traffic.',
      icon: <FaSearch size={40} className="text-blue-600" />,
    },
  ];

  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
