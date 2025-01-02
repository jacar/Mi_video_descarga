import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DownloadWidget } from './components/DownloadWidget';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { ErrorBoundary } from './utils/errorBoundary';
import { logger } from './utils/logger';

function App() {
  logger.info('App rendering');

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <Hero />
        <div id="download-widget" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
          <ErrorBoundary>
            <DownloadWidget />
          </ErrorBoundary>
        </div>
        <Features />
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;