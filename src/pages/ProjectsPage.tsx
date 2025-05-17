import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ExternalLink, Github, Calendar } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  tags: string[];
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

const allProjects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform with dynamic product listings, cart functionality, and secure checkout.',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: 'Dec 20th, 2023',
    tags: ['Fabric', 'GeckoLib']
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A minimal yet powerful task management application with drag-and-drop functionality and team collaboration.',
    image: 'https://images.pexels.com/photos/5939401/pexels-photo-5939401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: 'Nov 23rd, 2023',
    tags: ['Forge', 'GeckoLib']
  },
  {
    id: 3,
    title: 'Health & Fitness Tracker',
    description: 'A comprehensive health tracking platform that monitors activity, nutrition, and provides personalized insights.',
    image: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: 'Oct 16th, 2023',
    tags: ['NeoForge', 'Quilt']
  },
  {
    id: 4,
    title: 'AI Content Generator',
    description: 'An AI-powered content generation tool that creates high-quality articles, social media posts, and more.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: 'Oct 8th, 2023',
    tags: ['Fabric', 'Forge', 'GeckoLib']
  }
];

const ProjectsPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loaded, setLoaded] = useState(false);
  const projectsPerPage = 5;
  const totalPages = Math.ceil(allProjects.length / projectsPerPage);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 ${
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            All <span className="text-purple-400">Projects</span>
          </h1>
          
          <div className="space-y-8">
            {allProjects.map((project, index) => (
              <article
                key={project.id}
                className={`bg-gray-900/50 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all duration-700 ${
                  loaded 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-16 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="md:flex">
                  <div className="md:w-2/5 relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover aspect-video md:aspect-auto transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  
                  <div className="p-6 md:w-3/5">
                    <div className="flex items-center text-white/60 text-sm mb-3">
                      <Calendar size={16} className="mr-2" />
                      {project.date}
                    </div>
                    
                    <h2 className="text-2xl font-bold text-white mb-3">
                      {project.title}
                    </h2>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className={`text-xs font-medium px-2 py-1 rounded-full ${getTagColor(tag)}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <p className="text-white/70 mb-6">
                      {project.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {totalPages > 1 && (
            <div className="flex justify-center mt-12 space-x-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    currentPage === page
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-900/50 text-white/70 hover:bg-purple-600/20'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectsPage;