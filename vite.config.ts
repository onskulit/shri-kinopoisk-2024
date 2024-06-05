import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');

    return {
        define: {
            'process.env.API_HOST': JSON.stringify(env.API_HOST),
        },
        resolve: {
            alias: {
                '@assets': path.resolve(__dirname, './src/assets'),
                '@pages': path.resolve(__dirname, './src/pages'),
                '@components': path.resolve(__dirname, './src/components'),
                '@helpers': path.resolve(__dirname, './src/helpers'),
                '@hooks': path.resolve(__dirname, './src/hooks'),
                '@store': path.resolve(__dirname, './src/store'),
                '@api': path.resolve(__dirname, './src/api'),
            },
        },
        plugins: [react()],
    };
});
