import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import { useTranslation } from '../contexts/TranslationContext';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  date: string;
}

const getTagColor = (tag: string): string => {
  switch (tag.toLowerCase()) {
    case 'fabric':
      return 'bg-gray-500/50 text-beige-300';
    case 'geckolib':
      return 'bg-gray-500/50 text-lime-300';
    case 'forge':
      return 'bg-gray-500/50 text-blue-300';
    case 'neoforge':
      return 'bg-gray-500/50 text-orange-300';
    case 'quilt':
      return 'bg-gray-500/50 text-purple-300';
    default:
      return 'bg-purple-500/20 text-purple-300';
  }
};

const latestProject: Project = {
  id: 1,
  title: 'Werewolf Simulation',
  description: 'The sun is shining, the flowers are blooming, and we\'re celebrating the season with a brand new Spring Event! Enjoy limited-time crates, seasonal collectibles, and a new creature joining the world!',
  image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  date: 'Apr 17th, 2025',
  tags: ['Fabric', 'GeckoLib']
};

const ProjectsSection: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setLoaded(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('projects');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const handleViewAll = () => {
    navigate('/projects');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="projects" className="py-20 md:py-32 bg-black px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('projects.title')} <span className="text-purple-400">{t('projects.title1')}</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>

        <div 
          className={`transition-all duration-700 transform ${
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
          }`}
        >
          <div className="bg-gray-900/50 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all duration-300">
            <div className="md:flex items-stretch">
              <div className="md:w-1/2 relative overflow-hidden">
                <img
                  src={latestProject.image}
                  alt={latestProject.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              
              <div className="md:w-1/2 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center text-white/60 text-sm mb-3">
                      <Calendar size={16} className="mr-2" />
                      {latestProject.date}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {latestProject.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {latestProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`text-xs font-medium px-2 py-1 rounded-full ${getTagColor(tag)}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-white/70 text-lg leading-relaxed mb-8">
                    {latestProject.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-between mt-auto">
                  <button
                    onClick={handleViewAll}
                    className="inline-flex items-center text-purple-400 font-medium hover:text-purple-300 transition-colors duration-300"
                  >
                    {t('projects.viewAll')}
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;