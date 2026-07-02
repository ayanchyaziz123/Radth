'use client';
import { useState } from 'react';

const services = [
  {
    title: 'GI Endoscopy AI',
    emoji: '🔬',
    tag: 'Flagship',
    tagColor: { bg: 'rgba(14,165,233,0.12)', text: '#38bdf8', border: 'rgba(14,165,233,0.25)' },
    gradient: 'linear-gradient(135deg,#0ea5e9,#0284c7)',
    description: 'Four-class risk stratification from gastrointestinal endoscopy images — Normal, Inflammatory, Pre-malignant, High-Risk — aligned with ACG/ESGE clinical guidelines.',
    tech: ['DenseNet-121', 'EfficientNet-B0', 'DeiT-Tiny', 'AEL Loss', 'GradCAM'],
    metrics: [{ label: 'Macro F1', value: '0.83' }, { label: 'AUC-ROC', value: '0.98' }, { label: 'Missed HR', value: '0' }],
    details: {
      overview: 'Our flagship model maps 23 HyperKvasir classes to four ACG/ESGE-aligned risk tiers. Three lightweight architectures (<8M params) trained under our novel Asymmetric Endoscopy Loss (AEL) with a 5× High-Risk penalty.',
      capabilities: [
        'Four-class risk stratification (Normal → High-Risk)',
        'Asymmetric Endoscopy Loss (AEL) — 5× High-Risk penalty',
        'GradCAM heatmaps per risk tier for clinician review',
        'Monte Carlo Dropout uncertainty quantification',
        'Zero missed High-Risk lesions under referral protocol',
        '43.9% automated case clearance (workload reduction)',
        'Zero-shot cross-dataset generalisation (Kvasir-v2)',
        'HIPAA-compliant inference pipeline',
      ],
    }
  },
  {
    title: 'Chest Radiology AI',
    emoji: '🫁',
    tag: 'Available',
    tagColor: { bg: 'rgba(52,211,153,0.12)', text: '#34d399', border: 'rgba(52,211,153,0.25)' },
    gradient: 'linear-gradient(135deg,#059669,#0d9488)',
    description: 'CNN-based analysis of chest X-rays and CT scans for pneumonia, nodule detection, pleural effusion, and COVID-19 screening with radiologist-level accuracy.',
    tech: ['ResNet-50', 'EfficientNet', 'Grad-CAM++', 'Ensemble'],
    metrics: [{ label: 'Sensitivity', value: '96%' }, { label: 'Specificity', value: '94%' }, { label: 'AUC', value: '0.97' }],
    details: {
      overview: 'Lightweight CNN models trained on CheXpert and NIH ChestX-ray14 datasets. Real-time inference with attention maps highlighting pathological regions for radiologist confirmation.',
      capabilities: [
        'Multi-label pathology detection (14 conditions)',
        'Pneumonia and COVID-19 screening',
        'Pulmonary nodule detection and sizing',
        'Pleural effusion grading',
        'GradCAM++ attention maps per pathology',
        'Confidence scoring with uncertainty bounds',
        'DICOM-native input pipeline',
        'HL7 FHIR integration ready',
      ],
    }
  },
  {
    title: 'Digital Pathology AI',
    emoji: '🧫',
    tag: 'Available',
    tagColor: { bg: 'rgba(251,191,36,0.12)', text: '#fbbf24', border: 'rgba(251,191,36,0.25)' },
    gradient: 'linear-gradient(135deg,#d97706,#b45309)',
    description: 'Whole-slide image analysis for cancer grading, cell segmentation, and Ki-67 proliferation index scoring — automated pathology at scale.',
    tech: ['ViT-B', 'U-Net', 'Attention MIL', 'Patch CNN'],
    metrics: [{ label: 'Gleason Acc.', value: '91%' }, { label: 'Cell mAP', value: '0.89' }, { label: 'AUC', value: '0.96' }],
    details: {
      overview: 'Whole-slide image (WSI) pipeline using attention-based multiple instance learning (MIL) for cancer subtype classification and tumour grading without needing pixel-level annotations.',
      capabilities: [
        'Whole-slide image tiling and preprocessing',
        'Cancer subtype classification (H&E stained)',
        'Gleason grading for prostate cancer',
        'Tumour infiltrating lymphocyte (TIL) mapping',
        'Ki-67 automated proliferation scoring',
        'Cell segmentation and counting',
        'Attention heatmaps for pathologist review',
        'OpenSlide and QuPath compatible',
      ],
    }
  },
  {
    title: 'Dermatology AI',
    emoji: '🧬',
    tag: 'Available',
    tagColor: { bg: 'rgba(248,113,113,0.12)', text: '#f87171', border: 'rgba(248,113,113,0.25)' },
    gradient: 'linear-gradient(135deg,#dc2626,#c2410c)',
    description: 'Skin lesion classification across 7 diagnostic categories — melanoma, basal cell carcinoma, keratosis, and more — with dermoscopy image support.',
    tech: ['EfficientNet-B4', 'Vision ViT', 'TTA', 'MC Dropout'],
    metrics: [{ label: 'Melanoma AUC', value: '0.94' }, { label: 'Macro F1', value: '0.87' }, { label: 'Sensitivity', value: '92%' }],
    details: {
      overview: 'Trained on ISIC 2019/2020 datasets with 25,000+ dermoscopy images. Test-time augmentation (TTA) and Monte Carlo Dropout ensure robust confidence estimates for borderline cases.',
      capabilities: [
        '7-class lesion classification (ISIC taxonomy)',
        'Melanoma vs benign binary screening',
        'Dermoscopy and clinical image support',
        'Test-time augmentation for robust predictions',
        'Saliency maps highlighting diagnostic regions',
        'Uncertainty-based referral flagging',
        'Mobile-optimised model for teledermatology',
        'Integration with EHR photo upload workflows',
      ],
    }
  },
  {
    title: 'Ophthalmology AI',
    emoji: '👁️',
    tag: 'Available',
    tagColor: { bg: 'rgba(167,139,250,0.12)', text: '#a78bfa', border: 'rgba(167,139,250,0.25)' },
    gradient: 'linear-gradient(135deg,#7c3aed,#6d28d9)',
    description: 'Retinal image analysis for diabetic retinopathy grading (0–4 severity), glaucoma risk screening, and age-related macular degeneration detection.',
    tech: ['InceptionV3', 'ResNet', 'CAM', 'Bootstrap CI'],
    metrics: [{ label: 'DR Kappa', value: '0.86' }, { label: 'Glaucoma AUC', value: '0.95' }, { label: 'AMD Acc.', value: '93%' }],
    details: {
      overview: 'Trained on EyePACS, APTOS, and REFUGE datasets. Our DR grading model achieves diabetologist-level quadratic weighted kappa (0.86) across 5 severity grades.',
      capabilities: [
        'Diabetic retinopathy grading (0–4 severity)',
        'Referable DR detection for telemedicine',
        'Glaucoma optic disc analysis',
        'Age-related macular degeneration (AMD) screening',
        'Fundus and OCT image support',
        'Class activation maps per severity grade',
        'Longitudinal tracking for disease progression',
        'Bootstrap confidence intervals for clinical reporting',
      ],
    }
  },
  {
    title: 'Custom CNN Pipeline',
    emoji: '⚙️',
    tag: 'Bespoke',
    tagColor: { bg: 'rgba(56,189,248,0.12)', text: '#38bdf8', border: 'rgba(56,189,248,0.25)' },
    gradient: 'linear-gradient(135deg,#0ea5e9,#0369a1)',
    description: 'End-to-end custom model development for any medical imaging modality — from dataset curation and annotation to training, validation, and clinical deployment.',
    tech: ['Any Architecture', 'Custom Loss', 'Active Learning', 'MLOps'],
    metrics: [{ label: 'Delivery', value: '8 wks' }, { label: 'Support', value: '12 mo' }, { label: 'FDA', value: 'Pathway' }],
    details: {
      overview: 'We handle the full AI development lifecycle: dataset curation, clinical annotation workflows, model training with custom loss functions, explainability integration, validation studies, and deployment to your existing infrastructure.',
      capabilities: [
        'Dataset curation and annotation pipeline',
        'Custom loss function design (AEL-style)',
        'Architecture selection and hyperparameter tuning',
        'GradCAM / Grad-CAM++ / SHAP explainability',
        'Monte Carlo Dropout uncertainty quantification',
        'Bootstrap confidence interval reporting',
        'Clinical validation and performance benchmarking',
        'Docker/ONNX deployment for clinical systems',
      ],
    }
  },
];

const ServicesSection = () => {
  const [selected, setSelected] = useState(null);
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <section id="services" className="py-28" style={{ background: '#060f1e' }}>
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ background: 'rgba(14,165,233,0.08)', border: '1px solid rgba(14,165,233,0.2)', color: '#38bdf8' }}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Medical Imaging AI Solutions
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              CNN Models for Every{' '}
              <span style={{ background: 'linear-gradient(90deg,#38bdf8,#34d399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Clinical Modality
              </span>
            </h2>
            <p className="text-lg" style={{ color: '#64748b' }}>
              Lightweight, explainable, and clinically validated deep learning models
              deployable on standard hospital hardware — no GPU cluster required.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <div
                key={i}
                className="relative rounded-2xl cursor-pointer transition-all duration-300"
                style={{
                  background: '#0a1828',
                  border: hovered === i ? '1px solid rgba(56,189,248,0.3)' : '1px solid rgba(255,255,255,0.06)',
                  transform: hovered === i ? 'translateY(-5px)' : 'none',
                  boxShadow: hovered === i ? '0 20px 40px rgba(14,165,233,0.1)' : 'none',
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

                  <h3 className="text-base font-bold text-white mb-2">{svc.title}</h3>
                  <p className="text-sm mb-4 leading-relaxed" style={{ color: '#64748b' }}>{svc.description}</p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {svc.tech.map((t, j) => (
                      <span key={j} className="text-xs px-2 py-0.5 rounded" style={{ background: 'rgba(255,255,255,0.04)', color: '#475569', border: '1px solid rgba(255,255,255,0.06)' }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Mini metrics */}
                  <div className="grid grid-cols-3 gap-2 mb-5">
                    {svc.metrics.map((m, j) => (
                      <div key={j} className="text-center p-2 rounded-lg" style={{ background: 'rgba(255,255,255,0.03)' }}>
                        <div className="text-sm font-bold" style={{ background: 'linear-gradient(90deg,#38bdf8,#34d399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{m.value}</div>
                        <div className="text-xs mt-0.5" style={{ color: '#334155' }}>{m.label}</div>
                      </div>
                    ))}
                  </div>

                  <button className="inline-flex items-center text-sm font-semibold transition-colors" style={{ color: '#38bdf8' }}>
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
            <p className="mb-6" style={{ color: '#475569' }}>Need a model for a modality not listed? We build custom pipelines for any imaging type.</p>
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-xl transition-all" style={{ background: 'linear-gradient(135deg,#0ea5e9,#059669)', boxShadow: '0 8px 25px rgba(14,165,233,0.25)' }}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Discuss Your Imaging Problem
            </a>
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)' }}>
          <div className="relative rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" style={{ background: '#0a1828', border: '1px solid rgba(56,189,248,0.15)' }}>
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
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>{selected.details.overview}</p>
            </div>

            <div className="p-8">
              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {selected.metrics.map((m, i) => (
                  <div key={i} className="text-center p-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div className="text-2xl font-black mb-1" style={{ background: 'linear-gradient(90deg,#38bdf8,#34d399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{m.value}</div>
                    <div className="text-xs" style={{ color: '#475569' }}>{m.label}</div>
                  </div>
                ))}
              </div>

              <h3 className="text-lg font-bold text-white mb-4">Capabilities</h3>
              <div className="space-y-2.5 mb-8">
                {selected.details.capabilities.map((c, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'rgba(52,211,153,0.15)' }}>
                      <svg className="w-3 h-3" style={{ color: '#34d399' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm" style={{ color: '#94a3b8' }}>{c}</span>
                  </div>
                ))}
              </div>

              {/* Tech stack */}
              <div className="mb-8">
                <h3 className="text-sm font-bold text-white mb-3">Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {selected.tech.map((t, i) => (
                    <span key={i} className="text-xs px-3 py-1.5 rounded-lg font-medium" style={{ background: 'rgba(14,165,233,0.1)', color: '#38bdf8', border: '1px solid rgba(14,165,233,0.2)' }}>{t}</span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <a href="#contact" onClick={() => setSelected(null)} className="flex-1 text-center px-6 py-3 text-white font-semibold rounded-xl transition-opacity hover:opacity-90" style={{ background: selected.gradient }}>
                  Request a Demo
                </a>
                <button onClick={() => setSelected(null)} className="flex-1 px-6 py-3 font-semibold rounded-xl transition-colors" style={{ border: '1px solid rgba(255,255,255,0.1)', color: '#64748b' }}>
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
