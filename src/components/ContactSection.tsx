import React, { useState } from 'react';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';
import { useTranslation } from '../contexts/TranslationContext';

const ContactSection: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gray-950 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('contact.title')} <span className="text-purple-400">{t('contact.title1')}</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white/80 mb-2 text-sm font-medium">
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white backdrop-blur-sm focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all duration-300"
                  placeholder={t('contact.name')}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white/80 mb-2 text-sm font-medium">
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white backdrop-blur-sm focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all duration-300"
                  placeholder="your.email@gmail.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white/80 mb-2 text-sm font-medium">
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white backdrop-blur-sm focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all duration-300"
                  placeholder={t('contact.message')}
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 rounded-xl font-medium text-white transition-all duration-300 ${
                  isSubmitting 
                    ? 'bg-purple-700/50 cursor-not-allowed' 
                    : 'bg-purple-600 hover:bg-purple-700 shadow-lg hover:shadow-purple-500/20'
                }`}
              >
                {isSubmitting ? t('contact.sending') : t('contact.send')}
              </button>
              
              {submitSuccess && (
                <div className="p-3 rounded-lg bg-green-400/10 text-green-400 text-center">
                  {t('contact.success')}
                </div>
              )}
              
              {submitError && (
                <div className="p-3 rounded-lg bg-red-400/10 text-red-400 text-center">
                  {submitError}
                </div>
              )}
            </form>
          </div>
          
          <div className="flex flex-col justify-between">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
              <div className="space-y-4">
                <p className="flex items-center text-white/70">
                  <Mail size={20} className="mr-3 text-purple-400" />
                  <a href="mailto:zioxs44@gmail.com" className="hover:text-purple-400 transition-colors duration-300">
                    zioxs44@gmail.com
                  </a>
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 text-white/80 hover:bg-purple-400/20 hover:text-purple-400 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={22} />
                </a>
                <a 
                  href="#" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 text-white/80 hover:bg-purple-400/20 hover:text-purple-400 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github size={22} />
                </a>
                <a 
                  href="#" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 text-white/80 hover:bg-purple-400/20 hover:text-purple-400 transition-all duration-300"
                  aria-label="Twitter"
                >
                  <Twitter size={22} />
                </a>
              </div>
            </div>
            
            <div className="mt-8 p-6 rounded-2xl bg-purple-900/20 border border-purple-500/20">
              <h3 className="text-lg font-medium text-white mb-2">{t('contact.info.title')}</h3>
              <p className="text-white/70">
                {t('contact.info.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;