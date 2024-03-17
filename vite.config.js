import { defineConfig } from 'vite'
import path from 'path';

const ROOT = path.resolve('../../../')
const BASE = __dirname.replace(ROOT, '');

export default defineConfig(() => ({

    base: '',
    server:{
        protocol : "ws",
        host: "localhost",
        port: 5173
    },
    build: {
        emptyOutDir: false,
        manifest: true,
        outDir: 'assets',
        minify: false,
        rollupOptions: {
            input: [
                'resources/js/app.js',
                'resources/scss/app.scss',
            ],
            output: {
                entryFileNames: `[name].js`,
                chunkFileNames: `[name].js`,
                assetFileNames: `[name].[ext]`
            }
        }
    },
    resolve: {
        alias: [
            {
                find: /~(.+)/,
                replacement: process.cwd() + '/node_modules/$1'
            }
        ]
    }
}))
