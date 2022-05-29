import path from 'path';
import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import checker from 'vite-plugin-checker';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';
import vueI18n from '@intlify/vite-plugin-vue-i18n';

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 8080,
    },

    plugins: [
        vue({
            template: {
                transformAssetUrls,
            },
        }),
        vueI18n({
            include: path.resolve(__dirname, './src/locales/**'),
        }),
        quasar({
            sassVariables: 'src/assets/quasar.scss',
        }),
        checker({ vueTsc: true }),
    ],

    cacheDir: '../../node_modules/.vite',

    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },

    build: {
        outDir: '../../_dist/web',
    },
});
