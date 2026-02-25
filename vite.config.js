import { resolve } from 'path';
import { defineConfig } from "vite";

export default defineConfig({
  base: '',
  root: resolve(__dirname, 'src/'),
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        home: resolve(__dirname, "src/index.html"),
        about: resolve(__dirname, "src/pages/about.html"),
        contact: resolve(__dirname, "src/pages/contact/index.html"),
      },
    }
  }
});