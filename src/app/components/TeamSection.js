import { useState } from 'react';
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope, FaTimes, FaQuoteLeft, FaStar } from 'react-icons/fa';

const TeamSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeModal, setActiveModal] = useState(null);

  const teamMembers = [
    {
      name: 'Azizur Rahman (Ayan)',
      role: 'CEO and Chef SDE Engineer',
      department: 'Leadership',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&h=687&q=80',
      bio: 'Visionary leader with 12+ years of experience in enterprise software development and team management.',
      specialties: ['Enterprise Architecture', 'Team Leadership', 'Strategic Planning', 'DevOps', 'Cloud Solutions'],
      achievements: ['Led 50+ successful projects', 'Built teams of 100+ developers', 'AWS Certified Solutions Architect'],
      quote: 'Innovation happens when great minds collaborate towards a common vision.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'ayan@company.com'
      },
      gradient: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50'
    },
    {
      name: 'Amir Khan',
      role: 'Chef Marketing Manager',
      department: 'Marketing',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&h=687&q=80',
      bio: 'Passionate marketing professional specializing in digital marketing strategies and brand development.',
      specialties: ['Digital Marketing', 'Brand Strategy', 'Content Creation', 'Social Media', 'Campaign Management'],
      achievements: ['10+ years of marketing experience', 'Grew brand awareness by 300%', 'Google Ads Certified'],
      quote: 'Great marketing connects brands with hearts, not just minds.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'amir@company.com'
      },
      gradient: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-50'
    },
    {
      name: 'Emily Rodriguez',
      role: 'AI/ML Specialist',
      department: 'Data Science',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&h=687&q=80',
      bio: 'Data scientist and machine learning expert focused on developing intelligent solutions for complex business problems.',
      specialties: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Data Analytics'],
      achievements: ['PhD in Computer Science', 'Published 15+ research papers', 'TensorFlow Developer Certified'],
      quote: 'Data is the new oil, but artificial intelligence is the new electricity that powers innovation.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'emily@company.com'
      },
      gradient: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-emerald-50'
    },
    {
      name: 'David Kim',
      role: 'Digital Marketing Director',
      department: 'Marketing',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&h=687&q=80',
      bio: 'Creative marketing strategist with expertise in digital campaigns, brand development, and growth hacking.',
      specialties: ['Digital Strategy', 'Content Marketing', 'SEO/SEM', 'Social Media', 'Analytics'],
      achievements: ['Grew client base by 300%', 'Google Ads Certified', '8+ years in digital marketing'],
      quote: 'Great marketing is about telling authentic stories that connect brands with their audience.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'david@company.com'
      },
      gradient: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50'
    },
    {
      name: 'Lisa Thompson',
      role: 'UX/UI Design Lead',
      department: 'Design',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&h=687&q=80',
      bio: 'Creative designer passionate about creating intuitive user experiences and beautiful, functional interfaces.',
      specialties: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems', 'Usability Testing'],
      achievements: ['Designed 100+ user interfaces', 'Adobe Certified Expert', 'Won 3 design awards'],
      quote: 'Design is not just what it looks like and feels like. Design is how it works.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'lisa@company.com'
      },
      gradient: 'from-pink-500 to-rose-600',
      bgColor: 'bg-pink-50'
    },
    {
      name: 'Alex Rivera',
      role: 'Cloud Solutions Architect',
      department: 'Infrastructure',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&h=687&q=80',
      bio: 'Infrastructure expert specializing in cloud architecture, DevOps practices, and scalable system design.',
      specialties: ['AWS/Azure', 'Kubernetes', 'Docker', 'Terraform', 'System Architecture'],
      achievements: ['Managed infrastructure for 50M+ users', 'Multi-cloud certified', 'Reduced costs by 40%'],
      quote: 'The cloud is not just about technology; it&apos;s about enabling possibilities.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'alex@company.com'
      },
      gradient: 'from-indigo-500 to-purple-600',
      bgColor: 'bg-indigo-50'
    }
  ];

  const openModal = (index) => {
    setActiveModal(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="team" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 font-medium text-sm mb-4">
            Meet Our Team
          </span>
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            The Brilliant Minds Behind Our Success
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our diverse team of experts brings together decades of experience in technology, 
            design, and business strategy to deliver exceptional results.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl shadow-lg transition-all duration-300 group cursor-pointer overflow-hidden"
              style={{
                transform: hoveredIndex === index ? 'translateY(-8px)' : 'translateY(0)',
                boxShadow: hoveredIndex === index ? '0 20px 40px -10px rgba(0, 0, 0, 0.15)' : '0 10px 20px -5px rgba(0, 0, 0, 0.08)'
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => openModal(index)}
            >
              {/* Gradient Header */}
              <div className={`h-32 bg-gradient-to-br ${member.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white bg-opacity-20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                    {member.department}
                  </span>
                </div>
              </div>

              {/* Profile Image */}
              <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="pt-16 pb-8 px-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-sm font-medium text-gray-600 mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm mb-6 line-clamp-3">{member.bio}</p>

                {/* Specialties Pills */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {member.specialties.slice(0, 3).map((specialty, idx) => (
                    <span key={idx} className={`px-3 py-1 ${member.bgColor} text-gray-800 rounded-full text-xs font-medium`}>
                      {specialty}
                    </span>
                  ))}
                  {member.specialties.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                      +{member.specialties.length - 3} more
                    </span>
                  )}
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-3">
                  <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                    <FaLinkedin size={18} />
                  </a>
                  <a href={member.social.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
                    <FaTwitter size={18} />
                  </a>
                  <a href={member.social.github} className="text-gray-400 hover:text-gray-800 transition-colors">
                    <FaGithub size={18} />
                  </a>
                  <a href={`mailto:${member.social.email}`} className="text-gray-400 hover:text-red-500 transition-colors">
                    <FaEnvelope size={18} />
                  </a>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {activeModal !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className={`relative p-8 bg-gradient-to-br ${teamMembers[activeModal].gradient} rounded-t-2xl`}>
                <button 
                  onClick={closeModal}
                  className="absolute top-6 right-6 text-white hover:text-gray-200 transition-colors z-10"
                >
                  <FaTimes size={24} />
                </button>
                
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl flex-shrink-0">
                    <img 
                      src={teamMembers[activeModal].image} 
                      alt={teamMembers[activeModal].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="text-center md:text-left text-white flex-grow">
                    <h3 className="text-3xl font-bold mb-2">{teamMembers[activeModal].name}</h3>
                    <p className="text-xl font-medium text-white/90 mb-2">{teamMembers[activeModal].role}</p>
                    <p className="text-white/80 mb-4">{teamMembers[activeModal].department}</p>
                    
                    <div className="flex justify-center md:justify-start space-x-4">
                      <a href={teamMembers[activeModal].social.linkedin} className="text-white/80 hover:text-white transition-colors">
                        <FaLinkedin size={20} />
                      </a>
                      <a href={teamMembers[activeModal].social.twitter} className="text-white/80 hover:text-white transition-colors">
                        <FaTwitter size={20} />
                      </a>
                      <a href={teamMembers[activeModal].social.github} className="text-white/80 hover:text-white transition-colors">
                        <FaGithub size={20} />
                      </a>
                      <a href={`mailto:${teamMembers[activeModal].social.email}`} className="text-white/80 hover:text-white transition-colors">
                        <FaEnvelope size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8 space-y-8">
                {/* Quote */}
                <div className="relative">
                  <FaQuoteLeft className="absolute -top-2 -left-2 text-gray-200 text-2xl" />
                  <blockquote className="text-lg italic text-gray-700 pl-8">
                    &ldquo;{teamMembers[activeModal].quote}&rdquo;
                  </blockquote>
                </div>

                {/* Bio */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">About</h4>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {teamMembers[activeModal].bio}
                  </p>
                </div>

                {/* Specialties */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Specialties</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {teamMembers[activeModal].specialties.map((specialty, idx) => (
                      <div key={idx} className={`p-3 ${teamMembers[activeModal].bgColor} rounded-lg text-center`}>
                        <span className="text-gray-800 font-medium text-sm">{specialty}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Key Achievements</h4>
                  <div className="space-y-3">
                    {teamMembers[activeModal].achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <FaStar className="text-yellow-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Button */}
                <div className="pt-6 border-t border-gray-200">
                  <a 
                    href={`mailto:${teamMembers[activeModal].social.email}`}
                    className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${teamMembers[activeModal].gradient} text-white font-medium rounded-lg hover:opacity-90 transition-opacity`}
                  >
                    <FaEnvelope className="mr-2" />
                    Get in Touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center p-1 rounded-full bg-gradient-to-r from-purple-600 to-blue-600">
            <a href="#contact" className="px-6 py-3 rounded-full bg-white hover:bg-opacity-90 text-purple-700 font-medium transition-all">
              Join Our Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;