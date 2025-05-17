import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-10 bg-black border-t border-white/5 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="https://github.com/Zioxs/zioxs.github.io/blob/main/src/logo.png?raw=true" 
              alt="Logo" 
              className="h-12 w-auto"
            />
          </Link>
        </div>
        
        <div className="text-white/50 text-sm text-center flex-1">
          &copy; {year} Zioxs. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;