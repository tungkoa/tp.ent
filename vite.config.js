// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    open: "/src/pages/index.html",
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve("./src/pages/index.html"),
        nested: resolve("./src/pages/recruitment.html"),
      },
    },
  },
});
