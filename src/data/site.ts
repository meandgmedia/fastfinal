// -----------------------------------------------------------------------
// Central site configuration.
// Update brand, navigation, and contact details here — components pull
// from this single source instead of hard-coding copy.
// -----------------------------------------------------------------------

export const SITE = {
  name: "Florida Final Expense Insurance",
  shortName: "Florida Final Expense",
  domain: "floridafinalexpense.com",
  url: "https://floridafinalexpense.com",
  tagline: "Florida Final Expense Insurance, Made Fast & Simple",
  description:
    "Get your Florida final expense insurance quote in minutes. Compare options, apply online, and get covered quickly — for eligible Florida residents.",
  locale: "en_US",
  phone: {
    display: "772-226-0875",
    tel: "+17722260875",
  },
  email: "hello@floridafinalexpense.com",
} as const;

// Licensed/service area. Referenced by compliance messaging across the site
// (hero, quote page, footer disclaimer, About, Insurance Disclosures, and
// Organization schema) so the scope of service only needs to be updated in
// one place if it ever expands beyond Florida.
export const SERVICE_AREA = {
  stateName: "Florida",
  stateAbbr: "FL",
  shortDisclosure: "Currently licensed to offer coverage in Florida only.",
} as const;

// The licensed producer behind this site. Referenced by the footer
// disclaimer, About page, and Insurance Disclosures page so licensing
// info only needs to be updated in one place.
export const LICENSED_AGENT = {
  name: "Matt Saffian",
  licenseLabel: "Florida Resident License #G273626",
} as const;

// Sister site offering full life insurance options (whole, term, etc.)
// beyond the final expense / burial focus of this site. Referenced on the
// Senior Life Insurance page.
export const FULL_LIFE_INSURANCE_URL = "https://florida-life-insurance.com";

// Web3Forms access key powering the contact form (src/components/forms/ContactForm.astro).
// Web3Forms access keys are designed to be used client-side — the form
// submits directly from the browser with no backend of Florida Final
// Expense's own, so this isn't a secret the way an API key would be. See
// https://web3forms.com for how the key works.
export const WEB3FORMS_ACCESS_KEY = "601cd7c9-15f7-4e95-890b-19aa85032c30";

export type NavLink = {
  label: string;
  href: string;
};

export const PRIMARY_NAV: NavLink[] = [
  { label: "Final Expense Insurance", href: "/final-expense-insurance/" },
  { label: "Burial Insurance", href: "/burial-insurance/" },
  { label: "Senior Life Insurance", href: "/senior-life-insurance/" },
  { label: "Blog", href: "/blog/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];

export const FOOTER_NAV: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Final Expense Insurance", href: "/final-expense-insurance/" },
  { label: "Burial Insurance", href: "/burial-insurance/" },
  { label: "Senior Life Insurance", href: "/senior-life-insurance/" },
  { label: "Get a Quote", href: "/get-a-quote/" },
  { label: "Blog", href: "/blog/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];

export const FOOTER_LEGAL: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Terms of Use", href: "/terms-of-use/" },
  { label: "Insurance Disclosures", href: "/insurance-disclosures/" },
];

export const RELATED_COVERAGE: NavLink[] = [
  { label: "Burial Insurance", href: "/burial-insurance/" },
  { label: "Funeral Insurance", href: "/final-expense-insurance/" },
  { label: "Cremation Insurance", href: "/final-expense-insurance/" },
  { label: "Senior Life Insurance", href: "/senior-life-insurance/" },
  { label: "Guaranteed Issue Life Insurance", href: "/final-expense-insurance/" },
  { label: "No Medical Exam Life Insurance", href: "/final-expense-insurance/" },
];

export const CTA = {
  primary: "Get My Free Quote",
  primaryShort: "Get a Free Quote",
  secondary: "See Your Options",
  tertiary: "Start My Application",
  learnMore: "Learn About Final Expense Insurance",
  quoteHref: "/get-a-quote/",
} as const;

// The four-step journey used throughout the site (hero, How It Works,
// footer, etc.) — kept in one place so the wording stays consistent.
export const JOURNEY_STEPS = [
  { label: "Quote", description: "Answer a few quick questions." },
  { label: "Compare", description: "See your available options." },
  { label: "Apply", description: "Complete your application online." },
  { label: "Covered", description: "Get covered — quickly, if eligible." },
] as const;
