import { useEffect, useState } from 'react';
import { logger } from '../utils/logger';

export function useIframeResizer() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.9/iframeResizer.min.js';
    script.async = true;

    const initializeResizer = () => {
      try {
        // @ts-ignore
        iFrameResize({
          log: false,
          checkOrigin: false,
          onInit: () => {
            setIsLoading(false);
            logger.info('Widget API initialized successfully');
          },
          onResized: () => {
            logger.info('Widget resized');
          },
          heightCalculationMethod: 'lowestElement',
          sizeWidth: true,
          scrolling: 'omit'
        }, '#widgetApiIframe');
      } catch (err) {
        setError('Error al inicializar el widget');
        logger.error('Widget initialization error:', err);
      }
    };

    script.onload = initializeResizer;
    script.onerror = () => {
      setError('Error al cargar los recursos necesarios');
      logger.error('Script loading failed');
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return { isLoading, error };
}