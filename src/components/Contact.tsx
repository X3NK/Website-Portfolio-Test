import React, { useState } from 'react';
import { Send, Mail } from 'lucide-react';

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

        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
          <div className="text-center space-y-8 mb-12">
            <div className="flex items-center justify-center space-x-4">
              <div className="text-grunge-purple">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-grunge-gray font-medium">Email</h4>
                <p className="text-grunge-gray/80">usachikdenys@gmail.com</p>
              </div>
            </div>

            <a
              href="https://t.me/d_usachik"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-grunge-purple text-grunge-gray px-8 py-4 font-semibold hover:bg-grunge-gray hover:text-grunge-dark transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center space-x-2">
                <span>SEND MESSAGE IN TELEGRAM</span>
                <Send size={20} />
              </span>
            </a>

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