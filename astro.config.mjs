// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // Used to generate absolute canonical URLs, sitemap entries, and RSS links.
  site: "https://fastfinalexpenseinsurance.com",
  trailingSlash: "always",
  compressHTML: true,
  integrations: [
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
