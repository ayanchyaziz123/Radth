'use client';
import { useState, useEffect } from 'react';

// Placeholder roster — swap in real names, titles, photos, and links.
const team = [
  { name: 'Azizur Rahman (Ayan)', role: 'Co-Founder & Lead AI Software Engineer', initials: 'AR', photo: '/images/cover6.jpeg', bio: 'Designs and ships the ML pipelines, from model training to production inference.', gradient: 'linear-gradient(135deg,#0ea5e9,#0284c7)' },
  { name: 'Co-Founder Name', role: 'Co-Founder & Business Lead', initials: 'CF', bio: 'Leads client strategy and business operations across AI and game projects.', gradient: 'linear-gradient(135deg,#059669,#0d9488)' },
  { name: 'Co-Founder Name', role: 'Co-Founder & Lead Game Developer', initials: 'CF', bio: 'Owns gameplay systems and engine architecture across Unity, Unreal, and Godot.', gradient: 'linear-gradient(135deg,#d97706,#b45309)' },
  { name: 'Co-Founder Name', role: 'Co-Founder & Product Design Lead', initials: 'CF', bio: 'Shapes UX and visual design for every product and game we ship.', gradient: 'linear-gradient(135deg,#7c3aed,#6d28d9)' },
];

const TeamSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); }
    }, { threshold: 0.2 });
    const el = document.querySelector('#team');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="team" className="py-28" style={{ background: '#ffffff' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ background: 'rgba(14,165,233,0.08)', border: '1px solid rgba(14,165,233,0.25)', color: '#0284c7' }}>
            Our Team
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#0f172a' }}>
            The People Behind{' '}
            <span style={{ background: 'linear-gradient(90deg,#0ea5e9,#059669)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Radth Technology
            </span>
          </h2>
          <p className="text-lg" style={{ color: '#64748b' }}>
            A small senior team of AI engineers, game developers, and designers who ship together, end to end.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <div
              key={i}
              className={`text-center p-6 rounded-2xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ background: '#f8fafc', border: '1px solid rgba(15,23,42,0.06)', transitionDelay: `${i * 80}ms` }}
            >
              {member.photo ? (
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-20 h-20 mx-auto mb-5 rounded-full object-cover"
                  style={{ border: '2px solid rgba(14,165,233,0.25)' }}
                />
              ) : (
                <div
                  className="w-20 h-20 mx-auto mb-5 rounded-full flex items-center justify-center text-white font-bold text-xl"
                  style={{ background: member.gradient }}
                >
                  {member.initials}
                </div>
              )}
              <h3 className="font-bold mb-1" style={{ color: '#0f172a' }}>{member.name}</h3>
              <p className="text-sm font-medium mb-3" style={{ color: '#0284c7' }}>{member.role}</p>
              <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>{member.bio}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="mb-6" style={{ color: '#64748b' }}>We're always open to meeting engineers, designers, and game developers who want to build with us.</p>
          <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-xl transition-all" style={{ background: 'linear-gradient(135deg,#0ea5e9,#059669)', boxShadow: '0 8px 25px rgba(14,165,233,0.25)' }}>
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
