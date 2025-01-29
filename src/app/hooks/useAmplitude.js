'use client';

import { track } from '@amplitude/analytics-browser';

export function useAmplitude() {
  const logEvent = (eventName, eventProperties = {}) => {
    try {
      track(eventName, eventProperties);
    } catch (error) {
      console.error('Error logging event to Amplitude:', error);
    }
  };

  return { logEvent };
}
