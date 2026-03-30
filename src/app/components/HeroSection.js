'use client';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeAgent, setActiveAgent] = useState(0);

  const agents = [
    { label: 'Restaurant AI Agent', icon: '🍽️', status: 'Taking orders...' },
    { label: 'Healthcare AI Agent', icon: '🏥', status: 'Scheduling patients...' },
    { label: 'Retail AI Agent', icon: '🛒', status: 'Managing inventory...' },
    { label: 'Support AI Agent', icon: '💬', status: 'Resolving tickets...' },
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveAgent((prev) => (prev + 1) % agents.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="hero-dark min-h-screen flex items-center relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(124,58,237,0.15) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-violet-600/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-indigo-600/20 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-900/10 blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-16 py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left: Text content */}
          <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 font-medium text-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
              AI Agents — Now Live
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tight text-white">
              AI Agents That{' '}
              <span className="ai-gradient-text">Run Your Business</span>
            </h1>

            <p className="text-lg text-gray-400 mb-10 max-w-xl leading-relaxed">
              Radth AI builds intelligent AI agents for restaurants, healthcare, retail, and more.
              Automate operations, delight customers, and grow — 24/7, without limits.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <a
                href="#services"
                className="group px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 transition-all shadow-xl shadow-violet-500/30 flex items-center justify-center"
              >
                Explore AI Agents
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="px-8 py-4 rounded-xl font-semibold text-gray-300 border border-white/20 hover:border-violet-400/50 hover:text-white hover:bg-white/5 transition-all flex items-center justify-center"
              >
                Book a Demo
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: '50+', label: 'AI Agents Deployed' },
                { value: '10x', label: 'Faster Operations' },
                { value: '24/7', label: 'Always Running' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-bold ai-gradient-text">{stat.value}</div>
                  <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: AI Agent dashboard visual */}
          <div className={`hidden md:block transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="relative">
              {/* Main card */}
              <div className="relative bg-[#0D0D20] border border-white/10 rounded-2xl p-6 shadow-2xl glow-purple">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl ai-gradient flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">Radth AI Command Center</p>
                      <p className="text-gray-500 text-xs">4 agents active</p>
                    </div>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  </div>
                </div>

                {/* Active agents list */}
                <div className="space-y-3 mb-6">
                  {agents.map((agent, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-4 p-3 rounded-xl transition-all duration-500 ${
                        activeAgent === i
                          ? 'bg-violet-600/20 border border-violet-500/30'
                          : 'bg-white/5 border border-transparent'
                      }`}
                    >
                      <span className="text-2xl">{agent.icon}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-sm font-medium">{agent.label}</p>
                        <p className="text-gray-500 text-xs truncate">{agent.status}</p>
                      </div>
                      <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                        activeAgent === i ? 'bg-green-400 animate-pulse' : 'bg-gray-600'
                      }`} />
                    </div>
                  ))}
                </div>

                {/* Activity feed */}
                <div className="bg-black/30 rounded-xl p-4">
                  <p className="text-gray-500 text-xs font-medium mb-3 uppercase tracking-wider">Live Activity</p>
                  <div className="space-y-2">
                    {[
                      { msg: 'Order #1042 confirmed — Table 7', time: 'now', color: 'text-green-400' },
                      { msg: 'Patient appointment rescheduled', time: '2s', color: 'text-blue-400' },
                      { msg: 'Inventory: Tomatoes restocked', time: '5s', color: 'text-yellow-400' },
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between items-center">
                        <p className={`text-xs ${item.color}`}>{item.msg}</p>
                        <span className="text-gray-600 text-xs">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg animate-float">
                AI-Powered
              </div>

              {/* Bottom floating card */}
              <div className="absolute -bottom-6 -left-6 bg-[#0D0D20] border border-white/10 rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-xs font-bold">Revenue Up 40%</p>
                    <p className="text-gray-500 text-xs">This month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-violet-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
