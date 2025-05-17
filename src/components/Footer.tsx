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
              src="https://cdn.discordapp.com/attachments/861260756485406721/1371329233799872622/zi_logo_64_slim_nobg_white.png?ex=6822bd5f&is=68216bdf&hm=66f3a3a503e6a86fc0489388ca2fa27b05e97d96f80335ef23c609a44d598b85&" 
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