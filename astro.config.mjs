import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: "dracula",
    },
    extendDefaultPlugins: true,
    remarkPlugins: [],
    rehypePlugins: [],
  },
  site: "https://karrot96.github.io",
  output: "static",
  base: "/",
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@layouts": "./src/layouts",
      },
    },
  },
});
