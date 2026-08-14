// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // Used to generate absolute canonical URLs, sitemap entries, and RSS links.
  site: "https://fastfinalexpenseinsurance.com",
  trailingSlash: "always",
  compressHTML: true,
});
