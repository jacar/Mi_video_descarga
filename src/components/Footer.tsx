import React from 'react';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2">
              <Logo className="text-white" />
            </div>
            <p className="mt-4 text-gray-400">
              Tu plataforma confiable para descargar videos de manera rápida y segura.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.webcincodev.com/blog" className="text-gray-400 hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="https://www.strongmeropower.com/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Desarrollo</h3>
            <p className="text-gray-400">
              Desarrollado por{' '}
              <a 
                href="https://www.webcincodev.com/blog" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                webcincodev.com
              </a>
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} WebcinVideos. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}