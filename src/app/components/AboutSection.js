'use client';
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
    return () => { if (section) observer.unobserve(section); };
  }, []);

  const stats = [
    { value: '50+', label: 'AI Agents Deployed' },
    { value: '10+', label: 'Industries Served' },
    { value: '200+', label: 'Clients Automated' },
    { value: '24/7', label: 'Agent Uptime' },
  ];

  const pillars = [
    'AI agents built for your specific industry workflow',
    'Deep integration with your existing tools and systems',
    'Continuous learning — agents get smarter over time',
    'Transparent AI — you always know what the agent is doing',
  ];

  return (
    <section id="about" className="py-28 bg-[#0A0A1A] relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(124,58,237,0.2) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-violet-600/10 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 font-medium text-sm mb-6">
            Who We Are
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            We Build AI Agents That{' '}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Do Real Work
            </span>
          </h2>
          <p className="text-lg text-gray-400">
            Radth AI is an AI-first technology company. We don't just consult on AI — we build, deploy, and maintain intelligent agents that run your business operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          {/* Left: Story */}
          <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <h3 className="text-2xl font-bold text-white mb-6">
              From IT Company to AI-First Agency
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Radth AI started with a simple belief: <span className="text-violet-400 font-semibold">every business deserves the power of AI</span> — not just Fortune 500s. We saw restaurants struggling with orders, clinics drowning in paperwork, retailers losing sales to slow support.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              So we built intelligent AI agents that plug directly into your operations — taking orders, booking appointments, answering customers, and analyzing your data — around the clock, without fatigue.
            </p>

            <div className="space-y-4">
              {pillars.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-violet-500/20 border border-violet-500/40 flex items-center justify-center mt-0.5">
                    <svg className="w-3.5 h-3.5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-300 text-sm">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-violet-400 font-semibold hover:text-violet-300 transition-colors"
              >
                Work with us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Visual */}
          <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="bg-[#0D0D20] border border-white/10 rounded-2xl p-8 glow-purple-sm">
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-6 font-medium">How Radth AI Works</p>
              <div className="space-y-4">
                {[
                  { step: '01', title: 'Understand Your Business', desc: 'We map your operations, pain points, and goals to design the right AI agent.', color: 'text-violet-400' },
                  { step: '02', title: 'Build & Integrate', desc: 'Custom AI agents built and integrated with your existing tools in days, not months.', color: 'text-indigo-400' },
                  { step: '03', title: 'Deploy & Automate', desc: 'Your AI agent goes live, handling real tasks while you focus on growing.', color: 'text-cyan-400' },
                  { step: '04', title: 'Learn & Improve', desc: 'The agent continuously improves from data, getting smarter with every interaction.', color: 'text-blue-400' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-violet-500/20 transition-colors">
                    <span className={`text-xs font-black ${item.color} flex-shrink-0 mt-0.5`}>{item.step}</span>
                    <div>
                      <p className="text-white text-sm font-semibold mb-1">{item.title}</p>
                      <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:border-violet-500/30 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl font-black bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
