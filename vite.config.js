import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import laravel from 'vite-plugin-laravel'

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.js',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    build: {
        rollupOptions: {
            external: ['@headlessui/vue']
        }
    }
})
