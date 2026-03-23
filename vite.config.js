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
        htmlmaker: resolve(__dirname, "src/htmlmaker.html"),
      },
    }
  }
});