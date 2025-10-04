import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Linkedin, Twitter, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-600 font-medium text-sm mb-4 border border-blue-100">
            Get In Touch
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Let's Start a Conversation</h2>
          <p className="text-lg text-gray-600">
            Have a project in mind or want to learn more about our IT & AI services? Connect with us and let's build something great together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Information Column */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="bg-blue-600 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <a href="mailto:radth.co@gmail.com" className="text-blue-600 hover:text-blue-700 transition-colors">
                      radth.co@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="bg-blue-600 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <a href="tel:+13476696071" className="text-blue-600 hover:text-blue-700 transition-colors">
                      +1 (347) 669-6071
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="bg-blue-600 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                    <p className="text-gray-600">New York, NY</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 pt-8 border-t border-blue-100">
                <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
                <div className="flex space-x-3">
                  <a 
                    href="https://www.facebook.com/radthbd" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white border-2 border-gray-200 hover:border-blue-600 hover:bg-blue-50 text-gray-600 hover:text-blue-600 w-12 h-12 flex items-center justify-center rounded-xl transition-all"
                  >
                    <Facebook size={20} />
                  </a>
                  <a 
                    href="https://www.instagram.com/radthbd" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white border-2 border-gray-200 hover:border-blue-600 hover:bg-blue-50 text-gray-600 hover:text-blue-600 w-12 h-12 flex items-center justify-center rounded-xl transition-all"
                  >
                    <Instagram size={20} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/radth" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white border-2 border-gray-200 hover:border-blue-600 hover:bg-blue-50 text-gray-600 hover:text-blue-600 w-12 h-12 flex items-center justify-center rounded-xl transition-all"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="https://twitter.com/radthbd" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white border-2 border-gray-200 hover:border-blue-600 hover:bg-blue-50 text-gray-600 hover:text-blue-600 w-12 h-12 flex items-center justify-center rounded-xl transition-all"
                  >
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-2">
            <div className="bg-white border-2 border-gray-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
              
              {formSubmitted ? (
                <div className="bg-green-50 border-2 border-green-200 text-green-700 rounded-xl p-6 flex items-start mb-6">
                  <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Message Sent Successfully!</h4>
                    <p className="text-sm">We'll get back to you soon.</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition text-gray-900"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition text-gray-900"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition text-gray-900"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition text-gray-900 resize-none"
                      placeholder="Tell us about your project..."
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className={`w-full bg-blue-600 text-white font-semibold py-4 px-6 rounded-xl hover:bg-blue-700 transition-all flex items-center justify-center shadow-lg shadow-blue-600/20 ${
                      isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
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