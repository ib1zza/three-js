// vite.config.js
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        basics: resolve(__dirname, "pages/basics.html"),
        solarSystem: resolve(__dirname, "pages/solarSystem.html"),
      },
    },
  },
});
