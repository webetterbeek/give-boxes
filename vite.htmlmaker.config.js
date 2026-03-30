import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    base: '',
    root: resolve(__dirname, 'src/htmlmaker'),
    server: {
        fs: {
            allow: [resolve(__dirname, 'src')]
        }
    },
    resolve: {
        alias: {
            '/js': resolve(__dirname, 'src/js')
        }
    },
    build: {
        outDir: '../dist',
        emptyOutDir: true,
    },
});