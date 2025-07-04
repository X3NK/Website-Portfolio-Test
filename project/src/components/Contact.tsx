import React, { useState } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 bg-grunge-dark relative grunge-texture">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-grunge-gray mb-4">
            CON<span className="text-grunge-purple">TACT</span>
          </h2>
          <p className="text-grunge-gray/80 max-w-2xl mx-auto">
            Ready to create something extraordinary together? Let's start a conversation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-grunge-gray font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-grunge-gray/10 border border-grunge-gray/20 text-grunge-gray placeholder-grunge-gray/50 focus:outline-none focus:border-grunge-purple focus:bg-grunge-gray/20 transition-all duration-300"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-grunge-gray font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-grunge-gray/10 border border-grunge-gray/20 text-grunge-gray placeholder-grunge-gray/50 focus:outline-none focus:border-grunge-purple focus:bg-grunge-gray/20 transition-all duration-300"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-grunge-gray font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-grunge-gray/10 border border-grunge-gray/20 text-grunge-gray placeholder-grunge-gray/50 focus:outline-none focus:border-grunge-purple focus:bg-grunge-gray/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-grunge-purple text-grunge-gray px-8 py-4 font-semibold hover:bg-grunge-gray hover:text-grunge-dark transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>SEND MESSAGE</span>
                <Send size={20} />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-grunge-gray mb-6">
                GET IN TOUCH
              </h3>
              <p className="text-grunge-gray/80 leading-relaxed mb-8">
                Whether you're looking to collaborate on a project, need design consultation, 
                or just want to chat about the intersection of analog and digital aesthetics, 
                I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="text-grunge-purple">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-grunge-gray font-medium">Email</h4>
                  <p className="text-grunge-gray/80">denys@digitalutopia.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="text-grunge-purple">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-grunge-gray font-medium">Phone</h4>
                  <p className="text-grunge-gray/80">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="text-grunge-purple">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-grunge-gray font-medium">Location</h4>
                  <p className="text-grunge-gray/80">Digital Utopia, Cyberspace</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-grunge-gray/20">
              <p className="text-grunge-gray/60 text-sm">
                Response time: Usually within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;