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
    { value: '6+', label: 'Imaging Modalities' },
    { value: '<8M', label: 'Params Per Model' },
    { value: '0.98+', label: 'Mean AUC-ROC' },
    { value: '0', label: 'Missed High-Risk' },
  ];

  const pipeline = [
    { step: '01', title: 'Dataset & Annotation', desc: 'Clinical dataset curation, class mapping to guidelines, and HIPAA-compliant annotation workflows.', color: '#38bdf8' },
    { step: '02', title: 'Model Architecture', desc: 'CNN + Vision Transformer selection optimised for your modality. Lightweight (<10M params) for clinical deployment.', color: '#34d399' },
    { step: '03', title: 'Custom Loss + Training', desc: 'Asymmetric loss functions (AEL-style) encode clinical cost asymmetry. Monte Carlo Dropout for uncertainty.', color: '#fbbf24' },
    { step: '04', title: 'Explainability & Validation', desc: 'GradCAM heatmaps, bootstrap CIs, and clinical validation studies — results your clinicians can trust.', color: '#a78bfa' },
    { step: '05', title: 'Clinical Deployment', desc: 'Docker/ONNX packaging, DICOM integration, HL7 FHIR support — runs on your existing hospital infrastructure.', color: '#f87171' },
  ];

  const differentiators = [
    { icon: '🧠', title: 'Clinically Aligned Loss', desc: 'We encode clinical risk asymmetry directly into the training objective — not as post-hoc thresholds.' },
    { icon: '🔍', title: 'GradCAM Explainability', desc: 'Every prediction comes with saliency maps showing exactly what the model attended to.' },
    { icon: '📊', title: 'Uncertainty Quantification', desc: 'Monte Carlo Dropout flags low-confidence cases for mandatory clinician review — structurally safe.' },
    { icon: '⚡', title: 'Lightweight by Design', desc: 'All models <10M parameters. Inference on CPU in <200ms. No GPU cluster required for deployment.' },
  ];

  return (
    <section id="about" className="py-28 relative overflow-hidden" style={{ background: '#080e1a' }}>
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(56,189,248,0.15) 1px, transparent 0)`,
        backgroundSize: '44px 44px'
      }} />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.06) 0%, transparent 70%)' }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ background: 'rgba(14,165,233,0.08)', border: '1px solid rgba(14,165,233,0.2)', color: '#38bdf8' }}>
            Our Technology
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Research-Grade AI,{' '}
            <span style={{ background: 'linear-gradient(90deg,#38bdf8,#34d399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Clinical-Ready
            </span>
          </h2>
          <p className="text-lg" style={{ color: '#64748b' }}>
            We translate published deep learning research into production-grade medical imaging software — with the explainability and safety guarantees that clinical deployment demands.
          </p>
        </div>

        {/* Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-24">
          {differentiators.map((d, i) => (
            <div key={i} className={`p-6 rounded-2xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ background: '#0a1828', border: '1px solid rgba(255,255,255,0.06)', transitionDelay: `${i * 80}ms` }}>
              <span className="text-3xl mb-4 block">{d.icon}</span>
              <h3 className="text-white font-bold mb-2">{d.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>{d.desc}</p>
            </div>
          ))}
        </div>

        {/* Pipeline */}
        <div className="grid md:grid-cols-2 gap-16 items-start mb-24">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <h3 className="text-2xl font-bold text-white mb-3">Our Development Pipeline</h3>
            <p className="mb-8 leading-relaxed" style={{ color: '#475569' }}>
              From raw clinical images to a validated, deployed model — we own the full stack.
              Every project follows our 5-stage pipeline built around clinical safety requirements.
            </p>
            <div className="space-y-4">
              {pipeline.map((p, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl transition-colors" style={{ background: '#0a1828', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <span className="text-xs font-black flex-shrink-0 mt-0.5" style={{ color: p.color }}>{p.step}</span>
                  <div>
                    <p className="text-white text-sm font-semibold mb-1">{p.title}</p>
                    <p className="text-xs leading-relaxed" style={{ color: '#475569' }}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <a href="#contact" className="inline-flex items-center gap-2 font-semibold transition-colors" style={{ color: '#38bdf8' }}>
                Start a project with us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Architecture visual */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="rounded-2xl p-6" style={{ background: '#0a1828', border: '1px solid rgba(56,189,248,0.1)' }}>
              <p className="text-xs font-medium uppercase tracking-wider mb-5" style={{ color: '#334155' }}>Architecture Comparison</p>
              <div className="space-y-4">
                {[
                  { name: 'DenseNet-121', type: 'CNN', params: '7.0M', f1: 0.83, auc: 0.975, color: '#38bdf8' },
                  { name: 'EfficientNet-B0', type: 'CNN', params: '5.3M', f1: 0.83, auc: 0.973, color: '#34d399' },
                  { name: 'DeiT-Tiny', type: 'Transformer', params: '5.9M', f1: 0.81, auc: 0.969, color: '#a78bfa' },
                ].map((m, i) => (
                  <div key={i} className="p-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <span className="text-white text-sm font-bold">{m.name}</span>
                        <span className="text-xs ml-2 px-1.5 py-0.5 rounded" style={{ background: 'rgba(255,255,255,0.05)', color: '#475569' }}>{m.type}</span>
                      </div>
                      <span className="text-xs" style={{ color: '#334155' }}>{m.params} params</span>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between text-xs mb-1" style={{ color: '#475569' }}>
                          <span>Macro F1</span><span style={{ color: m.color }}>{m.f1}</span>
                        </div>
                        <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.05)' }}>
                          <div className="h-1.5 rounded-full" style={{ width: `${m.f1 * 100}%`, background: m.color }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1" style={{ color: '#475569' }}>
                          <span>AUC-ROC</span><span style={{ color: m.color }}>{m.auc}</span>
                        </div>
                        <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.05)' }}>
                          <div className="h-1.5 rounded-full" style={{ width: `${m.auc * 100}%`, background: m.color }} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs mt-4 text-center" style={{ color: '#1e293b' }}>Results on HyperKvasir GI endoscopy benchmark</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((s, i) => (
            <div key={i} className={`text-center p-8 rounded-2xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ background: '#0a1828', border: '1px solid rgba(255,255,255,0.06)', transitionDelay: `${i * 80}ms` }}>
              <div className="text-4xl font-black mb-2" style={{ background: 'linear-gradient(90deg,#38bdf8,#34d399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{s.value}</div>
              <div className="text-sm" style={{ color: '#475569' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
