import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import vercel from '@astrojs/vercel/serverless';
import react from "@astrojs/react";

export default defineConfig({
  integrations: [tailwind(), react()],
  output: "server",
  adapter: vercel(),
});
