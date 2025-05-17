import React from 'react';
import { Code, PenTool, Sparkles, Layers } from 'lucide-react';
import { useTranslation } from '../contexts/TranslationContext';

const skills = [
  {
    icon: <Code size={24} />,
    title: 'Frontend Development',
    description: 'Building responsive websites using modern frameworks like React, Vue, and Angular.'
  },
  {
    icon: <PenTool size={24} />,
    title: 'UI/UX Design',
    description: 'Creating intuitive and beautiful user interfaces with Figma and Adobe tools.'
  },
  {
    icon: <Sparkles size={24} />,
    title: 'Animation',
    description: 'Implementing smooth, engaging animations and micro-interactions.'
  },
  {
    icon: <Layers size={24} />,
    title: 'Full Stack',
    description: 'Developing complete solutions with Node.js, Express, and modern databases.'
  }
];

const AboutSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 md:py-32 bg-gray-950 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {t('about.title')} <span className="text-purple-400">{t('about.title1')}</span>
            </h2>
            
            <p className="text-white/70 text-lg leading-relaxed">
              {t('about.description1')}
            </p>

            <p className="text-white/70 text-lg leading-relaxed">
              {t('about.description2')}
            </p>
            
            <p className="text-white/70 text-lg leading-relaxed">
              {t('about.description3')}
            </p>
            
            <div className="pt-4">
              <a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center text-purple-400 font-medium hover:text-purple-300 transition-colors duration-300"
              >
                {t('about.letsWork')}
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/5"
              >
                <div className="text-purple-400 mb-4">
                  {skill.icon}
                </div>
                <h3 className="text-white text-lg font-semibold mb-2">{skill.title}</h3>
                <p className="text-white/60 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;