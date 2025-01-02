import React from 'react';
import { useWidgetRedirect } from '../../hooks/useWidgetRedirect';

interface WidgetFrameProps {
  isLoading: boolean;
}

export function WidgetFrame({ isLoading }: WidgetFrameProps) {
  const { handleFrameLoad } = useWidgetRedirect();

  return (
    <div className="flex justify-center items-center w-full">
      <div 
        className="widget-wrapper p-5 rounded-3xl bg-[#121316] border border-[#191a1d]"
        style={{ width: '1200px', maxWidth: '100%' }}
      >
        <div 
          className="relative w-full rounded-lg overflow-hidden shadow-lg"
          style={{ height: '340px' }}
        >
          <iframe
            id="widgetApiIframe"
            className={`w-full h-full transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            style={{ border: 'none' }}
            src="https://strongmeropower.com/blog/api/widget?adUrl=https://www.strongmeropower.com/blog"
            allowtransparency="true"
            scrolling="no"
            onLoad={handleFrameLoad}
          />
        </div>
      </div>
    </div>
  );
}