import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from '../contexts/TranslationContext';

const HeroSection: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setLoaded(true);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black px-6 overflow-hidden"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-purple-600/30 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-purple-600/20 blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center z-10">
        <div
          className={`transition-all duration-1000 transform ${
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            <span className="block">{t('hero.title')}</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              Zioxs
            </span>
          </h1>
          
          <h2 
            className={`text-xl md:text-2xl text-white/80 mb-8 transition-all duration-1000 delay-300 transform ${
              loaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            {t('hero.subtitle')}
          </h2>
          
          <p 
            className={`text-lg max-w-2xl mx-auto text-white/70 mb-10 transition-all duration-1000 delay-500 transform ${
              loaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            {t('hero.description')}
          </p>
          
          <div 
            className={`flex justify-center space-x-4 transition-all duration-1000 delay-700 transform ${
              loaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 rounded-full bg-purple-600 text-white font-medium hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
            >
              {t('hero.viewProjects')}
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-md text-white font-medium hover:bg-white/20 transition-all duration-300"
            >
              {t('hero.contactMe')}
            </button>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 hover:text-white/80 transition-colors duration-300 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default HeroSection;