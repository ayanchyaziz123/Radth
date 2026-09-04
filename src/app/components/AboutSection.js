'use client';
import { useState, useEffect } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); }
    }, { threshold: 0.2 });
    const el = document.querySelector('#about');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: '30+', label: 'Projects Delivered' },
    { value: '3', label: 'Game Engines' },
    { value: '99.9%', label: 'Uptime SLA' },
    { value: '24/7', label: 'Support' },
  ];

  const pipeline = [
    { step: '01', title: 'Discovery & Design', desc: 'We scope the product, define game mechanics or ML objectives, and map the technical architecture.', color: '#0284c7' },
    { step: '02', title: 'Prototype', desc: 'Rapid playable or working prototypes — game loop, AI model baseline, or automation proof-of-concept.', color: '#059669' },
    { step: '03', title: 'Build & Train', desc: 'Full production build: gameplay systems, custom model training, backend integration, and tooling.', color: '#b45309' },
    { step: '04', title: 'Testing & Optimization', desc: 'Performance profiling, playtesting, model evaluation, and iteration until it holds up under real load.', color: '#6d28d9' },
    { step: '05', title: 'Launch & Support', desc: 'Deployment to your platform of choice, plus ongoing updates, monitoring, and feature support.', color: '#b91c1c' },
  ];

  const differentiators = [
    { icon: '🧠', title: 'AI-First Engineering', desc: 'We design software and games around AI from day one — not bolted on as an afterthought.' },
    { icon: '🎮', title: 'Cross-Engine Expertise', desc: 'Unity, Unreal, and Godot — we pick the right engine for your game, not the one we know best.' },
    { icon: '⚙️', title: 'Automation Built In', desc: 'Every project ships with tooling to automate the repetitive parts of your workflow.' },
    { icon: '⚡', title: 'Fast, Lean Delivery', desc: 'Small senior team, tight feedback loops, and no bloated overhead slowing down your release.' },
  ];

  return (
    <section id="about" className="py-28 relative overflow-hidden" style={{ background: '#f1f5f9' }}>
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(14,165,233,0.18) 1px, transparent 0)`,
        backgroundSize: '44px 44px'
      }} />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%)' }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ background: 'rgba(14,165,233,0.08)', border: '1px solid rgba(14,165,233,0.25)', color: '#0284c7' }}>
            Our Technology
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#0f172a' }}>
            AI Software,{' '}
            <span style={{ background: 'linear-gradient(90deg,#0ea5e9,#059669)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Game-Ready
            </span>
          </h2>
          <p className="text-lg" style={{ color: '#64748b' }}>
            We turn ambitious ideas into production-grade AI software and shipped games — with the performance and polish that players and businesses expect.
          </p>
        </div>

        {/* Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-24">
          {differentiators.map((d, i) => (
            <div key={i} className={`p-6 rounded-2xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ background: '#ffffff', border: '1px solid rgba(15,23,42,0.06)', boxShadow: '0 1px 3px rgba(15,23,42,0.04)', transitionDelay: `${i * 80}ms` }}>
              <span className="text-3xl mb-4 block">{d.icon}</span>
              <h3 className="font-bold mb-2" style={{ color: '#0f172a' }}>{d.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>{d.desc}</p>
            </div>
          ))}
        </div>

        {/* Pipeline */}
        <div className="grid md:grid-cols-2 gap-16 items-start mb-24">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <h3 className="text-2xl font-bold mb-3" style={{ color: '#0f172a' }}>Our Development Pipeline</h3>
            <p className="mb-8 leading-relaxed" style={{ color: '#64748b' }}>
              From concept to launch — we own the full stack.
              Every project follows our 5-stage pipeline built around shipping quality software fast.
            </p>
            <div className="space-y-4">
              {pipeline.map((p, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl transition-colors" style={{ background: '#ffffff', border: '1px solid rgba(15,23,42,0.06)' }}>
                  <span className="text-xs font-black flex-shrink-0 mt-0.5" style={{ color: p.color }}>{p.step}</span>
                  <div>
                    <p className="text-sm font-semibold mb-1" style={{ color: '#0f172a' }}>{p.title}</p>
                    <p className="text-xs leading-relaxed" style={{ color: '#64748b' }}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <a href="#contact" className="inline-flex items-center gap-2 font-semibold transition-colors" style={{ color: '#0284c7' }}>
                Start a project with us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Stack comparison visual */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="rounded-2xl p-6" style={{ background: '#ffffff', border: '1px solid rgba(14,165,233,0.15)', boxShadow: '0 1px 3px rgba(15,23,42,0.04)' }}>
              <p className="text-xs font-medium uppercase tracking-wider mb-5" style={{ color: '#94a3b8' }}>Engine & Stack Comparison</p>
              <div className="space-y-4">
                {[
                  { name: 'Unreal Engine 5', type: '3D / AAA', params: 'C++', f1: 0.95, auc: 0.97, color: '#0284c7' },
                  { name: 'Unity', type: '2D/3D / Mobile', params: 'C#', f1: 0.92, auc: 0.96, color: '#059669' },
                  { name: 'PyTorch AI Core', type: 'ML Backend', params: 'Python', f1: 0.9, auc: 0.98, color: '#6d28d9' },
                ].map((m, i) => (
                  <div key={i} className="p-4 rounded-xl" style={{ background: '#f8fafc', border: '1px solid rgba(15,23,42,0.05)' }}>
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <span className="text-sm font-bold" style={{ color: '#0f172a' }}>{m.name}</span>
                        <span className="text-xs ml-2 px-1.5 py-0.5 rounded" style={{ background: '#eef2f7', color: '#64748b' }}>{m.type}</span>
                      </div>
                      <span className="text-xs" style={{ color: '#94a3b8' }}>{m.params}</span>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between text-xs mb-1" style={{ color: '#64748b' }}>
                          <span>Delivery Score</span><span style={{ color: m.color }}>{m.f1}</span>
                        </div>
                        <div className="h-1.5 rounded-full" style={{ background: '#e2e8f0' }}>
                          <div className="h-1.5 rounded-full" style={{ width: `${m.f1 * 100}%`, background: m.color }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1" style={{ color: '#64748b' }}>
                          <span>Reliability</span><span style={{ color: m.color }}>{m.auc}</span>
                        </div>
                        <div className="h-1.5 rounded-full" style={{ background: '#e2e8f0' }}>
                          <div className="h-1.5 rounded-full" style={{ width: `${m.auc * 100}%`, background: m.color }} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs mt-4 text-center" style={{ color: '#94a3b8' }}>Chosen per-project based on scope and platform</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((s, i) => (
            <div key={i} className={`text-center p-8 rounded-2xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ background: '#ffffff', border: '1px solid rgba(15,23,42,0.06)', boxShadow: '0 1px 3px rgba(15,23,42,0.04)', transitionDelay: `${i * 80}ms` }}>
              <div className="text-4xl font-black mb-2" style={{ background: 'linear-gradient(90deg,#0ea5e9,#059669)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{s.value}</div>
              <div className="text-sm" style={{ color: '#64748b' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
