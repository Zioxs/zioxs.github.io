import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, ArrowLeft, Book, Sword, Shield } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useTranslation } from '../../contexts/TranslationContext';

const MythicalProject: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [loaded, setLoaded] = useState(false);
  const [selectedCreature, setSelectedCreature] = useState('dragon');

  useEffect(() => {
    setLoaded(true);
    window.scrollTo(0, 0);
  }, []);

  const creatures = [
    { id: 'dragon', name: 'Dragon' },
    { id: 'phoenix', name: 'Phoenix' },
    { id: 'griffin', name: 'Griffin' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => navigate('/projects')}
            className="flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300 mb-8"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Projects
          </button>

          <div className={`space-y-8 transition-all duration-700 ${
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/5939401/pexels-photo-5939401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt={t('projects.cards.ecommerce.title')}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="max-w-2xl">
                  <div className="flex items-center text-white/80 text-sm mb-2">
                    <Calendar size={16} className="mr-2" />
                    Nov 23rd, 2023
                  </div>
                  <h1 className="text-4xl font-bold text-white mb-4">
                    {t('projects.cards.ecommerce.title')}
                  </h1>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-gray-500/50 text-blue-300">
                      Forge
                    </span>
                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-gray-500/50 text-lime-300">
                      GeckoLib
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-1 space-y-6">
                <div className="bg-gray-900/50 backdrop-blur-sm border border-white/5 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Book size={20} className="mr-2 text-purple-400" />
                    Bestiary
                  </h3>
                  <div className="space-y-2">
                    {creatures.map(creature => (
                      <button
                        key={creature.id}
                        onClick={() => setSelectedCreature(creature.id)}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                          selectedCreature === creature.id
                            ? 'bg-purple-600/20 text-purple-400'
                            : 'hover:bg-gray-800/50 text-white/70'
                        }`}
                      >
                        {creature.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-900/50 backdrop-blur-sm border border-white/5 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Shield size={20} className="mr-2 text-purple-400" />
                    Features
                  </h3>
                  <ul className="space-y-3 text-white/70">
                    <li className="flex items-center">
                      <Sword size={16} className="mr-2 text-purple-400" />
                      Custom AI Behaviors
                    </li>
                    <li className="flex items-center">
                      <Sword size={16} className="mr-2 text-purple-400" />
                      Unique Abilities
                    </li>
                    <li className="flex items-center">
                      <Sword size={16} className="mr-2 text-purple-400" />
                      Interactive Elements
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-span-2 bg-gray-900/50 backdrop-blur-sm border border-white/5 rounded-xl p-8">
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg text-white/70 leading-relaxed">
                    {t('projects.cards.ecommerce.content')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MythicalProject;