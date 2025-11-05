// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://brincao.com.br",
  prefetch: {
    prefetchAll: true,
  },
  image: {
    responsiveStyles: true,
    layout: "constrained",
  },
});
