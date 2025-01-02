import React from 'react';
import { Github, Home, User } from 'lucide-react';
import { Logo } from './Logo';

export function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Logo />
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href="https://www.webcincodev.com/blog" 
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Home size={20} />
              <span>Home</span>
            </a>
            <a 
              href="https://www.strongmeropower.com/blog" 
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <User size={20} />
              <span>Sobre Mi</span>
            </a>
            <a 
              href="https://www.webcincodev.com/blog" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}