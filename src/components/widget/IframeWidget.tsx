import React from 'react';
import { Instructions } from './Instructions';
import { WidgetFrame } from './WidgetFrame';

interface IframeWidgetProps {
  isLoading: boolean;
}

export function IframeWidget({ isLoading }: IframeWidgetProps) {
  return (
    <div className="relative bg-white p-6 rounded-lg">
      <Instructions />
      <WidgetFrame isLoading={isLoading} />
    </div>
  );
}