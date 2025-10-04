import { useState } from 'react';
import { 
  Code, 
  Megaphone, 
  Bot, 
  Search, 
  Smartphone, 
  ArrowRight,
  Globe
} from 'lucide-react';

const WordPressIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.158 12.786L9.46 20.625c.806.237 1.657.366 2.54.366 1.047 0 2.051-.18 2.986-.51-.024-.038-.046-.078-.065-.12l-2.763-7.575zm-5.25-3.713c0-1.202.432-2.034.806-2.68.495-.806.96-1.488.96-2.293 0-.898-.684-1.734-1.665-1.734-.044 0-.087.005-.13.008C8.002 1.083 9.903 0 12.054 0c2.815 0 5.277 1.456 6.72 3.664-.043-.003-.084-.008-.13-.008-.96 0-1.64 1.202-1.64 2.488 0 .806.432 1.488.806 2.293.373.65.806 1.488.806 2.68 0 .648-.21 1.456-.554 2.488l-.726 2.453-2.634-7.843c.437-.022.83-.065.83-.065.392-.044.347-.62-.043-.598 0 0-1.18.087-1.94.087-.714 0-1.92-.087-1.92-.087-.39-.022-.434.577-.043.598 0 0 .347.043.714.065l1.06 2.907-1.487 4.46-2.473-7.367c.436-.022.828-.065.828-.065.392-.044.348-.62-.043-.598 0 0-1.18.087-1.94.087-.136 0-.296-.003-.466-.009C3.41 4.265 2 6.72 2 9.5c0 3.86 2.88 7.04 6.604 7.478l-2.696-7.405zm12.612-4.074c.043.32.067.665.067 1.036 0 1.02-.185 2.163-.74 3.593l-2.978 8.61C18.767 17.43 21 14.756 21 11.5c0-2.178-.776-4.177-2.066-5.736l.586 1.235zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
);

const ReactIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
    <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
  </svg>
);

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      title: 'WordPress Development',
      description: 'Professional WordPress websites with custom themes, plugins, and e-commerce functionality for businesses of all sizes.',
      icon: <WordPressIcon />,
      color: 'from-blue-500 to-blue-700',
      bgLight: 'bg-blue-50',
      iconColor: 'text-blue-600',
      link: '/wordpress'
    },
    {
      title: 'Custom Web Development',
      description: 'High-performance React applications with server-side rendering, modern UI/UX, and advanced functionality for scalable businesses.',
      icon: <ReactIcon />,
      color: 'from-cyan-500 to-cyan-700',
      bgLight: 'bg-cyan-50',
      iconColor: 'text-cyan-600',
      link: '/web-development'
    },
    {
      title: 'Custom Mobile App Development',
      description: 'Building tailored software solutions to streamline business operations and improve efficiency.',
      icon: <Smartphone className="text-purple-600" size={28} />,
      color: 'from-purple-500 to-purple-700',
      bgLight: 'bg-purple-50',
      iconColor: 'text-purple-600',
      link: '/mobile-app'
    },
    {
      title: 'Digital Marketing',
      description: 'Strategic digital marketing and branding services to grow your visibility and reach.',
      icon: <Megaphone className="text-emerald-600" size={28} />,
      color: 'from-emerald-500 to-emerald-700',
      bgLight: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
      link: '/digital-marketing'
    },
    {
      title: 'AI-Powered Solutions',
      description: 'Implementing smart AI solutions to automate tasks and enhance business decision-making.',
      icon: <Bot className="text-red-600" size={28} />,
      color: 'from-red-500 to-red-700',
      bgLight: 'bg-red-50',
      iconColor: 'text-red-600',
      link: '/ai-solutions'
    },
    {
      title: 'Search Engine Optimization',
      description: 'Helping your website rank higher in search engines and attract more targeted organic traffic.',
      icon: <Search className="text-amber-600" size={28} />,
      color: 'from-amber-500 to-amber-700',
      bgLight: 'bg-amber-50',
      iconColor: 'text-amber-600',
      link: '/seo'
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-600 font-medium text-sm mb-4 border border-blue-100">
            Our Expertise
          </span>
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Comprehensive IT & Digital Services
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We offer end-to-end technology solutions designed to help your business 
            grow and succeed in today's digital landscape.
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
                  
                  <a 
                    href={service.link}
                    className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-700 transition-colors mt-auto group"
                  >
                    Learn more
                    <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </a>
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
            Get a free consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;