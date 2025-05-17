import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from '../contexts/TranslationContext';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event: MouseEvent) => {
      const langSelector = document.getElementById('lang-selector');
      if (langSelector && !langSelector.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      scrollToSection('hero');
    } else {
      window.location.href = '/#hero';
    }
  };

  const navigationItems = [
    { label: t('nav.home'), action: () => handleLogoClick(new MouseEvent('click') as React.MouseEvent<Element, MouseEvent>) },
    { label: t('nav.projects'), action: () => location.pathname === '/projects' ? null : window.location.href = '/projects' }
  ];

  const languages = [
    { code: 'EN', label: 'English' },
    { code: 'ID', label: 'Indonesia' }
  ];

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode);
    setIsLangOpen(false);
  };

  return (
    <header className="fixed w-full z-50 px-6 py-4">
      <div className="max-w-6xl mx-auto">
        <div className={`flex items-center justify-between rounded-3xl transition-all duration-300 ${
          isScrolled ? 'bg-transparent backdrop-blur-lg shadow-lg p-4' : 'bg-transparent p-2'
        }`}>
          <a
            href="/#hero"
            onClick={handleLogoClick}
            className="flex items-center space-x-2 text-white text-2xl font-bold leading-none"
          >
            <img 
              src="https://cdn.discordapp.com/attachments/861260756485406721/1371329233799872622/zi_logo_64_slim_nobg_white.png?ex=6822bd5f&is=68216bdf&hm=66f3a3a503e6a86fc0489388ca2fa27b05e97d96f80335ef23c609a44d598b85&" 
              alt="Logo" 
              className="h-12 w-auto"
            />
            <span>Zioxs<span className="text-purple-400">.</span></span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <nav>
              <div className={`flex space-x-2 rounded-full transition-all duration-300 ${
                isScrolled ? 'bg-transparent backdrop-blur-sm px-4 py-2' : 'px-2 py-1'
              }`}>
                {navigationItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={item.action}
                    className={`px-4 py-2 rounded-full text-white/80 hover:text-purple-400 hover:bg-white/5 transition-all duration-300 text-base font-medium ${
                      (location.pathname === '/projects' && item.label === t('nav.projects')) || 
                      (location.pathname === '/' && item.label === t('nav.home')) 
                        ? 'text-purple-400 bg-white/5' 
                        : ''
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </nav>

            {/* Language Selector */}
            <div id="lang-selector" className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-2 px-4 py-2 rounded-full text-white/80 hover:text-purple-400 hover:bg-white/5 transition-all duration-300"
              >
                <Globe size={18} />
                <span>{language}</span>
              </button>

              {/* Language Dropdown */}
              <div className={`absolute right-0 mt-2 w-48 rounded-xl bg-gray-900/90 backdrop-blur-lg border border-white/10 shadow-lg transform transition-all duration-300 ${
                isLangOpen 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-2 pointer-events-none'
              }`}>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-white/5 transition-colors duration-200 ${
                      language === lang.code 
                        ? 'text-purple-400' 
                        : 'text-white/80'
                    } ${lang.code === 'ID' ? 'rounded-b-xl' : 'rounded-t-xl'}`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 bg-black/90 backdrop-blur-xl z-40 flex flex-col items-center justify-center md:hidden transition-all duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-center space-y-8">
          {navigationItems.map((item) => (
            <button
              key={item.label}
              onClick={item.action}
              className={`px-8 py-3 rounded-full text-white/90 hover:text-purple-400 hover:bg-white/5 transition-all duration-300 text-2xl font-medium ${
                (location.pathname === '/projects' && item.label === t('nav.projects')) || 
                (location.pathname === '/' && item.label === t('nav.home')) 
                  ? 'text-purple-400 bg-white/5' 
                  : ''
              }`}
            >
              {item.label}
            </button>
          ))}
          
          {/* Mobile Language Selector */}
          <div className="flex space-x-4">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  language === lang.code
                    ? 'bg-purple-600/20 text-purple-400'
                    : 'text-white/80 hover:bg-white/5'
                }`}
              >
                {lang.code}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;