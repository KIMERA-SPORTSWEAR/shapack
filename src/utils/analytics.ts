// Google Analytics 4 (GA4) & Ads Tracking Helper for SHAPACK

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Track custom events (e.g. form submissions, button clicks)
 */
export const trackEvent = (
  eventName: string,
  params?: Record<string, string | number | boolean>
) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  } else {
    // Silently fall back if gtag is not yet loaded or blocked by adblock
    console.debug(`[Analytics Event] ${eventName}:`, params);
  }
};

/**
 * Track Quote / Devis Lead Conversion
 */
export const trackLeadConversion = (details: {
  reference: string;
  category?: string;
  companyName?: string;
}) => {
  trackEvent('generate_lead', {
    event_category: 'Devis',
    event_label: details.category || 'General',
    quote_ref: details.reference,
    currency: 'EUR',
    value: 50.0 // Nominal value for ad algorithm optimization
  });
};

/**
 * Track Direct Contact Intent (Phone / Email / WhatsApp)
 */
export const trackContactClick = (method: 'phone' | 'email' | 'whatsapp' | 'instagram') => {
  trackEvent('contact_click', {
    contact_method: method
  });
};
