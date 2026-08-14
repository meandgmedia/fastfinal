// -----------------------------------------------------------------------
// Central site configuration.
// Update brand, navigation, and contact details here — components pull
// from this single source instead of hard-coding copy.
// -----------------------------------------------------------------------

export const SITE = {
  name: "Fast Final Expense Insurance",
  shortName: "Fast Final Expense",
  domain: "fastfinalexpenseinsurance.com",
  url: "https://fastfinalexpenseinsurance.com",
  tagline: "Final Expense Insurance Made Fast & Simple",
  description:
    "Get your final expense insurance quote in minutes. Compare your options, apply online, and get covered quickly — coverage available for eligible applicants.",
  locale: "en_US",
  // TODO: Replace with the real support/sales phone number once available.
  phone: {
    display: "(000) 000-0000",
    tel: "+10000000000",
  },
  // TODO: Replace with the real contact inbox once available.
  email: "hello@fastfinalexpenseinsurance.com",
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
