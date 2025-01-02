import React from 'react';
import { Info } from 'lucide-react';

export function Instructions() {
  return (
    <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
      <div className="flex items-center gap-2 text-blue-700">
        <Info className="w-5 h-5" />
        <h3 className="font-semibold">Instrucciones</h3>
      </div>
      <ul className="mt-2 text-blue-600 list-disc list-inside space-y-1">
        <li>Pega el enlace del video que deseas descargar</li>
        <li>Selecciona el formato y calidad deseada</li>
        <li>Haz clic en "Descargar" y espera a que termine el proceso</li>
      </ul>
    </div>
  );
}