// -----------------------------------------------------------------------
// Central site configuration.
// Update brand, navigation, and contact details here — components pull
// from this single source instead of hard-coding copy.
// -----------------------------------------------------------------------

export const SITE = {
  name: "Florida Final Expense Insurance",
  shortName: "Florida Final Expense",
  domain: "fastfinalexpenseinsurance.com",
  url: "https://fastfinalexpenseinsurance.com",
  tagline: "Florida Final Expense Insurance, Made Fast & Simple",
  description:
    "Get your Florida final expense insurance quote in minutes. Compare options, apply online, and get covered quickly — for eligible Florida residents.",
  locale: "en_US",
  // TODO: Replace with the real support/sales phone number once available.
  phone: {
    display: "(000) 000-0000",
    tel: "+10000000000",
  },
  // TODO: Replace with the real contact inbox once available.
  email: "hello@fastfinalexpenseinsurance.com",
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
