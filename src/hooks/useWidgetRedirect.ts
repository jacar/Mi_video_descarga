import { useCallback } from 'react';
import { logger } from '../utils/logger';

export function useWidgetRedirect() {
  const handleFrameLoad = useCallback((event: React.SyntheticEvent<HTMLIFrameElement>) => {
    try {
      logger.info('Widget frame loaded');
      // Add any additional frame load handling logic here
    } catch (error) {
      logger.error('Error handling frame load:', error);
    }
  }, []);

  return { handleFrameLoad };
}