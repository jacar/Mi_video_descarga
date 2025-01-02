import React from 'react';
import { IframeLoader } from './widget/IframeLoader';
import { ErrorDisplay } from './widget/ErrorDisplay';
import { IframeWidget } from './widget/IframeWidget';
import { useIframeResizer } from '../hooks/useIframeResizer';

export function DownloadWidget() {
  const { isLoading, error } = useIframeResizer();

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Download Videos
        </h2>
        {error ? (
          <ErrorDisplay message={error} />
        ) : (
          <>
            <IframeLoader isLoading={isLoading} />
            <IframeWidget isLoading={isLoading} />
          </>
        )}
      </div>
    </div>
  );
}
