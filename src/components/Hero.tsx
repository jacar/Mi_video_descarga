import React from 'react';
import { Download, Play } from 'lucide-react';

export function Hero() {
  const handleDownloadClick = () => {
    window.location.href = 'https://www.webcincodev.com/blog';
  };

  const handleHowItWorksClick = () => {
    const widgetSection = document.getElementById('download-widget');
    if (widgetSection) {
      widgetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-20 md:py-28">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              WebcinVideos
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
              Descarga tus videos favoritos de forma rápida y segura
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={handleDownloadClick}
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg flex items-center gap-2 transition-colors"
              >
                <Download size={20} />
                Comenzar Descarga
              </button>
              <button
                onClick={handleHowItWorksClick}
                className="bg-white/15 hover:bg-white/20 text-white px-8 py-3 rounded-lg flex items-center gap-2 backdrop-blur-sm transition-colors"
              >
                <Play size={20} />
                Cómo Funciona
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}