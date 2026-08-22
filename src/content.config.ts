import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

export const BLOG_CATEGORIES = [
  { slug: "guides", label: "Guides" },
  { slug: "cost-pricing", label: "Cost & Pricing" },
  { slug: "no-medical-exam", label: "No Medical Exam & Guaranteed Issue" },
  { slug: "seniors", label: "Seniors" },
  { slug: "health-eligibility", label: "Health & Eligibility" },
  { slug: "city-guides", label: "City Guides" },
  { slug: "burial-insurance", label: "Burial Insurance" },
  { slug: "comparisons", label: "Comparisons" },
] as const;

const categorySlug = z.enum(
  BLOG_CATEGORIES.map((c) => c.slug) as [string, ...string[]]
);

// Original SVG illustration variants (see src/components/blog/hero-art/) —
// no photographic stock images are used, so nothing here depends on
// external image licensing.
const heroArtVariant = z.enum(["waves", "skyline", "palms-sunset", "palms-day"]);

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default("Florida Final Expense Insurance"),
    category: categorySlug,
    heroArt: heroArtVariant.default("waves"),
    // Set true to keep a post out of the blog index and sitemap while it's
    // still being written/reviewed.
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
