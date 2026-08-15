// -----------------------------------------------------------------------
// Schema.org JSON-LD builders.
// Kept as plain functions returning serializable objects so pages/layouts
// can compose exactly the structured data they need — no fake review or
// aggregate rating data is ever generated here.
// -----------------------------------------------------------------------

import { SITE, SERVICE_AREA } from "../data/site";

type JsonLd = Record<string, unknown>;

/** Organization schema — used once, typically in the base layout. */
export function organizationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    // TODO: add "logo" once a production logo asset exists.
    // TODO: add "sameAs" social profile URLs once available.
    description: SITE.description,
    areaServed: {
      "@type": "State",
      name: SERVICE_AREA.stateName,
    },
  };
}

/** WebSite schema — enables sitelinks search box eligibility if a search is ever added. */
export function websiteSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
  };
}

/** Generic WebPage schema for a given route. */
export function webPageSchema(opts: {
  title: string;
  description: string;
  path: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: opts.title,
    description: opts.description,
    url: new URL(opts.path, SITE.url).toString(),
  };
}

/** BreadcrumbList schema. Pass an ordered list of { name, path }. */
export function breadcrumbSchema(
  items: { name: string; path: string }[]
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, SITE.url).toString(),
    })),
  };
}

/** Article schema for blog posts. */
export function articleSchema(opts: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    url: new URL(opts.path, SITE.url).toString(),
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    author: {
      "@type": "Organization",
      name: opts.authorName ?? SITE.name,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
  };
}

/** FAQPage schema. Only use on pages where the visible content matches exactly. */
export function faqSchema(items: { question: string; answer: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
