import { sentryVitePlugin } from '@sentry/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import type { UserConfig } from 'vite';

const authToken = process.env.SENTRY_AUTH_TOKEN;

const getLastFolderName = (path: string) => path.split('/').at(-2);

// https://vitejs.dev/config/
// eslint-disable-next-line import/no-default-export
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: (chunkInfo) => {
          // the primary goal of this function is to end up with fewer js chunks that are names index.hash.js
          // this makes the "your chunk is too big reporting" on github prs more useful. bc it will show the name of the chunk.
          let folderName = '';
          if (chunkInfo.name === 'index' && chunkInfo.facadeModuleId) {
            folderName = getLastFolderName(chunkInfo.facadeModuleId) || '';
          }

          return `assets/${folderName}[name].[hash].js`;
        },
      },
    },
    sourcemap: 'hidden',
  },
  plugins: [
    react(),
    tsconfigPaths(),
    sentryVitePlugin({
      authToken,
      org: 'with-ours',
      project: 'web-therapy',
      silent: true,
      telemetry: false,
    }),
  ],
  publicDir: './public',
  resolve: {
    alias: [{ find: './runtimeConfig', replacement: './runtimeConfig.browser' }],
  },
  server: {
    headers: {
      // can revert back whenever we do zoom in app again, but we will have to put a Cloudfront distro infront of the s3 download bucket
      'Cross-Origin-Embedder-Policy': 'unsafe-none',
      'Cross-Origin-Opener-Policy': 'same-origin',
    },
  },
  test: {
    coverage: { exclude: ['cdk/*', 'bin/*'] },
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.ts',
  },
} as UserConfig);
