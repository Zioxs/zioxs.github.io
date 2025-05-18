import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTranslation } from '../contexts/TranslationContext';

interface Project {
  id: number;
  titleKey: string;
  descriptionKey: string;
  image: string;
  date: string;
  tags: string[];
  content?: string;
}

const projects: Project[] = [
  {
    id: 1,
    titleKey: 'projects.cards.werewolf.title',
    descriptionKey: 'projects.cards.werewolf.description',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: 'Dec 20th, 2023',
    tags: ['Fabric', 'GeckoLib'],
    content: 'projects.cards.werewolf.content'
  },
  {
    id: 2,
    titleKey: 'projects.cards.ecommerce.title',
    descriptionKey: 'projects.cards.ecommerce.description',
    image: 'https://images.pexels.com/photos/5939401/pexels-photo-5939401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: 'Nov 23rd, 2023',
    tags: ['Forge', 'GeckoLib'],
    content: 'projects.cards.ecommerce.content'
  },
  {
    id: 3,
    titleKey: 'projects.cards.task.title',
    descriptionKey: 'projects.cards.task.description',
    image: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: 'Oct 16th, 2023',
    tags: ['NeoForge', 'Quilt'],
    content: 'projects.cards.task.content'
  },
  {
    id: 4,
    titleKey: 'projects.cards.health.title',
    descriptionKey: 'projects.cards.health.description',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: 'Oct 8th, 2023',
    tags: ['Fabric', 'Forge', 'GeckoLib'],
    content: 'projects.cards.health.content'
  }
];

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

const ProjectPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [loaded, setLoaded] = useState(false);

  const project = projects.find(p => p.id === Number(id));

  useEffect(() => {
    setLoaded(true);
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project not found</h1>
          <button
            onClick={() => navigate('/projects')}
            className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

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
            <div className="rounded-2xl overflow-hidden">
              <img
                src={project.image}
                alt={t(project.titleKey)}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="space-y-6">
              <div className="flex items-center text-white/60 text-sm">
                <Calendar size={16} className="mr-2" />
                {project.date}
              </div>

              <h1 className="text-4xl font-bold text-white">
                {t(project.titleKey)}
              </h1>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`text-sm font-medium px-3 py-1 rounded-full ${getTagColor(tag)}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-white/70 leading-relaxed">
                  {t(project.descriptionKey)}
                </p>
                {project.content && (
                  <p className="text-lg text-white/70 leading-relaxed mt-4">
                    {t(project.content)}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectPage;