import React from 'react';
import { Zap, Shield, Clock, Download } from 'lucide-react';

const features = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Súper Rápido',
    description: 'Descarga videos a máxima velocidad con nuestros servidores optimizados'
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Descargas Seguras',
    description: 'Tu privacidad y seguridad son nuestra principal prioridad'
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Disponible 24/7',
    description: 'Nuestro servicio está disponible todo el día, todos los días'
  },
  {
    icon: <Download className="w-6 h-6" />,
    title: 'Múltiples Formatos',
    description: 'Elige entre varias opciones de calidad y formatos de video'
  }
];

export function Features() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">¿Por qué elegir WebcinVideos?</h2>
          <p className="mt-4 text-lg text-gray-600">Experimenta el mejor servicio de descarga de videos</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-blue-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}