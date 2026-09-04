'use client';
import { useState } from 'react';

const services = [
  {
    title: 'Custom AI Software',
    emoji: '🧠',
    tag: 'Flagship',
    tagColor: { bg: 'rgba(14,165,233,0.1)', text: '#0284c7', border: 'rgba(14,165,233,0.3)' },
    gradient: 'linear-gradient(135deg,#0ea5e9,#0284c7)',
    description: 'End-to-end AI product development — from data pipelines and model training to production APIs that plug straight into your business.',
    tech: ['PyTorch', 'TensorFlow', 'LLM Agents', 'FastAPI', 'MLOps'],
    metrics: [{ label: 'Delivery', value: '4-8 wks' }, { label: 'Uptime', value: '99.9%' }, { label: 'Support', value: '12 mo' }],
    details: {
      overview: 'We design and ship custom AI systems — recommendation engines, LLM-powered agents, computer vision pipelines, and predictive models — built for real production traffic, not demos.',
      capabilities: [
        'Custom model training and fine-tuning',
        'LLM agent and RAG pipeline development',
        'Computer vision and NLP pipelines',
        'Production-grade inference APIs',
        'MLOps: monitoring, retraining, versioning',
        'Cloud deployment (AWS / GCP / Azure)',
        'Data pipeline and ETL engineering',
        'Model evaluation and A/B testing',
      ],
    }
  },
  {
    title: 'Business Automation AI',
    emoji: '⚙️',
    tag: 'Available',
    tagColor: { bg: 'rgba(5,150,105,0.1)', text: '#047857', border: 'rgba(5,150,105,0.3)' },
    gradient: 'linear-gradient(135deg,#059669,#0d9488)',
    description: 'AI agents and automation tools that handle repetitive operations — support, scheduling, data entry, and reporting — around the clock.',
    tech: ['AI Agents', 'Workflow Automation', 'APIs', 'Integrations'],
    metrics: [{ label: 'Time Saved', value: '60%+' }, { label: 'Response', value: '<1s' }, { label: 'Uptime', value: '24/7' }],
    details: {
      overview: 'We automate the repetitive parts of your operation with AI agents that integrate directly into your existing tools — CRMs, helpdesks, spreadsheets, and internal dashboards.',
      capabilities: [
        'Customer support and chat agents',
        'Workflow and task automation',
        'Document processing and data extraction',
        'CRM and third-party API integrations',
        'Automated reporting and analytics dashboards',
        'Scheduling and operations bots',
        'Custom internal tooling',
        'Ongoing monitoring and iteration',
      ],
    }
  },
  {
    title: 'Game Development',
    emoji: '🎮',
    tag: 'Flagship',
    tagColor: { bg: 'rgba(217,119,6,0.1)', text: '#b45309', border: 'rgba(217,119,6,0.3)' },
    gradient: 'linear-gradient(135deg,#d97706,#b45309)',
    description: 'Full-cycle game development across Unreal Engine, Unity, and Godot — from concept and prototyping to launch on PC, console, and mobile.',
    tech: ['Unreal Engine', 'Unity', 'Godot', 'C++', 'C#'],
    metrics: [{ label: 'Platforms', value: '5+' }, { label: 'Engines', value: '3' }, { label: 'FPS Target', value: '60+' }],
    details: {
      overview: 'We build games from the ground up — gameplay systems, level design, multiplayer networking, and polish — tailored to the engine and platform that fit your vision best.',
      capabilities: [
        'Gameplay systems and mechanics design',
        'Level and environment design',
        'Multiplayer and netcode implementation',
        '2D and 3D asset integration',
        'Performance optimization and profiling',
        'Console and mobile porting',
        'Live-ops tooling and analytics',
        'Store submission (Steam, App Store, Google Play)',
      ],
    }
  },
  {
    title: 'Game AI & NPC Systems',
    emoji: '🤖',
    tag: 'Available',
    tagColor: { bg: 'rgba(220,38,38,0.1)', text: '#b91c1c', border: 'rgba(220,38,38,0.3)' },
    gradient: 'linear-gradient(135deg,#dc2626,#c2410c)',
    description: 'Believable NPC behavior, procedural generation, and adaptive difficulty — powered by behavior trees, reinforcement learning, and generative AI.',
    tech: ['Behavior Trees', 'Reinforcement Learning', 'Procedural Gen', 'Pathfinding'],
    metrics: [{ label: 'NPC Types', value: '10+' }, { label: 'Frame Cost', value: '<2ms' }, { label: 'Tuning', value: 'Live' }],
    details: {
      overview: 'We build the AI layer that makes games feel alive — from combat and companion NPCs to procedurally generated worlds and dynamically balanced difficulty.',
      capabilities: [
        'Behavior tree and state machine design',
        'Reinforcement learning for adaptive NPCs',
        'Procedural level and content generation',
        'Pathfinding and navigation systems',
        'Dynamic difficulty adjustment',
        'Generative AI for dialogue and quests',
        'Crowd and squad-based AI',
        'Performance-optimized runtime AI',
      ],
    }
  },
  {
    title: 'Product & SaaS Engineering',
    emoji: '💻',
    tag: 'Available',
    tagColor: { bg: 'rgba(124,58,237,0.1)', text: '#6d28d9', border: 'rgba(124,58,237,0.3)' },
    gradient: 'linear-gradient(135deg,#7c3aed,#6d28d9)',
    description: 'Full-stack web and mobile applications with AI features baked in — dashboards, SaaS platforms, and internal tools built to scale.',
    tech: ['Next.js', 'React Native', 'Node.js', 'PostgreSQL'],
    metrics: [{ label: 'Time to MVP', value: '6 wks' }, { label: 'Stack', value: 'Full' }, { label: 'Uptime', value: '99.9%' }],
    details: {
      overview: 'We build the product around your AI, not the other way around — full-stack web and mobile apps with clean UX, solid infrastructure, and AI features integrated natively.',
      capabilities: [
        'Web application development (Next.js / React)',
        'Mobile app development (React Native)',
        'API design and backend architecture',
        'Database design and optimization',
        'AI feature integration into existing products',
        'Authentication, billing, and admin tooling',
        'CI/CD and cloud infrastructure setup',
        'Ongoing maintenance and scaling support',
      ],
    }
  },
  {
    title: 'Custom AI + Game Pipeline',
    emoji: '🚀',
    tag: 'Bespoke',
    tagColor: { bg: 'rgba(14,165,233,0.1)', text: '#0284c7', border: 'rgba(14,165,233,0.3)' },
    gradient: 'linear-gradient(135deg,#0ea5e9,#0369a1)',
    description: 'A tailored blend of AI software and game development for projects that don\'t fit a single category — from prototype to launch.',
    tech: ['Any Stack', 'Custom Architecture', 'Rapid Prototyping', 'MLOps'],
    metrics: [{ label: 'Delivery', value: '8 wks' }, { label: 'Support', value: '12 mo' }, { label: 'Scope', value: 'Custom' }],
    details: {
      overview: 'We handle the full lifecycle: discovery and design, prototyping, AI model or gameplay development, testing, and deployment to your platform of choice.',
      capabilities: [
        'Requirements scoping and technical design',
        'Rapid prototyping and proof-of-concepts',
        'Custom AI model or gameplay system development',
        'Cross-engine and cross-platform delivery',
        'Performance testing and optimization',
        'Deployment and infrastructure setup',
        'Post-launch support and iteration',
        'Flexible engagement — fixed scope or ongoing team',
      ],
    }
  },
];

const ServicesSection = () => {
  const [selected, setSelected] = useState(null);
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <section id="services" className="py-28" style={{ background: '#f8fafc' }}>
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ background: 'rgba(14,165,233,0.08)', border: '1px solid rgba(14,165,233,0.25)', color: '#0284c7' }}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              AI Software & Game Development
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#0f172a' }}>
              Built for Every{' '}
              <span style={{ background: 'linear-gradient(90deg,#0ea5e9,#059669)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Product & Platform
              </span>
            </h2>
            <p className="text-lg" style={{ color: '#64748b' }}>
              From production AI systems to shipped games — we build software
              that performs, scales, and holds up under real users.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <div
                key={i}
                className="relative rounded-2xl cursor-pointer transition-all duration-300"
                style={{
                  background: '#ffffff',
                  border: hovered === i ? '1px solid rgba(14,165,233,0.35)' : '1px solid rgba(15,23,42,0.08)',
                  transform: hovered === i ? 'translateY(-5px)' : 'none',
                  boxShadow: hovered === i ? '0 20px 40px rgba(15,23,42,0.1)' : '0 1px 3px rgba(15,23,42,0.04)',
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setSelected(svc)}
              >
                {/* Top gradient bar */}
                <div className="h-1 w-full rounded-t-2xl" style={{ background: svc.gradient }} />

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-3xl">{svc.emoji}</span>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: svc.tagColor.bg, color: svc.tagColor.text, border: `1px solid ${svc.tagColor.border}` }}>
                      {svc.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold mb-2" style={{ color: '#0f172a' }}>{svc.title}</h3>
                  <p className="text-sm mb-4 leading-relaxed" style={{ color: '#64748b' }}>{svc.description}</p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {svc.tech.map((t, j) => (
                      <span key={j} className="text-xs px-2 py-0.5 rounded" style={{ background: '#f1f5f9', color: '#475569', border: '1px solid rgba(15,23,42,0.06)' }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Mini metrics */}
                  <div className="grid grid-cols-3 gap-2 mb-5">
                    {svc.metrics.map((m, j) => (
                      <div key={j} className="text-center p-2 rounded-lg" style={{ background: '#f8fafc' }}>
                        <div className="text-sm font-bold" style={{ background: 'linear-gradient(90deg,#0ea5e9,#059669)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{m.value}</div>
                        <div className="text-xs mt-0.5" style={{ color: '#94a3b8' }}>{m.label}</div>
                      </div>
                    ))}
                  </div>

                  <button className="inline-flex items-center text-sm font-semibold transition-colors" style={{ color: '#0284c7' }}>
                    View details
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 text-center">
            <p className="mb-6" style={{ color: '#64748b' }}>Need something that doesn't fit a single category? We build custom pipelines for any AI or game project.</p>
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-xl transition-all" style={{ background: 'linear-gradient(135deg,#0ea5e9,#059669)', boxShadow: '0 8px 25px rgba(14,165,233,0.25)' }}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Discuss Your Project
            </a>
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(15,23,42,0.6)', backdropFilter: 'blur(8px)' }}>
          <div className="relative rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" style={{ background: '#ffffff', border: '1px solid rgba(15,23,42,0.08)' }}>
            {/* Modal header */}
            <div className="p-8 rounded-t-2xl relative" style={{ background: selected.gradient }}>
              <button onClick={() => setSelected(null)} className="absolute top-4 right-4 p-2 rounded-lg transition-colors" style={{ background: 'rgba(255,255,255,0.15)' }}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="flex items-center gap-4 mb-3">
                <span className="text-4xl">{selected.emoji}</span>
                <h2 className="text-2xl font-bold text-white">{selected.title}</h2>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>{selected.details.overview}</p>
            </div>

            <div className="p-8">
              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {selected.metrics.map((m, i) => (
                  <div key={i} className="text-center p-4 rounded-xl" style={{ background: '#f8fafc', border: '1px solid rgba(15,23,42,0.06)' }}>
                    <div className="text-2xl font-black mb-1" style={{ background: 'linear-gradient(90deg,#0ea5e9,#059669)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{m.value}</div>
                    <div className="text-xs" style={{ color: '#64748b' }}>{m.label}</div>
                  </div>
                ))}
              </div>

              <h3 className="text-lg font-bold mb-4" style={{ color: '#0f172a' }}>Capabilities</h3>
              <div className="space-y-2.5 mb-8">
                {selected.details.capabilities.map((c, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'rgba(5,150,105,0.12)' }}>
                      <svg className="w-3 h-3" style={{ color: '#059669' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm" style={{ color: '#475569' }}>{c}</span>
                  </div>
                ))}
              </div>

              {/* Tech stack */}
              <div className="mb-8">
                <h3 className="text-sm font-bold mb-3" style={{ color: '#0f172a' }}>Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {selected.tech.map((t, i) => (
                    <span key={i} className="text-xs px-3 py-1.5 rounded-lg font-medium" style={{ background: 'rgba(14,165,233,0.08)', color: '#0284c7', border: '1px solid rgba(14,165,233,0.2)' }}>{t}</span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-6" style={{ borderTop: '1px solid rgba(15,23,42,0.06)' }}>
                <a href="#contact" onClick={() => setSelected(null)} className="flex-1 text-center px-6 py-3 text-white font-semibold rounded-xl transition-opacity hover:opacity-90" style={{ background: selected.gradient }}>
                  Request a Demo
                </a>
                <button onClick={() => setSelected(null)} className="flex-1 px-6 py-3 font-semibold rounded-xl transition-colors" style={{ border: '1px solid rgba(15,23,42,0.1)', color: '#64748b' }}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ServicesSection;
