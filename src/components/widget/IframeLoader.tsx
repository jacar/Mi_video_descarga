import React from 'react';

interface IframeLoaderProps {
  isLoading: boolean;
}

export function IframeLoader({ isLoading }: IframeLoaderProps) {
  if (!isLoading) return null;
  
  return (
    <div className="text-center py-8">
      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600 mx-auto"></div>
      <p className="mt-3 text-gray-600 font-medium">Cargando el visualizador de videos...</p>
    </div>
  );
}