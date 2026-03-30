'use client';
import { useState } from 'react';
import { X, Check, ArrowRight, Zap } from 'lucide-react';

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  const agents = [
    {
      title: 'Restaurant AI Agent',
      emoji: '🍽️',
      tag: 'Featured',
      tagColor: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
      description: 'AI that takes orders, manages tables, tracks inventory, and handles customer service — fully automated for your restaurant.',
      gradient: 'from-orange-500 to-amber-600',
      borderColor: 'hover:border-orange-500/50',
      glowColor: 'shadow-orange-500/10',
      fullDetails: {
        overview: 'The Radth Restaurant AI Agent is your always-on digital staff member. From taking orders via voice or chat to managing kitchen queues and alerting staff — all automated, all intelligent.',
        features: [
          'AI-powered order taking via voice, chat, or kiosk',
          'Real-time kitchen display & queue management',
          'Smart table management & reservation system',
          'Inventory tracking with auto-reorder alerts',
          'Customer sentiment analysis from reviews',
          'Upsell & recommendation engine',
          'Staff scheduling optimization',
          'Multi-location chain support',
        ],
        benefits: [
          'Cut labor costs by up to 30%',
          'Reduce order errors to near zero',
          'Increase table turnover by 40%',
          'Boost average order value with smart upsells',
        ]
      }
    },
    {
      title: 'Retail & E-Commerce AI Agent',
      emoji: '🛒',
      tag: 'Popular',
      tagColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      description: 'AI that manages your store inventory, handles customer queries 24/7, recovers abandoned carts, and drives repeat purchases.',
      gradient: 'from-blue-500 to-cyan-600',
      borderColor: 'hover:border-blue-500/50',
      glowColor: 'shadow-blue-500/10',
      fullDetails: {
        overview: 'Deploy a tireless AI agent that handles every part of your retail or e-commerce operation — product recommendations, cart recovery, stock alerts, and customer support without hiring extra staff.',
        features: [
          'AI product recommendations personalized per user',
          'Abandoned cart recovery with smart follow-ups',
          'Real-time inventory sync across channels',
          '24/7 customer support chatbot',
          'Return & refund automation',
          'Dynamic pricing suggestions',
          'Trend analysis & demand forecasting',
          'Review management and response automation',
        ],
        benefits: [
          'Increase conversion rates by 25%',
          'Reduce cart abandonment by 45%',
          'Lower customer support costs by 60%',
          'Scale sales without scaling headcount',
        ]
      }
    },
    {
      title: 'Healthcare AI Agent',
      emoji: '🏥',
      tag: 'HIPAA-Ready',
      tagColor: 'bg-red-500/20 text-red-300 border-red-500/30',
      description: 'AI that books appointments, manages patient queues, sends reminders, and assists doctors with intake — all HIPAA-compliant.',
      gradient: 'from-red-500 to-rose-600',
      borderColor: 'hover:border-red-500/50',
      glowColor: 'shadow-red-500/10',
      fullDetails: {
        overview: 'Give your clinic or hospital an AI-powered front desk that never sleeps. Our Healthcare AI Agent handles patient scheduling, reminders, intake forms, and triage — reducing staff burden and improving patient experience.',
        features: [
          'AI-powered appointment scheduling & rescheduling',
          'Live queue management with wait time estimates',
          'Automated patient reminders via SMS/email',
          'Digital intake forms & pre-visit questionnaires',
          'Telemedicine session coordination',
          'EHR system integration',
          'Emergency escalation alerts',
          'Post-visit follow-up automation',
        ],
        benefits: [
          'Reduce no-shows by 60%',
          'Cut front desk workload by 50%',
          'Improve patient satisfaction scores',
          'Expand capacity without adding staff',
        ]
      }
    },
    {
      title: 'Real Estate AI Agent',
      emoji: '🏠',
      tag: 'New',
      tagColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      description: 'AI that lists properties, qualifies leads automatically, schedules viewings, and answers buyer/renter questions around the clock.',
      gradient: 'from-emerald-500 to-teal-600',
      borderColor: 'hover:border-emerald-500/50',
      glowColor: 'shadow-emerald-500/10',
      fullDetails: {
        overview: 'Your AI real estate agent that works 24/7 — qualifying leads while you sleep, scheduling showings automatically, and keeping buyers engaged throughout the entire journey.',
        features: [
          'Automated lead qualification & scoring',
          'AI chatbot for property inquiries',
          'Viewing & open house scheduler',
          'Personalized property matching for buyers',
          'Document collection & e-signature coordination',
          'Market value estimation with AI analytics',
          'Automated listing updates & syndication',
          'CRM integration with agent follow-up workflows',
        ],
        benefits: [
          'Close deals 35% faster',
          'Convert 3x more leads with instant responses',
          'Reduce agent admin time by 50%',
          'Never miss a lead with 24/7 coverage',
        ]
      }
    },
    {
      title: 'Customer Support AI Agent',
      emoji: '💬',
      tag: 'Any Industry',
      tagColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      description: 'A universal AI support agent that handles tickets, live chat, FAQs, and escalations for any business — deployed in hours.',
      gradient: 'from-purple-500 to-violet-600',
      borderColor: 'hover:border-purple-500/50',
      glowColor: 'shadow-purple-500/10',
      fullDetails: {
        overview: 'Replace slow, expensive support queues with an AI agent that resolves 80% of tickets instantly, escalates complex cases intelligently, and learns from every interaction.',
        features: [
          'Instant ticket resolution for common queries',
          'Multi-channel support (chat, email, social)',
          'Smart escalation to human agents',
          'Sentiment detection & priority routing',
          'Knowledge base auto-generation',
          'Multilingual support (50+ languages)',
          'SLA tracking and reporting',
          'Customer satisfaction scoring',
        ],
        benefits: [
          'Resolve 80% of tickets without human help',
          'Cut response times from hours to seconds',
          'Reduce support costs by 65%',
          'Improve CSAT scores significantly',
        ]
      }
    },
    {
      title: 'Business Analytics AI Agent',
      emoji: '📊',
      tag: 'Insights',
      tagColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
      description: 'AI that monitors your KPIs, detects anomalies, generates reports automatically, and delivers daily business intelligence briefings.',
      gradient: 'from-cyan-500 to-sky-600',
      borderColor: 'hover:border-cyan-500/50',
      glowColor: 'shadow-cyan-500/10',
      fullDetails: {
        overview: 'Stop drowning in spreadsheets. Your Analytics AI Agent monitors all your data streams, flags opportunities and risks, and delivers plain-English summaries every morning.',
        features: [
          'Real-time KPI dashboards and monitoring',
          'Anomaly detection & automated alerts',
          'Daily AI-generated business briefings',
          'Revenue forecasting & trend analysis',
          'Competitor price and market tracking',
          'Customer behavior cohort analysis',
          'Automated PDF/Slack report delivery',
          'Integration with 100+ data sources',
        ],
        benefits: [
          'Save 10+ hours/week on reporting',
          'Catch revenue leaks before they grow',
          'Make faster, data-driven decisions',
          'Democratize analytics for the whole team',
        ]
      }
    },
    {
      title: 'HR & Recruitment AI Agent',
      emoji: '👥',
      tag: 'New',
      tagColor: 'bg-pink-500/20 text-pink-300 border-pink-500/30',
      description: 'AI that screens resumes, schedules interviews, onboards new hires, and answers employee HR questions — automatically.',
      gradient: 'from-pink-500 to-rose-600',
      borderColor: 'hover:border-pink-500/50',
      glowColor: 'shadow-pink-500/10',
      fullDetails: {
        overview: 'Automate your entire hiring funnel and HR operations. The HR AI Agent screens thousands of applications, schedules interviews, and handles onboarding paperwork — so your team focuses on people, not paperwork.',
        features: [
          'AI resume screening & candidate ranking',
          'Automated interview scheduling',
          'Onboarding checklist & document collection',
          'Employee FAQ chatbot (policies, benefits, PTO)',
          'Performance review reminders & data collection',
          'Job description generation with AI',
          'Candidate engagement & nurture sequences',
          'ATS integration & reporting',
        ],
        benefits: [
          'Reduce time-to-hire by 50%',
          'Screen 10x more candidates without extra effort',
          'Improve new hire onboarding experience',
          'Free HR team from repetitive admin tasks',
        ]
      }
    },
    {
      title: 'Marketing & Content AI Agent',
      emoji: '📣',
      tag: 'Creative AI',
      tagColor: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
      description: 'AI that writes posts, runs campaigns, responds to social comments, and optimizes ad spend — your automated marketing team.',
      gradient: 'from-yellow-500 to-orange-500',
      borderColor: 'hover:border-yellow-500/50',
      glowColor: 'shadow-yellow-500/10',
      fullDetails: {
        overview: 'A full-stack marketing AI that creates content, schedules posts, monitors brand mentions, and optimizes campaigns across all channels — running 24/7 to grow your audience and revenue.',
        features: [
          'AI content writing for blogs, social, and ads',
          'Automated social media scheduling & posting',
          'Brand mention monitoring & response',
          'A/B testing and ad copy optimization',
          'Email campaign creation & segmentation',
          'SEO keyword tracking & content suggestions',
          'Campaign ROI analytics & reporting',
          'Competitor content intelligence',
        ],
        benefits: [
          'Publish 5x more content without extra staff',
          'Reduce content production costs by 70%',
          'Improve ad performance with AI optimization',
          'Stay consistent across all channels 24/7',
        ]
      }
    },
  ];

  return (
    <>
      <section id="services" className="py-28 bg-white">
        <div className="container mx-auto px-6">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-50 border border-violet-200 text-violet-700 font-medium text-sm mb-6">
              <Zap size={14} className="text-violet-500" />
              AI Agent Solutions
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              One Agent for Every{' '}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Industry
              </span>
            </h2>
            <p className="text-lg text-gray-500">
              Deploy intelligent AI agents that automate your operations, serve your customers 24/7,
              and grow your revenue — without growing your payroll.
            </p>
          </div>

          {/* Agents grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {agents.map((agent, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl border-2 border-gray-100 ${agent.borderColor} transition-all duration-300 cursor-pointer group overflow-hidden`}
                style={{
                  transform: hoveredIndex === index ? 'translateY(-6px)' : 'translateY(0)',
                  boxShadow: hoveredIndex === index
                    ? `0 20px 40px -10px rgba(124,58,237,0.12)`
                    : '0 2px 8px rgba(0,0,0,0.04)'
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setSelectedService(agent)}
              >
                {/* Top gradient line */}
                <div className={`h-1 w-full bg-gradient-to-r ${agent.gradient}`} />

                <div className="p-6">
                  {/* Emoji + tag row */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-3xl">{agent.emoji}</div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${agent.tagColor}`}>
                      {agent.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-gray-900 mb-3 leading-snug">
                    {agent.title}
                  </h3>

                  <p className="text-gray-500 text-sm mb-5 leading-relaxed">
                    {agent.description}
                  </p>

                  <button
                    className="inline-flex items-center text-sm font-semibold text-violet-600 hover:text-violet-700 transition-colors group/btn"
                  >
                    Learn more
                    <ArrowRight size={14} className="ml-1.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <p className="text-gray-500 mb-6">Don't see your industry? We build custom AI agents for any use case.</p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-violet-500 hover:to-indigo-500 transition-all shadow-xl shadow-violet-500/25"
            >
              <Zap size={18} />
              Build Your Custom AI Agent
            </a>
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Modal header */}
            <div className={`bg-gradient-to-r ${selectedService.gradient} p-8 text-white relative rounded-t-2xl`}>
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X size={22} />
              </button>
              <div className="flex items-center gap-4 mb-3">
                <span className="text-4xl">{selectedService.emoji}</span>
                <h2 className="text-2xl font-bold">{selectedService.title}</h2>
              </div>
              <p className="text-white/85 text-sm leading-relaxed">{selectedService.description}</p>
            </div>

            <div className="p-8">
              <p className="text-gray-600 mb-8 leading-relaxed">{selectedService.fullDetails.overview}</p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Key Features</h3>
                  <div className="space-y-2.5">
                    {selectedService.fullDetails.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <Check size={16} className="text-violet-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Business Impact</h3>
                  <div className="space-y-3">
                    {selectedService.fullDetails.benefits.map((b, i) => (
                      <div key={i} className="bg-violet-50 border border-violet-100 rounded-xl px-4 py-3">
                        <p className="text-gray-800 text-sm font-medium">{b}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-6 border-t border-gray-100">
                <a
                  href="#contact"
                  onClick={() => setSelectedService(null)}
                  className={`flex-1 text-center px-6 py-3 bg-gradient-to-r ${selectedService.gradient} text-white font-semibold rounded-xl hover:opacity-90 transition-opacity`}
                >
                  Deploy This Agent
                </a>
                <button
                  onClick={() => setSelectedService(null)}
                  className="flex-1 px-6 py-3 border-2 border-gray-200 text-gray-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
                >
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
