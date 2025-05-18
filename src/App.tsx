import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import WerewolfProject from './pages/projects/WerewolfProject';
import MythicalProject from './pages/projects/MythicalProject';
import { TranslationProvider } from './contexts/TranslationContext';

function App() {
  useEffect(() => {
    document.title = 'Zioxs | Portfolio';
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <TranslationProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/1" element={<WerewolfProject />} />
          <Route path="/projects/2" element={<MythicalProject />} />
        </Routes>
      </Router>
    </TranslationProvider>
  );
}

export default App;