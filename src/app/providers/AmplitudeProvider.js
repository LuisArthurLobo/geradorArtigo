'use client';

import { init } from '@amplitude/analytics-browser';
import { useEffect } from 'react';

export function AmplitudeProvider({ children }) {
  useEffect(() => {
    // Initialize Amplitude with your API key
    init(process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY || '', {
      defaultTracking: {
        sessions: true,
        pageViews: true,
        formInteractions: true,
        fileDownloads: true,
      },
    });
  }, []);

  return children;
}
