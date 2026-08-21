// =============================================================================
// ANALYTICS CONFIGURATION
// -----------------------------------------------------------------------------
// This site ships with a complete analytics ARCHITECTURE but no live tracking
// IDs — nothing fires, and no third-party script loads, until real IDs are
// added as environment variables. That keeps the site fast and free of dead
// network requests until analytics is actually turned on.
//
// TO TURN ON GOOGLE ANALYTICS (GA4):
//   Set PUBLIC_GA4_MEASUREMENT_ID as a Cloudflare Pages environment variable,
//   e.g. G-XXXXXXXXXX. See https://support.google.com/analytics/answer/9539598
//
// TO TURN ON GOOGLE ADS CONVERSION TRACKING:
//   Set PUBLIC_GOOGLE_ADS_ID (e.g. AW-XXXXXXXXX). Once set, per-event
//   conversion labels can be added to the gtag('event', ...) calls in
//   AnalyticsHead.astro / TrackingScript.astro as Google Ads provides them.
//
// TO TURN ON META (FACEBOOK/INSTAGRAM) PIXEL:
//   Set PUBLIC_META_PIXEL_ID.
//
// GOOGLE SEARCH CONSOLE:
//   Verifying via a DNS TXT record on the domain is recommended and requires
//   no code change. If you'd rather verify with the HTML meta tag method,
//   set PUBLIC_GSC_VERIFICATION to the content value Search Console gives
//   you — it will be rendered automatically (see SEO.astro).
//
// Copy .env.example to .env.local for local testing, or set these directly
// in the Cloudflare Pages dashboard under Settings → Environment variables.
// Never commit real values to the repository.
// =============================================================================

export const ANALYTICS_IDS = {
  ga4: import.meta.env.PUBLIC_GA4_MEASUREMENT_ID as string | undefined,
  googleAds: import.meta.env.PUBLIC_GOOGLE_ADS_ID as string | undefined,
  metaPixel: import.meta.env.PUBLIC_META_PIXEL_ID as string | undefined,
  gscVerification: import.meta.env.PUBLIC_GSC_VERIFICATION as string | undefined,
};

/**
 * Canonical conversion event names used across the site. Keeping these in
 * one place means every `data-track-event` attribute and every manual
 * `trackConversionEvent()` call stays consistent with what's documented
 * here — and with whatever's eventually configured in GA4 / Google Ads /
 * Meta as a conversion event.
 */
export const CONVERSION_EVENTS = {
  /** Any click on a primary "Get a Quote" style CTA, site-wide. */
  quoteCtaClick: "quote_cta_click",
  /** Fires once, the first time a visitor interacts with the quote rater. */
  quoteStarted: "quote_started",
  /**
   * Not yet wired up — fires when the Back Nine quote rater returns a
   * completed quote. Call `trackConversionEvent(CONVERSION_EVENTS.quoteCompleted)`
   * from that integration once it exists (see QuoteRater.astro).
   */
  quoteCompleted: "quote_completed",
  /** Not yet wired up — fires when an application is started in the Back Nine widget. */
  applicationStarted: "application_started",
  /** Not yet wired up — fires when an application is submitted/completed. */
  applicationCompleted: "application_completed",
  /** Any click on a phone number link, site-wide. */
  phoneClick: "phone_click",
  /** Fires once, on a confirmed successful contact form submission (see ContactForm.astro). */
  contactFormSubmitted: "contact_form_submitted",
} as const;

export type ConversionEventName =
  (typeof CONVERSION_EVENTS)[keyof typeof CONVERSION_EVENTS];
