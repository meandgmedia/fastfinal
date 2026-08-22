// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  // Used to generate absolute canonical URLs, sitemap entries, and RSS links.
  site: "https://floridafinalexpense.com",
  trailingSlash: "always",
  compressHTML: true,
  integrations: [
    mdx(),
    sitemap({
      // The 404 page and not-yet-published legal placeholder pages aren't
      // real, indexable content yet — keep them out of the sitemap.
      filter: (page) =>
        !page.includes("/404") &&
        !page.includes("/privacy-policy/") &&
        !page.includes("/terms-of-use/") &&
        !page.includes("/insurance-disclosures/"),
    }),
  ],
});
