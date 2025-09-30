// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://mapea.cr',
    output: 'static',
    compressHTML: true,
    integrations: [
        react(), 
        tailwind(),
        sitemap({
            filter: (page) => !page.includes('404'),
            changefreq: 'monthly',
            priority: 0.7,
            lastmod: new Date(),
        })
    ],
    vite: {
        assetsInclude: ['**/*.glb', '**/*.gltf', '**/*.hdr'],
        optimizeDeps: {
            include: ['three', '@react-three/fiber', '@react-three/drei']
        },
        build: {
            rollupOptions: {
                output: {
                    manualChunks: {
                        // Separate Three.js into its own chunk
                        'three': ['three', '@react-three/fiber', '@react-three/drei'],
                        // Separate UI components
                        'ui': ['clsx'],
                        // Separate form libraries
                        'forms': ['react-hook-form']
                    }
                }
            },
            chunkSizeWarningLimit: 1000
        }
    }
});

