'use client';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeScan, setActiveScan] = useState(0);

  const scans = [
    { label: 'GI Endoscopy', icon: '🔬', result: 'Pre-malignant · Biopsy required', confidence: '94.2%', risk: 'medium' },
    { label: 'Chest X-Ray', icon: '🫁', result: 'Normal · Routine follow-up', confidence: '98.7%', risk: 'low' },
    { label: 'Skin Lesion', icon: '🧬', result: 'High-Risk · Immediate referral', confidence: '91.5%', risk: 'high' },
    { label: 'Retinal Scan', icon: '👁️', result: 'Diabetic Retinopathy · Stage 2', confidence: '96.1%', risk: 'medium' },
  ];

  const riskColor = { low: '#34d399', medium: '#fbbf24', high: '#f87171' };

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => setActiveScan(p => (p + 1) % scans.length), 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #060f1e 0%, #0a1a30 60%, #060f1e 100%)' }}>
      {/* Grid background */}
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(56,189,248,0.07) 1px, transparent 0)`,
        backgroundSize: '44px 44px'
      }} />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(5,150,105,0.07) 0%, transparent 70%)' }} />

      <div className="container mx-auto px-6 md:px-16 py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8" style={{ background: 'rgba(14,165,233,0.08)', border: '1px solid rgba(14,165,233,0.2)', color: '#7dd3fc' }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#38bdf8' }} />
              Deep Learning · CNN · Vision Transformers · GradCAM
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 text-white">
              Medical Imaging{' '}
              <span style={{ background: 'linear-gradient(90deg, #38bdf8 0%, #34d399 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                AI
              </span>{' '}
              That Saves Lives
            </h1>

            <p className="text-lg mb-10 max-w-xl leading-relaxed" style={{ color: '#94a3b8' }}>
              Radth builds lightweight CNN and Vision Transformer models that classify,
              triage, and risk-stratify medical images — from GI endoscopy to radiology,
              pathology, and beyond. Deployable on clinical hardware. Explainable by design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <a href="#services" className="group px-8 py-4 rounded-xl font-semibold text-white flex items-center justify-center transition-all" style={{ background: 'linear-gradient(135deg, #0ea5e9, #059669)', boxShadow: '0 8px 25px rgba(14,165,233,0.3)' }}>
                View Our Solutions
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a href="#contact" className="px-8 py-4 rounded-xl font-semibold flex items-center justify-center transition-all" style={{ border: '1px solid rgba(255,255,255,0.12)', color: '#cbd5e1' }}>
                Talk to Our Team
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4">
              {[
                { value: '<8M', label: 'Parameters' },
                { value: '0', label: 'Missed High-Risk' },
                { value: '98%+', label: 'AUC-ROC' },
                { value: 'HIPAA', label: 'Compliant' },
              ].map((s, i) => (
                <div key={i} className="text-center p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="text-xl font-bold" style={{ background: 'linear-gradient(90deg,#38bdf8,#34d399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{s.value}</div>
                  <div className="text-xs mt-1" style={{ color: '#475569' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Live scan dashboard */}
          <div className={`hidden md:block transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="relative">
              <div className="rounded-2xl p-6" style={{ background: '#0a1a2e', border: '1px solid rgba(56,189,248,0.12)', boxShadow: '0 0 60px rgba(14,165,233,0.1)' }}>
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#0ea5e9,#059669)' }}>
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">Radth Vision AI</p>
                      <p className="text-xs" style={{ color: '#475569' }}>Live inference · 4 modalities</p>
                    </div>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full font-medium" style={{ background: 'rgba(52,211,153,0.1)', color: '#34d399', border: '1px solid rgba(52,211,153,0.2)' }}>● Live</span>
                </div>

                {/* Scan cards */}
                <div className="space-y-3 mb-5">
                  {scans.map((scan, i) => (
                    <div key={i} className="flex items-center gap-4 p-3 rounded-xl transition-all duration-500" style={{
                      background: activeScan === i ? 'rgba(14,165,233,0.08)' : 'rgba(255,255,255,0.02)',
                      border: activeScan === i ? '1px solid rgba(14,165,233,0.25)' : '1px solid transparent',
                    }}>
                      <span className="text-xl">{scan.icon}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-sm font-medium">{scan.label}</p>
                        <p className="text-xs truncate" style={{ color: riskColor[scan.risk] }}>{scan.result}</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="text-xs font-bold" style={{ color: '#94a3b8' }}>{scan.confidence}</p>
                        <p className="text-xs" style={{ color: '#334155' }}>confidence</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* GradCAM visualization hint */}
                <div className="rounded-xl p-4" style={{ background: 'rgba(0,0,0,0.3)' }}>
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs font-medium uppercase tracking-wider" style={{ color: '#475569' }}>GradCAM Explainability</p>
                    <span className="text-xs" style={{ color: '#38bdf8' }}>Active</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {['Normal', 'Inflam.', 'Pre-mal.', 'High-Risk'].map((cls, i) => {
                      const colors = ['#34d399', '#60a5fa', '#fbbf24', '#f87171'];
                      const heights = [20, 45, 70, 95];
                      return (
                        <div key={i} className="text-center">
                          <div className="w-full rounded mb-1" style={{ height: `${heights[i]}%`, minHeight: '8px', background: colors[i], opacity: activeScan === i ? 1 : 0.3, transition: 'opacity 0.5s' }} />
                          <p className="text-xs" style={{ color: '#334155' }}>{cls}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg" style={{ background: 'linear-gradient(135deg,#0ea5e9,#059669)' }}>
                Explainable AI
              </div>

              {/* Bottom card */}
              <div className="absolute -bottom-5 -left-5 rounded-xl p-4 shadow-xl" style={{ background: '#0a1a2e', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(248,113,113,0.15)' }}>
                    <svg className="w-4 h-4" style={{ color: '#f87171' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-xs font-bold">Zero Missed High-Risk</p>
                    <p className="text-xs" style={{ color: '#475569' }}>MC Dropout safety protocol</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full animate-bounce" style={{ background: '#38bdf8' }} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
