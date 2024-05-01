import { defineConfig, passthroughImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/serverless";

import { remarkReadingTime } from "./src/remarkReadingTime";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  image: {
    service: passthroughImageService(),
  },
  output: "server",
  adapter: vercel(),
});
