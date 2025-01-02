import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorDisplayProps {
  message: string;
}

export function ErrorDisplay({ message }: ErrorDisplayProps) {
  return (
    <div className="flex items-center gap-3 p-4 bg-red-50 rounded-lg border border-red-200">
      <AlertCircle className="w-6 h-6 text-red-500" />
      <p className="text-red-700 font-medium">
        {message === 'Card initialization failed' ? 'Error al inicializar el visualizador' : 
         message === 'Failed to load required resources' ? 'Error al cargar los recursos necesarios' : 
         'Ha ocurrido un error inesperado'}
      </p>
    </div>
  );
}