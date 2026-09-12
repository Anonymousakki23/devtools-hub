'use client';

import { useEffect } from 'react';

function trackEvent(eventType: string, metadata: Record<string, string> = {}) {
  try {
    const payload = {
      event_type: eventType,
      page_path: window.location.pathname,
      referrer: document.referrer || null,
      user_agent: navigator.userAgent,
      metadata: JSON.stringify(metadata),
    };

    if (navigator.sendBeacon) {
      navigator.sendBeacon('/api/analytics/', JSON.stringify(payload));
    } else {
      fetch('/api/analytics/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        keepalive: true,
      }).catch(() => {});
    }
  } catch {
    // Silent fail - analytics should never break the page
  }
}

export default function AnalyticsTracker() {
  useEffect(() => {
    trackEvent('page_view');

    // Track affiliate link clicks
    document.addEventListener('click', (e) => {
      const link = (e.target as HTMLElement).closest('a');
      if (link && link.hostname !== window.location.hostname) {
        trackEvent('affiliate_click', {
          url: link.href,
          text: link.textContent?.trim().substring(0, 50) || '',
        });
      }
    });

    // Track time on page on unload
    let startTime = Date.now();
    const handleUnload = () => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000);
      if (timeOnPage > 5) {
        trackEvent('time_on_page', { seconds: String(timeOnPage) });
      }
    };
    window.addEventListener('beforeunload', handleUnload);

    return () => {
      window.removeEventListener('beforeunload', handleUnload);
    };
  }, []);

  return null;
}
