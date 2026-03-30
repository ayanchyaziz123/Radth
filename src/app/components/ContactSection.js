'use client';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-50 border border-violet-200 text-violet-700 font-medium text-sm mb-6">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Deploy Your{' '}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              AI Agent?
            </span>
          </h2>
          <p className="text-lg text-gray-500">
            Tell us about your business and we'll recommend the right AI agent. Most clients are live within 2 weeks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact info */}
          <div className="lg:col-span-1">
            <div className="bg-[#0A0A1A] rounded-2xl p-8 h-full text-white">
              <h3 className="text-xl font-bold mb-8">Contact Radth AI</h3>

              <div className="space-y-6">
                {[
                  { icon: Mail, label: 'Email', value: 'radth.co@gmail.com', href: 'mailto:radth.co@gmail.com' },
                  { icon: Phone, label: 'Phone', value: '+1 (347) 669-6071', href: 'tel:+13476696071' },
                  { icon: MapPin, label: 'Location', value: 'New York, NY', href: null },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-violet-400" size={18} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs font-medium mb-1">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-white text-sm hover:text-violet-300 transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white text-sm">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-gray-400 text-sm font-medium mb-4">Follow Us</p>
                <div className="flex space-x-3">
                  {[
                    { icon: FacebookIcon, href: 'https://www.facebook.com/radthbd' },
                    { icon: InstagramIcon, href: 'https://www.instagram.com/radthbd' },
                    { icon: LinkedinIcon, href: 'https://www.linkedin.com/company/radth' },
                    { icon: TwitterIcon, href: 'https://twitter.com/radthbd' },
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/5 hover:bg-violet-500/20 border border-white/10 hover:border-violet-500/40 rounded-xl flex items-center justify-center text-gray-400 hover:text-violet-300 transition-all"
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick response badge */}
              <div className="mt-8 p-4 bg-violet-500/10 border border-violet-500/20 rounded-xl">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <p className="text-white text-xs font-semibold">Typically replies within 2 hours</p>
                </div>
                <p className="text-gray-500 text-xs">Mon–Fri, 9am–6pm EST</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white border-2 border-gray-100 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Send us a message</h3>

              {formSubmitted ? (
                <div className="bg-green-50 border-2 border-green-200 text-green-700 rounded-xl p-6 flex items-start">
                  <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Message received!</h4>
                    <p className="text-sm">We'll get back to you within 2 hours.</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name *</label>
                      <input
                        type="text" name="name" value={formData.name} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-violet-500 focus:outline-none transition text-gray-900"
                        placeholder="John Doe" required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Your Email *</label>
                      <input
                        type="email" name="email" value={formData.email} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-violet-500 focus:outline-none transition text-gray-900"
                        placeholder="john@example.com" required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Which AI Agent interests you? *</label>
                    <select
                      name="subject" value={formData.subject} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-violet-500 focus:outline-none transition text-gray-900 bg-white"
                      required
                    >
                      <option value="">Select an AI Agent...</option>
                      <option>Restaurant AI Agent</option>
                      <option>Retail & E-Commerce AI Agent</option>
                      <option>Healthcare AI Agent</option>
                      <option>Real Estate AI Agent</option>
                      <option>Customer Support AI Agent</option>
                      <option>Business Analytics AI Agent</option>
                      <option>HR & Recruitment AI Agent</option>
                      <option>Marketing & Content AI Agent</option>
                      <option>Custom AI Agent Solution</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Tell us about your business *</label>
                    <textarea
                      name="message" rows={5} value={formData.message} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-violet-500 focus:outline-none transition text-gray-900 resize-none"
                      placeholder="What does your business do? What problems are you trying to solve with AI?"
                      required
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className={`w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-violet-500 hover:to-indigo-500 transition-all flex items-center justify-center shadow-xl shadow-violet-500/25 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2" size={18} />
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
