import React from 'react';
import { Video } from 'lucide-react';

interface LogoProps {
  className?: string;
}

export function Logo({ className = "text-gray-900" }: LogoProps) {
  return (
    <div className="flex items-center space-x-2">
      <Video className={`h-8 w-8 text-blue-600`} />
      <span className={`text-xl font-bold ${className}`}>WebcinVideos</span>
    </div>
  );
}