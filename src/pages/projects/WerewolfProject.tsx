import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, ArrowLeft, Moon, Sun, Star } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useTranslation } from '../../contexts/TranslationContext';

const WerewolfProject: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [loaded, setLoaded] = useState(false);
  const [activePhase, setActivePhase] = useState<'human' | 'werewolf'>('human');

  useEffect(() => {
    setLoaded(true);
    window.scrollTo(0, 0);
  }, []);

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
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 z-10 rounded-2xl" />
              <img
                src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt={t('projects.cards.werewolf.title')}
                className="w-full h-[400px] object-cover rounded-2xl"
              />
              <div className="absolute bottom-0 left-0 p-8 z-20">
                <div className="flex items-center text-white/80 text-sm mb-2">
                  <Calendar size={16} className="mr-2" />
                  Dec 20th, 2023
                </div>
                <h1 className="text-4xl font-bold text-white mb-4">
                  {t('projects.cards.werewolf.title')}
                </h1>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm font-medium px-3 py-1 rounded-full bg-gray-500/50 text-beige-300">
                    Fabric
                  </span>
                  <span className="text-sm font-medium px-3 py-1 rounded-full bg-gray-500/50 text-lime-300">
                    GeckoLib
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8">
              <div className="flex justify-center space-x-4 mb-8">
                <button
                  onClick={() => setActivePhase('human')}
                  className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                    activePhase === 'human'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-800/50 text-white/70'
                  }`}
                >
                  <Sun size={20} className="mr-2" />
                  Human Form
                </button>
                <button
                  onClick={() => setActivePhase('werewolf')}
                  className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                    activePhase === 'werewolf'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-800/50 text-white/70'
                  }`}
                >
                  <Moon size={20} className="mr-2" />
                  Werewolf Form
                </button>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gray-800/30 rounded-xl p-6">
                    <Star className="text-purple-400 mb-4" size={24} />
                    <h3 className="text-lg font-semibold mb-2">Transformation</h3>
                    <p className="text-white/70">Dynamic transformation system with smooth animations and particle effects</p>
                  </div>
                  <div className="bg-gray-800/30 rounded-xl p-6">
                    <Star className="text-purple-400 mb-4" size={24} />
                    <h3 className="text-lg font-semibold mb-2">Abilities</h3>
                    <p className="text-white/70">Unique abilities for each form with custom animations and effects</p>
                  </div>
                  <div className="bg-gray-800/30 rounded-xl p-6">
                    <Star className="text-purple-400 mb-4" size={24} />
                    <h3 className="text-lg font-semibold mb-2">Progression</h3>
                    <p className="text-white/70">Level up your werewolf abilities and unlock new powers</p>
                  </div>
                </div>

                <div className="prose prose-invert max-w-none">
                  <p className="text-lg text-white/70 leading-relaxed">
                    {t('projects.cards.werewolf.content')}
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

export default WerewolfProject;